"use strict";
n.d(t, { A: () => o });
var r = n(29583),
    i = n(618027),
    s = n(998280),
    a = n(98430);
function o(e, t, n) {
    (0, i.A)(2, arguments);
    var o,
        l,
        u,
        c,
        d,
        _,
        f,
        p,
        h = (0, a.q)(),
        E = (0, s.A)(
            null !=
                (o =
                    null !=
                    (l =
                        null !=
                        (u =
                            null != (c = null == n ? void 0 : n.weekStartsOn)
                                ? c
                                : null == n || null == (d = n.locale) || null == (_ = d.options)
                                  ? void 0
                                  : _.weekStartsOn)
                            ? u
                            : h.weekStartsOn)
                        ? l
                        : null == (f = h.locale) || null == (p = f.options)
                          ? void 0
                          : p.weekStartsOn)
                ? o
                : 0,
        );
    if (!(E >= 0 && E <= 6)) throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var m = (0, r.default)(e),
        g = (0, s.A)(t),
        A = 7 * (((g % 7) + 7) % 7 < E) + g - m.getUTCDay();
    return m.setUTCDate(m.getUTCDate() + A), m;
}
