"use strict";
n.d(t, { _: () => N });
var r = n(627968),
    i = n(311907),
    s = n(587895),
    a = n(93159),
    o = n(241989),
    l = n(263063),
    u = n(815545),
    c = n(958720),
    d = n(299301),
    _ = n(71393),
    f = n(967198),
    p = n(67480),
    h = n(486020),
    E = n(927578),
    m = n(580630),
    g = n(888751),
    A = n(652215),
    I = n(88001),
    T = n(985018),
    S = n(327105),
    y = n(466919);
function N(e) {
    let {
            type: t,
            invoicePreview: n,
            subscriptionPlan: o,
            isPrepaidPaymentSource: N,
            giftRecipient: R,
            isPremiumGroupPurchase: b = !1,
            guildId: D,
            bottomSubText: L,
            storeListing: w,
        } = e,
        M = (function (e) {
            let {
                    invoiceSummaryType: t,
                    invoicePreview: n,
                    subscriptionPlan: r,
                    isPremiumGroupPurchase: i,
                    isPrepaidPaymentSource: s,
                } = e,
                { subscriptionPlanInvoiceItem: a } = (0, u.Sb)(n, r);
            return i
                ? null != a
                    ? (0, u.Tp)(a, r)
                    : T.intl.formatToPlainString(y.default["8bPDtb"], { premiumGroupProductName: (0, I.DP)() })
                : C(t)
                  ? (0, g.iK)(r)
                  : (0, E.ys)(r.id)
                    ? (0, E.Mn)(r.id, !1, s)
                    : r.name;
        })({
            invoiceSummaryType: t,
            invoicePreview: n,
            subscriptionPlan: o,
            isPremiumGroupPurchase: b,
            isPrepaidPaymentSource: N,
        }),
        P = (function (e) {
            let { guildId: t, invoiceSummaryType: n, giftRecipient: r } = e,
                s = (0, i.bG)([_.A], () => (null != t ? _.A.getGuild(t) : null), [t]);
            return C(n) && null != r
                ? { type: "gift", user: r }
                : null != s
                  ? { type: "guildSubscription", guild: s }
                  : void 0;
        })({ guildId: D, invoiceSummaryType: t, giftRecipient: R }),
        x = (function (e) {
            let { invoiceSummaryType: t, guildId: n, giftRecipient: r } = e;
            return C(t)
                ? null == r
                    ? T.intl.string(S.default.AM9XGb)
                    : ""
                : null == n
                  ? T.intl.string(S.default["2zUa6I"])
                  : void 0;
        })({ guildId: D, invoiceSummaryType: t, giftRecipient: R }),
        {
            header: k,
            headerIconSrc: U,
            guildForIcon: G,
        } = (function (e) {
            let { skuId: t } = e;
            return (0, i.cf)([s.A, p.A, _.A, f.A], () => {
                let e = p.A.get(t);
                if (null == e) return {};
                let n = s.A.getApplication(e.applicationId);
                if (null == n) return {};
                if (e.productLine === A.EZt.GUILD_ROLE) {
                    let e = f.A.getGuildId(),
                        t = _.A.getGuild(e);
                    return null != t ? { header: t.name, guildForIcon: t } : {};
                }
                let r = h.Ay.getApplicationIconURL({ id: n.id, icon: n.icon });
                return { header: n.name, headerIconSrc: r };
            }, [t]);
        })({ skuId: o.skuId }),
        F = null != G ? (0, r.jsx)(l.Ay, { guild: G, size: l.Ay.Sizes.SMOL }) : void 0,
        {
            price: V,
            priceSubText: B,
            priceSubTextHasStrikethrough: H,
        } = (function (e) {
            let { invoiceSummaryType: t, subscriptionPlan: n, invoicePreview: r } = e,
                { subscriptionPlanInvoiceItem: i } = (0, u.Sb)(r, n),
                s = (C(t) ? i?.amount : i?.subscriptionPlanPrice) ?? 0,
                a = (0, m.$g)(s, r.currency),
                o = (0, m.CE)(a, n.interval, n.intervalCount),
                l = O(t) ? (0, c.O7)(n, { amount: s, currency: r.currency }) : null,
                _ = o;
            return (
                O(t) ? (_ = (0, g.ib)(r.currency, { includeNowSuffix: !0 })) : t === d.N$.PREMIUM_GIFT && (_ = a),
                { price: _, priceSubText: l, priceSubTextHasStrikethrough: !O(t) }
            );
        })({ invoiceSummaryType: t, subscriptionPlan: o, invoicePreview: n });
    return (0, r.jsx)(a.f7, {
        label: M,
        description: x,
        price: V,
        priceSubText: B,
        priceSubTextHasStrikethrough: H,
        target: P,
        graphic: (0, r.jsx)(v, { subscriptionPlan: o, storeListing: w }),
        header: k,
        headerIconSrc: U,
        headerIconComponent: F,
        bottomSubText: L,
    });
}
function v(e) {
    let { subscriptionPlan: t, storeListing: n } = e,
        s = (0, i.bG)([p.A], () => p.A.get(t.skuId), [t.skuId]),
        a = (0, E.ys)(t.id) ? (0, E.m6)(t.id) : void 0;
    return (0, r.jsx)(o.WH, { sku: s, premiumType: a, storeListing: n });
}
function C(e) {
    return e === d.N$.PREMIUM_GIFT;
}
function O(e) {
    return e === d.N$.PREMIUM_WITH_TRIAL;
}
