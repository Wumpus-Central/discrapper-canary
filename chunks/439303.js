l.d(t, { E9: () => c, jM: () => o });
var n = l(477900),
    r = l(582128),
    i = l(812729),
    a = l.n(i);
let s = r.createContext({});
function o() {
    return r.useContext(s);
}
function c(e) {
    let { newValue: t, children: l } = e,
        i = o(),
        c = r.useMemo(() => {
            let e = { ...i, ...t };
            return a()(i, e) ? (i ?? e) : e;
        }, [i, t]);
    return (0, n.jsx)(s.Provider, { value: c, children: l });
}
