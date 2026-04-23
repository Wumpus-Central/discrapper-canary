"use strict";
n.d(t, { A: () => o });
var r = n(64700),
    i = n(997101),
    s = n(311907),
    a = n(615405);
function o() {
    let [e, t] = r.useState(!1),
        [n, o] = r.useState(!1),
        l = (0, s.bG)([a.A], () => i.M.EEA_COUNTRIES.has(a.A.ipCountryCodeWithFallback));
    return {
        hasViewedPurchaseTerms: e,
        setHasViewedPurchaseTerms: t,
        showWithdrawalWaiver: l,
        hasAcceptedWithdrawalWaiver: !l || n,
        setHasAcceptedWithdrawalWaiver: o,
    };
}
