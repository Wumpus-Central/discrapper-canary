var r = n(410323),
    i = n(210140),
    a = n(581390),
    s = n(464324).indexOf,
    o = n(239586),
    l = r([].push);
e.exports = function (e, t) {
    var n,
        r = a(e),
        c = 0,
        u = [];
    for (n in r) !i(o, n) && i(r, n) && l(u, n);
    for (; t.length > c; ) i(r, (n = t[c++])) && (~s(u, n) || l(u, n));
    return u;
};
