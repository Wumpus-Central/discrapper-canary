n.d(t, {
    k0: () => c,
    sp: () => l,
});
var r = n(951288),
    i = n(647438);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                a(e, t, n[t]);
            });
    }
    return e;
}
let s = i.createContext(null);
function l() {
    return i.useContext(s);
}
function c(e) {
    let { newValue: t, children: n } = e,
        a = l(),
        c = i.useMemo(() => o({}, a, t), [a, t]);
    return (0, r.jsx)(s.Provider, {
        value: c,
        children: n,
    });
}
