var r = n(96403),
    i = n(141603),
    o = n(729605),
    a = n(818140).indexOf,
    s = n(511364),
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
