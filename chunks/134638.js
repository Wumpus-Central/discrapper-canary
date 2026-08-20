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
    h = n(815545),
    C = n(958720),
    f = n(71393),
    E = n(967198),
    S = n(67480),
    y = n(486020),
    A = n(158045),
    P = n(580630),
    I = n(888751),
    g = n(652215),
    v = n(202541),
    _ = n(88001),
    T = n(375708),
    x = n(477729),
    N = n(109447);
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
                { subscriptionPlanInvoiceItem: s } = (0, h.Sb)(n, l);
            if (i)
                return null != s
                    ? (0, h.Tp)(s, l)
                    : T.intl.formatToPlainString(N.default["8bPDtb"], { premiumGroupProductName: (0, _.DP)() });
            if (j(t)) {
                let e = (0, I.iK)(l);
                return a > 1 ? T.intl.format(x.default.kyGViz, { quantity: a, label: e }) : e;
            }
            return (0, A.ys)(l.id) ? (0, A.Mn)(l.id, !1, r) : l.name;
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
        B = (function (e) {
            let { invoiceSummaryType: t, guildId: n, giftRecipient: l } = e;
            return j(t)
                ? null != l
                    ? ""
                    : T.intl.string(x.default["3wsYeI"])
                : null == n
                  ? T.intl.string(x.default["2zUa6I"])
                  : void 0;
        })({ guildId: L, invoiceSummaryType: t, giftRecipient: M }),
        {
            header: H,
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
                let i = y.Ay.getApplicationIconURL({ id: l.id, icon: l.icon });
                return { header: l.name, headerIconSrc: i };
            }, [t]);
        })({ skuId: c.skuId }),
        V = null != W ? (0, l.jsx)(p.Ay, { guild: W, size: p.Ay.Sizes.SMOL }) : void 0,
        { premiumGroupDiscountOffer: K } = (0, o.i)(),
        q = (0, d.t4)((e) => e.premiumDiscountInfo),
        {
            price: Z,
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
                        { subscriptionPlanInvoiceItem: c } = (0, h.Sb)(l, n),
                        d = j(t),
                        p = t === s.u$.PREMIUM_WITH_TRIAL,
                        f = (d ? c?.amount : c?.subscriptionPlanPrice) ?? 0,
                        E = (0, P.$g)(f, l.currency),
                        S = (0, P.CE)(E, n.interval, n.intervalCount),
                        y = null,
                        g = null,
                        _ = !1,
                        N = S,
                        b = o?.discountOffer;
                    if (p)
                        (y = (0, C.O7)(n, { amount: f, currency: l.currency })),
                            (N = (0, I.ib)(l.currency, { includeNowSuffix: !0 }));
                    else if (d) {
                        if (((N = E), n.interval === v.WT.YEAR && (0, A.xq)(n.id))) {
                            let e = (0, A.VA)({ subscriptionPlan: n, isGift: d, priceOptions: i });
                            (y = null != e ? (0, P.$g)(e * u, l.currency) : null), (_ = !0);
                        }
                    } else if (r) {
                        let e = (0, m.pg)(l, n.id);
                        if (null != a && a.discount.applicableSubscriptionInterval === n.interval && null != e) {
                            let t = (0, P.$g)(f - e, l.currency);
                            (N = T.intl.format(x.default.U2CmMW, { priceAmount: t })),
                                (y = T.intl.format(x.default.JsSin7, {
                                    priceRate: (0, P.CE)(E, n.interval, n.intervalCount),
                                    intervalCount: a.discount.intervalCount,
                                }));
                        }
                    } else if ((0, A.xq)(n.id) && null != b) {
                        let e = (0, m.pg)(l, n.id);
                        if ((0, h.Ro)(l, b.discount.id) && null != e) {
                            let t = (0, P.$g)(f - e, l.currency);
                            (N = T.intl.format(T.t.hXcaLT, { price: t })),
                                (g = E),
                                (y = (0, m.hm)(b)
                                    ? T.intl.format(T.t.VZ8Tvh, { regularPrice: E })
                                    : T.intl.format(x.default.JsSin7, {
                                          priceRate: S,
                                          intervalCount: b.discount.intervalCount,
                                      }));
                        }
                    }
                    return { price: N, priceStrikethroughText: g, priceSubText: y, priceSubTextHasStrikethrough: _ };
                })({
                    invoiceSummaryType: t,
                    subscriptionPlan: c,
                    invoicePreview: n,
                    priceOptions: U,
                    isPremiumGroupPurchase: O,
                    premiumGroupDiscountOffer: K,
                    premiumDiscountInfo: q,
                    quantity: D,
                }),
            [t, c, n, U, O, K, q, D],
        ),
        J = ((0, A.ys)(c.id) ? (0, A.m6)(c.id) : void 0) === v.PremiumTypes.TIER_2;
    return (0, l.jsx)(u.f7, {
        label: G,
        description: B,
        price: Z,
        priceStrikethroughText: z,
        priceSubText: Q,
        priceSubTextHasStrikethrough: $,
        target: F,
        graphic: (0, l.jsx)(R, { subscriptionPlan: c, storeListing: w }),
        omitDefaultIconBackground: J,
        header: H,
        headerIconSrc: Y,
        headerIconComponent: V,
        bottomSubText: k,
    });
}
function R(e) {
    let { subscriptionPlan: t, storeListing: n } = e,
        i = (0, r.bG)([S.A], () => S.A.get(t.skuId), [t.skuId]),
        a = (0, A.ys)(t.id) ? (0, A.m6)(t.id) : void 0;
    return (0, A.z4)(t.id) ? (0, l.jsx)(c.a6, {}) : (0, l.jsx)(c.WH, { sku: i, premiumType: a, storeListing: n });
}
function j(e) {
    return e === s.u$.PREMIUM_GIFT;
}
