var n = r(796581),
    o = r(149912);
e.exports = function e(t, r, l, i, u) {
    var a = -1,
        s = t.length;
    for (l || (l = o), u || (u = []); ++a < s; ) {
        var c = t[a];
        r > 0 && l(c) ? (r > 1 ? e(c, r - 1, l, i, u) : n(u, c)) : i || (u[u.length] = c);
    }
    return u;
};
