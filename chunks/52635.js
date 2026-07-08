n.d(t, { EB: () => h, T3: () => E });
var l = n(627968),
    i = n(64700),
    r = n(17928),
    a = n(206828),
    s = n(587895),
    o = n(120700),
    u = n(818824),
    c = n(944355),
    d = n(6938),
    p = n(67480),
    m = n(937008),
    C = n(652215);
function h(e) {
    let {
            skuId: t,
            paymentSourceType: n = null,
            purchaseButtonText: i,
            isGift: o,
            checkoutLegalType: m = c.I0.GiftGameShop,
        } = e,
        { immediateDelivery: h } = (0, u.U)(),
        E = (function (e) {
            let { skuId: t, purchaseButtonText: n, checkoutLegalType: l = c.I0.OrbsGameShop, isGift: i = !1 } = e,
                { checkoutReviewButtonLabel: o } = (0, d.t4)((e) => ({
                    checkoutReviewButtonLabel: e.checkoutReviewButtonLabel,
                })),
                u = (0, r.bG)([p.A], () => p.A.get(t), [t]),
                m = u?.productLine,
                h = u?.applicationId,
                E = (0, r.bG)([s.A], () => (m === C.EZt.SOCIAL_LAYER_GAME_ITEM ? s.A.getApplication(h) : null), [h, m]),
                { fetched: A, hasAlreadyLinked: S } = (0, a.RD)(E);
            return {
                type: l,
                purchaseButtonText: n ?? o,
                applicationName: E?.name,
                applicationId: h,
                shouldAppendDisclaimer: i || (A && !S),
            };
        })({ skuId: t, purchaseButtonText: i, isGift: o, checkoutLegalType: m });
    return (0, l.jsx)(c._P, { variant: E, paymentSourceType: n, immediateDelivery: h });
}
function E(e) {
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
