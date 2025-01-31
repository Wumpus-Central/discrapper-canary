n.d(t, { Z: () => o }), n(47120);
var i = n(192379),
    r = n(442837),
    a = n(355467),
    s = n(853872);
function o(e) {
    let { isGift: t, activeSubscription: n } = e,
        {
            defaultPaymentSourceId: o,
            paymentSources: l,
            hasFetchedPaymentSources: u
        } = (0, r.cj)([s.Z], () => ({
            defaultPaymentSourceId: s.Z.defaultPaymentSourceId,
            paymentSources: s.Z.paymentSources,
            hasFetchedPaymentSources: s.Z.hasFetchedPaymentSources
        })),
        c = (e, t, n) => (e || (null == t ? void 0 : t.paymentSourceId) == null ? n : t.paymentSourceId),
        [d, f] = i.useState(() => c(t, n, o));
    return (
        i.useEffect(() => {
            u ? f(c(t, n, o)) : (0, a.tZ)();
        }, [u, t, n, o]),
        {
            paymentSources: l,
            hasPaymentSources: Object.keys(l).length > 0,
            paymentSourceId: d,
            setPaymentSourceId: f,
            hasFetchedPaymentSources: u,
            defaultPaymentSource: null != o ? l[o] : null
        }
    );
}
