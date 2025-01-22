r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(442837),
    s = r(355467),
    l = r(853872);
function u(e) {
    let { isGift: n, activeSubscription: r } = e,
        {
            defaultPaymentSourceId: i,
            paymentSources: u,
            hasFetchedPaymentSources: c
        } = (0, o.cj)([l.Z], () => ({
            defaultPaymentSourceId: l.Z.defaultPaymentSourceId,
            paymentSources: l.Z.paymentSources,
            hasFetchedPaymentSources: l.Z.hasFetchedPaymentSources
        })),
        d = (e, n, r) => (e || (null == n ? void 0 : n.paymentSourceId) == null ? r : n.paymentSourceId),
        [f, p] = a.useState(() => d(n, r, i));
    return (
        a.useEffect(() => {
            c ? p(d(n, r, i)) : (0, s.tZ)();
        }, [c, n, r, i]),
        {
            paymentSources: u,
            hasPaymentSources: Object.keys(u).length > 0,
            paymentSourceId: f,
            setPaymentSourceId: p,
            hasFetchedPaymentSources: c,
            defaultPaymentSource: null != i ? u[i] : null
        }
    );
}
