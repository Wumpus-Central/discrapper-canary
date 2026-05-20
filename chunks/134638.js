n.d(t, { _: () => g });
var l = n(627968),
    a = n(64700),
    i = n(17928),
    r = n(587895),
    s = n(944355),
    o = n(241989),
    u = n(548118),
    c = n(815545),
    d = n(736339),
    p = n(299301),
    m = n(71393),
    h = n(967198),
    C = n(67480),
    A = n(486020),
    y = n(428262),
    E = n(580630),
    P = n(834252),
    S = n(888751),
    _ = n(652215),
    T = n(788868),
    f = n(88001),
    I = n(375708),
    x = n(327105),
    N = n(466919);
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
        { priceOptions: D } = (0, P.P5)(),
        w = (function (e) {
            let {
                    invoiceSummaryType: t,
                    invoicePreview: n,
                    subscriptionPlan: l,
                    isPremiumGroupPurchase: a,
                    isPrepaidPaymentSource: i,
                } = e,
                { subscriptionPlanInvoiceItem: r } = (0, c.Sb)(n, l);
            return a
                ? null != r
                    ? (0, c.Tp)(r, l)
                    : I.intl.formatToPlainString(N.default["8bPDtb"], { premiumGroupProductName: (0, f.DP)() })
                : M(t)
                  ? (0, S.iK)(l)
                  : (0, y.ys)(l.id)
                    ? (0, y.Mn)(l.id, !1, i)
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
                a = (0, i.bG)([m.A], () => (null != t ? m.A.getGuild(t) : null), [t]);
            return M(n) && null != l
                ? { type: "gift", user: l }
                : null != a
                  ? { type: "guildSubscription", guild: a }
                  : void 0;
        })({ guildId: R, invoiceSummaryType: t, giftRecipient: b }),
        k = (function (e) {
            let { invoiceSummaryType: t, guildId: n, giftRecipient: l } = e;
            return M(t)
                ? null == l
                    ? I.intl.string(x.default["3wsYeI"])
                    : ""
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
            return (0, i.cf)([r.A, C.A, m.A, h.A], () => {
                let e = C.A.get(t);
                if (null == e) return {};
                let n = e.productLine;
                if (n === _.EZt.PREMIUM) return {};
                let l = r.A.getApplication(e.applicationId);
                if (null == l) return {};
                if (n === _.EZt.GUILD_ROLE) {
                    let e = h.A.getGuildId(),
                        t = m.A.getGuild(e);
                    return null != t ? { header: t.name, guildForIcon: t } : {};
                }
                let a = A.Ay.getApplicationIconURL({ id: l.id, icon: l.icon });
                return { header: l.name, headerIconSrc: a };
            }, [t]);
        })({ skuId: o.skuId }),
        B = null != F ? (0, l.jsx)(u.Ay, { guild: F, size: u.Ay.Sizes.SMOL }) : void 0,
        {
            price: W,
            priceSubText: V,
            priceSubTextHasStrikethrough: H,
        } = a.useMemo(
            () =>
                (function (e) {
                    let { invoiceSummaryType: t, subscriptionPlan: n, invoicePreview: l, priceOptions: a } = e,
                        { subscriptionPlanInvoiceItem: i } = (0, c.Sb)(l, n),
                        r = M(t),
                        s = t === p.N$.PREMIUM_WITH_TRIAL,
                        o = (r ? i?.amount : i?.subscriptionPlanPrice) ?? 0,
                        u = (0, E.$g)(o, l.currency),
                        m = (0, E.CE)(u, n.interval, n.intervalCount),
                        h = null,
                        C = !1;
                    if (s) h = (0, d.O7)(n, { amount: o, currency: l.currency });
                    else if (r && n.interval === T.WT.YEAR && (0, y.xq)(n.id)) {
                        let e = (0, y.VA)({ subscriptionPlan: n, isGift: r, priceOptions: a });
                        (h = null != e ? (0, E.$g)(e, l.currency) : null), (C = !0);
                    }
                    let A = m;
                    return (
                        s ? (A = (0, S.ib)(l.currency, { includeNowSuffix: !0 })) : t === p.N$.PREMIUM_GIFT && (A = u),
                        { price: A, priceSubText: h, priceSubTextHasStrikethrough: C }
                    );
                })({ invoiceSummaryType: t, subscriptionPlan: o, invoicePreview: n, priceOptions: D }),
            [t, o, n, D],
        ),
        K = ((0, y.ys)(o.id) ? (0, y.m6)(o.id) : void 0) === T.PremiumTypes.TIER_2;
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
        a = (0, i.bG)([C.A], () => C.A.get(t.skuId), [t.skuId]),
        r = (0, y.ys)(t.id) ? (0, y.m6)(t.id) : void 0;
    return (0, l.jsx)(o.WH, { sku: a, premiumType: r, storeListing: n });
}
function M(e) {
    return e === p.N$.PREMIUM_GIFT;
}
