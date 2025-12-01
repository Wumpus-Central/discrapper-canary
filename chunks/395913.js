n.d(t, { Z: () => s });
var r = n(528734),
    i = n(951516),
    a = n(217224),
    o = n(633605);
function s(e, t, n) {
    (0, i.Z)(2, arguments);
    var s,
        l,
        c,
        u,
        d,
        f,
        p,
        _,
        m = (0, o.j)(),
        h = (0, a.Z)(
            null !=
                (s =
                    null !=
                    (l =
                        null !=
                        (c =
                            null != (u = null == n ? void 0 : n.weekStartsOn)
                                ? u
                                : null == n || null == (d = n.locale) || null == (f = d.options)
                                  ? void 0
                                  : f.weekStartsOn)
                            ? c
                            : m.weekStartsOn)
                        ? l
                        : null == (p = m.locale) || null == (_ = p.options)
                          ? void 0
                          : _.weekStartsOn)
                ? s
                : 0,
        );
    if (!(h >= 0 && h <= 6)) throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var g = (0, r.default)(e),
        E = (0, a.Z)(t),
        b = 7 * (((E % 7) + 7) % 7 < h) + E - g.getUTCDay();
    return g.setUTCDate(g.getUTCDate() + b), g;
}
