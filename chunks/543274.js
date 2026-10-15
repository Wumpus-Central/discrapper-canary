t.d(n, { K: () => T });
var i = t(477900),
    l = t(582128),
    s = t(17928),
    a = t(554146),
    r = t(922016),
    o = t(866665),
    c = t(155718),
    u = t(933958),
    d = t(404522),
    A = t(782091),
    h = t(807067),
    m = t(521588),
    g = t(688810),
    x = t(975412),
    C = t(384059),
    f = t(379848),
    p = t(267102),
    E = t(421773),
    j = t(168754),
    v = t(376086),
    I = t(652215),
    N = t(49999),
    _ = t(105292);
function T(e) {
    let { channel: n, idle: t, whichPopoutIsOpen: T, setWhichPopoutIsOpen: b } = e,
        S = (0, s.bG)([u.Ay], () => u.Ay.isLaunchingActivity()),
        y = (0, A.et)(n.id),
        O = (0, A.dL)(y),
        R = y !== A.xy.CAN_LAUNCH || S,
        { isHovered: L, setIsHovered: M, onMouseEnter: D, onMouseLeave: G } = (0, E.A)(200, 300),
        P = (0, d.b)({ surface: c.YI.VOICE_LAUNCHER }),
        k = (0, s.bG)(
            [u.Ay],
            () => null != u.Ay.getSelfEmbeddedActivityForLocation(u.Ay.getConnectedActivityLocation()),
        ),
        U = !R,
        V = l.useCallback(
            (e) => {
                "focus" !== e.type && D();
            },
            [D],
        ),
        B = (0, p.Us)() === I.BRT.POPOUT,
        { parentAnalyticsLocation: w, newestAnalyticsLocation: H } = (0, g.Ay)(),
        Y = l.useCallback(() => {
            ((0, C.X)(w, C.O.ACTIVITY),
                (0, x.A)({
                    context: null != n ? { type: "channel", channel: n } : { type: "contextless" },
                    openInPopout: B,
                    analyticsLocation: H,
                }));
        }, [n, B, H, w]),
        z = R ? [] : [a.M.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP],
        K = l.useRef(!1),
        F = l.useRef(null);
    return (0, i.jsx)(f.Ay, {
        contentTypes: z,
        children: (e) => {
            let { visibleContent: l, markAsDismissed: s } = e,
                c = l === a.M.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP && !t && !L;
            return (
                K.current && !c && s(N.i.AUTO_DISMISS),
                K.current !== c && (K.current = c),
                (0, i.jsx)(r.Y, {
                    targetElementRef: F,
                    fixed: !0,
                    shouldShow: L && (T === v.P.ACTIVITY || null == T),
                    animation: r.Y.Animation.FADE,
                    animationPosition: "top",
                    position: "top",
                    align: "center",
                    spacing: 16,
                    onRequestClose: () => {
                        (M(!1), b?.(void 0));
                    },
                    renderPopout: (e) => {
                        let { closePopout: t, setPopoutRef: l } = e;
                        return U
                            ? (0, i.jsx)(h.f, {
                                  ref: (e) => {
                                      l?.(e);
                                  },
                                  channel: n,
                                  closePopout: t,
                                  onMouseEnter: D,
                                  onMouseLeave: G,
                                  isHovered: L,
                                  onClick: () => s(N.i.UNKNOWN),
                              })
                            : (0, i.jsx)(i.Fragment, {});
                    },
                    children: () =>
                        (0, i.jsx)(f.GY, {
                            contentType: a.M.ACTIVITIES_VOICE_LAUNCHER_BADGE,
                            latestVersion: P,
                            children: (e) => {
                                let { visibleContent: n, markAsDismissed: t } = e;
                                return (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(o.m, {
                                            text: _.intl.string(_.t.P8vmUv),
                                            forceOpen: !0,
                                            shouldShow: c,
                                            children: (0, i.jsx)("div", {
                                                ref: F,
                                                children: (0, i.jsx)(j.A, {
                                                    disabled: R,
                                                    "aria-label": O,
                                                    label: U ? void 0 : O,
                                                    isActivityActive: k,
                                                    onClick: () => {
                                                        (Y(),
                                                            l ===
                                                                a.M
                                                                    .VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP &&
                                                                s(N.i.TAKE_ACTION),
                                                            n === a.M.ACTIVITIES_VOICE_LAUNCHER_BADGE &&
                                                                t(N.i.TAKE_ACTION));
                                                    },
                                                    onMouseEnter: V,
                                                    onMouseLeave: G,
                                                }),
                                            }),
                                        }),
                                        n === a.M.ACTIVITIES_VOICE_LAUNCHER_BADGE
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
