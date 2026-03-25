"use strict";
n.d(t, { _: () => v });
var r = n(627968),
    i = n(311907),
    s = n(587895),
    a = n(93159),
    o = n(263063),
    l = n(815545),
    u = n(958720),
    c = n(299301),
    d = n(71393),
    _ = n(967198),
    f = n(67480),
    p = n(486020),
    h = n(927578),
    m = n(580630),
    E = n(340034),
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
            storeListing: s,
            isPrepaidPaymentSource: l,
            giftRecipient: u,
            isPremiumGroupPurchase: c = !1,
            guildId: d,
            bottomSubText: _,
        } = e,
        f = b({
            invoiceSummaryType: t,
            invoicePreview: n,
            subscriptionPlan: i,
            isPremiumGroupPurchase: c,
            isPrepaidPaymentSource: l,
        }),
        p = O({ guildId: d, invoiceSummaryType: t, giftRecipient: u }),
        h = C({ guildId: d, invoiceSummaryType: t, giftRecipient: u }),
        { header: m, headerIconSrc: E, guildForIcon: g } = R({ skuId: i.skuId }),
        A = null != g ? (0, r.jsx)(o.Ay, { guild: g, size: o.Ay.Sizes.SMOL }) : void 0,
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
        graphic: (0, r.jsx)(N, { subscriptionPlan: i, storeListing: s }),
        header: m,
        headerIconSrc: E,
        headerIconComponent: A,
        bottomSubText: _,
    });
}
function N(e) {
    let { subscriptionPlan: t, storeListing: n } = e,
        { productLine: s, applicationId: a } = (0, i.cf)([f.A], () => {
            let e = f.A.get(t.skuId);
            return { productLine: e?.productLine, applicationId: e?.applicationId };
        }, [t.skuId]),
        o = (0, h.ys)(t.id) ? (0, h.m6)(t.id) : void 0;
    return (0, r.jsx)(E.hP, { productLine: s, premiumType: o, applicationId: a, thumbnail: n?.thumbnail ?? void 0 });
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
    return (0, i.cf)([s.A, f.A, d.A, _.A], () => {
        let e = f.A.get(t);
        if (null == e) return {};
        let n = s.A.getApplication(e.applicationId);
        if (null == n) return {};
        if (e.productLine === A.EZt.GUILD_ROLE) {
            let e = _.A.getGuildId(),
                t = d.A.getGuild(e);
            return null != t ? { header: t.name, guildForIcon: t } : {};
        }
        let r = p.Ay.getApplicationIconURL({ id: n.id, icon: n.icon });
        return { header: n.name, headerIconSrc: r };
    }, [t]);
}
function O(e) {
    let { guildId: t, invoiceSummaryType: n, giftRecipient: r } = e,
        s = (0, i.bG)([d.A], () => (null != t ? d.A.getGuild(t) : null), [t]);
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
        { subscriptionPlanInvoiceItem: a } = (0, l.Sb)(n, r);
    return i
        ? null != a
            ? (0, l.Tp)(a, r)
            : T.intl.formatToPlainString(y.default["8bPDtb"], { premiumGroupProductName: (0, I.DP)() })
        : L(t)
          ? (0, g.iK)(r)
          : (0, h.ys)(r.id)
            ? (0, h.Mn)(r.id, !1, s)
            : r.name;
}
function D(e) {
    let { invoiceSummaryType: t, subscriptionPlan: n, invoicePreview: r } = e,
        { subscriptionPlanInvoiceItem: i } = (0, l.Sb)(r, n),
        s = (L(t) ? i?.amount : i?.subscriptionPlanPrice) ?? 0,
        a = (0, m.$g)(s, r.currency),
        o = (0, m.CE)(a, n.interval, n.intervalCount),
        d = w(t) ? (0, u.O7)(n, { amount: s, currency: r.currency }) : null,
        _ = o;
    return (
        w(t) ? (_ = (0, g.ib)(r.currency, { includeNowSuffix: !0 })) : t === c.N$.PREMIUM_GIFT && (_ = a),
        { price: _, priceSubText: d, priceSubTextHasStrikethrough: !w(t) }
    );
}
function L(e) {
    return e === c.N$.PREMIUM_GIFT;
}
function w(e) {
    return e === c.N$.PREMIUM_WITH_TRIAL;
}
