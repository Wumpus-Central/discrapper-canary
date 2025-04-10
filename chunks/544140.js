var r = n(796581),
    i = n(149912);
e.exports = function e(t, n, l, u, o) {
    var a = -1,
        s = t.length;
    for (l || (l = i), o || (o = []); ++a < s; ) {
        var c = t[a];
        n > 0 && l(c) ? (n > 1 ? e(c, n - 1, l, u, o) : r(o, c)) : u || (o[o.length] = c);
    }
    return o;
};
