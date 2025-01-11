var r = n(796581),
    o = n(149912);
e.exports = function e(t, n, i, l, a) {
    var c = -1,
        u = t.length;
    for (i || (i = o), a || (a = []); ++c < u; ) {
        var s = t[c];
        n > 0 && i(s) ? (n > 1 ? e(s, n - 1, i, l, a) : r(a, s)) : !l && (a[a.length] = s);
    }
    return a;
};
