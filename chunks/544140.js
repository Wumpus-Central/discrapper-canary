var r = n(796581),
    o = n(149912);
e.exports = function e(t, n, i, a, c) {
    var l = -1,
        u = t.length;
    for (i || (i = o), c || (c = []); ++l < u; ) {
        var s = t[l];
        n > 0 && i(s) ? (n > 1 ? e(s, n - 1, i, a, c) : r(c, s)) : !a && (c[c.length] = s);
    }
    return c;
};
