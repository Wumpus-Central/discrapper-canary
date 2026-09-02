t.d(n, { K: () => S }), t(321073);
var l = t(477900),
    i = t(582128),
    s = t(17928),
    a = t(554146),
    r = t(922016),
    o = t(866665),
    c = t(155718),
    u = t(933958),
    d = t(404522),
    A = t(782091),
    m = t(641703),
    h = t(807067),
    C = t(521588),
    E = t(688810),
    p = t(975412),
    g = t(384059),
    f = t(379848),
    x = t(267102),
    I = t(421773),
    T = t(168754),
    v = t(376086),
    _ = t(652215),
    j = t(49999),
    N = t(375708);
function S(e) {
    let { channel: n, idle: t, whichPopoutIsOpen: S, setWhichPopoutIsOpen: b } = e,
        O = (0, s.bG)([u.Ay], () => u.Ay.isLaunchingActivity()),
        y = (0, A.et)(n.id),
        R = (0, A.dL)(y),
        M = y !== A.xy.CAN_LAUNCH || O,
        { isHovered: L, setIsHovered: D, onMouseEnter: P, onMouseLeave: k } = (0, I.A)(200, 300),
        G = (0, d.b)({ surface: c.YI.VOICE_LAUNCHER }),
        V = (0, s.bG)(
            [u.Ay],
            () => null != u.Ay.getSelfEmbeddedActivityForLocation(u.Ay.getConnectedActivityLocation()),
        ),
        U = !M,
        B = i.useCallback(
            (e) => {
                "focus" !== e.type && P();
            },
            [P],
        ),
        H = (0, x.Us)() === _.BRT.POPOUT,
        { parentAnalyticsLocation: w, newestAnalyticsLocation: Y } = (0, E.Ay)(),
        F = i.useCallback(() => {
            (0, g.X)(w, g.O.ACTIVITY),
                (0, p.A)({
                    context: null != n ? { type: "channel", channel: n } : { type: "contextless" },
                    openInPopout: H,
                    analyticsLocation: Y,
                });
        }, [n, H, Y, w]),
        K = [];
    M || K.push(a.M.ACTIVITIES_MINI_SHELF_SPARKLES),
        (0, m.A)(n.id) && !M && K.push(a.M.ACTIVITY_GDM_ROCKET_SPARKLE),
        M || K.push(a.M.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP);
    let X = i.useRef(!1),
        z = i.useRef(null);
    return (0, l.jsx)(f.Ay, {
        contentTypes: K,
        children: (e) => {
            let { visibleContent: i, markAsDismissed: s } = e,
                c = i === a.M.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP && !t && !L;
            return (
                X.current && !c && s(j.i.AUTO_DISMISS),
                X.current !== c && (X.current = c),
                (0, l.jsx)(r.Y, {
                    targetElementRef: z,
                    fixed: !0,
                    shouldShow: L && (S === v.P.ACTIVITY || null == S),
                    animation: r.Y.Animation.FADE,
                    animationPosition: "top",
                    position: "top",
                    align: "center",
                    spacing: 16,
                    onRequestClose: () => {
                        D(!1), b?.(void 0);
                    },
                    renderPopout: (e) => {
                        let { closePopout: t, setPopoutRef: i } = e;
                        return U
                            ? (0, l.jsx)(h.f, {
                                  ref: (e) => {
                                      i?.(e);
                                  },
                                  channel: n,
                                  closePopout: t,
                                  onMouseEnter: P,
                                  onMouseLeave: k,
                                  isHovered: L,
                                  onClick: () => s(j.i.UNKNOWN),
                              })
                            : (0, l.jsx)(l.Fragment, {});
                    },
                    children: () =>
                        (0, l.jsx)(f.GY, {
                            contentType: a.M.ACTIVITIES_VOICE_LAUNCHER_BADGE,
                            latestVersion: G,
                            children: (e) => {
                                let { visibleContent: n, markAsDismissed: t } = e;
                                return (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        (0, l.jsx)(o.m, {
                                            text: N.intl.string(N.t.P8vmUv),
                                            forceOpen: !0,
                                            shouldShow: c,
                                            children: (0, l.jsx)("div", {
                                                ref: z,
                                                children: (0, l.jsx)(T.A, {
                                                    disabled: M,
                                                    "aria-label": R,
                                                    label: U ? void 0 : R,
                                                    isActivityActive: V,
                                                    onClick: () => {
                                                        F(),
                                                            (i === a.M.ACTIVITIES_MINI_SHELF_SPARKLES ||
                                                                i === a.M.ACTIVITY_GDM_ROCKET_SPARKLE ||
                                                                i ===
                                                                    a.M
                                                                        .ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_1_SPARKLES ||
                                                                i ===
                                                                    a.M
                                                                        .ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_2_SPARKLES ||
                                                                i ===
                                                                    a.M
                                                                        .VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP) &&
                                                                s(j.i.TAKE_ACTION),
                                                            n === a.M.ACTIVITIES_VOICE_LAUNCHER_BADGE &&
                                                                t(j.i.TAKE_ACTION);
                                                    },
                                                    onMouseEnter: B,
                                                    onMouseLeave: k,
                                                }),
                                            }),
                                        }),
                                        n === a.M.ACTIVITIES_VOICE_LAUNCHER_BADGE
                                            ? (0, l.jsx)(C.a, { top: 2, right: 2, size: 6 })
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
