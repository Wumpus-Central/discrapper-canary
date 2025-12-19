n.d(t, { k: () => P }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(734610),
    s = n(442837),
    c = n(524437),
    u = n(481060),
    d = n(100527),
    f = n(906732),
    h = n(2818),
    p = n(768943),
    g = n(453473),
    b = n(216789),
    m = n(675478),
    y = n(581883),
    O = n(585483),
    v = n(153209),
    j = n(903672),
    C = n(791914),
    x = n(711165),
    E = n(946443),
    S = n(981631),
    I = n(388032),
    _ = n(424626);
function P(e) {
    let {
            onOpen: t,
            onClose: n,
            children: l,
            badgeState: P,
            popoutPosition: N,
            popoutAlign: Z,
            targetElementRef: w,
            spacing: T,
            dialogClassName: A,
        } = e,
        { analyticsLocations: R } = (0, f.ZP)(d.Z.NOTIFICATION_CENTER),
        [D, M] = i.useState(!1),
        [L, k] = [
            (0, s.e7)([y.Z], () => {
                var e, t;
                return null != (t = null == (e = y.Z.settings.inbox) ? void 0 : e.currentTab) ? t : c.X.UNREADS;
            }),
            i.useCallback((e) => {
                m.hW.updateAsync(
                    "inbox",
                    (t) => {
                        if (t.currentTab === e) return !1;
                        t.currentTab = e;
                    },
                    m.fy.FREQUENT_USER_ACTION,
                );
            }, []),
        ],
        { showTutorial: G, setSeenTutorial: U } = (function (e) {
            let t = (0, s.e7)([y.Z], () => {
                    var e, t;
                    return null != (t = null == (e = y.Z.settings.inbox) ? void 0 : e.viewedTutorial) && t;
                }),
                n = i.useCallback(() => {
                    m.hW.updateAsync(
                        "inbox",
                        (e) => {
                            e.viewedTutorial = !0;
                        },
                        m.fy.INFREQUENT_USER_ACTION,
                    );
                }, []);
            return {
                showTutorial: !t && e === c.X.UNREADS,
                setSeenTutorial: n,
            };
        })(L),
        B = i.useCallback(() => {
            M(!1), D && (null == n || n());
        }, [n, D]),
        F = i.useCallback(() => {
            M(!D), D ? null == n || n() : null == t || t();
        }, [n, t, D]);
    i.useEffect(() => (O.S.subscribe(S.CkL.TOGGLE_INBOX, F), () => void O.S.unsubscribe(S.CkL.TOGGLE_INBOX, F)), [F]);
    let { enabled: V, inInbox: H } = h.Z.useExperiment({ location: "RecentsPopout" }),
        W = (0, s.e7)([p.Z], () => p.Z.hasOverdueReminder(), []) && V && H;
    i.useEffect(() => {
        L !== c.X.BOOKMARKS || V || H || k(c.X.MENTIONS), L === c.X.GAME_INVITES && k(c.X.MENTIONS);
    });
    let z = i.useCallback(
            (e) => {
                e.shiftKey || B();
            },
            [B],
        ),
        K = (0, b.Us)({ location: "ForYou" });
    return (0, r.jsx)(f.Gt, {
        value: R,
        children: (0, r.jsx)(u.yRy, {
            targetElementRef: w,
            animation: u.yRy.Animation.NONE,
            position: N,
            align: Z,
            autoInvert: !1,
            shouldShow: D,
            onRequestClose: B,
            renderPopout: function () {
                return (0, r.jsx)(u.VqE, {
                    "aria-label": I.intl.string(I.t.GSmTKJ),
                    className: A,
                    children: (0, r.jsx)("div", {
                        className: a()(_.container, { [_.widerInbox]: K }),
                        children: (0, r.jsx)(u.y5t, {
                            component: (0, r.jsx)(C.Z, {
                                tab: L,
                                setTab: k,
                                badgeState: P,
                                closePopout: B,
                            }),
                            children:
                                L === c.X.FOR_YOU
                                    ? (0, r.jsx)(v.ZP, {})
                                    : L === c.X.MENTIONS
                                      ? (0, r.jsx)(j.Z, { onJump: z })
                                      : V && H && L === c.X.BOOKMARKS
                                        ? (0, r.jsx)(g.K, { closePopout: B })
                                        : L === c.X.SCHEDULED
                                          ? (0, r.jsx)(x._, {})
                                          : (0, r.jsx)(o.SV, {
                                                fallback: (0, r.jsx)(E.h6, {}),
                                                children: (0, r.jsx)(E.ZP, {
                                                    onJump: z,
                                                    showTutorial: G,
                                                    setSeenTutorial: U,
                                                    closePopout: B,
                                                }),
                                            }),
                        }),
                    }),
                });
            },
            ignoreModalClicks: !0,
            spacing: T,
            clickTrap: !0,
            children: (e, t) => {
                let { isShown: n } = t;
                return l(F, n, e, W);
            },
        }),
    });
}
