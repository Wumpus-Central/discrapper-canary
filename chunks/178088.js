n.d(t, {
    k: function () {
        return A;
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
    N = n(946443),
    v = n(264233),
    T = n(981631),
    S = n(388032);
function A(e) {
    let { onOpen: t, onClose: n, children: A, badgeState: b, popoutPosition: j, popoutAlign: R } = e,
        { analyticsLocations: Z } = (0, u.ZP)(c.Z.NOTIFICATION_CENTER),
        [P, L] = r.useState(!1),
        [y, O] = (function () {
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
        { showTutorial: M, setSeenTutorial: k } = (function (e) {
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
        })(y),
        D = r.useCallback(() => {
            L(!1), P && (null == n || n());
        }, [n, P]),
        B = r.useCallback(() => {
            L(!P), P ? null == n || n() : null == t || t();
        }, [n, t, P]);
    r.useEffect(() => (g.S.subscribe(T.CkL.TOGGLE_INBOX, B), () => void g.S.unsubscribe(T.CkL.TOGGLE_INBOX, B)), [B]);
    let { showReminders: U } = f.Z.useExperiment({ location: 'RecentsPopout' }),
        { enabled: w, inInbox: F } = m.Z.useExperiment({ location: 'RecentsPopout' }),
        G = (0, a.e7)([h.Z], () => h.Z.hasOverdueReminder(), []) && w && F,
        { enabled: V } = d.Z.useExperiment({ location: 'RecentsPopout' });
    r.useEffect(() => {
        (((!U || (w && F)) && y === o.X.TODOS) || (y === o.X.BOOKMARKS && !(w || F))) && O(o.X.MENTIONS);
    });
    let H = r.useCallback(
        (e) => {
            !e.shiftKey && D();
        },
        [D]
    );
    return (0, i.jsx)(u.Gt, {
        value: Z,
        children: (0, i.jsx)(s.Popout, {
            animation: s.Popout.Animation.NONE,
            position: j,
            align: R,
            autoInvert: !1,
            shouldShow: P,
            onRequestClose: D,
            renderPopout: function () {
                return (0, i.jsx)(s.Dialog, {
                    'aria-label': S.intl.string(S.t.GSmTKC),
                    children:
                        y === o.X.FOR_YOU
                            ? (0, i.jsx)(C.Z, {
                                  setTab: O,
                                  badgeState: b,
                                  closePopout: D
                              })
                            : y === o.X.MENTIONS
                              ? (0, i.jsx)(x.Z, {
                                    setTab: O,
                                    onJump: H,
                                    badgeState: b,
                                    closePopout: D
                                })
                              : V && y === o.X.GAME_INVITES
                                ? (0, i.jsx)(v.Z, {
                                      setTab: O,
                                      badgeState: b,
                                      closePopout: D
                                  })
                                : U && y === o.X.TODOS
                                  ? (0, i.jsx)(I.Z, {
                                        setTab: O,
                                        onJump: H,
                                        closePopout: D
                                    })
                                  : w && F && y === o.X.BOOKMARKS
                                    ? (0, i.jsx)(E.Z, {
                                          setTab: O,
                                          badgeState: b,
                                          closePopout: D
                                      })
                                    : (0, i.jsx)(l.SV, {
                                          fallback: (0, i.jsx)(N.h, {
                                              setTab: O,
                                              closePopout: D,
                                              badgeState: b
                                          }),
                                          children: (0, i.jsx)(N.Z, {
                                              setTab: O,
                                              onJump: H,
                                              showTutorial: M,
                                              setSeenTutorial: k,
                                              closePopout: D,
                                              badgeState: b
                                          })
                                      })
                });
            },
            ignoreModalClicks: !0,
            clickTrap: !0,
            children: (e, t) => {
                let { isShown: n } = t;
                return A(B, n, e, G);
            }
        })
    });
}
