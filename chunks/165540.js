n.d(t, { Z: () => R });
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(704215),
    c = n(749280),
    u = n(481060),
    d = n(456100),
    p = n(367907),
    h = n(499254),
    f = n(541099),
    m = n(827498),
    g = n(569211),
    b = n(663924),
    _ = n(533379),
    C = n(404295),
    y = n(540059),
    x = n(605236),
    v = n(819640),
    j = n(291407),
    O = n(685006),
    E = n(61356),
    N = n(981631),
    I = n(314734),
    P = n(921944),
    S = n(388032),
    Z = n(560163),
    T = n(795361);
let A = i.forwardRef(function (e, t) {
    var n, l;
    let { type: g, animateRef: b } = e,
        _ = (0, a.e7)([f.Z], () => f.Z.shouldShowPopup() && f.Z.activeViewType() === g),
        { enabled: C } = d.c.useExperiment({ location: 'ChannelAppLauncherButton' }, { autoTrackExposure: !0 }),
        { Component: v, events: j, play: O } = (0, c.w)(),
        E = (0, y.Q3)('ChannelAppLauncherButton');
    i.useImperativeHandle(
        b,
        () => ({
            animate: () => {
                j.onMouseEnter();
            }
        }),
        [j]
    );
    let T = i.useCallback(() => {
        (0, p.yw)(N.rMx.APP_LAUNCHER_ENTRYPOINT_BUTTON_CLICKED), _ ? h.yT(m.ti.DISMISSED) : ((0, x.EW)(s.z.DESKTOP_APP_LAUNCHER_ONBOARDING, { dismissAction: P.L.TAKE_ACTION }), h.__(m._b.TEXT, g)), O();
    }, [_, g, O]);
    return (0, r.jsx)('div', {
        className: o()(Z.buttonContainer, I.t4),
        ref: t,
        children: (0, r.jsx)(
            u.zxk,
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
                    look: u.zxk.Looks.BLANK,
                    size: u.zxk.Sizes.NONE,
                    tabIndex: 0,
                    className: o()(Z.button, { [Z.buttonActive]: _ }),
                    onClick: T,
                    'aria-label': S.NW.string(S.t.erHFxM),
                    focusProps: {
                        offset: {
                            top: 4,
                            bottom: 4,
                            left: -4,
                            right: -4
                        }
                    },
                    innerClassName: Z.buttonContents
                },
                j
            )),
            (l = l =
                {
                    children: C
                        ? (0, r.jsx)(u.iWm, {
                              size: E ? 'refresh_sm' : void 0,
                              color: 'currentColor'
                          })
                        : (0, r.jsx)(v, {
                              size: E ? 'refresh_sm' : void 0,
                              color: 'currentColor'
                          })
                }),
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
        )
    });
});
function w(e) {
    let { showAppLauncherPopup: t, children: n } = e,
        i = (0, a.e7)([v.Z], () => v.Z.hasLayers()),
        {
            enabled: l,
            shouldShow: s,
            applicationDetails: c,
            showsTooltip: d
        } = (0, g.Z)({
            obstructedFromView: i,
            disabled: t
        });
    if (!l) return n;
    let p =
        s && (null == c ? void 0 : c.iconURL) != null
            ? (0, r.jsxs)('div', {
                  className: Z.channelAppLauncherButtonPopoutIconContainer,
                  children: [
                      (0, r.jsx)('img', {
                          className: o()(Z.buttonContainer, Z.button, Z.channelAppLauncherButtonPopoutIcon),
                          alt: S.NW.string(S.t.X4IxWF),
                          src: null == c ? void 0 : c.iconURL,
                          'aria-hidden': !0,
                          draggable: !1
                      }),
                      (0, r.jsx)('div', {
                          className: Z.channelAppLauncherButtonPopoutIconShimmerContainer,
                          children: (0, r.jsx)('img', {
                              className: Z.channelAppLauncherButtonPopoutIconShimmer,
                              alt: S.NW.string(S.t.X4IxWF),
                              src: T,
                              'aria-hidden': !0,
                              draggable: !1
                          })
                      })
                  ]
              })
            : null;
    return d
        ? (0, r.jsx)(u.ua7, {
              text: S.NW.string(S.t.JDj6Xl),
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
let R = i.memo(function (e) {
    let { channel: t, type: n, animateRef: l, entryPointCommandButtonRef: o } = e,
        s = i.useRef(null),
        c = (0, _.R)({
            channel: t,
            chatInputType: n
        }),
        u = (0, E.Z)({ type: n }),
        d = (0, C.h9)(t.id),
        p = (0, a.e7)([f.Z], () => f.Z.appDMChannelsWithFailedLoads().has(t.id)),
        { visible: h } = (0, O.xL)();
    return c
        ? (0, r.jsxs)('div', {
              className: Z.channelAppLauncher,
              children: [
                  (0, r.jsx)(j.Z, {
                      channel: t,
                      animationContainerClassName: Z.entrypointAnimation,
                      glowClassName: Z.animationGlow,
                      trinketsClassName: Z.animationTrinkets,
                      children: (0, r.jsx)(w, {
                          showAppLauncherPopup: u,
                          children: (0, r.jsx)(A, {
                              type: n,
                              ref: s,
                              animateRef: l
                          })
                      })
                  }),
                  u
                      ? (0, r.jsx)(b.Z, {
                            positionTargetRef: d && !p && h ? o : s,
                            channel: t
                        })
                      : null
              ]
          })
        : null;
});
