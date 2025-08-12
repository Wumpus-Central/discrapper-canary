n.d(t, { Z: () => c });
var r = n(255367),
    l = n(73800),
    i = n(481060),
    o = n(388032),
    a = n(915642);
function c() {
    let e = l.useCallback(() => {
        (0, i.ZDy)(
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
    return (0, r.jsxs)(i.P3F, {
        className: a.addWidgetButton,
        onClick: e,
        children: [
            (0, r.jsx)(i.qJs, {
                size: "sm",
                color: "currentColor",
            }),
            (0, r.jsx)(i.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                children: o.intl.string(o.t.lBG2s7),
            }),
        ],
    });
}
