n.d(t, { _: () => N });
var l = n(627968),
    a = n(17928),
    i = n(587895),
    s = n(93159),
    r = n(241989),
    o = n(548118),
    u = n(815545),
    c = n(736339),
    d = n(299301),
    p = n(71393),
    m = n(967198),
    h = n(67480),
    A = n(486020),
    C = n(927578),
    E = n(580630),
    y = n(888751),
    P = n(652215),
    S = n(88001),
    _ = n(985018),
    T = n(327105),
    f = n(466919);
function N(e) {
    let {
            type: t,
            invoicePreview: n,
            subscriptionPlan: r,
            isPrepaidPaymentSource: N,
            giftRecipient: v,
            isPremiumGroupPurchase: M = !1,
            guildId: b,
            bottomSubText: R,
            storeListing: j,
        } = e,
        L = (function (e) {
            let {
                    invoiceSummaryType: t,
                    invoicePreview: n,
                    subscriptionPlan: l,
                    isPremiumGroupPurchase: a,
                    isPrepaidPaymentSource: i,
                } = e,
                { subscriptionPlanInvoiceItem: s } = (0, u.Sb)(n, l);
            return a
                ? null != s
                    ? (0, u.Tp)(s, l)
                    : _.intl.formatToPlainString(f.default["8bPDtb"], { premiumGroupProductName: (0, S.DP)() })
                : I(t)
                  ? (0, y.iK)(l)
                  : (0, C.ys)(l.id)
                    ? (0, C.Mn)(l.id, !1, i)
                    : l.name;
        })({
            invoiceSummaryType: t,
            invoicePreview: n,
            subscriptionPlan: r,
            isPremiumGroupPurchase: M,
            isPrepaidPaymentSource: N,
        }),
        O = (function (e) {
            let { guildId: t, invoiceSummaryType: n, giftRecipient: l } = e,
                i = (0, a.bG)([p.A], () => (null != t ? p.A.getGuild(t) : null), [t]);
            return I(n) && null != l
                ? { type: "gift", user: l }
                : null != i
                  ? { type: "guildSubscription", guild: i }
                  : void 0;
        })({ guildId: b, invoiceSummaryType: t, giftRecipient: v }),
        D = (function (e) {
            let { invoiceSummaryType: t, guildId: n, giftRecipient: l } = e;
            return I(t)
                ? null == l
                    ? _.intl.string(T.default.AM9XGb)
                    : ""
                : null == n
                  ? _.intl.string(T.default["2zUa6I"])
                  : void 0;
        })({ guildId: b, invoiceSummaryType: t, giftRecipient: v }),
        {
            header: w,
            headerIconSrc: U,
            guildForIcon: k,
        } = (function (e) {
            let { skuId: t } = e;
            return (0, a.cf)([i.A, h.A, p.A, m.A], () => {
                let e = h.A.get(t);
                if (null == e) return {};
                let n = i.A.getApplication(e.applicationId);
                if (null == n) return {};
                if (e.productLine === P.EZt.GUILD_ROLE) {
                    let e = m.A.getGuildId(),
                        t = p.A.getGuild(e);
                    return null != t ? { header: t.name, guildForIcon: t } : {};
                }
                let l = A.Ay.getApplicationIconURL({ id: n.id, icon: n.icon });
                return { header: n.name, headerIconSrc: l };
            }, [t]);
        })({ skuId: r.skuId }),
        Y = null != k ? (0, l.jsx)(o.Ay, { guild: k, size: o.Ay.Sizes.SMOL }) : void 0,
        {
            price: G,
            priceSubText: F,
            priceSubTextHasStrikethrough: B,
        } = (function (e) {
            let { invoiceSummaryType: t, subscriptionPlan: n, invoicePreview: l } = e,
                { subscriptionPlanInvoiceItem: a } = (0, u.Sb)(l, n),
                i = (I(t) ? a?.amount : a?.subscriptionPlanPrice) ?? 0,
                s = (0, E.$g)(i, l.currency),
                r = (0, E.CE)(s, n.interval, n.intervalCount),
                o = g(t) ? (0, c.O7)(n, { amount: i, currency: l.currency }) : null,
                p = r;
            return (
                g(t) ? (p = (0, y.ib)(l.currency, { includeNowSuffix: !0 })) : t === d.N$.PREMIUM_GIFT && (p = s),
                { price: p, priceSubText: o, priceSubTextHasStrikethrough: !g(t) }
            );
        })({ invoiceSummaryType: t, subscriptionPlan: r, invoicePreview: n });
    return (0, l.jsx)(s.f7, {
        label: L,
        description: D,
        price: G,
        priceSubText: F,
        priceSubTextHasStrikethrough: B,
        target: O,
        graphic: (0, l.jsx)(x, { subscriptionPlan: r, storeListing: j }),
        header: w,
        headerIconSrc: U,
        headerIconComponent: Y,
        bottomSubText: R,
    });
}
function x(e) {
    let { subscriptionPlan: t, storeListing: n } = e,
        i = (0, a.bG)([h.A], () => h.A.get(t.skuId), [t.skuId]),
        s = (0, C.ys)(t.id) ? (0, C.m6)(t.id) : void 0;
    return (0, l.jsx)(r.WH, { sku: i, premiumType: s, storeListing: n });
}
function I(e) {
    return e === d.N$.PREMIUM_GIFT;
}
function g(e) {
    return e === d.N$.PREMIUM_WITH_TRIAL;
}
