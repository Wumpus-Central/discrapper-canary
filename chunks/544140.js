var r = n(796581),
    o = n(149912);
e.exports = function e(t, n, i, a, l) {
    var c = -1,
        u = t.length;
    for (i || (i = o), l || (l = []); ++c < u; ) {
        var s = t[c];
        n > 0 && i(s) ? (n > 1 ? e(s, n - 1, i, a, l) : r(l, s)) : !a && (l[l.length] = s);
    }
    return l;
};
