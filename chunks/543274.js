t.d(n, { K: () => _ });
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
    m = t(807067),
    h = t(521588),
    C = t(688810),
    p = t(975412),
    g = t(384059),
    E = t(379848),
    f = t(267102),
    x = t(421773),
    v = t(168754),
    I = t(376086),
    T = t(652215),
    j = t(49999),
    N = t(375708);
function _(e) {
    let { channel: n, idle: t, whichPopoutIsOpen: _, setWhichPopoutIsOpen: b } = e,
        O = (0, s.bG)([u.Ay], () => u.Ay.isLaunchingActivity()),
        S = (0, A.et)(n.id),
        y = (0, A.dL)(S),
        R = S !== A.xy.CAN_LAUNCH || O,
        { isHovered: M, setIsHovered: L, onMouseEnter: D, onMouseLeave: P } = (0, x.A)(200, 300),
        k = (0, d.b)({ surface: c.YI.VOICE_LAUNCHER }),
        G = (0, s.bG)(
            [u.Ay],
            () => null != u.Ay.getSelfEmbeddedActivityForLocation(u.Ay.getConnectedActivityLocation()),
        ),
        U = !R,
        V = i.useCallback(
            (e) => {
                "focus" !== e.type && D();
            },
            [D],
        ),
        B = (0, f.Us)() === T.BRT.POPOUT,
        { parentAnalyticsLocation: H, newestAnalyticsLocation: w } = (0, C.Ay)(),
        Y = i.useCallback(() => {
            ((0, g.X)(H, g.O.ACTIVITY),
                (0, p.A)({
                    context: null != n ? { type: "channel", channel: n } : { type: "contextless" },
                    openInPopout: B,
                    analyticsLocation: w,
                }));
        }, [n, B, w, H]),
        F = R ? [] : [a.M.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP],
        K = i.useRef(!1),
        X = i.useRef(null);
    return (0, l.jsx)(E.Ay, {
        contentTypes: F,
        children: (e) => {
            let { visibleContent: i, markAsDismissed: s } = e,
                c = i === a.M.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP && !t && !M;
            return (
                K.current && !c && s(j.i.AUTO_DISMISS),
                K.current !== c && (K.current = c),
                (0, l.jsx)(r.Y, {
                    targetElementRef: X,
                    fixed: !0,
                    shouldShow: M && (_ === I.P.ACTIVITY || null == _),
                    animation: r.Y.Animation.FADE,
                    animationPosition: "top",
                    position: "top",
                    align: "center",
                    spacing: 16,
                    onRequestClose: () => {
                        (L(!1), b?.(void 0));
                    },
                    renderPopout: (e) => {
                        let { closePopout: t, setPopoutRef: i } = e;
                        return U
                            ? (0, l.jsx)(m.f, {
                                  ref: (e) => {
                                      i?.(e);
                                  },
                                  channel: n,
                                  closePopout: t,
                                  onMouseEnter: D,
                                  onMouseLeave: P,
                                  isHovered: M,
                                  onClick: () => s(j.i.UNKNOWN),
                              })
                            : (0, l.jsx)(l.Fragment, {});
                    },
                    children: () =>
                        (0, l.jsx)(E.GY, {
                            contentType: a.M.ACTIVITIES_VOICE_LAUNCHER_BADGE,
                            latestVersion: k,
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
                                                    disabled: R,
                                                    "aria-label": y,
                                                    label: U ? void 0 : y,
                                                    isActivityActive: G,
                                                    onClick: () => {
                                                        (Y(),
                                                            i ===
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
