var i = r(687249),
    a = r(718332),
    o = r(995542),
    s = r(92141),
    l = r(53919),
    u = r(290677),
    c = r(551023),
    d = r(454745),
    f = 1,
    p = '[object Arguments]',
    h = '[object Array]',
    _ = '[object Object]',
    m = Object.prototype.hasOwnProperty;
function g(e, n, r, g, E, v) {
    var y = u(e),
        b = u(n),
        I = y ? h : l(e),
        T = b ? h : l(n);
    (I = I == p ? _ : I), (T = T == p ? _ : T);
    var S = I == _,
        A = T == _,
        C = I == T;
    if (C && c(e)) {
        if (!c(n)) return !1;
        (y = !0), (S = !1);
    }
    if (C && !S) return v || (v = new i()), y || d(e) ? a(e, n, r, g, E, v) : o(e, n, I, r, g, E, v);
    if (!(r & f)) {
        var N = S && m.call(e, '__wrapped__'),
            R = A && m.call(n, '__wrapped__');
        if (N || R) {
            var O = N ? e.value() : e,
                D = R ? n.value() : n;
            return v || (v = new i()), E(O, D, r, g, v);
        }
    }
    return !!C && (v || (v = new i()), s(e, n, r, g, E, v));
}
e.exports = g;
