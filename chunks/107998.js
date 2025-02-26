n.d(t, {
    c1: () => l,
    zb: () => s
}),
    n(47120);
var r = n(200651);
function i(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = o(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function o(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
n(192379);
let [a, s] = (0, n(975104).Z)();
function l(e) {
    var { children: t } = e,
        n = i(e, ['children']);
    return (0, r.jsx)(a.Provider, {
        value: n,
        children: t
    });
}
