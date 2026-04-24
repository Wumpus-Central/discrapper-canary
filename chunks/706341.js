"use strict";
n.d(t, { A: () => I }), n(321073);
var i = n(735438),
    r = n(228366),
    s = n(378939),
    a = n(720149),
    o = n(334738),
    l = n(135978),
    _ = n(976860),
    d = n(222823),
    u = n(935208),
    c = n(932883),
    E = n(310031),
    h = n(849077),
    m = n(652215);
let f = (0, i.throttle)(g, 1500);
async function g(e) {
    let { preload: t = !1, ...n } = e,
        i = Date.now(),
        o = E.A.getNotifyingChannelIds();
    if (null == o) return;
    let _ = t
            ? []
            : (function (e) {
                  let t = E.A.getChannelInfoMap(),
                      n = [];
                  for (let i of e) {
                      if (t[i]?.loadState === h.Ve.LOADED) continue;
                      let e = d.Ay.lastMessageId(i),
                          r = null != e && u.default.age(e) > h.V$;
                      if (n.length >= 5 || r) break;
                      let s = a.A.fetchMessages({ channelId: i, limit: h.EM, feature: h.j5 });
                      !1 !== s && null != s && n.push(s);
                  }
                  return n;
              })(o),
        f = l.Ay.getMentions(),
        g = null != f && f.length > 0 ? f[f.length - 1].id : null,
        I = !1;
    (l.Ay.hasMore || !l.Ay.hasLoadedEver) &&
        !l.Ay.loading &&
        (_.push(
            s.A.fetchRecentMentions({
                before: g,
                limit: m.Ue3,
                roles: l.Ay.roleFilter,
                everyone: l.Ay.everyoneFilter,
                feature: h.j5,
            }),
        ),
        (I = !0));
    if (0 === _.length)
        return void r.h.dispatch({
            type: "NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_SUCCESS",
            preload: t,
            hasMoreToLoad: !1,
        });
    try {
        await Promise.all(_);
        let e = {
            timeToLoad: Date.now() - i,
            loadingTrigger: n.loadingTrigger ?? h.VA.UNKNOWN,
            viewId: n.viewId,
            channelsFetched: _.length - !!I,
            mentionsFetched: I,
        };
        t && (0, c.P3)(e),
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
let I = {
    loadMoreInbox() {
        let { preload: e = !1, ...t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!E.A.canLoadMore({ preload: e })) return !1;
        r.h.dispatch({ type: "NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_START", preload: e }), f({ preload: e, ...t });
    },
    inboxItemClick: function (e) {
        let {
            message: t,
            channel: n,
            isUnread: i,
            isSidebar: s,
            viewId: l,
            track: d = !0,
            autoTriggeredOnInboxOpen: u = !1,
        } = e;
        r.h.dispatch({ type: "NOTIFICATIONS_INBOX_ITEM_CLICK", messageId: t.id, channelId: n.id, isUnread: i }),
            d && (0, c.Ml)({ interactionType: c.X8.CLICK, message: t, viewId: l }),
            i &&
                o.ack(
                    t.channel_id,
                    {
                        section: m.JJy.INBOX,
                        object: m.ZSU.ACK_MESSAGE_VIEWED,
                        objectType: m.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                    },
                    !0,
                    void 0,
                    t.id,
                ),
            a.A.trackJump(n.id, t.id, h.XU);
        let E = s ? m.gNP : n.guild_id,
            f = m.BVt.CHANNEL(E, n.id, t.id);
        u && s ? (0, _.bG)(f) : (0, _.pX)(f);
    },
};
