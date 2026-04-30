"use strict";
n.d(t, { A: () => o });
var i = n(64700),
    r = n(17928),
    s = n(753390),
    a = n(295405);
function o(e) {
    let { isGift: t, activeSubscription: n, eligiblePaymentGateways: o } = e,
        {
            defaultPaymentSourceId: l,
            paymentSources: u,
            hasFetchedPaymentSources: c,
        } = (0, r.cf)([a.A], () => ({
            defaultPaymentSourceId: a.A.defaultPaymentSourceId,
            paymentSources: a.A.paymentSources,
            hasFetchedPaymentSources: a.A.hasFetchedPaymentSources,
        })),
        d = (e, t, n, i) => {
            if (!e && t?.paymentSourceId != null) return t.paymentSourceId;
            if (null != i && i.length > 0) {
                if (null != n && i.includes(u[n].paymentGateway)) return n;
                for (let e in u) {
                    let t = u[e];
                    if (i.includes(t.paymentGateway)) return e;
                }
                return null;
            }
            return n;
        },
        [_, f] = i.useState(() => d(t, n, l, o));
    return (
        i.useEffect(() => {
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
