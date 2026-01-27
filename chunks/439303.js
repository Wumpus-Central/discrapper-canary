n.d(t, {
    E9: () => c,
    jM: () => o,
});
var r = n(627968),
    i = n(64700),
    l = n(812729),
    a = n.n(l);
let s = i.createContext({});

function o() {
    return i.useContext(s);
}

function c(e) {
    let { newValue: t, children: n } = e,
        l = o(),
        c = i.useMemo(() => {
            let e = (function (e) {
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
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })({}, l, t);
            return a()(l, e) && null != l ? l : e;
        }, [l, t]);
    return (0, r.jsx)(s.Provider, {
        value: c,
        children: n,
    });
}
