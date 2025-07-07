n.d(t, {
    k0: () => a,
    sp: () => o
});
var r = n(255367),
    l = n(73800);
let i = l.createContext(null);
function o() {
    return l.useContext(i);
}
function a(e) {
    let { newValue: t, children: n } = e,
        a = o(),
        s = l.useMemo(
            () =>
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                ((r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r));
                            }));
                    }
                    return e;
                })({}, a, t),
            [a, t]
        );
    return (0, r.jsx)(i.Provider, {
        value: s,
        children: n
    });
}
