t.d(n, { Z: () => a });
var r = t(200651);
t(192379);
var i = t(906732);
function a(e, n) {
    return function (t) {
        let { analyticsLocations: a } = (0, i.ZP)(n);
        return (0, r.jsx)(i.Gt, {
            value: a,
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
