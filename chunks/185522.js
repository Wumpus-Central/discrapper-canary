"use strict";
n.d(t, { A: () => _ });
var i = n(158390),
    r = n(439372),
    s = n(734057),
    a = n(309010),
    o = n(935208),
    l = n(828488),
    u = n(775632),
    c = n(958720);
n(575279);
class d extends r.A {
    needsPostJumpRefetch = !1;
    visibleTopMessageId = null;
    visibleBottomMessageId = null;
    backoffStateByChannel = new Map();
    actions = {
        POST_CONNECTION_OPEN: () => {
            let e = a.A.getChannelId();
            if (null == e) return;
            let t = s.A.getChannel(e)?.guild_id;
            null == t ||
                !(0, l.Lc)(t, "connection_open") ||
                this.isBackoffPending(e) ||
                c.A.hasChannelData(e) ||
                (0, u.WF)({ channelId: e, guildId: t, direction: "around", anchor: null, limit: 25, isJump: !0 });
        },
        CHANNEL_SELECT: (e) => {
            let { channelId: t, messageId: n } = e;
            if (
                ((this.needsPostJumpRefetch = !1),
                (this.visibleTopMessageId = null),
                (this.visibleBottomMessageId = null),
                null == t)
            )
                return;
            let i = s.A.getChannel(t)?.guild_id;
            null == i ||
                !(0, l.Lc)(i, "channel_select") ||
                this.isBackoffPending(t) ||
                c.A.hasChannelData(t) ||
                (0, u.WF)({ channelId: t, guildId: i, direction: "around", anchor: n ?? null, limit: 25, isJump: !0 });
        },
        LOAD_MESSAGES_SUCCESS: (e) => {
            let { channelId: t, jump: n } = e;
            null != n && a.A.getChannelId() === t && (this.needsPostJumpRefetch = !0);
        },
        UPDATE_VISIBLE_MESSAGES: (e) => {
            let { topVisibleMessage: t, bottomVisibleMessage: n } = e,
                i = a.A.getChannelId();
            if (null == i) return;
            let r = s.A.getChannel(i)?.guild_id;
            if (null == r || !(0, l.Lc)(r, "visible_messages")) return;
            let o = this.visibleTopMessageId !== t,
                d = this.visibleBottomMessageId !== n;
            if (
                (!o && !d) ||
                ((this.visibleTopMessageId = t ?? null),
                (this.visibleBottomMessageId = n ?? null),
                this.isBackoffPending(i) || null == t)
            )
                return;
            if (this.needsPostJumpRefetch) {
                (this.needsPostJumpRefetch = !1),
                    (0, u.WF)({ channelId: i, guildId: r, direction: "around", anchor: t, limit: 25, isJump: !0 });
                return;
            }
            let { above: _, below: h } = this.countBuffer(i, t, n),
                f = c.A.getChannelConversations(i);
            if (null == f || 0 === f.length) return;
            let p = c.A.hasMoreConversations(i, "before"),
                E = c.A.hasMoreConversations(i, "after");
            if (_ < 10 && h < 10 && p && E)
                (0, u.WF)({ channelId: i, guildId: r, direction: "around", anchor: t, limit: 25 });
            else if (_ < 10 && p) {
                let e = f[0].conversation;
                (0, u.WF)({ channelId: i, guildId: r, direction: "before", anchor: e.id, limit: 25 });
            } else if (h < 10 && E) {
                let e = f[f.length - 1].conversation;
                (0, u.WF)({ channelId: i, guildId: r, direction: "after", anchor: e.id, limit: 25 });
            }
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
        if (a.A.getChannelId() !== e) return;
        let t = s.A.getChannel(e)?.guild_id;
        if (null == t || !(0, l.Lc)(t, "backoff_retry")) return;
        let n = this.visibleTopMessageId;
        null != n
            ? (0, u.WF)({ channelId: e, guildId: t, direction: "around", anchor: n, limit: 25, isJump: !0 })
            : c.A.hasChannelData(e) ||
              (0, u.WF)({ channelId: e, guildId: t, direction: "around", anchor: null, limit: 25, isJump: !0 });
    }
    reset() {
        for (let { backoff: e } of ((this.needsPostJumpRefetch = !1),
        (this.visibleTopMessageId = null),
        (this.visibleBottomMessageId = null),
        this.backoffStateByChannel.values()))
            e.cancel();
        this.backoffStateByChannel.clear();
    }
    countBuffer(e, t, n) {
        let i = c.A.getChannelConversations(e);
        if (null == i) return { above: 0, below: 0 };
        let r = 0,
            s = 0;
        for (let { conversation: e } of i)
            0 > o.default.compare(e.startMessageId, t) && r++,
                null != n && o.default.compare(e.startMessageId, n) > 0 && s++;
        return { above: r, below: s };
    }
}
let _ = new d();
