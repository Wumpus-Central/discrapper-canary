n.d(t, { DK: () => f, Hc: () => h, Lw: () => v, U5: () => m, _J: () => x, de: () => p });
var l = n(627968),
    r = n(64700);
n(17928);
var a = n(944355),
    i = n(270537),
    s = n(888751);
n(97352);
var u = n(428262),
    o = n(580630);
n(234419), n(735164), n(787455), n(815545);
var c = n(652215),
    d = n(375708);
function m(e) {
    return e.currency === c.Yri.USD ? (0, o.$g)(e.total, e.currency) : `${(0, o.$g)(e.total, e.currency)}*`;
}
function x(e) {
    let { invoice: t, isPrepaidPaymentSource: n } = e,
        { lineItems: r } = (0, s.Ig)(t, { subscriptionTrial: null, includeTaxLineItem: !0, isPrepaidPaymentSource: n });
    return (0, l.jsx)(i.Vm, { label: d.intl.string(d.t["2eh+Co"]), lineItems: r, currency: t.currency });
}
function f(e) {
    let { proratedInvoice: t, renewalInvoice: n, overrideRenewalDate: l } = e,
        { intervalType: r, intervalCount: a } = (0, u.Ge)(t),
        { intervalType: i, intervalCount: s } = (0, u.Ge)(n);
    if (r !== i || a !== s || t.subscriptionPeriodEnd.getTime() === n.subscriptionPeriodStart.getTime()) return null;
    let o = null != l ? l : t.subscriptionPeriodEnd;
    return d.intl.format(d.t.JWWD4E, { renewalDate: o });
}
function p(e) {
    let t,
        {
            overrideRenewalDate: n,
            currentInvoice: l,
            renewalInvoice: r,
            isSubscriptionUpdate: a,
            fractionalPremiumInfo: i,
        } = e;
    return null != n
        ? n
        : ((t = null != l ? l.subscriptionPeriodEnd : a ? r.subscriptionPeriodStart : r.subscriptionPeriodEnd),
            null != i && i.isFractionalPremiumActive)
          ? (0, u._e)(t, i.unactivatedUnits, i.currentEntitlementEndsAt)
          : t;
}
function h(e) {
    let {
            currentInvoice: t,
            renewalInvoice: n,
            overrideRenewalDate: i,
            isUpdate: u = !1,
            fractionalPremiumInfo: o,
            defaultExpanded: c,
            onComputeRenewalDate: d,
        } = e,
        m = r.useMemo(
            () =>
                (0, s.Gj)(t ?? null, n, null, {
                    overrideRenewalDate: i,
                    isSubscriptionUpdate: u,
                    fractionalPremiumInfo: o,
                }),
            [t, n, i, u, o],
        );
    return (
        r.useEffect(() => {
            null != d && d(m.renewalDate);
        }, [d, m.renewalDate]),
        (0, l.jsx)(a._D, { ...m, defaultExpanded: c })
    );
}
function v(e, t) {
    let { isCustomGift: n, isPrepaidPaymentSource: l } = t;
    return n
        ? (0, u.D8)(e.interval, !0, void 0, void 0, !0, (0, u.m6)(e.id))
        : d.intl.formatToPlainString(d.t.LQLxkW, { planName: (0, u.Mn)(e.id, !1, l) });
}
n(51839);
