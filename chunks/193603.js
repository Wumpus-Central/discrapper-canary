r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(528734),
    a = r(951516),
    o = r(780603),
    s = r(217224),
    l = r(633605);
function u(e, n) {
    (0, a.Z)(1, arguments);
    var r,
        u,
        c,
        d,
        f,
        p,
        h,
        _,
        m = (0, i.default)(e),
        g = m.getUTCFullYear(),
        E = (0, l.j)(),
        v = (0, s.Z)(null !== (r = null !== (u = null !== (c = null !== (d = null == n ? void 0 : n.firstWeekContainsDate) && void 0 !== d ? d : null == n ? void 0 : null === (f = n.locale) || void 0 === f ? void 0 : null === (p = f.options) || void 0 === p ? void 0 : p.firstWeekContainsDate) && void 0 !== c ? c : E.firstWeekContainsDate) && void 0 !== u ? u : null === (h = E.locale) || void 0 === h ? void 0 : null === (_ = h.options) || void 0 === _ ? void 0 : _.firstWeekContainsDate) && void 0 !== r ? r : 1);
    if (!(v >= 1 && v <= 7)) throw RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
    var y = new Date(0);
    y.setUTCFullYear(g + 1, 0, v), y.setUTCHours(0, 0, 0, 0);
    var b = (0, o.Z)(y, n),
        I = new Date(0);
    I.setUTCFullYear(g, 0, v), I.setUTCHours(0, 0, 0, 0);
    var T = (0, o.Z)(I, n);
    return m.getTime() >= b.getTime() ? g + 1 : m.getTime() >= T.getTime() ? g : g - 1;
}
