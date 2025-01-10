t.d(n, {
    Z: function () {
        return l;
    }
});
var i = t(442837),
    r = t(853872),
    a = t(78839);
function l() {
    let e = (0, i.e7)([a.ZP], () => a.ZP.getPremiumTypeSubscription());
    return (0, i.e7)([r.Z], () => {
        var n;
        return (null == e ? void 0 : e.paymentSourceId) != null ? (null === (n = r.Z.getPaymentSource(e.paymentSourceId)) || void 0 === n ? void 0 : n.country) : null;
    });
}
