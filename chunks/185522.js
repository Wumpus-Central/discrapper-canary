"use strict";
n.d(t, { A: () => u });
var i = n(439372),
    r = n(309010),
    s = n(967198),
    a = n(935208),
    o = n(828488),
    l = n(141850),
    _ = n(958720);
n(705448);
class d extends i.A {
    lastFetchByChannel = new Map();
    needsPostJumpRefetch = !1;
    visibleTopMessageId = null;
    visibleBottomMessageId = null;
    actions = {
        CHANNEL_SELECT: (e) => {
            let { channelId: t, guildId: n, messageId: i } = e;
            (this.needsPostJumpRefetch = !1),
                (this.visibleTopMessageId = null),
                (this.visibleBottomMessageId = null),
                null == t ||
                    null == n ||
                    _.A.isPendingFetch(t) ||
                    _.A.hasChannelData(t) ||
                    ((0, o.uJ)(n, "channel_select") &&
                        (0, l.WF)(null != i ? { channelId: t, around: i, limit: 25 } : { channelId: t, limit: 25 }));
        },
        LOAD_MESSAGES_SUCCESS: (e) => {
            let { channelId: t, jump: n } = e;
            null != n &&
                r.A.getChannelId() === t &&
                (this.lastFetchByChannel.delete(t), (this.needsPostJumpRefetch = !0));
        },
        UPDATE_VISIBLE_MESSAGES: (e) => {
            let { topVisibleMessage: t, bottomVisibleMessage: n } = e,
                i = r.A.getChannelId(),
                a = s.A.getGuildId();
            if (null == i || null == a || !(0, o.uJ)(a, "visible_messages")) return;
            let d = this.visibleTopMessageId !== t,
                u = this.visibleBottomMessageId !== n;
            if (
                ((this.visibleTopMessageId = t ?? null),
                (this.visibleBottomMessageId = n ?? null),
                (!d && !u) || _.A.isPendingFetch(i) || null == t)
            )
                return;
            if (this.needsPostJumpRefetch) {
                (this.needsPostJumpRefetch = !1), (0, l.WF)({ channelId: i, around: t, limit: 25 });
                return;
            }
            let c = this.lastFetchByChannel.get(i) ?? 0,
                E = Date.now() - c;
            if (E < 2e3) return;
            let { above: h, below: m } = this.countBuffer(i, t, n);
            h < 5 && _.A.hasMoreConversations(i, "before")
                ? (0, l.WF)({ channelId: i, before: t, limit: 25 })
                : m < 5 && null != n && _.A.hasMoreConversations(i, "after")
                  ? (0, l.WF)({ channelId: i, after: n, limit: 25 })
                  : E > 6e4 && (0, l.WF)({ channelId: i, around: t, limit: 25, isStaleRefresh: !0 });
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
        let i = _.A.getChannelConversations(e),
            r = 0,
            s = 0;
        for (let { conversation: e } of i)
            0 > a.default.compare(e.startMessageId, t) && r++,
                null != n && a.default.compare(e.startMessageId, n) > 0 && s++;
        return { above: r, below: s };
    }
}
let u = new d();
