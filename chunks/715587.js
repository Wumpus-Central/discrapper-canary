r.d(t, {
    A: () => o,
});
var n = r(627968),
    l = r(64700),
    s = r(505312),
    i = r(397927),
    a = r(744086),
    c = r(985018);

function o(e) {
    let { align: t = "left" } = e,
        r = l.useRef(null),
        o = (0, s.w)();
    return (0, n.jsx)(i.YNO, {
        targetElementRef: r,
        position: "top",
        align: t,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(a.Ay, {
                onClose: t,
                onSelect: void 0,
            });
        },
        children: (e) =>
            (0, n.jsx)(
                i.K0,
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (n = n.concat(
                                Object.getOwnPropertySymbols(r).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                }),
                            )),
                            n.forEach(function (t) {
                                var n;
                                (n = r[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: n,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = n);
                            });
                    }
                    return e;
                })(
                    {
                        buttonRef: r,
                        size: "md",
                        variant: "secondary",
                        icon: o.Component,
                        "aria-label": c.intl.string(c.t["+1H47t"]),
                    },
                    e,
                    o.events,
                ),
            ),
    });
}
