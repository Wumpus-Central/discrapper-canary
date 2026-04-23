n.d(t, { A: () => l });
var r = n(64700),
    a = n(997101),
    i = n(17928),
    o = n(615405);
function l() {
    let [e, t] = r.useState(!1),
        [n, l] = r.useState(!1),
        s = (0, i.bG)([o.A], () => a.M.EEA_COUNTRIES.has(o.A.ipCountryCodeWithFallback));
    return {
        hasViewedPurchaseTerms: e,
        setHasViewedPurchaseTerms: t,
        showWithdrawalWaiver: s,
        hasAcceptedWithdrawalWaiver: !s || n,
        setHasAcceptedWithdrawalWaiver: l,
    };
}
