l.d(t, { DK: () => f, Hc: () => h, Lw: () => v, U5: () => m, _J: () => x, de: () => p });
var n = l(627968),
    r = l(64700);
l(17928);
var a = l(944355),
    i = l(270537),
    s = l(888751);
l(97352);
var u = l(428262),
    o = l(580630);
l(234419), l(735164), l(787455), l(815545);
var d = l(652215),
    c = l(375708);
function m(e) {
    return e.currency === d.Yri.USD ? (0, o.$g)(e.total, e.currency) : `${(0, o.$g)(e.total, e.currency)}*`;
}
function x(e) {
    let { invoice: t, isPrepaidPaymentSource: l } = e,
        { lineItems: r } = (0, s.Ig)(t, { subscriptionTrial: null, includeTaxLineItem: !0, isPrepaidPaymentSource: l });
    return (0, n.jsx)(i.Vm, { label: c.intl.string(c.t["2eh+Co"]), lineItems: r, currency: t.currency });
}
function f(e) {
    let { proratedInvoice: t, renewalInvoice: l, overrideRenewalDate: n } = e,
        { intervalType: r, intervalCount: a } = (0, u.Ge)(t),
        { intervalType: i, intervalCount: s } = (0, u.Ge)(l);
    if (r !== i || a !== s || t.subscriptionPeriodEnd.getTime() === l.subscriptionPeriodStart.getTime()) return null;
    let o = null != n ? n : t.subscriptionPeriodEnd;
    return c.intl.format(c.t.JWWD4E, { renewalDate: o });
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
          ? (0, u._e)(t, i.unactivatedUnits, i.currentEntitlementEndsAt)
          : t;
}
function h(e) {
    let {
            currentInvoice: t,
            renewalInvoice: l,
            overrideRenewalDate: i,
            isUpdate: u = !1,
            fractionalPremiumInfo: o,
            defaultExpanded: d,
            onComputeRenewalDate: c,
        } = e,
        m = r.useMemo(
            () =>
                (0, s.Gj)(t ?? null, l, null, {
                    overrideRenewalDate: i,
                    isSubscriptionUpdate: u,
                    fractionalPremiumInfo: o,
                }),
            [t, l, i, u, o],
        );
    return (
        r.useEffect(() => {
            null != c && c(m.renewalDate);
        }, [c, m.renewalDate]),
        (0, n.jsx)(a._D, { ...m, defaultExpanded: d })
    );
}
function v(e, t) {
    let { isCustomGift: l, isPrepaidPaymentSource: n } = t;
    return l
        ? (0, u.D8)(e.interval, !0, void 0, void 0, !0, (0, u.m6)(e.id))
        : c.intl.formatToPlainString(c.t.LQLxkW, { planName: (0, u.Mn)(e.id, !1, n) });
}
l(47463);
