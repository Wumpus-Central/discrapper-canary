n.d(t, { Z: () => d });
var r = n(54381),
    i = n(473749),
    l = n(755721),
    s = n(481060),
    o = n(812652),
    a = n(388032),
    c = n(962721);
function d(e) {
    let { align: t = "left" } = e,
        n = i.useRef(null);
    return (0, r.jsx)(s.yRy, {
        targetElementRef: n,
        position: "top",
        align: t,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(o.ZP, {
                onClose: t,
                onSelect: void 0,
            });
        },
        children: (e) => {
            var t, i;
            return (0, r.jsx)(
                l.zx,
                ((t = (function (e) {
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
                        size: l.zx.Sizes.ICON,
                        "aria-label": a.intl.string(a.t["+1H47t"]),
                        color: l.zx.Colors.PRIMARY,
                        className: c.streamOptionsButton,
                        buttonRef: n,
                    },
                    e,
                )),
                (i = i =
                    {
                        children: (0, r.jsx)(s.ewm, {
                            className: c.settingsIcon,
                            size: "refresh_sm",
                            color: "currentColor",
                        }),
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(i)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                      }),
                t),
            );
        },
    });
}
