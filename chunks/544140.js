var n = r(796581),
    l = r(149912);
e.exports = function e(t, r, o, i, u) {
    var a = -1,
        s = t.length;
    for (o || (o = l), u || (u = []); ++a < s; ) {
        var d = t[a];
        r > 0 && o(d) ? (r > 1 ? e(d, r - 1, o, i, u) : n(u, d)) : i || (u[u.length] = d);
    }
    return u;
};
