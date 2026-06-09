n.d(t, { U5: () => d, m0: () => g, Lw: () => b, de: () => p, DK: () => f, _J: () => m });
var a = n(627968);
n(64700), n(17928);
var l = n(944355),
    r = n(848584),
    i = n(888751);
n(97352);
var s = n(428262),
    u = n(580630);
n(234419), n(735164);
var o = n(375708);
n(815545);
var c = n(652215);
n(47463);
let d = (e) => (e.currency === c.Yri.USD ? (0, u.$g)(e.total, e.currency) : `${(0, u.$g)(e.total, e.currency)}*`);
function m(e) {
    let { invoice: t, isPrepaidPaymentSource: n } = e,
        { lineItems: l } = (0, i.Ig)(t, { subscriptionTrial: null, includeTaxLineItem: !0, isPrepaidPaymentSource: n });
    return (0, a.jsx)(r.Vm, { label: o.intl.string(o.t["2eh+Co"]), lineItems: l, currency: t.currency });
}
let f = (e) => {
    let { proratedInvoice: t, renewalInvoice: n, overrideRenewalDate: a } = e,
        { intervalType: l, intervalCount: r } = (0, s.Ge)(t),
        { intervalType: i, intervalCount: u } = (0, s.Ge)(n);
    if (l !== i || r !== u || t.subscriptionPeriodEnd.getTime() === n.subscriptionPeriodStart.getTime()) return null;
    let c = null != a ? a : t.subscriptionPeriodEnd;
    return o.intl.format(o.t.JWWD4E, { renewalDate: c });
};
function p(e) {
    let t,
        {
            overrideRenewalDate: n,
            currentInvoice: a,
            renewalInvoice: l,
            isSubscriptionUpdate: r,
            fractionalPremiumInfo: i,
        } = e;
    return null != n
        ? n
        : ((t = null != a ? a.subscriptionPeriodEnd : r ? l.subscriptionPeriodStart : l.subscriptionPeriodEnd),
            null != i && i.isFractionalPremiumActive)
          ? (0, s._e)(t, i.unactivatedUnits, i.currentEntitlementEndsAt)
          : t;
}
function g(e) {
    let {
            proratedInvoice: t,
            renewalInvoice: n,
            overrideRenewalDate: r,
            isUpdate: s = !1,
            fractionalPremiumInfo: u,
            defaultExpanded: o,
        } = e,
        c = (0, i.Gj)(t ?? null, n, null, {
            overrideRenewalDate: r,
            isSubscriptionUpdate: s,
            fractionalPremiumInfo: u,
        });
    return (0, a.jsx)(l._D, { ...c, defaultExpanded: o });
}
let b = (e, t) => {
    let { isCustomGift: n, isPrepaidPaymentSource: a } = t;
    return n
        ? (0, s.D8)(e.interval, !0, void 0, void 0, !0, (0, s.m6)(e.id))
        : o.intl.formatToPlainString(o.t.LQLxkW, { planName: (0, s.Mn)(e.id, !1, a) });
};
