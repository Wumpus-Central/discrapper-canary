var i = n(687249),
    r = n(718332),
    a = n(995542),
    s = n(92141),
    o = n(53919),
    l = n(290677),
    u = n(551023),
    c = n(454745),
    d = 1,
    f = '[object Arguments]',
    _ = '[object Array]',
    p = '[object Object]',
    h = Object.prototype.hasOwnProperty;
function m(e, t, n, m, g, E) {
    var v = l(e),
        y = l(t),
        I = v ? _ : o(e),
        T = y ? _ : o(t);
    (I = I == f ? p : I), (T = T == f ? p : T);
    var b = I == p,
        S = T == p,
        A = I == T;
    if (A && u(e)) {
        if (!u(t)) return !1;
        (v = !0), (b = !1);
    }
    if (A && !b) return E || (E = new i()), v || c(e) ? r(e, t, n, m, g, E) : a(e, t, I, n, m, g, E);
    if (!(n & d)) {
        var N = b && h.call(e, '__wrapped__'),
            C = S && h.call(t, '__wrapped__');
        if (N || C) {
            var R = N ? e.value() : e,
                O = C ? t.value() : t;
            return E || (E = new i()), g(R, O, n, m, E);
        }
    }
    return !!A && (E || (E = new i()), s(e, t, n, m, g, E));
}
e.exports = m;
