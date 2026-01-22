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
        c,
        u,
        d,
        f,
        p,
        _ = (0, s.q)(),
        h = (0, i.A)(
            null !=
                (n =
                    null !=
                    (o =
                        null !=
                        (l =
                            null != (c = null == t ? void 0 : t.weekStartsOn)
                                ? c
                                : null == t || null == (u = t.locale) || null == (d = u.options)
                                  ? void 0
                                  : d.weekStartsOn)
                            ? l
                            : _.weekStartsOn)
                        ? o
                        : null == (f = _.locale) || null == (p = f.options)
                          ? void 0
                          : p.weekStartsOn)
                ? n
                : 0,
        );
    if (!(h >= 0 && h <= 6)) throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var m = (0, r.default)(e),
        g = m.getDay(),
        E = 7 * (g < h) + g - h;
    return m.setDate(m.getDate() - E), m.setHours(0, 0, 0, 0), m;
}
