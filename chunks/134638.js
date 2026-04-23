"use strict";
n.d(t, { _: () => C });
var i = n(627968),
    r = n(17928),
    s = n(587895),
    a = n(232467),
    o = n(241989),
    l = n(548118),
    d = n(815545),
    _ = n(958720),
    u = n(299301),
    c = n(71393),
    E = n(967198),
    h = n(67480),
    m = n(486020),
    f = n(927578),
    g = n(580630),
    p = n(888751),
    A = n(652215),
    I = n(88001),
    T = n(985018),
    S = n(327105),
    N = n(466919);
function C(e) {
    let {
            type: t,
            invoicePreview: n,
            subscriptionPlan: o,
            isPrepaidPaymentSource: C,
            giftRecipient: v,
            isPremiumGroupPurchase: D = !1,
            guildId: L,
            bottomSubText: b,
            storeListing: w,
        } = e,
        P = (function (e) {
            let {
                    invoiceSummaryType: t,
                    invoicePreview: n,
                    subscriptionPlan: i,
                    isPremiumGroupPurchase: r,
                    isPrepaidPaymentSource: s,
                } = e,
                { subscriptionPlanInvoiceItem: a } = (0, d.Sb)(n, i);
            return r
                ? null != a
                    ? (0, d.Tp)(a, i)
                    : T.intl.formatToPlainString(N.default["8bPDtb"], { premiumGroupProductName: (0, I.DP)() })
                : O(t)
                  ? (0, p.iK)(i)
                  : (0, f.ys)(i.id)
                    ? (0, f.Mn)(i.id, !1, s)
                    : i.name;
        })({
            invoiceSummaryType: t,
            invoicePreview: n,
            subscriptionPlan: o,
            isPremiumGroupPurchase: D,
            isPrepaidPaymentSource: C,
        }),
        k = (function (e) {
            let { guildId: t, invoiceSummaryType: n, giftRecipient: i } = e,
                s = (0, r.bG)([c.A], () => (null != t ? c.A.getGuild(t) : null), [t]);
            return O(n) && null != i
                ? { type: "gift", user: i }
                : null != s
                  ? { type: "guildSubscription", guild: s }
                  : void 0;
        })({ guildId: L, invoiceSummaryType: t, giftRecipient: v }),
        M = (function (e) {
            let { invoiceSummaryType: t, guildId: n, giftRecipient: i } = e;
            return O(t)
                ? null == i
                    ? T.intl.string(S.default.AM9XGb)
                    : ""
                : null == n
                  ? T.intl.string(S.default["2zUa6I"])
                  : void 0;
        })({ guildId: L, invoiceSummaryType: t, giftRecipient: v }),
        {
            header: U,
            headerIconSrc: x,
            guildForIcon: G,
        } = (function (e) {
            let { skuId: t } = e;
            return (0, r.cf)([s.A, h.A, c.A, E.A], () => {
                let e = h.A.get(t);
                if (null == e) return {};
                let n = s.A.getApplication(e.applicationId);
                if (null == n) return {};
                if (e.productLine === A.EZt.GUILD_ROLE) {
                    let e = E.A.getGuildId(),
                        t = c.A.getGuild(e);
                    return null != t ? { header: t.name, guildForIcon: t } : {};
                }
                let i = m.Ay.getApplicationIconURL({ id: n.id, icon: n.icon });
                return { header: n.name, headerIconSrc: i };
            }, [t]);
        })({ skuId: o.skuId }),
        V = null != G ? (0, i.jsx)(l.Ay, { guild: G, size: l.Ay.Sizes.SMOL }) : void 0,
        {
            price: F,
            priceSubText: B,
            priceSubTextHasStrikethrough: H,
        } = (function (e) {
            let { invoiceSummaryType: t, subscriptionPlan: n, invoicePreview: i } = e,
                { subscriptionPlanInvoiceItem: r } = (0, d.Sb)(i, n),
                s = (O(t) ? r?.amount : r?.subscriptionPlanPrice) ?? 0,
                a = (0, g.$g)(s, i.currency),
                o = (0, g.CE)(a, n.interval, n.intervalCount),
                l = y(t) ? (0, _.O7)(n, { amount: s, currency: i.currency }) : null,
                c = o;
            return (
                y(t) ? (c = (0, p.ib)(i.currency, { includeNowSuffix: !0 })) : t === u.N$.PREMIUM_GIFT && (c = a),
                { price: c, priceSubText: l, priceSubTextHasStrikethrough: !y(t) }
            );
        })({ invoiceSummaryType: t, subscriptionPlan: o, invoicePreview: n });
    return (0, i.jsx)(a.f7, {
        label: P,
        description: M,
        price: F,
        priceSubText: B,
        priceSubTextHasStrikethrough: H,
        target: k,
        graphic: (0, i.jsx)(R, { subscriptionPlan: o, storeListing: w }),
        header: U,
        headerIconSrc: x,
        headerIconComponent: V,
        bottomSubText: b,
    });
}
function R(e) {
    let { subscriptionPlan: t, storeListing: n } = e,
        s = (0, r.bG)([h.A], () => h.A.get(t.skuId), [t.skuId]),
        a = (0, f.ys)(t.id) ? (0, f.m6)(t.id) : void 0;
    return (0, i.jsx)(o.WH, { sku: s, premiumType: a, storeListing: n });
}
function O(e) {
    return e === u.N$.PREMIUM_GIFT;
}
function y(e) {
    return e === u.N$.PREMIUM_WITH_TRIAL;
}
