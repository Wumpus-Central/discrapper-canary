t.d(n, { A: () => s });
var i = t(311907),
    l = t(295405),
    r = t(166403);
function s() {
    let e = (0, i.bG)([r.A], () => r.A.getPremiumTypeSubscription());
    return (0, i.bG)([l.A], () =>
        e?.paymentSourceId != null ? l.A.getPaymentSource(e.paymentSourceId)?.country : null,
    );
}
