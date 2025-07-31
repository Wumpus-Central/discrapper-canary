r.d(t, {
    k0: () => o,
    sp: () => i
});
var n = r(255367),
    a = r(73800);
let l = a.createContext(null);
function i() {
    return a.useContext(l);
}
function o(e) {
    let { newValue: t, children: r } = e,
        o = i(),
        s = a.useMemo(
            () =>
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (n = n.concat(
                                Object.getOwnPropertySymbols(r).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                })
                            )),
                            n.forEach(function (t) {
                                var n;
                                ((n = r[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: n,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = n));
                            }));
                    }
                    return e;
                })({}, o, t),
            [o, t]
        );
    return (0, n.jsx)(l.Provider, {
        value: s,
        children: r
    });
}
