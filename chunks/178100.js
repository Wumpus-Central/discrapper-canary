n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(192379),
    s = n(913527),
    r = n.n(s),
    a = n(55935);
let l = r().duration(30, 'days');
function o(e, t) {
    return i.useMemo(() => (0, a.vc)(t ? (null != e.outboundRedemptionEndDate ? r()(e.outboundRedemptionEndDate) : r()(e.endDate).add(l)) : r()(e.endDate), 'LL'), [e, t]);
}
