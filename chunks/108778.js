var r = n(218784),
    i = n(897502),
    o = Math.abs,
    a = 2.220446049250313e-16;
e.exports = function (e, t, n, s) {
    var l = +e,
        c = o(l),
        u = r(l);
    if (c < s) return u * i(c / s / t) * s * t;
    var d = (1 + t / a) * c,
        f = d - (d - c);
    return f > n || f != f ? (1 / 0) * u : u * f;
};
