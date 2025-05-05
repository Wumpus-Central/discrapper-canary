n.d(t, { k: () => I }), n(388685);
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
    f = n(742989),
    h = n(675478),
    g = n(581883),
    _ = n(585483),
    b = n(400445),
    x = n(153209),
    y = n(956961),
    E = n(903672),
    v = n(711165),
    O = n(946443),
    j = n(264233),
    C = n(981631),
    S = n(388032);
function I(e) {
    let { onOpen: t, onClose: n, children: I, badgeState: N, popoutPosition: T, popoutAlign: P } = e,
        { analyticsLocations: A } = (0, u.ZP)(c.Z.NOTIFICATION_CENTER),
        [w, Z] = i.useState(!1),
        [R, k] = [
            (0, a.e7)([g.Z], () => {
                var e, t;
                return null != (t = null == (e = g.Z.settings.inbox) ? void 0 : e.currentTab) ? t : o.X.UNREADS;
            }),
            i.useCallback((e) => {
                h.hW.updateAsync(
                    'inbox',
                    (t) => {
                        if (t.currentTab === e) return !1;
                        t.currentTab = e;
                    },
                    h.fy.FREQUENT_USER_ACTION
                );
            }, [])
        ],
        { showTutorial: D, setSeenTutorial: L } = (function (e) {
            let t = (0, a.e7)([g.Z], () => {
                    var e, t;
                    return null != (t = null == (e = g.Z.settings.inbox) ? void 0 : e.viewedTutorial) && t;
                }),
                n = i.useCallback(() => {
                    h.hW.updateAsync(
                        'inbox',
                        (e) => {
                            e.viewedTutorial = !0;
                        },
                        h.fy.INFREQUENT_USER_ACTION
                    );
                }, []);
            return {
                showTutorial: !t && e === o.X.UNREADS,
                setSeenTutorial: n
            };
        })(R),
        M = i.useCallback(() => {
            Z(!1), w && (null == n || n());
        }, [n, w]),
        U = i.useCallback(() => {
            Z(!w), w ? null == n || n() : null == t || t();
        }, [n, t, w]);
    i.useEffect(() => (_.S.subscribe(C.CkL.TOGGLE_INBOX, U), () => void _.S.unsubscribe(C.CkL.TOGGLE_INBOX, U)), [U]);
    let { showReminders: F } = f.Z.useExperiment({ location: 'RecentsPopout' }),
        { enabled: B, inInbox: G } = p.Z.useExperiment({ location: 'RecentsPopout' }),
        H = (0, a.e7)([m.Z], () => m.Z.hasOverdueReminder(), []) && B && G,
        { enabled: V } = d.Z.useExperiment({ location: 'RecentsPopout' });
    i.useEffect(() => {
        (((!F || (B && G)) && R === o.X.TODOS) || (R === o.X.BOOKMARKS && !(B || G))) && k(o.X.MENTIONS);
    });
    let z = i.useCallback(
        (e) => {
            e.shiftKey || M();
        },
        [M]
    );
    return (0, r.jsx)(u.Gt, {
        value: A,
        children: (0, r.jsx)(s.yRy, {
            animation: s.yRy.Animation.NONE,
            position: T,
            align: P,
            autoInvert: !1,
            shouldShow: w,
            onRequestClose: M,
            renderPopout: function () {
                return (0, r.jsx)(s.VqE, {
                    'aria-label': S.intl.string(S.t.GSmTKC),
                    children:
                        R === o.X.FOR_YOU
                            ? (0, r.jsx)(x.Z, {
                                  setTab: k,
                                  badgeState: N,
                                  closePopout: M
                              })
                            : R === o.X.MENTIONS
                              ? (0, r.jsx)(E.Z, {
                                    setTab: k,
                                    onJump: z,
                                    badgeState: N,
                                    closePopout: M
                                })
                              : V && R === o.X.GAME_INVITES
                                ? (0, r.jsx)(j.Z, {
                                      setTab: k,
                                      badgeState: N,
                                      closePopout: M
                                  })
                                : F && R === o.X.TODOS
                                  ? (0, r.jsx)(y.Z, {
                                        setTab: k,
                                        onJump: z,
                                        closePopout: M
                                    })
                                  : B && G && R === o.X.BOOKMARKS
                                    ? (0, r.jsx)(b.Z, {
                                          setTab: k,
                                          badgeState: N,
                                          closePopout: M
                                      })
                                    : R === o.X.SCHEDULED
                                      ? (0, r.jsx)(v._, {
                                            setTab: k,
                                            closePopout: M
                                        })
                                      : (0, r.jsx)(l.SV, {
                                            fallback: (0, r.jsx)(O.h, {
                                                setTab: k,
                                                closePopout: M,
                                                badgeState: N
                                            }),
                                            children: (0, r.jsx)(O.Z, {
                                                setTab: k,
                                                onJump: z,
                                                showTutorial: D,
                                                setSeenTutorial: L,
                                                closePopout: M,
                                                badgeState: N
                                            })
                                        })
                });
            },
            ignoreModalClicks: !0,
            clickTrap: !0,
            children: (e, t) => {
                let { isShown: n } = t;
                return I(U, n, e, H);
            }
        })
    });
}
