n.d(t, { k: () => S }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(740442),
    o = n(442837),
    s = n(524437),
    a = n(481060),
    c = n(100527),
    u = n(906732),
    d = n(602478),
    h = n(2818),
    p = n(768943),
    f = n(675478),
    g = n(581883),
    m = n(585483),
    b = n(400445),
    _ = n(153209),
    O = n(903672),
    y = n(711165),
    v = n(946443),
    C = n(264233),
    j = n(981631),
    E = n(388032);
function S(e) {
    let { onOpen: t, onClose: n, children: S, badgeState: x, popoutPosition: I, popoutAlign: P, targetElementRef: N, spacing: w, dialogClassName: Z } = e,
        { analyticsLocations: T } = (0, u.ZP)(c.Z.NOTIFICATION_CENTER),
        [A, R] = i.useState(!1),
        [D, L] = [
            (0, o.e7)([g.Z], () => {
                var e, t;
                return null != (t = null == (e = g.Z.settings.inbox) ? void 0 : e.currentTab) ? t : s.X.UNREADS;
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
        { showTutorial: M, setSeenTutorial: k } = (function (e) {
            let t = (0, o.e7)([g.Z], () => {
                    var e, t;
                    return null != (t = null == (e = g.Z.settings.inbox) ? void 0 : e.viewedTutorial) && t;
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
                showTutorial: !t && e === s.X.UNREADS,
                setSeenTutorial: n
            };
        })(D),
        U = i.useCallback(() => {
            R(!1), A && (null == n || n());
        }, [n, A]),
        G = i.useCallback(() => {
            R(!A), A ? null == n || n() : null == t || t();
        }, [n, t, A]);
    i.useEffect(() => (m.S.subscribe(j.CkL.TOGGLE_INBOX, G), () => void m.S.unsubscribe(j.CkL.TOGGLE_INBOX, G)), [G]);
    let { enabled: B, inInbox: F } = h.Z.useExperiment({ location: 'RecentsPopout' }),
        V = (0, o.e7)([p.Z], () => p.Z.hasOverdueReminder(), []) && B && F,
        { enabled: H } = d.Z.useExperiment({ location: 'RecentsPopout' });
    i.useEffect(() => {
        D !== s.X.BOOKMARKS || B || F || L(s.X.MENTIONS);
    });
    let z = i.useCallback(
        (e) => {
            e.shiftKey || U();
        },
        [U]
    );
    return (0, r.jsx)(u.Gt, {
        value: T,
        children: (0, r.jsx)(a.yRy, {
            targetElementRef: N,
            animation: a.yRy.Animation.NONE,
            position: I,
            align: P,
            autoInvert: !1,
            shouldShow: A,
            onRequestClose: U,
            renderPopout: function () {
                return (0, r.jsx)(a.VqE, {
                    'aria-label': E.intl.string(E.t.GSmTKC),
                    className: Z,
                    children:
                        D === s.X.FOR_YOU
                            ? (0, r.jsx)(_.Z, {
                                  setTab: L,
                                  badgeState: x,
                                  closePopout: U
                              })
                            : D === s.X.MENTIONS
                              ? (0, r.jsx)(O.Z, {
                                    setTab: L,
                                    onJump: z,
                                    badgeState: x,
                                    closePopout: U
                                })
                              : H && D === s.X.GAME_INVITES
                                ? (0, r.jsx)(C.Z, {
                                      setTab: L,
                                      badgeState: x,
                                      closePopout: U
                                  })
                                : B && F && D === s.X.BOOKMARKS
                                  ? (0, r.jsx)(b.Z, {
                                        setTab: L,
                                        badgeState: x,
                                        closePopout: U
                                    })
                                  : D === s.X.SCHEDULED
                                    ? (0, r.jsx)(y._, {
                                          setTab: L,
                                          closePopout: U
                                      })
                                    : (0, r.jsx)(l.SV, {
                                          fallback: (0, r.jsx)(v.h, {
                                              setTab: L,
                                              closePopout: U,
                                              badgeState: x
                                          }),
                                          children: (0, r.jsx)(v.Z, {
                                              setTab: L,
                                              onJump: z,
                                              showTutorial: M,
                                              setSeenTutorial: k,
                                              closePopout: U,
                                              badgeState: x
                                          })
                                      })
                });
            },
            ignoreModalClicks: !0,
            spacing: w,
            clickTrap: !0,
            children: (e, t) => {
                let { isShown: n } = t;
                return S(G, n, e, V);
            }
        })
    });
}
