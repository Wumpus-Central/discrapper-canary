var i = n(273511),
    r = n(349446).f,
    a = n(948634),
    s = n(141603),
    o = n(867028),
    l = n(360518)('toStringTag');
e.exports = function (e, t, n, u) {
    var c = n ? e : e && e.prototype;
    c &&
        (s(c, l) ||
            r(c, l, {
                configurable: !0,
                value: t
            }),
        u && !i && a(c, 'toString', o));
};
