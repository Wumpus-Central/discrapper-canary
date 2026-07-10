l.d(t, { DK: () => x, Lw: () => h, U5: () => c, _J: () => m, de: () => f, m0: () => p });
var n = l(627968);
l(64700), l(17928);
var r = l(944355),
    i = l(270537),
    a = l(888751);
l(97352);
var s = l(428262),
    u = l(580630);
l(234419), l(735164), l(787455), l(815545);
var o = l(652215),
    d = l(375708);
function c(e) {
    return e.currency === o.Yri.USD ? (0, u.$g)(e.total, e.currency) : `${(0, u.$g)(e.total, e.currency)}*`;
}
function m(e) {
    let { invoice: t, isPrepaidPaymentSource: l } = e,
        { lineItems: r } = (0, a.Ig)(t, { subscriptionTrial: null, includeTaxLineItem: !0, isPrepaidPaymentSource: l });
    return (0, n.jsx)(i.Vm, { label: d.intl.string(d.t["2eh+Co"]), lineItems: r, currency: t.currency });
}
function x(e) {
    let { proratedInvoice: t, renewalInvoice: l, overrideRenewalDate: n } = e,
        { intervalType: r, intervalCount: i } = (0, s.Ge)(t),
        { intervalType: a, intervalCount: u } = (0, s.Ge)(l);
    if (r !== a || i !== u || t.subscriptionPeriodEnd.getTime() === l.subscriptionPeriodStart.getTime()) return null;
    let o = null != n ? n : t.subscriptionPeriodEnd;
    return d.intl.format(d.t.JWWD4E, { renewalDate: o });
}
function f(e) {
    let t,
        {
            overrideRenewalDate: l,
            currentInvoice: n,
            renewalInvoice: r,
            isSubscriptionUpdate: i,
            fractionalPremiumInfo: a,
        } = e;
    return null != l
        ? l
        : ((t = null != n ? n.subscriptionPeriodEnd : i ? r.subscriptionPeriodStart : r.subscriptionPeriodEnd),
            null != a && a.isFractionalPremiumActive)
          ? (0, s._e)(t, a.unactivatedUnits, a.currentEntitlementEndsAt)
          : t;
}
function p(e) {
    let {
            proratedInvoice: t,
            renewalInvoice: l,
            overrideRenewalDate: i,
            isUpdate: s = !1,
            fractionalPremiumInfo: u,
            defaultExpanded: o,
        } = e,
        d = (0, a.Gj)(t ?? null, l, null, {
            overrideRenewalDate: i,
            isSubscriptionUpdate: s,
            fractionalPremiumInfo: u,
        });
    return (0, n.jsx)(r._D, { ...d, defaultExpanded: o });
}
function h(e, t) {
    let { isCustomGift: l, isPrepaidPaymentSource: n } = t;
    return l
        ? (0, s.D8)(e.interval, !0, void 0, void 0, !0, (0, s.m6)(e.id))
        : d.intl.formatToPlainString(d.t.LQLxkW, { planName: (0, s.Mn)(e.id, !1, n) });
}
l(47463);
