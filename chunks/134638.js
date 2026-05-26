n.d(t, { _: () => g });
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
    h = n(71393),
    C = n(967198),
    A = n(67480),
    y = n(486020),
    E = n(428262),
    P = n(580630),
    S = n(888751),
    _ = n(652215),
    f = n(788868),
    T = n(88001),
    I = n(375708),
    x = n(982772),
    N = n(963458);
function g(e) {
    let {
            type: t,
            invoicePreview: n,
            subscriptionPlan: o,
            isPrepaidPaymentSource: g,
            giftRecipient: b,
            isPremiumGroupPurchase: j = !1,
            guildId: R,
            bottomSubText: L,
            storeListing: O,
        } = e,
        D = (0, u.t4)((e) => e.checkoutPriceOptions),
        w = (function (e) {
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
                    : I.intl.formatToPlainString(N.default["8bPDtb"], { premiumGroupProductName: (0, T.DP)() })
                : M(t)
                  ? (0, S.iK)(l)
                  : (0, E.ys)(l.id)
                    ? (0, E.Mn)(l.id, !1, i)
                    : l.name;
        })({
            invoiceSummaryType: t,
            invoicePreview: n,
            subscriptionPlan: o,
            isPremiumGroupPurchase: j,
            isPrepaidPaymentSource: g,
        }),
        U = (function (e) {
            let { guildId: t, invoiceSummaryType: n, giftRecipient: l } = e,
                a = (0, i.bG)([h.A], () => (null != t ? h.A.getGuild(t) : null), [t]);
            return M(n) && null != l
                ? { type: "gift", user: l }
                : null != a
                  ? { type: "guildSubscription", guild: a }
                  : void 0;
        })({ guildId: R, invoiceSummaryType: t, giftRecipient: b }),
        k = (function (e) {
            let { invoiceSummaryType: t, guildId: n, giftRecipient: l } = e;
            return M(t)
                ? null != l
                    ? ""
                    : I.intl.string(x.default["3wsYeI"])
                : null == n
                  ? I.intl.string(x.default["2zUa6I"])
                  : void 0;
        })({ guildId: R, invoiceSummaryType: t, giftRecipient: b }),
        {
            header: Y,
            headerIconSrc: G,
            guildForIcon: F,
        } = (function (e) {
            let { skuId: t } = e;
            return (0, i.cf)([r.A, A.A, h.A, C.A], () => {
                let e = A.A.get(t);
                if (null == e) return {};
                let n = e.productLine;
                if (n === _.EZt.PREMIUM) return {};
                let l = r.A.getApplication(e.applicationId);
                if (null == l) return {};
                if (n === _.EZt.GUILD_ROLE) {
                    let e = C.A.getGuildId(),
                        t = h.A.getGuild(e);
                    return null != t ? { header: t.name, guildForIcon: t } : {};
                }
                let a = y.Ay.getApplicationIconURL({ id: l.id, icon: l.icon });
                return { header: l.name, headerIconSrc: a };
            }, [t]);
        })({ skuId: o.skuId }),
        B = null != F ? (0, l.jsx)(c.Ay, { guild: F, size: c.Ay.Sizes.SMOL }) : void 0,
        {
            price: W,
            priceSubText: V,
            priceSubTextHasStrikethrough: H,
        } = a.useMemo(
            () =>
                (function (e) {
                    let { invoiceSummaryType: t, subscriptionPlan: n, invoicePreview: l, priceOptions: a } = e,
                        { subscriptionPlanInvoiceItem: i } = (0, d.Sb)(l, n),
                        r = M(t),
                        s = t === m.N$.PREMIUM_WITH_TRIAL,
                        o = (r ? i?.amount : i?.subscriptionPlanPrice) ?? 0,
                        u = (0, P.$g)(o, l.currency),
                        c = (0, P.CE)(u, n.interval, n.intervalCount),
                        h = null,
                        C = !1;
                    if (s) h = (0, p.O7)(n, { amount: o, currency: l.currency });
                    else if (r && n.interval === f.WT.YEAR && (0, E.xq)(n.id)) {
                        let e = (0, E.VA)({ subscriptionPlan: n, isGift: r, priceOptions: a });
                        (h = null != e ? (0, P.$g)(e, l.currency) : null), (C = !0);
                    }
                    let A = c;
                    return (
                        s ? (A = (0, S.ib)(l.currency, { includeNowSuffix: !0 })) : t === m.N$.PREMIUM_GIFT && (A = u),
                        { price: A, priceSubText: h, priceSubTextHasStrikethrough: C }
                    );
                })({ invoiceSummaryType: t, subscriptionPlan: o, invoicePreview: n, priceOptions: D }),
            [t, o, n, D],
        ),
        K = ((0, E.ys)(o.id) ? (0, E.m6)(o.id) : void 0) === f.PremiumTypes.TIER_2;
    return (0, l.jsx)(s.f7, {
        label: w,
        description: k,
        price: W,
        priceSubText: V,
        priceSubTextHasStrikethrough: H,
        target: U,
        graphic: (0, l.jsx)(v, { subscriptionPlan: o, storeListing: O }),
        omitDefaultIconBackground: K,
        header: Y,
        headerIconSrc: G,
        headerIconComponent: B,
        bottomSubText: L,
    });
}
function v(e) {
    let { subscriptionPlan: t, storeListing: n } = e,
        a = (0, i.bG)([A.A], () => A.A.get(t.skuId), [t.skuId]),
        r = (0, E.ys)(t.id) ? (0, E.m6)(t.id) : void 0;
    return (0, l.jsx)(o.WH, { sku: a, premiumType: r, storeListing: n });
}
function M(e) {
    return e === m.N$.PREMIUM_GIFT;
}
