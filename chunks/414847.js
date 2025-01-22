var i = r(273511),
    a = r(349446).f,
    o = r(948634),
    s = r(141603),
    l = r(867028),
    u = r(360518)('toStringTag');
e.exports = function (e, n, r, c) {
    var d = r ? e : e && e.prototype;
    d &&
        (!s(d, u) &&
            a(d, u, {
                configurable: !0,
                value: n
            }),
        c && !i && o(d, 'toString', l));
};
