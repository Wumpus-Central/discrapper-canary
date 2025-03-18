n.d(t, { M: () => Z }), n(653041);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(704215),
    a = n(481060),
    s = n(40851),
    c = n(317381),
    u = n(683921),
    d = n(588580),
    p = n(374065),
    h = n(451576),
    f = n(526846),
    m = n(119315),
    g = n(403404),
    b = n(906732),
    _ = n(424602),
    C = n(522651),
    v = n(243778),
    y = n(579185),
    x = n(301076),
    j = n(221241),
    O = n(82965),
    E = n(127379),
    N = n(981631),
    I = n(921944),
    P = n(388032),
    S = n(633678);
function Z(e) {
    let { channel: t, idle: n, whichPopoutIsOpen: Z, setWhichPopoutIsOpen: T } = e,
        A = (0, l.e7)([c.ZP], () => c.ZP.isLaunchingActivity()),
        w = (0, p.KF)(t.id),
        R = (0, p.g5)(w),
        M = w !== p.jy.CAN_LAUNCH || A,
        { isHovered: k, setIsHovered: L, onMouseEnter: D, onMouseLeave: W } = (0, y.Z)(200, 300),
        U = (0, O.Z)({ location: 'CenterControlTrayActivityButton' }),
        { coloredIconsEnabled: B } = (0, j.Z)({ location: 'VideoButton' }),
        H = (0, d.a)(),
        F = (0, l.e7)([c.ZP], () => null != c.ZP.getSelfEmbeddedActivityForLocation(c.ZP.getConnectedActivityLocation())),
        G = (0, u.Z)({ channelId: t.id }),
        V = (B && F) || (!B && (G || (!U && k))),
        z = !M,
        Y = i.useCallback(
            (e) => {
                'focus' !== e.type && D();
            },
            [D]
        ),
        q = (0, s.bp)() === N.IlC.POPOUT,
        { analyticsLocations: K, parentAnalyticsLocation: X } = (0, b.ZP)(),
        Q = i.useCallback(() => {
            (0, C.v)(X, C.d.ACTIVITY),
                (0, g.Z)({
                    channel: t,
                    openInPopout: q,
                    analyticsLocations: K
                });
        }, [K, t, q, X]),
        J = [];
    M || J.push(o.z.ACTIVITIES_MINI_SHELF_SPARKLES), (0, h.Z)(t.id) && !M && J.push(o.z.ACTIVITY_GDM_ROCKET_SPARKLE);
    let { enabled: $ } = _.nS.useExperiment({ location: 'CenterControlTrayActivityButton' });
    $ && !M && J.push(o.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP);
    let ee = i.useRef(!1);
    return (0, r.jsx)(v.ZP, {
        contentTypes: J,
        children: (e) => {
            let { visibleContent: i, markAsDismissed: l } = e,
                s = i === o.z.VOICE_PANEL_ACTIVITIES_SHAPES_BUTTON_EDUCATION_TOOLTIP && !n && !k;
            return (
                !0 === ee.current && !1 === s && l(I.L.AUTO_DISMISS),
                ee.current !== s && (ee.current = s),
                (0, r.jsx)(a.yRy, {
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
                            ? (0, r.jsx)(f.m, {
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
                                            })({}, e)),
                                            (n = n =
                                                {
                                                    children: (0, r.jsx)(x.Z, {
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
                                        ? (0, r.jsx)(m.r, {
                                              top: 2,
                                              right: 2,
                                              size: 6
                                          })
                                        : (0, r.jsx)(m.r, {
                                              top: 4,
                                              right: 10,
                                              size: 12,
                                              maskColor: m.T.BLACK
                                          })
                                    : null
                            ]
                        })
                })
            );
        }
    });
}
