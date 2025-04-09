n.d(t, { Z: () => U });
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(704215),
    c = n(124293),
    u = n(966006),
    d = n(481060),
    p = n(911969),
    h = n(72879),
    f = n(566620),
    m = n(588580),
    g = n(119315),
    b = n(367907),
    _ = n(499254),
    y = n(541099),
    C = n(827498),
    x = n(569211),
    v = n(663924),
    j = n(533379),
    O = n(562129),
    E = n(404295),
    N = n(540059),
    I = n(605236),
    P = n(819640),
    S = n(291407),
    Z = n(685006),
    T = n(61356),
    A = n(981631),
    w = n(314734),
    R = n(921944),
    k = n(388032),
    M = n(560163),
    L = n(795361);
let D = i.forwardRef(function (e, t) {
    var n, l;
    let { type: x, animateRef: v } = e,
        j = (0, a.e7)([y.Z], () => y.Z.shouldShowPopup() && y.Z.activeViewType() === x),
        { badgeTreatment: E } = h.Y.useExperiment({ location: 'ChannelAppLauncherButton' }, { autoTrackExposure: !0 }),
        { Component: P, events: S, play: Z } = (0, O.Z)('ChannelAppLauncherButton'),
        { Component: T, play: L } = (0, c.B)(),
        { Component: D, play: W } = (0, u.P)(),
        U = (0, N.Q3)('ChannelAppLauncherButton');
    i.useImperativeHandle(
        v,
        () => ({
            animate: () => {
                S.onMouseEnter();
            }
        }),
        [S]
    );
    let B = i.useCallback(() => {
        (0, b.yw)(A.rMx.APP_LAUNCHER_ENTRYPOINT_BUTTON_CLICKED), j ? _.yT(C.ti.DISMISSED) : ((0, I.EW)(s.z.DESKTOP_APP_LAUNCHER_ONBOARDING, { dismissAction: R.L.TAKE_ACTION }), _.__(C._b.TEXT, x), f.ux()), Z();
    }, [j, x, Z]);
    i.useEffect(() => {
        let e = setTimeout(() => {
            L(), W();
        }, 3000);
        return () => clearTimeout(e);
    }, [L, W]);
    let H = (0, m.a)(p.eR.TEXT_LAUNCHER),
        G = i.useMemo(() => {
            let e = (0, r.jsx)(P, {
                size: U ? 'refresh_sm' : void 0,
                color: 'currentColor'
            });
            if (!H) return e;
            switch (E) {
                case h.O.WORDLE_LOGO_ANIMATION:
                    return (0, r.jsx)('div', {
                        children: (0, r.jsx)(D, {
                            size: U ? 'refresh_sm' : void 0,
                            useLottieDefaultColors: !0
                        })
                    });
                case h.O.GLOWING_ANIMATION:
                case h.O.SIMPLE_BADGE:
                case h.O.NONE:
                default:
                    return e;
            }
        }, [P, D, E, U, H]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            H &&
                E === h.O.GLOWING_ANIMATION &&
                (0, r.jsx)('div', {
                    className: M.appLauncherGlow,
                    children: (0, r.jsx)(T, {
                        size: 'custom',
                        width: 48,
                        height: 48,
                        useLottieDefaultColors: !0
                    })
                }),
            (0, r.jsxs)('div', {
                className: o()(M.buttonContainer, w.t4, { [M.appLauncherCircleMask]: E === h.O.GLOWING_ANIMATION }),
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
                                className: o()(M.button, { [M.buttonActive]: j }),
                                onClick: B,
                                'aria-label': k.NW.string(k.t.erHFxM),
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
                            S
                        )),
                        (l = l = { children: G }),
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
                        E === h.O.SIMPLE_BADGE &&
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
function W(e) {
    let { showAppLauncherPopup: t, children: n } = e,
        i = (0, a.e7)([P.Z], () => P.Z.hasLayers()),
        {
            enabled: l,
            shouldShow: s,
            applicationDetails: c,
            showsTooltip: u
        } = (0, x.Z)({
            obstructedFromView: i,
            disabled: t
        });
    if (!l) return n;
    let p =
        s && (null == c ? void 0 : c.iconURL) != null
            ? (0, r.jsxs)('div', {
                  className: M.channelAppLauncherButtonPopoutIconContainer,
                  children: [
                      (0, r.jsx)('img', {
                          className: o()(M.buttonContainer, M.button, M.channelAppLauncherButtonPopoutIcon),
                          alt: k.NW.string(k.t.X4IxWF),
                          src: null == c ? void 0 : c.iconURL,
                          'aria-hidden': !0,
                          draggable: !1
                      }),
                      (0, r.jsx)('div', {
                          className: M.channelAppLauncherButtonPopoutIconShimmerContainer,
                          children: (0, r.jsx)('img', {
                              className: M.channelAppLauncherButtonPopoutIconShimmer,
                              alt: k.NW.string(k.t.X4IxWF),
                              src: L,
                              'aria-hidden': !0,
                              draggable: !1
                          })
                      })
                  ]
              })
            : null;
    return u
        ? (0, r.jsx)(d.ua7, {
              text: k.NW.string(k.t.JDj6Xl),
              shouldShow: s,
              forceOpen: s,
              children: () =>
                  (0, r.jsxs)(r.Fragment, {
                      children: [p, n]
                  })
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [p, n]
          });
}
let U = i.memo(function (e) {
    let { channel: t, type: n, animateRef: l, entryPointCommandButtonRef: o } = e,
        s = i.useRef(null),
        c = (0, j.R)({
            channel: t,
            chatInputType: n
        }),
        u = (0, T.Z)({ type: n }),
        d = (0, E.h9)(t.id),
        p = (0, a.e7)([y.Z], () => y.Z.appDMChannelsWithFailedLoads().has(t.id)),
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
                      children: (0, r.jsx)(W, {
                          showAppLauncherPopup: u,
                          children: (0, r.jsx)(D, {
                              type: n,
                              ref: s,
                              animateRef: l
                          })
                      })
                  }),
                  u
                      ? (0, r.jsx)(v.Z, {
                            positionTargetRef: d && !p && h ? o : s,
                            channel: t
                        })
                      : null
              ]
          })
        : null;
});
