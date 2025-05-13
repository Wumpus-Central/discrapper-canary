var n = r(796581),
    l = r(149912);
e.exports = function e(t, r, o, i, u) {
    var a = -1,
        s = t.length;
    for (o || (o = l), u || (u = []); ++a < s; ) {
        var c = t[a];
        r > 0 && o(c) ? (r > 1 ? e(c, r - 1, o, i, u) : n(u, c)) : i || (u[u.length] = c);
    }
    return u;
};
