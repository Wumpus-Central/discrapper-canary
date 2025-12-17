var r = n(816925),
    i = n(445299),
    s = n(961123);
e.exports = function (e, t, n) {
    for (var a = -1, l = t.length, o = {}; ++a < l; ) {
        var c = t[a],
            u = r(e, c);
        n(u, c) && i(o, s(c, e), u);
    }
    return o;
};
