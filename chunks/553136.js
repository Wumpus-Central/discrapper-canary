var r = a(46015),
    n = a(77025),
    _ = a(146063),
    o = a(858949).indexOf,
    i = a(485073),
    c = r([].push);
t.exports = function (t, e) {
    var a,
        r = _(t),
        s = 0,
        E = [];
    for (a in r) !n(i, a) && n(r, a) && c(E, a);
    for (; e.length > s; ) n(r, (a = e[s++])) && (~o(E, a) || c(E, a));
    return E;
};
