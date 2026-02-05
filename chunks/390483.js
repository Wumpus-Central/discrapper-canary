"use strict";
r.d(t, { A: () => x });
var n = r(292704),
    o = r(290685),
    a = r(911114),
    i = r(656464),
    l = r(160010),
    s = r(912853),
    u = r(5264),
    c = r(586116),
    p = r(776931),
    d = r(807361),
    f = r(842922),
    h = r(991494),
    b = r(625824),
    v = r(644861),
    g = r(930733);
let x = function (e, t, r, x, y, m, w) {
    var A = (0, v.A)(e, r),
        E = (0, v.A)(t, r),
        C = w.get(E);
    if (C) return void (0, n.A)(e, r, C);
    var _ = m ? m(A, E, r + "", e, t, w) : void 0,
        O = void 0 === _;
    if (O) {
        var j = (0, u.A)(E),
            k = !j && (0, p.A)(E),
            S = !j && !k && (0, b.A)(E);
        (_ = E),
            j || k || S
                ? (0, u.A)(A)
                    ? (_ = A)
                    : (0, c.A)(A)
                      ? (_ = (0, i.A)(A))
                      : k
                        ? ((O = !1), (_ = (0, o.A)(E, !0)))
                        : S
                          ? ((O = !1), (_ = (0, a.A)(E, !0)))
                          : (_ = [])
                : (0, h.A)(E) || (0, s.A)(E)
                  ? ((_ = A), (0, s.A)(A) ? (_ = (0, g.A)(A)) : (!(0, f.A)(A) || (0, d.A)(A)) && (_ = (0, l.A)(E)))
                  : (O = !1);
    }
    O && (w.set(E, _), y(_, E, x, m, w), w.delete(E)), (0, n.A)(e, r, _);
};
