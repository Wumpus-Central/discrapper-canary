n.d(t, { Z: () => l });
var r = n(528734),
    i = n(951516),
    a = n(780603),
    o = n(217224),
    s = n(633605);
function l(e, t) {
    (0, i.Z)(1, arguments);
    var n,
        l,
        c,
        u,
        d,
        f,
        _,
        p,
        h = (0, r.default)(e),
        m = h.getUTCFullYear(),
        g = (0, s.j)(),
        E = (0, o.Z)(null != (n = null != (l = null != (c = null != (u = null == t ? void 0 : t.firstWeekContainsDate) ? u : null == t || null == (d = t.locale) || null == (f = d.options) ? void 0 : f.firstWeekContainsDate) ? c : g.firstWeekContainsDate) ? l : null == (_ = g.locale) || null == (p = _.options) ? void 0 : p.firstWeekContainsDate) ? n : 1);
    if (!(E >= 1 && E <= 7)) throw RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
    var b = new Date(0);
    b.setUTCFullYear(m + 1, 0, E), b.setUTCHours(0, 0, 0, 0);
    var y = (0, a.Z)(b, t),
        O = new Date(0);
    O.setUTCFullYear(m, 0, E), O.setUTCHours(0, 0, 0, 0);
    var v = (0, a.Z)(O, t);
    return h.getTime() >= y.getTime() ? m + 1 : h.getTime() >= v.getTime() ? m : m - 1;
}
