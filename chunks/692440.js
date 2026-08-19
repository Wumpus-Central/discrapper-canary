l.d(t, { DK: () => h, Hc: () => v, Lw: () => j, U5: () => m, _J: () => x, de: () => p });
var n = l(477900),
    r = l(582128);
l(17928);
var i = l(936477),
    s = l(848584),
    a = l(888751);
l(97352);
var c = l(158045),
    u = l(580630);
l(732280), l(735164), l(787455), l(815545);
var o = l(652215),
    d = l(375708);
function m(e) {
    return e.currency === o.Yri.USD ? (0, u.$g)(e.total, e.currency) : `${(0, u.$g)(e.total, e.currency)}*`;
}
function x(e) {
    let { invoice: t, isPrepaidPaymentSource: l } = e,
        { lineItems: r } = (0, a.Ig)(t, { includeTaxLineItem: !0, isPrepaidPaymentSource: l });
    return (0, n.jsx)(s.Vm, { label: d.intl.string(d.t["2eh+Co"]), lineItems: r, currency: t.currency });
}
function h(e) {
    let { proratedInvoice: t, renewalInvoice: l, overrideRenewalDate: n } = e,
        { intervalType: r, intervalCount: i } = (0, c.Ge)(t),
        { intervalType: s, intervalCount: a } = (0, c.Ge)(l);
    if (r !== s || i !== a || t.subscriptionPeriodEnd.getTime() === l.subscriptionPeriodStart.getTime()) return null;
    let u = null != n ? n : t.subscriptionPeriodEnd;
    return d.intl.format(d.t.JWWD4E, { renewalDate: u });
}
function p(e) {
    let t,
        {
            overrideRenewalDate: l,
            currentInvoice: n,
            renewalInvoice: r,
            isSubscriptionUpdate: i,
            fractionalPremiumInfo: s,
        } = e;
    return null != l
        ? l
        : ((t = null != n ? n.subscriptionPeriodEnd : i ? r.subscriptionPeriodStart : r.subscriptionPeriodEnd),
            null != s && s.isFractionalPremiumActive)
          ? (0, c._e)(t, s.unactivatedUnits, s.currentEntitlementEndsAt)
          : t;
}
function v(e) {
    let {
            currentInvoice: t,
            renewalInvoice: l,
            overrideRenewalDate: s,
            isUpdate: c = !1,
            fractionalPremiumInfo: u,
            defaultExpanded: o,
            onComputeRenewalDate: d,
        } = e,
        m = r.useMemo(
            () =>
                (0, a.Gj)(t ?? null, l, null, {
                    overrideRenewalDate: s,
                    isSubscriptionUpdate: c,
                    fractionalPremiumInfo: u,
                }),
            [t, l, s, c, u],
        );
    return (
        r.useEffect(() => {
            null != d && d(m.renewalDate);
        }, [d, m.renewalDate]),
        (0, n.jsx)(i._D, { ...m, defaultExpanded: o })
    );
}
function j(e, t) {
    let { isCustomGift: l, isPrepaidPaymentSource: n } = t;
    return l
        ? (0, c.D8)(e.interval, !0, void 0, void 0, !0, (0, c.m6)(e.id))
        : d.intl.formatToPlainString(d.t.LQLxkW, { planName: (0, c.Mn)(e.id, !1, n) });
}
l(588976);
