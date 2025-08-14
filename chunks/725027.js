n.d(t, {
    nr: () => l,
    pn: () => s,
});
var r = n(255367),
    i = n(73800);
let o = { isRichTooltip: !1 },
    a = i.createContext(o);
function s(e) {
    let { children: t, isRichTooltip: n = !1 } = e,
        o = i.useMemo(() => ({ isRichTooltip: n }), [n]);
    return (0, r.jsx)(a.Provider, {
        value: o,
        children: t,
    });
}
function l() {
    return i.useContext(a);
}
