n.d(t, { Z: () => S });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(704215),
    c = n(481060),
    u = n(566620),
    d = n(499254),
    p = n(541099),
    h = n(827498),
    f = n(663924),
    m = n(533379),
    g = n(562129),
    b = n(404295),
    _ = n(540059),
    y = n(605236),
    C = n(291407),
    x = n(685006),
    v = n(61356),
    j = n(314734),
    O = n(921944),
    E = n(388032),
    I = n(560163);
let P = i.forwardRef(function (e, t) {
        var n, l;
        let { type: f, animateRef: m } = e,
            b = (0, o.e7)([p.Z], () => p.Z.shouldShowPopup() && p.Z.activeViewType() === f),
            { Component: C, events: x, play: v } = (0, g.Z)('ChannelAppLauncherButton'),
            P = (0, _.Q3)('ChannelAppLauncherButton');
        i.useImperativeHandle(
            m,
            () => ({
                animate: () => {
                    x.onMouseEnter();
                }
            }),
            [x]
        );
        let S = i.useCallback(() => {
                b ? d.yT(h.ti.DISMISSED) : ((0, y.EW)(s.z.DESKTOP_APP_LAUNCHER_ONBOARDING, { dismissAction: O.L.TAKE_ACTION }), d.__(h._b.TEXT, f), u.ux()), v();
            }, [b, f, v]),
            Z = (0, r.jsx)(C, {
                size: P ? 'refresh_sm' : void 0,
                color: 'currentColor'
            });
        return (0, r.jsx)('div', {
            className: a()(I.buttonContainer, j.t4),
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
                        className: a()(I.button, { [I.buttonActive]: b }),
                        onClick: S,
                        'aria-label': E.intl.string(E.t.erHFxM),
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
                        innerClassName: I.buttonContents
                    },
                    x
                )),
                (l = l = { children: Z }),
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
        let { channel: t, type: n, animateRef: l, entryPointCommandButtonRef: a } = e,
            s = i.useRef(null),
            c = (0, m.R)({
                channel: t,
                chatInputType: n
            }),
            u = (0, v.Z)({ type: n }),
            d = (0, b.h9)(t.id),
            h = (0, o.e7)([p.Z], () => p.Z.appDMChannelsWithFailedLoads().has(t.id)),
            { visible: g } = (0, x.xL)();
        return c
            ? (0, r.jsxs)('div', {
                  className: I.channelAppLauncher,
                  children: [
                      (0, r.jsx)(C.Z, {
                          channel: t,
                          animationContainerClassName: I.entrypointAnimation,
                          glowClassName: I.animationGlow,
                          trinketsClassName: I.animationTrinkets,
                          children: (0, r.jsx)(P, {
                              type: n,
                              ref: s,
                              animateRef: l
                          })
                      }),
                      u
                          ? (0, r.jsx)(f.Z, {
                                positionTargetRef: d && !h && g ? a : s,
                                channel: t
                            })
                          : null
                  ]
              })
            : null;
    });
