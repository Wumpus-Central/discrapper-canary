"use strict";
n.d(t, { A: () => l });
var r = n(564804),
    i = n(618027),
    s = n(327922),
    a = n(998280),
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
        h = (0, o.q)(),
        E = (0, a.A)(
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
                            : h.firstWeekContainsDate)
                        ? l
                        : null == (f = h.locale) || null == (p = f.options)
                          ? void 0
                          : p.firstWeekContainsDate)
                ? n
                : 1,
        ),
        m = (0, r.A)(e, t),
        g = new Date(0);
    return g.setUTCFullYear(m, 0, E), g.setUTCHours(0, 0, 0, 0), (0, s.A)(g, t);
}
