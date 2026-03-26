"use strict";
n.d(t, { _: () => v });
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
    m = n(927578),
    E = n(580630),
    g = n(888751),
    A = n(652215),
    I = n(88001),
    T = n(985018),
    S = n(756366),
    y = n(519412);
function v(e) {
    let {
            type: t,
            invoicePreview: n,
            subscriptionPlan: i,
            isPrepaidPaymentSource: s,
            giftRecipient: o,
            isPremiumGroupPurchase: u = !1,
            guildId: c,
            bottomSubText: d,
            storeListing: _,
        } = e,
        f = b({
            invoiceSummaryType: t,
            invoicePreview: n,
            subscriptionPlan: i,
            isPremiumGroupPurchase: u,
            isPrepaidPaymentSource: s,
        }),
        p = O({ guildId: c, invoiceSummaryType: t, giftRecipient: o }),
        h = C({ guildId: c, invoiceSummaryType: t, giftRecipient: o }),
        { header: m, headerIconSrc: E, guildForIcon: g } = R({ skuId: i.skuId }),
        A = null != g ? (0, r.jsx)(l.Ay, { guild: g, size: l.Ay.Sizes.SMOL }) : void 0,
        {
            price: I,
            priceSubText: T,
            priceSubTextHasStrikethrough: S,
        } = D({ invoiceSummaryType: t, subscriptionPlan: i, invoicePreview: n });
    return (0, r.jsx)(a.f7, {
        label: f,
        description: h,
        price: I,
        priceSubText: T,
        priceSubTextHasStrikethrough: S,
        target: p,
        graphic: (0, r.jsx)(N, { subscriptionPlan: i, storeListing: _ }),
        header: m,
        headerIconSrc: E,
        headerIconComponent: A,
        bottomSubText: d,
    });
}
function N(e) {
    let { subscriptionPlan: t, storeListing: n } = e,
        s = (0, i.bG)([p.A], () => p.A.get(t.skuId), [t.skuId]),
        a = (0, m.ys)(t.id) ? (0, m.m6)(t.id) : void 0;
    return (0, r.jsx)(o.WH, { sku: s, premiumType: a, storeListing: n });
}
function C(e) {
    let { invoiceSummaryType: t, guildId: n, giftRecipient: r } = e;
    return L(t)
        ? null == r
            ? T.intl.string(S.default.AM9XGb)
            : ""
        : null == n
          ? T.intl.string(S.default["2zUa6I"])
          : void 0;
}
function R(e) {
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
}
function O(e) {
    let { guildId: t, invoiceSummaryType: n, giftRecipient: r } = e,
        s = (0, i.bG)([_.A], () => (null != t ? _.A.getGuild(t) : null), [t]);
    return L(n) && null != r ? { type: "gift", user: r } : null != s ? { type: "guildSubscription", guild: s } : void 0;
}
function b(e) {
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
        : L(t)
          ? (0, g.iK)(r)
          : (0, m.ys)(r.id)
            ? (0, m.Mn)(r.id, !1, s)
            : r.name;
}
function D(e) {
    let { invoiceSummaryType: t, subscriptionPlan: n, invoicePreview: r } = e,
        { subscriptionPlanInvoiceItem: i } = (0, u.Sb)(r, n),
        s = (L(t) ? i?.amount : i?.subscriptionPlanPrice) ?? 0,
        a = (0, E.$g)(s, r.currency),
        o = (0, E.CE)(a, n.interval, n.intervalCount),
        l = w(t) ? (0, c.O7)(n, { amount: s, currency: r.currency }) : null,
        _ = o;
    return (
        w(t) ? (_ = (0, g.ib)(r.currency, { includeNowSuffix: !0 })) : t === d.N$.PREMIUM_GIFT && (_ = a),
        { price: _, priceSubText: l, priceSubTextHasStrikethrough: !w(t) }
    );
}
function L(e) {
    return e === d.N$.PREMIUM_GIFT;
}
function w(e) {
    return e === d.N$.PREMIUM_WITH_TRIAL;
}
