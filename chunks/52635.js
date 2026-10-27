n.d(t, { EB: () => C, T3: () => f });
var l = n(477900),
    i = n(582128),
    r = n(17928),
    a = n(206828),
    s = n(587895),
    o = n(120700),
    u = n(818824),
    c = n(25149),
    d = n(123816),
    m = n(67480),
    p = n(951305),
    h = n(652215);
function C(e) {
    let {
            skuId: t,
            paymentSourceType: n = null,
            purchaseButtonText: i,
            isGift: o,
            checkoutLegalType: p = c.I0.GiftGameShop,
            hasSeparateAccountLinkNotice: C = !1,
        } = e,
        { immediateDelivery: f } = (0, u.U)(),
        E = (function (e) {
            let {
                    skuId: t,
                    purchaseButtonText: n,
                    checkoutLegalType: l = c.I0.OrbsGameShop,
                    isGift: i = !1,
                    hasSeparateAccountLinkNotice: o = !1,
                } = e,
                { checkoutReviewButtonLabel: u } = (0, d.t4)((e) => ({
                    checkoutReviewButtonLabel: e.checkoutReviewButtonLabel,
                })),
                p = (0, r.bG)([m.A], () => m.A.get(t), [t]),
                C = p?.productLine,
                f = p?.applicationId,
                E = (0, r.bG)([s.A], () => (C === h.EZt.SOCIAL_LAYER_GAME_ITEM ? s.A.getApplication(f) : null), [f, C]),
                { fetched: S, hasAlreadyLinked: g } = (0, a.RD)(E);
            return {
                type: l,
                purchaseButtonText: n ?? u,
                applicationName: E?.name,
                applicationId: f,
                shouldAppendDisclaimer: i || (S && (o ? g : !g)),
            };
        })({ skuId: t, purchaseButtonText: i, isGift: o, checkoutLegalType: p, hasSeparateAccountLinkNotice: C });
    return (0, l.jsx)(c._P, { variant: E, paymentSourceType: n, immediateDelivery: f });
}
function f(e) {
    let { paymentSourceType: t } = e,
        {
            unifiedCheckoutFlow: n,
            checkoutReviewButtonLabel: r,
            isExpressCheckoutVisibleInFooter: a,
        } = (0, d.t4)((e) => ({
            unifiedCheckoutFlow: e.unifiedCheckoutFlow,
            checkoutReviewButtonLabel: e.checkoutReviewButtonLabel,
            isExpressCheckoutVisibleInFooter: e.getExpressCheckoutVisibilityState().isExpressCheckoutVisibleInFooter,
        })),
        { isGift: s } = (0, p.Pv)(),
        { immediateDelivery: m } = (0, u.U)(),
        h = i.useMemo(
            () =>
                n === o.C.PREMIUM_APPS_OTP_CHECKOUT
                    ? { type: c.I0.PremiumAppsOneTimePurchase, purchaseButtonText: r }
                    : n === o.C.GUILD_PRODUCT_CHECKOUT
                      ? { type: c.I0.GuildProductOneTimePurchase, purchaseButtonText: r }
                      : s
                        ? { type: c.I0.GiftShop, purchaseButtonText: r }
                        : { type: c.I0.Shop, purchaseButtonText: r },
            [n, r, s],
        );
    return (0, l.jsx)(c._P, { variant: h, paymentSourceType: t, immediateDelivery: m, isExpressCheckout: a });
}
