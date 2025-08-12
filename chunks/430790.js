n.d(t, { Z: () => d });
var r = n(255367),
    l = n(73800),
    i = n(120356),
    o = n.n(i),
    a = n(481060),
    c = n(388032),
    s = n(915642);
function d(e) {
    let { disabled: t } = e,
        i = l.useCallback(() => {
            (0, a.ZDy)(
                async () => {
                    let { default: e } = await n.e("38576").then(n.bind(n, 925170));
                    return (t) =>
                        (0, r.jsx)(
                            e,
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
                            })({}, t),
                        );
                },
                { stackingBehavior: "stack" },
            );
        }, []);
    return (0, r.jsxs)(a.P3F, {
        className: o()(s.addWidgetButton, t && s.disabled),
        onClick: t ? void 0 : i,
        "aria-disabled": t,
        children: [
            (0, r.jsx)(a.qJs, {
                size: "sm",
                color: "currentColor",
            }),
            (0, r.jsx)(a.Text, {
                variant: "text-sm/medium",
                color: t ? "text-muted" : "text-default",
                children: c.intl.string(c.t.lBG2s7),
            }),
        ],
    });
}
