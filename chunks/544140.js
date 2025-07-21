var l = r(796581),
    n = r(149912);
e.exports = function e(t, r, i, o, s) {
    var a = -1,
        f = t.length;
    for (i || (i = n), s || (s = []); ++a < f; ) {
        var u = t[a];
        r > 0 && i(u) ? (r > 1 ? e(u, r - 1, i, o, s) : l(s, u)) : o || (s[s.length] = u);
    }
    return s;
};
