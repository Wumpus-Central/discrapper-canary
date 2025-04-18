n.d(t, { Z: () => s }), n(388685);
var r = n(192379),
    i = n(442837),
    a = n(355467),
    o = n(853872);
function s(e) {
    let { isGift: t, activeSubscription: n } = e,
        {
            defaultPaymentSourceId: s,
            paymentSources: l,
            hasFetchedPaymentSources: c
        } = (0, i.cj)([o.Z], () => ({
            defaultPaymentSourceId: o.Z.defaultPaymentSourceId,
            paymentSources: o.Z.paymentSources,
            hasFetchedPaymentSources: o.Z.hasFetchedPaymentSources
        })),
        u = (e, t, n) => (e || (null == t ? void 0 : t.paymentSourceId) == null ? n : t.paymentSourceId),
        [d, f] = r.useState(() => u(t, n, s));
    return (
        r.useEffect(() => {
            c ? f(u(t, n, s)) : (0, a.tZ)();
        }, [c, t, n, s]),
        {
            paymentSources: l,
            hasPaymentSources: Object.keys(l).length > 0,
            paymentSourceId: d,
            setPaymentSourceId: f,
            hasFetchedPaymentSources: c,
            defaultPaymentSource: null != s ? l[s] : null
        }
    );
}
