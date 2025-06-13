n.d(e, { Z: () => l });
var i = n(255367);
n(73800);
var r = n(906732);
function l(t, e) {
    return function (n) {
        let { analyticsLocations: l } = (0, r.ZP)(e);
        return (0, i.jsx)(r.Gt, {
            value: l,
            children: (0, i.jsx)(
                t,
                (function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            i = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (t) {
                                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                })
                            )),
                            i.forEach(function (e) {
                                var i;
                                (i = n[e]),
                                    e in t
                                        ? Object.defineProperty(t, e, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (t[e] = i);
                            });
                    }
                    return t;
                })({}, n)
            )
        });
    };
}
