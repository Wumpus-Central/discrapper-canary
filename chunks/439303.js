n.d(t, {
    E9: () => d,
    jM: () => u,
});
var r = n(627968),
    i = n(64700),
    a = n(812729),
    s = n.n(a);

function o(e, t, n) {
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
                o(e, t, n[t]);
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
        o = i.useMemo(() => {
            let e = l({}, a, t);
            return s()(a, e) && null != a ? a : e;
        }, [a, t]);
    return (0, r.jsx)(c.Provider, {
        value: o,
        children: n,
    });
}
