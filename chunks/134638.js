n.d(t, { _: () => T });
var l = n(627968),
    i = n(311907),
    a = n(587895),
    r = n(93159),
    s = n(241989),
    o = n(263063),
    u = n(815545),
    c = n(958720),
    d = n(299301),
    p = n(71393),
    m = n(967198),
    h = n(67480),
    A = n(486020),
    _ = n(927578),
    C = n(580630),
    E = n(888751),
    y = n(652215),
    f = n(88001),
    P = n(985018),
    S = n(327105),
    x = n(466919);
function T(e) {
    let {
            type: t,
            invoicePreview: n,
            subscriptionPlan: s,
            isPrepaidPaymentSource: T,
            giftRecipient: v,
            isPremiumGroupPurchase: b = !1,
            guildId: R,
            bottomSubText: M,
            storeListing: j,
        } = e,
        L = (function (e) {
            let {
                    invoiceSummaryType: t,
                    invoicePreview: n,
                    subscriptionPlan: l,
                    isPremiumGroupPurchase: i,
                    isPrepaidPaymentSource: a,
                } = e,
                { subscriptionPlanInvoiceItem: r } = (0, u.Sb)(n, l);
            return i
                ? null != r
                    ? (0, u.Tp)(r, l)
                    : P.intl.formatToPlainString(x.default["8bPDtb"], { premiumGroupProductName: (0, f.DP)() })
                : g(t)
                  ? (0, E.iK)(l)
                  : (0, _.ys)(l.id)
                    ? (0, _.Mn)(l.id, !1, a)
                    : l.name;
        })({
            invoiceSummaryType: t,
            invoicePreview: n,
            subscriptionPlan: s,
            isPremiumGroupPurchase: b,
            isPrepaidPaymentSource: T,
        }),
        O = (function (e) {
            let { guildId: t, invoiceSummaryType: n, giftRecipient: l } = e,
                a = (0, i.bG)([p.A], () => (null != t ? p.A.getGuild(t) : null), [t]);
            return g(n) && null != l
                ? { type: "gift", user: l }
                : null != a
                  ? { type: "guildSubscription", guild: a }
                  : void 0;
        })({ guildId: R, invoiceSummaryType: t, giftRecipient: v }),
        D = (function (e) {
            let { invoiceSummaryType: t, guildId: n, giftRecipient: l } = e;
            return g(t)
                ? null == l
                    ? P.intl.string(S.default.AM9XGb)
                    : ""
                : null == n
                  ? P.intl.string(S.default["2zUa6I"])
                  : void 0;
        })({ guildId: R, invoiceSummaryType: t, giftRecipient: v }),
        {
            header: U,
            headerIconSrc: w,
            guildForIcon: k,
        } = (function (e) {
            let { skuId: t } = e;
            return (0, i.cf)([a.A, h.A, p.A, m.A], () => {
                let e = h.A.get(t);
                if (null == e) return {};
                let n = a.A.getApplication(e.applicationId);
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
        F = null != k ? (0, l.jsx)(o.Ay, { guild: k, size: o.Ay.Sizes.SMOL }) : void 0,
        {
            price: G,
            priceSubText: B,
            priceSubTextHasStrikethrough: Y,
        } = (function (e) {
            let { invoiceSummaryType: t, subscriptionPlan: n, invoicePreview: l } = e,
                { subscriptionPlanInvoiceItem: i } = (0, u.Sb)(l, n),
                a = (g(t) ? i?.amount : i?.subscriptionPlanPrice) ?? 0,
                r = (0, C.$g)(a, l.currency),
                s = (0, C.CE)(r, n.interval, n.intervalCount),
                o = I(t) ? (0, c.O7)(n, { amount: a, currency: l.currency }) : null,
                p = s;
            return (
                I(t) ? (p = (0, E.ib)(l.currency, { includeNowSuffix: !0 })) : t === d.N$.PREMIUM_GIFT && (p = r),
                { price: p, priceSubText: o, priceSubTextHasStrikethrough: !I(t) }
            );
        })({ invoiceSummaryType: t, subscriptionPlan: s, invoicePreview: n });
    return (0, l.jsx)(r.f7, {
        label: L,
        description: D,
        price: G,
        priceSubText: B,
        priceSubTextHasStrikethrough: Y,
        target: O,
        graphic: (0, l.jsx)(N, { subscriptionPlan: s, storeListing: j }),
        header: U,
        headerIconSrc: w,
        headerIconComponent: F,
        bottomSubText: M,
    });
}
function N(e) {
    let { subscriptionPlan: t, storeListing: n } = e,
        a = (0, i.bG)([h.A], () => h.A.get(t.skuId), [t.skuId]),
        r = (0, _.ys)(t.id) ? (0, _.m6)(t.id) : void 0;
    return (0, l.jsx)(s.WH, { sku: a, premiumType: r, storeListing: n });
}
function g(e) {
    return e === d.N$.PREMIUM_GIFT;
}
function I(e) {
    return e === d.N$.PREMIUM_WITH_TRIAL;
}
