var i = n(525425),
    r = n(228057),
    a = n(142670),
    s = n(161984),
    o = n(671660),
    l = n(443735),
    u = n(402428),
    c = n(521392),
    d = n(207757),
    f = n(807419),
    _ = n(706627),
    p = n(667066),
    h = n(556868),
    m = n(292065),
    g = n(662506);
function E(e, t, n, E, v, y, I) {
    var b = m(e, n),
        T = m(t, n),
        S = I.get(T);
    if (S) {
        i(e, n, S);
        return;
    }
    var A = y ? y(b, T, n + '', e, t, I) : void 0,
        N = void 0 === A;
    if (N) {
        var C = u(T),
            R = !C && d(T),
            O = !C && !R && h(T);
        (A = T), C || R || O ? (u(b) ? (A = b) : c(b) ? (A = s(b)) : R ? ((N = !1), (A = r(T, !0))) : O ? ((N = !1), (A = a(T, !0))) : (A = [])) : p(T) || l(T) ? ((A = b), l(b) ? (A = g(b)) : (!_(b) || f(b)) && (A = o(T))) : (N = !1);
    }
    N && (I.set(T, A), v(A, T, E, y, I), I.delete(T)), i(e, n, A);
}
e.exports = E;
