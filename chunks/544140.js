var n = r(796581),
    l = r(149912);
e.exports = function e(t, r, i, o, s) {
    var u = -1,
        a = t.length;
    for (i || (i = l), s || (s = []); ++u < a; ) {
        var f = t[u];
        r > 0 && i(f) ? (r > 1 ? e(f, r - 1, i, o, s) : n(s, f)) : o || (s[s.length] = f);
    }
    return s;
};
