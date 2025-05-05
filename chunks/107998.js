n.d(t, {
    c1: () => l,
    zb: () => s
}),
    n(388685);
var r = n(255367);
function i(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = a(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function a(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
n(73800);
let [o, s] = (0, n(975104).Z)();
function l(e) {
    var { children: t } = e,
        n = i(e, ['children']);
    return (0, r.jsx)(o.Provider, {
        value: n,
        children: t
    });
}
