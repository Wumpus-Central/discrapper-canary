n.d(t, {
    F: () => c,
    c: () => l,
}),
    n(415506);
var r = n(54381),
    i = n(473749);
function a(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = o(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function o(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let s = i.createContext(null);
function l() {
    let e = i.useContext(s);
    if (null == e) throw Error("Could not find context for useMessageAccessoriesComponentContext.");
    return e;
}
function c(e) {
    var { children: t } = e,
        n = a(e, ["children"]);
    return (0, r.jsx)(s.Provider, {
        value: n,
        children: t,
    });
}
