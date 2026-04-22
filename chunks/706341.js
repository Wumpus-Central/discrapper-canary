"use strict";
n.d(t, { A: () => g }), n(321073);
var r = n(735438),
    i = n(73153),
    s = n(378939),
    a = n(843472),
    o = n(334738),
    l = n(187508),
    u = n(976860),
    d = n(222823),
    c = n(661191),
    _ = n(932883),
    f = n(320697),
    E = n(849077),
    h = n(652215);
let p = (0, r.throttle)(m, 1500);
async function m(e) {
    let { preload: t = !1, ...n } = e,
        r = Date.now(),
        o = f.A.getNotifyingChannelIds();
    if (null == o) return;
    let u = t
            ? []
            : (function (e) {
                  let t = f.A.getChannelInfoMap(),
                      n = [];
                  for (let r of e) {
                      if (t[r]?.loadState === E.Ve.LOADED) continue;
                      let e = d.Ay.lastMessageId(r),
                          i = null != e && c.default.age(e) > E.V$;
                      if (n.length >= 5 || i) break;
                      let s = a.A.fetchMessages({ channelId: r, limit: E.EM, feature: E.j5 });
                      !1 !== s && null != s && n.push(s);
                  }
                  return n;
              })(o),
        p = l.Ay.getMentions(),
        m = null != p && p.length > 0 ? p[p.length - 1].id : null,
        g = !1;
    (l.Ay.hasMore || !l.Ay.hasLoadedEver) &&
        !l.Ay.loading &&
        (u.push(
            s.A.fetchRecentMentions({
                before: m,
                limit: h.Ue3,
                roles: l.Ay.roleFilter,
                everyone: l.Ay.everyoneFilter,
                feature: E.j5,
            }),
        ),
        (g = !0));
    if (0 === u.length)
        return void i.h.dispatch({
            type: "NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_SUCCESS",
            preload: t,
            hasMoreToLoad: !1,
        });
    try {
        await Promise.all(u);
        let e = {
            timeToLoad: Date.now() - r,
            loadingTrigger: n.loadingTrigger ?? E.VA.UNKNOWN,
            viewId: n.viewId,
            channelsFetched: u.length - !!g,
            mentionsFetched: g,
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
let g = {
    loadMoreInbox() {
        let { preload: e = !1, ...t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!f.A.canLoadMore({ preload: e })) return !1;
        i.h.dispatch({ type: "NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_START", preload: e }), p({ preload: e, ...t });
    },
    inboxItemClick: function (e) {
        let {
            message: t,
            channel: n,
            isUnread: r,
            isSidebar: s,
            viewId: l,
            track: d = !0,
            autoTriggeredOnInboxOpen: c = !1,
        } = e;
        i.h.dispatch({ type: "NOTIFICATIONS_INBOX_ITEM_CLICK", messageId: t.id, channelId: n.id, isUnread: r }),
            d && (0, _.Ml)({ interactionType: _.X8.CLICK, message: t, viewId: l }),
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
            a.A.trackJump(n.id, t.id, E.XU);
        let f = s ? h.gNP : n.guild_id,
            p = h.BVt.CHANNEL(f, n.id, t.id);
        c && s ? (0, u.bG)(p) : (0, u.pX)(p);
    },
};
