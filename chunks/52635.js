n.d(t, { EB: () => C, T3: () => f });
var l = n(477900),
    i = n(582128),
    r = n(17928),
    a = n(206828),
    s = n(587895),
    o = n(120700),
    u = n(818824),
    c = n(936477),
    d = n(87725),
    p = n(67480),
    m = n(951305),
    h = n(652215);
function C(e) {
    let {
            skuId: t,
            paymentSourceType: n = null,
            purchaseButtonText: i,
            isGift: o,
            checkoutLegalType: m = c.I0.GiftGameShop,
        } = e,
        { immediateDelivery: C } = (0, u.U)(),
        f = (function (e) {
            let { skuId: t, purchaseButtonText: n, checkoutLegalType: l = c.I0.OrbsGameShop, isGift: i = !1 } = e,
                { checkoutReviewButtonLabel: o } = (0, d.t4)((e) => ({
                    checkoutReviewButtonLabel: e.checkoutReviewButtonLabel,
                })),
                u = (0, r.bG)([p.A], () => p.A.get(t), [t]),
                m = u?.productLine,
                C = u?.applicationId,
                f = (0, r.bG)([s.A], () => (m === h.EZt.SOCIAL_LAYER_GAME_ITEM ? s.A.getApplication(C) : null), [C, m]),
                { fetched: E, hasAlreadyLinked: S } = (0, a.RD)(f);
            return {
                type: l,
                purchaseButtonText: n ?? o,
                applicationName: f?.name,
                applicationId: C,
                shouldAppendDisclaimer: i || (E && !S),
            };
        })({ skuId: t, purchaseButtonText: i, isGift: o, checkoutLegalType: m });
    return (0, l.jsx)(c._P, { variant: f, paymentSourceType: n, immediateDelivery: C });
}
function f(e) {
    let { paymentSourceType: t } = e,
        { unifiedCheckoutFlow: n, checkoutReviewButtonLabel: r } = (0, d.t4)((e) => ({
            unifiedCheckoutFlow: e.unifiedCheckoutFlow,
            checkoutReviewButtonLabel: e.checkoutReviewButtonLabel,
        })),
        { isGift: a } = (0, m.Pv)(),
        { immediateDelivery: s } = (0, u.U)(),
        p = i.useMemo(
            () =>
                n === o.C.PREMIUM_APPS_OTP_CHECKOUT
                    ? { type: c.I0.PremiumAppsOneTimePurchase, purchaseButtonText: r }
                    : n === o.C.GUILD_PRODUCT_CHECKOUT
                      ? { type: c.I0.GuildProductOneTimePurchase, purchaseButtonText: r }
                      : a
                        ? { type: c.I0.GiftShop, purchaseButtonText: r }
                        : { type: c.I0.Shop, purchaseButtonText: r },
            [n, r, a],
        );
    return (0, l.jsx)(c._P, { variant: p, paymentSourceType: t, immediateDelivery: s });
}
