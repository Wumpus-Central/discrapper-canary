var r = n(687249),
    i = n(718332),
    a = n(995542),
    o = n(92141),
    s = n(53919),
    l = n(290677),
    c = n(551023),
    u = n(454745),
    d = 1,
    f = '[object Arguments]',
    _ = '[object Array]',
    p = '[object Object]',
    h = Object.prototype.hasOwnProperty;
e.exports = function (e, t, n, m, g, E) {
    var b = l(e),
        y = l(t),
        O = b ? _ : s(e),
        v = y ? _ : s(t);
    (O = O == f ? p : O), (v = v == f ? p : v);
    var I = O == p,
        S = v == p,
        T = O == v;
    if (T && c(e)) {
        if (!c(t)) return !1;
        (b = !0), (I = !1);
    }
    if (T && !I) return E || (E = new r()), b || u(e) ? i(e, t, n, m, g, E) : a(e, t, O, n, m, g, E);
    if (!(n & d)) {
        var A = I && h.call(e, '__wrapped__'),
            N = S && h.call(t, '__wrapped__');
        if (A || N) {
            var C = A ? e.value() : e,
                R = N ? t.value() : t;
            return E || (E = new r()), g(C, R, n, m, E);
        }
    }
    return !!T && (E || (E = new r()), o(e, t, n, m, g, E));
};
