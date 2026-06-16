"use strict";
n.d(t, { _: () => b });
var i = n(627968),
    r = n(64700),
    s = n(17928),
    a = n(587895),
    o = n(463376),
    l = n(944355),
    u = n(241989),
    c = n(211159),
    d = n(548118),
    _ = n(410516),
    h = n(815545),
    f = n(736339),
    p = n(299301),
    E = n(71393),
    m = n(967198),
    g = n(67480),
    A = n(486020),
    I = n(428262),
    T = n(580630),
    S = n(888751),
    y = n(652215),
    C = n(788868),
    N = n(88001),
    v = n(375708),
    R = n(327105),
    O = n(466919);
function b(e) {
    let {
            type: t,
            invoicePreview: n,
            subscriptionPlan: u,
            isPrepaidPaymentSource: b,
            giftRecipient: w,
            isPremiumGroupPurchase: M = !1,
            guildId: P,
            bottomSubText: x,
            storeListing: k,
        } = e,
        U = (0, c.t4)((e) => e.checkoutPriceOptions),
        G = (function (e) {
            let {
                    invoiceSummaryType: t,
                    invoicePreview: n,
                    subscriptionPlan: i,
                    isPremiumGroupPurchase: r,
                    isPrepaidPaymentSource: s,
                } = e,
                { subscriptionPlanInvoiceItem: a } = (0, h.Sb)(n, i);
            return r
                ? null != a
                    ? (0, h.Tp)(a, i)
                    : v.intl.formatToPlainString(O.default["8bPDtb"], { premiumGroupProductName: (0, N.DP)() })
                : L(t)
                  ? (0, S.iK)(i)
                  : (0, I.ys)(i.id)
                    ? (0, I.Mn)(i.id, !1, s)
                    : i.name;
        })({
            invoiceSummaryType: t,
            invoicePreview: n,
            subscriptionPlan: u,
            isPremiumGroupPurchase: M,
            isPrepaidPaymentSource: b,
        }),
        F = (function (e) {
            let { guildId: t, invoiceSummaryType: n, giftRecipient: i } = e,
                r = (0, s.bG)([E.A], () => (null != t ? E.A.getGuild(t) : null), [t]);
            return L(n) && null != i
                ? { type: "gift", user: i }
                : null != r
                  ? { type: "guildSubscription", guild: r }
                  : void 0;
        })({ guildId: P, invoiceSummaryType: t, giftRecipient: w }),
        V = (function (e) {
            let { invoiceSummaryType: t, guildId: n, giftRecipient: i } = e;
            return L(t)
                ? null != i
                    ? ""
                    : v.intl.string(R.default["3wsYeI"])
                : null == n
                  ? v.intl.string(R.default["2zUa6I"])
                  : void 0;
        })({ guildId: P, invoiceSummaryType: t, giftRecipient: w }),
        {
            header: B,
            headerIconSrc: j,
            guildForIcon: H,
        } = (function (e) {
            let { skuId: t } = e;
            return (0, s.cf)([a.A, g.A, E.A, m.A], () => {
                let e = g.A.get(t);
                if (null == e) return {};
                let n = e.productLine;
                if (n === y.EZt.PREMIUM) return {};
                let i = a.A.getApplication(e.applicationId);
                if (null == i) return {};
                if (n === y.EZt.GUILD_ROLE) {
                    let e = m.A.getGuildId(),
                        t = E.A.getGuild(e);
                    return null != t ? { header: t.name, guildForIcon: t } : {};
                }
                let r = A.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
                return { header: i.name, headerIconSrc: r };
            }, [t]);
        })({ skuId: u.skuId }),
        Y = null != H ? (0, i.jsx)(d.Ay, { guild: H, size: d.Ay.Sizes.SMOL }) : void 0,
        { premiumGroupDiscountOffer: W } = (0, o.i)(),
        K = (0, c.t4)((e) => e.premiumDiscountInfo),
        {
            price: $,
            priceStrikethroughText: z,
            priceSubText: q,
            priceSubTextHasStrikethrough: Z,
        } = r.useMemo(
            () =>
                (function (e) {
                    let {
                            invoiceSummaryType: t,
                            subscriptionPlan: n,
                            invoicePreview: i,
                            priceOptions: r,
                            isPremiumGroupPurchase: s,
                            premiumGroupDiscountOffer: a,
                            premiumDiscountInfo: o,
                        } = e,
                        { subscriptionPlanInvoiceItem: l } = (0, h.Sb)(i, n),
                        u = L(t),
                        c = t === p.N$.PREMIUM_WITH_TRIAL,
                        d = (u ? l?.amount : l?.subscriptionPlanPrice) ?? 0,
                        E = (0, T.$g)(d, i.currency),
                        m = (0, T.CE)(E, n.interval, n.intervalCount),
                        g = null,
                        A = null,
                        y = !1,
                        N = m,
                        O = o?.discountOffer;
                    if (c)
                        (g = (0, f.O7)(n, { amount: d, currency: i.currency })),
                            (N = (0, S.ib)(i.currency, { includeNowSuffix: !0 }));
                    else if (u) {
                        if (((N = E), n.interval === C.WT.YEAR && (0, I.xq)(n.id))) {
                            let e = (0, I.VA)({ subscriptionPlan: n, isGift: u, priceOptions: r });
                            (g = null != e ? (0, T.$g)(e, i.currency) : null), (y = !0);
                        }
                    } else if (s) {
                        let e = (0, _.pg)(i, n.id);
                        if (null != a && a.getApplicableSubscriptionInterval() === n.interval && null != e) {
                            let t = (0, T.$g)(d - e, i.currency);
                            (N = v.intl.format(R.default.U2CmMW, { priceAmount: t })),
                                (g = v.intl.format(R.default.JsSin7, {
                                    priceRate: (0, T.CE)(E, n.interval, n.intervalCount),
                                    intervalCount: a.getFullIntervalCount(),
                                }));
                        }
                    } else if ((0, I.xq)(n.id) && null != O) {
                        let e = (0, _.pg)(i, n.id);
                        if ((0, h.Ro)(i, O.discount.id) && null != e) {
                            let t = (0, T.$g)(d - e, i.currency);
                            (N = v.intl.format(v.t.hXcaLT, { price: t })),
                                (A = E),
                                (g = (0, _.hm)(O)
                                    ? v.intl.format(v.t.VZ8Tvh, { regularPrice: E })
                                    : v.intl.format(R.default.JsSin7, {
                                          priceRate: m,
                                          intervalCount: O.getFullIntervalCount(),
                                      }));
                        }
                    }
                    return { price: N, priceStrikethroughText: A, priceSubText: g, priceSubTextHasStrikethrough: y };
                })({
                    invoiceSummaryType: t,
                    subscriptionPlan: u,
                    invoicePreview: n,
                    priceOptions: U,
                    isPremiumGroupPurchase: M,
                    premiumGroupDiscountOffer: W,
                    premiumDiscountInfo: K,
                }),
            [t, u, n, U, M, W, K],
        ),
        X = ((0, I.ys)(u.id) ? (0, I.m6)(u.id) : void 0) === C.PremiumTypes.TIER_2;
    return (0, i.jsx)(l.f7, {
        label: G,
        description: V,
        price: $,
        priceStrikethroughText: z,
        priceSubText: q,
        priceSubTextHasStrikethrough: Z,
        target: F,
        graphic: (0, i.jsx)(D, { subscriptionPlan: u, storeListing: k }),
        omitDefaultIconBackground: X,
        header: B,
        headerIconSrc: j,
        headerIconComponent: Y,
        bottomSubText: x,
    });
}
function D(e) {
    let { subscriptionPlan: t, storeListing: n } = e,
        r = (0, s.bG)([g.A], () => g.A.get(t.skuId), [t.skuId]),
        a = (0, I.ys)(t.id) ? (0, I.m6)(t.id) : void 0;
    return (0, i.jsx)(u.WH, { sku: r, premiumType: a, storeListing: n });
}
function L(e) {
    return e === p.N$.PREMIUM_GIFT;
}
