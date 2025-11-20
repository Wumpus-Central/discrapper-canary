n.d(t, { Z: () => c });
var r = n(54381),
    i = n(473749),
    l = n(789639),
    s = n(481060),
    o = n(812652),
    a = n(388032);
function c(e) {
    let { align: t = "left" } = e,
        n = i.useRef(null),
        c = (0, l.i)();
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
        children: (e) =>
            (0, r.jsx)(
                s.hU,
                (function (e) {
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
                        buttonRef: n,
                        size: "md",
                        variant: "secondary",
                        icon: c.Component,
                        "aria-label": a.intl.string(a.t["+1H47t"]),
                    },
                    e,
                    c.events,
                ),
            ),
    });
}
