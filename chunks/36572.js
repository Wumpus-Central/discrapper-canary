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
    var T = m(e, n),
        b = m(t, n),
        S = I.get(b);
    if (S) {
        i(e, n, S);
        return;
    }
    var A = y ? y(T, b, n + '', e, t, I) : void 0,
        N = void 0 === A;
    if (N) {
        var C = u(b),
            R = !C && d(b),
            O = !C && !R && h(b);
        (A = b), C || R || O ? (u(T) ? (A = T) : c(T) ? (A = s(T)) : R ? ((N = !1), (A = r(b, !0))) : O ? ((N = !1), (A = a(b, !0))) : (A = [])) : p(b) || l(b) ? ((A = T), l(T) ? (A = g(T)) : (!_(T) || f(T)) && (A = o(b))) : (N = !1);
    }
    N && (I.set(b, A), v(A, b, E, y, I), I.delete(b)), i(e, n, A);
}
e.exports = E;
