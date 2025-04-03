var n = r(525425),
    o = r(228057),
    a = r(142670),
    i = r(161984),
    l = r(671660),
    s = r(443735),
    u = r(402428),
    c = r(521392),
    p = r(207757),
    f = r(807419),
    d = r(706627),
    h = r(667066),
    b = r(556868),
    v = r(292065),
    g = r(662506);
e.exports = function (e, t, r, x, y, m, w) {
    var Z = v(e, r),
        E = v(t, r),
        C = w.get(E);
    if (C) return void n(e, r, C);
    var O = m ? m(Z, E, r + '', e, t, w) : void 0,
        _ = void 0 === O;
    if (_) {
        var k = u(E),
            S = !k && p(E),
            j = !k && !S && b(E);
        (O = E), k || S || j ? (u(Z) ? (O = Z) : c(Z) ? (O = i(Z)) : S ? ((_ = !1), (O = o(E, !0))) : j ? ((_ = !1), (O = a(E, !0))) : (O = [])) : h(E) || s(E) ? ((O = Z), s(Z) ? (O = g(Z)) : (!d(Z) || f(Z)) && (O = l(E))) : (_ = !1);
    }
    _ && (w.set(E, O), y(O, E, x, m, w), w.delete(E)), n(e, r, O);
};
