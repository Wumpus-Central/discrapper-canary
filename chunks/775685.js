n.d(t, { Z: () => O });
var i = n(951288),
    r = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(793030),
    s = n(442837),
    c = n(566620),
    u = n(989573),
    d = n(499254),
    p = n(541099),
    h = n(827498),
    f = n(663924),
    m = n(533379),
    g = n(562129),
    b = n(685006),
    C = n(61356),
    y = n(314734),
    _ = n(388032),
    v = n(124886);
let x = r.forwardRef(function (e, t) {
        var n, l;
        let { type: u, animateRef: f } = e,
            m = (0, s.e7)([p.Z], () => p.Z.shouldShowPopup() && p.Z.activeViewType() === u),
            { Component: b, events: C, play: x } = (0, g.Z)("ChannelAppLauncherButton");
        r.useImperativeHandle(
            f,
            () => ({
                animate: () => {
                    C.onMouseEnter();
                },
            }),
            [C],
        );
        let O = r.useCallback(() => {
                m ? d.yT(h.ti.DISMISSED) : (d.__(h._b.TEXT, u), c.ux()), x();
            }, [m, u, x]),
            j = (0, i.jsx)(b, {
                size: "refresh_sm",
                color: "currentColor",
            });
        return (0, i.jsx)("div", {
            className: a()(v.buttonContainer, y.t4),
            ref: t,
            children: (0, i.jsx)(
                o.P3F,
                ((n = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            i.forEach(function (t) {
                                var i;
                                (i = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = i);
                            });
                    }
                    return e;
                })(
                    {
                        tabIndex: 0,
                        className: a()(v.button, { [v.buttonActive]: m }),
                        onClick: O,
                        "aria-label": _.intl.string(_.t.erHFxI),
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
                    },
                    C,
                )),
                (l = l = { children: j }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, i);
                          }
                          return n;
                      })(Object(l)).forEach(function (e) {
                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                      }),
                n),
            ),
        });
    }),
    O = r.memo(function (e) {
        let { channel: t, type: n, animateRef: l, entryPointCommandButtonRef: a } = e,
            o = r.useRef(null),
            c = (0, m.R)({
                channel: t,
                chatInputType: n,
            }),
            d = (0, C.Z)({ type: n }),
            h = (0, u.Z)(t),
            g = (0, s.e7)([p.Z], () => p.Z.appDMChannelsWithFailedLoads().has(t.id)),
            { visible: y } = (0, b.xL)();
        return c
            ? (0, i.jsxs)("div", {
                  className: v.channelAppLauncher,
                  children: [
                      (0, i.jsx)(x, {
                          type: n,
                          ref: o,
                          animateRef: l,
                      }),
                      d
                          ? (0, i.jsx)(f.Z, {
                                positionTargetRef: h && !g && y ? a : o,
                                channel: t,
                            })
                          : null,
                  ],
              })
            : null;
    });
