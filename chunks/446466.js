"use strict";
n.r(t), n.d(t, { default: () => o });
var r = n(98430),
    i = n(29583),
    s = n(998280),
    a = n(618027);
function o(e, t) {
    (0, a.A)(1, arguments);
    var n,
        o,
        l,
        u,
        d,
        c,
        _,
        f,
        E = (0, r.q)(),
        h = (0, s.A)(
            null !=
                (n =
                    null !=
                    (o =
                        null !=
                        (l =
                            null != (u = null == t ? void 0 : t.weekStartsOn)
                                ? u
                                : null == t || null == (d = t.locale) || null == (c = d.options)
                                  ? void 0
                                  : c.weekStartsOn)
                            ? l
                            : E.weekStartsOn)
                        ? o
                        : null == (_ = E.locale) || null == (f = _.options)
                          ? void 0
                          : f.weekStartsOn)
                ? n
                : 0,
        );
    if (!(h >= 0 && h <= 6)) throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var p = (0, i.default)(e),
        m = p.getDay();
    return p.setDate(p.getDate() + ((m < h ? -7 : 0) + 6 - (m - h))), p.setHours(23, 59, 59, 999), p;
}
