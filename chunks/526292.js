n.d(t, { Bv: () => I, ar: () => N, f9: () => _, g5: () => T, k0: () => h, k5: () => m, nf: () => p });
var l = n(64700),
    i = n(989349),
    a = n.n(i),
    r = n(17928),
    o = n(155718),
    s = n(166403),
    c = n(89366),
    u = n(881489),
    d = n(945960),
    C = n(504836),
    A = n(422936),
    g = n(234419),
    f = n(788868);
function N() {
    let e = (0, g.V)(),
        t = (0, c.QQ)(),
        n = (0, A.O)(),
        l = (0, A.p)(),
        i = m();
    return null != e || t || null != n || null != l || i;
}
let m = () => {
        let e = (0, r.bG)([s.A], () => s.A.getPremiumTypeSubscription()),
            t = e?.metadata?.active_discount_expires_at;
        return null != t && a()(Date.now()) <= a()(t);
    },
    p = () => {
        let e = (0, r.bG)([s.A], () => s.A.getPremiumTypeSubscription()),
            t = e?.metadata?.active_discount_id;
        switch (t) {
            case f.q:
            case f.lj:
                return { duration: 1, percentage: 30, discountId: t };
            case f.EG:
            case f.TU:
            case f.KG:
                return { duration: 3, percentage: 30, discountId: t };
            case f.HF:
                return { duration: 1, percentage: 40, discountId: t };
            case f.BR:
                return { duration: 1, percentage: 20, discountId: t };
            case f.CW:
                return { duration: 1, percentage: 25, discountId: t };
            case f.UX:
                return { duration: 12, percentage: 20, discountId: t };
            case f.RG:
                return { duration: 12, percentage: 30, discountId: t };
            case f.V2:
                return { duration: 1, percentage: 40, discountId: t };
            case f.xH:
                return { duration: 3, percentage: 30, discountId: t };
            default:
                return;
        }
    },
    T = (e) => {
        let [t, n] = l.useState(!1),
            [i, a] = l.useState(!1),
            [r, o] = l.useState(null);
        if (e) return { churnUserDiscountOffer: r, isFetchingChurnDiscountOffer: i };
        let s = () => {
            n(!0), a(!1);
        };
        return (
            i ||
                t ||
                (a(!0),
                (0, d.qz)()
                    .then((e) => {
                        o(e), s();
                    })
                    .catch((e) => {
                        s();
                    })),
            { churnUserDiscountOffer: r, isFetchingChurnDiscountOffer: i }
        );
    },
    _ = () => {
        let e = (0, r.bG)([s.A], () => s.A.getPremiumTypeSubscription()),
            t = m(),
            n = (0, C.Z)({ location: "churn_offer" }),
            l = null !== e && e.hasPremiumNitroMonthly,
            i = !!e?.hasActiveTrial;
        return l && !t && (!i || n);
    },
    I = (e) => {
        for (let t of e.invoiceItems) {
            let e = t.discounts.find((e) => e.type === o.iS.SUBSCRIPTION_PLAN);
            if (null != e)
                switch (e.discount_id) {
                    case f.q:
                        return { duration: 1, percentage: e.percentage_amount, discountId: e.discount_id };
                    case f.EG:
                        return { duration: 3, percentage: e.percentage_amount, discountId: e.discount_id };
                }
        }
        return null;
    },
    h = () => (0, u.ds)();
