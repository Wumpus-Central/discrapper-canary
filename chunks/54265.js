n.d(t, {
    A: () => o,
});
var r = n(29583),
    i = n(618027),
    a = n(998280),
    s = n(98430);

function o(e, t, n) {
    (0, i.A)(2, arguments);
    var o,
        l,
        c,
        u,
        d,
        f,
        p,
        _,
        h = (0, s.q)(),
        m = (0, a.A)(
            null !=
                (o =
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
                            : h.weekStartsOn)
                        ? l
                        : null == (p = h.locale) || null == (_ = p.options)
                          ? void 0
                          : _.weekStartsOn)
                ? o
                : 0,
        );
    if (!(m >= 0 && m <= 6)) throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var g = (0, r.default)(e),
        E = (0, a.A)(t),
        b = 7 * (((E % 7) + 7) % 7 < m) + E - g.getUTCDay();
    return g.setUTCDate(g.getUTCDate() + b), g;
}
