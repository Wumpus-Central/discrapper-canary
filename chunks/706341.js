"use strict";
n.d(t, { A: () => p }), n(321073);
var i = n(435558),
    r = n(228366),
    a = n(378939),
    s = n(148494),
    l = n(334738),
    o = n(409686),
    d = n(976860),
    c = n(573163),
    u = n(935208),
    _ = n(932883),
    E = n(310031),
    A = n(849077),
    h = n(652215);
let I = (0, i.throttle)(f, 1500);
async function f(e) {
    let { preload: t = !1, ...n } = e,
        i = Date.now(),
        l = E.A.getNotifyingChannelIds();
    if (null == l) return;
    let d = t
            ? []
            : (function (e) {
                  let t = E.A.getChannelInfoMap(),
                      n = [];
                  for (let i of e) {
                      if (t[i]?.loadState === A.Ve.LOADED) continue;
                      let e = c.Ay.lastMessageId(i),
                          r = null != e && u.default.age(e) > A.V$;
                      if (n.length >= 5 || r) break;
                      let a = s.A.fetchMessages({ channelId: i, limit: A.EM, feature: A.j5 });
                      !1 !== a && null != a && n.push(a);
                  }
                  return n;
              })(l),
        I = o.Ay.getMentions(),
        f = null != I && I.length > 0 ? I[I.length - 1].id : null,
        p = !1;
    (o.Ay.hasMore || !o.Ay.hasLoadedEver) &&
        !o.Ay.loading &&
        (d.push(
            a.A.fetchRecentMentions({
                before: f,
                limit: h.Ue3,
                roles: o.Ay.roleFilter,
                everyone: o.Ay.everyoneFilter,
                feature: A.j5,
            }),
        ),
        (p = !0));
    if (0 === d.length)
        return void r.h.dispatch({
            type: "NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_SUCCESS",
            preload: t,
            hasMoreToLoad: !!t && void 0,
        });
    try {
        await Promise.all(d);
        let e = {
            timeToLoad: Date.now() - i,
            loadingTrigger: n.loadingTrigger ?? A.VA.UNKNOWN,
            viewId: n.viewId,
            channelsFetched: d.length - !!p,
            mentionsFetched: p,
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
let p = {
    loadMoreInbox() {
        let { preload: e = !1, ...t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!E.A.canLoadMore({ preload: e })) return !1;
        r.h.dispatch({ type: "NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_START", preload: e }), I({ preload: e, ...t });
    },
    inboxItemClick: function (e) {
        let {
            message: t,
            channel: n,
            isUnread: i,
            isSidebar: a,
            viewId: o,
            track: c = !0,
            autoTriggeredOnInboxOpen: u = !1,
        } = e;
        r.h.dispatch({ type: "NOTIFICATIONS_INBOX_ITEM_CLICK", messageId: t.id, channelId: n.id, isUnread: i }),
            c && (0, _.Ml)({ interactionType: _.X8.CLICK, message: t, viewId: o }),
            i &&
                l.ack(
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
            s.A.trackJump(n.id, t.id, A.XU);
        let E = a ? h.gNP : n.guild_id,
            I = h.BVt.CHANNEL(E, n.id, t.id);
        u && a ? (0, d.bG)(I) : (0, d.pX)(I);
    },
};
