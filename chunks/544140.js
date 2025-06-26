var n = r(796581),
    o = r(149912);
e.exports = function e(t, r, l, i, u) {
    var a = -1,
        c = t.length;
    for (l || (l = o), u || (u = []); ++a < c; ) {
        var s = t[a];
        r > 0 && l(s) ? (r > 1 ? e(s, r - 1, l, i, u) : n(u, s)) : i || (u[u.length] = s);
    }
    return u;
};
