var r = n(526252),
    i = n(129959);
e.exports = function e(t, n, s, a, o) {
    var l = -1,
        u = t.length;
    for (s || (s = i), o || (o = []); ++l < u; ) {
        var d = t[l];
        n > 0 && s(d) ? (n > 1 ? e(d, n - 1, s, a, o) : r(o, d)) : a || (o[o.length] = d);
    }
    return o;
};
