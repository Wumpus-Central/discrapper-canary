var n = e(410323),
    o = e(210140),
    i = e(581390),
    a = e(464324).indexOf,
    u = e(239586),
    c = n([].push);
r.exports = function (r, t) {
    var e,
        n = i(r),
        f = 0,
        p = [];
    for (e in n) !o(u, e) && o(n, e) && c(p, e);
    for (; t.length > f; ) o(n, (e = t[f++])) && (~a(p, e) || c(p, e));
    return p;
};
