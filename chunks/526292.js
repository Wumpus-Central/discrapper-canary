"use strict";
n.d(t, { Bv: () => T, ar: () => E, f9: () => I, g5: () => A, k0: () => S, k5: () => m, nf: () => g });
var i = n(64700),
    r = n(989349),
    s = n.n(r),
    a = n(17928),
    o = n(155718),
    l = n(166403),
    u = n(89366),
    c = n(881489),
    d = n(694080),
    _ = n(504836),
    f = n(422936),
    h = n(234419),
    p = n(788868);
function E() {
    let e = (0, h.V)(),
        t = (0, u.QQ)(),
        n = (0, f.O)(),
        i = m();
    return null != e || t || null != n || i;
}
let m = () => {
        let e = (0, a.bG)([l.A], () => l.A.getPremiumTypeSubscription()),
            t = e?.metadata?.active_discount_expires_at;
        return null != t && s()(Date.now()) <= s()(t);
    },
    g = () => {
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
            case p.V2:
                return { duration: 1, percentage: 40, discountId: t };
            default:
                return;
        }
    },
    A = (e) => {
        let [t, n] = i.useState(!1),
            [r, s] = i.useState(!1),
            [a, o] = i.useState(null);
        if (e) return { churnUserDiscountOffer: a, isFetchingChurnDiscountOffer: r };
        let l = () => {
            n(!0), s(!1);
        };
        return (
            r ||
                t ||
                (s(!0),
                (0, d.qz)()
                    .then((e) => {
                        o(e), l();
                    })
                    .catch((e) => {
                        l();
                    })),
            { churnUserDiscountOffer: a, isFetchingChurnDiscountOffer: r }
        );
    },
    I = () => {
        let e = (0, a.bG)([l.A], () => l.A.getPremiumTypeSubscription()),
            t = m(),
            n = (0, _.Z)({ location: "churn_offer" }),
            i = null !== e && e.hasPremiumNitroMonthly,
            r = !!e?.hasActiveTrial;
        return i && !t && (!r || n);
    },
    T = (e) => {
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
    S = () => (0, c.ds)();
