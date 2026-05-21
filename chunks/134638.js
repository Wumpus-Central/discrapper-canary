n.d(t, { _: () => v });
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
    m = n(773669),
    h = n(71393),
    C = n(967198),
    A = n(67480),
    y = n(486020),
    E = n(428262),
    P = n(580630),
    S = n(834252),
    _ = n(888751),
    f = n(652215),
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
        { priceOptions: w } = (0, S.P5)(),
        U = (function (e) {
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
                    : x.intl.formatToPlainString(g.default["8bPDtb"], { premiumGroupProductName: (0, I.DP)() })
                : b(t)
                  ? (0, _.iK)(l)
                  : (0, E.ys)(l.id)
                    ? (0, E.Mn)(l.id, !1, i)
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
                a = (0, i.bG)([h.A], () => (null != t ? h.A.getGuild(t) : null), [t]);
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
            isEnglishLocale: ["en-US", "en-GB"].includes((0, i.bG)([m.default], () => m.default.locale)),
        }),
        {
            header: G,
            headerIconSrc: F,
            guildForIcon: B,
        } = (function (e) {
            let { skuId: t } = e;
            return (0, i.cf)([r.A, A.A, h.A, C.A], () => {
                let e = A.A.get(t);
                if (null == e) return {};
                let n = e.productLine;
                if (n === f.EZt.PREMIUM) return {};
                let l = r.A.getApplication(e.applicationId);
                if (null == l) return {};
                if (n === f.EZt.GUILD_ROLE) {
                    let e = C.A.getGuildId(),
                        t = h.A.getGuild(e);
                    return null != t ? { header: t.name, guildForIcon: t } : {};
                }
                let a = y.Ay.getApplicationIconURL({ id: l.id, icon: l.icon });
                return { header: l.name, headerIconSrc: a };
            }, [t]);
        })({ skuId: o.skuId }),
        W = null != B ? (0, l.jsx)(u.Ay, { guild: B, size: u.Ay.Sizes.SMOL }) : void 0,
        {
            price: V,
            priceSubText: H,
            priceSubTextHasStrikethrough: K,
        } = a.useMemo(
            () =>
                (function (e) {
                    let { invoiceSummaryType: t, subscriptionPlan: n, invoicePreview: l, priceOptions: a } = e,
                        { subscriptionPlanInvoiceItem: i } = (0, c.Sb)(l, n),
                        r = b(t),
                        s = t === p.N$.PREMIUM_WITH_TRIAL,
                        o = (r ? i?.amount : i?.subscriptionPlanPrice) ?? 0,
                        u = (0, P.$g)(o, l.currency),
                        m = (0, P.CE)(u, n.interval, n.intervalCount),
                        h = null,
                        C = !1;
                    if (s) h = (0, d.O7)(n, { amount: o, currency: l.currency });
                    else if (r && n.interval === T.WT.YEAR && (0, E.xq)(n.id)) {
                        let e = (0, E.VA)({ subscriptionPlan: n, isGift: r, priceOptions: a });
                        (h = null != e ? (0, P.$g)(e, l.currency) : null), (C = !0);
                    }
                    let A = m;
                    return (
                        s ? (A = (0, _.ib)(l.currency, { includeNowSuffix: !0 })) : t === p.N$.PREMIUM_GIFT && (A = u),
                        { price: A, priceSubText: h, priceSubTextHasStrikethrough: C }
                    );
                })({ invoiceSummaryType: t, subscriptionPlan: o, invoicePreview: n, priceOptions: w }),
            [t, o, n, w],
        ),
        Z = ((0, E.ys)(o.id) ? (0, E.m6)(o.id) : void 0) === T.PremiumTypes.TIER_2;
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
        a = (0, i.bG)([A.A], () => A.A.get(t.skuId), [t.skuId]),
        r = (0, E.ys)(t.id) ? (0, E.m6)(t.id) : void 0;
    return (0, l.jsx)(o.WH, { sku: a, premiumType: r, storeListing: n });
}
function b(e) {
    return e === p.N$.PREMIUM_GIFT;
}
