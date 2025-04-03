r.d(t, { Z: () => n });
var a = r(312089);
function n(e, t) {
    if (null == e) return {};
    var r,
        n,
        s = (0, a.Z)(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (n = 0; n < o.length; n++) (r = o[n]), t.includes(r) || ({}.propertyIsEnumerable.call(e, r) && (s[r] = e[r]));
    }
    return s;
}
