n.d(t, { EB: () => h, T3: () => f });
var l = n(477900),
    i = n(582128),
    r = n(17928),
    a = n(206828),
    s = n(587895),
    o = n(120700),
    u = n(818824),
    c = n(936477),
    d = n(206441),
    m = n(67480),
    p = n(951305),
    C = n(652215);
function h(e) {
    let {
            skuId: t,
            paymentSourceType: n = null,
            purchaseButtonText: i,
            isGift: o,
            checkoutLegalType: p = c.I0.GiftGameShop,
            hasSeparateAccountLinkNotice: h = !1,
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
                h = p?.productLine,
                f = p?.applicationId,
                E = (0, r.bG)([s.A], () => (h === C.EZt.SOCIAL_LAYER_GAME_ITEM ? s.A.getApplication(f) : null), [f, h]),
                { fetched: S, hasAlreadyLinked: y } = (0, a.RD)(E);
            return {
                type: l,
                purchaseButtonText: n ?? u,
                applicationName: E?.name,
                applicationId: f,
                shouldAppendDisclaimer: i || (S && (o ? y : !y)),
            };
        })({ skuId: t, purchaseButtonText: i, isGift: o, checkoutLegalType: p, hasSeparateAccountLinkNotice: h });
    return (0, l.jsx)(c._P, { variant: E, paymentSourceType: n, immediateDelivery: f });
}
function f(e) {
    let { paymentSourceType: t } = e,
        { unifiedCheckoutFlow: n, checkoutReviewButtonLabel: r } = (0, d.t4)((e) => ({
            unifiedCheckoutFlow: e.unifiedCheckoutFlow,
            checkoutReviewButtonLabel: e.checkoutReviewButtonLabel,
        })),
        { isGift: a } = (0, p.Pv)(),
        { immediateDelivery: s } = (0, u.U)(),
        m = i.useMemo(
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
    return (0, l.jsx)(c._P, { variant: m, paymentSourceType: t, immediateDelivery: s });
}
