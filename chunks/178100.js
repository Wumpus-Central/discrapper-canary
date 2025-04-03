n.d(t, { Z: () => o });
var r = n(192379),
    i = n(913527),
    s = n.n(i),
    a = n(55935);
let l = s().duration(30, 'days');
function o(e, t) {
    return r.useMemo(() => (0, a.vc)(t ? (null != e.outboundRedemptionEndDate ? s()(e.outboundRedemptionEndDate) : s()(e.endDate).add(l)) : s()(e.endDate), 'LL'), [e, t]);
}
