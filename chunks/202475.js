n.d(t, { Y: () => c, j: () => u });
var l = n(582128),
    i = n(17928),
    r = n(277984),
    a = n(295405),
    s = n(67480),
    o = n(206441);
function u(e) {
    let t = null != e && e.shouldAllowFetchPaymentSources,
        {
            defaultPaymentSourceId: n,
            paymentSources: s,
            hasFetchedPaymentSources: o,
        } = (0, i.cf)([a.A], () => ({
            defaultPaymentSourceId: a.A.defaultPaymentSourceId,
            paymentSources: a.A.paymentSources,
            hasFetchedPaymentSources: a.A.hasFetchedPaymentSources,
        })),
        { hasPaymentSources: u, defaultPaymentSource: c } = l.useMemo(
            () => ({ hasPaymentSources: Object.keys(s).length > 0, defaultPaymentSource: null != n ? s[n] : null }),
            [s, n],
        );
    return (
        l.useEffect(() => {
            t && !o && (0, r.$o)();
        }, [t, o]),
        {
            defaultPaymentSourceId: n,
            paymentSources: s,
            hasFetchedPaymentSources: o,
            hasPaymentSources: u,
            defaultPaymentSource: c,
        }
    );
}
function c() {
    let { selectedSkuId: e } = (0, o.t4)((e) => ({ selectedSkuId: e.selectedSkuId })),
        t = (0, i.bG)([s.A], () => (null != e ? s.A.get(e) : null), [e]);
    return { paymentGatewayRestrictions: null != t ? t.eligiblePaymentGateways : null };
}
