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
    E = n(903672),
    y = n(711165),
    x = n(946443),
    v = n(264233),
    O = n(981631),
    j = n(388032);
function C(e) {
    let { onOpen: t, onClose: n, children: C, badgeState: S, popoutPosition: I, popoutAlign: N, targetElementRef: T, spacing: P, dialogClassName: A } = e,
        { analyticsLocations: w } = (0, u.ZP)(c.Z.NOTIFICATION_CENTER),
        [Z, R] = i.useState(!1),
        [k, D] = [
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
        { showTutorial: L, setSeenTutorial: M } = (function (e) {
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
        })(k),
        U = i.useCallback(() => {
            R(!1), Z && (null == n || n());
        }, [n, Z]),
        F = i.useCallback(() => {
            R(!Z), Z ? null == n || n() : null == t || t();
        }, [n, t, Z]);
    i.useEffect(() => (g.S.subscribe(O.CkL.TOGGLE_INBOX, F), () => void g.S.unsubscribe(O.CkL.TOGGLE_INBOX, F)), [F]);
    let { enabled: B, inInbox: G } = p.Z.useExperiment({ location: 'RecentsPopout' }),
        H = (0, a.e7)([m.Z], () => m.Z.hasOverdueReminder(), []) && B && G,
        { enabled: V } = d.Z.useExperiment({ location: 'RecentsPopout' });
    i.useEffect(() => {
        k !== o.X.BOOKMARKS || B || G || D(o.X.MENTIONS);
    });
    let z = i.useCallback(
        (e) => {
            e.shiftKey || U();
        },
        [U]
    );
    return (0, r.jsx)(u.Gt, {
        value: w,
        children: (0, r.jsx)(s.yRy, {
            targetElementRef: T,
            animation: s.yRy.Animation.NONE,
            position: I,
            align: N,
            autoInvert: !1,
            shouldShow: Z,
            onRequestClose: U,
            renderPopout: function () {
                return (0, r.jsx)(s.VqE, {
                    'aria-label': j.intl.string(j.t.GSmTKC),
                    className: A,
                    children:
                        k === o.X.FOR_YOU
                            ? (0, r.jsx)(b.Z, {
                                  setTab: D,
                                  badgeState: S,
                                  closePopout: U
                              })
                            : k === o.X.MENTIONS
                              ? (0, r.jsx)(E.Z, {
                                    setTab: D,
                                    onJump: z,
                                    badgeState: S,
                                    closePopout: U
                                })
                              : V && k === o.X.GAME_INVITES
                                ? (0, r.jsx)(v.Z, {
                                      setTab: D,
                                      badgeState: S,
                                      closePopout: U
                                  })
                                : B && G && k === o.X.BOOKMARKS
                                  ? (0, r.jsx)(_.Z, {
                                        setTab: D,
                                        badgeState: S,
                                        closePopout: U
                                    })
                                  : k === o.X.SCHEDULED
                                    ? (0, r.jsx)(y._, {
                                          setTab: D,
                                          closePopout: U
                                      })
                                    : (0, r.jsx)(l.SV, {
                                          fallback: (0, r.jsx)(x.h, {
                                              setTab: D,
                                              closePopout: U,
                                              badgeState: S
                                          }),
                                          children: (0, r.jsx)(x.Z, {
                                              setTab: D,
                                              onJump: z,
                                              showTutorial: L,
                                              setSeenTutorial: M,
                                              closePopout: U,
                                              badgeState: S
                                          })
                                      })
                });
            },
            ignoreModalClicks: !0,
            spacing: P,
            clickTrap: !0,
            children: (e, t) => {
                let { isShown: n } = t;
                return C(F, n, e, H);
            }
        })
    });
}
