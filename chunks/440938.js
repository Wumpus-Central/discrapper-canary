n.d(t, {
    R9: () => c,
    uM: () => l,
});
var r = n(627968),
    i = n(64700);

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

function s(e) {
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
let o = i.createContext(null);

function l() {
    return i.useContext(o);
}

function c(e) {
    let { newValue: t, children: n } = e,
        a = l(),
        c = i.useMemo(() => s({}, a, t), [a, t]);
    return (0, r.jsx)(o.Provider, {
        value: c,
        children: n,
    });
}
