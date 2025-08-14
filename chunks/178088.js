n.d(t, { k: () => w }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(740442),
    s = n(442837),
    c = n(524437),
    u = n(481060),
    d = n(100527),
    p = n(906732),
    f = n(602478),
    h = n(2818),
    g = n(768943),
    m = n(453473),
    b = n(216789),
    O = n(675478),
    _ = n(581883),
    y = n(585483),
    v = n(153209),
    j = n(903672),
    C = n(791914),
    E = n(711165),
    x = n(946443),
    S = n(264233),
    P = n(981631),
    I = n(388032),
    N = n(253107);
function w(e) {
    let {
            onOpen: t,
            onClose: n,
            children: l,
            badgeState: w,
            popoutPosition: Z,
            popoutAlign: T,
            targetElementRef: A,
            spacing: R,
            dialogClassName: D,
        } = e,
        { analyticsLocations: L } = (0, p.ZP)(d.Z.NOTIFICATION_CENTER),
        [M, k] = i.useState(!1),
        [U, G] = [
            (0, s.e7)([_.Z], () => {
                var e, t;
                return null != (t = null == (e = _.Z.settings.inbox) ? void 0 : e.currentTab) ? t : c.X.UNREADS;
            }),
            i.useCallback((e) => {
                O.hW.updateAsync(
                    "inbox",
                    (t) => {
                        if (t.currentTab === e) return !1;
                        t.currentTab = e;
                    },
                    O.fy.FREQUENT_USER_ACTION,
                );
            }, []),
        ],
        { showTutorial: B, setSeenTutorial: V } = (function (e) {
            let t = (0, s.e7)([_.Z], () => {
                    var e, t;
                    return null != (t = null == (e = _.Z.settings.inbox) ? void 0 : e.viewedTutorial) && t;
                }),
                n = i.useCallback(() => {
                    O.hW.updateAsync(
                        "inbox",
                        (e) => {
                            e.viewedTutorial = !0;
                        },
                        O.fy.INFREQUENT_USER_ACTION,
                    );
                }, []);
            return {
                showTutorial: !t && e === c.X.UNREADS,
                setSeenTutorial: n,
            };
        })(U),
        F = i.useCallback(() => {
            k(!1), M && (null == n || n());
        }, [n, M]),
        H = i.useCallback(() => {
            k(!M), M ? null == n || n() : null == t || t();
        }, [n, t, M]);
    i.useEffect(() => (y.S.subscribe(P.CkL.TOGGLE_INBOX, H), () => void y.S.unsubscribe(P.CkL.TOGGLE_INBOX, H)), [H]);
    let { enabled: z, inInbox: W } = h.Z.useExperiment({ location: "RecentsPopout" }),
        K = (0, s.e7)([g.Z], () => g.Z.hasOverdueReminder(), []) && z && W,
        { enabled: Y } = f.Z.useExperiment({ location: "RecentsPopout" });
    i.useEffect(() => {
        U !== c.X.BOOKMARKS || z || W || G(c.X.MENTIONS);
    });
    let q = i.useCallback(
            (e) => {
                e.shiftKey || F();
            },
            [F],
        ),
        X = (0, b.Us)({ location: "ForYou" });
    return (0, r.jsx)(p.Gt, {
        value: L,
        children: (0, r.jsx)(u.yRy, {
            targetElementRef: A,
            animation: u.yRy.Animation.NONE,
            position: Z,
            align: T,
            autoInvert: !1,
            shouldShow: M,
            onRequestClose: F,
            renderPopout: function () {
                return (0, r.jsx)(u.VqE, {
                    "aria-label": I.intl.string(I.t.GSmTKC),
                    className: D,
                    children: (0, r.jsx)("div", {
                        className: o()(N.container, { [N.widerInbox]: X }),
                        children: (0, r.jsx)(u.y5t, {
                            component: (0, r.jsx)(C.Z, {
                                tab: U,
                                setTab: G,
                                badgeState: w,
                                closePopout: F,
                            }),
                            children:
                                U === c.X.FOR_YOU
                                    ? (0, r.jsx)(v.ZP, {})
                                    : U === c.X.MENTIONS
                                      ? (0, r.jsx)(j.Z, { onJump: q })
                                      : Y && U === c.X.GAME_INVITES
                                        ? (0, r.jsx)(S.Z, {})
                                        : z && W && U === c.X.BOOKMARKS
                                          ? (0, r.jsx)(m.K, { closePopout: F })
                                          : U === c.X.SCHEDULED
                                            ? (0, r.jsx)(E._, {})
                                            : (0, r.jsx)(a.SV, {
                                                  fallback: (0, r.jsx)(x.h6, {}),
                                                  children: (0, r.jsx)(x.ZP, {
                                                      onJump: q,
                                                      showTutorial: B,
                                                      setSeenTutorial: V,
                                                      closePopout: F,
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
