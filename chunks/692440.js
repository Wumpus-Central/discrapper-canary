n.d(t, { DK: () => j, Hc: () => v, Lw: () => f, U5: () => m, _J: () => x, de: () => h });
var l = n(477900),
    r = n(582128);
n(17928);
var s = n(93159),
    a = n(270537),
    i = n(888751);
n(97352);
var o = n(158045),
    c = n(580630);
(n(732280), n(735164), n(787455), n(815545));
var d = n(652215),
    u = n(375708);
function m(e) {
    return e.currency === d.Yri.USD ? (0, c.$g)(e.total, e.currency) : `${(0, c.$g)(e.total, e.currency)}*`;
}
function x(e) {
    let { invoice: t, isPrepaidPaymentSource: n } = e,
        { lineItems: r } = (0, i.Ig)(t, { includeTaxLineItem: !0, isPrepaidPaymentSource: n });
    return (0, l.jsx)(a.Vm, { label: u.intl.string(u.t["2eh+Co"]), lineItems: r, currency: t.currency });
}
function j(e) {
    let { proratedInvoice: t, renewalInvoice: n, overrideRenewalDate: l } = e,
        { intervalType: r, intervalCount: s } = (0, o.Ge)(t),
        { intervalType: a, intervalCount: i } = (0, o.Ge)(n);
    if (r !== a || s !== i || t.subscriptionPeriodEnd.getTime() === n.subscriptionPeriodStart.getTime()) return null;
    let c = null != l ? l : t.subscriptionPeriodEnd;
    return u.intl.format(u.t.JWWD4E, { renewalDate: c });
}
function h(e) {
    let t,
        {
            overrideRenewalDate: n,
            currentInvoice: l,
            renewalInvoice: r,
            isSubscriptionUpdate: s,
            fractionalPremiumInfo: a,
        } = e;
    return null != n
        ? n
        : ((t = null != l ? l.subscriptionPeriodEnd : s ? r.subscriptionPeriodStart : r.subscriptionPeriodEnd),
            null != a && a.isFractionalPremiumActive)
          ? (0, o._e)(t, a.unactivatedUnits, a.currentEntitlementEndsAt)
          : t;
}
function v(e) {
    let {
            currentInvoice: t,
            renewalInvoice: n,
            overrideRenewalDate: a,
            isUpdate: o = !1,
            fractionalPremiumInfo: c,
            defaultExpanded: d,
            onComputeRenewalDate: u,
        } = e,
        m = r.useMemo(
            () =>
                (0, i.Gj)(t ?? null, n, null, {
                    overrideRenewalDate: a,
                    isSubscriptionUpdate: o,
                    fractionalPremiumInfo: c,
                }),
            [t, n, a, o, c],
        );
    return (
        r.useEffect(() => {
            null != u && u(m.renewalDate);
        }, [u, m.renewalDate]),
        (0, l.jsx)(s._D, { ...m, defaultExpanded: d })
    );
}
function f(e, t) {
    let { isCustomGift: n, isPrepaidPaymentSource: l } = t;
    return n
        ? (0, o.D8)(e.interval, !0, void 0, void 0, !0, (0, o.m6)(e.id))
        : u.intl.formatToPlainString(u.t.LQLxkW, { planName: (0, o.Mn)(e.id, !1, l) });
}
n(588976);
