var i = r(525425),
    a = r(228057),
    o = r(142670),
    s = r(161984),
    l = r(671660),
    u = r(443735),
    c = r(402428),
    d = r(521392),
    f = r(207757),
    p = r(807419),
    h = r(706627),
    _ = r(667066),
    m = r(556868),
    g = r(292065),
    E = r(662506);
function v(e, n, r, v, y, b, I) {
    var T = g(e, r),
        S = g(n, r),
        A = I.get(S);
    if (A) {
        i(e, r, A);
        return;
    }
    var C = b ? b(T, S, r + '', e, n, I) : void 0,
        N = void 0 === C;
    if (N) {
        var R = c(S),
            O = !R && f(S),
            D = !R && !O && m(S);
        (C = S), R || O || D ? (c(T) ? (C = T) : d(T) ? (C = s(T)) : O ? ((N = !1), (C = a(S, !0))) : D ? ((N = !1), (C = o(S, !0))) : (C = [])) : _(S) || u(S) ? ((C = T), u(T) ? (C = E(T)) : (!h(T) || p(T)) && (C = l(S))) : (N = !1);
    }
    N && (I.set(S, C), y(C, S, v, b, I), I.delete(S)), i(e, r, C);
}
e.exports = v;
