n.d(t, {
    k0: () => o,
    sp: () => a
});
var r = n(255367),
    i = n(73800);
let l = i.createContext(null);
function a() {
    return i.useContext(l);
}
function o(e) {
    let { newValue: t, children: n } = e,
        o = a(),
        s = i.useMemo(
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
                })({}, o, t),
            [o, t]
        );
    return (0, r.jsx)(l.Provider, {
        value: s,
        children: n
    });
}
