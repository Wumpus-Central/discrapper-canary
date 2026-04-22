var r = n(655405),
    i = n(822339),
    s = n(473334),
    a = n(825933),
    o = n(189577),
    l = n(467957),
    u = n(154164),
    d = n(579571),
    c = "[object Arguments]",
    _ = "[object Array]",
    f = "[object Object]",
    E = Object.prototype.hasOwnProperty;
e.exports = function (e, t, n, h, p, m) {
    var g = l(e),
        A = l(t),
        I = g ? _ : o(e),
        T = A ? _ : o(t);
    (I = I == c ? f : I), (T = T == c ? f : T);
    var S = I == f,
        y = T == f,
        N = I == T;
    if (N && u(e)) {
        if (!u(t)) return !1;
        (g = !0), (S = !1);
    }
    if (N && !S) return m || (m = new r()), g || d(e) ? i(e, t, n, h, p, m) : s(e, t, I, n, h, p, m);
    if (!(1 & n)) {
        var O = S && E.call(e, "__wrapped__"),
            R = y && E.call(t, "__wrapped__");
        if (O || R) {
            var v = O ? e.value() : e,
                C = R ? t.value() : t;
            return m || (m = new r()), p(v, C, n, h, m);
        }
    }
    return !!N && (m || (m = new r()), a(e, t, n, h, p, m));
};
