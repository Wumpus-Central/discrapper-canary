t.d(n, { Z: () => i });
var a = t(54381),
    r = t(481060);
function i(e) {
    return (0, r.ZDy)(async () => {
        let { default: n } = await t.e("6954").then(t.bind(t, 261149));
        return (t) =>
            (0, a.jsx)(
                n,
                (function (e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            a = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (a = a.concat(
                                Object.getOwnPropertySymbols(t).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                }),
                            )),
                            a.forEach(function (n) {
                                var a;
                                (a = t[n]),
                                    n in e
                                        ? Object.defineProperty(e, n, {
                                              value: a,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[n] = a);
                            });
                    }
                    return e;
                })({}, t, e),
            );
    });
}
