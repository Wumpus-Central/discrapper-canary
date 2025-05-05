n.d(t, { Z: () => s }), n(388685);
var r = n(73800),
    i = n(442837),
    a = n(355467),
    o = n(853872);
function s(e) {
    let { isGift: t, activeSubscription: n, eligiblePaymentGateways: s } = e,
        {
            defaultPaymentSourceId: l,
            paymentSources: c,
            hasFetchedPaymentSources: u
        } = (0, i.cj)([o.Z], () => ({
            defaultPaymentSourceId: o.Z.defaultPaymentSourceId,
            paymentSources: o.Z.paymentSources,
            hasFetchedPaymentSources: o.Z.hasFetchedPaymentSources
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
        [f, _] = r.useState(() => d(t, n, l, s));
    return (
        r.useEffect(() => {
            u ? _(d(t, n, l, s)) : (0, a.tZ)();
        }, [u, t, n, l, s]),
        {
            paymentSources: c,
            hasPaymentSources: Object.keys(c).length > 0,
            paymentSourceId: f,
            setPaymentSourceId: _,
            hasFetchedPaymentSources: u,
            defaultPaymentSource: null != l ? c[l] : null
        }
    );
}
