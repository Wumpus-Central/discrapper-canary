l.d(t, { E9: () => c, jM: () => s });
var r = l(477900),
    n = l(582128),
    a = l(812729),
    i = l.n(a);
let o = n.createContext({});
function s() {
    return n.useContext(o);
}
function c(e) {
    let { newValue: t, children: l } = e,
        a = s(),
        c = n.useMemo(() => {
            let e = { ...a, ...t };
            return i()(a, e) ? (a ?? e) : e;
        }, [a, t]);
    return (0, r.jsx)(o.Provider, { value: c, children: l });
}
