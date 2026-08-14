l.d(t, { DK: () => f, Hc: () => v, Lw: () => h, U5: () => m, _J: () => x, de: () => p });
var n = l(477900),
    r = l(582128);
l(17928);
var a = l(936477),
    i = l(848584),
    s = l(888751);
l(97352);
var o = l(158045),
    c = l(580630);
l(732280), l(735164), l(787455), l(815545);
var u = l(652215),
    d = l(375708);
function m(e) {
    return e.currency === u.Yri.USD ? (0, c.$g)(e.total, e.currency) : `${(0, c.$g)(e.total, e.currency)}*`;
}
function x(e) {
    let { invoice: t, isPrepaidPaymentSource: l } = e,
        { lineItems: r } = (0, s.Ig)(t, { includeTaxLineItem: !0, isPrepaidPaymentSource: l });
    return (0, n.jsx)(i.Vm, { label: d.intl.string(d.t["2eh+Co"]), lineItems: r, currency: t.currency });
}
function f(e) {
    let { proratedInvoice: t, renewalInvoice: l, overrideRenewalDate: n } = e,
        { intervalType: r, intervalCount: a } = (0, o.Ge)(t),
        { intervalType: i, intervalCount: s } = (0, o.Ge)(l);
    if (r !== i || a !== s || t.subscriptionPeriodEnd.getTime() === l.subscriptionPeriodStart.getTime()) return null;
    let c = null != n ? n : t.subscriptionPeriodEnd;
    return d.intl.format(d.t.JWWD4E, { renewalDate: c });
}
function p(e) {
    let t,
        {
            overrideRenewalDate: l,
            currentInvoice: n,
            renewalInvoice: r,
            isSubscriptionUpdate: a,
            fractionalPremiumInfo: i,
        } = e;
    return null != l
        ? l
        : ((t = null != n ? n.subscriptionPeriodEnd : a ? r.subscriptionPeriodStart : r.subscriptionPeriodEnd),
            null != i && i.isFractionalPremiumActive)
          ? (0, o._e)(t, i.unactivatedUnits, i.currentEntitlementEndsAt)
          : t;
}
function v(e) {
    let {
            currentInvoice: t,
            renewalInvoice: l,
            overrideRenewalDate: i,
            isUpdate: o = !1,
            fractionalPremiumInfo: c,
            defaultExpanded: u,
            onComputeRenewalDate: d,
        } = e,
        m = r.useMemo(
            () =>
                (0, s.Gj)(t ?? null, l, null, {
                    overrideRenewalDate: i,
                    isSubscriptionUpdate: o,
                    fractionalPremiumInfo: c,
                }),
            [t, l, i, o, c],
        );
    return (
        r.useEffect(() => {
            null != d && d(m.renewalDate);
        }, [d, m.renewalDate]),
        (0, n.jsx)(a._D, { ...m, defaultExpanded: u })
    );
}
function h(e, t) {
    let { isCustomGift: l, isPrepaidPaymentSource: n } = t;
    return l
        ? (0, o.D8)(e.interval, !0, void 0, void 0, !0, (0, o.m6)(e.id))
        : d.intl.formatToPlainString(d.t.LQLxkW, { planName: (0, o.Mn)(e.id, !1, n) });
}
l(51839);
