var o = n(796581),
    r = n(149912);
e.exports = function e(t, n, i, c, d) {
    var l = -1,
        a = t.length;
    for (i || (i = r), d || (d = []); ++l < a; ) {
        var s = t[l];
        n > 0 && i(s) ? (n > 1 ? e(s, n - 1, i, c, d) : o(d, s)) : c || (d[d.length] = s);
    }
    return d;
};
