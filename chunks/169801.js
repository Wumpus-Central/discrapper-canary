n.d(t, { A: () => s, t: () => a });
var l = n(721836),
    i = n(732280),
    r = n(202541);
function a(e) {
    let { userTrialOffer: t, isGift: n, skuId: l } = e;
    return !n && null != t && null != l && r.TP[t.trialId].skus.includes(l);
}
function s(e) {
    let { isGift: t, skuId: n } = e,
        a = (0, l.t4)((e) => e.referralTrialOfferId ?? void 0),
        s = (0, i.V)(a);
    return !t && null != s && null != n && r.TP[s.trialId].skus.includes(n);
}
