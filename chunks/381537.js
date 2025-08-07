n.d(t, { Z: () => i });
var r = n(791819);
function i(e, t) {
    if (null == e) return {};
    var n,
        i,
        l = (0, r.Z)(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (i = 0; i < o.length; i++)
            (n = o[i]), -1 === t.indexOf(n) && {}.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
    }
    return l;
}
