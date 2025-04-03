n.d(t, { M: () => Z }), n(653041);
var r = n(200651),
    i = n(192379),
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
    C = n(522651),
    y = n(243778),
    x = n(579185),
    v = n(301076),
    j = n(221241),
    O = n(82965),
    E = n(127379),
    N = n(981631),
    I = n(921944),
    P = n(388032),
    S = n(393740);
function Z(e) {
    let { channel: t, idle: n, whichPopoutIsOpen: Z, setWhichPopoutIsOpen: T } = e,
        A = (0, l.e7)([u.ZP], () => u.ZP.isLaunchingActivity()),
        w = (0, h.KF)(t.id),
        R = (0, h.g5)(w),
        M = w !== h.jy.CAN_LAUNCH || A,
        { isHovered: k, setIsHovered: L, onMouseEnter: D, onMouseLeave: W } = (0, x.Z)(200, 300),
        U = (0, O.Z)({ location: 'CenterControlTrayActivityButton' }),
        { coloredIconsEnabled: B } = (0, j.Z)({ location: 'VideoButton' }),
        H = (0, p.a)(s.eR.VOICE_LAUNCHER),
        F = (0, l.e7)([u.ZP], () => null != u.ZP.getSelfEmbeddedActivityForLocation(u.ZP.getConnectedActivityLocation())),
        G = (0, d.Z)({ channelId: t.id }),
        V = (B && F) || (!B && (G || (!U && k))),
        z = !M,
        Y = i.useCallback(
            (e) => {
                'focus' !== e.type && D();
            },
            [D]
        ),
        q = (0, c.bp)() === N.IlC.POPOUT,
        { analyticsLocations: K, parentAnalyticsLocation: X } = (0, _.ZP)(),
        Q = i.useCallback(() => {
            (0, C.v)(X, C.d.ACTIVITY),
                (0, b.Z)({
                    channel: t,
                    openInPopout: q,
                    analyticsLocations: K
                });
        }, [K, t, q, X]),
        J = [];
    M || J.push(o.z.ACTIVITIES_MINI_SHELF_SPARKLES), (0, f.Z)(t.id) && !M && J.push(o.z.ACTIVITY_GDM_ROCKET_SPARKLE), M || J.push(o.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP);
    let $ = i.useRef(!1),
        ee = i.useRef(null);
    return (0, r.jsx)(y.ZP, {
        contentTypes: J,
        children: (e) => {
            let { visibleContent: i, markAsDismissed: l } = e,
                s = i === o.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP && !n && !k;
            return (
                !0 === $.current && !1 === s && l(I.L.AUTO_DISMISS),
                $.current !== s && ($.current = s),
                (0, r.jsx)(a.yRy, {
                    targetElementRef: ee,
                    fixed: !0,
                    shouldShow: k && (Z === E.D.ACTIVITY || null == Z),
                    animation: U ? a.yRy.Animation.FADE : a.yRy.Animation.TRANSLATE,
                    animationPosition: U ? 'top' : 'bottom',
                    position: 'top',
                    align: 'center',
                    spacing: 16,
                    onRequestClose: () => {
                        L(!1), null == T || T(void 0);
                    },
                    renderPopout: (e) => {
                        let { closePopout: n, setPopoutRef: i } = e;
                        return z
                            ? (0, r.jsx)(m.m, {
                                  ref: i,
                                  channel: t,
                                  closePopout: n,
                                  onMouseEnter: D,
                                  onMouseLeave: W,
                                  isHovered: k,
                                  onClick: () => l(I.L.UNKNOWN)
                              })
                            : (0, r.jsx)(r.Fragment, {});
                    },
                    children: () =>
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(a.ua7, {
                                    text: P.NW.string(P.t.P8vmUl),
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
                                                        disabled: M,
                                                        'aria-label': R,
                                                        label: z ? void 0 : R,
                                                        isActivityActive: V,
                                                        className: U ? '' : S.controlButton,
                                                        onClick: () => {
                                                            Q(), (i === o.z.ACTIVITIES_MINI_SHELF_SPARKLES || i === o.z.ACTIVITY_GDM_ROCKET_SPARKLE || i === o.z.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_1_SPARKLES || i === o.z.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_2_SPARKLES || i === o.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP) && l(I.L.TAKE_ACTION);
                                                        },
                                                        onMouseEnter: Y,
                                                        onMouseLeave: W
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
                                H
                                    ? U
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
