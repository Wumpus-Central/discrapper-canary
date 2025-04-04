var e = n(85712),
    o = n(85328).f,
    i = n(285007),
    u = n(185698),
    s = n(71042),
    c = n(394370)('toStringTag');
t.exports = function (t, r, n, f) {
    var a = n ? t : t && t.prototype;
    a &&
        (u(a, c) ||
            o(a, c, {
                configurable: !0,
                value: r
            }),
        f && !e && i(a, 'toString', s));
};
