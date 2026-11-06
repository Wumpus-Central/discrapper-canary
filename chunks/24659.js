n.d(t, { Hc: () => v, _J: () => p, U5: () => m, DK: () => f });
var r = n(477900),
    i = n(582128);
n(855986);
var a = n(677959),
    l = n(744615),
    s = n(474463);
n(97352);
var u = n(722178),
    o = n(580630);
(n(77528), n(735164));
var c = n(792996);
n(563020);
var d = n(652215);
function m(e) {
    return e.currency === d.Yri.USD ? (0, o.$g)(e.total, e.currency) : `${(0, o.$g)(e.total, e.currency)}*`;
}
function p(e) {
    let { invoice: t, isPrepaidPaymentSource: n } = e,
        { lineItems: i } = (0, s.Ig)(t, { includeTaxLineItem: !0, isPrepaidPaymentSource: n });
    return (0, r.jsx)(l.Vm, { label: c.intl.string(c.t["2eh+Co"]), lineItems: i, currency: t.currency });
}
function f(e) {
    let { proratedInvoice: t, renewalInvoice: n, overrideRenewalDate: r } = e,
        { intervalType: i, intervalCount: a } = (0, u.Ge)(t),
        { intervalType: l, intervalCount: s } = (0, u.Ge)(n);
    if (i !== l || a !== s || t.subscriptionPeriodEnd.getTime() === n.subscriptionPeriodStart.getTime()) return null;
    let o = null != r ? r : t.subscriptionPeriodEnd;
    return c.intl.format(c.t.JWWD4E, { renewalDate: o });
}
function v(e) {
    let {
            currentInvoice: t,
            renewalInvoice: n,
            overrideRenewalDate: l,
            isUpdate: u = !1,
            fractionalPremiumInfo: o,
            defaultExpanded: c,
            onComputeRenewalDate: d,
        } = e,
        m = i.useMemo(
            () =>
                (0, s.Gj)(t ?? null, n, null, {
                    overrideRenewalDate: l,
                    isSubscriptionUpdate: u,
                    fractionalPremiumInfo: o,
                }),
            [t, n, l, u, o],
        );
    return (
        i.useEffect(() => {
            null != d && d(m.renewalDate);
        }, [d, m.renewalDate]),
        (0, r.jsx)(a._D, { ...m, defaultExpanded: c })
    );
}
n(894497);
