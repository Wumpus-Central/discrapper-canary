t.d(n, { K: () => b }), t(321073);
var l = t(477900),
    i = t(582128),
    a = t(17928),
    s = t(554146),
    r = t(922016),
    o = t(866665),
    c = t(155718),
    u = t(933958),
    d = t(404522),
    A = t(782091),
    m = t(641703),
    h = t(807067),
    C = t(521588),
    f = t(688810),
    E = t(975412),
    p = t(384059),
    g = t(379848),
    x = t(267102),
    I = t(421773),
    v = t(168754),
    T = t(376086),
    _ = t(652215),
    j = t(49999),
    N = t(375708);
function b(e) {
    let { channel: n, idle: t, whichPopoutIsOpen: b, setWhichPopoutIsOpen: S } = e,
        O = (0, a.bG)([u.Ay], () => u.Ay.isLaunchingActivity()),
        y = (0, A.et)(n.id),
        R = (0, A.dL)(y),
        M = y !== A.xy.CAN_LAUNCH || O,
        { isHovered: L, setIsHovered: D, onMouseEnter: P, onMouseLeave: k } = (0, I.A)(200, 300),
        G = (0, d.b)({ surface: c.YI.VOICE_LAUNCHER }),
        V = (0, a.bG)(
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
        { parentAnalyticsLocation: w, newestAnalyticsLocation: F } = (0, f.Ay)(),
        Y = i.useCallback(() => {
            (0, p.X)(w, p.O.ACTIVITY),
                (0, E.A)({
                    context: null != n ? { type: "channel", channel: n } : { type: "contextless" },
                    openInPopout: H,
                    analyticsLocation: F,
                });
        }, [n, H, F, w]),
        z = [];
    M || z.push(s.M.ACTIVITIES_MINI_SHELF_SPARKLES),
        (0, m.A)(n.id) && !M && z.push(s.M.ACTIVITY_GDM_ROCKET_SPARKLE),
        M || z.push(s.M.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP);
    let K = i.useRef(!1),
        X = i.useRef(null);
    return (0, l.jsx)(g.Ay, {
        contentTypes: z,
        children: (e) => {
            let { visibleContent: i, markAsDismissed: a } = e,
                c = i === s.M.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP && !t && !L;
            return (
                K.current && !c && a(j.i.AUTO_DISMISS),
                K.current !== c && (K.current = c),
                (0, l.jsx)(r.Y, {
                    targetElementRef: X,
                    fixed: !0,
                    shouldShow: L && (b === T.P.ACTIVITY || null == b),
                    animation: r.Y.Animation.FADE,
                    animationPosition: "top",
                    position: "top",
                    align: "center",
                    spacing: 16,
                    onRequestClose: () => {
                        D(!1), S?.(void 0);
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
                                  onClick: () => a(j.i.UNKNOWN),
                              })
                            : (0, l.jsx)(l.Fragment, {});
                    },
                    children: () =>
                        (0, l.jsx)(g.GY, {
                            contentType: s.M.ACTIVITIES_VOICE_LAUNCHER_BADGE,
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
                                                ref: X,
                                                children: (0, l.jsx)(v.A, {
                                                    disabled: M,
                                                    "aria-label": R,
                                                    label: U ? void 0 : R,
                                                    isActivityActive: V,
                                                    onClick: () => {
                                                        Y(),
                                                            (i === s.M.ACTIVITIES_MINI_SHELF_SPARKLES ||
                                                                i === s.M.ACTIVITY_GDM_ROCKET_SPARKLE ||
                                                                i ===
                                                                    s.M
                                                                        .ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_1_SPARKLES ||
                                                                i ===
                                                                    s.M
                                                                        .ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_2_SPARKLES ||
                                                                i ===
                                                                    s.M
                                                                        .VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP) &&
                                                                a(j.i.TAKE_ACTION),
                                                            n === s.M.ACTIVITIES_VOICE_LAUNCHER_BADGE &&
                                                                t(j.i.TAKE_ACTION);
                                                    },
                                                    onMouseEnter: B,
                                                    onMouseLeave: k,
                                                }),
                                            }),
                                        }),
                                        n === s.M.ACTIVITIES_VOICE_LAUNCHER_BADGE
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
