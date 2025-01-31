n.d(t, { Z: () => s });
var i = n(442837),
    r = n(853872),
    a = n(78839);
function s() {
    let e = (0, i.e7)([a.ZP], () => a.ZP.getPremiumTypeSubscription());
    return (0, i.e7)([r.Z], () => {
        var t;
        return (null == e ? void 0 : e.paymentSourceId) != null ? (null === (t = r.Z.getPaymentSource(e.paymentSourceId)) || void 0 === t ? void 0 : t.country) : null;
    });
}
