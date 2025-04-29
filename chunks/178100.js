n.d(t, { Z: () => o });
var i = n(73800),
    r = n(913527),
    s = n.n(r),
    l = n(55935);
let a = s().duration(30, 'days');
function o(e, t) {
    return i.useMemo(() => (0, l.vc)(t ? (null != e.outboundRedemptionEndDate ? s()(e.outboundRedemptionEndDate) : s()(e.endDate).add(a)) : s()(e.endDate), 'LL'), [e, t]);
}
