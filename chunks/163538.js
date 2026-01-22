n.d(t, {
    A: () => s,
});
var r = n(311907),
    i = n(295405),
    a = n(166403);

function s() {
    let e = (0, r.bG)([a.A], () => a.A.getPremiumTypeSubscription());
    return (0, r.bG)([i.A], () => {
        var t;
        return (null == e ? void 0 : e.paymentSourceId) != null
            ? null == (t = i.A.getPaymentSource(e.paymentSourceId))
                ? void 0
                : t.country
            : null;
    });
}
