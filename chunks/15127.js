n.d(t, {
    Gc: () => c,
    ol: () => u,
    q3: () => l
});
var r = n(200651),
    i = n(192379),
    o = n(981631);
function a(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = s(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function s(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let l = i.createContext({
    titleId: void 0,
    errorId: void 0,
    error: void 0,
    isFocused: void 0,
    setIsFocused: o.dG4,
    hasValue: void 0,
    setHasValue: o.dG4
});
function c() {
    return i.useContext(l);
}
function u(e) {
    var { children: t } = e,
        n = a(e, ['children']);
    return (0, r.jsx)(l.Provider, {
        value: n,
        children: t
    });
}
