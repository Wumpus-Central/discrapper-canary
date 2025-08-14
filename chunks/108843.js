n.d(t, { Z: () => i });
var l = n(255367);
n(73800);
var r = n(906732);
function i(e, t) {
    return function (n) {
        let { analyticsLocations: i } = (0, r.ZP)(t);
        return (0, l.jsx)(r.Gt, {
            value: i,
            children: (0, l.jsx)(
                e,
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            l = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (l = l.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            l.forEach(function (t) {
                                var l;
                                (l = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: l,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = l);
                            });
                    }
                    return e;
                })({}, n),
            ),
        });
    };
}
