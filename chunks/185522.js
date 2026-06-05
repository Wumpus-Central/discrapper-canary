"use strict";
n.d(t, { A: () => d });
var i = n(439372),
    r = n(734057),
    s = n(309010),
    a = n(935208),
    o = n(828488),
    l = n(761259),
    u = n(958720);
n(575279);
class c extends i.A {
    lastFetchByChannel = new Map();
    needsPostJumpRefetch = !1;
    visibleTopMessageId = null;
    visibleBottomMessageId = null;
    actions = {
        POST_CONNECTION_OPEN: () => {
            let e = s.A.getChannelId();
            if (null == e) return;
            let t = r.A.getChannel(e)?.guild_id;
            null == t ||
                !(0, o.Lc)(t, "connection_open") ||
                u.A.isPendingFetch(e) ||
                u.A.hasChannelData(e) ||
                (0, l.WF)({ channelId: e, guildId: t, limit: 25 });
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
            let i = r.A.getChannel(t)?.guild_id;
            null == i ||
                !(0, o.Lc)(i, "channel_select") ||
                u.A.isPendingFetch(t) ||
                u.A.hasChannelData(t) ||
                (0, l.WF)(
                    null != n
                        ? { channelId: t, guildId: i, around: n, limit: 25 }
                        : { channelId: t, guildId: i, limit: 25 },
                );
        },
        LOAD_MESSAGES_SUCCESS: (e) => {
            let { channelId: t, jump: n } = e;
            null != n &&
                s.A.getChannelId() === t &&
                (this.lastFetchByChannel.delete(t), (this.needsPostJumpRefetch = !0));
        },
        UPDATE_VISIBLE_MESSAGES: (e) => {
            let { topVisibleMessage: t, bottomVisibleMessage: n } = e,
                i = s.A.getChannelId();
            if (null == i) return;
            let a = r.A.getChannel(i)?.guild_id;
            if (null == a || !(0, o.Lc)(a, "visible_messages")) return;
            let c = this.visibleTopMessageId !== t,
                d = this.visibleBottomMessageId !== n;
            if (
                ((this.visibleTopMessageId = t ?? null),
                (this.visibleBottomMessageId = n ?? null),
                (!c && !d) || u.A.isPendingFetch(i) || null == t)
            )
                return;
            if (this.needsPostJumpRefetch) {
                (this.needsPostJumpRefetch = !1), (0, l.WF)({ channelId: i, guildId: a, around: t, limit: 25 });
                return;
            }
            let _ = this.lastFetchByChannel.get(i) ?? 0,
                h = Date.now() - _;
            if (h < 2e3) return;
            let { above: f, below: p } = this.countBuffer(i, t, n);
            f < 5 && u.A.hasMoreConversations(i, "before")
                ? (0, l.WF)({ channelId: i, guildId: a, before: t, limit: 25 })
                : p < 5 && null != n && u.A.hasMoreConversations(i, "after")
                  ? (0, l.WF)({ channelId: i, guildId: a, after: n, limit: 25 })
                  : h > 6e4 && (0, l.WF)({ channelId: i, guildId: a, around: t, limit: 25, isStaleRefresh: !0 });
        },
        CONVERSATIONS_FETCH_SUCCESS: (e) => {
            let { channelId: t } = e;
            this.lastFetchByChannel.set(t, Date.now());
        },
        CHANNEL_DELETE: (e) => {
            let { channel: t } = e;
            this.lastFetchByChannel.delete(t.id);
        },
        LOGOUT: () => this.reset(),
    };
    reset() {
        this.lastFetchByChannel.clear(),
            (this.needsPostJumpRefetch = !1),
            (this.visibleTopMessageId = null),
            (this.visibleBottomMessageId = null);
    }
    countBuffer(e, t, n) {
        let i = u.A.getChannelConversations(e),
            r = 0,
            s = 0;
        for (let { conversation: e } of i)
            0 > a.default.compare(e.startMessageId, t) && r++,
                null != n && a.default.compare(e.startMessageId, n) > 0 && s++;
        return { above: r, below: s };
    }
}
let d = new c();
