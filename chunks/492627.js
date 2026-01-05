n.d(t, { Z: () => a });
var r = n(54381),
    i = n(473749),
    s = n(789639),
    l = n(481060),
    o = n(397938),
    c = n(388032);
function a(e) {
    let { align: t = "left" } = e,
        n = i.useRef(null),
        a = (0, s.i)();
    return (0, r.jsx)(l.yRy, {
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
                l.hU,
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
                        icon: a.Component,
                        "aria-label": c.intl.string(c.t["+1H47t"]),
                    },
                    e,
                    a.events,
                ),
            ),
    });
}
