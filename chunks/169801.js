n.d(t, { A: () => a, t: () => i });
var l = n(234419),
    r = n(788868);
function i(e) {
    let { userTrialOffer: t, isGift: n, skuId: l } = e;
    return !n && null != t && null != l && r.TP[t.trial_id].skus.includes(l);
}
function a(e) {
    let { isGift: t, skuId: n, referralTrialOfferId: i } = e,
        a = (0, l.V)(i);
    return !t && null != a && null != n && r.TP[a.trial_id].skus.includes(n);
}
