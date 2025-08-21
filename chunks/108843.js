t.d(n, { Z: () => l });
var i = t(951288);
t(647438);
var r = t(906732);
function l(e, n) {
    return function (t) {
        let { analyticsLocations: l } = (0, r.ZP)(n);
        return (0, i.jsx)(r.Gt, {
            value: l,
            children: (0, i.jsx)(
                e,
                (function (e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            i = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(t).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                }),
                            )),
                            i.forEach(function (n) {
                                var i;
                                (i = t[n]),
                                    n in e
                                        ? Object.defineProperty(e, n, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[n] = i);
                            });
                    }
                    return e;
                })({}, t),
            ),
        });
    };
}
