n.d(t, { _: () => b });
var l = n(477900),
    i = n(582128),
    r = n(17928),
    a = n(587895),
    s = n(400612),
    o = n(463376),
    u = n(936477),
    c = n(241989),
    d = n(206441),
    m = n(548118),
    p = n(511484),
    C = n(815545),
    h = n(958720),
    f = n(71393),
    E = n(967198),
    S = n(67480),
    y = n(486020),
    I = n(158045),
    A = n(580630),
    g = n(888751),
    P = n(652215),
    v = n(202541),
    x = n(88001),
    _ = n(375708),
    T = n(477729),
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
                { subscriptionPlanInvoiceItem: s } = (0, C.Sb)(n, l);
            if (i)
                return null != s
                    ? (0, C.Tp)(s, l)
                    : _.intl.formatToPlainString(N.default["8bPDtb"], { premiumGroupProductName: (0, x.DP)() });
            if (R(t)) {
                let e = (0, g.iK)(l);
                return a > 1 ? _.intl.format(T.default.kyGViz, { quantity: a, label: e }) : e;
            }
            return (0, I.ys)(l.id) ? (0, I.Mn)(l.id, !1, r) : l.name;
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
            return R(n) && null != l
                ? { type: "gift", user: l }
                : null != i
                  ? { type: "guildSubscription", guild: i }
                  : void 0;
        })({ guildId: L, invoiceSummaryType: t, giftRecipient: M }),
        B = (function (e) {
            let { invoiceSummaryType: t, guildId: n, giftRecipient: l } = e;
            return R(t)
                ? null != l
                    ? ""
                    : _.intl.string(T.default["3wsYeI"])
                : null == n
                  ? _.intl.string(T.default["2zUa6I"])
                  : void 0;
        })({ guildId: L, invoiceSummaryType: t, giftRecipient: M }),
        {
            header: H,
            headerIconSrc: W,
            guildForIcon: Y,
        } = (function (e) {
            let { skuId: t } = e;
            return (0, r.cf)([a.A, S.A, f.A, E.A], () => {
                let e = S.A.get(t);
                if (null == e) return {};
                let n = e.productLine;
                if (n === P.EZt.PREMIUM) return {};
                let l = a.A.getApplication(e.applicationId);
                if (null == l) return {};
                if (n === P.EZt.GUILD_ROLE) {
                    let e = E.A.getGuildId(),
                        t = f.A.getGuild(e);
                    return null != t ? { header: t.name, guildForIcon: t } : {};
                }
                let i = y.Ay.getApplicationIconURL({ id: l.id, icon: l.icon });
                return { header: l.name, headerIconSrc: i };
            }, [t]);
        })({ skuId: c.skuId }),
        V = null != Y ? (0, l.jsx)(m.Ay, { guild: Y, size: m.Ay.Sizes.SMOL }) : void 0,
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
                        d = R(t),
                        m = t === s.u$.PREMIUM_WITH_TRIAL,
                        f = (d ? c?.amount : c?.subscriptionPlanPrice) ?? 0,
                        E = (0, A.$g)(f, l.currency),
                        S = (0, A.CE)(E, n.interval, n.intervalCount),
                        y = null,
                        P = null,
                        x = !1,
                        N = S,
                        b = o?.discountOffer;
                    if (m)
                        (y = (0, h.O7)(n, { amount: f, currency: l.currency })),
                            (N = (0, g.ib)(l.currency, { includeNowSuffix: !0 }));
                    else if (d) {
                        if (((N = E), n.interval === v.WT.YEAR && (0, I.xq)(n.id))) {
                            let e = (0, I.VA)({ subscriptionPlan: n, isGift: d, priceOptions: i });
                            (y = null != e ? (0, A.$g)(e * u, l.currency) : null), (x = !0);
                        }
                    } else if (r) {
                        let e = (0, p.pg)(l, n.id);
                        if (null != a && a.discount.applicableSubscriptionInterval === n.interval && null != e) {
                            let t = (0, A.$g)(f - e, l.currency);
                            (N = _.intl.format(T.default.U2CmMW, { priceAmount: t })),
                                (y = _.intl.format(T.default.JsSin7, {
                                    priceRate: (0, A.CE)(E, n.interval, n.intervalCount),
                                    intervalCount: a.discount.intervalCount,
                                }));
                        }
                    } else if ((0, I.xq)(n.id) && null != b) {
                        let e = (0, p.pg)(l, n.id);
                        if ((0, C.Ro)(l, b.discount.id) && null != e) {
                            let t = (0, A.$g)(f - e, l.currency);
                            (N = _.intl.format(_.t.hXcaLT, { price: t })),
                                (P = E),
                                (y = (0, p.hm)(b)
                                    ? _.intl.format(_.t.VZ8Tvh, { regularPrice: E })
                                    : _.intl.format(T.default.JsSin7, {
                                          priceRate: S,
                                          intervalCount: b.discount.intervalCount,
                                      }));
                        }
                    }
                    return { price: N, priceStrikethroughText: P, priceSubText: y, priceSubTextHasStrikethrough: x };
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
        J = ((0, I.ys)(c.id) ? (0, I.m6)(c.id) : void 0) === v.PremiumTypes.TIER_2;
    return (0, l.jsx)(u.f7, {
        label: G,
        description: B,
        price: q,
        priceStrikethroughText: z,
        priceSubText: Q,
        priceSubTextHasStrikethrough: $,
        target: F,
        graphic: (0, l.jsx)(j, { subscriptionPlan: c, storeListing: w }),
        omitDefaultIconBackground: J,
        header: H,
        headerIconSrc: W,
        headerIconComponent: V,
        bottomSubText: k,
    });
}
function j(e) {
    let { subscriptionPlan: t, storeListing: n } = e,
        i = (0, r.bG)([S.A], () => S.A.get(t.skuId), [t.skuId]),
        a = (0, I.ys)(t.id) ? (0, I.m6)(t.id) : void 0;
    return (0, I.z4)(t.id) ? (0, l.jsx)(c.a6, {}) : (0, l.jsx)(c.WH, { sku: i, premiumType: a, storeListing: n });
}
function R(e) {
    return e === s.u$.PREMIUM_GIFT;
}
