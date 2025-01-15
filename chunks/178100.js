n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(192379),
    r = n(913527),
    s = n.n(r),
    a = n(55935);
let l = s().duration(30, 'days');
function o(e, t) {
    return i.useMemo(() => (0, a.vc)(t ? (null != e.outboundRedemptionEndDate ? s()(e.outboundRedemptionEndDate) : s()(e.endDate).add(l)) : s()(e.endDate), 'LL'), [e, t]);
}
