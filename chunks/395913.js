n.d(t, { Z: () => o });
var i = n(528734),
    r = n(951516),
    a = n(217224),
    s = n(633605);
function o(e, t, n) {
    (0, r.Z)(2, arguments);
    var o,
        l,
        u,
        c,
        d,
        f,
        _,
        p,
        h = (0, s.j)(),
        m = (0, a.Z)(null !== (o = null !== (l = null !== (u = null !== (c = null == n ? void 0 : n.weekStartsOn) && void 0 !== c ? c : null == n ? void 0 : null === (d = n.locale) || void 0 === d ? void 0 : null === (f = d.options) || void 0 === f ? void 0 : f.weekStartsOn) && void 0 !== u ? u : h.weekStartsOn) && void 0 !== l ? l : null === (_ = h.locale) || void 0 === _ ? void 0 : null === (p = _.options) || void 0 === p ? void 0 : p.weekStartsOn) && void 0 !== o ? o : 0);
    if (!(m >= 0 && m <= 6)) throw RangeError('weekStartsOn must be between 0 and 6 inclusively');
    var g = (0, i.default)(e),
        E = (0, a.Z)(t),
        v = (((E % 7) + 7) % 7 < m ? 7 : 0) + E - g.getUTCDay();
    return g.setUTCDate(g.getUTCDate() + v), g;
}
