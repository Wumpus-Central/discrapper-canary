"use strict";
n.r(t), n.d(t, { default: () => o });
var r = n(98430),
    i = n(29583),
    a = n(998280),
    s = n(618027);
function o(e, t) {
    (0, s.A)(1, arguments);
    var n,
        o,
        l,
        u,
        c,
        d,
        _,
        f,
        p = (0, r.q)(),
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
    var m = (0, i.default)(e),
        g = m.getDay(),
        E = (g < h ? -7 : 0) + 6 - (g - h);
    return m.setDate(m.getDate() + E), m.setHours(23, 59, 59, 999), m;
}
