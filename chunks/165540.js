n.d(t, { Z: () => j });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(755721),
    c = n(566620),
    u = n(989573),
    d = n(499254),
    p = n(541099),
    h = n(827498),
    f = n(663924),
    m = n(533379),
    g = n(562129),
    b = n(685006),
    y = n(61356),
    _ = n(314734),
    C = n(388032),
    v = n(124886);
let x = i.forwardRef(function (e, t) {
        var n, l;
        let { type: u, animateRef: f } = e,
            m = (0, o.e7)([p.Z], () => p.Z.shouldShowPopup() && p.Z.activeViewType() === u),
            { Component: b, events: y, play: x } = (0, g.Z)("ChannelAppLauncherButton");
        i.useImperativeHandle(
            f,
            () => ({
                animate: () => {
                    y.onMouseEnter();
                },
            }),
            [y],
        );
        let j = i.useCallback(() => {
                m ? d.yT(h.ti.DISMISSED) : (d.__(h._b.TEXT, u), c.ux()), x();
            }, [m, u, x]),
            O = (0, r.jsx)(b, {
                size: "refresh_sm",
                color: "currentColor",
            });
        return (0, r.jsx)("div", {
            className: a()(v.buttonContainer, _.t4),
            ref: t,
            children: (0, r.jsx)(
                s.zx,
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
                        look: s.zx.Looks.BLANK,
                        size: s.zx.Sizes.NONE,
                        tabIndex: 0,
                        className: a()(v.button, { [v.buttonActive]: m }),
                        onClick: j,
                        "aria-label": C.intl.string(C.t.erHFxM),
                        "aria-expanded": m,
                        "aria-haspopup": "dialog",
                        focusProps: {
                            offset: {
                                top: 4,
                                bottom: 4,
                                left: -4,
                                right: -4,
                            },
                        },
                        innerClassName: v.buttonContents,
                    },
                    y,
                )),
                (l = l = { children: O }),
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
    j = i.memo(function (e) {
        let { channel: t, type: n, animateRef: l, entryPointCommandButtonRef: a } = e,
            s = i.useRef(null),
            c = (0, m.R)({
                channel: t,
                chatInputType: n,
            }),
            d = (0, y.Z)({ type: n }),
            h = (0, u.Z)(t),
            g = (0, o.e7)([p.Z], () => p.Z.appDMChannelsWithFailedLoads().has(t.id)),
            { visible: _ } = (0, b.xL)();
        return c
            ? (0, r.jsxs)("div", {
                  className: v.channelAppLauncher,
                  children: [
                      (0, r.jsx)(x, {
                          type: n,
                          ref: s,
                          animateRef: l,
                      }),
                      d
                          ? (0, r.jsx)(f.Z, {
                                positionTargetRef: h && !g && _ ? a : s,
                                channel: t,
                            })
                          : null,
                  ],
              })
            : null;
    });
