n.d(t, { M: () => I }), n(539854);
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(704215),
    o = n(481060),
    s = n(911969),
    c = n(40851),
    u = n(317381),
    d = n(588580),
    p = n(374065),
    h = n(451576),
    f = n(526846),
    m = n(119315),
    g = n(403404),
    b = n(906732),
    _ = n(522651),
    C = n(243778),
    x = n(579185),
    y = n(301076),
    v = n(127379),
    j = n(981631),
    O = n(921944),
    E = n(388032);
function I(e) {
    let { channel: t, idle: n, whichPopoutIsOpen: I, setWhichPopoutIsOpen: S } = e,
        P = (0, l.e7)([u.ZP], () => u.ZP.isLaunchingActivity()),
        Z = (0, p.KF)(t.id),
        N = (0, p.g5)(Z),
        T = Z !== p.jy.CAN_LAUNCH || P,
        { isHovered: A, setIsHovered: w, onMouseEnter: R, onMouseLeave: M } = (0, x.Z)(200, 300),
        k = (0, d.a)({ surface: s.eR.VOICE_LAUNCHER }),
        L = (0, l.e7)([u.ZP], () => null != u.ZP.getSelfEmbeddedActivityForLocation(u.ZP.getConnectedActivityLocation())),
        D = !T,
        U = i.useCallback(
            (e) => {
                'focus' !== e.type && R();
            },
            [R]
        ),
        B = (0, c.bp)() === j.IlC.POPOUT,
        { analyticsLocations: G, parentAnalyticsLocation: F } = (0, b.ZP)(),
        H = i.useCallback(() => {
            (0, _.v)(F, _.d.ACTIVITY),
                (0, g.Z)({
                    channel: t,
                    openInPopout: B,
                    analyticsLocations: G
                });
        }, [G, t, B, F]),
        V = [];
    T || V.push(a.z.ACTIVITIES_MINI_SHELF_SPARKLES), (0, h.Z)(t.id) && !T && V.push(a.z.ACTIVITY_GDM_ROCKET_SPARKLE), T || V.push(a.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP);
    let z = i.useRef(!1),
        W = i.useRef(null);
    return (0, r.jsx)(C.ZP, {
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
                    shouldShow: A && (I === v.D.ACTIVITY || null == I),
                    animation: o.yRy.Animation.FADE,
                    animationPosition: 'top',
                    position: 'top',
                    align: 'center',
                    spacing: 16,
                    onRequestClose: () => {
                        w(!1), null == S || S(void 0);
                    },
                    renderPopout: (e) => {
                        let { closePopout: n, setPopoutRef: i } = e;
                        return D
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
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(o.ua7, {
                                    text: E.intl.string(E.t.P8vmUl),
                                    color: o.FGA.BRAND,
                                    forceOpen: !0,
                                    shouldShow: s,
                                    children: (e) => {
                                        var t, n;
                                        return (0, r.jsx)(
                                            'div',
                                            ((t = (function (e) {
                                                for (var t = 1; t < arguments.length; t++) {
                                                    var n = null != arguments[t] ? arguments[t] : {},
                                                        r = Object.keys(n);
                                                    'function' == typeof Object.getOwnPropertySymbols &&
                                                        (r = r.concat(
                                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                            })
                                                        )),
                                                        r.forEach(function (t) {
                                                            var r;
                                                            (r = n[t]),
                                                                t in e
                                                                    ? Object.defineProperty(e, t, {
                                                                          value: r,
                                                                          enumerable: !0,
                                                                          configurable: !0,
                                                                          writable: !0
                                                                      })
                                                                    : (e[t] = r);
                                                        });
                                                }
                                                return e;
                                            })({ ref: W }, e)),
                                            (n = n =
                                                {
                                                    children: (0, r.jsx)(y.Z, {
                                                        disabled: T,
                                                        'aria-label': N,
                                                        label: D ? void 0 : N,
                                                        isActivityActive: L,
                                                        onClick: () => {
                                                            H(), (i === a.z.ACTIVITIES_MINI_SHELF_SPARKLES || i === a.z.ACTIVITY_GDM_ROCKET_SPARKLE || i === a.z.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_1_SPARKLES || i === a.z.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_2_SPARKLES || i === a.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP) && l(O.L.TAKE_ACTION);
                                                        },
                                                        onMouseEnter: U,
                                                        onMouseLeave: M
                                                    })
                                                }),
                                            Object.getOwnPropertyDescriptors
                                                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                                : (function (e, t) {
                                                      var n = Object.keys(e);
                                                      if (Object.getOwnPropertySymbols) {
                                                          var r = Object.getOwnPropertySymbols(e);
                                                          n.push.apply(n, r);
                                                      }
                                                      return n;
                                                  })(Object(n)).forEach(function (e) {
                                                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                                  }),
                                            t)
                                        );
                                    }
                                }),
                                k
                                    ? (0, r.jsx)(m.r, {
                                          top: 2,
                                          right: 2,
                                          size: 6
                                      })
                                    : null
                            ]
                        })
                })
            );
        }
    });
}
