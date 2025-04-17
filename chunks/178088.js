n.d(t, { k: () => S }), n(388685);
var r = n(200651),
    i = n(192379),
    a = n(849057),
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
    b = n(400445),
    x = n(153209),
    y = n(956961),
    E = n(903672),
    v = n(711165),
    N = n(946443),
    O = n(264233),
    j = n(981631),
    C = n(388032);
function S(e) {
    let { onOpen: t, onClose: n, children: S, badgeState: I, popoutPosition: T, popoutAlign: P } = e,
        { analyticsLocations: A } = (0, u.ZP)(c.Z.NOTIFICATION_CENTER),
        [w, Z] = i.useState(!1),
        [R, k] = [
            (0, l.e7)([g.Z], () => {
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
        M = i.useCallback(() => {
            Z(!1), w && (null == n || n());
        }, [n, w]),
        W = i.useCallback(() => {
            Z(!w), w ? null == n || n() : null == t || t();
        }, [n, t, w]);
    i.useEffect(() => (_.S.subscribe(j.CkL.TOGGLE_INBOX, W), () => void _.S.unsubscribe(j.CkL.TOGGLE_INBOX, W)), [W]);
    let { showReminders: U } = f.Z.useExperiment({ location: 'RecentsPopout' }),
        { enabled: F, inInbox: B } = p.Z.useExperiment({ location: 'RecentsPopout' }),
        G = (0, l.e7)([m.Z], () => m.Z.hasOverdueReminder(), []) && F && B,
        { enabled: H } = d.Z.useExperiment({ location: 'RecentsPopout' });
    i.useEffect(() => {
        (((!U || (F && B)) && R === o.X.TODOS) || (R === o.X.BOOKMARKS && !(F || B))) && k(o.X.MENTIONS);
    });
    let V = i.useCallback(
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
                    'aria-label': C.NW.string(C.t.GSmTKC),
                    children:
                        R === o.X.FOR_YOU
                            ? (0, r.jsx)(x.Z, {
                                  setTab: k,
                                  badgeState: I,
                                  closePopout: M
                              })
                            : R === o.X.MENTIONS
                              ? (0, r.jsx)(E.Z, {
                                    setTab: k,
                                    onJump: V,
                                    badgeState: I,
                                    closePopout: M
                                })
                              : H && R === o.X.GAME_INVITES
                                ? (0, r.jsx)(O.Z, {
                                      setTab: k,
                                      badgeState: I,
                                      closePopout: M
                                  })
                                : U && R === o.X.TODOS
                                  ? (0, r.jsx)(y.Z, {
                                        setTab: k,
                                        onJump: V,
                                        closePopout: M
                                    })
                                  : F && B && R === o.X.BOOKMARKS
                                    ? (0, r.jsx)(b.Z, {
                                          setTab: k,
                                          badgeState: I,
                                          closePopout: M
                                      })
                                    : R === o.X.SCHEDULED
                                      ? (0, r.jsx)(v._, {
                                            setTab: k,
                                            closePopout: M
                                        })
                                      : (0, r.jsx)(a.SV, {
                                            fallback: (0, r.jsx)(N.h, {
                                                setTab: k,
                                                closePopout: M,
                                                badgeState: I
                                            }),
                                            children: (0, r.jsx)(N.Z, {
                                                setTab: k,
                                                onJump: V,
                                                showTutorial: D,
                                                setSeenTutorial: L,
                                                closePopout: M,
                                                badgeState: I
                                            })
                                        })
                });
            },
            ignoreModalClicks: !0,
            clickTrap: !0,
            children: (e, t) => {
                let { isShown: n } = t;
                return S(W, n, e, G);
            }
        })
    });
}
