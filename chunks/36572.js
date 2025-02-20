var r = n(525425),
    i = n(228057),
    o = n(142670),
    a = n(161984),
    s = n(671660),
    l = n(443735),
    c = n(402428),
    u = n(521392),
    d = n(207757),
    f = n(807419),
    p = n(706627),
    _ = n(667066),
    h = n(556868),
    m = n(292065),
    g = n(662506);
function E(e, t, n, E, v, b, y) {
    var O = m(e, n),
        S = m(t, n),
        I = y.get(S);
    if (I) {
        r(e, n, I);
        return;
    }
    var T = b ? b(O, S, n + '', e, t, y) : void 0,
        N = void 0 === T;
    if (N) {
        var A = c(S),
            C = !A && d(S),
            R = !A && !C && h(S);
        (T = S), A || C || R ? (c(O) ? (T = O) : u(O) ? (T = a(O)) : C ? ((N = !1), (T = i(S, !0))) : R ? ((N = !1), (T = o(S, !0))) : (T = [])) : _(S) || l(S) ? ((T = O), l(O) ? (T = g(O)) : (!p(O) || f(O)) && (T = s(S))) : (N = !1);
    }
    N && (y.set(S, T), v(T, S, E, b, y), y.delete(S)), r(e, n, T);
}
e.exports = E;
