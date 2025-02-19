n.d(t, { Z: () => w });
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(704215),
    c = n(749280),
    u = n(481060),
    d = n(367907),
    p = n(499254),
    h = n(541099),
    f = n(827498),
    m = n(569211),
    g = n(663924),
    b = n(533379),
    _ = n(404295),
    C = n(540059),
    v = n(605236),
    y = n(819640),
    x = n(291407),
    j = n(685006),
    O = n(61356),
    N = n(981631),
    E = n(314734),
    P = n(921944),
    I = n(388032),
    S = n(387220),
    Z = n(795361);
let T = i.forwardRef(function (e, t) {
    var n, l;
    let { type: m, animateRef: g } = e,
        b = (0, a.e7)([h.Z], () => h.Z.shouldShowPopup() && h.Z.activeViewType() === m),
        { Component: _, events: y, play: x } = (0, c.w)(),
        j = (0, C.Q3)('ChannelAppLauncherButton');
    i.useImperativeHandle(
        g,
        () => ({
            animate: () => {
                y.onMouseEnter();
            }
        }),
        [y]
    );
    let O = i.useCallback(() => {
        (0, d.yw)(N.rMx.APP_LAUNCHER_ENTRYPOINT_BUTTON_CLICKED), b ? p.yT(f.ti.DISMISSED) : ((0, v.EW)(s.z.DESKTOP_APP_LAUNCHER_ONBOARDING, { dismissAction: P.L.TAKE_ACTION }), p.__(f._b.TEXT, m)), x();
    }, [b, m, x]);
    return (0, r.jsx)('div', {
        className: o()(S.buttonContainer, E.t4),
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
                    className: o()(S.button, { [S.buttonActive]: b }),
                    onClick: O,
                    'aria-label': I.NW.string(I.t.erHFxM),
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
                y
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
        i = (0, a.e7)([y.Z], () => y.Z.hasLayers()),
        {
            enabled: l,
            shouldShow: s,
            applicationDetails: c,
            showsTooltip: d
        } = (0, m.Z)({
            obstructedFromView: i,
            disabled: t
        });
    if (!l) return (0, r.jsx)(r.Fragment, { children: n });
    let p =
        s && (null == c ? void 0 : c.iconURL) != null
            ? (0, r.jsxs)('div', {
                  className: S.channelAppLauncherButtonPopoutIconContainer,
                  children: [
                      (0, r.jsx)('img', {
                          className: o()(S.buttonContainer, S.button, S.channelAppLauncherButtonPopoutIcon),
                          alt: I.NW.string(I.t.X4IxWF),
                          src: null == c ? void 0 : c.iconURL,
                          'aria-hidden': !0,
                          draggable: !1
                      }),
                      (0, r.jsx)('div', {
                          className: S.channelAppLauncherButtonPopoutIconShimmerContainer,
                          children: (0, r.jsx)('img', {
                              className: o()(S.channelAppLauncherButtonPopoutIconShimmer),
                              alt: I.NW.string(I.t.X4IxWF),
                              src: Z,
                              'aria-hidden': !0,
                              draggable: !1
                          })
                      })
                  ]
              })
            : null;
    return d
        ? (0, r.jsx)(u.ua7, {
              text: I.NW.string(I.t.JDj6Xl),
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
        c = (0, b.R)({
            channel: t,
            chatInputType: n,
            location: 'chat_input'
        }),
        u = (0, O.Z)({ type: n }),
        d = (0, _.h9)(t.id),
        p = (0, a.e7)([h.Z], () => h.Z.appDMChannelsWithFailedLoads().has(t.id)),
        { visible: f } = (0, j.xL)();
    return c
        ? (0, r.jsxs)('div', {
              className: S.channelAppLauncher,
              children: [
                  (0, r.jsx)(x.Z, {
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
                      ? (0, r.jsx)(g.Z, {
                            positionTargetRef: d && !p && f ? o : s,
                            channel: t
                        })
                      : null
              ]
          })
        : null;
});
