t.d(n, { Z: () => r });
var i = t(54381);
t(473749);
var l = t(906732);
function r(e, n) {
    return function (t) {
        let { analyticsLocations: r } = (0, l.ZP)(n);
        return (0, i.jsx)(l.Gt, {
            value: r,
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
