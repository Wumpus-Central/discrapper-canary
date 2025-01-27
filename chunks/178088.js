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
    u = n(906732),
    d = n(602478),
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
        { analyticsLocations: P } = (0, u.ZP)(c.Z.NOTIFICATION_CENTER),
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
        { showTutorial: D, setSeenTutorial: k } = (function (e) {
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
        U = r.useCallback(() => {
            y(!1), L && (null == n || n());
        }, [n, L]),
        B = r.useCallback(() => {
            y(!L), L ? null == n || n() : null == t || t();
        }, [n, t, L]);
    r.useEffect(() => (g.S.subscribe(S.CkL.TOGGLE_INBOX, B), () => void g.S.unsubscribe(S.CkL.TOGGLE_INBOX, B)), [B]);
    let { showReminders: w } = f.Z.useExperiment({ location: 'RecentsPopout' }),
        { enabled: F, inInbox: G } = m.Z.useExperiment({ location: 'RecentsPopout' }),
        V = (0, a.e7)([h.Z], () => h.Z.hasOverdueReminder(), []) && F && G,
        { enabled: H } = d.Z.useExperiment({ location: 'RecentsPopout' });
    r.useEffect(() => {
        (((!w || (F && G)) && O === o.X.TODOS) || (O === o.X.BOOKMARKS && !(F || G))) && M(o.X.MENTIONS);
    });
    let z = r.useCallback(
        (e) => {
            !e.shiftKey && U();
        },
        [U]
    );
    return (0, i.jsx)(u.Gt, {
        value: P,
        children: (0, i.jsx)(s.Popout, {
            animation: s.Popout.Animation.NONE,
            position: R,
            align: Z,
            autoInvert: !1,
            shouldShow: L,
            onRequestClose: U,
            renderPopout: function () {
                return (0, i.jsx)(s.Dialog, {
                    'aria-label': A.intl.string(A.t.GSmTKC),
                    children:
                        O === o.X.FOR_YOU
                            ? (0, i.jsx)(C.Z, {
                                  setTab: M,
                                  badgeState: j,
                                  closePopout: U
                              })
                            : O === o.X.MENTIONS
                              ? (0, i.jsx)(x.Z, {
                                    setTab: M,
                                    onJump: z,
                                    badgeState: j,
                                    closePopout: U
                                })
                              : H && O === o.X.GAME_INVITES
                                ? (0, i.jsx)(T.Z, {
                                      setTab: M,
                                      badgeState: j,
                                      closePopout: U
                                  })
                                : w && O === o.X.TODOS
                                  ? (0, i.jsx)(I.Z, {
                                        setTab: M,
                                        onJump: z,
                                        closePopout: U
                                    })
                                  : F && G && O === o.X.BOOKMARKS
                                    ? (0, i.jsx)(E.Z, {
                                          setTab: M,
                                          badgeState: j,
                                          closePopout: U
                                      })
                                    : O === o.X.SCHEDULED
                                      ? (0, i.jsx)(N._, {
                                            setTab: M,
                                            closePopout: U
                                        })
                                      : (0, i.jsx)(l.SV, {
                                            fallback: (0, i.jsx)(v.h, {
                                                setTab: M,
                                                closePopout: U,
                                                badgeState: j
                                            }),
                                            children: (0, i.jsx)(v.Z, {
                                                setTab: M,
                                                onJump: z,
                                                showTutorial: D,
                                                setSeenTutorial: k,
                                                closePopout: U,
                                                badgeState: j
                                            })
                                        })
                });
            },
            ignoreModalClicks: !0,
            clickTrap: !0,
            children: (e, t) => {
                let { isShown: n } = t;
                return b(B, n, e, V);
            }
        })
    });
}
