"use strict";
n.d(t, { A: () => l });
var i = n(311907),
    r = n(295405),
    a = n(166403);
function l() {
    let e = (0, i.bG)([a.A], () => a.A.getPremiumTypeSubscription());
    return (0, i.bG)([r.A], () =>
        e?.paymentSourceId != null ? r.A.getPaymentSource(e.paymentSourceId)?.country : null,
    );
}
