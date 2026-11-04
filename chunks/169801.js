var l = n(516106),
    i = n(77528),
    r = n(682901);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { isGift: t, skuId: n } = e,
                a = (0, l.t4)((e) => e.referralTrialOfferId ?? void 0),
                s = (0, i.V)(a);
            return !t && null != s && null != n && r.kb[s.trialId].skus.includes(n);
        },
        t: function (e) {
            let { userTrialOffer: t, isGift: n, skuId: l } = e;
            return !n && null != t && null != l && r.kb[t.trialId].skus.includes(l);
        },
    },
);
