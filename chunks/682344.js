var i = n(655405),
    r = n(822339),
    s = n(473334),
    a = n(825933),
    o = n(189577),
    l = n(467957),
    u = n(154164),
    c = n(579571),
    d = "[object Arguments]",
    _ = "[object Array]",
    h = "[object Object]",
    f = Object.prototype.hasOwnProperty;
e.exports = function (e, t, n, p, E, m) {
    var g = l(e),
        A = l(t),
        I = g ? _ : o(e),
        T = A ? _ : o(t);
    (I = I == d ? h : I), (T = T == d ? h : T);
    var S = I == h,
        y = T == h,
        C = I == T;
    if (C && u(e)) {
        if (!u(t)) return !1;
        (g = !0), (S = !1);
    }
    if (C && !S) return m || (m = new i()), g || c(e) ? r(e, t, n, p, E, m) : s(e, t, I, n, p, E, m);
    if (!(1 & n)) {
        var N = S && f.call(e, "__wrapped__"),
            v = y && f.call(t, "__wrapped__");
        if (N || v) {
            var R = N ? e.value() : e,
                O = v ? t.value() : t;
            return m || (m = new i()), E(R, O, n, p, m);
        }
    }
    return !!C && (m || (m = new i()), a(e, t, n, p, E, m));
};
