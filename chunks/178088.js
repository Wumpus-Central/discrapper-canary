n.d(t, { k: () => A }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(274312),
    r = n(442837),
    s = n(524437),
    o = n(481060),
    c = n(100527),
    d = n(906732),
    u = n(602478),
    m = n(2818),
    _ = n(768943),
    h = n(742989),
    p = n(675478),
    g = n(581883),
    f = n(585483),
    x = n(400445),
    C = n(153209),
    v = n(956961),
    E = n(903672),
    I = n(711165),
    N = n(946443),
    S = n(264233),
    T = n(981631),
    b = n(388032);
function A(e) {
    let { onOpen: t, onClose: n, children: A, badgeState: j, popoutPosition: y, popoutAlign: Z } = e,
        { analyticsLocations: R } = (0, d.ZP)(c.Z.NOTIFICATION_CENTER),
        [L, P] = l.useState(!1),
        [k, M] = [
            (0, r.e7)([g.Z], () => {
                var e, t;
                return null !== (t = null === (e = g.Z.settings.inbox) || void 0 === e ? void 0 : e.currentTab) && void 0 !== t ? t : s.X.UNREADS;
            }),
            l.useCallback((e) => {
                p.hW.updateAsync(
                    'inbox',
                    (t) => {
                        if (t.currentTab === e) return !1;
                        t.currentTab = e;
                    },
                    p.fy.FREQUENT_USER_ACTION
                );
            }, [])
        ],
        { showTutorial: O, setSeenTutorial: D } = (function (e) {
            let t = (0, r.e7)([g.Z], () => {
                    var e, t;
                    return null !== (t = null === (e = g.Z.settings.inbox) || void 0 === e ? void 0 : e.viewedTutorial) && void 0 !== t && t;
                }),
                n = l.useCallback(() => {
                    p.hW.updateAsync(
                        'inbox',
                        (e) => {
                            e.viewedTutorial = !0;
                        },
                        p.fy.INFREQUENT_USER_ACTION
                    );
                }, []);
            return {
                showTutorial: !t && e === s.X.UNREADS,
                setSeenTutorial: n
            };
        })(k),
        w = l.useCallback(() => {
            P(!1), L && (null == n || n());
        }, [n, L]),
        F = l.useCallback(() => {
            P(!L), L ? null == n || n() : null == t || t();
        }, [n, t, L]);
    l.useEffect(() => (f.S.subscribe(T.CkL.TOGGLE_INBOX, F), () => void f.S.unsubscribe(T.CkL.TOGGLE_INBOX, F)), [F]);
    let { showReminders: U } = h.Z.useExperiment({ location: 'RecentsPopout' }),
        { enabled: B, inInbox: G } = m.Z.useExperiment({ location: 'RecentsPopout' }),
        H = (0, r.e7)([_.Z], () => _.Z.hasOverdueReminder(), []) && B && G,
        { enabled: V } = u.Z.useExperiment({ location: 'RecentsPopout' });
    l.useEffect(() => {
        (((!U || (B && G)) && k === s.X.TODOS) || (k === s.X.BOOKMARKS && !(B || G))) && M(s.X.MENTIONS);
    });
    let z = l.useCallback(
        (e) => {
            e.shiftKey || w();
        },
        [w]
    );
    return (0, i.jsx)(d.Gt, {
        value: R,
        children: (0, i.jsx)(o.yRy, {
            animation: o.yRy.Animation.NONE,
            position: y,
            align: Z,
            autoInvert: !1,
            shouldShow: L,
            onRequestClose: w,
            renderPopout: function () {
                return (0, i.jsx)(o.VqE, {
                    'aria-label': b.intl.string(b.t.GSmTKC),
                    children:
                        k === s.X.FOR_YOU
                            ? (0, i.jsx)(C.Z, {
                                  setTab: M,
                                  badgeState: j,
                                  closePopout: w
                              })
                            : k === s.X.MENTIONS
                              ? (0, i.jsx)(E.Z, {
                                    setTab: M,
                                    onJump: z,
                                    badgeState: j,
                                    closePopout: w
                                })
                              : V && k === s.X.GAME_INVITES
                                ? (0, i.jsx)(S.Z, {
                                      setTab: M,
                                      badgeState: j,
                                      closePopout: w
                                  })
                                : U && k === s.X.TODOS
                                  ? (0, i.jsx)(v.Z, {
                                        setTab: M,
                                        onJump: z,
                                        closePopout: w
                                    })
                                  : B && G && k === s.X.BOOKMARKS
                                    ? (0, i.jsx)(x.Z, {
                                          setTab: M,
                                          badgeState: j,
                                          closePopout: w
                                      })
                                    : k === s.X.SCHEDULED
                                      ? (0, i.jsx)(I._, {
                                            setTab: M,
                                            closePopout: w
                                        })
                                      : (0, i.jsx)(a.SV, {
                                            fallback: (0, i.jsx)(N.h, {
                                                setTab: M,
                                                closePopout: w,
                                                badgeState: j
                                            }),
                                            children: (0, i.jsx)(N.Z, {
                                                setTab: M,
                                                onJump: z,
                                                showTutorial: O,
                                                setSeenTutorial: D,
                                                closePopout: w,
                                                badgeState: j
                                            })
                                        })
                });
            },
            ignoreModalClicks: !0,
            clickTrap: !0,
            children: (e, t) => {
                let { isShown: n } = t;
                return A(F, n, e, H);
            }
        })
    });
}
