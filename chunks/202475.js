n.d(t, { Y: () => c, j: () => o });
var r = n(582128),
    l = n(17928),
    i = n(277984),
    s = n(295405),
    a = n(67480),
    u = n(642639);
function o(e) {
    let t = null != e && e.shouldAllowFetchPaymentSources,
        {
            defaultPaymentSourceId: n,
            paymentSources: a,
            hasFetchedPaymentSources: u,
        } = (0, l.cf)([s.A], () => ({
            defaultPaymentSourceId: s.A.defaultPaymentSourceId,
            paymentSources: s.A.paymentSources,
            hasFetchedPaymentSources: s.A.hasFetchedPaymentSources,
        })),
        { hasPaymentSources: o, defaultPaymentSource: c } = r.useMemo(
            () => ({ hasPaymentSources: Object.keys(a).length > 0, defaultPaymentSource: null != n ? a[n] : null }),
            [a, n],
        );
    return (
        r.useEffect(() => {
            t && !u && (0, i.$o)();
        }, [t, u]),
        {
            defaultPaymentSourceId: n,
            paymentSources: a,
            hasFetchedPaymentSources: u,
            hasPaymentSources: o,
            defaultPaymentSource: c,
        }
    );
}
function c() {
    let { selectedSkuId: e } = (0, u.t4)((e) => ({ selectedSkuId: e.selectedSkuId })),
        t = (0, l.bG)([a.A], () => (null != e ? a.A.get(e) : null), [e]);
    return { paymentGatewayRestrictions: null != t ? t.eligiblePaymentGateways : null };
}
