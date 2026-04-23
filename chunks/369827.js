"use strict";
n.d(t, { A: () => o });
var r = n(64700),
    i = n(311907),
    s = n(323082),
    a = n(295405);
function o(e) {
    let { isGift: t, activeSubscription: n, eligiblePaymentGateways: o } = e,
        {
            defaultPaymentSourceId: l,
            paymentSources: u,
            hasFetchedPaymentSources: c,
        } = (0, i.cf)([a.A], () => ({
            defaultPaymentSourceId: a.A.defaultPaymentSourceId,
            paymentSources: a.A.paymentSources,
            hasFetchedPaymentSources: a.A.hasFetchedPaymentSources,
        })),
        d = (e, t, n, r) => {
            if (!e && t?.paymentSourceId != null) return t.paymentSourceId;
            if (null != r && r.length > 0) {
                if (null != n && r.includes(u[n].paymentGateway)) return n;
                for (let e in u) {
                    let t = u[e];
                    if (r.includes(t.paymentGateway)) return e;
                }
                return null;
            }
            return n;
        },
        [_, f] = r.useState(() => d(t, n, l, o));
    return (
        r.useEffect(() => {
            c ? f(d(t, n, l, o)) : (0, s.$o)();
        }, [c, t, n, l, o]),
        {
            paymentSources: u,
            hasPaymentSources: Object.keys(u).length > 0,
            paymentSourceId: _,
            setPaymentSourceId: f,
            hasFetchedPaymentSources: c,
            defaultPaymentSource: null != l ? u[l] : null,
        }
    );
}
