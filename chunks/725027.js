n.d(t, {
    nr: () => l,
    pn: () => s,
});
var r = n(54381),
    i = n(473749);
let a = { isRichTooltip: !1 },
    o = i.createContext(a);
function s(e) {
    let { children: t, isRichTooltip: n = !1 } = e,
        a = i.useMemo(() => ({ isRichTooltip: n }), [n]);
    return (0, r.jsx)(o.Provider, {
        value: a,
        children: t,
    });
}
function l() {
    return i.useContext(o);
}
