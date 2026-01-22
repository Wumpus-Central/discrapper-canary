var r = n(655405),
    i = n(822339),
    a = n(473334),
    s = n(825933),
    o = n(189577),
    l = n(467957),
    c = n(154164),
    u = n(579571),
    d = 1,
    f = "[object Arguments]",
    p = "[object Array]",
    _ = "[object Object]",
    h = Object.prototype.hasOwnProperty;
e.exports = function (e, t, n, m, g, E) {
    var b = l(e),
        y = l(t),
        O = b ? p : o(e),
        A = y ? p : o(t);
    (O = O == f ? _ : O), (A = A == f ? _ : A);
    var v = O == _,
        S = A == _,
        I = O == A;
    if (I && c(e)) {
        if (!c(t)) return !1;
        (b = !0), (v = !1);
    }
    if (I && !v) return E || (E = new r()), b || u(e) ? i(e, t, n, m, g, E) : a(e, t, O, n, m, g, E);
    if (!(n & d)) {
        var T = v && h.call(e, "__wrapped__"),
            C = S && h.call(t, "__wrapped__");
        if (T || C) {
            var N = T ? e.value() : e,
                R = C ? t.value() : t;
            return E || (E = new r()), g(N, R, n, m, E);
        }
    }
    return !!I && (E || (E = new r()), s(e, t, n, m, g, E));
};
