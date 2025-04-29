n.d(t, { M: () => N }), n(539854);
var r = n(255367),
    i = n(73800),
    l = n(442837),
    o = n(704215),
    a = n(481060),
    s = n(911969),
    c = n(40851),
    u = n(317381),
    d = n(683921),
    p = n(588580),
    h = n(374065),
    f = n(451576),
    m = n(526846),
    g = n(119315),
    b = n(403404),
    _ = n(906732),
    y = n(522651),
    C = n(243778),
    x = n(579185),
    v = n(301076),
    j = n(221241),
    O = n(82965),
    E = n(127379),
    I = n(981631),
    P = n(921944),
    S = n(388032),
    Z = n(393740);
function N(e) {
    let { channel: t, idle: n, whichPopoutIsOpen: N, setWhichPopoutIsOpen: T } = e,
        A = (0, l.e7)([u.ZP], () => u.ZP.isLaunchingActivity()),
        w = (0, h.KF)(t.id),
        R = (0, h.g5)(w),
        k = w !== h.jy.CAN_LAUNCH || A,
        { isHovered: M, setIsHovered: L, onMouseEnter: D, onMouseLeave: U } = (0, x.Z)(200, 300),
        B = (0, O.Z)({ location: 'CenterControlTrayActivityButton' }),
        { coloredIconsEnabled: G } = (0, j.Z)({ location: 'VideoButton' }),
        F = (0, p.a)({ surface: s.eR.VOICE_LAUNCHER }),
        H = (0, l.e7)([u.ZP], () => null != u.ZP.getSelfEmbeddedActivityForLocation(u.ZP.getConnectedActivityLocation())),
        V = (0, d.Z)({ channelId: t.id }),
        z = (G && H) || (!G && (V || (!B && M))),
        W = !k,
        Y = i.useCallback(
            (e) => {
                'focus' !== e.type && D();
            },
            [D]
        ),
        q = (0, c.bp)() === I.IlC.POPOUT,
        { analyticsLocations: K, parentAnalyticsLocation: X } = (0, _.ZP)(),
        Q = i.useCallback(() => {
            (0, y.v)(X, y.d.ACTIVITY),
                (0, b.Z)({
                    channel: t,
                    openInPopout: q,
                    analyticsLocations: K
                });
        }, [K, t, q, X]),
        J = [];
    k || J.push(o.z.ACTIVITIES_MINI_SHELF_SPARKLES), (0, f.Z)(t.id) && !k && J.push(o.z.ACTIVITY_GDM_ROCKET_SPARKLE), k || J.push(o.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP);
    let $ = i.useRef(!1),
        ee = i.useRef(null);
    return (0, r.jsx)(C.ZP, {
        contentTypes: J,
        children: (e) => {
            let { visibleContent: i, markAsDismissed: l } = e,
                s = i === o.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP && !n && !M;
            return (
                !0 === $.current && !1 === s && l(P.L.AUTO_DISMISS),
                $.current !== s && ($.current = s),
                (0, r.jsx)(a.yRy, {
                    targetElementRef: ee,
                    fixed: !0,
                    shouldShow: M && (N === E.D.ACTIVITY || null == N),
                    animation: B ? a.yRy.Animation.FADE : a.yRy.Animation.TRANSLATE,
                    animationPosition: B ? 'top' : 'bottom',
                    position: 'top',
                    align: 'center',
                    spacing: 16,
                    onRequestClose: () => {
                        L(!1), null == T || T(void 0);
                    },
                    renderPopout: (e) => {
                        let { closePopout: n, setPopoutRef: i } = e;
                        return W
                            ? (0, r.jsx)(m.m, {
                                  ref: (e) => {
                                      null == i || i(e);
                                  },
                                  channel: t,
                                  closePopout: n,
                                  onMouseEnter: D,
                                  onMouseLeave: U,
                                  isHovered: M,
                                  onClick: () => l(P.L.UNKNOWN)
                              })
                            : (0, r.jsx)(r.Fragment, {});
                    },
                    children: () =>
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(a.ua7, {
                                    text: S.intl.string(S.t.P8vmUl),
                                    color: a.FGA.BRAND,
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
                                            })({ ref: ee }, e)),
                                            (n = n =
                                                {
                                                    children: (0, r.jsx)(v.Z, {
                                                        disabled: k,
                                                        'aria-label': R,
                                                        label: W ? void 0 : R,
                                                        isActivityActive: z,
                                                        className: B ? '' : Z.controlButton,
                                                        onClick: () => {
                                                            Q(), (i === o.z.ACTIVITIES_MINI_SHELF_SPARKLES || i === o.z.ACTIVITY_GDM_ROCKET_SPARKLE || i === o.z.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_1_SPARKLES || i === o.z.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_2_SPARKLES || i === o.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP) && l(P.L.TAKE_ACTION);
                                                        },
                                                        onMouseEnter: Y,
                                                        onMouseLeave: U
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
                                F
                                    ? B
                                        ? (0, r.jsx)(g.r, {
                                              top: 2,
                                              right: 2,
                                              size: 6
                                          })
                                        : (0, r.jsx)(g.r, {
                                              top: 4,
                                              right: 10,
                                              size: 12,
                                              maskColor: g.T.BLACK
                                          })
                                    : null
                            ]
                        })
                })
            );
        }
    });
}
