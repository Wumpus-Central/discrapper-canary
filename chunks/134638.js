n.d(t, { _: () => v });
var l = n(627968),
    a = n(64700),
    i = n(17928),
    r = n(587895),
    s = n(944355),
    o = n(241989),
    u = n(671744),
    c = n(548118),
    d = n(815545),
    p = n(736339),
    m = n(299301),
    h = n(773669),
    C = n(71393),
    A = n(967198),
    y = n(67480),
    E = n(486020),
    P = n(428262),
    S = n(580630),
    f = n(888751),
    _ = n(652215),
    T = n(788868),
    I = n(88001),
    x = n(375708),
    N = n(327105),
    g = n(466919);
function v(e) {
    let {
            type: t,
            invoicePreview: n,
            subscriptionPlan: o,
            isPrepaidPaymentSource: v,
            giftRecipient: j,
            isPremiumGroupPurchase: R = !1,
            guildId: L,
            bottomSubText: O,
            storeListing: D,
        } = e,
        w = (0, u.t4)((e) => e.checkoutPriceOptions),
        U = (function (e) {
            let {
                    invoiceSummaryType: t,
                    invoicePreview: n,
                    subscriptionPlan: l,
                    isPremiumGroupPurchase: a,
                    isPrepaidPaymentSource: i,
                } = e,
                { subscriptionPlanInvoiceItem: r } = (0, d.Sb)(n, l);
            return a
                ? null != r
                    ? (0, d.Tp)(r, l)
                    : x.intl.formatToPlainString(g.default["8bPDtb"], { premiumGroupProductName: (0, I.DP)() })
                : b(t)
                  ? (0, f.iK)(l)
                  : (0, P.ys)(l.id)
                    ? (0, P.Mn)(l.id, !1, i)
                    : l.name;
        })({
            invoiceSummaryType: t,
            invoicePreview: n,
            subscriptionPlan: o,
            isPremiumGroupPurchase: R,
            isPrepaidPaymentSource: v,
        }),
        k = (function (e) {
            let { guildId: t, invoiceSummaryType: n, giftRecipient: l } = e,
                a = (0, i.bG)([C.A], () => (null != t ? C.A.getGuild(t) : null), [t]);
            return b(n) && null != l
                ? { type: "gift", user: l }
                : null != a
                  ? { type: "guildSubscription", guild: a }
                  : void 0;
        })({ guildId: L, invoiceSummaryType: t, giftRecipient: j }),
        Y = (function (e) {
            let { invoiceSummaryType: t, guildId: n, giftRecipient: l, isEnglishLocale: a } = e;
            return b(t)
                ? null != l
                    ? ""
                    : a
                      ? x.intl.string(N.default["3wsYeI"])
                      : x.intl.string(N.default.AM9XGb)
                : null == n
                  ? x.intl.string(N.default["2zUa6I"])
                  : void 0;
        })({
            guildId: L,
            invoiceSummaryType: t,
            giftRecipient: j,
            isEnglishLocale: ["en-US", "en-GB"].includes((0, i.bG)([h.default], () => h.default.locale)),
        }),
        {
            header: G,
            headerIconSrc: F,
            guildForIcon: B,
        } = (function (e) {
            let { skuId: t } = e;
            return (0, i.cf)([r.A, y.A, C.A, A.A], () => {
                let e = y.A.get(t);
                if (null == e) return {};
                let n = e.productLine;
                if (n === _.EZt.PREMIUM) return {};
                let l = r.A.getApplication(e.applicationId);
                if (null == l) return {};
                if (n === _.EZt.GUILD_ROLE) {
                    let e = A.A.getGuildId(),
                        t = C.A.getGuild(e);
                    return null != t ? { header: t.name, guildForIcon: t } : {};
                }
                let a = E.Ay.getApplicationIconURL({ id: l.id, icon: l.icon });
                return { header: l.name, headerIconSrc: a };
            }, [t]);
        })({ skuId: o.skuId }),
        W = null != B ? (0, l.jsx)(c.Ay, { guild: B, size: c.Ay.Sizes.SMOL }) : void 0,
        {
            price: V,
            priceSubText: H,
            priceSubTextHasStrikethrough: K,
        } = a.useMemo(
            () =>
                (function (e) {
                    let { invoiceSummaryType: t, subscriptionPlan: n, invoicePreview: l, priceOptions: a } = e,
                        { subscriptionPlanInvoiceItem: i } = (0, d.Sb)(l, n),
                        r = b(t),
                        s = t === m.N$.PREMIUM_WITH_TRIAL,
                        o = (r ? i?.amount : i?.subscriptionPlanPrice) ?? 0,
                        u = (0, S.$g)(o, l.currency),
                        c = (0, S.CE)(u, n.interval, n.intervalCount),
                        h = null,
                        C = !1;
                    if (s) h = (0, p.O7)(n, { amount: o, currency: l.currency });
                    else if (r && n.interval === T.WT.YEAR && (0, P.xq)(n.id)) {
                        let e = (0, P.VA)({ subscriptionPlan: n, isGift: r, priceOptions: a });
                        (h = null != e ? (0, S.$g)(e, l.currency) : null), (C = !0);
                    }
                    let A = c;
                    return (
                        s ? (A = (0, f.ib)(l.currency, { includeNowSuffix: !0 })) : t === m.N$.PREMIUM_GIFT && (A = u),
                        { price: A, priceSubText: h, priceSubTextHasStrikethrough: C }
                    );
                })({ invoiceSummaryType: t, subscriptionPlan: o, invoicePreview: n, priceOptions: w }),
            [t, o, n, w],
        ),
        Z = ((0, P.ys)(o.id) ? (0, P.m6)(o.id) : void 0) === T.PremiumTypes.TIER_2;
    return (0, l.jsx)(s.f7, {
        label: U,
        description: Y,
        price: V,
        priceSubText: H,
        priceSubTextHasStrikethrough: K,
        target: k,
        graphic: (0, l.jsx)(M, { subscriptionPlan: o, storeListing: D }),
        omitDefaultIconBackground: Z,
        header: G,
        headerIconSrc: F,
        headerIconComponent: W,
        bottomSubText: O,
    });
}
function M(e) {
    let { subscriptionPlan: t, storeListing: n } = e,
        a = (0, i.bG)([y.A], () => y.A.get(t.skuId), [t.skuId]),
        r = (0, P.ys)(t.id) ? (0, P.m6)(t.id) : void 0;
    return (0, l.jsx)(o.WH, { sku: a, premiumType: r, storeListing: n });
}
function b(e) {
    return e === m.N$.PREMIUM_GIFT;
}
