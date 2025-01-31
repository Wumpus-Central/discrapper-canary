n.d(t, { Z: () => l });
var i = n(193603),
    r = n(951516),
    a = n(780603),
    s = n(217224),
    o = n(633605);
function l(e, t) {
    (0, r.Z)(1, arguments);
    var n,
        l,
        u,
        c,
        d,
        f,
        _,
        p,
        h = (0, o.j)(),
        m = (0, s.Z)(null !== (n = null !== (l = null !== (u = null !== (c = null == t ? void 0 : t.firstWeekContainsDate) && void 0 !== c ? c : null == t ? void 0 : null === (d = t.locale) || void 0 === d ? void 0 : null === (f = d.options) || void 0 === f ? void 0 : f.firstWeekContainsDate) && void 0 !== u ? u : h.firstWeekContainsDate) && void 0 !== l ? l : null === (_ = h.locale) || void 0 === _ ? void 0 : null === (p = _.options) || void 0 === p ? void 0 : p.firstWeekContainsDate) && void 0 !== n ? n : 1),
        g = (0, i.Z)(e, t),
        E = new Date(0);
    return E.setUTCFullYear(g, 0, m), E.setUTCHours(0, 0, 0, 0), (0, a.Z)(E, t);
}
