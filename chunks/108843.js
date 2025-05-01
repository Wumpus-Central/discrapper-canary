t.d(e, { Z: () => i });
var r = t(200651);
t(192379);
var l = t(906732);
function i(n, e) {
    return function (t) {
        let { analyticsLocations: i } = (0, l.ZP)(e);
        return (0, r.jsx)(l.Gt, {
            value: i,
            children: (0, r.jsx)(
                n,
                (function (n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(t);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(t).filter(function (n) {
                                    return Object.getOwnPropertyDescriptor(t, n).enumerable;
                                })
                            )),
                            r.forEach(function (e) {
                                var r;
                                (r = t[e]),
                                    e in n
                                        ? Object.defineProperty(n, e, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (n[e] = r);
                            });
                    }
                    return n;
                })({}, t)
            )
        });
    };
}
