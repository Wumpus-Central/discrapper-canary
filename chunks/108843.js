t.d(n, { Z: () => l });
var r = t(200651);
t(192379);
var c = t(906732);
function l(e, n) {
    return function (t) {
        let { analyticsLocations: l } = (0, c.ZP)(n);
        return (0, r.jsx)(c.Gt, {
            value: l,
            children: (0, r.jsx)(
                e,
                (function (e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(t).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                })
                            )),
                            r.forEach(function (n) {
                                var r;
                                (r = t[n]),
                                    n in e
                                        ? Object.defineProperty(e, n, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[n] = r);
                            });
                    }
                    return e;
                })({}, t)
            )
        });
    };
}
