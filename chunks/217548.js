var n = r(337273),
    o = r(960798),
    a = r(488165),
    i = r(672587),
    l = r(762629),
    s = r(817584),
    u = r(467957),
    c = r(599769),
    p = r(154164),
    d = r(99302),
    f = r(509185),
    h = r(675279),
    b = r(579571),
    v = r(9226),
    g = r(261656);
e.exports = function (e, t, r, x, y, m, w) {
    var A = v(e, r),
        E = v(t, r),
        C = w.get(E);
    if (C) return void n(e, r, C);
    var _ = m ? m(A, E, r + "", e, t, w) : void 0,
        O = void 0 === _;
    if (O) {
        var j = u(E),
            k = !j && p(E),
            S = !j && !k && b(E);
        (_ = E),
            j || k || S
                ? u(A)
                    ? (_ = A)
                    : c(A)
                      ? (_ = i(A))
                      : k
                        ? ((O = !1), (_ = o(E, !0)))
                        : S
                          ? ((O = !1), (_ = a(E, !0)))
                          : (_ = [])
                : h(E) || s(E)
                  ? ((_ = A), s(A) ? (_ = g(A)) : (!f(A) || d(A)) && (_ = l(E)))
                  : (O = !1);
    }
    O && (w.set(E, _), y(_, E, x, m, w), w.delete(E)), n(e, r, _);
};
