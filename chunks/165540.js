n.d(t, { Z: () => w });
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(704215),
    c = n(481060),
    u = n(367907),
    d = n(499254),
    p = n(541099),
    h = n(827498),
    f = n(569211),
    m = n(663924),
    g = n(533379),
    b = n(562129),
    _ = n(404295),
    C = n(540059),
    y = n(605236),
    x = n(819640),
    v = n(291407),
    j = n(685006),
    O = n(61356),
    E = n(981631),
    N = n(314734),
    I = n(921944),
    P = n(388032),
    S = n(560163),
    Z = n(795361);
let T = i.forwardRef(function (e, t) {
    var n, l;
    let { type: f, animateRef: m } = e,
        g = (0, a.e7)([p.Z], () => p.Z.shouldShowPopup() && p.Z.activeViewType() === f),
        { Component: _, events: x, play: v } = (0, b.Z)('ChannelAppLauncherButton'),
        j = (0, C.Q3)('ChannelAppLauncherButton');
    i.useImperativeHandle(
        m,
        () => ({
            animate: () => {
                x.onMouseEnter();
            }
        }),
        [x]
    );
    let O = i.useCallback(() => {
        (0, u.yw)(E.rMx.APP_LAUNCHER_ENTRYPOINT_BUTTON_CLICKED), g ? d.yT(h.ti.DISMISSED) : ((0, y.EW)(s.z.DESKTOP_APP_LAUNCHER_ONBOARDING, { dismissAction: I.L.TAKE_ACTION }), d.__(h._b.TEXT, f)), v();
    }, [g, f, v]);
    return (0, r.jsx)('div', {
        className: o()(S.buttonContainer, N.t4),
        ref: t,
        children: (0, r.jsx)(
            c.zxk,
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
                    look: c.zxk.Looks.BLANK,
                    size: c.zxk.Sizes.NONE,
                    tabIndex: 0,
                    className: o()(S.button, { [S.buttonActive]: g }),
                    onClick: O,
                    'aria-label': P.NW.string(P.t.erHFxM),
                    focusProps: {
                        offset: {
                            top: 4,
                            bottom: 4,
                            left: -4,
                            right: -4
                        }
                    },
                    innerClassName: S.buttonContents
                },
                x
            )),
            (l = l =
                {
                    children: (0, r.jsx)(_, {
                        size: j ? 'refresh_sm' : void 0,
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
function A(e) {
    let { showAppLauncherPopup: t, children: n } = e,
        i = (0, a.e7)([x.Z], () => x.Z.hasLayers()),
        {
            enabled: l,
            shouldShow: s,
            applicationDetails: u,
            showsTooltip: d
        } = (0, f.Z)({
            obstructedFromView: i,
            disabled: t
        });
    if (!l) return n;
    let p =
        s && (null == u ? void 0 : u.iconURL) != null
            ? (0, r.jsxs)('div', {
                  className: S.channelAppLauncherButtonPopoutIconContainer,
                  children: [
                      (0, r.jsx)('img', {
                          className: o()(S.buttonContainer, S.button, S.channelAppLauncherButtonPopoutIcon),
                          alt: P.NW.string(P.t.X4IxWF),
                          src: null == u ? void 0 : u.iconURL,
                          'aria-hidden': !0,
                          draggable: !1
                      }),
                      (0, r.jsx)('div', {
                          className: S.channelAppLauncherButtonPopoutIconShimmerContainer,
                          children: (0, r.jsx)('img', {
                              className: S.channelAppLauncherButtonPopoutIconShimmer,
                              alt: P.NW.string(P.t.X4IxWF),
                              src: Z,
                              'aria-hidden': !0,
                              draggable: !1
                          })
                      })
                  ]
              })
            : null;
    return d
        ? (0, r.jsx)(c.ua7, {
              text: P.NW.string(P.t.JDj6Xl),
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
let w = i.memo(function (e) {
    let { channel: t, type: n, animateRef: l, entryPointCommandButtonRef: o } = e,
        s = i.useRef(null),
        c = (0, g.R)({
            channel: t,
            chatInputType: n
        }),
        u = (0, O.Z)({ type: n }),
        d = (0, _.h9)(t.id),
        h = (0, a.e7)([p.Z], () => p.Z.appDMChannelsWithFailedLoads().has(t.id)),
        { visible: f } = (0, j.xL)();
    return c
        ? (0, r.jsxs)('div', {
              className: S.channelAppLauncher,
              children: [
                  (0, r.jsx)(v.Z, {
                      channel: t,
                      animationContainerClassName: S.entrypointAnimation,
                      glowClassName: S.animationGlow,
                      trinketsClassName: S.animationTrinkets,
                      children: (0, r.jsx)(A, {
                          showAppLauncherPopup: u,
                          children: (0, r.jsx)(T, {
                              type: n,
                              ref: s,
                              animateRef: l
                          })
                      })
                  }),
                  u
                      ? (0, r.jsx)(m.Z, {
                            positionTargetRef: d && !h && f ? o : s,
                            channel: t
                        })
                      : null
              ]
          })
        : null;
});
