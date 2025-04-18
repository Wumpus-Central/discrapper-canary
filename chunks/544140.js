var n = r(796581),
    l = r(149912);
e.exports = function e(t, r, o, i, u) {
    var a = -1,
        c = t.length;
    for (o || (o = l), u || (u = []); ++a < c; ) {
        var s = t[a];
        r > 0 && o(s) ? (r > 1 ? e(s, r - 1, o, i, u) : n(u, s)) : i || (u[u.length] = s);
    }
    return u;
};
