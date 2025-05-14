n.d(t, { Z: () => s });
var r = n(528734),
    i = n(951516),
    o = n(217224),
    a = n(633605);
function s(e, t, n) {
    (0, i.Z)(2, arguments);
    var s,
        l,
        c,
        u,
        d,
        f,
        _,
        p,
        h = (0, a.j)(),
        m = (0, o.Z)(null != (s = null != (l = null != (c = null != (u = null == n ? void 0 : n.weekStartsOn) ? u : null == n || null == (d = n.locale) || null == (f = d.options) ? void 0 : f.weekStartsOn) ? c : h.weekStartsOn) ? l : null == (_ = h.locale) || null == (p = _.options) ? void 0 : p.weekStartsOn) ? s : 0);
    if (!(m >= 0 && m <= 6)) throw RangeError('weekStartsOn must be between 0 and 6 inclusively');
    var g = (0, r.default)(e),
        E = (0, o.Z)(t),
        b = 7 * (((E % 7) + 7) % 7 < m) + E - g.getUTCDay();
    return g.setUTCDate(g.getUTCDate() + b), g;
}
