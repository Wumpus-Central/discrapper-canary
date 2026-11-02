t.d(n, { K: () => T });
var i = t(477900),
    l = t(582128),
    s = t(17928),
    a = t(554146),
    r = t(265872),
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
    I = t(376086),
    v = t(652215),
    N = t(49999),
    _ = t(105292);
function T(e) {
    let { channel: n, idle: t, whichPopoutIsOpen: T, setWhichPopoutIsOpen: b } = e,
        S = (0, s.bG)([u.Ay], () => u.Ay.isLaunchingActivity()),
        y = (0, A.et)(n.id),
        O = (0, A.dL)(y),
        P = y !== A.xy.CAN_LAUNCH || S,
        { isHovered: R, setIsHovered: L, onMouseEnter: D, onMouseLeave: M } = (0, E.A)(200, 300),
        G = (0, d.b)({ surface: c.YI.VOICE_LAUNCHER }),
        k = (0, s.bG)(
            [u.Ay],
            () => null != u.Ay.getSelfEmbeddedActivityForLocation(u.Ay.getConnectedActivityLocation()),
        ),
        U = !P,
        V = l.useCallback(
            (e) => {
                "focus" !== e.type && D();
            },
            [D],
        ),
        B = (0, p.Us)() === v.BRT.POPOUT,
        { parentAnalyticsLocation: w, newestAnalyticsLocation: H } = (0, g.Ay)(),
        Y = l.useCallback(() => {
            ((0, C.XJ)(w, C.OP.ACTIVITY),
                (0, x.A)({
                    context: null != n ? { type: "channel", channel: n } : { type: "contextless" },
                    openInPopout: B,
                    analyticsLocation: H,
                }));
        }, [n, B, H, w]),
        z = P ? [] : [a.M.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP],
        K = l.useRef(!1),
        F = l.useRef(null);
    return (0, i.jsx)(f.Ay, {
        contentTypes: z,
        children: (e) => {
            let { visibleContent: l, markAsDismissed: s } = e,
                c = l === a.M.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP && !t && !R;
            return (
                K.current && !c && s(N.i.AUTO_DISMISS),
                K.current !== c && (K.current = c),
                (0, i.jsx)(r.Y, {
                    targetElementRef: F,
                    fixed: !0,
                    shouldShow: R && (T === I.P.ACTIVITY || null == T),
                    animation: r.Y.Animation.FADE,
                    animationPosition: "top",
                    position: "top",
                    align: "center",
                    spacing: 16,
                    onRequestClose: () => {
                        (L(!1), b?.(void 0));
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
                                  onMouseLeave: M,
                                  isHovered: R,
                                  onClick: () => s(N.i.UNKNOWN),
                              })
                            : (0, i.jsx)(i.Fragment, {});
                    },
                    children: () =>
                        (0, i.jsx)(f.GY, {
                            contentType: a.M.ACTIVITIES_VOICE_LAUNCHER_BADGE,
                            latestVersion: G,
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
                                                    disabled: P,
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
                                                    onMouseLeave: M,
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
