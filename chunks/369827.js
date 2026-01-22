n.d(t, { A: () => o }), n(896048);
var r = n(64700),
    i = n(311907),
    a = n(384904),
    s = n(295405);
function o(e) {
    let { isGift: t, activeSubscription: n, eligiblePaymentGateways: o } = e,
        {
            defaultPaymentSourceId: l,
            paymentSources: c,
            hasFetchedPaymentSources: u,
        } = (0, i.cf)([s.A], () => ({
            defaultPaymentSourceId: s.A.defaultPaymentSourceId,
            paymentSources: s.A.paymentSources,
            hasFetchedPaymentSources: s.A.hasFetchedPaymentSources,
        })),
        d = (e, t, n, r) => {
            if (!e && (null == t ? void 0 : t.paymentSourceId) != null) return t.paymentSourceId;
            if (null != r && r.length > 0) {
                if (null != n && r.includes(c[n].paymentGateway)) return n;
                for (let e in c) {
                    let t = c[e];
                    if (r.includes(t.paymentGateway)) return e;
                }
                return null;
            }
            return n;
        },
        [f, p] = r.useState(() => d(t, n, l, o));
    return (
        r.useEffect(() => {
            u ? p(d(t, n, l, o)) : (0, a.$o)();
        }, [u, t, n, l, o]),
        {
            paymentSources: c,
            hasPaymentSources: Object.keys(c).length > 0,
            paymentSourceId: f,
            setPaymentSourceId: p,
            hasFetchedPaymentSources: u,
            defaultPaymentSource: null != l ? c[l] : null,
        }
    );
}
