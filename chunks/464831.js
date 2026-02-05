"use strict";
n.r(t), n.d(t, { default: () => o });
var r = n(29583),
    i = n(998280),
    a = n(618027),
    s = n(98430);
function o(e, t) {
    (0, a.A)(1, arguments);
    var n,
        o,
        l,
        u,
        c,
        d,
        _,
        f,
        p = (0, s.q)(),
        h = (0, i.A)(
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
        g = m.getDay(),
        E = 7 * (g < h) + g - h;
    return m.setDate(m.getDate() - E), m.setHours(0, 0, 0, 0), m;
}
