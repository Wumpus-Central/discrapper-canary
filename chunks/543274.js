t.d(n, { K: () => b }), t(321073);
var l = t(627968),
    i = t(64700),
    a = t(311907),
    s = t(554146),
    r = t(990078),
    o = t(265872),
    c = t(155718),
    u = t(933958),
    d = t(404522),
    A = t(782091),
    h = t(641703),
    p = t(807067),
    m = t(521588),
    g = t(688810),
    f = t(975412),
    C = t(384059),
    E = t(379848),
    v = t(267102),
    I = t(421773),
    x = t(168754),
    T = t(376086),
    _ = t(652215),
    j = t(49999),
    N = t(985018);
function b(e) {
    let { channel: n, idle: t, whichPopoutIsOpen: b, setWhichPopoutIsOpen: y } = e,
        S = (0, a.bG)([u.Ay], () => u.Ay.isLaunchingActivity()),
        O = (0, A.et)(n.id),
        L = (0, A.dL)(O),
        R = O !== A.xy.CAN_LAUNCH || S,
        { isHovered: M, setIsHovered: D, onMouseEnter: P, onMouseLeave: G } = (0, I.A)(200, 300),
        k = (0, d.b)({ surface: c.YI.VOICE_LAUNCHER }),
        V = (0, a.bG)(
            [u.Ay],
            () => null != u.Ay.getSelfEmbeddedActivityForLocation(u.Ay.getConnectedActivityLocation()),
        ),
        U = !R,
        B = i.useCallback(
            (e) => {
                "focus" !== e.type && P();
            },
            [P],
        ),
        w = (0, v.Us)() === _.BRT.POPOUT,
        { parentAnalyticsLocation: H, newestAnalyticsLocation: Y } = (0, g.Ay)(),
        F = i.useCallback(() => {
            (0, C.X)(H, C.O.ACTIVITY),
                (0, f.A)({
                    context: null != n ? { type: "channel", channel: n } : { type: "contextless" },
                    openInPopout: w,
                    analyticsLocation: Y,
                });
        }, [n, w, Y, H]),
        K = [];
    R || K.push(s.M.ACTIVITIES_MINI_SHELF_SPARKLES),
        (0, h.A)(n.id) && !R && K.push(s.M.ACTIVITY_GDM_ROCKET_SPARKLE),
        R || K.push(s.M.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP);
    let X = i.useRef(!1),
        z = i.useRef(null);
    return (0, l.jsx)(E.Ay, {
        contentTypes: K,
        children: (e) => {
            let { visibleContent: i, markAsDismissed: a } = e,
                c = i === s.M.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP && !t && !M;
            return (
                X.current && !c && a(j.i.AUTO_DISMISS),
                X.current !== c && (X.current = c),
                (0, l.jsx)(o.Y, {
                    targetElementRef: z,
                    fixed: !0,
                    shouldShow: M && (b === T.P.ACTIVITY || null == b),
                    animation: o.Y.Animation.FADE,
                    animationPosition: "top",
                    position: "top",
                    align: "center",
                    spacing: 16,
                    onRequestClose: () => {
                        D(!1), y?.(void 0);
                    },
                    renderPopout: (e) => {
                        let { closePopout: t, setPopoutRef: i } = e;
                        return U
                            ? (0, l.jsx)(p.f, {
                                  ref: (e) => {
                                      i?.(e);
                                  },
                                  channel: n,
                                  closePopout: t,
                                  onMouseEnter: P,
                                  onMouseLeave: G,
                                  isHovered: M,
                                  onClick: () => a(j.i.UNKNOWN),
                              })
                            : (0, l.jsx)(l.Fragment, {});
                    },
                    children: () =>
                        (0, l.jsx)(E.GY, {
                            contentType: s.M.ACTIVITIES_VOICE_LAUNCHER_BADGE,
                            latestVersion: k,
                            children: (e) => {
                                let { visibleContent: n, markAsDismissed: t } = e;
                                return (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        (0, l.jsx)(r.m, {
                                            text: N.intl.string(N.t.P8vmUv),
                                            forceOpen: !0,
                                            shouldShow: c,
                                            children: (0, l.jsx)("div", {
                                                ref: z,
                                                children: (0, l.jsx)(x.A, {
                                                    disabled: R,
                                                    "aria-label": L,
                                                    label: U ? void 0 : L,
                                                    isActivityActive: V,
                                                    onClick: () => {
                                                        F(),
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
                                                    onMouseLeave: G,
                                                }),
                                            }),
                                        }),
                                        n === s.M.ACTIVITIES_VOICE_LAUNCHER_BADGE
                                            ? (0, l.jsx)(m.a, { top: 2, right: 2, size: 6 })
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
