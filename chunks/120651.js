t.d(e, { Z: () => a });
var n = t(951288);
t(647438);
var r = t(952265);
function a(A) {
    (0, r.ZD)(async () => {
        let { default: e } = await t.e("73322").then(t.bind(t, 776045));
        return (t) =>
            (0, n.jsx)(
                e,
                (function (A) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = null != arguments[e] ? arguments[e] : {},
                            n = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (n = n.concat(
                                Object.getOwnPropertySymbols(t).filter(function (A) {
                                    return Object.getOwnPropertyDescriptor(t, A).enumerable;
                                }),
                            )),
                            n.forEach(function (e) {
                                var n;
                                (n = t[e]),
                                    e in A
                                        ? Object.defineProperty(A, e, {
                                              value: n,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (A[e] = n);
                            });
                    }
                    return A;
                })({}, A, t),
            );
    });
}
