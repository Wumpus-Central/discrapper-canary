n.d(t, { Z: () => i });
var r = n(791819);
function i(e, t) {
    if (null == e) return {};
    var n,
        i,
        l = (0, r.Z)(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (i = 0; i < s.length; i++)
            (n = s[i]), -1 === t.indexOf(n) && {}.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
    }
    return l;
}
