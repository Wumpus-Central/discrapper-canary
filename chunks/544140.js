var o = n(796581),
    r = n(149912);
e.exports = function e(t, n, c, i, d) {
    var _ = -1,
        a = t.length;
    for (c || (c = r), d || (d = []); ++_ < a; ) {
        var l = t[_];
        n > 0 && c(l) ? (n > 1 ? e(l, n - 1, c, i, d) : o(d, l)) : i || (d[d.length] = l);
    }
    return d;
};
