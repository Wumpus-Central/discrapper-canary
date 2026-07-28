l.d(t, { DK: () => h, Hc: () => v, Lw: () => j, U5: () => m, _J: () => x, de: () => p });
var n = l(477900),
    r = l(582128);
l(17928);
var s = l(936477),
    i = l(848584),
    a = l(888751);
l(97352);
var c = l(428262),
    u = l(580630);
l(732280), l(735164), l(787455), l(815545);
var o = l(652215),
    d = l(375708);
function m(e) {
    return e.currency === o.Yri.USD ? (0, u.$g)(e.total, e.currency) : `${(0, u.$g)(e.total, e.currency)}*`;
}
function x(e) {
    let { invoice: t, isPrepaidPaymentSource: l } = e,
        { lineItems: r } = (0, a.Ig)(t, { subscriptionTrial: null, includeTaxLineItem: !0, isPrepaidPaymentSource: l });
    return (0, n.jsx)(i.Vm, { label: d.intl.string(d.t["2eh+Co"]), lineItems: r, currency: t.currency });
}
function h(e) {
    let { proratedInvoice: t, renewalInvoice: l, overrideRenewalDate: n } = e,
        { intervalType: r, intervalCount: s } = (0, c.Ge)(t),
        { intervalType: i, intervalCount: a } = (0, c.Ge)(l);
    if (r !== i || s !== a || t.subscriptionPeriodEnd.getTime() === l.subscriptionPeriodStart.getTime()) return null;
    let u = null != n ? n : t.subscriptionPeriodEnd;
    return d.intl.format(d.t.JWWD4E, { renewalDate: u });
}
function p(e) {
    let t,
        {
            overrideRenewalDate: l,
            currentInvoice: n,
            renewalInvoice: r,
            isSubscriptionUpdate: s,
            fractionalPremiumInfo: i,
        } = e;
    return null != l
        ? l
        : ((t = null != n ? n.subscriptionPeriodEnd : s ? r.subscriptionPeriodStart : r.subscriptionPeriodEnd),
            null != i && i.isFractionalPremiumActive)
          ? (0, c._e)(t, i.unactivatedUnits, i.currentEntitlementEndsAt)
          : t;
}
function v(e) {
    let {
            currentInvoice: t,
            renewalInvoice: l,
            overrideRenewalDate: i,
            isUpdate: c = !1,
            fractionalPremiumInfo: u,
            defaultExpanded: o,
            onComputeRenewalDate: d,
        } = e,
        m = r.useMemo(
            () =>
                (0, a.Gj)(t ?? null, l, null, {
                    overrideRenewalDate: i,
                    isSubscriptionUpdate: c,
                    fractionalPremiumInfo: u,
                }),
            [t, l, i, c, u],
        );
    return (
        r.useEffect(() => {
            null != d && d(m.renewalDate);
        }, [d, m.renewalDate]),
        (0, n.jsx)(s._D, { ...m, defaultExpanded: o })
    );
}
function j(e, t) {
    let { isCustomGift: l, isPrepaidPaymentSource: n } = t;
    return l
        ? (0, c.D8)(e.interval, !0, void 0, void 0, !0, (0, c.m6)(e.id))
        : d.intl.formatToPlainString(d.t.LQLxkW, { planName: (0, c.Mn)(e.id, !1, n) });
}
l(51839);
