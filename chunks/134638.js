"use strict";
n.d(t, { _: () => T });
var r = n(627968),
    i = n(311907),
    s = n(587895),
    a = n(93159),
    o = n(815545),
    l = n(958720),
    u = n(299301),
    c = n(71393),
    d = n(67480),
    _ = n(486020),
    f = n(927578),
    p = n(580630),
    h = n(340034),
    m = n(888751),
    E = n(88001),
    g = n(985018),
    A = n(523376),
    I = n(518582);
function T(e) {
    let {
            type: t,
            invoicePreview: n,
            subscriptionPlan: i,
            storeListing: s,
            isPrepaidPaymentSource: o,
            giftRecipient: l,
            isPremiumGroupPurchase: u = !1,
            guildId: c,
            bottomSubText: d,
        } = e,
        _ = C({
            invoiceSummaryType: t,
            invoicePreview: n,
            subscriptionPlan: i,
            isPremiumGroupPurchase: u,
            isPrepaidPaymentSource: o,
        }),
        f = N({ guildId: c, invoiceSummaryType: t, giftRecipient: l }),
        p = y({ guildId: c, invoiceSummaryType: t, giftRecipient: l }),
        { header: h, headerIconSrc: m } = v(i.skuId),
        {
            price: E,
            priceSubText: g,
            priceSubTextHasStrikethrough: A,
        } = R({ invoiceSummaryType: t, subscriptionPlan: i, invoicePreview: n });
    return (0, r.jsx)(a.f7, {
        label: _,
        description: p,
        price: E,
        priceSubText: g,
        priceSubTextHasStrikethrough: A,
        target: f,
        graphic: (0, r.jsx)(S, { subscriptionPlan: i, storeListing: s }),
        header: h,
        headerIconSrc: m,
        bottomSubText: d,
    });
}
function S(e) {
    let { subscriptionPlan: t, storeListing: n } = e,
        { productLine: s, applicationId: a } = (0, i.cf)([d.A], () => {
            let e = d.A.get(t.skuId);
            return { productLine: e?.productLine, applicationId: e?.applicationId };
        }, [t.skuId]),
        o = (0, f.ys)(t.id) ? (0, f.m6)(t.id) : void 0;
    return (0, r.jsx)(h.hP, { productLine: s, premiumType: o, applicationId: a, thumbnail: n?.thumbnail ?? void 0 });
}
function y(e) {
    let { invoiceSummaryType: t, guildId: n, giftRecipient: r } = e;
    return O(t)
        ? null == r
            ? g.intl.string(A.default.AM9XGb)
            : ""
        : null == n
          ? g.intl.string(A.default["2zUa6I"])
          : void 0;
}
function v(e) {
    return (0, i.cf)([s.A, d.A], () => {
        let t = d.A.get(e);
        if (null == t) return {};
        let n = s.A.getApplication(t.applicationId);
        if (null == n) return {};
        let r = _.Ay.getApplicationIconURL({ id: n.id, icon: n.icon });
        return { header: n.name, headerIconSrc: r };
    }, [e]);
}
function N(e) {
    let { guildId: t, invoiceSummaryType: n, giftRecipient: r } = e,
        s = (0, i.bG)([c.A], () => (null != t ? c.A.getGuild(t) : null), [t]);
    return O(n) && null != r ? { type: "gift", user: r } : null != s ? { type: "guildSubscription", guild: s } : void 0;
}
function C(e) {
    let {
            invoiceSummaryType: t,
            invoicePreview: n,
            subscriptionPlan: r,
            isPremiumGroupPurchase: i,
            isPrepaidPaymentSource: s,
        } = e,
        { subscriptionPlanInvoiceItem: a } = (0, o.Sb)(n, r);
    return i
        ? null != a
            ? (0, o.Tp)(a, r)
            : g.intl.formatToPlainString(I.default["8bPDtb"], { premiumGroupProductName: (0, E.DP)() })
        : O(t)
          ? (0, m.iK)(r)
          : (0, f.ys)(r.id)
            ? (0, f.Mn)(r.id, !1, s)
            : r.name;
}
function R(e) {
    let { invoiceSummaryType: t, subscriptionPlan: n, invoicePreview: r } = e,
        { subscriptionPlanInvoiceItem: i } = (0, o.Sb)(r, n),
        s = (O(t) ? i?.amount : i?.subscriptionPlanPrice) ?? 0,
        a = (0, p.$g)(s, r.currency),
        c = (0, p.CE)(a, n.interval, n.intervalCount),
        d = b(t) ? (0, l.O7)(n, { amount: s, currency: r.currency }) : null;
    return { price: t === u.N$.PREMIUM_GIFT ? a : c, priceSubText: d, priceSubTextHasStrikethrough: !b(t) };
}
function O(e) {
    return e === u.N$.PREMIUM_GIFT;
}
function b(e) {
    return e === u.N$.PREMIUM_WITH_TRIAL;
}
