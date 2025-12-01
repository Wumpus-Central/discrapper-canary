var r = n(816925),
    i = n(445299),
    s = n(961123);
e.exports = function (e, t, n) {
    for (var l = -1, a = t.length, o = {}; ++l < a; ) {
        var c = t[l],
            u = r(e, c);
        n(u, c) && i(o, s(c, e), u);
    }
    return o;
};
