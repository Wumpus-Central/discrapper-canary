n.d(t, { _: () => R });
var l = n(477900),
    i = n(582128),
    r = n(17928),
    a = n(587895),
    s = n(400612),
    o = n(463376),
    u = n(936477),
    c = n(241989),
    d = n(316915),
    p = n(548118),
    m = n(410516),
    C = n(815545),
    h = n(135314),
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
    v = n(375708),
    x = n(327105),
    N = n(466919);
function R(e) {
    let {
            type: t,
            invoicePreview: n,
            subscriptionPlan: c,
            isPrepaidPaymentSource: R,
            giftRecipient: j,
            isPremiumGroupPurchase: O = !1,
            guildId: L,
            bottomSubText: w,
            storeListing: k,
        } = e,
        U = (0, d.t4)((e) => e.checkoutPriceOptions),
        D = (0, d.t4)((e) => e.quantity),
        G = (function (e) {
            let {
                    invoiceSummaryType: t,
                    invoicePreview: n,
                    subscriptionPlan: l,
                    isPremiumGroupPurchase: i,
                    isPrepaidPaymentSource: r,
                    quantity: a,
                } = e,
                { subscriptionPlanInvoiceItem: s } = (0, C.Sb)(n, l);
            if (i)
                return null != s
                    ? (0, C.Tp)(s, l)
                    : v.intl.formatToPlainString(N.default["8bPDtb"], { premiumGroupProductName: (0, g.DP)() });
            if (M(t)) {
                let e = (0, I.iK)(l);
                return a > 1 ? v.intl.format(x.default.kyGViz, { quantity: a, label: e }) : e;
            }
            return (0, y.ys)(l.id) ? (0, y.Mn)(l.id, !1, r) : l.name;
        })({
            invoiceSummaryType: t,
            invoicePreview: n,
            subscriptionPlan: c,
            isPremiumGroupPurchase: O,
            isPrepaidPaymentSource: R,
            quantity: D,
        }),
        F = (function (e) {
            let { guildId: t, invoiceSummaryType: n, giftRecipient: l } = e,
                i = (0, r.bG)([E.A], () => (null != t ? E.A.getGuild(t) : null), [t]);
            return M(n) && null != l
                ? { type: "gift", user: l }
                : null != i
                  ? { type: "guildSubscription", guild: i }
                  : void 0;
        })({ guildId: L, invoiceSummaryType: t, giftRecipient: j }),
        H = (function (e) {
            let { invoiceSummaryType: t, guildId: n, giftRecipient: l } = e;
            return M(t)
                ? null != l
                    ? ""
                    : v.intl.string(x.default["3wsYeI"])
                : null == n
                  ? v.intl.string(x.default["2zUa6I"])
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
        })({ skuId: c.skuId }),
        V = null != W ? (0, l.jsx)(p.Ay, { guild: W, size: p.Ay.Sizes.SMOL }) : void 0,
        { premiumGroupDiscountOffer: K } = (0, o.i)(),
        Z = (0, d.t4)((e) => e.premiumDiscountInfo),
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
                            premiumDiscountInfo: o,
                            quantity: u,
                        } = e,
                        { subscriptionPlanInvoiceItem: c } = (0, C.Sb)(l, n),
                        d = M(t),
                        p = t === s.u$.PREMIUM_WITH_TRIAL,
                        E = (d ? c?.amount : c?.subscriptionPlanPrice) ?? 0,
                        f = (0, P.$g)(E, l.currency),
                        A = (0, P.CE)(f, n.interval, n.intervalCount),
                        S = null,
                        _ = null,
                        g = !1,
                        N = A,
                        R = o?.discountOffer;
                    if (p)
                        (S = (0, h.O7)(n, { amount: E, currency: l.currency })),
                            (N = (0, I.ib)(l.currency, { includeNowSuffix: !0 }));
                    else if (d) {
                        if (((N = f), n.interval === T.WT.YEAR && (0, y.xq)(n.id))) {
                            let e = (0, y.VA)({ subscriptionPlan: n, isGift: d, priceOptions: i });
                            (S = null != e ? (0, P.$g)(e * u, l.currency) : null), (g = !0);
                        }
                    } else if (r) {
                        let e = (0, m.pg)(l, n.id);
                        if (null != a && a.getApplicableSubscriptionInterval() === n.interval && null != e) {
                            let t = (0, P.$g)(E - e, l.currency);
                            (N = v.intl.format(x.default.U2CmMW, { priceAmount: t })),
                                (S = v.intl.format(x.default.JsSin7, {
                                    priceRate: (0, P.CE)(f, n.interval, n.intervalCount),
                                    intervalCount: a.getFullIntervalCount(),
                                }));
                        }
                    } else if ((0, y.xq)(n.id) && null != R) {
                        let e = (0, m.pg)(l, n.id);
                        if ((0, C.Ro)(l, R.discount.id) && null != e) {
                            let t = (0, P.$g)(E - e, l.currency);
                            (N = v.intl.format(v.t.hXcaLT, { price: t })),
                                (_ = f),
                                (S = (0, m.hm)(R)
                                    ? v.intl.format(v.t.VZ8Tvh, { regularPrice: f })
                                    : v.intl.format(x.default.JsSin7, {
                                          priceRate: A,
                                          intervalCount: R.getFullIntervalCount(),
                                      }));
                        }
                    }
                    return { price: N, priceStrikethroughText: _, priceSubText: S, priceSubTextHasStrikethrough: g };
                })({
                    invoiceSummaryType: t,
                    subscriptionPlan: c,
                    invoicePreview: n,
                    priceOptions: U,
                    isPremiumGroupPurchase: O,
                    premiumGroupDiscountOffer: K,
                    premiumDiscountInfo: Z,
                    quantity: D,
                }),
            [t, c, n, U, O, K, Z, D],
        ),
        J = ((0, y.ys)(c.id) ? (0, y.m6)(c.id) : void 0) === T.PremiumTypes.TIER_2;
    return (0, l.jsx)(u.f7, {
        label: G,
        description: H,
        price: q,
        priceStrikethroughText: z,
        priceSubText: Q,
        priceSubTextHasStrikethrough: $,
        target: F,
        graphic: (0, l.jsx)(b, { subscriptionPlan: c, storeListing: k }),
        omitDefaultIconBackground: J,
        header: B,
        headerIconSrc: Y,
        headerIconComponent: V,
        bottomSubText: w,
    });
}
function b(e) {
    let { subscriptionPlan: t, storeListing: n } = e,
        i = (0, r.bG)([A.A], () => A.A.get(t.skuId), [t.skuId]),
        a = (0, y.ys)(t.id) ? (0, y.m6)(t.id) : void 0;
    return (0, y.z4)(t.id) ? (0, l.jsx)(c.a6, {}) : (0, l.jsx)(c.WH, { sku: i, premiumType: a, storeListing: n });
}
function M(e) {
    return e === s.u$.PREMIUM_GIFT;
}
