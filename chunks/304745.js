n.d(t, { M: () => S }), n(539854);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(704215),
    o = n(481060),
    s = n(911969),
    c = n(317381),
    u = n(314490),
    d = n(374065),
    p = n(451576),
    h = n(526846),
    f = n(119315),
    m = n(906732),
    g = n(397698),
    b = n(522651),
    y = n(243778),
    C = n(728285),
    _ = n(579185),
    v = n(301076),
    x = n(127379),
    O = n(981631),
    j = n(921944),
    E = n(388032);
function S(e) {
    let { channel: t, idle: n, whichPopoutIsOpen: S, setWhichPopoutIsOpen: P } = e,
        I = (0, l.e7)([c.ZP], () => c.ZP.isLaunchingActivity()),
        Z = (0, d.KF)(t.id),
        T = (0, d.g5)(Z),
        N = Z !== d.jy.CAN_LAUNCH || I,
        { isHovered: A, setIsHovered: w, onMouseEnter: M, onMouseLeave: R } = (0, _.Z)(200, 300),
        k = (0, u.p)({ surface: s.eR.VOICE_LAUNCHER }),
        L = (0, l.e7)(
            [c.ZP],
            () => null != c.ZP.getSelfEmbeddedActivityForLocation(c.ZP.getConnectedActivityLocation()),
        ),
        D = !N,
        U = i.useCallback(
            (e) => {
                "focus" !== e.type && M();
            },
            [M],
        ),
        B = (0, C.bp)() === O.IlC.POPOUT,
        { parentAnalyticsLocation: F, newestAnalyticsLocation: H } = (0, m.ZP)(),
        V = i.useCallback(() => {
            (0, b.v)(F, b.d.ACTIVITY),
                (0, g.Z)({
                    context:
                        null != t
                            ? {
                                  type: "channel",
                                  channel: t,
                              }
                            : { type: "contextless" },
                    openInPopout: B,
                    analyticsLocation: H,
                });
        }, [t, B, H, F]),
        G = [];
    N || G.push(a.z.ACTIVITIES_MINI_SHELF_SPARKLES),
        (0, p.Z)(t.id) && !N && G.push(a.z.ACTIVITY_GDM_ROCKET_SPARKLE),
        N || G.push(a.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP);
    let z = i.useRef(!1),
        W = i.useRef(null);
    return (0, r.jsx)(y.ZP, {
        contentTypes: G,
        children: (e) => {
            let { visibleContent: i, markAsDismissed: l } = e,
                s = i === a.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP && !n && !A;
            return (
                z.current && !s && l(j.L.AUTO_DISMISS),
                z.current !== s && (z.current = s),
                (0, r.jsx)(o.yRy, {
                    targetElementRef: W,
                    fixed: !0,
                    shouldShow: A && (S === x.D.ACTIVITY || null == S),
                    animation: o.yRy.Animation.FADE,
                    animationPosition: "top",
                    position: "top",
                    align: "center",
                    spacing: 16,
                    onRequestClose: () => {
                        w(!1), null == P || P(void 0);
                    },
                    renderPopout: (e) => {
                        let { closePopout: n, setPopoutRef: i } = e;
                        return D
                            ? (0, r.jsx)(h.m, {
                                  ref: (e) => {
                                      null == i || i(e);
                                  },
                                  channel: t,
                                  closePopout: n,
                                  onMouseEnter: M,
                                  onMouseLeave: R,
                                  isHovered: A,
                                  onClick: () => l(j.L.UNKNOWN),
                              })
                            : (0, r.jsx)(r.Fragment, {});
                    },
                    children: () =>
                        (0, r.jsx)(y.Xf, {
                            contentType: a.z.ACTIVITIES_VOICE_LAUNCHER_BADGE,
                            latestVersion: k,
                            children: (e) => {
                                let { visibleContent: t, markAsDismissed: n } = e;
                                return (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(o.ua7, {
                                            text: E.intl.string(E.t.P8vmUl),
                                            color: o.FGA.BRAND,
                                            forceOpen: !0,
                                            shouldShow: s,
                                            children: (e) => {
                                                var o, s;
                                                return (0, r.jsx)(
                                                    "div",
                                                    ((o = (function (e) {
                                                        for (var t = 1; t < arguments.length; t++) {
                                                            var n = null != arguments[t] ? arguments[t] : {},
                                                                r = Object.keys(n);
                                                            "function" == typeof Object.getOwnPropertySymbols &&
                                                                (r = r.concat(
                                                                    Object.getOwnPropertySymbols(n).filter(
                                                                        function (e) {
                                                                            return Object.getOwnPropertyDescriptor(n, e)
                                                                                .enumerable;
                                                                        },
                                                                    ),
                                                                )),
                                                                r.forEach(function (t) {
                                                                    var r;
                                                                    (r = n[t]),
                                                                        t in e
                                                                            ? Object.defineProperty(e, t, {
                                                                                  value: r,
                                                                                  enumerable: !0,
                                                                                  configurable: !0,
                                                                                  writable: !0,
                                                                              })
                                                                            : (e[t] = r);
                                                                });
                                                        }
                                                        return e;
                                                    })({ ref: W }, e)),
                                                    (s = s =
                                                        {
                                                            children: (0, r.jsx)(v.Z, {
                                                                disabled: N,
                                                                "aria-label": T,
                                                                label: D ? void 0 : T,
                                                                isActivityActive: L,
                                                                onClick: () => {
                                                                    V(),
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
                                                                onMouseEnter: U,
                                                                onMouseLeave: R,
                                                            }),
                                                        }),
                                                    Object.getOwnPropertyDescriptors
                                                        ? Object.defineProperties(
                                                              o,
                                                              Object.getOwnPropertyDescriptors(s),
                                                          )
                                                        : (function (e, t) {
                                                              var n = Object.keys(e);
                                                              if (Object.getOwnPropertySymbols) {
                                                                  var r = Object.getOwnPropertySymbols(e);
                                                                  n.push.apply(n, r);
                                                              }
                                                              return n;
                                                          })(Object(s)).forEach(function (e) {
                                                              Object.defineProperty(
                                                                  o,
                                                                  e,
                                                                  Object.getOwnPropertyDescriptor(s, e),
                                                              );
                                                          }),
                                                    o),
                                                );
                                            },
                                        }),
                                        t === a.z.ACTIVITIES_VOICE_LAUNCHER_BADGE
                                            ? (0, r.jsx)(f.r, {
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
