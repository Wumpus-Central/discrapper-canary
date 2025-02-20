var r = n(687249),
    i = n(718332),
    o = n(995542),
    a = n(92141),
    s = n(53919),
    l = n(290677),
    c = n(551023),
    u = n(454745),
    d = 1,
    f = '[object Arguments]',
    p = '[object Array]',
    _ = '[object Object]',
    h = Object.prototype.hasOwnProperty;
function m(e, t, n, m, g, E) {
    var v = l(e),
        b = l(t),
        y = v ? p : s(e),
        O = b ? p : s(t);
    (y = y == f ? _ : y), (O = O == f ? _ : O);
    var S = y == _,
        I = O == _,
        T = y == O;
    if (T && c(e)) {
        if (!c(t)) return !1;
        (v = !0), (S = !1);
    }
    if (T && !S) return E || (E = new r()), v || u(e) ? i(e, t, n, m, g, E) : o(e, t, y, n, m, g, E);
    if (!(n & d)) {
        var N = S && h.call(e, '__wrapped__'),
            A = I && h.call(t, '__wrapped__');
        if (N || A) {
            var C = N ? e.value() : e,
                R = A ? t.value() : t;
            return E || (E = new r()), g(C, R, n, m, E);
        }
    }
    return !!T && (E || (E = new r()), a(e, t, n, m, g, E));
}
e.exports = m;
