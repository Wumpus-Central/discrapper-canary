n.d(t, { Z: () => o });
var i = n(192379),
    s = n(913527),
    r = n.n(s),
    l = n(55935);
let a = r().duration(30, 'days');
function o(e, t) {
    return i.useMemo(() => (0, l.vc)(t ? (null != e.outboundRedemptionEndDate ? r()(e.outboundRedemptionEndDate) : r()(e.endDate).add(a)) : r()(e.endDate), 'LL'), [e, t]);
}
