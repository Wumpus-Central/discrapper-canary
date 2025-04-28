var e = r(46015),
    o = r(77025),
    i = r(146063),
    u = r(858949).indexOf,
    c = r(485073),
    a = e([].push);
t.exports = function (t, n) {
    var r,
        e = i(t),
        f = 0,
        s = [];
    for (r in e) !o(c, r) && o(e, r) && a(s, r);
    for (; n.length > f; ) o(e, (r = n[f++])) && (~u(s, r) || a(s, r));
    return s;
};
