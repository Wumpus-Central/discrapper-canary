(n.d(t, { M: () => S }), n(539854));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(704215),
    o = n(481060),
    s = n(911969),
    c = n(40851),
    u = n(317381),
    d = n(314490),
    p = n(374065),
    h = n(451576),
    f = n(526846),
    m = n(119315),
    g = n(906732),
    b = n(397698),
    _ = n(522651),
    y = n(243778),
    C = n(579185),
    x = n(301076),
    v = n(127379),
    j = n(981631),
    O = n(921944),
    E = n(388032);
function S(e) {
    let { channel: t, idle: n, whichPopoutIsOpen: S, setWhichPopoutIsOpen: P } = e,
        I = (0, l.e7)([u.ZP], () => u.ZP.isLaunchingActivity()),
        Z = (0, p.KF)(t.id),
        T = (0, p.g5)(Z),
        N = Z !== p.jy.CAN_LAUNCH || I,
        { isHovered: A, setIsHovered: w, onMouseEnter: R, onMouseLeave: M } = (0, C.Z)(200, 300),
        D = (0, d.p)({ surface: s.eR.VOICE_LAUNCHER }),
        k = (0, l.e7)([u.ZP], () => null != u.ZP.getSelfEmbeddedActivityForLocation(u.ZP.getConnectedActivityLocation())),
        L = !N,
        U = i.useCallback(
            (e) => {
                'focus' !== e.type && R();
            },
            [R]
        ),
        B = (0, c.bp)() === j.IlC.POPOUT,
        { parentAnalyticsLocation: F, newestAnalyticsLocation: H } = (0, g.ZP)(),
        G = i.useCallback(() => {
            ((0, _.v)(F, _.d.ACTIVITY),
                (0, b.Z)({
                    context:
                        null != t
                            ? {
                                  type: 'channel',
                                  channel: t
                              }
                            : { type: 'contextless' },
                    openInPopout: B,
                    analyticsLocation: H
                }));
        }, [t, B, H, F]),
        V = [];
    (N || V.push(a.z.ACTIVITIES_MINI_SHELF_SPARKLES), (0, h.Z)(t.id) && !N && V.push(a.z.ACTIVITY_GDM_ROCKET_SPARKLE), N || V.push(a.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP));
    let z = i.useRef(!1),
        W = i.useRef(null);
    return (0, r.jsx)(y.ZP, {
        contentTypes: V,
        children: (e) => {
            let { visibleContent: i, markAsDismissed: l } = e,
                s = i === a.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP && !n && !A;
            return (
                z.current && !s && l(O.L.AUTO_DISMISS),
                z.current !== s && (z.current = s),
                (0, r.jsx)(o.yRy, {
                    targetElementRef: W,
                    fixed: !0,
                    shouldShow: A && (S === v.D.ACTIVITY || null == S),
                    animation: o.yRy.Animation.FADE,
                    animationPosition: 'top',
                    position: 'top',
                    align: 'center',
                    spacing: 16,
                    onRequestClose: () => {
                        (w(!1), null == P || P(void 0));
                    },
                    renderPopout: (e) => {
                        let { closePopout: n, setPopoutRef: i } = e;
                        return L
                            ? (0, r.jsx)(f.m, {
                                  ref: (e) => {
                                      null == i || i(e);
                                  },
                                  channel: t,
                                  closePopout: n,
                                  onMouseEnter: R,
                                  onMouseLeave: M,
                                  isHovered: A,
                                  onClick: () => l(O.L.UNKNOWN)
                              })
                            : (0, r.jsx)(r.Fragment, {});
                    },
                    children: () =>
                        (0, r.jsx)(y.Xf, {
                            contentType: a.z.ACTIVITIES_VOICE_LAUNCHER_BADGE,
                            latestVersion: D,
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
                                                    'div',
                                                    ((o = (function (e) {
                                                        for (var t = 1; t < arguments.length; t++) {
                                                            var n = null != arguments[t] ? arguments[t] : {},
                                                                r = Object.keys(n);
                                                            ('function' == typeof Object.getOwnPropertySymbols &&
                                                                (r = r.concat(
                                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                                    })
                                                                )),
                                                                r.forEach(function (t) {
                                                                    var r;
                                                                    ((r = n[t]),
                                                                        t in e
                                                                            ? Object.defineProperty(e, t, {
                                                                                  value: r,
                                                                                  enumerable: !0,
                                                                                  configurable: !0,
                                                                                  writable: !0
                                                                              })
                                                                            : (e[t] = r));
                                                                }));
                                                        }
                                                        return e;
                                                    })({ ref: W }, e)),
                                                    (s = s =
                                                        {
                                                            children: (0, r.jsx)(x.Z, {
                                                                disabled: N,
                                                                'aria-label': T,
                                                                label: L ? void 0 : T,
                                                                isActivityActive: k,
                                                                onClick: () => {
                                                                    (G(), (i === a.z.ACTIVITIES_MINI_SHELF_SPARKLES || i === a.z.ACTIVITY_GDM_ROCKET_SPARKLE || i === a.z.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_1_SPARKLES || i === a.z.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_2_SPARKLES || i === a.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP) && l(O.L.TAKE_ACTION), t === a.z.ACTIVITIES_VOICE_LAUNCHER_BADGE && n(O.L.TAKE_ACTION));
                                                                },
                                                                onMouseEnter: U,
                                                                onMouseLeave: M
                                                            })
                                                        }),
                                                    Object.getOwnPropertyDescriptors
                                                        ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(s))
                                                        : (function (e, t) {
                                                              var n = Object.keys(e);
                                                              if (Object.getOwnPropertySymbols) {
                                                                  var r = Object.getOwnPropertySymbols(e);
                                                                  n.push.apply(n, r);
                                                              }
                                                              return n;
                                                          })(Object(s)).forEach(function (e) {
                                                              Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(s, e));
                                                          }),
                                                    o)
                                                );
                                            }
                                        }),
                                        t === a.z.ACTIVITIES_VOICE_LAUNCHER_BADGE
                                            ? (0, r.jsx)(m.r, {
                                                  top: 2,
                                                  right: 2,
                                                  size: 6
                                              })
                                            : null
                                    ]
                                });
                            }
                        })
                })
            );
        }
    });
}
