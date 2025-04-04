var e = n(764908),
    o = n(185698),
    i = n(658971),
    u = n(674554).indexOf,
    s = n(270498),
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
