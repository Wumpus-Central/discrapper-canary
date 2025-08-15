var r = n(46015),
    i = n(77025),
    a = n(146063),
    o = n(858949).indexOf,
    s = n(485073),
    l = r([].push);
e.exports = function (e, t) {
    var n,
        r = a(e),
        c = 0,
        u = [];
    for (n in r) !i(s, n) && i(r, n) && l(u, n);
    for (; t.length > c; ) i(r, (n = t[c++])) && (~o(u, n) || l(u, n));
    return u;
};
