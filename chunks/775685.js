n.d(t, { Z: () => x });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(793030),
    s = n(442837),
    c = n(566620),
    u = n(989573),
    d = n(499254),
    p = n(541099),
    f = n(827498),
    h = n(663924),
    m = n(533379),
    g = n(562129),
    b = n(685006),
    _ = n(61356),
    y = n(314734),
    C = n(388032),
    v = n(124886);
let O = i.forwardRef(function (e, t) {
        var n, l;
        let { type: u, animateRef: h } = e,
            m = (0, s.e7)([p.Z], () => p.Z.shouldShowPopup() && p.Z.activeViewType() === u),
            { Component: b, events: _, play: O } = (0, g.Z)("ChannelAppLauncherButton");
        i.useImperativeHandle(
            h,
            () => ({
                animate: () => {
                    _.onMouseEnter();
                },
            }),
            [_],
        );
        let x = i.useCallback(() => {
                m ? d.yT(f.ti.DISMISSED) : (d.__(f._b.TEXT, u), c.ux()), O();
            }, [m, u, O]),
            E = (0, r.jsx)(b, {
                size: "refresh_sm",
                color: "currentColor",
            });
        return (0, r.jsx)("div", {
            className: a()(v.buttonContainer, y.t4),
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
                        className: a()(v.button, { [v.buttonActive]: m }),
                        onClick: x,
                        "aria-label": C.intl.string(C.t.erHFxI),
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
                    _,
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
    x = i.memo(function (e) {
        let { channel: t, type: n, animateRef: l, entryPointCommandButtonRef: a } = e,
            o = i.useRef(null),
            c = (0, m.R)({
                channel: t,
                chatInputType: n,
            }),
            d = (0, _.Z)({ type: n }),
            f = (0, u.Z)(t),
            g = (0, s.e7)([p.Z], () => p.Z.appDMChannelsWithFailedLoads().has(t.id)),
            { visible: y } = (0, b.xL)();
        return c
            ? (0, r.jsxs)("div", {
                  className: v.channelAppLauncher,
                  children: [
                      (0, r.jsx)(O, {
                          type: n,
                          ref: o,
                          animateRef: l,
                      }),
                      d
                          ? (0, r.jsx)(h.Z, {
                                positionTargetRef: f && !g && y ? a : o,
                                channel: t,
                            })
                          : null,
                  ],
              })
            : null;
    });
