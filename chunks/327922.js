"use strict";
n.d(t, { A: () => o });
var r = n(29583),
    i = n(618027),
    s = n(998280),
    a = n(98430);
function o(e, t) {
    (0, i.A)(1, arguments);
    var n,
        o,
        l,
        u,
        d,
        c,
        _,
        f,
        E = (0, a.q)(),
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
    var p = (0, r.default)(e),
        m = p.getUTCDay();
    return p.setUTCDate(p.getUTCDate() - (7 * (m < h) + m - h)), p.setUTCHours(0, 0, 0, 0), p;
}
