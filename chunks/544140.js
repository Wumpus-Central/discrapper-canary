var l = r(796581),
    o = r(149912);
e.exports = function e(t, r, n, i, a) {
    var s = -1,
        u = t.length;
    for (n || (n = o), a || (a = []); ++s < u; ) {
        var d = t[s];
        r > 0 && n(d) ? (r > 1 ? e(d, r - 1, n, i, a) : l(a, d)) : i || (a[a.length] = d);
    }
    return a;
};
