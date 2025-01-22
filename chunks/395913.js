r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(528734),
    a = r(951516),
    o = r(217224),
    s = r(633605);
function l(e, n, r) {
    (0, a.Z)(2, arguments);
    var l,
        u,
        c,
        d,
        f,
        p,
        h,
        _,
        m = (0, s.j)(),
        g = (0, o.Z)(null !== (l = null !== (u = null !== (c = null !== (d = null == r ? void 0 : r.weekStartsOn) && void 0 !== d ? d : null == r ? void 0 : null === (f = r.locale) || void 0 === f ? void 0 : null === (p = f.options) || void 0 === p ? void 0 : p.weekStartsOn) && void 0 !== c ? c : m.weekStartsOn) && void 0 !== u ? u : null === (h = m.locale) || void 0 === h ? void 0 : null === (_ = h.options) || void 0 === _ ? void 0 : _.weekStartsOn) && void 0 !== l ? l : 0);
    if (!(g >= 0 && g <= 6)) throw RangeError('weekStartsOn must be between 0 and 6 inclusively');
    var E = (0, i.default)(e),
        v = (0, o.Z)(n),
        y = (((v % 7) + 7) % 7 < g ? 7 : 0) + v - E.getUTCDay();
    return E.setUTCDate(E.getUTCDate() + y), E;
}
