var l = n(582128),
    i = n(423814),
    r = n(77528),
    a = n(563020),
    s = n(120700),
    o = n(516106),
    u = n(652215),
    c = n(682901);
n.d(
    t,
    {},
    {
        R: function (e) {
            let { hasOpenInvoice: t } = e,
                {
                    activeSubscription: n,
                    unifiedCheckoutFlow: i,
                    setStartingIsInPastDueCheckout: r,
                } = (0, o.t4)((e) => ({
                    activeSubscription: e.activeSubscription,
                    unifiedCheckoutFlow: e.unifiedCheckoutFlow,
                    setStartingIsInPastDueCheckout: e.setStartingIsInPastDueCheckout,
                })),
                a = i === s.C.PREMIUM_CHECKOUT && null != n && n.status === u.Dmq.PAST_DUE && t;
            return (
                l.useEffect(() => {
                    a && r(!0);
                }, [a, r]),
                a
            );
        },
        i: function () {
            let {
                    checkoutInvoicePreview: e,
                    selectedSkuId: t,
                    isPremium: n,
                    isPremiumGroupPurchase: s,
                    referralTrialOfferId: u,
                    isGift: d,
                } = (0, o.t4)((e) => {
                    let t = e.get("selectedPlanAttributes");
                    return {
                        checkoutInvoicePreview: e.checkoutInvoicePreview,
                        selectedSkuId: e.selectedSkuId,
                        referralTrialOfferId: e.referralTrialOfferId,
                        isGift: e.isGift,
                        isPremium: t.isPremiumPurchase,
                        isPremiumGroupPurchase: t.isPremiumGroupPurchase,
                    };
                }),
                m = (0, r.V)(u ?? void 0),
                p = !s && !d && null != t,
                h = !!(p && null != m && c.kb[m.trialId].skus.includes(t) && !s),
                C = (0, i.O)(),
                f =
                    null != t &&
                    null != C &&
                    null != C.discount &&
                    null != C.discount.planIds &&
                    C.discount.planIds.some((e) => c.hd[e].skuId === t),
                E = !!(p && null != C && f),
                S = l.useMemo(
                    () => null != C && null != C.discount && null != e && (0, a.Ro)(e, C.discount.id),
                    [C, e],
                );
            return l.useMemo(
                () => ({
                    isPremium: n,
                    isPremiumGroupPurchase: s,
                    isEligibleForTrial: h,
                    isEligibleForDiscount: E,
                    userTrialOffer: m,
                    discountOffer: C,
                    currentInvoiceHasMatchingDiscountOffer: S,
                }),
                [n, s, h, E, m, C, S],
            );
        },
    },
);
