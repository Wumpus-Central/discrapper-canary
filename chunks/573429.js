n.d(t, { Z: () => c });
var r = n(54381),
    i = n(473749),
    l = n(481060),
    s = n(812652),
    o = n(388032),
    a = n(780376);
function c(e) {
    let { mainCTADisabled: t, mainCTAOnClick: n, align: c, ctaText: d, hideOptionsButton: u } = e,
        f = i.useRef(null);
    return (0, r.jsxs)("div", {
        className: a.root,
        children: [
            (0, r.jsx)(l.Button, {
                variant: "primary",
                size: "md",
                text: d,
                onClick: n,
                disabled: t,
            }),
            !u &&
                (0, r.jsx)(l.yRy, {
                    targetElementRef: f,
                    position: "top",
                    align: c,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, r.jsx)(s.ZP, {
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
                                    buttonRef: f,
                                    size: "md",
                                    variant: "secondary",
                                    icon: l.Huf,
                                    "aria-label": o.intl.string(o.t["+1H47t"]),
                                },
                                e,
                            ),
                        ),
                }),
        ],
    });
}
