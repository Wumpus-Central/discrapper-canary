s.d(t, { Bv: () => T, ar: () => E, f9: () => m, g5: () => R, k0: () => p, k5: () => N, nf: () => I });
var i = s(64700),
    n = s(989349),
    a = s.n(n),
    r = s(17928),
    l = s(155718),
    d = s(166403),
    c = s(89366),
    o = s(881489),
    u = s(694080),
    h = s(422936),
    _ = s(234419),
    A = s(788868);
function E() {
    let e = (0, _.V)(),
        t = (0, c.QQ)(),
        s = (0, h.O)(),
        i = N();
    return null != e || t || null != s || i;
}
let N = () => {
        let e = (0, r.bG)([d.A], () => d.A.getPremiumTypeSubscription()),
            t = e?.metadata?.active_discount_expires_at;
        return null != t && a()(Date.now()) <= a()(t);
    },
    I = () => {
        let e = (0, r.bG)([d.A], () => d.A.getPremiumTypeSubscription()),
            t = e?.metadata?.active_discount_id;
        switch (t) {
            case A.q:
            case A.lj:
                return { duration: 1, percentage: 30, discountId: t };
            case A.EG:
            case A.TU:
            case A.KG:
                return { duration: 3, percentage: 30, discountId: t };
            case A.HF:
                return { duration: 1, percentage: 40, discountId: t };
            case A.BR:
                return { duration: 1, percentage: 20, discountId: t };
            case A.CW:
                return { duration: 1, percentage: 25, discountId: t };
            default:
                return;
        }
    },
    R = (e) => {
        let [t, s] = i.useState(!1),
            [n, a] = i.useState(!1),
            [r, l] = i.useState(null);
        if (e) return { churnUserDiscountOffer: r, isFetchingChurnDiscountOffer: n };
        let d = () => {
            s(!0), a(!1);
        };
        return (
            n ||
                t ||
                (a(!0),
                (0, u.qz)()
                    .then((e) => {
                        l(e), d();
                    })
                    .catch((e) => {
                        d();
                    })),
            { churnUserDiscountOffer: r, isFetchingChurnDiscountOffer: n }
        );
    },
    m = () => {
        let e = (0, r.bG)([d.A], () => d.A.getPremiumTypeSubscription()),
            t = N(),
            s = null !== e && e.hasPremiumNitroMonthly,
            i = !!e?.hasActiveTrial;
        return s && !i && !t;
    },
    T = (e) => {
        for (let t of e.invoiceItems) {
            let e = t.discounts.find((e) => e.type === l.iS.SUBSCRIPTION_PLAN);
            if (null != e)
                switch (e.discount_id) {
                    case A.q:
                        return { duration: 1, percentage: e.percentage_amount, discountId: e.discount_id };
                    case A.EG:
                        return { duration: 3, percentage: e.percentage_amount, discountId: e.discount_id };
                }
        }
        return null;
    },
    p = () => (0, o.ds)();
