n.d(t, {
    hL: () => d,
    oR: () => u,
});
var r = n(54381),
    i = n(473749),
    a = n(348327),
    o = n.n(a);
function s(e, t, n) {
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
function l(e) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}
let c = i.createContext({});
function u() {
    return i.useContext(c);
}
function d(e) {
    let { newValue: t, children: n } = e,
        a = u(),
        s = i.useMemo(() => {
            let e = l({}, a, t);
            return o()(a, e) && null != a ? a : e;
        }, [a, t]);
    return (0, r.jsx)(c.Provider, {
        value: s,
        children: n,
    });
}
