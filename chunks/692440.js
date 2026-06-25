"use strict";
n.d(t, { DK: () => h, Lw: () => E, U5: () => d, _J: () => _, de: () => f, m0: () => p });
var i = n(627968);
n(64700), n(17928);
var r = n(683604),
    s = n(270537),
    a = n(888751);
n(97352);
var o = n(428262),
    l = n(580630);
n(234419), n(735164), n(787455), n(815545);
var u = n(652215),
    c = n(375708);
function d(e) {
    return e.currency === u.Yri.USD ? (0, l.$g)(e.total, e.currency) : `${(0, l.$g)(e.total, e.currency)}*`;
}
function _(e) {
    let { invoice: t, isPrepaidPaymentSource: n } = e,
        { lineItems: r } = (0, a.Ig)(t, { subscriptionTrial: null, includeTaxLineItem: !0, isPrepaidPaymentSource: n });
    return (0, i.jsx)(s.Vm, { label: c.intl.string(c.t["2eh+Co"]), lineItems: r, currency: t.currency });
}
function h(e) {
    let { proratedInvoice: t, renewalInvoice: n, overrideRenewalDate: i } = e,
        { intervalType: r, intervalCount: s } = (0, o.Ge)(t),
        { intervalType: a, intervalCount: l } = (0, o.Ge)(n);
    if (r !== a || s !== l || t.subscriptionPeriodEnd.getTime() === n.subscriptionPeriodStart.getTime()) return null;
    let u = null != i ? i : t.subscriptionPeriodEnd;
    return c.intl.format(c.t.JWWD4E, { renewalDate: u });
}
function f(e) {
    let t,
        {
            overrideRenewalDate: n,
            currentInvoice: i,
            renewalInvoice: r,
            isSubscriptionUpdate: s,
            fractionalPremiumInfo: a,
        } = e;
    return null != n
        ? n
        : ((t = null != i ? i.subscriptionPeriodEnd : s ? r.subscriptionPeriodStart : r.subscriptionPeriodEnd),
            null != a && a.isFractionalPremiumActive)
          ? (0, o._e)(t, a.unactivatedUnits, a.currentEntitlementEndsAt)
          : t;
}
function p(e) {
    let {
            proratedInvoice: t,
            renewalInvoice: n,
            overrideRenewalDate: s,
            isUpdate: o = !1,
            fractionalPremiumInfo: l,
            defaultExpanded: u,
        } = e,
        c = (0, a.Gj)(t ?? null, n, null, {
            overrideRenewalDate: s,
            isSubscriptionUpdate: o,
            fractionalPremiumInfo: l,
        });
    return (0, i.jsx)(r._D, { ...c, defaultExpanded: u });
}
function E(e, t) {
    let { isCustomGift: n, isPrepaidPaymentSource: i } = t;
    return n
        ? (0, o.D8)(e.interval, !0, void 0, void 0, !0, (0, o.m6)(e.id))
        : c.intl.formatToPlainString(c.t.LQLxkW, { planName: (0, o.Mn)(e.id, !1, i) });
}
n(348519);
