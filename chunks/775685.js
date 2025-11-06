n.d(t, { Z: () => v });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(793030),
    s = n(442837),
    c = n(566620),
    u = n(499254),
    d = n(541099),
    p = n(827498),
    f = n(663924),
    h = n(533379),
    m = n(562129),
    g = n(61356),
    b = n(314734),
    _ = n(388032),
    y = n(124886);
let C = i.forwardRef(function (e, t) {
        var n, l;
        let { type: f, animateRef: h } = e,
            g = (0, s.e7)([d.Z], () => d.Z.shouldShowPopup() && d.Z.activeViewType() === f),
            { Component: C, events: v, play: O } = (0, m.Z)("ChannelAppLauncherButton");
        i.useImperativeHandle(
            h,
            () => ({
                animate: () => {
                    v.onMouseEnter();
                },
            }),
            [v],
        );
        let x = i.useCallback(() => {
                g ? u.y(p.ti.DISMISSED) : (u._(p._b.TEXT, f), c.ux()), O();
            }, [g, f, O]),
            E = (0, r.jsx)(C, {
                size: "refresh_sm",
                color: "currentColor",
            });
        return (0, r.jsx)("div", {
            className: a()(y.buttonContainer, b.t4),
            ref: t,
            children: (0, r.jsx)(
                o.P3F,
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
                        tabIndex: 0,
                        className: a()(y.button, { [y.buttonActive]: g }),
                        onClick: x,
                        "aria-label": _.intl.string(_.t.erHFxI),
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
                    },
                    v,
                )),
                (l = l = { children: E }),
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
    v = i.memo(function (e) {
        let { channel: t, type: n, animateRef: l } = e,
            a = i.useRef(null),
            o = (0, h.R)({
                channel: t,
                chatInputType: n,
            }),
            s = (0, g.Z)({ type: n });
        return o
            ? (0, r.jsxs)("div", {
                  className: y.channelAppLauncher,
                  children: [
                      (0, r.jsx)(C, {
                          type: n,
                          ref: a,
                          animateRef: l,
                      }),
                      s
                          ? (0, r.jsx)(f.Z, {
                                positionTargetRef: a,
                                channel: t,
                            })
                          : null,
                  ],
              })
            : null;
    });
