n.d(t, { A: () => l });
var r = n(64700),
    a = n(17928),
    i = n(323082),
    o = n(295405);
function l(e) {
    let { isGift: t, activeSubscription: n, eligiblePaymentGateways: l } = e,
        {
            defaultPaymentSourceId: s,
            paymentSources: d,
            hasFetchedPaymentSources: u,
        } = (0, a.cf)([o.A], () => ({
            defaultPaymentSourceId: o.A.defaultPaymentSourceId,
            paymentSources: o.A.paymentSources,
            hasFetchedPaymentSources: o.A.hasFetchedPaymentSources,
        })),
        c = (e, t, n, r) => {
            if (!e && t?.paymentSourceId != null) return t.paymentSourceId;
            if (null != r && r.length > 0) {
                if (null != n && r.includes(d[n].paymentGateway)) return n;
                for (let e in d) {
                    let t = d[e];
                    if (r.includes(t.paymentGateway)) return e;
                }
                return null;
            }
            return n;
        },
        [_, p] = r.useState(() => c(t, n, s, l));
    return (
        r.useEffect(() => {
            u ? p(c(t, n, s, l)) : (0, i.$o)();
        }, [u, t, n, s, l]),
        {
            paymentSources: d,
            hasPaymentSources: Object.keys(d).length > 0,
            paymentSourceId: _,
            setPaymentSourceId: p,
            hasFetchedPaymentSources: u,
            defaultPaymentSource: null != s ? d[s] : null,
        }
    );
}
