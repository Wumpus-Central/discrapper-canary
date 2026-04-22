n.d(t, { A: () => r, t: () => a });
var l = n(234419),
    i = n(788868);
function a(e) {
    let { userTrialOffer: t, isGift: n, skuId: l } = e;
    return !n && null != t && null != l && i.TP[t.trial_id].skus.includes(l);
}
function r(e) {
    let { isGift: t, skuId: n, referralTrialOfferId: a } = e,
        r = (0, l.V)(a);
    return !t && null != r && null != n && i.TP[r.trial_id].skus.includes(n);
}
