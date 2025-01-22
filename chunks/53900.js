r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(442837),
    a = r(853872),
    o = r(78839);
function s() {
    let e = (0, i.e7)([o.ZP], () => o.ZP.getPremiumTypeSubscription());
    return (0, i.e7)([a.Z], () => {
        var n;
        return (null == e ? void 0 : e.paymentSourceId) != null ? (null === (n = a.Z.getPaymentSource(e.paymentSourceId)) || void 0 === n ? void 0 : n.country) : null;
    });
}
