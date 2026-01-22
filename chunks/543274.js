n.d(t, { K: () => S }), n(321073);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(554146),
    s = n(990078),
    o = n(397927),
    c = n(155718),
    u = n(933958),
    d = n(404522),
    f = n(782091),
    p = n(641703),
    h = n(807067),
    b = n(521588),
    g = n(688810),
    m = n(975412),
    A = n(384059),
    y = n(379848),
    O = n(267102),
    j = n(421773),
    v = n(168754),
    x = n(376086),
    E = n(652215),
    _ = n(49999),
    C = n(985018);
function S(e) {
    let { channel: t, idle: n, whichPopoutIsOpen: S, setWhichPopoutIsOpen: I } = e,
        N = (0, i.bG)([u.Ay], () => u.Ay.isLaunchingActivity()),
        T = (0, f.et)(t.id),
        P = (0, f.dL)(T),
        w = T !== f.xy.CAN_LAUNCH || N,
        { isHovered: R, setIsHovered: D, onMouseEnter: M, onMouseLeave: L } = (0, j.A)(200, 300),
        G = (0, d.b)({ surface: c.YI.VOICE_LAUNCHER }),
        k = (0, i.bG)(
            [u.Ay],
            () => null != u.Ay.getSelfEmbeddedActivityForLocation(u.Ay.getConnectedActivityLocation()),
        ),
        U = !w,
        V = l.useCallback(
            (e) => {
                "focus" !== e.type && M();
            },
            [M],
        ),
        F = (0, O.Us)() === E.BRT.POPOUT,
        { parentAnalyticsLocation: H, newestAnalyticsLocation: B } = (0, g.Ay)(),
        K = l.useCallback(() => {
            (0, A.X)(H, A.O.ACTIVITY),
                (0, m.A)({
                    context:
                        null != t
                            ? {
                                  type: "channel",
                                  channel: t,
                              }
                            : { type: "contextless" },
                    openInPopout: F,
                    analyticsLocation: B,
                });
        }, [t, F, B, H]),
        W = [];
    w || W.push(a.M.ACTIVITIES_MINI_SHELF_SPARKLES),
        (0, p.A)(t.id) && !w && W.push(a.M.ACTIVITY_GDM_ROCKET_SPARKLE),
        w || W.push(a.M.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP);
    let z = l.useRef(!1),
        Y = l.useRef(null);
    return (0, r.jsx)(y.Ay, {
        contentTypes: W,
        children: (e) => {
            let { visibleContent: l, markAsDismissed: i } = e,
                c = l === a.M.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP && !n && !R;
            return (
                z.current && !c && i(_.i.AUTO_DISMISS),
                z.current !== c && (z.current = c),
                (0, r.jsx)(o.YNO, {
                    targetElementRef: Y,
                    fixed: !0,
                    shouldShow: R && (S === x.P.ACTIVITY || null == S),
                    animation: o.YNO.Animation.FADE,
                    animationPosition: "top",
                    position: "top",
                    align: "center",
                    spacing: 16,
                    onRequestClose: () => {
                        D(!1), null == I || I(void 0);
                    },
                    renderPopout: (e) => {
                        let { closePopout: n, setPopoutRef: l } = e;
                        return U
                            ? (0, r.jsx)(h.f, {
                                  ref: (e) => {
                                      null == l || l(e);
                                  },
                                  channel: t,
                                  closePopout: n,
                                  onMouseEnter: M,
                                  onMouseLeave: L,
                                  isHovered: R,
                                  onClick: () => i(_.i.UNKNOWN),
                              })
                            : (0, r.jsx)(r.Fragment, {});
                    },
                    children: () =>
                        (0, r.jsx)(y.GY, {
                            contentType: a.M.ACTIVITIES_VOICE_LAUNCHER_BADGE,
                            latestVersion: G,
                            children: (e) => {
                                let { visibleContent: t, markAsDismissed: n } = e;
                                return (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(s.m, {
                                            text: C.intl.string(C.t.P8vmUv),
                                            forceOpen: !0,
                                            shouldShow: c,
                                            children: (0, r.jsx)("div", {
                                                ref: Y,
                                                children: (0, r.jsx)(v.A, {
                                                    disabled: w,
                                                    "aria-label": P,
                                                    label: U ? void 0 : P,
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
                                                                i(_.i.TAKE_ACTION),
                                                            t === a.M.ACTIVITIES_VOICE_LAUNCHER_BADGE &&
                                                                n(_.i.TAKE_ACTION);
                                                    },
                                                    onMouseEnter: V,
                                                    onMouseLeave: L,
                                                }),
                                            }),
                                        }),
                                        t === a.M.ACTIVITIES_VOICE_LAUNCHER_BADGE
                                            ? (0, r.jsx)(b.a, {
                                                  top: 2,
                                                  right: 2,
                                                  size: 6,
                                              })
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
