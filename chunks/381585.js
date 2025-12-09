n.d(t, {
    k0: () => s,
    sp: () => l,
});
var a = n(54381),
    r = n(473749);
let i = r.createContext(null);
function l() {
    return r.useContext(i);
}
function s(e) {
    let { newValue: t, children: n } = e,
        s = l(),
        o = r.useMemo(
            () =>
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            a = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (a = a.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            a.forEach(function (t) {
                                var a;
                                (a = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: a,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = a);
                            });
                    }
                    return e;
                })({}, s, t),
            [s, t],
        );
    return (0, a.jsx)(i.Provider, {
        value: o,
        children: n,
    });
}
