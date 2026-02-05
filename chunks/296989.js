var r = n(670269),
    i = n(533030);
function a(e, t, n, s, o) {
    var l = -1,
        u = e.length;
    for (n || (n = i), o || (o = []); ++l < u; ) {
        var c = e[l];
        t > 0 && n(c) ? (t > 1 ? a(c, t - 1, n, s, o) : r(o, c)) : s || (o[o.length] = c);
    }
    return o;
}
e.exports = a;
