n.d(t, { A: () => l });
var o = n(64700),
    r = n(997101),
    i = n(17928),
    a = n(615405);
function l() {
    let [e, t] = o.useState(!1),
        [n, l] = o.useState(!1),
        s = (0, i.bG)([a.A], () => r.M.EEA_COUNTRIES.has(a.A.ipCountryCodeWithFallback));
    return {
        hasViewedPurchaseTerms: e,
        setHasViewedPurchaseTerms: t,
        showWithdrawalWaiver: s,
        hasAcceptedWithdrawalWaiver: !s || n,
        setHasAcceptedWithdrawalWaiver: l,
    };
}
