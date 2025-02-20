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
        p,
        _,
        h = (0, a.j)(),
        m = (0, o.Z)(null !== (s = null !== (l = null !== (c = null !== (u = null == n ? void 0 : n.weekStartsOn) && void 0 !== u ? u : null == n ? void 0 : null === (d = n.locale) || void 0 === d ? void 0 : null === (f = d.options) || void 0 === f ? void 0 : f.weekStartsOn) && void 0 !== c ? c : h.weekStartsOn) && void 0 !== l ? l : null === (p = h.locale) || void 0 === p ? void 0 : null === (_ = p.options) || void 0 === _ ? void 0 : _.weekStartsOn) && void 0 !== s ? s : 0);
    if (!(m >= 0 && m <= 6)) throw RangeError('weekStartsOn must be between 0 and 6 inclusively');
    var g = (0, r.default)(e),
        E = (0, o.Z)(t),
        v = 7 * (((E % 7) + 7) % 7 < m) + E - g.getUTCDay();
    return g.setUTCDate(g.getUTCDate() + v), g;
}
