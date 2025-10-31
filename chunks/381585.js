t.d(n, {
    k0: () => o,
    sp: () => a,
});
var r = t(951288),
    l = t(647438);
let i = l.createContext(null);
function a() {
    return l.useContext(i);
}
function o(e) {
    let { newValue: n, children: t } = e,
        o = a(),
        s = l.useMemo(
            () =>
                (function (e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(t).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                }),
                            )),
                            r.forEach(function (n) {
                                var r;
                                (r = t[n]),
                                    n in e
                                        ? Object.defineProperty(e, n, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[n] = r);
                            });
                    }
                    return e;
                })({}, o, n),
            [o, n],
        );
    return (0, r.jsx)(i.Provider, {
        value: s,
        children: t,
    });
}
