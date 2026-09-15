l.d(t, { DK: () => j, Hc: () => v, Lw: () => g, U5: () => m, _J: () => x, de: () => h });
var s = l(477900),
    n = l(582128);
l(17928);
var a = l(557026),
    r = l(270537),
    i = l(888751);
l(97352);
var c = l(158045),
    d = l(580630);
(l(732280), l(735164), l(787455), l(815545));
var u = l(652215),
    o = l(375708);
function m(e) {
    return e.currency === u.Yri.USD ? (0, d.$g)(e.total, e.currency) : `${(0, d.$g)(e.total, e.currency)}*`;
}
function x(e) {
    let { invoice: t, isPrepaidPaymentSource: l } = e,
        { lineItems: n } = (0, i.Ig)(t, { includeTaxLineItem: !0, isPrepaidPaymentSource: l });
    return (0, s.jsx)(r.Vm, { label: o.intl.string(o.t["2eh+Co"]), lineItems: n, currency: t.currency });
}
function j(e) {
    let { proratedInvoice: t, renewalInvoice: l, overrideRenewalDate: s } = e,
        { intervalType: n, intervalCount: a } = (0, c.Ge)(t),
        { intervalType: r, intervalCount: i } = (0, c.Ge)(l);
    if (n !== r || a !== i || t.subscriptionPeriodEnd.getTime() === l.subscriptionPeriodStart.getTime()) return null;
    let d = null != s ? s : t.subscriptionPeriodEnd;
    return o.intl.format(o.t.JWWD4E, { renewalDate: d });
}
function h(e) {
    let t,
        {
            overrideRenewalDate: l,
            currentInvoice: s,
            renewalInvoice: n,
            isSubscriptionUpdate: a,
            fractionalPremiumInfo: r,
        } = e;
    return null != l
        ? l
        : ((t = null != s ? s.subscriptionPeriodEnd : a ? n.subscriptionPeriodStart : n.subscriptionPeriodEnd),
            null != r && r.isFractionalPremiumActive)
          ? (0, c._e)(t, r.unactivatedUnits, r.currentEntitlementEndsAt)
          : t;
}
function v(e) {
    let {
            currentInvoice: t,
            renewalInvoice: l,
            overrideRenewalDate: r,
            isUpdate: c = !1,
            fractionalPremiumInfo: d,
            defaultExpanded: u,
            onComputeRenewalDate: o,
        } = e,
        m = n.useMemo(
            () =>
                (0, i.Gj)(t ?? null, l, null, {
                    overrideRenewalDate: r,
                    isSubscriptionUpdate: c,
                    fractionalPremiumInfo: d,
                }),
            [t, l, r, c, d],
        );
    return (
        n.useEffect(() => {
            null != o && o(m.renewalDate);
        }, [o, m.renewalDate]),
        (0, s.jsx)(a._D, { ...m, defaultExpanded: u })
    );
}
function g(e, t) {
    let { isCustomGift: l, isPrepaidPaymentSource: s } = t;
    return l
        ? (0, c.D8)(e.interval, !0, void 0, void 0, !0, (0, c.m6)(e.id))
        : o.intl.formatToPlainString(o.t.LQLxkW, { planName: (0, c.Mn)(e.id, !1, s) });
}
l(588976);
