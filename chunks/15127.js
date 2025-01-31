n.d(t, {
    Gc: () => o,
    ol: () => l,
    q3: () => s
});
var i = n(200651),
    r = n(192379),
    a = n(981631);
let s = r.createContext({
    titleId: void 0,
    errorId: void 0,
    error: void 0,
    isFocused: void 0,
    setIsFocused: a.dG4,
    hasValue: void 0,
    setHasValue: a.dG4
});
function o() {
    return r.useContext(s);
}
function l(e) {
    let { children: t, ...n } = e;
    return (0, i.jsx)(s.Provider, {
        value: n,
        children: t
    });
}
