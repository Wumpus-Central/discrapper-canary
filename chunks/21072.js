n.d(t, { Z: () => a });
var r = n(54381),
    i = n(473749),
    s = n(481060),
    l = n(397938),
    o = n(388032),
    c = n(250005);
function a(e) {
    let { mainCTADisabled: t, mainCTAOnClick: n, align: a, ctaText: d, hideOptionsButton: u } = e,
        f = i.useRef(null);
    return (0, r.jsxs)("div", {
        className: c.root,
        children: [
            (0, r.jsx)(s.Button, {
                variant: "primary",
                size: "md",
                text: d,
                onClick: n,
                disabled: t,
            }),
            !u &&
                (0, r.jsx)(s.yRy, {
                    targetElementRef: f,
                    position: "top",
                    align: a,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, r.jsx)(l.ZP, {
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
                                    buttonRef: f,
                                    size: "md",
                                    variant: "secondary",
                                    icon: s.Huf,
                                    "aria-label": o.intl.string(o.t["+1H47t"]),
                                },
                                e,
                            ),
                        ),
                }),
        ],
    });
}
