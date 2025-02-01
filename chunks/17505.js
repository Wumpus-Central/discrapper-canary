var i = n(96403),
    r = n(141603),
    a = n(729605),
    s = n(818140).indexOf,
    o = n(511364),
    l = i([].push);
e.exports = function (e, t) {
    var n,
        i = a(e),
        u = 0,
        c = [];
    for (n in i) !r(o, n) && r(i, n) && l(c, n);
    for (; t.length > u; ) r(i, (n = t[u++])) && (~s(c, n) || l(c, n));
    return c;
};
