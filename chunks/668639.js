n.d(t, { cK: () => s, hN: () => o, xW: () => l });
var i = n(477900),
    r = n(582128),
    a = n(818348);
let s = r.createContext({
    titleId: void 0,
    errorId: void 0,
    error: void 0,
    isFocused: void 0,
    setIsFocused: a.tE,
    hasValue: void 0,
    setHasValue: a.tE,
});
function l() {
    return r.useContext(s);
}
function o(e) {
    let { children: t, ...n } = e;
    return (0, i.jsx)(s.Provider, { "data-migration-pending": !0, value: n, children: t });
}
