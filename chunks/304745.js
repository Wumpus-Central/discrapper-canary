n.d(t, { M: () => P }), n(539854);
var i = n(54381),
    r = n(473749),
    l = n(442837),
    a = n(704215),
    o = n(28664),
    s = n(481060),
    c = n(911969),
    u = n(317381),
    d = n(314490),
    p = n(374065),
    h = n(451576),
    f = n(526846),
    m = n(119315),
    g = n(906732),
    b = n(397698),
    y = n(522651),
    C = n(243778),
    v = n(728285),
    _ = n(579185),
    x = n(301076),
    j = n(127379),
    O = n(981631),
    E = n(921944),
    S = n(388032);
function P(e) {
    let { channel: t, idle: n, whichPopoutIsOpen: P, setWhichPopoutIsOpen: I } = e,
        Z = (0, l.e7)([u.ZP], () => u.ZP.isLaunchingActivity()),
        T = (0, p.KF)(t.id),
        N = (0, p.g5)(T),
        A = T !== p.jy.CAN_LAUNCH || Z,
        { isHovered: w, setIsHovered: M, onMouseEnter: R, onMouseLeave: L } = (0, _.Z)(200, 300),
        k = (0, d.p)({ surface: c.eR.VOICE_LAUNCHER }),
        D = (0, l.e7)(
            [u.ZP],
            () => null != u.ZP.getSelfEmbeddedActivityForLocation(u.ZP.getConnectedActivityLocation()),
        ),
        U = !A,
        B = r.useCallback(
            (e) => {
                "focus" !== e.type && R();
            },
            [R],
        ),
        H = (0, v.bp)() === O.IlC.POPOUT,
        { parentAnalyticsLocation: V, newestAnalyticsLocation: F } = (0, g.ZP)(),
        G = r.useCallback(() => {
            (0, y.v)(V, y.d.ACTIVITY),
                (0, b.Z)({
                    context:
                        null != t
                            ? {
                                  type: "channel",
                                  channel: t,
                              }
                            : { type: "contextless" },
                    openInPopout: H,
                    analyticsLocation: F,
                });
        }, [t, H, F, V]),
        z = [];
    A || z.push(a.z.ACTIVITIES_MINI_SHELF_SPARKLES),
        (0, h.Z)(t.id) && !A && z.push(a.z.ACTIVITY_GDM_ROCKET_SPARKLE),
        A || z.push(a.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP);
    let W = r.useRef(!1),
        q = r.useRef(null);
    return (0, i.jsx)(C.ZP, {
        contentTypes: z,
        children: (e) => {
            let { visibleContent: r, markAsDismissed: l } = e,
                c = r === a.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP && !n && !w;
            return (
                W.current && !c && l(E.L.AUTO_DISMISS),
                W.current !== c && (W.current = c),
                (0, i.jsx)(s.yRy, {
                    targetElementRef: q,
                    fixed: !0,
                    shouldShow: w && (P === j.D.ACTIVITY || null == P),
                    animation: s.yRy.Animation.FADE,
                    animationPosition: "top",
                    position: "top",
                    align: "center",
                    spacing: 16,
                    onRequestClose: () => {
                        M(!1), null == I || I(void 0);
                    },
                    renderPopout: (e) => {
                        let { closePopout: n, setPopoutRef: r } = e;
                        return U
                            ? (0, i.jsx)(f.m, {
                                  ref: (e) => {
                                      null == r || r(e);
                                  },
                                  channel: t,
                                  closePopout: n,
                                  onMouseEnter: R,
                                  onMouseLeave: L,
                                  isHovered: w,
                                  onClick: () => l(E.L.UNKNOWN),
                              })
                            : (0, i.jsx)(i.Fragment, {});
                    },
                    children: () =>
                        (0, i.jsx)(C.Xf, {
                            contentType: a.z.ACTIVITIES_VOICE_LAUNCHER_BADGE,
                            latestVersion: k,
                            children: (e) => {
                                let { visibleContent: t, markAsDismissed: n } = e;
                                return (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(o.u, {
                                            text: S.intl.string(S.t.P8vmUv),
                                            forceOpen: !0,
                                            shouldShow: c,
                                            children: (0, i.jsx)("div", {
                                                ref: q,
                                                children: (0, i.jsx)(x.Z, {
                                                    disabled: A,
                                                    "aria-label": N,
                                                    label: U ? void 0 : N,
                                                    isActivityActive: D,
                                                    onClick: () => {
                                                        G(),
                                                            (r === a.z.ACTIVITIES_MINI_SHELF_SPARKLES ||
                                                                r === a.z.ACTIVITY_GDM_ROCKET_SPARKLE ||
                                                                r ===
                                                                    a.z
                                                                        .ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_1_SPARKLES ||
                                                                r ===
                                                                    a.z
                                                                        .ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_2_SPARKLES ||
                                                                r ===
                                                                    a.z
                                                                        .VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP) &&
                                                                l(E.L.TAKE_ACTION),
                                                            t === a.z.ACTIVITIES_VOICE_LAUNCHER_BADGE &&
                                                                n(E.L.TAKE_ACTION);
                                                    },
                                                    onMouseEnter: B,
                                                    onMouseLeave: L,
                                                }),
                                            }),
                                        }),
                                        t === a.z.ACTIVITIES_VOICE_LAUNCHER_BADGE
                                            ? (0, i.jsx)(m.r, {
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
