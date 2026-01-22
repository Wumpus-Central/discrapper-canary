n.d(t, { A: () => l });
var r = n(564804),
    i = n(618027),
    a = n(327922),
    s = n(998280),
    o = n(98430);
function l(e, t) {
    (0, i.A)(1, arguments);
    var n,
        l,
        c,
        u,
        d,
        f,
        p,
        _,
        h = (0, o.q)(),
        m = (0, s.A)(
            null !=
                (n =
                    null !=
                    (l =
                        null !=
                        (c =
                            null != (u = null == t ? void 0 : t.firstWeekContainsDate)
                                ? u
                                : null == t || null == (d = t.locale) || null == (f = d.options)
                                  ? void 0
                                  : f.firstWeekContainsDate)
                            ? c
                            : h.firstWeekContainsDate)
                        ? l
                        : null == (p = h.locale) || null == (_ = p.options)
                          ? void 0
                          : _.firstWeekContainsDate)
                ? n
                : 1,
        ),
        g = (0, r.A)(e, t),
        E = new Date(0);
    return E.setUTCFullYear(g, 0, m), E.setUTCHours(0, 0, 0, 0), (0, a.A)(E, t);
}
