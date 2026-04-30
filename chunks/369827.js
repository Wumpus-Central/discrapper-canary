n.d(t, { A: () => l });
var o = n(64700),
    r = n(17928),
    a = n(323082),
    i = n(295405);
function l(e) {
    let { isGift: t, activeSubscription: n, eligiblePaymentGateways: l } = e,
        {
            defaultPaymentSourceId: u,
            paymentSources: s,
            hasFetchedPaymentSources: _,
        } = (0, r.cf)([i.A], () => ({
            defaultPaymentSourceId: i.A.defaultPaymentSourceId,
            paymentSources: i.A.paymentSources,
            hasFetchedPaymentSources: i.A.hasFetchedPaymentSources,
        })),
        d = (e, t, n, o) => {
            if (!e && t?.paymentSourceId != null) return t.paymentSourceId;
            if (null != o && o.length > 0) {
                if (null != n && o.includes(s[n].paymentGateway)) return n;
                for (let e in s) {
                    let t = s[e];
                    if (o.includes(t.paymentGateway)) return e;
                }
                return null;
            }
            return n;
        },
        [C, E] = o.useState(() => d(t, n, u, l));
    return (
        o.useEffect(() => {
            _ ? E(d(t, n, u, l)) : (0, a.$o)();
        }, [_, t, n, u, l]),
        {
            paymentSources: s,
            hasPaymentSources: Object.keys(s).length > 0,
            paymentSourceId: C,
            setPaymentSourceId: E,
            hasFetchedPaymentSources: _,
            defaultPaymentSource: null != u ? s[u] : null,
        }
    );
}
