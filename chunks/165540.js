n.d(t, { Z: () => S });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(704215),
    c = n(481060),
    u = n(566620),
    d = n(499254),
    p = n(541099),
    h = n(827498),
    f = n(663924),
    m = n(533379),
    g = n(562129),
    b = n(307508),
    _ = n(605236),
    y = n(291407),
    C = n(685006),
    x = n(61356),
    v = n(314734),
    j = n(921944),
    O = n(388032),
    E = n(560163);
let I = i.forwardRef(function (e, t) {
        var n, l;
        let { type: f, animateRef: m } = e,
            b = (0, a.e7)([p.Z], () => p.Z.shouldShowPopup() && p.Z.activeViewType() === f),
            { Component: y, events: C, play: x } = (0, g.Z)('ChannelAppLauncherButton');
        i.useImperativeHandle(
            m,
            () => ({
                animate: () => {
                    C.onMouseEnter();
                }
            }),
            [C]
        );
        let I = i.useCallback(() => {
                b ? d.yT(h.ti.DISMISSED) : ((0, _.EW)(s.z.DESKTOP_APP_LAUNCHER_ONBOARDING, { dismissAction: j.L.TAKE_ACTION }), d.__(h._b.TEXT, f), u.ux()), x();
            }, [b, f, x]),
            S = (0, r.jsx)(y, {
                size: 'refresh_sm',
                color: 'currentColor'
            });
        return (0, r.jsx)('div', {
            className: o()(E.buttonContainer, v.t4),
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
                        className: o()(E.button, { [E.buttonActive]: b }),
                        onClick: I,
                        'aria-label': O.intl.string(O.t.erHFxM),
                        'aria-expanded': b,
                        'aria-haspopup': 'dialog',
                        focusProps: {
                            offset: {
                                top: 4,
                                bottom: 4,
                                left: -4,
                                right: -4
                            }
                        },
                        innerClassName: E.buttonContents
                    },
                    C
                )),
                (l = l = { children: S }),
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
    }),
    S = i.memo(function (e) {
        let { channel: t, type: n, animateRef: l, entryPointCommandButtonRef: o } = e,
            s = i.useRef(null),
            c = (0, m.R)({
                channel: t,
                chatInputType: n
            }),
            u = (0, x.Z)({ type: n }),
            d = (0, b.Q)(t.id),
            h = (0, a.e7)([p.Z], () => p.Z.appDMChannelsWithFailedLoads().has(t.id)),
            { visible: g } = (0, C.xL)();
        return c
            ? (0, r.jsxs)('div', {
                  className: E.channelAppLauncher,
                  children: [
                      (0, r.jsx)(y.Z, {
                          channel: t,
                          animationContainerClassName: E.entrypointAnimation,
                          glowClassName: E.animationGlow,
                          trinketsClassName: E.animationTrinkets,
                          children: (0, r.jsx)(I, {
                              type: n,
                              ref: s,
                              animateRef: l
                          })
                      }),
                      u
                          ? (0, r.jsx)(f.Z, {
                                positionTargetRef: d && !h && g ? o : s,
                                channel: t
                            })
                          : null
                  ]
              })
            : null;
    });
