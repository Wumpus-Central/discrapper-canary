n.d(t, { _: () => b });
var l = n(627968),
    i = n(64700),
    r = n(17928),
    a = n(587895),
    s = n(463376),
    o = n(944355),
    u = n(241989),
    c = n(6938),
    d = n(548118),
    p = n(410516),
    m = n(815545),
    h = n(135314),
    C = n(299301),
    A = n(71393),
    E = n(967198),
    f = n(67480),
    y = n(486020),
    S = n(428262),
    P = n(580630),
    T = n(888751),
    I = n(652215),
    _ = n(202541),
    g = n(88001),
    x = n(375708),
    v = n(327105),
    N = n(466919);
function b(e) {
    let {
            type: t,
            invoicePreview: n,
            subscriptionPlan: u,
            isPrepaidPaymentSource: b,
            giftRecipient: j,
            isPremiumGroupPurchase: O = !1,
            guildId: L,
            bottomSubText: w,
            storeListing: D,
        } = e,
        k = (0, c.t4)((e) => e.checkoutPriceOptions),
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
            if (M(t)) {
                let e = (0, T.iK)(l);
                return a > 1 ? x.intl.format(v.default.kyGViz, { quantity: a, label: e }) : e;
            }
            return (0, S.ys)(l.id) ? (0, S.Mn)(l.id, !1, r) : l.name;
        })({
            invoiceSummaryType: t,
            invoicePreview: n,
            subscriptionPlan: u,
            isPremiumGroupPurchase: O,
            isPrepaidPaymentSource: b,
            quantity: U,
        }),
        F = (function (e) {
            let { guildId: t, invoiceSummaryType: n, giftRecipient: l } = e,
                i = (0, r.bG)([A.A], () => (null != t ? A.A.getGuild(t) : null), [t]);
            return M(n) && null != l
                ? { type: "gift", user: l }
                : null != i
                  ? { type: "guildSubscription", guild: i }
                  : void 0;
        })({ guildId: L, invoiceSummaryType: t, giftRecipient: j }),
        B = (function (e) {
            let { invoiceSummaryType: t, guildId: n, giftRecipient: l } = e;
            return M(t)
                ? null != l
                    ? ""
                    : x.intl.string(v.default["3wsYeI"])
                : null == n
                  ? x.intl.string(v.default["2zUa6I"])
                  : void 0;
        })({ guildId: L, invoiceSummaryType: t, giftRecipient: j }),
        {
            header: Y,
            headerIconSrc: H,
            guildForIcon: W,
        } = (function (e) {
            let { skuId: t } = e;
            return (0, r.cf)([a.A, f.A, A.A, E.A], () => {
                let e = f.A.get(t);
                if (null == e) return {};
                let n = e.productLine;
                if (n === I.EZt.PREMIUM) return {};
                let l = a.A.getApplication(e.applicationId);
                if (null == l) return {};
                if (n === I.EZt.GUILD_ROLE) {
                    let e = E.A.getGuildId(),
                        t = A.A.getGuild(e);
                    return null != t ? { header: t.name, guildForIcon: t } : {};
                }
                let i = y.Ay.getApplicationIconURL({ id: l.id, icon: l.icon });
                return { header: l.name, headerIconSrc: i };
            }, [t]);
        })({ skuId: u.skuId }),
        V = null != W ? (0, l.jsx)(d.Ay, { guild: W, size: d.Ay.Sizes.SMOL }) : void 0,
        { premiumGroupDiscountOffer: K } = (0, s.i)(),
        q = (0, c.t4)((e) => e.premiumDiscountInfo),
        {
            price: Z,
            priceStrikethroughText: z,
            priceSubText: $,
            priceSubTextHasStrikethrough: Q,
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
                        c = M(t),
                        d = t === C.N$.PREMIUM_WITH_TRIAL,
                        A = (c ? u?.amount : u?.subscriptionPlanPrice) ?? 0,
                        E = (0, P.$g)(A, l.currency),
                        f = (0, P.CE)(E, n.interval, n.intervalCount),
                        y = null,
                        I = null,
                        g = !1,
                        N = f,
                        b = s?.discountOffer;
                    if (d)
                        (y = (0, h.O7)(n, { amount: A, currency: l.currency })),
                            (N = (0, T.ib)(l.currency, { includeNowSuffix: !0 }));
                    else if (c) {
                        if (((N = E), n.interval === _.WT.YEAR && (0, S.xq)(n.id))) {
                            let e = (0, S.VA)({ subscriptionPlan: n, isGift: c, priceOptions: i });
                            (y = null != e ? (0, P.$g)(e * o, l.currency) : null), (g = !0);
                        }
                    } else if (r) {
                        let e = (0, p.pg)(l, n.id);
                        if (null != a && a.getApplicableSubscriptionInterval() === n.interval && null != e) {
                            let t = (0, P.$g)(A - e, l.currency);
                            (N = x.intl.format(v.default.U2CmMW, { priceAmount: t })),
                                (y = x.intl.format(v.default.JsSin7, {
                                    priceRate: (0, P.CE)(E, n.interval, n.intervalCount),
                                    intervalCount: a.getFullIntervalCount(),
                                }));
                        }
                    } else if ((0, S.xq)(n.id) && null != b) {
                        let e = (0, p.pg)(l, n.id);
                        if ((0, m.Ro)(l, b.discount.id) && null != e) {
                            let t = (0, P.$g)(A - e, l.currency);
                            (N = x.intl.format(x.t.hXcaLT, { price: t })),
                                (I = E),
                                (y = (0, p.hm)(b)
                                    ? x.intl.format(x.t.VZ8Tvh, { regularPrice: E })
                                    : x.intl.format(v.default.JsSin7, {
                                          priceRate: f,
                                          intervalCount: b.getFullIntervalCount(),
                                      }));
                        }
                    }
                    return { price: N, priceStrikethroughText: I, priceSubText: y, priceSubTextHasStrikethrough: g };
                })({
                    invoiceSummaryType: t,
                    subscriptionPlan: u,
                    invoicePreview: n,
                    priceOptions: k,
                    isPremiumGroupPurchase: O,
                    premiumGroupDiscountOffer: K,
                    premiumDiscountInfo: q,
                    quantity: U,
                }),
            [t, u, n, k, O, K, q, U],
        ),
        J = ((0, S.ys)(u.id) ? (0, S.m6)(u.id) : void 0) === _.PremiumTypes.TIER_2;
    return (0, l.jsx)(o.f7, {
        label: G,
        description: B,
        price: Z,
        priceStrikethroughText: z,
        priceSubText: $,
        priceSubTextHasStrikethrough: Q,
        target: F,
        graphic: (0, l.jsx)(R, { subscriptionPlan: u, storeListing: D }),
        omitDefaultIconBackground: J,
        header: Y,
        headerIconSrc: H,
        headerIconComponent: V,
        bottomSubText: w,
    });
}
function R(e) {
    let { subscriptionPlan: t, storeListing: n } = e,
        i = (0, r.bG)([f.A], () => f.A.get(t.skuId), [t.skuId]),
        a = (0, S.ys)(t.id) ? (0, S.m6)(t.id) : void 0;
    return (0, S.z4)(t.id) ? (0, l.jsx)(u.a6, {}) : (0, l.jsx)(u.WH, { sku: i, premiumType: a, storeListing: n });
}
function M(e) {
    return e === C.N$.PREMIUM_GIFT;
}
