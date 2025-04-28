n.d(t, { Z: () => F });
var r = n(200651),
    i = n(192379),
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
    x = n(541099),
    C = n(827498),
    v = n(569211),
    j = n(663924),
    O = n(533379),
    E = n(562129),
    I = n(404295),
    P = n(540059),
    S = n(605236),
    Z = n(819640),
    N = n(291407),
    T = n(685006),
    A = n(281863),
    w = n(61356),
    R = n(981631),
    k = n(314734),
    M = n(921944),
    L = n(388032),
    D = n(560163),
    U = n(795361);
let B = i.forwardRef(function (e, t) {
    var n, l;
    let { type: v, animateRef: j } = e,
        O = (0, s.e7)([x.Z], () => x.Z.shouldShowPopup() && x.Z.activeViewType() === v),
        { badgeTreatment: I } = h.Y.useExperiment({ location: 'ChannelAppLauncherButton' }, { autoTrackExposure: !0 }),
        { Component: Z, events: N, play: T } = (0, E.Z)('ChannelAppLauncherButton'),
        { Component: w, play: U } = (0, u.B)(),
        B = (0, P.Q3)('ChannelAppLauncherButton');
    i.useImperativeHandle(
        j,
        () => ({
            animate: () => {
                N.onMouseEnter();
            }
        }),
        [N]
    );
    let G = (0, m.a)({
            surface: p.eR.TEXT_LAUNCHER,
            skipFetchingShelf: I === h.O.NONE
        }),
        F = i.useCallback(() => {
            (0, b.yw)(R.rMx.APP_LAUNCHER_ENTRYPOINT_BUTTON_CLICKED, {
                source: C._b.TEXT,
                badge_type: G ? I.valueOf() : null
            }),
                O ? y.yT(C.ti.DISMISSED) : ((0, S.EW)(c.z.DESKTOP_APP_LAUNCHER_ONBOARDING, { dismissAction: M.L.TAKE_ACTION }), y.__(C._b.TEXT, v), f.ux()),
                T();
        }, [O, v, T, G, I]);
    i.useEffect(() => {
        let e = setTimeout(() => {
            I !== h.O.NONE &&
                G &&
                (U(),
                (0, _.h)({
                    type: a.ImpressionTypes.VIEW,
                    name: a.ImpressionNames.APP_LAUNCHER_BADGE,
                    properties: {
                        source: C._b.TEXT,
                        badge_type: I.valueOf()
                    }
                }));
        }, 1000);
        return () => clearTimeout(e);
    }, [U, I, G]);
    let H = i.useMemo(() => {
        let e = (0, r.jsx)(Z, {
            size: B ? 'refresh_sm' : void 0,
            color: 'currentColor'
        });
        if (!G) return e;
        switch (I) {
            case h.O.WORDLE_LOGO_ANIMATION:
                return (0, r.jsx)(A.Z, {});
            case h.O.GLOWING_ANIMATION:
            case h.O.SIMPLE_BADGE:
            case h.O.NONE:
            default:
                return e;
        }
    }, [Z, I, B, G]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            G &&
                I === h.O.GLOWING_ANIMATION &&
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
                className: o()(D.buttonContainer, k.t4, { [D.appLauncherCircleMask]: I === h.O.GLOWING_ANIMATION }),
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
                                className: o()(D.button, { [D.buttonActive]: O }),
                                onClick: F,
                                'aria-label': L.intl.string(L.t.erHFxM),
                                'aria-expanded': O,
                                'aria-haspopup': 'dialog',
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
                            N
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
                        I === h.O.SIMPLE_BADGE &&
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
});
function G(e) {
    let { showAppLauncherPopup: t, children: n } = e,
        i = (0, s.e7)([Z.Z], () => Z.Z.hasLayers()),
        {
            enabled: l,
            shouldShow: a,
            applicationDetails: c,
            showsTooltip: u
        } = (0, v.Z)({
            obstructedFromView: i,
            disabled: t
        });
    if (!l) return n;
    let p =
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
        ? (0, r.jsx)(d.ua7, {
              text: L.intl.string(L.t.JDj6Xl),
              shouldShow: a,
              forceOpen: a,
              children: () =>
                  (0, r.jsxs)(r.Fragment, {
                      children: [p, n]
                  })
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [p, n]
          });
}
let F = i.memo(function (e) {
    let { channel: t, type: n, animateRef: l, entryPointCommandButtonRef: o } = e,
        a = i.useRef(null),
        c = (0, O.R)({
            channel: t,
            chatInputType: n
        }),
        u = (0, w.Z)({ type: n }),
        d = (0, I.h9)(t.id),
        p = (0, s.e7)([x.Z], () => x.Z.appDMChannelsWithFailedLoads().has(t.id)),
        { visible: h } = (0, T.xL)();
    return c
        ? (0, r.jsxs)('div', {
              className: D.channelAppLauncher,
              children: [
                  (0, r.jsx)(N.Z, {
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
                      ? (0, r.jsx)(j.Z, {
                            positionTargetRef: d && !p && h ? o : a,
                            channel: t
                        })
                      : null
              ]
          })
        : null;
});
