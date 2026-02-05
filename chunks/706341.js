"use strict";
n.d(t, { A: () => y }), n(321073);
var r = n(735438),
    i = n(73153),
    a = n(378939),
    s = n(843472),
    o = n(334738),
    l = n(187508),
    u = n(976860),
    c = n(222823),
    d = n(661191),
    _ = n(932883),
    f = n(320697),
    p = n(849077),
    h = n(652215);
let m = 5,
    g = 1500;
function E(e) {
    return a.A.fetchRecentMentions({
        before: e,
        limit: h.Ue3,
        roles: l.Ay.roleFilter,
        everyone: l.Ay.everyoneFilter,
        feature: p.j5,
    });
}
let A = (0, r.throttle)(T, g);
function I(e) {
    let t = f.A.getChannelInfoMap(),
        n = [];
    for (let r of e) {
        if (t[r]?.loadState === p.Ve.LOADED) continue;
        let e = c.Ay.lastMessageId(r),
            i = null != e && d.default.age(e) > p.V$;
        if (n.length >= m || i) break;
        let a = s.A.fetchMessages({ channelId: r, limit: p.EM, feature: p.j5 });
        !1 !== a && null != a && n.push(a);
    }
    return n;
}
async function T(e) {
    let { preload: t = !1, ...n } = e,
        r = Date.now(),
        a = f.A.getNotifyingChannelIds();
    if (null == a) return;
    let s = t ? [] : I(a),
        o = l.Ay.getMentions(),
        u = null != o && o.length > 0 ? o[o.length - 1].id : null,
        c = !1;
    if (((!l.Ay.hasMore && l.Ay.hasLoadedEver) || l.Ay.loading || (s.push(E(u)), (c = !0)), 0 === s.length))
        return void i.h.dispatch({
            type: "NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_SUCCESS",
            preload: t,
            hasMoreToLoad: !1,
        });
    try {
        await Promise.all(s);
        let e = {
            timeToLoad: Date.now() - r,
            loadingTrigger: n.loadingTrigger ?? p.VA.UNKNOWN,
            viewId: n.viewId,
            channelsFetched: s.length - !!c,
            mentionsFetched: c,
        };
        t && (0, _.P3)(e),
            i.h.dispatch({
                type: "NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_SUCCESS",
                preload: t,
                analyticsPayload: e,
                hasMoreToLoad: !0,
            });
    } catch (e) {
        i.h.dispatch({ type: "NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_FAILURE" });
    }
}
let y = {
    loadMoreInbox() {
        let { preload: e = !1, ...t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!f.A.canLoadMore({ preload: e })) return !1;
        i.h.dispatch({ type: "NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_START", preload: e }), A({ preload: e, ...t });
    },
    inboxItemClick: function (e) {
        let {
            message: t,
            channel: n,
            isUnread: r,
            isSidebar: a,
            viewId: l,
            track: c = !0,
            autoTriggeredOnInboxOpen: d = !1,
        } = e;
        i.h.dispatch({ type: "NOTIFICATIONS_INBOX_ITEM_CLICK", messageId: t.id, channelId: n.id, isUnread: r }),
            c && (0, _.Ml)({ interactionType: _.X8.CLICK, message: t, viewId: l }),
            r &&
                o.ack(
                    t.channel_id,
                    {
                        section: h.JJy.INBOX,
                        object: h.ZSU.ACK_MESSAGE_VIEWED,
                        objectType: h.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                    },
                    !0,
                    void 0,
                    t.id,
                ),
            s.A.trackJump(n.id, t.id, p.XU);
        let f = a ? h.gNP : n.guild_id,
            m = h.BVt.CHANNEL(f, n.id, t.id);
        d && a ? (0, u.bG)(m) : (0, u.pX)(m);
    },
};
