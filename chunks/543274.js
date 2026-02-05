n.d(t, { K: () => j }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(554146),
    r = n(990078),
    o = n(397927),
    d = n(155718),
    c = n(933958),
    u = n(404522),
    h = n(782091),
    A = n(641703),
    g = n(807067),
    m = n(521588),
    p = n(688810),
    _ = n(975412),
    x = n(384059),
    f = n(379848),
    E = n(267102),
    C = n(421773),
    I = n(168754),
    S = n(376086),
    b = n(652215),
    N = n(49999),
    T = n(985018);
function j(e) {
    let { channel: t, idle: n, whichPopoutIsOpen: j, setWhichPopoutIsOpen: v } = e,
        y = (0, s.bG)([c.Ay], () => c.Ay.isLaunchingActivity()),
        R = (0, h.et)(t.id),
        O = (0, h.dL)(R),
        L = R !== h.xy.CAN_LAUNCH || y,
        { isHovered: D, setIsHovered: M, onMouseEnter: G, onMouseLeave: U } = (0, C.A)(200, 300),
        P = (0, u.b)({ surface: d.YI.VOICE_LAUNCHER }),
        k = (0, s.bG)(
            [c.Ay],
            () => null != c.Ay.getSelfEmbeddedActivityForLocation(c.Ay.getConnectedActivityLocation()),
        ),
        w = !L,
        V = l.useCallback(
            (e) => {
                "focus" !== e.type && G();
            },
            [G],
        ),
        B = (0, E.Us)() === b.BRT.POPOUT,
        { parentAnalyticsLocation: H, newestAnalyticsLocation: F } = (0, p.Ay)(),
        Y = l.useCallback(() => {
            (0, x.X)(H, x.O.ACTIVITY),
                (0, _.A)({
                    context: null != t ? { type: "channel", channel: t } : { type: "contextless" },
                    openInPopout: B,
                    analyticsLocation: F,
                });
        }, [t, B, F, H]),
        W = [];
    L || W.push(a.M.ACTIVITIES_MINI_SHELF_SPARKLES),
        (0, A.A)(t.id) && !L && W.push(a.M.ACTIVITY_GDM_ROCKET_SPARKLE),
        L || W.push(a.M.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP);
    let K = l.useRef(!1),
        z = l.useRef(null);
    return (0, i.jsx)(f.Ay, {
        contentTypes: W,
        children: (e) => {
            let { visibleContent: l, markAsDismissed: s } = e,
                d = l === a.M.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP && !n && !D;
            return (
                K.current && !d && s(N.i.AUTO_DISMISS),
                K.current !== d && (K.current = d),
                (0, i.jsx)(o.YNO, {
                    targetElementRef: z,
                    fixed: !0,
                    shouldShow: D && (j === S.P.ACTIVITY || null == j),
                    animation: o.YNO.Animation.FADE,
                    animationPosition: "top",
                    position: "top",
                    align: "center",
                    spacing: 16,
                    onRequestClose: () => {
                        M(!1), v?.(void 0);
                    },
                    renderPopout: (e) => {
                        let { closePopout: n, setPopoutRef: l } = e;
                        return w
                            ? (0, i.jsx)(g.f, {
                                  ref: (e) => {
                                      l?.(e);
                                  },
                                  channel: t,
                                  closePopout: n,
                                  onMouseEnter: G,
                                  onMouseLeave: U,
                                  isHovered: D,
                                  onClick: () => s(N.i.UNKNOWN),
                              })
                            : (0, i.jsx)(i.Fragment, {});
                    },
                    children: () =>
                        (0, i.jsx)(f.GY, {
                            contentType: a.M.ACTIVITIES_VOICE_LAUNCHER_BADGE,
                            latestVersion: P,
                            children: (e) => {
                                let { visibleContent: t, markAsDismissed: n } = e;
                                return (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(r.m, {
                                            text: T.intl.string(T.t.P8vmUv),
                                            forceOpen: !0,
                                            shouldShow: d,
                                            children: (0, i.jsx)("div", {
                                                ref: z,
                                                children: (0, i.jsx)(I.A, {
                                                    disabled: L,
                                                    "aria-label": O,
                                                    label: w ? void 0 : O,
                                                    isActivityActive: k,
                                                    onClick: () => {
                                                        Y(),
                                                            (l === a.M.ACTIVITIES_MINI_SHELF_SPARKLES ||
                                                                l === a.M.ACTIVITY_GDM_ROCKET_SPARKLE ||
                                                                l ===
                                                                    a.M
                                                                        .ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_1_SPARKLES ||
                                                                l ===
                                                                    a.M
                                                                        .ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_2_SPARKLES ||
                                                                l ===
                                                                    a.M
                                                                        .VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP) &&
                                                                s(N.i.TAKE_ACTION),
                                                            t === a.M.ACTIVITIES_VOICE_LAUNCHER_BADGE &&
                                                                n(N.i.TAKE_ACTION);
                                                    },
                                                    onMouseEnter: V,
                                                    onMouseLeave: U,
                                                }),
                                            }),
                                        }),
                                        t === a.M.ACTIVITIES_VOICE_LAUNCHER_BADGE
                                            ? (0, i.jsx)(m.a, { top: 2, right: 2, size: 6 })
                                            : null,
                                    ],
                                });
                            },
                        }),
                })
            );
        },
    });
}
