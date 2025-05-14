var e = r(218784),
    o = r(897502),
    i = Math.abs;
t.exports = function (t, n, r, u) {
    var c = +t,
        a = i(c),
        f = e(c);
    if (a < u) return f * o(a / u / n) * u * n;
    var s = (1 + n / 2.220446049250313e-16) * a,
        l = s - (s - a);
    return l > r || l != l ? (1 / 0) * f : f * l;
};
