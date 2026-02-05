"use strict";
n.d(t, { Bv: () => I, ar: () => h, f9: () => A, g5: () => E, k0: () => T, k5: () => m, nf: () => g });
var r = n(64700),
    i = n(989349),
    a = n.n(i),
    s = n(311907),
    o = n(155718),
    l = n(166403),
    u = n(89366),
    c = n(637073),
    d = n(694080),
    _ = n(422936),
    f = n(234419),
    p = n(788868);
function h() {
    let e = (0, f.V)(),
        t = (0, u.QQ)(),
        n = (0, _.O)(),
        r = m();
    return null != e || t || null != n || r;
}
let m = () => {
        let e = (0, s.bG)([l.A], () => l.A.getPremiumTypeSubscription()),
            t = e?.metadata?.active_discount_expires_at;
        return null != t && a()(Date.now()) <= a()(t);
    },
    g = () => {
        let e = (0, s.bG)([l.A], () => l.A.getPremiumTypeSubscription()),
            t = e?.metadata?.active_discount_id;
        switch (t) {
            case p.q:
            case p.lj:
                return { duration: 1, percentage: 30, discountId: t };
            case p.EG:
            case p.TU:
            case p.KG:
                return { duration: 3, percentage: 30, discountId: t };
            case p.HF:
                return { duration: 1, percentage: 40, discountId: t };
            case p.BR:
                return { duration: 1, percentage: 20, discountId: t };
            case p.CW:
                return { duration: 1, percentage: 25, discountId: t };
            default:
                return;
        }
    },
    E = (e) => {
        let [t, n] = r.useState(!1),
            [i, a] = r.useState(!1),
            [s, o] = r.useState(null);
        if (e) return { churnUserDiscountOffer: s, isFetchingChurnDiscountOffer: i };
        let l = () => {
            n(!0), a(!1);
        };
        return (
            i ||
                t ||
                (a(!0),
                (0, d.qz)()
                    .then((e) => {
                        o(e), l();
                    })
                    .catch((e) => {
                        l();
                    })),
            { churnUserDiscountOffer: s, isFetchingChurnDiscountOffer: i }
        );
    },
    A = () => {
        let e = (0, s.bG)([l.A], () => l.A.getPremiumTypeSubscription()),
            t = m(),
            n = null !== e && e.hasPremiumNitroMonthly,
            r = !!e?.hasActiveTrial;
        return n && !r && !t;
    },
    I = (e) => {
        for (let t of e.invoiceItems) {
            let e = t.discounts.find((e) => e.type === o.iS.SUBSCRIPTION_PLAN);
            if (null != e)
                switch (e.discount_id) {
                    case p.q:
                        return { duration: 1, percentage: e.percentage_amount, discountId: e.discount_id };
                    case p.EG:
                        return { duration: 3, percentage: e.percentage_amount, discountId: e.discount_id };
                }
        }
        return null;
    },
    T = () => (0, c.d)();
