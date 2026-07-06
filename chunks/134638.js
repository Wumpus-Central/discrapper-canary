n.d(t, { _: () => R });
var l = n(627968),
    i = n(64700),
    r = n(17928),
    a = n(587895),
    s = n(463376),
    o = n(944355),
    u = n(241989),
    c = n(650170),
    d = n(548118),
    p = n(410516),
    m = n(815545),
    h = n(135314),
    C = n(299301),
    E = n(71393),
    A = n(967198),
    f = n(67480),
    S = n(486020),
    y = n(428262),
    P = n(580630),
    I = n(888751),
    T = n(652215),
    _ = n(202541),
    g = n(88001),
    v = n(375708),
    x = n(327105),
    N = n(466919);
function R(e) {
    let {
            type: t,
            invoicePreview: n,
            subscriptionPlan: u,
            isPrepaidPaymentSource: R,
            giftRecipient: O,
            isPremiumGroupPurchase: j = !1,
            guildId: L,
            bottomSubText: D,
            storeListing: U,
        } = e,
        w = (0, c.t4)((e) => e.checkoutPriceOptions),
        k = (0, c.t4)((e) => e.quantity),
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
                    : v.intl.formatToPlainString(N.default["8bPDtb"], { premiumGroupProductName: (0, g.DP)() });
            if (M(t)) {
                let e = (0, I.iK)(l);
                return a > 1 ? v.intl.format(x.default.kyGViz, { quantity: a, label: e }) : e;
            }
            return (0, y.ys)(l.id) ? (0, y.Mn)(l.id, !1, r) : l.name;
        })({
            invoiceSummaryType: t,
            invoicePreview: n,
            subscriptionPlan: u,
            isPremiumGroupPurchase: j,
            isPrepaidPaymentSource: R,
            quantity: k,
        }),
        F = (function (e) {
            let { guildId: t, invoiceSummaryType: n, giftRecipient: l } = e,
                i = (0, r.bG)([E.A], () => (null != t ? E.A.getGuild(t) : null), [t]);
            return M(n) && null != l
                ? { type: "gift", user: l }
                : null != i
                  ? { type: "guildSubscription", guild: i }
                  : void 0;
        })({ guildId: L, invoiceSummaryType: t, giftRecipient: O }),
        B = (function (e) {
            let { invoiceSummaryType: t, guildId: n, giftRecipient: l } = e;
            return M(t)
                ? null != l
                    ? ""
                    : v.intl.string(x.default["3wsYeI"])
                : null == n
                  ? v.intl.string(x.default["2zUa6I"])
                  : void 0;
        })({ guildId: L, invoiceSummaryType: t, giftRecipient: O }),
        {
            header: Y,
            headerIconSrc: H,
            guildForIcon: W,
        } = (function (e) {
            let { skuId: t } = e;
            return (0, r.cf)([a.A, f.A, E.A, A.A], () => {
                let e = f.A.get(t);
                if (null == e) return {};
                let n = e.productLine;
                if (n === T.EZt.PREMIUM) return {};
                let l = a.A.getApplication(e.applicationId);
                if (null == l) return {};
                if (n === T.EZt.GUILD_ROLE) {
                    let e = A.A.getGuildId(),
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
            priceSubText: $,
            priceSubTextHasStrikethrough: X,
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
                        E = (c ? u?.amount : u?.subscriptionPlanPrice) ?? 0,
                        A = (0, P.$g)(E, l.currency),
                        f = (0, P.CE)(A, n.interval, n.intervalCount),
                        S = null,
                        T = null,
                        g = !1,
                        N = f,
                        R = s?.discountOffer;
                    if (d)
                        (S = (0, h.O7)(n, { amount: E, currency: l.currency })),
                            (N = (0, I.ib)(l.currency, { includeNowSuffix: !0 }));
                    else if (c) {
                        if (((N = A), n.interval === _.WT.YEAR && (0, y.xq)(n.id))) {
                            let e = (0, y.VA)({ subscriptionPlan: n, isGift: c, priceOptions: i });
                            (S = null != e ? (0, P.$g)(e * o, l.currency) : null), (g = !0);
                        }
                    } else if (r) {
                        let e = (0, p.pg)(l, n.id);
                        if (null != a && a.getApplicableSubscriptionInterval() === n.interval && null != e) {
                            let t = (0, P.$g)(E - e, l.currency);
                            (N = v.intl.format(x.default.U2CmMW, { priceAmount: t })),
                                (S = v.intl.format(x.default.JsSin7, {
                                    priceRate: (0, P.CE)(A, n.interval, n.intervalCount),
                                    intervalCount: a.getFullIntervalCount(),
                                }));
                        }
                    } else if ((0, y.xq)(n.id) && null != R) {
                        let e = (0, p.pg)(l, n.id);
                        if ((0, m.Ro)(l, R.discount.id) && null != e) {
                            let t = (0, P.$g)(E - e, l.currency);
                            (N = v.intl.format(v.t.hXcaLT, { price: t })),
                                (T = A),
                                (S = (0, p.hm)(R)
                                    ? v.intl.format(v.t.VZ8Tvh, { regularPrice: A })
                                    : v.intl.format(x.default.JsSin7, {
                                          priceRate: f,
                                          intervalCount: R.getFullIntervalCount(),
                                      }));
                        }
                    }
                    return { price: N, priceStrikethroughText: T, priceSubText: S, priceSubTextHasStrikethrough: g };
                })({
                    invoiceSummaryType: t,
                    subscriptionPlan: u,
                    invoicePreview: n,
                    priceOptions: w,
                    isPremiumGroupPurchase: j,
                    premiumGroupDiscountOffer: K,
                    premiumDiscountInfo: Z,
                    quantity: k,
                }),
            [t, u, n, w, j, K, Z, k],
        ),
        Q = ((0, y.ys)(u.id) ? (0, y.m6)(u.id) : void 0) === _.PremiumTypes.TIER_2;
    return (0, l.jsx)(o.f7, {
        label: G,
        description: B,
        price: q,
        priceStrikethroughText: z,
        priceSubText: $,
        priceSubTextHasStrikethrough: X,
        target: F,
        graphic: (0, l.jsx)(b, { subscriptionPlan: u, storeListing: U }),
        omitDefaultIconBackground: Q,
        header: Y,
        headerIconSrc: H,
        headerIconComponent: V,
        bottomSubText: D,
    });
}
function b(e) {
    let { subscriptionPlan: t, storeListing: n } = e,
        i = (0, r.bG)([f.A], () => f.A.get(t.skuId), [t.skuId]),
        a = (0, y.ys)(t.id) ? (0, y.m6)(t.id) : void 0;
    return (0, l.jsx)(u.WH, { sku: i, premiumType: a, storeListing: n });
}
function M(e) {
    return e === C.N$.PREMIUM_GIFT;
}
