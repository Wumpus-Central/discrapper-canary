n.d(t, {
    A: () => s,
    t: () => a,
});
var r = n(234419),
    i = n(788868);

function a(e) {
    let { userTrialOffer: t, isGift: n, skuId: r } = e;
    return !n && null != t && null != r && i.TP[t.trial_id].skus.includes(r);
}

function s(e) {
    let { isGift: t, skuId: n, referralTrialOfferId: a } = e,
        s = (0, r.V)(a);
    return !t && null != s && null != n && i.TP[s.trial_id].skus.includes(n);
}
