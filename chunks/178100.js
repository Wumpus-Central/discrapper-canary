n.d(t, { Z: () => o });
var i = n(192379),
    s = n(913527),
    l = n.n(s),
    r = n(55935);
let a = l().duration(30, 'days');
function o(e, t) {
    return i.useMemo(() => (0, r.vc)(t ? (null != e.outboundRedemptionEndDate ? l()(e.outboundRedemptionEndDate) : l()(e.endDate).add(a)) : l()(e.endDate), 'LL'), [e, t]);
}
