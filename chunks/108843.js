e.d(n, { Z: () => l });
var i = e(255367);
e(73800);
var r = e(906732);
function l(t, n) {
    return function (e) {
        let { analyticsLocations: l } = (0, r.ZP)(n);
        return (0, i.jsx)(r.Gt, {
            value: l,
            children: (0, i.jsx)(
                t,
                (function (t) {
                    for (var n = 1; n < arguments.length; n++) {
                        var e = null != arguments[n] ? arguments[n] : {},
                            i = Object.keys(e);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(e).filter(function (t) {
                                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                                })
                            )),
                            i.forEach(function (n) {
                                var i;
                                ((i = e[n]),
                                    n in t
                                        ? Object.defineProperty(t, n, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (t[n] = i));
                            }));
                    }
                    return t;
                })({}, e)
            )
        });
    };
}
