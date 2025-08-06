n.d(t, {
    F: () => c,
    c: () => l,
}),
    n(415506);
var r = n(255367),
    i = n(73800);
function o(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = a(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function a(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
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
        n = o(e, ["children"]);
    return (0, r.jsx)(s.Provider, {
        value: n,
        children: t,
    });
}
