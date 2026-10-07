t.d(n, { K: () => _ });
var l = t(477900),
    i = t(582128),
    a = t(17928),
    s = t(554146),
    o = t(922016),
    r = t(866665),
    c = t(155718),
    u = t(933958),
    d = t(404522),
    A = t(782091),
    m = t(807067),
    h = t(521588),
    C = t(688810),
    p = t(975412),
    x = t(384059),
    g = t(379848),
    f = t(267102),
    E = t(421773),
    I = t(168754),
    v = t(376086),
    j = t(652215),
    T = t(49999),
    N = t(375708);
function _(e) {
    let { channel: n, idle: t, whichPopoutIsOpen: _, setWhichPopoutIsOpen: b } = e,
        O = (0, a.bG)([u.Ay], () => u.Ay.isLaunchingActivity()),
        y = (0, A.et)(n.id),
        S = (0, A.dL)(y),
        R = y !== A.xy.CAN_LAUNCH || O,
        { isHovered: D, setIsHovered: L, onMouseEnter: M, onMouseLeave: P } = (0, E.A)(200, 300),
        k = (0, d.b)({ surface: c.YI.VOICE_LAUNCHER }),
        U = (0, a.bG)(
            [u.Ay],
            () => null != u.Ay.getSelfEmbeddedActivityForLocation(u.Ay.getConnectedActivityLocation()),
        ),
        G = !R,
        V = i.useCallback(
            (e) => {
                "focus" !== e.type && M();
            },
            [M],
        ),
        B = (0, f.Us)() === j.BRT.POPOUT,
        { parentAnalyticsLocation: H, newestAnalyticsLocation: w } = (0, C.Ay)(),
        Y = i.useCallback(() => {
            ((0, x.X)(H, x.O.ACTIVITY),
                (0, p.A)({
                    context: null != n ? { type: "channel", channel: n } : { type: "contextless" },
                    openInPopout: B,
                    analyticsLocation: w,
                }));
        }, [n, B, w, H]),
        F = R ? [] : [s.M.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP],
        X = i.useRef(!1),
        K = i.useRef(null);
    return (0, l.jsx)(g.Ay, {
        contentTypes: F,
        children: (e) => {
            let { visibleContent: i, markAsDismissed: a } = e,
                c = i === s.M.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP && !t && !D;
            return (
                X.current && !c && a(T.i.AUTO_DISMISS),
                X.current !== c && (X.current = c),
                (0, l.jsx)(o.Y, {
                    targetElementRef: K,
                    fixed: !0,
                    shouldShow: D && (_ === v.P.ACTIVITY || null == _),
                    animation: o.Y.Animation.FADE,
                    animationPosition: "top",
                    position: "top",
                    align: "center",
                    spacing: 16,
                    onRequestClose: () => {
                        (L(!1), b?.(void 0));
                    },
                    renderPopout: (e) => {
                        let { closePopout: t, setPopoutRef: i } = e;
                        return G
                            ? (0, l.jsx)(m.f, {
                                  ref: (e) => {
                                      i?.(e);
                                  },
                                  channel: n,
                                  closePopout: t,
                                  onMouseEnter: M,
                                  onMouseLeave: P,
                                  isHovered: D,
                                  onClick: () => a(T.i.UNKNOWN),
                              })
                            : (0, l.jsx)(l.Fragment, {});
                    },
                    children: () =>
                        (0, l.jsx)(g.GY, {
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
                                                ref: K,
                                                children: (0, l.jsx)(I.A, {
                                                    disabled: R,
                                                    "aria-label": S,
                                                    label: G ? void 0 : S,
                                                    isActivityActive: U,
                                                    onClick: () => {
                                                        (Y(),
                                                            i ===
                                                                s.M
                                                                    .VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP &&
                                                                a(T.i.TAKE_ACTION),
                                                            n === s.M.ACTIVITIES_VOICE_LAUNCHER_BADGE &&
                                                                t(T.i.TAKE_ACTION));
                                                    },
                                                    onMouseEnter: V,
                                                    onMouseLeave: P,
                                                }),
                                            }),
                                        }),
                                        n === s.M.ACTIVITIES_VOICE_LAUNCHER_BADGE
                                            ? (0, l.jsx)(h.a, { top: 2, right: 2, size: 6 })
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
