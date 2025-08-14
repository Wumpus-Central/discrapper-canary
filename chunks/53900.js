t.d(n, { Z: () => a });
var i = t(442837),
    l = t(853872),
    r = t(78839);
function a() {
    let e = (0, i.e7)([r.Z], () => r.Z.getPremiumTypeSubscription());
    return (0, i.e7)([l.Z], () => {
        var n;
        return (null == e ? void 0 : e.paymentSourceId) != null
            ? null == (n = l.Z.getPaymentSource(e.paymentSourceId))
                ? void 0
                : n.country
            : null;
    });
}
