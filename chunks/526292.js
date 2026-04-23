"use strict";
n.d(t, { Bv: () => I, ar: () => h, f9: () => A, g5: () => g, k0: () => T, k5: () => E, nf: () => m });
var r = n(64700),
    i = n(989349),
    s = n.n(i),
    a = n(311907),
    o = n(155718),
    l = n(166403),
    u = n(89366),
    c = n(881489),
    d = n(694080),
    _ = n(422936),
    f = n(234419),
    p = n(788868);
function h() {
    let e = (0, f.V)(),
        t = (0, u.QQ)(),
        n = (0, _.O)(),
        r = E();
    return null != e || t || null != n || r;
}
let E = () => {
        let e = (0, a.bG)([l.A], () => l.A.getPremiumTypeSubscription()),
            t = e?.metadata?.active_discount_expires_at;
        return null != t && s()(Date.now()) <= s()(t);
    },
    m = () => {
        let e = (0, a.bG)([l.A], () => l.A.getPremiumTypeSubscription()),
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
    g = (e) => {
        let [t, n] = r.useState(!1),
            [i, s] = r.useState(!1),
            [a, o] = r.useState(null);
        if (e) return { churnUserDiscountOffer: a, isFetchingChurnDiscountOffer: i };
        let l = () => {
            n(!0), s(!1);
        };
        return (
            i ||
                t ||
                (s(!0),
                (0, d.qz)()
                    .then((e) => {
                        o(e), l();
                    })
                    .catch((e) => {
                        l();
                    })),
            { churnUserDiscountOffer: a, isFetchingChurnDiscountOffer: i }
        );
    },
    A = () => {
        let e = (0, a.bG)([l.A], () => l.A.getPremiumTypeSubscription()),
            t = E(),
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
    T = () => (0, c.ds)();
