n.d(t, { A: () => l });
var o = n(64700),
    r = n(17928),
    i = n(323082),
    a = n(295405);
function l(e) {
    let { isGift: t, activeSubscription: n, eligiblePaymentGateways: l } = e,
        {
            defaultPaymentSourceId: s,
            paymentSources: u,
            hasFetchedPaymentSources: _,
        } = (0, r.cf)([a.A], () => ({
            defaultPaymentSourceId: a.A.defaultPaymentSourceId,
            paymentSources: a.A.paymentSources,
            hasFetchedPaymentSources: a.A.hasFetchedPaymentSources,
        })),
        d = (e, t, n, o) => {
            if (!e && t?.paymentSourceId != null) return t.paymentSourceId;
            if (null != o && o.length > 0) {
                if (null != n && o.includes(u[n].paymentGateway)) return n;
                for (let e in u) {
                    let t = u[e];
                    if (o.includes(t.paymentGateway)) return e;
                }
                return null;
            }
            return n;
        },
        [C, E] = o.useState(() => d(t, n, s, l));
    return (
        o.useEffect(() => {
            _ ? E(d(t, n, s, l)) : (0, i.$o)();
        }, [_, t, n, s, l]),
        {
            paymentSources: u,
            hasPaymentSources: Object.keys(u).length > 0,
            paymentSourceId: C,
            setPaymentSourceId: E,
            hasFetchedPaymentSources: _,
            defaultPaymentSource: null != s ? u[s] : null,
        }
    );
}
