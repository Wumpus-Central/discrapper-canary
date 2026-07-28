n.d(t, { Yh: () => p, jm: () => c, kc: () => d });
var l = n(582128),
    i = n(17928),
    r = n(277984),
    a = n(826469),
    s = n(295405),
    o = n(67480),
    u = n(316915);
function c(e) {
    let t = null != e && e.shouldAllowFetchPaymentSources,
        {
            defaultPaymentSourceId: n,
            paymentSources: a,
            hasFetchedPaymentSources: o,
        } = (0, i.cf)([s.A], () => ({
            defaultPaymentSourceId: s.A.defaultPaymentSourceId,
            paymentSources: s.A.paymentSources,
            hasFetchedPaymentSources: s.A.hasFetchedPaymentSources,
        })),
        { hasPaymentSources: u, defaultPaymentSource: c } = l.useMemo(
            () => ({ hasPaymentSources: Object.keys(a).length > 0, defaultPaymentSource: null != n ? a[n] : null }),
            [a, n],
        );
    return (
        l.useEffect(() => {
            t && !o && (0, r.$o)();
        }, [t, o]),
        {
            defaultPaymentSourceId: n,
            paymentSources: a,
            hasFetchedPaymentSources: o,
            hasPaymentSources: u,
            defaultPaymentSource: c,
        }
    );
}
function d() {
    let e = (0, u.t4)((e) => e.checkoutInvoicePreview);
    return l.useMemo(() => {
        if (null == e) return [];
        let t = e.checkoutContext;
        return null == t || null == t.payment_sources ? [] : t.payment_sources.map(a.A.createFromCheckoutContext);
    }, [e]);
}
function p() {
    let { selectedSkuId: e } = (0, u.t4)((e) => ({ selectedSkuId: e.selectedSkuId })),
        t = (0, i.bG)([o.A], () => (null != e ? o.A.get(e) : null), [e]);
    return { paymentGatewayRestrictions: null != t ? t.eligiblePaymentGateways : null };
}
