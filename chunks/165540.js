n.d(t, { Z: () => F });
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(990547),
    s = n(442837),
    c = n(704215),
    u = n(124293),
    d = n(966006),
    p = n(481060),
    h = n(911969),
    f = n(72879),
    m = n(566620),
    g = n(588580),
    b = n(119315),
    _ = n(367907),
    y = n(213609),
    x = n(499254),
    C = n(541099),
    v = n(827498),
    j = n(569211),
    O = n(663924),
    E = n(533379),
    I = n(562129),
    P = n(404295),
    S = n(540059),
    Z = n(605236),
    N = n(819640),
    T = n(291407),
    A = n(685006),
    w = n(61356),
    R = n(981631),
    k = n(314734),
    M = n(921944),
    L = n(388032),
    D = n(560163),
    U = n(795361);
let B = i.forwardRef(function (e, t) {
    var n, l;
    let { type: j, animateRef: O } = e,
        E = (0, s.e7)([C.Z], () => C.Z.shouldShowPopup() && C.Z.activeViewType() === j),
        { badgeTreatment: P } = f.Y.useExperiment({ location: 'ChannelAppLauncherButton' }, { autoTrackExposure: !0 }),
        { Component: N, events: T, play: A } = (0, I.Z)('ChannelAppLauncherButton'),
        { Component: w, play: U } = (0, u.B)(),
        { Component: B, play: G } = (0, d.P)(),
        F = (0, S.Q3)('ChannelAppLauncherButton');
    i.useImperativeHandle(
        O,
        () => ({
            animate: () => {
                T.onMouseEnter();
            }
        }),
        [T]
    );
    let H = (0, g.a)({
            surface: h.eR.TEXT_LAUNCHER,
            skipFetchingShelf: P === f.O.NONE
        }),
        V = i.useCallback(() => {
            (0, _.yw)(R.rMx.APP_LAUNCHER_ENTRYPOINT_BUTTON_CLICKED, {
                source: v._b.TEXT,
                badge_type: H ? P.valueOf() : null
            }),
                E ? x.yT(v.ti.DISMISSED) : ((0, Z.EW)(c.z.DESKTOP_APP_LAUNCHER_ONBOARDING, { dismissAction: M.L.TAKE_ACTION }), x.__(v._b.TEXT, j), m.ux()),
                A();
        }, [E, j, A, H, P]);
    i.useEffect(() => {
        let e = setTimeout(() => {
            P !== f.O.NONE &&
                H &&
                (U(),
                G(),
                (0, y.h)({
                    type: a.ImpressionTypes.VIEW,
                    name: a.ImpressionNames.APP_LAUNCHER_BADGE,
                    properties: {
                        source: v._b.TEXT,
                        badge_type: P.valueOf()
                    }
                }));
        }, 1000);
        return () => clearTimeout(e);
    }, [U, G, P, H]);
    let z = i.useMemo(() => {
        let e = (0, r.jsx)(N, {
            size: F ? 'refresh_sm' : void 0,
            color: 'currentColor'
        });
        if (!H) return e;
        switch (P) {
            case f.O.WORDLE_LOGO_ANIMATION:
                return (0, r.jsx)('div', {
                    className: D.channelAppLauncherWordlePromo,
                    children: (0, r.jsx)(B, {
                        size: F ? 'refresh_sm' : void 0,
                        useLottieDefaultColors: !0
                    })
                });
            case f.O.GLOWING_ANIMATION:
            case f.O.SIMPLE_BADGE:
            case f.O.NONE:
            default:
                return e;
        }
    }, [N, B, P, F, H]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            H &&
                P === f.O.GLOWING_ANIMATION &&
                (0, r.jsx)('div', {
                    className: D.appLauncherGlow,
                    children: (0, r.jsx)(w, {
                        size: 'custom',
                        width: 48,
                        height: 48,
                        useLottieDefaultColors: !0
                    })
                }),
            (0, r.jsxs)('div', {
                className: o()(D.buttonContainer, k.t4, { [D.appLauncherCircleMask]: P === f.O.GLOWING_ANIMATION }),
                ref: t,
                children: [
                    (0, r.jsx)(
                        p.zxk,
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
                                look: p.zxk.Looks.BLANK,
                                size: p.zxk.Sizes.NONE,
                                tabIndex: 0,
                                className: o()(D.button, { [D.buttonActive]: E }),
                                onClick: V,
                                'aria-label': L.intl.string(L.t.erHFxM),
                                focusProps: {
                                    offset: {
                                        top: 4,
                                        bottom: 4,
                                        left: -4,
                                        right: -4
                                    }
                                },
                                innerClassName: D.buttonContents
                            },
                            T
                        )),
                        (l = l = { children: z }),
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
                    H &&
                        P === f.O.SIMPLE_BADGE &&
                        (0, r.jsx)(b.r, {
                            top: -1,
                            right: -1,
                            size: 7,
                            showBlurpleTreatment: !0,
                            maskColor: b.T.PRIMARY
                        })
                ]
            })
        ]
    });
});
function G(e) {
    let { showAppLauncherPopup: t, children: n } = e,
        i = (0, s.e7)([N.Z], () => N.Z.hasLayers()),
        {
            enabled: l,
            shouldShow: a,
            applicationDetails: c,
            showsTooltip: u
        } = (0, j.Z)({
            obstructedFromView: i,
            disabled: t
        });
    if (!l) return n;
    let d =
        a && (null == c ? void 0 : c.iconURL) != null
            ? (0, r.jsxs)('div', {
                  className: D.channelAppLauncherButtonPopoutIconContainer,
                  children: [
                      (0, r.jsx)('img', {
                          className: o()(D.buttonContainer, D.button, D.channelAppLauncherButtonPopoutIcon),
                          alt: L.intl.string(L.t.X4IxWF),
                          src: null == c ? void 0 : c.iconURL,
                          'aria-hidden': !0,
                          draggable: !1
                      }),
                      (0, r.jsx)('div', {
                          className: D.channelAppLauncherButtonPopoutIconShimmerContainer,
                          children: (0, r.jsx)('img', {
                              className: D.channelAppLauncherButtonPopoutIconShimmer,
                              alt: L.intl.string(L.t.X4IxWF),
                              src: U,
                              'aria-hidden': !0,
                              draggable: !1
                          })
                      })
                  ]
              })
            : null;
    return u
        ? (0, r.jsx)(p.ua7, {
              text: L.intl.string(L.t.JDj6Xl),
              shouldShow: a,
              forceOpen: a,
              children: () =>
                  (0, r.jsxs)(r.Fragment, {
                      children: [d, n]
                  })
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [d, n]
          });
}
let F = i.memo(function (e) {
    let { channel: t, type: n, animateRef: l, entryPointCommandButtonRef: o } = e,
        a = i.useRef(null),
        c = (0, E.R)({
            channel: t,
            chatInputType: n
        }),
        u = (0, w.Z)({ type: n }),
        d = (0, P.h9)(t.id),
        p = (0, s.e7)([C.Z], () => C.Z.appDMChannelsWithFailedLoads().has(t.id)),
        { visible: h } = (0, A.xL)();
    return c
        ? (0, r.jsxs)('div', {
              className: D.channelAppLauncher,
              children: [
                  (0, r.jsx)(T.Z, {
                      channel: t,
                      animationContainerClassName: D.entrypointAnimation,
                      glowClassName: D.animationGlow,
                      trinketsClassName: D.animationTrinkets,
                      children: (0, r.jsx)(G, {
                          showAppLauncherPopup: u,
                          children: (0, r.jsx)(B, {
                              type: n,
                              ref: a,
                              animateRef: l
                          })
                      })
                  }),
                  u
                      ? (0, r.jsx)(O.Z, {
                            positionTargetRef: d && !p && h ? o : a,
                            channel: t
                        })
                      : null
              ]
          })
        : null;
});
