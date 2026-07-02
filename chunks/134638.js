"use strict";
n.d(t, { _: () => b });
var i = n(627968),
    r = n(64700),
    s = n(17928),
    a = n(587895),
    o = n(463376),
    l = n(872452),
    u = n(241989),
    d = n(650170),
    c = n(548118),
    _ = n(410516),
    h = n(815545),
    f = n(135314),
    E = n(299301),
    p = n(71393),
    m = n(967198),
    g = n(67480),
    A = n(486020),
    I = n(428262),
    T = n(580630),
    S = n(888751),
    N = n(652215),
    C = n(202541),
    y = n(88001),
    v = n(375708),
    R = n(327105),
    O = n(466919);
function b(e) {
    let {
            type: t,
            invoicePreview: n,
            subscriptionPlan: u,
            isPrepaidPaymentSource: b,
            giftRecipient: P,
            isPremiumGroupPurchase: w = !1,
            guildId: M,
            bottomSubText: x,
            storeListing: U,
        } = e,
        k = (0, d.t4)((e) => e.checkoutPriceOptions),
        G = (0, d.t4)((e) => e.quantity),
        V = (function (e) {
            let {
                    invoiceSummaryType: t,
                    invoicePreview: n,
                    subscriptionPlan: i,
                    isPremiumGroupPurchase: r,
                    isPrepaidPaymentSource: s,
                    quantity: a,
                } = e,
                { subscriptionPlanInvoiceItem: o } = (0, h.Sb)(n, i);
            if (r)
                return null != o
                    ? (0, h.Tp)(o, i)
                    : v.intl.formatToPlainString(O.default["8bPDtb"], { premiumGroupProductName: (0, y.DP)() });
            if (D(t)) {
                let e = (0, S.iK)(i);
                return a > 1 ? v.intl.format(R.default.kyGViz, { quantity: a, label: e }) : e;
            }
            return (0, I.ys)(i.id) ? (0, I.Mn)(i.id, !1, s) : i.name;
        })({
            invoiceSummaryType: t,
            invoicePreview: n,
            subscriptionPlan: u,
            isPremiumGroupPurchase: w,
            isPrepaidPaymentSource: b,
            quantity: G,
        }),
        F = (function (e) {
            let { guildId: t, invoiceSummaryType: n, giftRecipient: i } = e,
                r = (0, s.bG)([p.A], () => (null != t ? p.A.getGuild(t) : null), [t]);
            return D(n) && null != i
                ? { type: "gift", user: i }
                : null != r
                  ? { type: "guildSubscription", guild: r }
                  : void 0;
        })({ guildId: M, invoiceSummaryType: t, giftRecipient: P }),
        B = (function (e) {
            let { invoiceSummaryType: t, guildId: n, giftRecipient: i } = e;
            return D(t)
                ? null != i
                    ? ""
                    : v.intl.string(R.default["3wsYeI"])
                : null == n
                  ? v.intl.string(R.default["2zUa6I"])
                  : void 0;
        })({ guildId: M, invoiceSummaryType: t, giftRecipient: P }),
        {
            header: j,
            headerIconSrc: H,
            guildForIcon: W,
        } = (function (e) {
            let { skuId: t } = e;
            return (0, s.cf)([a.A, g.A, p.A, m.A], () => {
                let e = g.A.get(t);
                if (null == e) return {};
                let n = e.productLine;
                if (n === N.EZt.PREMIUM) return {};
                let i = a.A.getApplication(e.applicationId);
                if (null == i) return {};
                if (n === N.EZt.GUILD_ROLE) {
                    let e = m.A.getGuildId(),
                        t = p.A.getGuild(e);
                    return null != t ? { header: t.name, guildForIcon: t } : {};
                }
                let r = A.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
                return { header: i.name, headerIconSrc: r };
            }, [t]);
        })({ skuId: u.skuId }),
        Y = null != W ? (0, i.jsx)(c.Ay, { guild: W, size: c.Ay.Sizes.SMOL }) : void 0,
        { premiumGroupDiscountOffer: K } = (0, o.i)(),
        $ = (0, d.t4)((e) => e.premiumDiscountInfo),
        {
            price: z,
            priceStrikethroughText: q,
            priceSubText: Z,
            priceSubTextHasStrikethrough: X,
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
                            quantity: l,
                        } = e,
                        { subscriptionPlanInvoiceItem: u } = (0, h.Sb)(i, n),
                        d = D(t),
                        c = t === E.N$.PREMIUM_WITH_TRIAL,
                        p = (d ? u?.amount : u?.subscriptionPlanPrice) ?? 0,
                        m = (0, T.$g)(p, i.currency),
                        g = (0, T.CE)(m, n.interval, n.intervalCount),
                        A = null,
                        N = null,
                        y = !1,
                        O = g,
                        b = o?.discountOffer;
                    if (c)
                        (A = (0, f.O7)(n, { amount: p, currency: i.currency })),
                            (O = (0, S.ib)(i.currency, { includeNowSuffix: !0 }));
                    else if (d) {
                        if (((O = m), n.interval === C.WT.YEAR && (0, I.xq)(n.id))) {
                            let e = (0, I.VA)({ subscriptionPlan: n, isGift: d, priceOptions: r });
                            (A = null != e ? (0, T.$g)(e * l, i.currency) : null), (y = !0);
                        }
                    } else if (s) {
                        let e = (0, _.pg)(i, n.id);
                        if (null != a && a.getApplicableSubscriptionInterval() === n.interval && null != e) {
                            let t = (0, T.$g)(p - e, i.currency);
                            (O = v.intl.format(R.default.U2CmMW, { priceAmount: t })),
                                (A = v.intl.format(R.default.JsSin7, {
                                    priceRate: (0, T.CE)(m, n.interval, n.intervalCount),
                                    intervalCount: a.getFullIntervalCount(),
                                }));
                        }
                    } else if ((0, I.xq)(n.id) && null != b) {
                        let e = (0, _.pg)(i, n.id);
                        if ((0, h.Ro)(i, b.discount.id) && null != e) {
                            let t = (0, T.$g)(p - e, i.currency);
                            (O = v.intl.format(v.t.hXcaLT, { price: t })),
                                (N = m),
                                (A = (0, _.hm)(b)
                                    ? v.intl.format(v.t.VZ8Tvh, { regularPrice: m })
                                    : v.intl.format(R.default.JsSin7, {
                                          priceRate: g,
                                          intervalCount: b.getFullIntervalCount(),
                                      }));
                        }
                    }
                    return { price: O, priceStrikethroughText: N, priceSubText: A, priceSubTextHasStrikethrough: y };
                })({
                    invoiceSummaryType: t,
                    subscriptionPlan: u,
                    invoicePreview: n,
                    priceOptions: k,
                    isPremiumGroupPurchase: w,
                    premiumGroupDiscountOffer: K,
                    premiumDiscountInfo: $,
                    quantity: G,
                }),
            [t, u, n, k, w, K, $, G],
        ),
        Q = ((0, I.ys)(u.id) ? (0, I.m6)(u.id) : void 0) === C.PremiumTypes.TIER_2;
    return (0, i.jsx)(l.f7, {
        label: V,
        description: B,
        price: z,
        priceStrikethroughText: q,
        priceSubText: Z,
        priceSubTextHasStrikethrough: X,
        target: F,
        graphic: (0, i.jsx)(L, { subscriptionPlan: u, storeListing: U }),
        omitDefaultIconBackground: Q,
        header: j,
        headerIconSrc: H,
        headerIconComponent: Y,
        bottomSubText: x,
    });
}
function L(e) {
    let { subscriptionPlan: t, storeListing: n } = e,
        r = (0, s.bG)([g.A], () => g.A.get(t.skuId), [t.skuId]),
        a = (0, I.ys)(t.id) ? (0, I.m6)(t.id) : void 0;
    return (0, i.jsx)(u.WH, { sku: r, premiumType: a, storeListing: n });
}
function D(e) {
    return e === E.N$.PREMIUM_GIFT;
}
