var n = e(410323),
    o = e(210140),
    i = e(581390),
    u = e(464324).indexOf,
    a = e(239586),
    c = n([].push);
r.exports = function (r, t) {
    var e,
        n = i(r),
        f = 0,
        s = [];
    for (e in n) !o(a, e) && o(n, e) && c(s, e);
    for (; t.length > f; ) o(n, (e = t[f++])) && (~u(s, e) || c(s, e));
    return s;
};
