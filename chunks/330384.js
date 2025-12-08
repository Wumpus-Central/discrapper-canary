var r = n(187856),
    i = n(249979),
    a = n(196322);
e.exports = function (e, t, n) {
    for (var o = -1, s = t.length, l = {}; ++o < s; ) {
        var c = t[o],
            u = r(e, c);
        n(u, c) && i(l, a(c, e), u);
    }
    return l;
};
