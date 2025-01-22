r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(978856),
    a = r(764303);
function o(e, n) {
    if (null == e) return {};
    var r,
        o,
        s = {},
        l = i(e);
    for (o = 0; o < l.length; o++) (r = l[o]), !(a(n).call(n, r) >= 0) && (s[r] = e[r]);
    return s;
}
