n.d(t, { Z: () => D });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(990547),
    s = n(442837),
    c = n(704215),
    u = n(124293),
    d = n(481060),
    p = n(911969),
    h = n(72879),
    f = n(566620),
    m = n(588580),
    g = n(119315),
    b = n(367907),
    _ = n(213609),
    y = n(499254),
    C = n(541099),
    x = n(827498),
    v = n(663924),
    j = n(533379),
    O = n(562129),
    E = n(404295),
    I = n(540059),
    P = n(605236),
    S = n(291407),
    Z = n(685006),
    N = n(281863),
    T = n(61356),
    A = n(981631),
    w = n(314734),
    R = n(921944),
    k = n(388032),
    M = n(560163);
let L = i.forwardRef(function (e, t) {
        var n, l;
        let { type: v, animateRef: j } = e,
            E = (0, s.e7)([C.Z], () => C.Z.shouldShowPopup() && C.Z.activeViewType() === v),
            { badgeTreatment: S } = h.Y.useExperiment({ location: 'ChannelAppLauncherButton' }, { autoTrackExposure: !0 }),
            { Component: Z, events: T, play: L } = (0, O.Z)('ChannelAppLauncherButton'),
            { Component: D, play: U } = (0, u.B)(),
            B = (0, I.Q3)('ChannelAppLauncherButton');
        i.useImperativeHandle(
            j,
            () => ({
                animate: () => {
                    T.onMouseEnter();
                }
            }),
            [T]
        );
        let G = (0, m.a)({
                surface: p.eR.TEXT_LAUNCHER,
                skipFetchingShelf: S === h.O.NONE
            }),
            F = i.useCallback(() => {
                (0, b.yw)(A.rMx.APP_LAUNCHER_ENTRYPOINT_BUTTON_CLICKED, {
                    source: x._b.TEXT,
                    badge_type: G ? S.valueOf() : null
                }),
                    E ? y.yT(x.ti.DISMISSED) : ((0, P.EW)(c.z.DESKTOP_APP_LAUNCHER_ONBOARDING, { dismissAction: R.L.TAKE_ACTION }), y.__(x._b.TEXT, v), f.ux()),
                    L();
            }, [E, v, L, G, S]);
        i.useEffect(() => {
            let e = setTimeout(() => {
                S !== h.O.NONE &&
                    G &&
                    (U(),
                    (0, _.h)({
                        type: a.ImpressionTypes.VIEW,
                        name: a.ImpressionNames.APP_LAUNCHER_BADGE,
                        properties: {
                            source: x._b.TEXT,
                            badge_type: S.valueOf()
                        }
                    }));
            }, 1000);
            return () => clearTimeout(e);
        }, [U, S, G]);
        let H = i.useMemo(() => {
            let e = (0, r.jsx)(Z, {
                size: B ? 'refresh_sm' : void 0,
                color: 'currentColor'
            });
            if (!G) return e;
            switch (S) {
                case h.O.WORDLE_LOGO_ANIMATION:
                    return (0, r.jsx)(N.Z, {});
                case h.O.GLOWING_ANIMATION:
                case h.O.SIMPLE_BADGE:
                case h.O.NONE:
                default:
                    return e;
            }
        }, [Z, S, B, G]);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                G &&
                    S === h.O.GLOWING_ANIMATION &&
                    (0, r.jsx)('div', {
                        className: M.appLauncherGlow,
                        children: (0, r.jsx)(D, {
                            size: 'custom',
                            width: 48,
                            height: 48,
                            useLottieDefaultColors: !0
                        })
                    }),
                (0, r.jsxs)('div', {
                    className: o()(M.buttonContainer, w.t4, { [M.appLauncherCircleMask]: S === h.O.GLOWING_ANIMATION }),
                    ref: t,
                    children: [
                        (0, r.jsx)(
                            d.zxk,
                            ((n = (function (e) {
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
                            })(
                                {
                                    look: d.zxk.Looks.BLANK,
                                    size: d.zxk.Sizes.NONE,
                                    tabIndex: 0,
                                    className: o()(M.button, { [M.buttonActive]: E }),
                                    onClick: F,
                                    'aria-label': k.intl.string(k.t.erHFxM),
                                    'aria-expanded': E,
                                    'aria-haspopup': 'dialog',
                                    focusProps: {
                                        offset: {
                                            top: 4,
                                            bottom: 4,
                                            left: -4,
                                            right: -4
                                        }
                                    },
                                    innerClassName: M.buttonContents
                                },
                                T
                            )),
                            (l = l = { children: H }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(l)).forEach(function (e) {
                                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                                  }),
                            n)
                        ),
                        G &&
                            S === h.O.SIMPLE_BADGE &&
                            (0, r.jsx)(g.r, {
                                top: -1,
                                right: -1,
                                size: 7,
                                showBlurpleTreatment: !0,
                                maskColor: g.T.PRIMARY
                            })
                    ]
                })
            ]
        });
    }),
    D = i.memo(function (e) {
        let { channel: t, type: n, animateRef: l, entryPointCommandButtonRef: o } = e,
            a = i.useRef(null),
            c = (0, j.R)({
                channel: t,
                chatInputType: n
            }),
            u = (0, T.Z)({ type: n }),
            d = (0, E.h9)(t.id),
            p = (0, s.e7)([C.Z], () => C.Z.appDMChannelsWithFailedLoads().has(t.id)),
            { visible: h } = (0, Z.xL)();
        return c
            ? (0, r.jsxs)('div', {
                  className: M.channelAppLauncher,
                  children: [
                      (0, r.jsx)(S.Z, {
                          channel: t,
                          animationContainerClassName: M.entrypointAnimation,
                          glowClassName: M.animationGlow,
                          trinketsClassName: M.animationTrinkets,
                          children: (0, r.jsx)(L, {
                              type: n,
                              ref: a,
                              animateRef: l
                          })
                      }),
                      u
                          ? (0, r.jsx)(v.Z, {
                                positionTargetRef: d && !p && h ? o : a,
                                channel: t
                            })
                          : null
                  ]
              })
            : null;
    });
