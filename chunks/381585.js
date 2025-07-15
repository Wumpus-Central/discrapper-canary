r.d(t, {
    k0: () => a,
    sp: () => o
});
var n = r(255367),
    l = r(73800);
let i = l.createContext(null);
function o() {
    return l.useContext(i);
}
function a(e) {
    let { newValue: t, children: r } = e,
        a = o(),
        s = l.useMemo(
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
                })({}, a, t),
            [a, t]
        );
    return (0, n.jsx)(i.Provider, {
        value: s,
        children: r
    });
}
