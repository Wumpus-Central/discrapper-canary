var r = n(46015),
    i = n(77025),
    o = n(146063),
    a = n(858949).indexOf,
    s = n(485073),
    l = r([].push);
e.exports = function (e, t) {
    var n,
        r = o(e),
        c = 0,
        u = [];
    for (n in r) !i(s, n) && i(r, n) && l(u, n);
    for (; t.length > c; ) i(r, (n = t[c++])) && (~a(u, n) || l(u, n));
    return u;
};
