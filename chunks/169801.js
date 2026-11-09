var l = n(120700),
    i = n(516106),
    r = n(77528),
    a = n(682901);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { isGift: t, skuId: n } = e,
                s = (0, i.t4)((e) => e.getTenantParams(l.C.PREMIUM_CHECKOUT)),
                o = null != s ? s.referralTrialOfferId : void 0,
                u = (0, r.V)(o);
            return !t && null != u && null != n && a.kb[u.trialId].skus.includes(n);
        },
        t: function (e) {
            let { userTrialOffer: t, isGift: n, skuId: l } = e;
            return !n && null != t && null != l && a.kb[t.trialId].skus.includes(l);
        },
    },
);
