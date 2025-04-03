n.d(t, {
    k0: () => i,
    sp: () => o
});
var r = n(200651),
    l = n(192379);
let a = l.createContext(null);
function o() {
    return l.useContext(a);
}
function i(e) {
    let { newValue: t, children: n } = e,
        i = o(),
        s = l.useMemo(
            () =>
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, i, t),
            [i, t]
        );
    return (0, r.jsx)(a.Provider, {
        value: s,
        children: n
    });
}
