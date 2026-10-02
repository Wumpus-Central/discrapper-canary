n.d(t, { EB: () => C, T3: () => f });
var l = n(477900),
    i = n(582128),
    r = n(17928),
    a = n(206828),
    s = n(587895),
    o = n(120700),
    u = n(818824),
    c = n(25149),
    d = n(661899),
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
            hasSeparateAccountLinkNotice: C = !1,
        } = e,
        { immediateDelivery: f } = (0, u.U)(),
        S = (function (e) {
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
                m = (0, r.bG)([p.A], () => p.A.get(t), [t]),
                C = m?.productLine,
                f = m?.applicationId,
                S = (0, r.bG)([s.A], () => (C === h.EZt.SOCIAL_LAYER_GAME_ITEM ? s.A.getApplication(f) : null), [f, C]),
                { fetched: E, hasAlreadyLinked: y } = (0, a.RD)(S);
            return {
                type: l,
                purchaseButtonText: n ?? u,
                applicationName: S?.name,
                applicationId: f,
                shouldAppendDisclaimer: i || (E && (o ? y : !y)),
            };
        })({ skuId: t, purchaseButtonText: i, isGift: o, checkoutLegalType: m, hasSeparateAccountLinkNotice: C });
    return (0, l.jsx)(c._P, { variant: S, paymentSourceType: n, immediateDelivery: f });
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
