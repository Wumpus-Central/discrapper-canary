n.d(t, { k: () => S }), n(47120);
var r = n(200651),
    i = n(192379),
    a = n(274312),
    l = n(442837),
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
    b = n(932232),
    x = n(400445),
    y = n(153209),
    E = n(956961),
    v = n(903672),
    O = n(711165),
    N = n(946443),
    j = n(264233),
    C = n(981631),
    I = n(388032);
function S(e) {
    let { onOpen: t, onClose: n, children: S, badgeState: T, popoutPosition: P, popoutAlign: A } = e,
        { analyticsLocations: w } = (0, u.ZP)(c.Z.NOTIFICATION_CENTER),
        [Z, k] = i.useState(!1),
        [R, D] = (function () {
            let { showForYouTab: e } = b.V.useExperiment({ location: 'RecentsPopout' }, { autoTrackExposure: !1 }),
                t = (0, l.e7)([g.Z], () => {
                    var e, t;
                    return null != (t = null == (e = g.Z.settings.inbox) ? void 0 : e.currentTab) ? t : o.X.UNREADS;
                }),
                n = i.useCallback((e) => {
                    h.hW.updateAsync(
                        'inbox',
                        (t) => {
                            if (t.currentTab === e) return !1;
                            t.currentTab = e;
                        },
                        h.fy.FREQUENT_USER_ACTION
                    );
                }, []);
            return e || t !== o.X.FOR_YOU || ((t = o.X.UNREADS), n(o.X.UNREADS)), [t, n];
        })(),
        { showTutorial: L, setSeenTutorial: M } = (function (e) {
            let t = (0, l.e7)([g.Z], () => {
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
        W = i.useCallback(() => {
            k(!1), Z && (null == n || n());
        }, [n, Z]),
        U = i.useCallback(() => {
            k(!Z), Z ? null == n || n() : null == t || t();
        }, [n, t, Z]);
    i.useEffect(() => (_.S.subscribe(C.CkL.TOGGLE_INBOX, U), () => void _.S.unsubscribe(C.CkL.TOGGLE_INBOX, U)), [U]);
    let { showReminders: F } = f.Z.useExperiment({ location: 'RecentsPopout' }),
        { enabled: B, inInbox: G } = p.Z.useExperiment({ location: 'RecentsPopout' }),
        H = (0, l.e7)([m.Z], () => m.Z.hasOverdueReminder(), []) && B && G,
        { enabled: V } = d.Z.useExperiment({ location: 'RecentsPopout' });
    i.useEffect(() => {
        (((!F || (B && G)) && R === o.X.TODOS) || (R === o.X.BOOKMARKS && !(B || G))) && D(o.X.MENTIONS);
    });
    let z = i.useCallback(
        (e) => {
            e.shiftKey || W();
        },
        [W]
    );
    return (0, r.jsx)(u.Gt, {
        value: w,
        children: (0, r.jsx)(s.yRy, {
            animation: s.yRy.Animation.NONE,
            position: P,
            align: A,
            autoInvert: !1,
            shouldShow: Z,
            onRequestClose: W,
            renderPopout: function () {
                return (0, r.jsx)(s.VqE, {
                    'aria-label': I.NW.string(I.t.GSmTKC),
                    children:
                        R === o.X.FOR_YOU
                            ? (0, r.jsx)(y.Z, {
                                  setTab: D,
                                  badgeState: T,
                                  closePopout: W
                              })
                            : R === o.X.MENTIONS
                              ? (0, r.jsx)(v.Z, {
                                    setTab: D,
                                    onJump: z,
                                    badgeState: T,
                                    closePopout: W
                                })
                              : V && R === o.X.GAME_INVITES
                                ? (0, r.jsx)(j.Z, {
                                      setTab: D,
                                      badgeState: T,
                                      closePopout: W
                                  })
                                : F && R === o.X.TODOS
                                  ? (0, r.jsx)(E.Z, {
                                        setTab: D,
                                        onJump: z,
                                        closePopout: W
                                    })
                                  : B && G && R === o.X.BOOKMARKS
                                    ? (0, r.jsx)(x.Z, {
                                          setTab: D,
                                          badgeState: T,
                                          closePopout: W
                                      })
                                    : R === o.X.SCHEDULED
                                      ? (0, r.jsx)(O._, {
                                            setTab: D,
                                            closePopout: W
                                        })
                                      : (0, r.jsx)(a.SV, {
                                            fallback: (0, r.jsx)(N.h, {
                                                setTab: D,
                                                closePopout: W,
                                                badgeState: T
                                            }),
                                            children: (0, r.jsx)(N.Z, {
                                                setTab: D,
                                                onJump: z,
                                                showTutorial: L,
                                                setSeenTutorial: M,
                                                closePopout: W,
                                                badgeState: T
                                            })
                                        })
                });
            },
            ignoreModalClicks: !0,
            clickTrap: !0,
            children: (e, t) => {
                let { isShown: n } = t;
                return S(U, n, e, H);
            }
        })
    });
}
