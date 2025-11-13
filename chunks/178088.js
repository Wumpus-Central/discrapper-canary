n.d(t, { k: () => Z }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(595697),
    s = n(442837),
    c = n(524437),
    u = n(481060),
    d = n(100527),
    p = n(906732),
    h = n(602478),
    f = n(2818),
    g = n(768943),
    m = n(453473),
    b = n(216789),
    _ = n(675478),
    y = n(581883),
    O = n(585483),
    v = n(153209),
    j = n(903672),
    x = n(791914),
    C = n(711165),
    E = n(946443),
    S = n(264233),
    I = n(981631),
    P = n(388032),
    N = n(253107);
function Z(e) {
    let {
            onOpen: t,
            onClose: n,
            children: l,
            badgeState: Z,
            popoutPosition: w,
            popoutAlign: T,
            targetElementRef: A,
            spacing: R,
            dialogClassName: D,
        } = e,
        { analyticsLocations: L } = (0, p.ZP)(d.Z.NOTIFICATION_CENTER),
        [M, k] = i.useState(!1),
        [G, U] = [
            (0, s.e7)([y.Z], () => {
                var e, t;
                return null != (t = null == (e = y.Z.settings.inbox) ? void 0 : e.currentTab) ? t : c.X.UNREADS;
            }),
            i.useCallback((e) => {
                _.hW.updateAsync(
                    "inbox",
                    (t) => {
                        if (t.currentTab === e) return !1;
                        t.currentTab = e;
                    },
                    _.fy.FREQUENT_USER_ACTION,
                );
            }, []),
        ],
        { showTutorial: B, setSeenTutorial: F } = (function (e) {
            let t = (0, s.e7)([y.Z], () => {
                    var e, t;
                    return null != (t = null == (e = y.Z.settings.inbox) ? void 0 : e.viewedTutorial) && t;
                }),
                n = i.useCallback(() => {
                    _.hW.updateAsync(
                        "inbox",
                        (e) => {
                            e.viewedTutorial = !0;
                        },
                        _.fy.INFREQUENT_USER_ACTION,
                    );
                }, []);
            return {
                showTutorial: !t && e === c.X.UNREADS,
                setSeenTutorial: n,
            };
        })(G),
        V = i.useCallback(() => {
            k(!1), M && (null == n || n());
        }, [n, M]),
        H = i.useCallback(() => {
            k(!M), M ? null == n || n() : null == t || t();
        }, [n, t, M]);
    i.useEffect(() => (O.S.subscribe(I.CkL.TOGGLE_INBOX, H), () => void O.S.unsubscribe(I.CkL.TOGGLE_INBOX, H)), [H]);
    let { enabled: z, inInbox: W } = f.Z.useExperiment({ location: "RecentsPopout" }),
        K = (0, s.e7)([g.Z], () => g.Z.hasOverdueReminder(), []) && z && W,
        { enabled: Y } = h.Z.useExperiment({ location: "RecentsPopout" });
    i.useEffect(() => {
        G !== c.X.BOOKMARKS || z || W || U(c.X.MENTIONS);
    });
    let q = i.useCallback(
            (e) => {
                e.shiftKey || V();
            },
            [V],
        ),
        X = (0, b.Us)({ location: "ForYou" });
    return (0, r.jsx)(p.Gt, {
        value: L,
        children: (0, r.jsx)(u.yRy, {
            targetElementRef: A,
            animation: u.yRy.Animation.NONE,
            position: w,
            align: T,
            autoInvert: !1,
            shouldShow: M,
            onRequestClose: V,
            renderPopout: function () {
                return (0, r.jsx)(u.VqE, {
                    "aria-label": P.intl.string(P.t.GSmTKJ),
                    className: D,
                    children: (0, r.jsx)("div", {
                        className: o()(N.container, { [N.widerInbox]: X }),
                        children: (0, r.jsx)(u.y5t, {
                            component: (0, r.jsx)(x.Z, {
                                tab: G,
                                setTab: U,
                                badgeState: Z,
                                closePopout: V,
                            }),
                            children:
                                G === c.X.FOR_YOU
                                    ? (0, r.jsx)(v.ZP, {})
                                    : G === c.X.MENTIONS
                                      ? (0, r.jsx)(j.Z, { onJump: q })
                                      : Y && G === c.X.GAME_INVITES
                                        ? (0, r.jsx)(S.Z, {})
                                        : z && W && G === c.X.BOOKMARKS
                                          ? (0, r.jsx)(m.K, { closePopout: V })
                                          : G === c.X.SCHEDULED
                                            ? (0, r.jsx)(C._, {})
                                            : (0, r.jsx)(a.SV, {
                                                  fallback: (0, r.jsx)(E.h6, {}),
                                                  children: (0, r.jsx)(E.ZP, {
                                                      onJump: q,
                                                      showTutorial: B,
                                                      setSeenTutorial: F,
                                                      closePopout: V,
                                                  }),
                                              }),
                        }),
                    }),
                });
            },
            ignoreModalClicks: !0,
            spacing: R,
            clickTrap: !0,
            children: (e, t) => {
                let { isShown: n } = t;
                return l(H, n, e, K);
            },
        }),
    });
}
