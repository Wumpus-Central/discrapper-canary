r.d(t, { Z: () => n });
var a = r(791819);
function n(e, t) {
    if (null == e) return {};
    var r,
        n,
        o = (0, a.Z)(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (n = 0; n < s.length; n++)
            (r = s[n]), -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
    }
    return o;
}
