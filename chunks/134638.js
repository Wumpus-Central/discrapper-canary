n.d(t, { _: () => b });
var l = n(477900),
    i = n(582128),
    r = n(17928),
    a = n(587895),
    s = n(400612),
    o = n(463376),
    u = n(936477),
    c = n(241989),
    d = n(87725),
    p = n(548118),
    m = n(511484),
    C = n(815545),
    h = n(135314),
    f = n(71393),
    E = n(967198),
    S = n(67480),
    A = n(486020),
    y = n(158045),
    P = n(580630),
    I = n(888751),
    g = n(652215),
    v = n(202541),
    T = n(88001),
    _ = n(375708),
    x = n(327105),
    N = n(466919);
function b(e) {
    let {
            type: t,
            invoicePreview: n,
            subscriptionPlan: c,
            isPrepaidPaymentSource: b,
            giftRecipient: M,
            isPremiumGroupPurchase: O = !1,
            guildId: L,
            bottomSubText: k,
            storeListing: w,
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
                    : _.intl.formatToPlainString(N.default["8bPDtb"], { premiumGroupProductName: (0, T.DP)() });
            if (j(t)) {
                let e = (0, I.iK)(l);
                return a > 1 ? _.intl.format(x.default.kyGViz, { quantity: a, label: e }) : e;
            }
            return (0, y.ys)(l.id) ? (0, y.Mn)(l.id, !1, r) : l.name;
        })({
            invoiceSummaryType: t,
            invoicePreview: n,
            subscriptionPlan: c,
            isPremiumGroupPurchase: O,
            isPrepaidPaymentSource: b,
            quantity: D,
        }),
        F = (function (e) {
            let { guildId: t, invoiceSummaryType: n, giftRecipient: l } = e,
                i = (0, r.bG)([f.A], () => (null != t ? f.A.getGuild(t) : null), [t]);
            return j(n) && null != l
                ? { type: "gift", user: l }
                : null != i
                  ? { type: "guildSubscription", guild: i }
                  : void 0;
        })({ guildId: L, invoiceSummaryType: t, giftRecipient: M }),
        H = (function (e) {
            let { invoiceSummaryType: t, guildId: n, giftRecipient: l } = e;
            return j(t)
                ? null != l
                    ? ""
                    : _.intl.string(x.default["3wsYeI"])
                : null == n
                  ? _.intl.string(x.default["2zUa6I"])
                  : void 0;
        })({ guildId: L, invoiceSummaryType: t, giftRecipient: M }),
        {
            header: B,
            headerIconSrc: Y,
            guildForIcon: W,
        } = (function (e) {
            let { skuId: t } = e;
            return (0, r.cf)([a.A, S.A, f.A, E.A], () => {
                let e = S.A.get(t);
                if (null == e) return {};
                let n = e.productLine;
                if (n === g.EZt.PREMIUM) return {};
                let l = a.A.getApplication(e.applicationId);
                if (null == l) return {};
                if (n === g.EZt.GUILD_ROLE) {
                    let e = E.A.getGuildId(),
                        t = f.A.getGuild(e);
                    return null != t ? { header: t.name, guildForIcon: t } : {};
                }
                let i = A.Ay.getApplicationIconURL({ id: l.id, icon: l.icon });
                return { header: l.name, headerIconSrc: i };
            }, [t]);
        })({ skuId: c.skuId }),
        V = null != W ? (0, l.jsx)(p.Ay, { guild: W, size: p.Ay.Sizes.SMOL }) : void 0,
        { premiumGroupDiscountOffer: K } = (0, o.i)(),
        Z = (0, d.t4)((e) => e.premiumDiscountInfo),
        {
            price: q,
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
                            premiumDiscountInfo: o,
                            quantity: u,
                        } = e,
                        { subscriptionPlanInvoiceItem: c } = (0, C.Sb)(l, n),
                        d = j(t),
                        p = t === s.u$.PREMIUM_WITH_TRIAL,
                        f = (d ? c?.amount : c?.subscriptionPlanPrice) ?? 0,
                        E = (0, P.$g)(f, l.currency),
                        S = (0, P.CE)(E, n.interval, n.intervalCount),
                        A = null,
                        g = null,
                        T = !1,
                        N = S,
                        b = o?.discountOffer;
                    if (p)
                        (A = (0, h.O7)(n, { amount: f, currency: l.currency })),
                            (N = (0, I.ib)(l.currency, { includeNowSuffix: !0 }));
                    else if (d) {
                        if (((N = E), n.interval === v.WT.YEAR && (0, y.xq)(n.id))) {
                            let e = (0, y.VA)({ subscriptionPlan: n, isGift: d, priceOptions: i });
                            (A = null != e ? (0, P.$g)(e * u, l.currency) : null), (T = !0);
                        }
                    } else if (r) {
                        let e = (0, m.pg)(l, n.id);
                        if (null != a && a.getApplicableSubscriptionInterval() === n.interval && null != e) {
                            let t = (0, P.$g)(f - e, l.currency);
                            (N = _.intl.format(x.default.U2CmMW, { priceAmount: t })),
                                (A = _.intl.format(x.default.JsSin7, {
                                    priceRate: (0, P.CE)(E, n.interval, n.intervalCount),
                                    intervalCount: a.getFullIntervalCount(),
                                }));
                        }
                    } else if ((0, y.xq)(n.id) && null != b) {
                        let e = (0, m.pg)(l, n.id);
                        if ((0, C.Ro)(l, b.discount.id) && null != e) {
                            let t = (0, P.$g)(f - e, l.currency);
                            (N = _.intl.format(_.t.hXcaLT, { price: t })),
                                (g = E),
                                (A = (0, m.hm)(b)
                                    ? _.intl.format(_.t.VZ8Tvh, { regularPrice: E })
                                    : _.intl.format(x.default.JsSin7, {
                                          priceRate: S,
                                          intervalCount: b.getFullIntervalCount(),
                                      }));
                        }
                    }
                    return { price: N, priceStrikethroughText: g, priceSubText: A, priceSubTextHasStrikethrough: T };
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
        J = ((0, y.ys)(c.id) ? (0, y.m6)(c.id) : void 0) === v.PremiumTypes.TIER_2;
    return (0, l.jsx)(u.f7, {
        label: G,
        description: H,
        price: q,
        priceStrikethroughText: z,
        priceSubText: $,
        priceSubTextHasStrikethrough: Q,
        target: F,
        graphic: (0, l.jsx)(R, { subscriptionPlan: c, storeListing: w }),
        omitDefaultIconBackground: J,
        header: B,
        headerIconSrc: Y,
        headerIconComponent: V,
        bottomSubText: k,
    });
}
function R(e) {
    let { subscriptionPlan: t, storeListing: n } = e,
        i = (0, r.bG)([S.A], () => S.A.get(t.skuId), [t.skuId]),
        a = (0, y.ys)(t.id) ? (0, y.m6)(t.id) : void 0;
    return (0, y.z4)(t.id) ? (0, l.jsx)(c.a6, {}) : (0, l.jsx)(c.WH, { sku: i, premiumType: a, storeListing: n });
}
function j(e) {
    return e === s.u$.PREMIUM_GIFT;
}
