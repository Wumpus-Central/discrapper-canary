t.d(n, { Z: () => a });
var i = t(255367);
t(73800);
var r = t(906732);
function a(e, n) {
    return function (t) {
        let { analyticsLocations: a } = (0, r.ZP)(n);
        return (0, i.jsx)(r.Gt, {
            value: a,
            children: (0, i.jsx)(
                e,
                (function (e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            i = Object.keys(t);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(t).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                })
                            )),
                            i.forEach(function (n) {
                                var i;
                                (i = t[n]),
                                    n in e
                                        ? Object.defineProperty(e, n, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[n] = i);
                            });
                    }
                    return e;
                })({}, t)
            )
        });
    };
}
