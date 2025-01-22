var i = r(96403),
    a = r(141603),
    o = r(729605),
    s = r(818140).indexOf,
    l = r(511364),
    u = i([].push);
e.exports = function (e, n) {
    var r,
        i = o(e),
        c = 0,
        d = [];
    for (r in i) !a(l, r) && a(i, r) && u(d, r);
    for (; n.length > c; ) a(i, (r = n[c++])) && (~s(d, r) || u(d, r));
    return d;
};
