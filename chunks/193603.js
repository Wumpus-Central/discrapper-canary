n.d(t, { Z: () => l });
var i = n(528734),
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
        h = (0, i.default)(e),
        m = h.getUTCFullYear(),
        g = (0, o.j)(),
        E = (0, s.Z)(null !== (n = null !== (l = null !== (u = null !== (c = null == t ? void 0 : t.firstWeekContainsDate) && void 0 !== c ? c : null == t ? void 0 : null === (d = t.locale) || void 0 === d ? void 0 : null === (f = d.options) || void 0 === f ? void 0 : f.firstWeekContainsDate) && void 0 !== u ? u : g.firstWeekContainsDate) && void 0 !== l ? l : null === (_ = g.locale) || void 0 === _ ? void 0 : null === (p = _.options) || void 0 === p ? void 0 : p.firstWeekContainsDate) && void 0 !== n ? n : 1);
    if (!(E >= 1 && E <= 7)) throw RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
    var v = new Date(0);
    v.setUTCFullYear(m + 1, 0, E), v.setUTCHours(0, 0, 0, 0);
    var y = (0, a.Z)(v, t),
        I = new Date(0);
    I.setUTCFullYear(m, 0, E), I.setUTCHours(0, 0, 0, 0);
    var T = (0, a.Z)(I, t);
    return h.getTime() >= y.getTime() ? m + 1 : h.getTime() >= T.getTime() ? m : m - 1;
}
