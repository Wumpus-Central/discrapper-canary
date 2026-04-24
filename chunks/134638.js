n.d(t, { _: () => x });
var l = n(627968),
    a = n(17928),
    i = n(587895),
    r = n(93159),
    s = n(241989),
    o = n(548118),
    u = n(815545),
    c = n(958720),
    d = n(299301),
    p = n(71393),
    m = n(967198),
    h = n(67480),
    A = n(486020),
    C = n(927578),
    _ = n(580630),
    E = n(888751),
    y = n(652215),
    f = n(88001),
    P = n(985018),
    S = n(327105),
    T = n(466919);
function x(e) {
    let {
            type: t,
            invoicePreview: n,
            subscriptionPlan: s,
            isPrepaidPaymentSource: x,
            giftRecipient: v,
            isPremiumGroupPurchase: b = !1,
            guildId: M,
            bottomSubText: L,
            storeListing: R,
        } = e,
        j = (function (e) {
            let {
                    invoiceSummaryType: t,
                    invoicePreview: n,
                    subscriptionPlan: l,
                    isPremiumGroupPurchase: a,
                    isPrepaidPaymentSource: i,
                } = e,
                { subscriptionPlanInvoiceItem: r } = (0, u.Sb)(n, l);
            return a
                ? null != r
                    ? (0, u.Tp)(r, l)
                    : P.intl.formatToPlainString(T.default["8bPDtb"], { premiumGroupProductName: (0, f.DP)() })
                : g(t)
                  ? (0, E.iK)(l)
                  : (0, C.ys)(l.id)
                    ? (0, C.Mn)(l.id, !1, i)
                    : l.name;
        })({
            invoiceSummaryType: t,
            invoicePreview: n,
            subscriptionPlan: s,
            isPremiumGroupPurchase: b,
            isPrepaidPaymentSource: x,
        }),
        O = (function (e) {
            let { guildId: t, invoiceSummaryType: n, giftRecipient: l } = e,
                i = (0, a.bG)([p.A], () => (null != t ? p.A.getGuild(t) : null), [t]);
            return g(n) && null != l
                ? { type: "gift", user: l }
                : null != i
                  ? { type: "guildSubscription", guild: i }
                  : void 0;
        })({ guildId: M, invoiceSummaryType: t, giftRecipient: v }),
        D = (function (e) {
            let { invoiceSummaryType: t, guildId: n, giftRecipient: l } = e;
            return g(t)
                ? null == l
                    ? P.intl.string(S.default.AM9XGb)
                    : ""
                : null == n
                  ? P.intl.string(S.default["2zUa6I"])
                  : void 0;
        })({ guildId: M, invoiceSummaryType: t, giftRecipient: v }),
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
                if (e.productLine === y.EZt.GUILD_ROLE) {
                    let e = m.A.getGuildId(),
                        t = p.A.getGuild(e);
                    return null != t ? { header: t.name, guildForIcon: t } : {};
                }
                let l = A.Ay.getApplicationIconURL({ id: n.id, icon: n.icon });
                return { header: n.name, headerIconSrc: l };
            }, [t]);
        })({ skuId: s.skuId }),
        Y = null != k ? (0, l.jsx)(o.Ay, { guild: k, size: o.Ay.Sizes.SMOL }) : void 0,
        {
            price: F,
            priceSubText: G,
            priceSubTextHasStrikethrough: B,
        } = (function (e) {
            let { invoiceSummaryType: t, subscriptionPlan: n, invoicePreview: l } = e,
                { subscriptionPlanInvoiceItem: a } = (0, u.Sb)(l, n),
                i = (g(t) ? a?.amount : a?.subscriptionPlanPrice) ?? 0,
                r = (0, _.$g)(i, l.currency),
                s = (0, _.CE)(r, n.interval, n.intervalCount),
                o = I(t) ? (0, c.O7)(n, { amount: i, currency: l.currency }) : null,
                p = s;
            return (
                I(t) ? (p = (0, E.ib)(l.currency, { includeNowSuffix: !0 })) : t === d.N$.PREMIUM_GIFT && (p = r),
                { price: p, priceSubText: o, priceSubTextHasStrikethrough: !I(t) }
            );
        })({ invoiceSummaryType: t, subscriptionPlan: s, invoicePreview: n });
    return (0, l.jsx)(r.f7, {
        label: j,
        description: D,
        price: F,
        priceSubText: G,
        priceSubTextHasStrikethrough: B,
        target: O,
        graphic: (0, l.jsx)(N, { subscriptionPlan: s, storeListing: R }),
        header: w,
        headerIconSrc: U,
        headerIconComponent: Y,
        bottomSubText: L,
    });
}
function N(e) {
    let { subscriptionPlan: t, storeListing: n } = e,
        i = (0, a.bG)([h.A], () => h.A.get(t.skuId), [t.skuId]),
        r = (0, C.ys)(t.id) ? (0, C.m6)(t.id) : void 0;
    return (0, l.jsx)(s.WH, { sku: i, premiumType: r, storeListing: n });
}
function g(e) {
    return e === d.N$.PREMIUM_GIFT;
}
function I(e) {
    return e === d.N$.PREMIUM_WITH_TRIAL;
}
