n.d(t, { M: () => T }), n(653041);
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
    C = n(424602),
    v = n(522651),
    y = n(243778),
    x = n(579185),
    j = n(301076),
    O = n(221241),
    E = n(82965),
    N = n(127379),
    I = n(981631),
    P = n(921944),
    S = n(388032),
    Z = n(633678);
function T(e) {
    let { channel: t, idle: n, whichPopoutIsOpen: T, setWhichPopoutIsOpen: A } = e,
        w = (0, l.e7)([u.ZP], () => u.ZP.isLaunchingActivity()),
        R = (0, h.KF)(t.id),
        M = (0, h.g5)(R),
        k = R !== h.jy.CAN_LAUNCH || w,
        { isHovered: L, setIsHovered: D, onMouseEnter: W, onMouseLeave: U } = (0, x.Z)(200, 300),
        B = (0, E.Z)({ location: 'CenterControlTrayActivityButton' }),
        { coloredIconsEnabled: F } = (0, O.Z)({ location: 'VideoButton' }),
        H = (0, p.a)(s.eR.VOICE_LAUNCHER),
        G = (0, l.e7)([u.ZP], () => null != u.ZP.getSelfEmbeddedActivityForLocation(u.ZP.getConnectedActivityLocation())),
        V = (0, d.Z)({ channelId: t.id }),
        z = (F && G) || (!F && (V || (!B && L))),
        Y = !k,
        q = i.useCallback(
            (e) => {
                'focus' !== e.type && W();
            },
            [W]
        ),
        K = (0, c.bp)() === I.IlC.POPOUT,
        { analyticsLocations: X, parentAnalyticsLocation: Q } = (0, _.ZP)(),
        J = i.useCallback(() => {
            (0, v.v)(Q, v.d.ACTIVITY),
                (0, b.Z)({
                    channel: t,
                    openInPopout: K,
                    analyticsLocations: X
                });
        }, [X, t, K, Q]),
        $ = [];
    k || $.push(o.z.ACTIVITIES_MINI_SHELF_SPARKLES), (0, f.Z)(t.id) && !k && $.push(o.z.ACTIVITY_GDM_ROCKET_SPARKLE);
    let { enabled: ee } = C.nS.useExperiment({ location: 'CenterControlTrayActivityButton' });
    ee && !k && $.push(o.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP);
    let et = i.useRef(!1);
    return (0, r.jsx)(y.ZP, {
        contentTypes: $,
        children: (e) => {
            let { visibleContent: i, markAsDismissed: l } = e,
                s = i === o.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP && !n && !L;
            return (
                !0 === et.current && !1 === s && l(P.L.AUTO_DISMISS),
                et.current !== s && (et.current = s),
                (0, r.jsx)(a.yRy, {
                    fixed: !0,
                    shouldShow: L && (T === N.D.ACTIVITY || null == T),
                    animation: B ? a.yRy.Animation.FADE : a.yRy.Animation.TRANSLATE,
                    animationPosition: B ? 'top' : 'bottom',
                    position: 'top',
                    align: 'center',
                    spacing: 16,
                    onRequestClose: () => {
                        D(!1), null == A || A(void 0);
                    },
                    renderPopout: (e) => {
                        let { closePopout: n, setPopoutRef: i } = e;
                        return Y
                            ? (0, r.jsx)(m.m, {
                                  ref: i,
                                  channel: t,
                                  closePopout: n,
                                  onMouseEnter: W,
                                  onMouseLeave: U,
                                  isHovered: L,
                                  onClick: () => l(P.L.UNKNOWN)
                              })
                            : (0, r.jsx)(r.Fragment, {});
                    },
                    children: () =>
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(a.ua7, {
                                    text: S.NW.string(S.t.P8vmUl),
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
                                            })({}, e)),
                                            (n = n =
                                                {
                                                    children: (0, r.jsx)(j.Z, {
                                                        disabled: k,
                                                        'aria-label': M,
                                                        label: Y ? void 0 : M,
                                                        isActivityActive: z,
                                                        className: B ? '' : Z.controlButton,
                                                        onClick: () => {
                                                            J(), (i === o.z.ACTIVITIES_MINI_SHELF_SPARKLES || i === o.z.ACTIVITY_GDM_ROCKET_SPARKLE || i === o.z.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_1_SPARKLES || i === o.z.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_2_SPARKLES || i === o.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP) && l(P.L.TAKE_ACTION);
                                                        },
                                                        onMouseEnter: q,
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
                                H
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
