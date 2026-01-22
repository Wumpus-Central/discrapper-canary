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
        c,
        u,
        d,
        f,
        p,
        _ = (0, r.q)(),
        h = (0, a.A)(
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
    var m = (0, i.default)(e),
        g = m.getDay(),
        E = (g < h ? -7 : 0) + 6 - (g - h);
    return m.setDate(m.getDate() + E), m.setHours(23, 59, 59, 999), m;
}
