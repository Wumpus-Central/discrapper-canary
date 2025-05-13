n.d(t, {
    T: () => a,
    Z: () => o
});
var r = n(639119),
    i = n(474936);
function a(e) {
    let { userTrialOffer: t, isGift: n, skuId: r } = e;
    return !n && null != t && null != r && i.nG[t.trial_id].skus.includes(r);
}
function o(e) {
    let { isGift: t, skuId: n, referralTrialOfferId: a } = e,
        o = (0, r.N)(a);
    return !t && null != o && null != n && i.nG[o.trial_id].skus.includes(n);
}
