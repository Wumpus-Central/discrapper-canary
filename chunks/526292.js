n.d(t, { Bv: () => G, ar: () => d, f9: () => M, g5: () => o, k0: () => B, k5: () => O, nf: () => R });
var r = n(64700),
    _ = n(989349),
    u = n.n(_),
    c = n(17928),
    a = n(155718),
    i = n(166403),
    A = n(89366),
    N = n(881489),
    s = n(694080),
    T = n(422936),
    I = n(234419),
    E = n(788868);
function d() {
    let e = (0, I.V)(),
        t = (0, A.QQ)(),
        n = (0, T.O)(),
        r = O();
    return null != e || t || null != n || r;
}
let O = () => {
        let e = (0, c.bG)([i.A], () => i.A.getPremiumTypeSubscription()),
            t = e?.metadata?.active_discount_expires_at;
        return null != t && u()(Date.now()) <= u()(t);
    },
    R = () => {
        let e = (0, c.bG)([i.A], () => i.A.getPremiumTypeSubscription()),
            t = e?.metadata?.active_discount_id;
        switch (t) {
            case E.q:
            case E.lj:
                return { duration: 1, percentage: 30, discountId: t };
            case E.EG:
            case E.TU:
            case E.KG:
                return { duration: 3, percentage: 30, discountId: t };
            case E.HF:
                return { duration: 1, percentage: 40, discountId: t };
            case E.BR:
                return { duration: 1, percentage: 20, discountId: t };
            case E.CW:
                return { duration: 1, percentage: 25, discountId: t };
            case E.V2:
                return { duration: 1, percentage: 40, discountId: t };
            default:
                return;
        }
    },
    o = (e) => {
        let [t, n] = r.useState(!1),
            [_, u] = r.useState(!1),
            [c, a] = r.useState(null);
        if (e) return { churnUserDiscountOffer: c, isFetchingChurnDiscountOffer: _ };
        let i = () => {
            n(!0), u(!1);
        };
        return (
            _ ||
                t ||
                (u(!0),
                (0, s.qz)()
                    .then((e) => {
                        a(e), i();
                    })
                    .catch((e) => {
                        i();
                    })),
            { churnUserDiscountOffer: c, isFetchingChurnDiscountOffer: _ }
        );
    },
    M = () => {
        let e = (0, c.bG)([i.A], () => i.A.getPremiumTypeSubscription()),
            t = O(),
            n = null !== e && e.hasPremiumNitroMonthly,
            r = !!e?.hasActiveTrial;
        return n && !r && !t;
    },
    G = (e) => {
        for (let t of e.invoiceItems) {
            let e = t.discounts.find((e) => e.type === a.iS.SUBSCRIPTION_PLAN);
            if (null != e)
                switch (e.discount_id) {
                    case E.q:
                        return { duration: 1, percentage: e.percentage_amount, discountId: e.discount_id };
                    case E.EG:
                        return { duration: 3, percentage: e.percentage_amount, discountId: e.discount_id };
                }
        }
        return null;
    },
    B = () => (0, N.ds)();
