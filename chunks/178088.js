n.d(t, {
    k: function () {
        return b;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(274312),
    a = n(442837),
    o = n(524437),
    s = n(481060),
    c = n(100527),
    d = n(906732),
    u = n(602478),
    m = n(2818),
    h = n(768943),
    f = n(742989),
    p = n(675478),
    _ = n(581883),
    g = n(585483),
    E = n(400445),
    C = n(153209),
    I = n(956961),
    x = n(903672),
    N = n(711165),
    v = n(946443),
    T = n(264233),
    S = n(981631),
    A = n(388032);
function b(e) {
    let { onOpen: t, onClose: n, children: b, badgeState: j, popoutPosition: R, popoutAlign: Z } = e,
        { analyticsLocations: P } = (0, d.ZP)(c.Z.NOTIFICATION_CENTER),
        [L, y] = r.useState(!1),
        [O, M] = (function () {
            let e = (0, a.e7)([_.Z], () => {
                var e, t;
                return null !== (t = null === (e = _.Z.settings.inbox) || void 0 === e ? void 0 : e.currentTab) && void 0 !== t ? t : o.X.UNREADS;
            });
            return [
                e,
                r.useCallback((e) => {
                    p.hW.updateAsync(
                        'inbox',
                        (t) => {
                            if (t.currentTab === e) return !1;
                            t.currentTab = e;
                        },
                        p.fy.FREQUENT_USER_ACTION
                    );
                }, [])
            ];
        })(),
        { showTutorial: k, setSeenTutorial: D } = (function (e) {
            let t = (0, a.e7)([_.Z], () => {
                    var e, t;
                    return null !== (t = null === (e = _.Z.settings.inbox) || void 0 === e ? void 0 : e.viewedTutorial) && void 0 !== t && t;
                }),
                n = r.useCallback(() => {
                    p.hW.updateAsync(
                        'inbox',
                        (e) => {
                            e.viewedTutorial = !0;
                        },
                        p.fy.INFREQUENT_USER_ACTION
                    );
                }, []);
            return {
                showTutorial: !t && e === o.X.UNREADS,
                setSeenTutorial: n
            };
        })(O),
        B = r.useCallback(() => {
            y(!1), L && (null == n || n());
        }, [n, L]),
        U = r.useCallback(() => {
            y(!L), L ? null == n || n() : null == t || t();
        }, [n, t, L]);
    r.useEffect(() => (g.S.subscribe(S.CkL.TOGGLE_INBOX, U), () => void g.S.unsubscribe(S.CkL.TOGGLE_INBOX, U)), [U]);
    let { showReminders: w } = f.Z.useExperiment({ location: 'RecentsPopout' }),
        { enabled: F, inInbox: G } = m.Z.useExperiment({ location: 'RecentsPopout' }),
        V = (0, a.e7)([h.Z], () => h.Z.hasOverdueReminder(), []) && F && G,
        { enabled: H } = u.Z.useExperiment({ location: 'RecentsPopout' });
    r.useEffect(() => {
        (((!w || (F && G)) && O === o.X.TODOS) || (O === o.X.BOOKMARKS && !(F || G))) && M(o.X.MENTIONS);
    });
    let z = r.useCallback(
        (e) => {
            !e.shiftKey && B();
        },
        [B]
    );
    return (0, i.jsx)(d.Gt, {
        value: P,
        children: (0, i.jsx)(s.Popout, {
            animation: s.Popout.Animation.NONE,
            position: R,
            align: Z,
            autoInvert: !1,
            shouldShow: L,
            onRequestClose: B,
            renderPopout: function () {
                return (0, i.jsx)(s.Dialog, {
                    'aria-label': A.intl.string(A.t.GSmTKC),
                    children:
                        O === o.X.FOR_YOU
                            ? (0, i.jsx)(C.Z, {
                                  setTab: M,
                                  badgeState: j,
                                  closePopout: B
                              })
                            : O === o.X.MENTIONS
                              ? (0, i.jsx)(x.Z, {
                                    setTab: M,
                                    onJump: z,
                                    badgeState: j,
                                    closePopout: B
                                })
                              : H && O === o.X.GAME_INVITES
                                ? (0, i.jsx)(T.Z, {
                                      setTab: M,
                                      badgeState: j,
                                      closePopout: B
                                  })
                                : w && O === o.X.TODOS
                                  ? (0, i.jsx)(I.Z, {
                                        setTab: M,
                                        onJump: z,
                                        closePopout: B
                                    })
                                  : F && G && O === o.X.BOOKMARKS
                                    ? (0, i.jsx)(E.Z, {
                                          setTab: M,
                                          badgeState: j,
                                          closePopout: B
                                      })
                                    : O === o.X.SCHEDULED
                                      ? (0, i.jsx)(N._, {
                                            setTab: M,
                                            closePopout: B
                                        })
                                      : (0, i.jsx)(l.SV, {
                                            fallback: (0, i.jsx)(v.h, {
                                                setTab: M,
                                                closePopout: B,
                                                badgeState: j
                                            }),
                                            children: (0, i.jsx)(v.Z, {
                                                setTab: M,
                                                onJump: z,
                                                showTutorial: k,
                                                setSeenTutorial: D,
                                                closePopout: B,
                                                badgeState: j
                                            })
                                        })
                });
            },
            ignoreModalClicks: !0,
            clickTrap: !0,
            children: (e, t) => {
                let { isShown: n } = t;
                return b(U, n, e, V);
            }
        })
    });
}
