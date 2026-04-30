n.d(t, { A: () => l });
var o = n(64700),
    r = n(997101),
    a = n(17928),
    i = n(615405);
function l() {
    let [e, t] = o.useState(!1),
        [n, l] = o.useState(!1),
        u = (0, a.bG)([i.A], () => r.M.EEA_COUNTRIES.has(i.A.ipCountryCodeWithFallback));
    return {
        hasViewedPurchaseTerms: e,
        setHasViewedPurchaseTerms: t,
        showWithdrawalWaiver: u,
        hasAcceptedWithdrawalWaiver: !u || n,
        setHasAcceptedWithdrawalWaiver: l,
    };
}
