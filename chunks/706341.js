"use strict";
n.d(t, { A: () => g }), n(321073);
var i = n(735438),
    r = n(228366),
    s = n(378939),
    a = n(720149),
    o = n(334738),
    l = n(135978),
    u = n(976860),
    c = n(222823),
    d = n(935208),
    _ = n(932883),
    f = n(310031),
    h = n(849077),
    p = n(652215);
let E = (0, i.throttle)(m, 1500);
async function m(e) {
    let { preload: t = !1, ...n } = e,
        i = Date.now(),
        o = f.A.getNotifyingChannelIds();
    if (null == o) return;
    let u = (function (e) {
            let t = f.A.getChannelInfoMap(),
                n = [];
            for (let i of e) {
                if (t[i]?.loadState === h.Ve.LOADED) continue;
                let e = c.Ay.lastMessageId(i),
                    r = null != e && d.default.age(e) > h.V$;
                if (n.length >= 5 || r) break;
                let s = a.A.fetchMessages({ channelId: i, limit: h.EM, feature: h.j5 });
                !1 !== s && null != s && n.push(s);
            }
            return n;
        })(o),
        E = l.Ay.getMentions(),
        m = null != E && E.length > 0 ? E[E.length - 1].id : null,
        g = !1;
    (l.Ay.hasMore || !l.Ay.hasLoadedEver) &&
        !l.Ay.loading &&
        (u.push(
            s.A.fetchRecentMentions({
                before: m,
                limit: p.Ue3,
                roles: l.Ay.roleFilter,
                everyone: l.Ay.everyoneFilter,
                feature: h.j5,
            }),
        ),
        (g = !0));
    if (0 === u.length)
        return void r.h.dispatch({
            type: "NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_SUCCESS",
            preload: t,
            hasMoreToLoad: !1,
        });
    try {
        await Promise.all(u);
        let e = {
            timeToLoad: Date.now() - i,
            loadingTrigger: n.loadingTrigger ?? h.VA.UNKNOWN,
            viewId: n.viewId,
            channelsFetched: u.length - !!g,
            mentionsFetched: g,
        };
        t && (0, _.P3)(e),
            r.h.dispatch({
                type: "NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_SUCCESS",
                preload: t,
                analyticsPayload: e,
                hasMoreToLoad: !0,
            });
    } catch (e) {
        r.h.dispatch({ type: "NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_FAILURE" });
    }
}
let g = {
    loadMoreInbox() {
        let { preload: e = !1, ...t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!f.A.canLoadMore({ preload: e })) return !1;
        r.h.dispatch({ type: "NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_START", preload: e }), E({ preload: e, ...t });
    },
    inboxItemClick: function (e) {
        let {
            message: t,
            channel: n,
            isUnread: i,
            isSidebar: s,
            viewId: l,
            track: c = !0,
            autoTriggeredOnInboxOpen: d = !1,
        } = e;
        r.h.dispatch({ type: "NOTIFICATIONS_INBOX_ITEM_CLICK", messageId: t.id, channelId: n.id, isUnread: i }),
            c && (0, _.Ml)({ interactionType: _.X8.CLICK, message: t, viewId: l }),
            i &&
                o.ack(
                    t.channel_id,
                    {
                        section: p.JJy.INBOX,
                        object: p.ZSU.ACK_MESSAGE_VIEWED,
                        objectType: p.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                    },
                    !0,
                    void 0,
                    t.id,
                ),
            a.A.trackJump(n.id, t.id, h.XU);
        let f = s ? p.gNP : n.guild_id,
            E = p.BVt.CHANNEL(f, n.id, t.id);
        d && s ? (0, u.bG)(E) : (0, u.pX)(E);
    },
};
