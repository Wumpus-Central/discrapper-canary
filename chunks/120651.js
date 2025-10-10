A.d(t, { Z: () => a });
var r = A(951288);
A(647438);
var n = A(952265);
function a(e) {
    (0, n.ZD)(async () => {
        let { default: t } = await A.e("73322").then(A.bind(A, 776045));
        return (A) =>
            (0, r.jsx)(
                t,
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var A = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(A);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(A).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(A, e).enumerable;
                                }),
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = A[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, e, A),
            );
    });
}
