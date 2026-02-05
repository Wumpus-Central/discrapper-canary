n.d(t, { E9: () => d, jM: () => o });
var i = n(627968),
    l = n(64700),
    a = n(812729),
    r = n.n(a);
let s = l.createContext({});
function o() {
    return l.useContext(s);
}
function d(e) {
    let { newValue: t, children: n } = e,
        a = o(),
        d = l.useMemo(() => {
            let e = { ...a, ...t };
            return r()(a, e) ? (a ?? e) : e;
        }, [a, t]);
    return (0, i.jsx)(s.Provider, { value: d, children: n });
}
