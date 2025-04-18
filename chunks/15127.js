n.d(t, {
    Gc: () => c,
    ol: () => u,
    q3: () => l
});
var r = n(200651),
    i = n(192379),
    a = n(981631);
function o(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = s(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function s(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let l = i.createContext({
    titleId: void 0,
    errorId: void 0,
    error: void 0,
    isFocused: void 0,
    setIsFocused: a.dG4,
    hasValue: void 0,
    setHasValue: a.dG4
});
function c() {
    return i.useContext(l);
}
function u(e) {
    var { children: t } = e,
        n = o(e, ['children']);
    return (0, r.jsx)(l.Provider, {
        value: n,
        children: t
    });
}
