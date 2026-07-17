n.d(t, { _: () => M });
var l = n(627968),
    i = n(64700),
    r = n(17928),
    a = n(587895),
    s = n(463376),
    o = n(944355),
    u = n(241989),
    c = n(316915),
    d = n(548118),
    p = n(410516),
    m = n(815545),
    h = n(135314),
    C = n(299301),
    E = n(71393),
    f = n(967198),
    A = n(67480),
    S = n(486020),
    y = n(428262),
    P = n(580630),
    I = n(888751),
    _ = n(652215),
    T = n(202541),
    g = n(88001),
    x = n(375708),
    v = n(327105),
    N = n(466919);
function M(e) {
    let {
            type: t,
            invoicePreview: n,
            subscriptionPlan: u,
            isPrepaidPaymentSource: M,
            giftRecipient: j,
            isPremiumGroupPurchase: O = !1,
            guildId: L,
            bottomSubText: w,
            storeListing: k,
        } = e,
        D = (0, c.t4)((e) => e.checkoutPriceOptions),
        U = (0, c.t4)((e) => e.quantity),
        G = (function (e) {
            let {
                    invoiceSummaryType: t,
                    invoicePreview: n,
                    subscriptionPlan: l,
                    isPremiumGroupPurchase: i,
                    isPrepaidPaymentSource: r,
                    quantity: a,
                } = e,
                { subscriptionPlanInvoiceItem: s } = (0, m.Sb)(n, l);
            if (i)
                return null != s
                    ? (0, m.Tp)(s, l)
                    : x.intl.formatToPlainString(N.default["8bPDtb"], { premiumGroupProductName: (0, g.DP)() });
            if (b(t)) {
                let e = (0, I.iK)(l);
                return a > 1 ? x.intl.format(v.default.kyGViz, { quantity: a, label: e }) : e;
            }
            return (0, y.ys)(l.id) ? (0, y.Mn)(l.id, !1, r) : l.name;
        })({
            invoiceSummaryType: t,
            invoicePreview: n,
            subscriptionPlan: u,
            isPremiumGroupPurchase: O,
            isPrepaidPaymentSource: M,
            quantity: U,
        }),
        F = (function (e) {
            let { guildId: t, invoiceSummaryType: n, giftRecipient: l } = e,
                i = (0, r.bG)([E.A], () => (null != t ? E.A.getGuild(t) : null), [t]);
            return b(n) && null != l
                ? { type: "gift", user: l }
                : null != i
                  ? { type: "guildSubscription", guild: i }
                  : void 0;
        })({ guildId: L, invoiceSummaryType: t, giftRecipient: j }),
        H = (function (e) {
            let { invoiceSummaryType: t, guildId: n, giftRecipient: l } = e;
            return b(t)
                ? null != l
                    ? ""
                    : x.intl.string(v.default["3wsYeI"])
                : null == n
                  ? x.intl.string(v.default["2zUa6I"])
                  : void 0;
        })({ guildId: L, invoiceSummaryType: t, giftRecipient: j }),
        {
            header: B,
            headerIconSrc: Y,
            guildForIcon: W,
        } = (function (e) {
            let { skuId: t } = e;
            return (0, r.cf)([a.A, A.A, E.A, f.A], () => {
                let e = A.A.get(t);
                if (null == e) return {};
                let n = e.productLine;
                if (n === _.EZt.PREMIUM) return {};
                let l = a.A.getApplication(e.applicationId);
                if (null == l) return {};
                if (n === _.EZt.GUILD_ROLE) {
                    let e = f.A.getGuildId(),
                        t = E.A.getGuild(e);
                    return null != t ? { header: t.name, guildForIcon: t } : {};
                }
                let i = S.Ay.getApplicationIconURL({ id: l.id, icon: l.icon });
                return { header: l.name, headerIconSrc: i };
            }, [t]);
        })({ skuId: u.skuId }),
        V = null != W ? (0, l.jsx)(d.Ay, { guild: W, size: d.Ay.Sizes.SMOL }) : void 0,
        { premiumGroupDiscountOffer: K } = (0, s.i)(),
        Z = (0, c.t4)((e) => e.premiumDiscountInfo),
        {
            price: q,
            priceStrikethroughText: z,
            priceSubText: Q,
            priceSubTextHasStrikethrough: $,
        } = i.useMemo(
            () =>
                (function (e) {
                    let {
                            invoiceSummaryType: t,
                            subscriptionPlan: n,
                            invoicePreview: l,
                            priceOptions: i,
                            isPremiumGroupPurchase: r,
                            premiumGroupDiscountOffer: a,
                            premiumDiscountInfo: s,
                            quantity: o,
                        } = e,
                        { subscriptionPlanInvoiceItem: u } = (0, m.Sb)(l, n),
                        c = b(t),
                        d = t === C.N$.PREMIUM_WITH_TRIAL,
                        E = (c ? u?.amount : u?.subscriptionPlanPrice) ?? 0,
                        f = (0, P.$g)(E, l.currency),
                        A = (0, P.CE)(f, n.interval, n.intervalCount),
                        S = null,
                        _ = null,
                        g = !1,
                        N = A,
                        M = s?.discountOffer;
                    if (d)
                        (S = (0, h.O7)(n, { amount: E, currency: l.currency })),
                            (N = (0, I.ib)(l.currency, { includeNowSuffix: !0 }));
                    else if (c) {
                        if (((N = f), n.interval === T.WT.YEAR && (0, y.xq)(n.id))) {
                            let e = (0, y.VA)({ subscriptionPlan: n, isGift: c, priceOptions: i });
                            (S = null != e ? (0, P.$g)(e * o, l.currency) : null), (g = !0);
                        }
                    } else if (r) {
                        let e = (0, p.pg)(l, n.id);
                        if (null != a && a.getApplicableSubscriptionInterval() === n.interval && null != e) {
                            let t = (0, P.$g)(E - e, l.currency);
                            (N = x.intl.format(v.default.U2CmMW, { priceAmount: t })),
                                (S = x.intl.format(v.default.JsSin7, {
                                    priceRate: (0, P.CE)(f, n.interval, n.intervalCount),
                                    intervalCount: a.getFullIntervalCount(),
                                }));
                        }
                    } else if ((0, y.xq)(n.id) && null != M) {
                        let e = (0, p.pg)(l, n.id);
                        if ((0, m.Ro)(l, M.discount.id) && null != e) {
                            let t = (0, P.$g)(E - e, l.currency);
                            (N = x.intl.format(x.t.hXcaLT, { price: t })),
                                (_ = f),
                                (S = (0, p.hm)(M)
                                    ? x.intl.format(x.t.VZ8Tvh, { regularPrice: f })
                                    : x.intl.format(v.default.JsSin7, {
                                          priceRate: A,
                                          intervalCount: M.getFullIntervalCount(),
                                      }));
                        }
                    }
                    return { price: N, priceStrikethroughText: _, priceSubText: S, priceSubTextHasStrikethrough: g };
                })({
                    invoiceSummaryType: t,
                    subscriptionPlan: u,
                    invoicePreview: n,
                    priceOptions: D,
                    isPremiumGroupPurchase: O,
                    premiumGroupDiscountOffer: K,
                    premiumDiscountInfo: Z,
                    quantity: U,
                }),
            [t, u, n, D, O, K, Z, U],
        ),
        J = ((0, y.ys)(u.id) ? (0, y.m6)(u.id) : void 0) === T.PremiumTypes.TIER_2;
    return (0, l.jsx)(o.f7, {
        label: G,
        description: H,
        price: q,
        priceStrikethroughText: z,
        priceSubText: Q,
        priceSubTextHasStrikethrough: $,
        target: F,
        graphic: (0, l.jsx)(R, { subscriptionPlan: u, storeListing: k }),
        omitDefaultIconBackground: J,
        header: B,
        headerIconSrc: Y,
        headerIconComponent: V,
        bottomSubText: w,
    });
}
function R(e) {
    let { subscriptionPlan: t, storeListing: n } = e,
        i = (0, r.bG)([A.A], () => A.A.get(t.skuId), [t.skuId]),
        a = (0, y.ys)(t.id) ? (0, y.m6)(t.id) : void 0;
    return (0, y.z4)(t.id) ? (0, l.jsx)(u.a6, {}) : (0, l.jsx)(u.WH, { sku: i, premiumType: a, storeListing: n });
}
function b(e) {
    return e === C.N$.PREMIUM_GIFT;
}
