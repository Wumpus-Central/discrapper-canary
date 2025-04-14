n.d(t, { Z: () => G });
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
    y = n(367907),
    _ = n(213609),
    C = n(499254),
    x = n(541099),
    v = n(827498),
    j = n(569211),
    O = n(663924),
    E = n(533379),
    N = n(562129),
    I = n(404295),
    P = n(540059),
    S = n(605236),
    Z = n(819640),
    T = n(291407),
    A = n(685006),
    w = n(61356),
    R = n(981631),
    k = n(314734),
    M = n(921944),
    L = n(388032),
    D = n(560163),
    W = n(795361);
let U = i.forwardRef(function (e, t) {
    var n, l;
    let { type: j, animateRef: O } = e,
        E = (0, s.e7)([x.Z], () => x.Z.shouldShowPopup() && x.Z.activeViewType() === j),
        { badgeTreatment: I } = f.Y.useExperiment({ location: 'ChannelAppLauncherButton' }, { autoTrackExposure: !0 }),
        { Component: Z, events: T, play: A } = (0, N.Z)('ChannelAppLauncherButton'),
        { Component: w, play: W } = (0, u.B)(),
        { Component: U, play: B } = (0, d.P)(),
        G = (0, P.Q3)('ChannelAppLauncherButton');
    i.useImperativeHandle(
        O,
        () => ({
            animate: () => {
                T.onMouseEnter();
            }
        }),
        [T]
    );
    let F = (0, g.a)(h.eR.TEXT_LAUNCHER),
        H = i.useCallback(() => {
            (0, y.yw)(R.rMx.APP_LAUNCHER_ENTRYPOINT_BUTTON_CLICKED, {
                source: v._b.TEXT,
                badge_type: F ? I.valueOf() : null
            }),
                E ? C.yT(v.ti.DISMISSED) : ((0, S.EW)(c.z.DESKTOP_APP_LAUNCHER_ONBOARDING, { dismissAction: M.L.TAKE_ACTION }), C.__(v._b.TEXT, j), m.ux()),
                A();
        }, [E, j, A, F, I]);
    i.useEffect(() => {
        let e = setTimeout(() => {
            I !== f.O.NONE &&
                F &&
                (W(),
                B(),
                (0, _.h)({
                    type: a.ImpressionTypes.VIEW,
                    name: a.ImpressionNames.APP_LAUNCHER_BADGE,
                    properties: {
                        source: v._b.TEXT,
                        badge_type: I.valueOf()
                    }
                }));
        }, 1000);
        return () => clearTimeout(e);
    }, [W, B, I, F]);
    let V = i.useMemo(() => {
        let e = (0, r.jsx)(Z, {
            size: G ? 'refresh_sm' : void 0,
            color: 'currentColor'
        });
        if (!F) return e;
        switch (I) {
            case f.O.WORDLE_LOGO_ANIMATION:
                return (0, r.jsx)('div', {
                    children: (0, r.jsx)(U, {
                        size: G ? 'refresh_sm' : void 0,
                        useLottieDefaultColors: !0
                    })
                });
            case f.O.GLOWING_ANIMATION:
            case f.O.SIMPLE_BADGE:
            case f.O.NONE:
            default:
                return e;
        }
    }, [Z, U, I, G, F]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            F &&
                I === f.O.GLOWING_ANIMATION &&
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
                className: o()(D.buttonContainer, k.t4, { [D.appLauncherCircleMask]: I === f.O.GLOWING_ANIMATION }),
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
                                onClick: H,
                                'aria-label': L.NW.string(L.t.erHFxM),
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
                        (l = l = { children: V }),
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
                    F &&
                        I === f.O.SIMPLE_BADGE &&
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
function B(e) {
    let { showAppLauncherPopup: t, children: n } = e,
        i = (0, s.e7)([Z.Z], () => Z.Z.hasLayers()),
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
                          alt: L.NW.string(L.t.X4IxWF),
                          src: null == c ? void 0 : c.iconURL,
                          'aria-hidden': !0,
                          draggable: !1
                      }),
                      (0, r.jsx)('div', {
                          className: D.channelAppLauncherButtonPopoutIconShimmerContainer,
                          children: (0, r.jsx)('img', {
                              className: D.channelAppLauncherButtonPopoutIconShimmer,
                              alt: L.NW.string(L.t.X4IxWF),
                              src: W,
                              'aria-hidden': !0,
                              draggable: !1
                          })
                      })
                  ]
              })
            : null;
    return u
        ? (0, r.jsx)(p.ua7, {
              text: L.NW.string(L.t.JDj6Xl),
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
let G = i.memo(function (e) {
    let { channel: t, type: n, animateRef: l, entryPointCommandButtonRef: o } = e,
        a = i.useRef(null),
        c = (0, E.R)({
            channel: t,
            chatInputType: n
        }),
        u = (0, w.Z)({ type: n }),
        d = (0, I.h9)(t.id),
        p = (0, s.e7)([x.Z], () => x.Z.appDMChannelsWithFailedLoads().has(t.id)),
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
                      children: (0, r.jsx)(B, {
                          showAppLauncherPopup: u,
                          children: (0, r.jsx)(U, {
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
