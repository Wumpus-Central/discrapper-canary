n(321073);
var i = n(435558),
    r = n(73153),
    a = n(378939),
    s = n(138399),
    l = n(334738),
    o = n(849171),
    d = n(976860),
    c = n(218461),
    u = n(811091),
    _ = n(932883),
    E = n(398269),
    A = n(849077),
    f = n(652215);
let h = (0, i.throttle)(async function (e) {
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
                      let a = s.A.fetchMessages({ channelId: i, limit: 50, feature: A.j5 });
                      !1 !== a && null != a && n.push(a);
                  }
                  return n;
              })(l),
        f = o.Ay.getMentions(),
        h = null != f && f.length > 0 ? f[f.length - 1].id : null,
        I = !1;
    (o.Ay.hasMore || !o.Ay.hasLoadedEver) &&
        !o.Ay.loading &&
        (d.push(
            a.A.fetchRecentMentions({
                before: h,
                limit: 25,
                roles: o.Ay.roleFilter,
                everyone: o.Ay.everyoneFilter,
                feature: A.j5,
            }),
        ),
        (I = !0));
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
            channelsFetched: d.length - !!I,
            mentionsFetched: I,
        };
        (t && (0, _.P3)(e),
            r.h.dispatch({
                type: "NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_SUCCESS",
                preload: t,
                analyticsPayload: e,
                hasMoreToLoad: !0,
            }));
    } catch (e) {
        r.h.dispatch({ type: "NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_FAILURE" });
    }
}, 1500);
n.d(
    t,
    {},
    {
        A: {
            loadMoreInbox() {
                let { preload: e = !1, ...t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (!E.A.canLoadMore({ preload: e })) return !1;
                (r.h.dispatch({ type: "NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_START", preload: e }),
                    h({ preload: e, ...t }));
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
                (r.h.dispatch({
                    type: "NOTIFICATIONS_INBOX_ITEM_CLICK",
                    messageId: t.id,
                    channelId: n.id,
                    isUnread: i,
                }),
                    c && (0, _.Ml)({ interactionType: _.X8.CLICK, message: t, viewId: o }),
                    i &&
                        l.I_(
                            t.channel_id,
                            {
                                section: f.JJy.INBOX,
                                object: f.ZSU.ACK_MESSAGE_VIEWED,
                                objectType: f.btD.ACK_SEMI_AUTOMATIC,
                            },
                            !0,
                            void 0,
                            t.id,
                        ),
                    s.A.trackJump(n.id, t.id, A.XU));
                let E = a ? f.gNP : n.guild_id,
                    h = f.BVt.CHANNEL(E, n.id, t.id);
                u && a ? (0, d.bG)(h) : (0, d.pX)(h);
            },
        },
    },
);
