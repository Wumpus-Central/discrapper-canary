t.d(A, {
    A: () => l,
});
var r = t(627968);
t(64700);
var n = t(192308);

function l(e) {
    (0, n.openModalLazy)(async () => {
        let { default: A } = await t.e("44252").then(t.bind(t, 790743));
        return (t) =>
            (0, r.jsx)(
                A,
                (function (e) {
                    for (var A = 1; A < arguments.length; A++) {
                        var t = null != arguments[A] ? arguments[A] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(t).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                }),
                            )),
                            r.forEach(function (A) {
                                var r;
                                (r = t[A]),
                                    A in e
                                        ? Object.defineProperty(e, A, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[A] = r);
                            });
                    }
                    return e;
                })({}, e, t),
            );
    });
}
