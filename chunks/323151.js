var r = n(687249),
    i = n(718332),
    a = n(995542),
    o = n(92141),
    s = n(53919),
    l = n(290677),
    c = n(551023),
    u = n(454745),
    d = 1,
    f = "[object Arguments]",
    p = "[object Array]",
    _ = "[object Object]",
    m = Object.prototype.hasOwnProperty;
e.exports = function (e, t, n, h, g, E) {
    var b = l(e),
        y = l(t),
        O = b ? p : s(e),
        v = y ? p : s(t);
    (O = O == f ? _ : O), (v = v == f ? _ : v);
    var S = O == _,
        I = v == _,
        T = O == v;
    if (T && c(e)) {
        if (!c(t)) return !1;
        (b = !0), (S = !1);
    }
    if (T && !S) return E || (E = new r()), b || u(e) ? i(e, t, n, h, g, E) : a(e, t, O, n, h, g, E);
    if (!(n & d)) {
        var C = S && m.call(e, "__wrapped__"),
            A = I && m.call(t, "__wrapped__");
        if (C || A) {
            var N = C ? e.value() : e,
                P = A ? t.value() : t;
            return E || (E = new r()), g(N, P, n, h, E);
        }
    }
    return !!T && (E || (E = new r()), o(e, t, n, h, g, E));
};
