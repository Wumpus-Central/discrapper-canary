n.d(t, {
    T: () => o,
    Z: () => a
});
var r = n(639119),
    i = n(474936);
function o(e) {
    let { userTrialOffer: t, isGift: n, skuId: r } = e;
    return !n && null != t && null != r && i.nG[t.trial_id].skus.includes(r);
}
function a(e) {
    let { isGift: t, skuId: n, referralTrialOfferId: o } = e,
        a = (0, r.N)(o);
    return !t && null != a && null != n && i.nG[a.trial_id].skus.includes(n);
}
