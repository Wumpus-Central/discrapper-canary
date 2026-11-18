var l = n(582128),
    i = n(423814),
    r = n(77528),
    a = n(563020),
    s = n(120700),
    o = n(682689),
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
                    isPremiumGroupPurchase: u,
                    premiumTenantParams: d,
                    isGift: m,
                } = (0, o.t4)((e) => {
                    let t = e.get("selectedPlanAttributes");
                    return {
                        checkoutInvoicePreview: e.checkoutInvoicePreview,
                        selectedSkuId: e.selectedSkuId,
                        premiumTenantParams: e.getTenantParams(s.C.PREMIUM_CHECKOUT) ?? {},
                        isGift: e.isGift,
                        isPremium: t.isPremiumPurchase,
                        isPremiumGroupPurchase: t.isPremiumGroupPurchase,
                    };
                }),
                { referralTrialOfferId: p } = d,
                h = (0, r.V)(p),
                C = !u && !m && null != t,
                f = !!(C && null != h && c.kb[h.trialId].skus.includes(t) && !u),
                S = (0, i.O)(),
                E =
                    null != t &&
                    null != S &&
                    null != S.discount &&
                    null != S.discount.planIds &&
                    S.discount.planIds.some((e) => c.hd[e].skuId === t),
                I = !!(C && null != S && E),
                g = l.useMemo(
                    () => null != S && null != S.discount && null != e && (0, a.Ro)(e, S.discount.id),
                    [S, e],
                );
            return l.useMemo(
                () => ({
                    isPremium: n,
                    isPremiumGroupPurchase: u,
                    isEligibleForTrial: f,
                    isEligibleForDiscount: I,
                    userTrialOffer: h,
                    discountOffer: S,
                    currentInvoiceHasMatchingDiscountOffer: g,
                }),
                [n, u, f, I, h, S, g],
            );
        },
    },
);
