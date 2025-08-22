r.d(t, { Z: () => c });
var n = r(951288),
    i = r(647438),
    a = r(481060),
    l = r(388032),
    o = r(684066);
function c() {
    let e = i.useCallback(() => {
        (0, a.ZDy)(
            async () => {
                let { default: e } = await r.e("38576").then(r.bind(r, 925170));
                return (t) =>
                    (0, n.jsx)(
                        e,
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
                        })({}, t),
                    );
            },
            { stackingBehavior: "stack" },
        );
    }, []);
    return (0, n.jsxs)(a.P3F, {
        className: o.addWidgetButton,
        onClick: e,
        children: [
            (0, n.jsx)(a.qJs, {
                size: "sm",
                color: "currentColor",
            }),
            (0, n.jsx)(a.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                children: l.intl.string(l.t.lBG2s7),
            }),
        ],
    });
}
