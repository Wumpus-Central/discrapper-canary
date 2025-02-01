var o = n(796581),
    c = n(149912);
e.exports = function e(t, n, r, i, d) {
    var _ = -1,
        a = t.length;
    for (r || (r = c), d || (d = []); ++_ < a; ) {
        var l = t[_];
        n > 0 && r(l) ? (n > 1 ? e(l, n - 1, r, i, d) : o(d, l)) : i || (d[d.length] = l);
    }
    return d;
};
