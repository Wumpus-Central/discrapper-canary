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
                C = (0, r.V)(p),
                h = !u && !m && null != t,
                f = !!(h && null != C && c.kb[C.trialId].skus.includes(t) && !u),
                E = (0, i.O)(),
                S =
                    null != t &&
                    null != E &&
                    null != E.discount &&
                    null != E.discount.planIds &&
                    E.discount.planIds.some((e) => c.hd[e].skuId === t),
                g = !!(h && null != E && S),
                I = l.useMemo(
                    () => null != E && null != E.discount && null != e && (0, a.Ro)(e, E.discount.id),
                    [E, e],
                );
            return l.useMemo(
                () => ({
                    isPremium: n,
                    isPremiumGroupPurchase: u,
                    isEligibleForTrial: f,
                    isEligibleForDiscount: g,
                    userTrialOffer: C,
                    discountOffer: E,
                    currentInvoiceHasMatchingDiscountOffer: I,
                }),
                [n, u, f, g, C, E, I],
            );
        },
    },
);
