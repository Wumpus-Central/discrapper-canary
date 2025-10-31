n.d(t, { M: () => P }), n(539854);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(704215),
    o = n(28664),
    s = n(481060),
    c = n(911969),
    u = n(317381),
    d = n(314490),
    p = n(374065),
    f = n(451576),
    h = n(526846),
    m = n(119315),
    g = n(906732),
    b = n(397698),
    _ = n(522651),
    y = n(243778),
    C = n(728285),
    v = n(579185),
    O = n(301076),
    x = n(127379),
    E = n(981631),
    j = n(921944),
    S = n(388032);
function P(e) {
    let { channel: t, idle: n, whichPopoutIsOpen: P, setWhichPopoutIsOpen: I } = e,
        Z = (0, l.e7)([u.ZP], () => u.ZP.isLaunchingActivity()),
        T = (0, p.KF)(t.id),
        N = (0, p.g5)(T),
        A = T !== p.jy.CAN_LAUNCH || Z,
        { isHovered: w, setIsHovered: M, onMouseEnter: R, onMouseLeave: D } = (0, v.Z)(200, 300),
        L = (0, d.p)({ surface: c.eR.VOICE_LAUNCHER }),
        k = (0, l.e7)(
            [u.ZP],
            () => null != u.ZP.getSelfEmbeddedActivityForLocation(u.ZP.getConnectedActivityLocation()),
        ),
        U = !A,
        B = i.useCallback(
            (e) => {
                "focus" !== e.type && R();
            },
            [R],
        ),
        F = (0, C.bp)() === E.IlC.POPOUT,
        { parentAnalyticsLocation: V, newestAnalyticsLocation: H } = (0, g.ZP)(),
        G = i.useCallback(() => {
            (0, _.v)(V, _.d.ACTIVITY),
                (0, b.Z)({
                    context:
                        null != t
                            ? {
                                  type: "channel",
                                  channel: t,
                              }
                            : { type: "contextless" },
                    openInPopout: F,
                    analyticsLocation: H,
                });
        }, [t, F, H, V]),
        W = [];
    A || W.push(a.z.ACTIVITIES_MINI_SHELF_SPARKLES),
        (0, f.Z)(t.id) && !A && W.push(a.z.ACTIVITY_GDM_ROCKET_SPARKLE),
        A || W.push(a.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP);
    let z = i.useRef(!1),
        q = i.useRef(null);
    return (0, r.jsx)(y.ZP, {
        contentTypes: W,
        children: (e) => {
            let { visibleContent: i, markAsDismissed: l } = e,
                c = i === a.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP && !n && !w;
            return (
                z.current && !c && l(j.L.AUTO_DISMISS),
                z.current !== c && (z.current = c),
                (0, r.jsx)(s.yRy, {
                    targetElementRef: q,
                    fixed: !0,
                    shouldShow: w && (P === x.D.ACTIVITY || null == P),
                    animation: s.yRy.Animation.FADE,
                    animationPosition: "top",
                    position: "top",
                    align: "center",
                    spacing: 16,
                    onRequestClose: () => {
                        M(!1), null == I || I(void 0);
                    },
                    renderPopout: (e) => {
                        let { closePopout: n, setPopoutRef: i } = e;
                        return U
                            ? (0, r.jsx)(h.m, {
                                  ref: (e) => {
                                      null == i || i(e);
                                  },
                                  channel: t,
                                  closePopout: n,
                                  onMouseEnter: R,
                                  onMouseLeave: D,
                                  isHovered: w,
                                  onClick: () => l(j.L.UNKNOWN),
                              })
                            : (0, r.jsx)(r.Fragment, {});
                    },
                    children: () =>
                        (0, r.jsx)(y.Xf, {
                            contentType: a.z.ACTIVITIES_VOICE_LAUNCHER_BADGE,
                            latestVersion: L,
                            children: (e) => {
                                let { visibleContent: t, markAsDismissed: n } = e;
                                return (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(o.u, {
                                            text: S.intl.string(S.t.P8vmUv),
                                            forceOpen: !0,
                                            shouldShow: c,
                                            children: (0, r.jsx)("div", {
                                                ref: q,
                                                children: (0, r.jsx)(O.Z, {
                                                    disabled: A,
                                                    "aria-label": N,
                                                    label: U ? void 0 : N,
                                                    isActivityActive: k,
                                                    onClick: () => {
                                                        G(),
                                                            (i === a.z.ACTIVITIES_MINI_SHELF_SPARKLES ||
                                                                i === a.z.ACTIVITY_GDM_ROCKET_SPARKLE ||
                                                                i ===
                                                                    a.z
                                                                        .ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_1_SPARKLES ||
                                                                i ===
                                                                    a.z
                                                                        .ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_2_SPARKLES ||
                                                                i ===
                                                                    a.z
                                                                        .VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP) &&
                                                                l(j.L.TAKE_ACTION),
                                                            t === a.z.ACTIVITIES_VOICE_LAUNCHER_BADGE &&
                                                                n(j.L.TAKE_ACTION);
                                                    },
                                                    onMouseEnter: B,
                                                    onMouseLeave: D,
                                                }),
                                            }),
                                        }),
                                        t === a.z.ACTIVITIES_VOICE_LAUNCHER_BADGE
                                            ? (0, r.jsx)(m.r, {
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
