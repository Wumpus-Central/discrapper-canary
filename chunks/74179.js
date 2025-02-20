n.d(t, { Z: () => s }), n(47120);
var r = n(192379),
    i = n(442837),
    o = n(355467),
    a = n(853872);
function s(e) {
    let { isGift: t, activeSubscription: n } = e,
        {
            defaultPaymentSourceId: s,
            paymentSources: l,
            hasFetchedPaymentSources: c
        } = (0, i.cj)([a.Z], () => ({
            defaultPaymentSourceId: a.Z.defaultPaymentSourceId,
            paymentSources: a.Z.paymentSources,
            hasFetchedPaymentSources: a.Z.hasFetchedPaymentSources
        })),
        u = (e, t, n) => (e || (null == t ? void 0 : t.paymentSourceId) == null ? n : t.paymentSourceId),
        [d, f] = r.useState(() => u(t, n, s));
    return (
        r.useEffect(() => {
            c ? f(u(t, n, s)) : (0, o.tZ)();
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
