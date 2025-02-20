n.d(t, { k: () => I }), n(47120);
var r = n(200651),
    i = n(192379),
    a = n(274312),
    o = n(442837),
    l = n(524437),
    s = n(481060),
    c = n(100527),
    d = n(906732),
    u = n(602478),
    p = n(2818),
    m = n(768943),
    f = n(742989),
    h = n(675478),
    g = n(581883),
    _ = n(585483),
    b = n(400445),
    v = n(153209),
    y = n(956961),
    x = n(903672),
    O = n(711165),
    E = n(946443),
    j = n(264233),
    N = n(981631),
    C = n(388032);
function I(e) {
    let { onOpen: t, onClose: n, children: I, badgeState: S, popoutPosition: P, popoutAlign: T } = e,
        { analyticsLocations: A } = (0, d.ZP)(c.Z.NOTIFICATION_CENTER),
        [w, Z] = i.useState(!1),
        [k, R] = [
            (0, o.e7)([g.Z], () => {
                var e, t;
                return null !== (t = null === (e = g.Z.settings.inbox) || void 0 === e ? void 0 : e.currentTab) && void 0 !== t ? t : l.X.UNREADS;
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
        { showTutorial: L, setSeenTutorial: D } = (function (e) {
            let t = (0, o.e7)([g.Z], () => {
                    var e, t;
                    return null !== (t = null === (e = g.Z.settings.inbox) || void 0 === e ? void 0 : e.viewedTutorial) && void 0 !== t && t;
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
                showTutorial: !t && e === l.X.UNREADS,
                setSeenTutorial: n
            };
        })(k),
        M = i.useCallback(() => {
            Z(!1), w && (null == n || n());
        }, [n, w]),
        W = i.useCallback(() => {
            Z(!w), w ? null == n || n() : null == t || t();
        }, [n, t, w]);
    i.useEffect(() => (_.S.subscribe(N.CkL.TOGGLE_INBOX, W), () => void _.S.unsubscribe(N.CkL.TOGGLE_INBOX, W)), [W]);
    let { showReminders: F } = f.Z.useExperiment({ location: 'RecentsPopout' }),
        { enabled: U, inInbox: B } = p.Z.useExperiment({ location: 'RecentsPopout' }),
        G = (0, o.e7)([m.Z], () => m.Z.hasOverdueReminder(), []) && U && B,
        { enabled: H } = u.Z.useExperiment({ location: 'RecentsPopout' });
    i.useEffect(() => {
        (((!F || (U && B)) && k === l.X.TODOS) || (k === l.X.BOOKMARKS && !(U || B))) && R(l.X.MENTIONS);
    });
    let V = i.useCallback(
        (e) => {
            e.shiftKey || M();
        },
        [M]
    );
    return (0, r.jsx)(d.Gt, {
        value: A,
        children: (0, r.jsx)(s.yRy, {
            animation: s.yRy.Animation.NONE,
            position: P,
            align: T,
            autoInvert: !1,
            shouldShow: w,
            onRequestClose: M,
            renderPopout: function () {
                return (0, r.jsx)(s.VqE, {
                    'aria-label': C.NW.string(C.t.GSmTKC),
                    children:
                        k === l.X.FOR_YOU
                            ? (0, r.jsx)(v.Z, {
                                  setTab: R,
                                  badgeState: S,
                                  closePopout: M
                              })
                            : k === l.X.MENTIONS
                              ? (0, r.jsx)(x.Z, {
                                    setTab: R,
                                    onJump: V,
                                    badgeState: S,
                                    closePopout: M
                                })
                              : H && k === l.X.GAME_INVITES
                                ? (0, r.jsx)(j.Z, {
                                      setTab: R,
                                      badgeState: S,
                                      closePopout: M
                                  })
                                : F && k === l.X.TODOS
                                  ? (0, r.jsx)(y.Z, {
                                        setTab: R,
                                        onJump: V,
                                        closePopout: M
                                    })
                                  : U && B && k === l.X.BOOKMARKS
                                    ? (0, r.jsx)(b.Z, {
                                          setTab: R,
                                          badgeState: S,
                                          closePopout: M
                                      })
                                    : k === l.X.SCHEDULED
                                      ? (0, r.jsx)(O._, {
                                            setTab: R,
                                            closePopout: M
                                        })
                                      : (0, r.jsx)(a.SV, {
                                            fallback: (0, r.jsx)(E.h, {
                                                setTab: R,
                                                closePopout: M,
                                                badgeState: S
                                            }),
                                            children: (0, r.jsx)(E.Z, {
                                                setTab: R,
                                                onJump: V,
                                                showTutorial: L,
                                                setSeenTutorial: D,
                                                closePopout: M,
                                                badgeState: S
                                            })
                                        })
                });
            },
            ignoreModalClicks: !0,
            clickTrap: !0,
            children: (e, t) => {
                let { isShown: n } = t;
                return I(W, n, e, G);
            }
        })
    });
}
