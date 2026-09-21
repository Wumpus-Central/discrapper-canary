l.d(t, { E9: () => c, jM: () => o });
var r = l(477900),
    n = l(582128),
    a = l(812729),
    i = l.n(a);
let s = n.createContext({});
function o() {
    return n.useContext(s);
}
function c(e) {
    let { newValue: t, children: l } = e,
        a = o(),
        c = n.useMemo(() => {
            let e = { ...a, ...t };
            return i()(a, e) ? (a ?? e) : e;
        }, [a, t]);
    return (0, r.jsx)(s.Provider, { value: c, children: l });
}
