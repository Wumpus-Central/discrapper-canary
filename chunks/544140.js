var n = r(796581),
    l = r(149912);
e.exports = function e(t, r, o, i, s) {
    var a = -1,
        u = t.length;
    for (o || (o = l), s || (s = []); ++a < u; ) {
        var c = t[a];
        r > 0 && o(c) ? (r > 1 ? e(c, r - 1, o, i, s) : n(s, c)) : i || (s[s.length] = c);
    }
    return s;
};
