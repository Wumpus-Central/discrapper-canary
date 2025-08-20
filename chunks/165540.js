n.d(t, { Z: () => I });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(704215),
    c = n(755721),
    u = n(566620),
    d = n(989573),
    p = n(499254),
    h = n(541099),
    f = n(827498),
    m = n(663924),
    g = n(533379),
    b = n(562129),
    _ = n(266454),
    y = n(291407),
    C = n(685006),
    x = n(61356),
    v = n(314734),
    O = n(921944),
    j = n(388032),
    E = n(124886);
let S = i.forwardRef(function (e, t) {
        var n, l;
        let { type: d, animateRef: m } = e,
            g = (0, o.e7)([h.Z], () => h.Z.shouldShowPopup() && h.Z.activeViewType() === d),
            { Component: y, events: C, play: x } = (0, b.Z)("ChannelAppLauncherButton");
        i.useImperativeHandle(
            m,
            () => ({
                animate: () => {
                    C.onMouseEnter();
                },
            }),
            [C],
        );
        let S = i.useCallback(() => {
                g
                    ? p.yT(f.ti.DISMISSED)
                    : ((0, _.Q3)(s.z.DESKTOP_APP_LAUNCHER_ONBOARDING, { dismissAction: O.L.TAKE_ACTION }),
                      p.__(f._b.TEXT, d),
                      u.ux()),
                    x();
            }, [g, d, x]),
            I = (0, r.jsx)(y, {
                size: "refresh_sm",
                color: "currentColor",
            });
        return (0, r.jsx)("div", {
            className: a()(E.buttonContainer, v.t4),
            ref: t,
            children: (0, r.jsx)(
                c.zx,
                ((n = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })(
                    {
                        look: c.zx.Looks.BLANK,
                        size: c.zx.Sizes.NONE,
                        tabIndex: 0,
                        className: a()(E.button, { [E.buttonActive]: g }),
                        onClick: S,
                        "aria-label": j.intl.string(j.t.erHFxM),
                        "aria-expanded": g,
                        "aria-haspopup": "dialog",
                        focusProps: {
                            offset: {
                                top: 4,
                                bottom: 4,
                                left: -4,
                                right: -4,
                            },
                        },
                        innerClassName: E.buttonContents,
                    },
                    C,
                )),
                (l = l = { children: I }),
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
                n),
            ),
        });
    }),
    I = i.memo(function (e) {
        let { channel: t, type: n, animateRef: l, entryPointCommandButtonRef: a } = e,
            s = i.useRef(null),
            c = (0, g.R)({
                channel: t,
                chatInputType: n,
            }),
            u = (0, x.Z)({ type: n }),
            p = (0, d.Z)(t),
            f = (0, o.e7)([h.Z], () => h.Z.appDMChannelsWithFailedLoads().has(t.id)),
            { visible: b } = (0, C.xL)();
        return c
            ? (0, r.jsxs)("div", {
                  className: E.channelAppLauncher,
                  children: [
                      (0, r.jsx)(y.Z, {
                          channel: t,
                          animationContainerClassName: E.entrypointAnimation,
                          glowClassName: E.animationGlow,
                          trinketsClassName: E.animationTrinkets,
                          children: (0, r.jsx)(S, {
                              type: n,
                              ref: s,
                              animateRef: l,
                          }),
                      }),
                      u
                          ? (0, r.jsx)(m.Z, {
                                positionTargetRef: p && !f && b ? a : s,
                                channel: t,
                            })
                          : null,
                  ],
              })
            : null;
    });
