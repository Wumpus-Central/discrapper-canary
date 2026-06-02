n.d(t, { _: () => R });
var l = n(627968),
    r = n(64700),
    i = n(17928),
    a = n(587895),
    s = n(463376),
    o = n(944355),
    u = n(241989),
    c = n(722847),
    d = n(548118),
    p = n(410516),
    m = n(815545),
    h = n(736339),
    A = n(299301),
    C = n(71393),
    E = n(967198),
    y = n(67480),
    P = n(486020),
    S = n(428262),
    _ = n(580630),
    f = n(888751),
    I = n(652215),
    T = n(788868),
    N = n(88001),
    v = n(375708),
    g = n(327105),
    x = n(466919);
function R(e) {
    let {
            type: t,
            invoicePreview: n,
            subscriptionPlan: u,
            isPrepaidPaymentSource: R,
            giftRecipient: L,
            isPremiumGroupPurchase: j = !1,
            guildId: O,
            bottomSubText: w,
            storeListing: D,
        } = e,
        U = (0, c.t4)((e) => e.checkoutPriceOptions),
        k = (function (e) {
            let {
                    invoiceSummaryType: t,
                    invoicePreview: n,
                    subscriptionPlan: l,
                    isPremiumGroupPurchase: r,
                    isPrepaidPaymentSource: i,
                } = e,
                { subscriptionPlanInvoiceItem: a } = (0, m.Sb)(n, l);
            return r
                ? null != a
                    ? (0, m.Tp)(a, l)
                    : v.intl.formatToPlainString(x.default["8bPDtb"], { premiumGroupProductName: (0, N.DP)() })
                : b(t)
                  ? (0, f.iK)(l)
                  : (0, S.ys)(l.id)
                    ? (0, S.Mn)(l.id, !1, i)
                    : l.name;
        })({
            invoiceSummaryType: t,
            invoicePreview: n,
            subscriptionPlan: u,
            isPremiumGroupPurchase: j,
            isPrepaidPaymentSource: R,
        }),
        G = (function (e) {
            let { guildId: t, invoiceSummaryType: n, giftRecipient: l } = e,
                r = (0, i.bG)([C.A], () => (null != t ? C.A.getGuild(t) : null), [t]);
            return b(n) && null != l
                ? { type: "gift", user: l }
                : null != r
                  ? { type: "guildSubscription", guild: r }
                  : void 0;
        })({ guildId: O, invoiceSummaryType: t, giftRecipient: L }),
        Y = (function (e) {
            let { invoiceSummaryType: t, guildId: n, giftRecipient: l } = e;
            return b(t)
                ? null != l
                    ? ""
                    : v.intl.string(g.default["3wsYeI"])
                : null == n
                  ? v.intl.string(g.default["2zUa6I"])
                  : void 0;
        })({ guildId: O, invoiceSummaryType: t, giftRecipient: L }),
        {
            header: F,
            headerIconSrc: B,
            guildForIcon: W,
        } = (function (e) {
            let { skuId: t } = e;
            return (0, i.cf)([a.A, y.A, C.A, E.A], () => {
                let e = y.A.get(t);
                if (null == e) return {};
                let n = e.productLine;
                if (n === I.EZt.PREMIUM) return {};
                let l = a.A.getApplication(e.applicationId);
                if (null == l) return {};
                if (n === I.EZt.GUILD_ROLE) {
                    let e = E.A.getGuildId(),
                        t = C.A.getGuild(e);
                    return null != t ? { header: t.name, guildForIcon: t } : {};
                }
                let r = P.Ay.getApplicationIconURL({ id: l.id, icon: l.icon });
                return { header: l.name, headerIconSrc: r };
            }, [t]);
        })({ skuId: u.skuId }),
        H = null != W ? (0, l.jsx)(d.Ay, { guild: W, size: d.Ay.Sizes.SMOL }) : void 0,
        { premiumGroupDiscountOffer: V } = (0, s.i)(),
        {
            price: K,
            priceSubText: Z,
            priceSubTextHasStrikethrough: q,
        } = r.useMemo(
            () =>
                (function (e) {
                    let {
                            invoiceSummaryType: t,
                            subscriptionPlan: n,
                            invoicePreview: l,
                            priceOptions: r,
                            isPremiumGroupPurchase: i,
                            premiumGroupDiscountOffer: a,
                        } = e,
                        { subscriptionPlanInvoiceItem: s } = (0, m.Sb)(l, n),
                        o = b(t),
                        u = t === A.N$.PREMIUM_WITH_TRIAL,
                        c = (o ? s?.amount : s?.subscriptionPlanPrice) ?? 0,
                        d = (0, _.$g)(c, l.currency),
                        C = (0, _.CE)(d, n.interval, n.intervalCount),
                        E = null,
                        y = !1,
                        P = C;
                    if (u)
                        (E = (0, h.O7)(n, { amount: c, currency: l.currency })),
                            (P = (0, f.ib)(l.currency, { includeNowSuffix: !0 }));
                    else if (o && n.interval === T.WT.YEAR && (0, S.xq)(n.id)) {
                        P = d;
                        let e = (0, S.VA)({ subscriptionPlan: n, isGift: o, priceOptions: r });
                        (E = null != e ? (0, _.$g)(e, l.currency) : null), (y = !0);
                    } else if (i) {
                        let e = (0, p.pg)(l, n.id);
                        if (null != a && a.getApplicableSubscriptionInterval() === n.interval && null != e) {
                            let t = (0, _.$g)(c - e, l.currency);
                            (P = v.intl.format(g.default.U2CmMW, { priceAmount: t })),
                                (E = v.intl.format(g.default.JsSin7, {
                                    priceRate: (0, _.CE)(d, n.interval, n.intervalCount),
                                    intervalCount: a.getFullIntervalCount(),
                                }));
                        }
                    }
                    return { price: P, priceSubText: E, priceSubTextHasStrikethrough: y };
                })({
                    invoiceSummaryType: t,
                    subscriptionPlan: u,
                    invoicePreview: n,
                    priceOptions: U,
                    isPremiumGroupPurchase: j,
                    premiumGroupDiscountOffer: V,
                }),
            [t, u, n, U, j, V],
        ),
        z = ((0, S.ys)(u.id) ? (0, S.m6)(u.id) : void 0) === T.PremiumTypes.TIER_2;
    return (0, l.jsx)(o.f7, {
        label: k,
        description: Y,
        price: K,
        priceSubText: Z,
        priceSubTextHasStrikethrough: q,
        target: G,
        graphic: (0, l.jsx)(M, { subscriptionPlan: u, storeListing: D }),
        omitDefaultIconBackground: z,
        header: F,
        headerIconSrc: B,
        headerIconComponent: H,
        bottomSubText: w,
    });
}
function M(e) {
    let { subscriptionPlan: t, storeListing: n } = e,
        r = (0, i.bG)([y.A], () => y.A.get(t.skuId), [t.skuId]),
        a = (0, S.ys)(t.id) ? (0, S.m6)(t.id) : void 0;
    return (0, l.jsx)(u.WH, { sku: r, premiumType: a, storeListing: n });
}
function b(e) {
    return e === A.N$.PREMIUM_GIFT;
}
