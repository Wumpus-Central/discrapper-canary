n.d(t, { Z: () => l });
var r = n(193603),
    i = n(951516),
    o = n(780603),
    a = n(217224),
    s = n(633605);
function l(e, t) {
    (0, i.Z)(1, arguments);
    var n,
        l,
        c,
        u,
        d,
        f,
        p,
        _,
        h = (0, s.j)(),
        m = (0, a.Z)(null !== (n = null !== (l = null !== (c = null !== (u = null == t ? void 0 : t.firstWeekContainsDate) && void 0 !== u ? u : null == t ? void 0 : null === (d = t.locale) || void 0 === d ? void 0 : null === (f = d.options) || void 0 === f ? void 0 : f.firstWeekContainsDate) && void 0 !== c ? c : h.firstWeekContainsDate) && void 0 !== l ? l : null === (p = h.locale) || void 0 === p ? void 0 : null === (_ = p.options) || void 0 === _ ? void 0 : _.firstWeekContainsDate) && void 0 !== n ? n : 1),
        g = (0, r.Z)(e, t),
        E = new Date(0);
    return E.setUTCFullYear(g, 0, m), E.setUTCHours(0, 0, 0, 0), (0, o.Z)(E, t);
}
