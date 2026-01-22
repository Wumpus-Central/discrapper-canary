n.d(e, {
    A: () => a,
});
var r = n(627968);
n(64700);
var l = n(192308);

function a(t) {
    (0, l.openModalLazy)(async () => {
        let { default: e } = await n.e("3250").then(n.bind(n, 737865));
        return (n) =>
            (0, r.jsx)(
                e,
                (function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (t) {
                                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                }),
                            )),
                            r.forEach(function (e) {
                                var r;
                                (r = n[e]),
                                    e in t
                                        ? Object.defineProperty(t, e, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (t[e] = r);
                            });
                    }
                    return t;
                })({}, t, n),
            );
    });
}
