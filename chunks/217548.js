var n = r(337273),
    o = r(960798),
    a = r(488165),
    i = r(672587),
    l = r(762629),
    s = r(817584),
    u = r(467957),
    p = r(599769),
    c = r(154164),
    f = r(99302),
    d = r(509185),
    h = r(675279),
    b = r(579571),
    v = r(9226),
    g = r(261656);
e.exports = function (e, t, r, x, y, m, w) {
    var E = v(e, r),
        C = v(t, r),
        O = w.get(C);
    if (O) return void n(e, r, O);
    var _ = m ? m(E, C, r + "", e, t, w) : void 0,
        S = void 0 === _;
    if (S) {
        var k = u(C),
            j = !k && c(C),
            R = !k && !j && b(C);
        (_ = C),
            k || j || R
                ? u(E)
                    ? (_ = E)
                    : p(E)
                      ? (_ = i(E))
                      : j
                        ? ((S = !1), (_ = o(C, !0)))
                        : R
                          ? ((S = !1), (_ = a(C, !0)))
                          : (_ = [])
                : h(C) || s(C)
                  ? ((_ = E), s(E) ? (_ = g(E)) : (!d(E) || f(E)) && (_ = l(C)))
                  : (S = !1);
    }
    S && (w.set(C, _), y(_, C, x, m, w), w.delete(C)), n(e, r, _);
};
