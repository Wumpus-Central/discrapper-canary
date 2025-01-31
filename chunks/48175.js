n.d(t, {
    T: () => a,
    Z: () => s
});
var i = n(639119),
    r = n(474936);
function a(e) {
    let { userTrialOffer: t, isGift: n, skuId: i } = e;
    return !n && null != t && null != i && r.nG[t.trial_id].skus.includes(i);
}
function s(e) {
    let { isGift: t, skuId: n, referralTrialOfferId: a } = e,
        s = (0, i.N)(a);
    return !t && null != s && null != n && r.nG[s.trial_id].skus.includes(n);
}
