n.d(t, { A: () => l });
var r = n(29583),
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
        h = (0, r.default)(e),
        m = h.getUTCFullYear(),
        g = (0, o.q)(),
        E = (0, s.A)(
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
                            : g.firstWeekContainsDate)
                        ? l
                        : null == (p = g.locale) || null == (_ = p.options)
                          ? void 0
                          : _.firstWeekContainsDate)
                ? n
                : 1,
        );
    if (!(E >= 1 && E <= 7)) throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var b = new Date(0);
    b.setUTCFullYear(m + 1, 0, E), b.setUTCHours(0, 0, 0, 0);
    var y = (0, a.A)(b, t),
        O = new Date(0);
    O.setUTCFullYear(m, 0, E), O.setUTCHours(0, 0, 0, 0);
    var A = (0, a.A)(O, t);
    return h.getTime() >= y.getTime() ? m + 1 : h.getTime() >= A.getTime() ? m : m - 1;
}
