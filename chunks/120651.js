A.d(t, { Z: () => a });
var n = A(54381);
A(473749);
var r = A(952265);
function a(e) {
    (0, r.openModalLazy)(async () => {
        let { default: t } = await A.e("73322").then(A.bind(A, 776045));
        return (A) =>
            (0, n.jsx)(
                t,
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var A = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(A);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (n = n.concat(
                                Object.getOwnPropertySymbols(A).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(A, e).enumerable;
                                }),
                            )),
                            n.forEach(function (t) {
                                var n;
                                (n = A[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: n,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = n);
                            });
                    }
                    return e;
                })({}, e, A),
            );
    });
}
