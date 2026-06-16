t.d(n, { K: () => O }), t(321073);
var l = t(627968),
    i = t(64700),
    s = t(17928),
    a = t(554146),
    r = t(990078),
    o = t(922016),
    c = t(155718),
    u = t(933958),
    d = t(404522),
    A = t(782091),
    h = t(641703),
    m = t(807067),
    C = t(521588),
    E = t(688810),
    p = t(975412),
    g = t(384059),
    x = t(379848),
    I = t(267102),
    f = t(421773),
    T = t(168754),
    v = t(376086),
    _ = t(652215),
    j = t(49999),
    N = t(375708);
function O(e) {
    let { channel: n, idle: t, whichPopoutIsOpen: O, setWhichPopoutIsOpen: S } = e,
        b = (0, s.bG)([u.Ay], () => u.Ay.isLaunchingActivity()),
        y = (0, A.et)(n.id),
        R = (0, A.dL)(y),
        L = y !== A.xy.CAN_LAUNCH || b,
        { isHovered: M, setIsHovered: D, onMouseEnter: P, onMouseLeave: G } = (0, f.A)(200, 300),
        k = (0, d.b)({ surface: c.YI.VOICE_LAUNCHER }),
        U = (0, s.bG)(
            [u.Ay],
            () => null != u.Ay.getSelfEmbeddedActivityForLocation(u.Ay.getConnectedActivityLocation()),
        ),
        V = !L,
        B = i.useCallback(
            (e) => {
                "focus" !== e.type && P();
            },
            [P],
        ),
        H = (0, I.Us)() === _.BRT.POPOUT,
        { parentAnalyticsLocation: w, newestAnalyticsLocation: Y } = (0, E.Ay)(),
        K = i.useCallback(() => {
            (0, g.X)(w, g.O.ACTIVITY),
                (0, p.A)({
                    context: null != n ? { type: "channel", channel: n } : { type: "contextless" },
                    openInPopout: H,
                    analyticsLocation: Y,
                });
        }, [n, H, Y, w]),
        F = [];
    L || F.push(a.M.ACTIVITIES_MINI_SHELF_SPARKLES),
        (0, h.A)(n.id) && !L && F.push(a.M.ACTIVITY_GDM_ROCKET_SPARKLE),
        L || F.push(a.M.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP);
    let X = i.useRef(!1),
        z = i.useRef(null);
    return (0, l.jsx)(x.Ay, {
        contentTypes: F,
        children: (e) => {
            let { visibleContent: i, markAsDismissed: s } = e,
                c = i === a.M.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP && !t && !M;
            return (
                X.current && !c && s(j.i.AUTO_DISMISS),
                X.current !== c && (X.current = c),
                (0, l.jsx)(o.Y, {
                    targetElementRef: z,
                    fixed: !0,
                    shouldShow: M && (O === v.P.ACTIVITY || null == O),
                    animation: o.Y.Animation.FADE,
                    animationPosition: "top",
                    position: "top",
                    align: "center",
                    spacing: 16,
                    onRequestClose: () => {
                        D(!1), S?.(void 0);
                    },
                    renderPopout: (e) => {
                        let { closePopout: t, setPopoutRef: i } = e;
                        return V
                            ? (0, l.jsx)(m.f, {
                                  ref: (e) => {
                                      i?.(e);
                                  },
                                  channel: n,
                                  closePopout: t,
                                  onMouseEnter: P,
                                  onMouseLeave: G,
                                  isHovered: M,
                                  onClick: () => s(j.i.UNKNOWN),
                              })
                            : (0, l.jsx)(l.Fragment, {});
                    },
                    children: () =>
                        (0, l.jsx)(x.GY, {
                            contentType: a.M.ACTIVITIES_VOICE_LAUNCHER_BADGE,
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
                                                children: (0, l.jsx)(T.A, {
                                                    disabled: L,
                                                    "aria-label": R,
                                                    label: V ? void 0 : R,
                                                    isActivityActive: U,
                                                    onClick: () => {
                                                        K(),
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
                                                    onMouseLeave: G,
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
