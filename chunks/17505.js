var e = n(96403),
    o = n(141603),
    i = n(729605),
    u = n(818140).indexOf,
    s = n(511364),
    c = e([].push);
t.exports = function (t, r) {
    var n,
        e = i(t),
        f = 0,
        a = [];
    for (n in e) !o(s, n) && o(e, n) && c(a, n);
    for (; r.length > f; ) o(e, (n = r[f++])) && (~u(a, n) || c(a, n));
    return a;
};
