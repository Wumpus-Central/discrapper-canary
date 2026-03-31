n.d(t, { K: () => y }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(554146),
    r = n(990078),
    o = n(397927),
    c = n(155718),
    d = n(933958),
    u = n(404522),
    h = n(782091),
    A = n(641703),
    _ = n(807067),
    m = n(521588),
    g = n(688810),
    p = n(975412),
    f = n(384059),
    x = n(379848),
    E = n(267102),
    I = n(421773),
    C = n(168754),
    N = n(376086),
    T = n(652215),
    S = n(49999),
    b = n(985018);
function y(e) {
    let { channel: t, idle: n, whichPopoutIsOpen: y, setWhichPopoutIsOpen: v } = e,
        j = (0, s.bG)([d.Ay], () => d.Ay.isLaunchingActivity()),
        R = (0, h.et)(t.id),
        O = (0, h.dL)(R),
        L = R !== h.xy.CAN_LAUNCH || j,
        { isHovered: M, setIsHovered: D, onMouseEnter: U, onMouseLeave: G } = (0, I.A)(200, 300),
        P = (0, u.b)({ surface: c.YI.VOICE_LAUNCHER }),
        k = (0, s.bG)(
            [d.Ay],
            () => null != d.Ay.getSelfEmbeddedActivityForLocation(d.Ay.getConnectedActivityLocation()),
        ),
        w = !L,
        B = l.useCallback(
            (e) => {
                "focus" !== e.type && U();
            },
            [U],
        ),
        V = (0, E.Us)() === T.BRT.POPOUT,
        { parentAnalyticsLocation: H, newestAnalyticsLocation: F } = (0, g.Ay)(),
        K = l.useCallback(() => {
            (0, f.X)(H, f.O.ACTIVITY),
                (0, p.A)({
                    context: null != t ? { type: "channel", channel: t } : { type: "contextless" },
                    openInPopout: V,
                    analyticsLocation: F,
                });
        }, [t, V, F, H]),
        W = [];
    L || W.push(a.M.ACTIVITIES_MINI_SHELF_SPARKLES),
        (0, A.A)(t.id) && !L && W.push(a.M.ACTIVITY_GDM_ROCKET_SPARKLE),
        L || W.push(a.M.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP);
    let Y = l.useRef(!1),
        z = l.useRef(null);
    return (0, i.jsx)(x.Ay, {
        contentTypes: W,
        children: (e) => {
            let { visibleContent: l, markAsDismissed: s } = e,
                c = l === a.M.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP && !n && !M;
            return (
                Y.current && !c && s(S.i.AUTO_DISMISS),
                Y.current !== c && (Y.current = c),
                (0, i.jsx)(o.YNO, {
                    targetElementRef: z,
                    fixed: !0,
                    shouldShow: M && (y === N.P.ACTIVITY || null == y),
                    animation: o.YNO.Animation.FADE,
                    animationPosition: "top",
                    position: "top",
                    align: "center",
                    spacing: 16,
                    onRequestClose: () => {
                        D(!1), v?.(void 0);
                    },
                    renderPopout: (e) => {
                        let { closePopout: n, setPopoutRef: l } = e;
                        return w
                            ? (0, i.jsx)(_.f, {
                                  ref: (e) => {
                                      l?.(e);
                                  },
                                  channel: t,
                                  closePopout: n,
                                  onMouseEnter: U,
                                  onMouseLeave: G,
                                  isHovered: M,
                                  onClick: () => s(S.i.UNKNOWN),
                              })
                            : (0, i.jsx)(i.Fragment, {});
                    },
                    children: () =>
                        (0, i.jsx)(x.GY, {
                            contentType: a.M.ACTIVITIES_VOICE_LAUNCHER_BADGE,
                            latestVersion: P,
                            children: (e) => {
                                let { visibleContent: t, markAsDismissed: n } = e;
                                return (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(r.m, {
                                            text: b.intl.string(b.t.P8vmUv),
                                            forceOpen: !0,
                                            shouldShow: c,
                                            children: (0, i.jsx)("div", {
                                                ref: z,
                                                children: (0, i.jsx)(C.A, {
                                                    disabled: L,
                                                    "aria-label": O,
                                                    label: w ? void 0 : O,
                                                    isActivityActive: k,
                                                    onClick: () => {
                                                        K(),
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
                                                                s(S.i.TAKE_ACTION),
                                                            t === a.M.ACTIVITIES_VOICE_LAUNCHER_BADGE &&
                                                                n(S.i.TAKE_ACTION);
                                                    },
                                                    onMouseEnter: B,
                                                    onMouseLeave: G,
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
