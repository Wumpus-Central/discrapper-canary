"use strict";
n.d(t, { A: () => l });
var r = n(29583),
    i = n(618027),
    a = n(327922),
    s = n(998280),
    o = n(98430);
function l(e, t) {
    (0, i.A)(1, arguments);
    var n,
        l,
        u,
        c,
        d,
        _,
        f,
        p,
        h = (0, r.default)(e),
        m = h.getUTCFullYear(),
        g = (0, o.q)(),
        E = (0, s.A)(
            null !=
                (n =
                    null !=
                    (l =
                        null !=
                        (u =
                            null != (c = null == t ? void 0 : t.firstWeekContainsDate)
                                ? c
                                : null == t || null == (d = t.locale) || null == (_ = d.options)
                                  ? void 0
                                  : _.firstWeekContainsDate)
                            ? u
                            : g.firstWeekContainsDate)
                        ? l
                        : null == (f = g.locale) || null == (p = f.options)
                          ? void 0
                          : p.firstWeekContainsDate)
                ? n
                : 1,
        );
    if (!(E >= 1 && E <= 7)) throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var A = new Date(0);
    A.setUTCFullYear(m + 1, 0, E), A.setUTCHours(0, 0, 0, 0);
    var I = (0, a.A)(A, t),
        T = new Date(0);
    T.setUTCFullYear(m, 0, E), T.setUTCHours(0, 0, 0, 0);
    var y = (0, a.A)(T, t);
    return h.getTime() >= I.getTime() ? m + 1 : h.getTime() >= y.getTime() ? m : m - 1;
}
