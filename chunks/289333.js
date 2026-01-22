n.d(t, { A: () => o }), n(896048);
var r = n(64700),
    i = n(997101),
    a = n(311907),
    s = n(615405);
function o() {
    let [e, t] = r.useState(!1),
        [n, o] = r.useState(!1),
        l = (0, a.bG)([s.A], () => i.M.EEA_COUNTRIES.has(s.A.ipCountryCodeWithFallback));
    return {
        hasViewedPurchaseTerms: e,
        setHasViewedPurchaseTerms: t,
        showWithdrawalWaiver: l,
        hasAcceptedWithdrawalWaiver: !l || n,
        setHasAcceptedWithdrawalWaiver: o,
    };
}
