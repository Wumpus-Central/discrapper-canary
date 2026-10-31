n.d(t, { U5: () => m, Hc: () => v, DK: () => p, _J: () => f });
var r = n(477900),
    i = n(582128);
n(17928);
var a = n(25149),
    l = n(848584),
    s = n(888751);
n(97352);
var u = n(24482),
    c = n(580630);
(n(732280), n(735164));
var o = n(105292);
n(563020);
var d = n(652215);
function m(e) {
    return e.currency === d.Yri.USD ? (0, c.$g)(e.total, e.currency) : `${(0, c.$g)(e.total, e.currency)}*`;
}
function f(e) {
    let { invoice: t, isPrepaidPaymentSource: n } = e,
        { lineItems: i } = (0, s.Ig)(t, { includeTaxLineItem: !0, isPrepaidPaymentSource: n });
    return (0, r.jsx)(l.Vm, { label: o.intl.string(o.t["2eh+Co"]), lineItems: i, currency: t.currency });
}
function p(e) {
    let { proratedInvoice: t, renewalInvoice: n, overrideRenewalDate: r } = e,
        { intervalType: i, intervalCount: a } = (0, u.Ge)(t),
        { intervalType: l, intervalCount: s } = (0, u.Ge)(n);
    if (i !== l || a !== s || t.subscriptionPeriodEnd.getTime() === n.subscriptionPeriodStart.getTime()) return null;
    let c = null != r ? r : t.subscriptionPeriodEnd;
    return o.intl.format(o.t.JWWD4E, { renewalDate: c });
}
function v(e) {
    let {
            currentInvoice: t,
            renewalInvoice: n,
            overrideRenewalDate: l,
            isUpdate: u = !1,
            fractionalPremiumInfo: c,
            defaultExpanded: o,
            onComputeRenewalDate: d,
        } = e,
        m = i.useMemo(
            () =>
                (0, s.Gj)(t ?? null, n, null, {
                    overrideRenewalDate: l,
                    isSubscriptionUpdate: u,
                    fractionalPremiumInfo: c,
                }),
            [t, n, l, u, c],
        );
    return (
        i.useEffect(() => {
            null != d && d(m.renewalDate);
        }, [d, m.renewalDate]),
        (0, r.jsx)(a._D, { ...m, defaultExpanded: o })
    );
}
n(894497);
