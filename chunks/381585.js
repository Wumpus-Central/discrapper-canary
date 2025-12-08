n.d(t, {
    k0: () => s,
    sp: () => i,
});
var a = n(54381),
    l = n(473749);
let r = l.createContext(null);
function i() {
    return l.useContext(r);
}
function s(e) {
    let { newValue: t, children: n } = e,
        s = i(),
        o = l.useMemo(
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
    return (0, a.jsx)(r.Provider, {
        value: o,
        children: n,
    });
}
