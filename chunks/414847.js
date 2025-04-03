var e = n(273511),
    o = n(349446).f,
    i = n(948634),
    u = n(141603),
    s = n(867028),
    c = n(360518)('toStringTag');
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
