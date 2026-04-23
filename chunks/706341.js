n.d(t, { A: () => N }), n(321073);
var i = n(735438),
    r = n(228366),
    a = n(378939),
    s = n(720149),
    _ = n(334738),
    l = n(135978),
    o = n(976860),
    E = n(222823),
    d = n(935208),
    c = n(932883),
    u = n(310031),
    I = n(849077),
    A = n(652215);
let T = (0, i.throttle)(S, 1500);
async function S(e) {
    let { preload: t = !1, ...n } = e,
        i = Date.now(),
        _ = u.A.getNotifyingChannelIds();
    if (null == _) return;
    let o = t
            ? []
            : (function (e) {
                  let t = u.A.getChannelInfoMap(),
                      n = [];
                  for (let i of e) {
                      if (t[i]?.loadState === I.Ve.LOADED) continue;
                      let e = E.Ay.lastMessageId(i),
                          r = null != e && d.default.age(e) > I.V$;
                      if (n.length >= 5 || r) break;
                      let a = s.A.fetchMessages({ channelId: i, limit: I.EM, feature: I.j5 });
                      !1 !== a && null != a && n.push(a);
                  }
                  return n;
              })(_),
        T = l.Ay.getMentions(),
        S = null != T && T.length > 0 ? T[T.length - 1].id : null,
        N = !1;
    (l.Ay.hasMore || !l.Ay.hasLoadedEver) &&
        !l.Ay.loading &&
        (o.push(
            a.A.fetchRecentMentions({
                before: S,
                limit: A.Ue3,
                roles: l.Ay.roleFilter,
                everyone: l.Ay.everyoneFilter,
                feature: I.j5,
            }),
        ),
        (N = !0));
    if (0 === o.length)
        return void r.h.dispatch({
            type: "NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_SUCCESS",
            preload: t,
            hasMoreToLoad: !1,
        });
    try {
        await Promise.all(o);
        let e = {
            timeToLoad: Date.now() - i,
            loadingTrigger: n.loadingTrigger ?? I.VA.UNKNOWN,
            viewId: n.viewId,
            channelsFetched: o.length - !!N,
            mentionsFetched: N,
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
let N = {
    loadMoreInbox() {
        let { preload: e = !1, ...t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!u.A.canLoadMore({ preload: e })) return !1;
        r.h.dispatch({ type: "NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_START", preload: e }), T({ preload: e, ...t });
    },
    inboxItemClick: function (e) {
        let {
            message: t,
            channel: n,
            isUnread: i,
            isSidebar: a,
            viewId: l,
            track: E = !0,
            autoTriggeredOnInboxOpen: d = !1,
        } = e;
        r.h.dispatch({ type: "NOTIFICATIONS_INBOX_ITEM_CLICK", messageId: t.id, channelId: n.id, isUnread: i }),
            E && (0, c.Ml)({ interactionType: c.X8.CLICK, message: t, viewId: l }),
            i &&
                _.ack(
                    t.channel_id,
                    {
                        section: A.JJy.INBOX,
                        object: A.ZSU.ACK_MESSAGE_VIEWED,
                        objectType: A.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                    },
                    !0,
                    void 0,
                    t.id,
                ),
            s.A.trackJump(n.id, t.id, I.XU);
        let u = a ? A.gNP : n.guild_id,
            T = A.BVt.CHANNEL(u, n.id, t.id);
        d && a ? (0, o.bG)(T) : (0, o.pX)(T);
    },
};
