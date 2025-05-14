n.d(t, { k: () => C }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(740442),
    a = n(442837),
    o = n(524437),
    s = n(481060),
    c = n(100527),
    u = n(906732),
    d = n(602478),
    p = n(2818),
    m = n(768943),
    f = n(675478),
    h = n(581883),
    g = n(585483),
    _ = n(400445),
    b = n(153209),
    x = n(903672),
    E = n(711165),
    y = n(946443),
    v = n(264233),
    O = n(981631),
    j = n(388032);
function C(e) {
    let { onOpen: t, onClose: n, children: C, badgeState: S, popoutPosition: I, popoutAlign: N } = e,
        { analyticsLocations: T } = (0, u.ZP)(c.Z.NOTIFICATION_CENTER),
        [P, A] = i.useState(!1),
        [w, Z] = [
            (0, a.e7)([h.Z], () => {
                var e, t;
                return null != (t = null == (e = h.Z.settings.inbox) ? void 0 : e.currentTab) ? t : o.X.UNREADS;
            }),
            i.useCallback((e) => {
                f.hW.updateAsync(
                    'inbox',
                    (t) => {
                        if (t.currentTab === e) return !1;
                        t.currentTab = e;
                    },
                    f.fy.FREQUENT_USER_ACTION
                );
            }, [])
        ],
        { showTutorial: R, setSeenTutorial: k } = (function (e) {
            let t = (0, a.e7)([h.Z], () => {
                    var e, t;
                    return null != (t = null == (e = h.Z.settings.inbox) ? void 0 : e.viewedTutorial) && t;
                }),
                n = i.useCallback(() => {
                    f.hW.updateAsync(
                        'inbox',
                        (e) => {
                            e.viewedTutorial = !0;
                        },
                        f.fy.INFREQUENT_USER_ACTION
                    );
                }, []);
            return {
                showTutorial: !t && e === o.X.UNREADS,
                setSeenTutorial: n
            };
        })(w),
        D = i.useCallback(() => {
            A(!1), P && (null == n || n());
        }, [n, P]),
        L = i.useCallback(() => {
            A(!P), P ? null == n || n() : null == t || t();
        }, [n, t, P]);
    i.useEffect(() => (g.S.subscribe(O.CkL.TOGGLE_INBOX, L), () => void g.S.unsubscribe(O.CkL.TOGGLE_INBOX, L)), [L]);
    let { enabled: M, inInbox: U } = p.Z.useExperiment({ location: 'RecentsPopout' }),
        F = (0, a.e7)([m.Z], () => m.Z.hasOverdueReminder(), []) && M && U,
        { enabled: B } = d.Z.useExperiment({ location: 'RecentsPopout' });
    i.useEffect(() => {
        w !== o.X.BOOKMARKS || M || U || Z(o.X.MENTIONS);
    });
    let G = i.useCallback(
        (e) => {
            e.shiftKey || D();
        },
        [D]
    );
    return (0, r.jsx)(u.Gt, {
        value: T,
        children: (0, r.jsx)(s.yRy, {
            animation: s.yRy.Animation.NONE,
            position: I,
            align: N,
            autoInvert: !1,
            shouldShow: P,
            onRequestClose: D,
            renderPopout: function () {
                return (0, r.jsx)(s.VqE, {
                    'aria-label': j.intl.string(j.t.GSmTKC),
                    children:
                        w === o.X.FOR_YOU
                            ? (0, r.jsx)(b.Z, {
                                  setTab: Z,
                                  badgeState: S,
                                  closePopout: D
                              })
                            : w === o.X.MENTIONS
                              ? (0, r.jsx)(x.Z, {
                                    setTab: Z,
                                    onJump: G,
                                    badgeState: S,
                                    closePopout: D
                                })
                              : B && w === o.X.GAME_INVITES
                                ? (0, r.jsx)(v.Z, {
                                      setTab: Z,
                                      badgeState: S,
                                      closePopout: D
                                  })
                                : M && U && w === o.X.BOOKMARKS
                                  ? (0, r.jsx)(_.Z, {
                                        setTab: Z,
                                        badgeState: S,
                                        closePopout: D
                                    })
                                  : w === o.X.SCHEDULED
                                    ? (0, r.jsx)(E._, {
                                          setTab: Z,
                                          closePopout: D
                                      })
                                    : (0, r.jsx)(l.SV, {
                                          fallback: (0, r.jsx)(y.h, {
                                              setTab: Z,
                                              closePopout: D,
                                              badgeState: S
                                          }),
                                          children: (0, r.jsx)(y.Z, {
                                              setTab: Z,
                                              onJump: G,
                                              showTutorial: R,
                                              setSeenTutorial: k,
                                              closePopout: D,
                                              badgeState: S
                                          })
                                      })
                });
            },
            ignoreModalClicks: !0,
            clickTrap: !0,
            children: (e, t) => {
                let { isShown: n } = t;
                return C(L, n, e, F);
            }
        })
    });
}
