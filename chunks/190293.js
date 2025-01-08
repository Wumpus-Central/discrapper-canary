r.d(t, {
    Z: function () {
        return n;
    }
});
var a = r(312089);
function n(e, t) {
    if (null == e) return {};
    var r,
        n,
        o = (0, a.Z)(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (n = 0; n < s.length; n++) (r = s[n]), t.includes(r) || ({}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
    }
    return o;
}
