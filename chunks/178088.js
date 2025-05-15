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
    let { onOpen: t, onClose: n, children: C, badgeState: S, popoutPosition: I, popoutAlign: N, targetElementRef: T } = e,
        { analyticsLocations: P } = (0, u.ZP)(c.Z.NOTIFICATION_CENTER),
        [A, w] = i.useState(!1),
        [Z, R] = [
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
        { showTutorial: k, setSeenTutorial: D } = (function (e) {
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
        })(Z),
        L = i.useCallback(() => {
            w(!1), A && (null == n || n());
        }, [n, A]),
        M = i.useCallback(() => {
            w(!A), A ? null == n || n() : null == t || t();
        }, [n, t, A]);
    i.useEffect(() => (g.S.subscribe(O.CkL.TOGGLE_INBOX, M), () => void g.S.unsubscribe(O.CkL.TOGGLE_INBOX, M)), [M]);
    let { enabled: U, inInbox: F } = p.Z.useExperiment({ location: 'RecentsPopout' }),
        B = (0, a.e7)([m.Z], () => m.Z.hasOverdueReminder(), []) && U && F,
        { enabled: G } = d.Z.useExperiment({ location: 'RecentsPopout' });
    i.useEffect(() => {
        Z !== o.X.BOOKMARKS || U || F || R(o.X.MENTIONS);
    });
    let H = i.useCallback(
        (e) => {
            e.shiftKey || L();
        },
        [L]
    );
    return (0, r.jsx)(u.Gt, {
        value: P,
        children: (0, r.jsx)(s.yRy, {
            targetElementRef: T,
            animation: s.yRy.Animation.NONE,
            position: I,
            align: N,
            autoInvert: !1,
            shouldShow: A,
            onRequestClose: L,
            renderPopout: function () {
                return (0, r.jsx)(s.VqE, {
                    'aria-label': j.intl.string(j.t.GSmTKC),
                    children:
                        Z === o.X.FOR_YOU
                            ? (0, r.jsx)(b.Z, {
                                  setTab: R,
                                  badgeState: S,
                                  closePopout: L
                              })
                            : Z === o.X.MENTIONS
                              ? (0, r.jsx)(x.Z, {
                                    setTab: R,
                                    onJump: H,
                                    badgeState: S,
                                    closePopout: L
                                })
                              : G && Z === o.X.GAME_INVITES
                                ? (0, r.jsx)(v.Z, {
                                      setTab: R,
                                      badgeState: S,
                                      closePopout: L
                                  })
                                : U && F && Z === o.X.BOOKMARKS
                                  ? (0, r.jsx)(_.Z, {
                                        setTab: R,
                                        badgeState: S,
                                        closePopout: L
                                    })
                                  : Z === o.X.SCHEDULED
                                    ? (0, r.jsx)(E._, {
                                          setTab: R,
                                          closePopout: L
                                      })
                                    : (0, r.jsx)(l.SV, {
                                          fallback: (0, r.jsx)(y.h, {
                                              setTab: R,
                                              closePopout: L,
                                              badgeState: S
                                          }),
                                          children: (0, r.jsx)(y.Z, {
                                              setTab: R,
                                              onJump: H,
                                              showTutorial: k,
                                              setSeenTutorial: D,
                                              closePopout: L,
                                              badgeState: S
                                          })
                                      })
                });
            },
            ignoreModalClicks: !0,
            clickTrap: !0,
            children: (e, t) => {
                let { isShown: n } = t;
                return C(M, n, e, B);
            }
        })
    });
}
