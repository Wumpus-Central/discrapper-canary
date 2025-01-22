var r = n(796581),
    i = n(149912);
e.exports = function e(t, n, l, a, u) {
    var o = -1,
        s = t.length;
    for (l || (l = i), u || (u = []); ++o < s; ) {
        var c = t[o];
        n > 0 && l(c) ? (n > 1 ? e(c, n - 1, l, a, u) : r(u, c)) : !a && (u[u.length] = c);
    }
    return u;
};
