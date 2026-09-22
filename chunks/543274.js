t.d(n, { K: () => _ });
var i = t(477900),
    l = t(582128),
    s = t(17928),
    a = t(554146),
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
    T = t(652215),
    j = t(49999),
    N = t(375708);
function _(e) {
    let { channel: n, idle: t, whichPopoutIsOpen: _, setWhichPopoutIsOpen: O } = e,
        b = (0, s.bG)([u.Ay], () => u.Ay.isLaunchingActivity()),
        y = (0, A.et)(n.id),
        S = (0, A.dL)(y),
        R = y !== A.xy.CAN_LAUNCH || b,
        { isHovered: D, setIsHovered: L, onMouseEnter: M, onMouseLeave: P } = (0, E.A)(200, 300),
        k = (0, d.b)({ surface: c.YI.VOICE_LAUNCHER }),
        U = (0, s.bG)(
            [u.Ay],
            () => null != u.Ay.getSelfEmbeddedActivityForLocation(u.Ay.getConnectedActivityLocation()),
        ),
        G = !R,
        V = l.useCallback(
            (e) => {
                "focus" !== e.type && M();
            },
            [M],
        ),
        B = (0, f.Us)() === T.BRT.POPOUT,
        { parentAnalyticsLocation: w, newestAnalyticsLocation: H } = (0, C.Ay)(),
        Y = l.useCallback(() => {
            ((0, x.X)(w, x.O.ACTIVITY),
                (0, p.A)({
                    context: null != n ? { type: "channel", channel: n } : { type: "contextless" },
                    openInPopout: B,
                    analyticsLocation: H,
                }));
        }, [n, B, H, w]),
        F = R ? [] : [a.M.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP],
        X = l.useRef(!1),
        K = l.useRef(null);
    return (0, i.jsx)(g.Ay, {
        contentTypes: F,
        children: (e) => {
            let { visibleContent: l, markAsDismissed: s } = e,
                c = l === a.M.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP && !t && !D;
            return (
                X.current && !c && s(j.i.AUTO_DISMISS),
                X.current !== c && (X.current = c),
                (0, i.jsx)(o.Y, {
                    targetElementRef: K,
                    fixed: !0,
                    shouldShow: D && (_ === v.P.ACTIVITY || null == _),
                    animation: o.Y.Animation.FADE,
                    animationPosition: "top",
                    position: "top",
                    align: "center",
                    spacing: 16,
                    onRequestClose: () => {
                        (L(!1), O?.(void 0));
                    },
                    renderPopout: (e) => {
                        let { closePopout: t, setPopoutRef: l } = e;
                        return G
                            ? (0, i.jsx)(m.f, {
                                  ref: (e) => {
                                      l?.(e);
                                  },
                                  channel: n,
                                  closePopout: t,
                                  onMouseEnter: M,
                                  onMouseLeave: P,
                                  isHovered: D,
                                  onClick: () => s(j.i.UNKNOWN),
                              })
                            : (0, i.jsx)(i.Fragment, {});
                    },
                    children: () =>
                        (0, i.jsx)(g.GY, {
                            contentType: a.M.ACTIVITIES_VOICE_LAUNCHER_BADGE,
                            latestVersion: k,
                            children: (e) => {
                                let { visibleContent: n, markAsDismissed: t } = e;
                                return (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(r.m, {
                                            text: N.intl.string(N.t.P8vmUv),
                                            forceOpen: !0,
                                            shouldShow: c,
                                            children: (0, i.jsx)("div", {
                                                ref: K,
                                                children: (0, i.jsx)(I.A, {
                                                    disabled: R,
                                                    "aria-label": S,
                                                    label: G ? void 0 : S,
                                                    isActivityActive: U,
                                                    onClick: () => {
                                                        (Y(),
                                                            l ===
                                                                a.M
                                                                    .VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP &&
                                                                s(j.i.TAKE_ACTION),
                                                            n === a.M.ACTIVITIES_VOICE_LAUNCHER_BADGE &&
                                                                t(j.i.TAKE_ACTION));
                                                    },
                                                    onMouseEnter: V,
                                                    onMouseLeave: P,
                                                }),
                                            }),
                                        }),
                                        n === a.M.ACTIVITIES_VOICE_LAUNCHER_BADGE
                                            ? (0, i.jsx)(h.a, { top: 2, right: 2, size: 6 })
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
