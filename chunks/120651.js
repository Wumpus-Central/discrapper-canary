r.d(t, { Z: () => o });
var A = r(200651);
r(192379);
var n = r(952265);
function o(e) {
    (0, n.ZD)(async () => {
        let { default: t } = await Promise.resolve().then(r.bind(r, 776045));
        return (r) =>
            (0, A.jsx)(
                t,
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            A = Object.keys(r);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (A = A.concat(
                                Object.getOwnPropertySymbols(r).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                })
                            )),
                            A.forEach(function (t) {
                                var A;
                                (A = r[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: A,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = A);
                            });
                    }
                    return e;
                })({}, e, r)
            );
    });
}
