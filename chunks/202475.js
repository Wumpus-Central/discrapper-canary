n.d(t, { Y: () => o, j: () => c });
var l = n(582128),
    r = n(17928),
    i = n(277984),
    s = n(295405),
    a = n(67480),
    u = n(263532);
function c(e) {
    let t = null != e && e.shouldAllowFetchPaymentSources,
        {
            defaultPaymentSourceId: n,
            paymentSources: a,
            hasFetchedPaymentSources: u,
        } = (0, r.cf)([s.A], () => ({
            defaultPaymentSourceId: s.A.defaultPaymentSourceId,
            paymentSources: s.A.paymentSources,
            hasFetchedPaymentSources: s.A.hasFetchedPaymentSources,
        })),
        { hasPaymentSources: c, defaultPaymentSource: o } = l.useMemo(
            () => ({ hasPaymentSources: Object.keys(a).length > 0, defaultPaymentSource: null != n ? a[n] : null }),
            [a, n],
        );
    return (
        l.useEffect(() => {
            t && !u && (0, i.$o)();
        }, [t, u]),
        {
            defaultPaymentSourceId: n,
            paymentSources: a,
            hasFetchedPaymentSources: u,
            hasPaymentSources: c,
            defaultPaymentSource: o,
        }
    );
}
function o() {
    let { selectedSkuId: e } = (0, u.t4)((e) => ({ selectedSkuId: e.selectedSkuId })),
        t = (0, r.bG)([a.A], () => (null != e ? a.A.get(e) : null), [e]);
    return { paymentGatewayRestrictions: null != t ? t.eligiblePaymentGateways : null };
}
