var r = n(796581),
    i = n(149912);
e.exports = function e(t, n, l, o, u) {
    var s = -1,
        a = t.length;
    for (l || (l = i), u || (u = []); ++s < a; ) {
        var c = t[s];
        n > 0 && l(c) ? (n > 1 ? e(c, n - 1, l, o, u) : r(u, c)) : o || (u[u.length] = c);
    }
    return u;
};
