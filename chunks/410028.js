var r = n(526252),
    i = n(129959);

function a(e, t, n, s, o) {
    var l = -1,
        c = e.length;
    for (n || (n = i), o || (o = []); ++l < c; ) {
        var u = e[l];
        t > 0 && n(u) ? (t > 1 ? a(u, t - 1, n, s, o) : r(o, u)) : s || (o[o.length] = u);
    }
    return o;
}
e.exports = a;
