n.d(t, { Z: () => l });
var r = n(528734),
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
        h = (0, r.default)(e),
        m = h.getUTCFullYear(),
        g = (0, s.j)(),
        E = (0, a.Z)(null !== (n = null !== (l = null !== (c = null !== (u = null == t ? void 0 : t.firstWeekContainsDate) && void 0 !== u ? u : null == t ? void 0 : null === (d = t.locale) || void 0 === d ? void 0 : null === (f = d.options) || void 0 === f ? void 0 : f.firstWeekContainsDate) && void 0 !== c ? c : g.firstWeekContainsDate) && void 0 !== l ? l : null === (p = g.locale) || void 0 === p ? void 0 : null === (_ = p.options) || void 0 === _ ? void 0 : _.firstWeekContainsDate) && void 0 !== n ? n : 1);
    if (!(E >= 1 && E <= 7)) throw RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
    var v = new Date(0);
    v.setUTCFullYear(m + 1, 0, E), v.setUTCHours(0, 0, 0, 0);
    var b = (0, o.Z)(v, t),
        y = new Date(0);
    y.setUTCFullYear(m, 0, E), y.setUTCHours(0, 0, 0, 0);
    var O = (0, o.Z)(y, t);
    return h.getTime() >= b.getTime() ? m + 1 : h.getTime() >= O.getTime() ? m : m - 1;
}
