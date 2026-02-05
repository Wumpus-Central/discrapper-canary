"use strict";
n.d(t, { A: () => o });
var r = n(29583),
    i = n(618027),
    a = n(998280),
    s = n(98430);
function o(e, t) {
    (0, i.A)(1, arguments);
    var n,
        o,
        l,
        u,
        c,
        d,
        _,
        f,
        p = (0, s.q)(),
        h = (0, a.A)(
            null !=
                (n =
                    null !=
                    (o =
                        null !=
                        (l =
                            null != (u = null == t ? void 0 : t.weekStartsOn)
                                ? u
                                : null == t || null == (c = t.locale) || null == (d = c.options)
                                  ? void 0
                                  : d.weekStartsOn)
                            ? l
                            : p.weekStartsOn)
                        ? o
                        : null == (_ = p.locale) || null == (f = _.options)
                          ? void 0
                          : f.weekStartsOn)
                ? n
                : 0,
        );
    if (!(h >= 0 && h <= 6)) throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var m = (0, r.default)(e),
        g = m.getUTCDay(),
        E = 7 * (g < h) + g - h;
    return m.setUTCDate(m.getUTCDate() - E), m.setUTCHours(0, 0, 0, 0), m;
}
