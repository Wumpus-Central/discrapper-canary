"use strict";
n.d(t, { A: () => A });
var i = n(158390),
    r = n(439372),
    a = n(734057),
    s = n(568548),
    l = n(309010),
    o = n(935208),
    d = n(828488),
    c = n(623562),
    u = n(619065),
    _ = n(575279);
class E extends r.A {
    visibleTopMessageId = null;
    backoffStateByChannel = new Map();
    actions = {
        CHANNEL_SELECT: () => {
            this.visibleTopMessageId = null;
        },
        UPDATE_VISIBLE_MESSAGES: (e) => {
            let { topVisibleMessage: t } = e,
                n = l.Ay.getChannelId();
            if (null == n) return;
            let i = a.A.getChannel(n)?.guild_id;
            if (null == i || !(0, d.Lc)(i, "visible_messages")) return;
            let r = this.visibleTopMessageId !== t;
            (this.visibleTopMessageId = t ?? null),
                this.isBackoffPending(n) ||
                    ((r || (null == t && this.hasMoreConversations(n, "after"))) && this.fetchForViewport(n, i, r));
        },
        CONVERSATIONS_FETCH_SUCCESS: (e) => {
            let { channelId: t } = e;
            this.clearBackoff(t);
        },
        CONVERSATIONS_FETCH_FAILURE: (e) => {
            let { channelId: t } = e;
            this.armBackoff(t);
        },
        CHANNEL_DELETE: (e) => {
            let { channel: t } = e;
            this.clearBackoff(t.id);
        },
        LOGOUT: () => this.reset(),
    };
    fetchForViewport(e, t, n) {
        let i = u.A.getChannelConversations(e),
            r = this.hasMoreConversations(e, "before"),
            a = this.hasMoreConversations(e, "after");
        if (null == i || (0 === i.length && a))
            return void (0, c.WF)({
                channelId: e,
                guildId: t,
                direction: null == this.visibleTopMessageId ? "before" : "around",
                anchor: this.visibleTopMessageId,
                limit: 25,
                isJump: !0,
            });
        let l = this.visibleTopMessageId ?? s.Ay.lastMessageId(e);
        if (null == l || null == i || 0 === i.length) return;
        let o = null == this.visibleTopMessageId;
        if (this.isAnchorOutsideBuffer(i, l) && (!o || n))
            return void (0, c.WF)({ channelId: e, guildId: t, direction: "around", anchor: l, limit: 25, isJump: !0 });
        if (o) {
            a && (0, c.WF)({ channelId: e, guildId: t, direction: "after", anchor: i[i.length - 1].id, limit: 25 });
            return;
        }
        let { above: d, below: _ } = this.countBuffer(e, l);
        d < 10 && _ < 10 && r && a
            ? (0, c.WF)({ channelId: e, guildId: t, direction: "around", anchor: l, limit: 25 })
            : d < 10 && r
              ? (0, c.WF)({ channelId: e, guildId: t, direction: "before", anchor: i[0].id, limit: 25 })
              : _ < 10 &&
                a &&
                (0, c.WF)({ channelId: e, guildId: t, direction: "after", anchor: i[i.length - 1].id, limit: 25 });
    }
    hasMoreConversations(e, t) {
        let n = u.A.getEdgeMarker(e, t);
        return "before" === t ? null == n : null == n || Date.now() - n > _.sE;
    }
    isBackoffPending(e) {
        return this.backoffStateByChannel.get(e)?.backoff.pending ?? !1;
    }
    getOrCreateBackoffState(e) {
        let t = this.backoffStateByChannel.get(e);
        return (
            null == t &&
                ((t = { backoff: new i.A(2e3, 18e4), retry: () => this.retryAfterBackoff(e) }),
                this.backoffStateByChannel.set(e, t)),
            t
        );
    }
    armBackoff(e) {
        let { backoff: t, retry: n } = this.getOrCreateBackoffState(e);
        t.fail(n);
    }
    clearBackoff(e) {
        this.backoffStateByChannel.get(e)?.backoff.cancel(), this.backoffStateByChannel.delete(e);
    }
    retryAfterBackoff(e) {
        if (l.Ay.getChannelId() !== e) return;
        let t = a.A.getChannel(e)?.guild_id;
        null != t && (0, d.Lc)(t, "backoff_retry") && this.fetchForViewport(e, t, !0);
    }
    reset() {
        for (let { backoff: e } of ((this.visibleTopMessageId = null), this.backoffStateByChannel.values())) e.cancel();
        this.backoffStateByChannel.clear();
    }
    isAnchorOutsideBuffer(e, t) {
        let n = e[0],
            i = e[e.length - 1];
        return 0 > o.default.compare(t, n.startMessageId) || o.default.compare(t, i.endMessageId) > 0;
    }
    countBuffer(e, t) {
        let n = u.A.getChannelConversations(e);
        if (null == n) return { above: 0, below: 0 };
        let i = 0,
            r = 0;
        for (let e of n) {
            let n = o.default.compare(e.startMessageId, t);
            n < 0 ? i++ : n > 0 && r++;
        }
        return { above: i, below: r };
    }
}
let A = new E();
