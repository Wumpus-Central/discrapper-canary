"use strict";
n.d(t, { Bv: () => I, ar: () => m, f9: () => A, g5: () => p, k0: () => T, k5: () => f, nf: () => g });
var i = n(64700),
    r = n(989349),
    s = n.n(r),
    a = n(17928),
    o = n(155718),
    l = n(166403),
    d = n(89366),
    _ = n(881489),
    u = n(694080),
    c = n(422936),
    E = n(234419),
    h = n(788868);
function m() {
    let e = (0, E.V)(),
        t = (0, d.QQ)(),
        n = (0, c.O)(),
        i = f();
    return null != e || t || null != n || i;
}
let f = () => {
        let e = (0, a.bG)([l.A], () => l.A.getPremiumTypeSubscription()),
            t = e?.metadata?.active_discount_expires_at;
        return null != t && s()(Date.now()) <= s()(t);
    },
    g = () => {
        let e = (0, a.bG)([l.A], () => l.A.getPremiumTypeSubscription()),
            t = e?.metadata?.active_discount_id;
        switch (t) {
            case h.q:
            case h.lj:
                return { duration: 1, percentage: 30, discountId: t };
            case h.EG:
            case h.TU:
            case h.KG:
                return { duration: 3, percentage: 30, discountId: t };
            case h.HF:
                return { duration: 1, percentage: 40, discountId: t };
            case h.BR:
                return { duration: 1, percentage: 20, discountId: t };
            case h.CW:
                return { duration: 1, percentage: 25, discountId: t };
            default:
                return;
        }
    },
    p = (e) => {
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
                (0, u.qz)()
                    .then((e) => {
                        o(e), l();
                    })
                    .catch((e) => {
                        l();
                    })),
            { churnUserDiscountOffer: a, isFetchingChurnDiscountOffer: r }
        );
    },
    A = () => {
        let e = (0, a.bG)([l.A], () => l.A.getPremiumTypeSubscription()),
            t = f(),
            n = null !== e && e.hasPremiumNitroMonthly,
            i = !!e?.hasActiveTrial;
        return n && !i && !t;
    },
    I = (e) => {
        for (let t of e.invoiceItems) {
            let e = t.discounts.find((e) => e.type === o.iS.SUBSCRIPTION_PLAN);
            if (null != e)
                switch (e.discount_id) {
                    case h.q:
                        return { duration: 1, percentage: e.percentage_amount, discountId: e.discount_id };
                    case h.EG:
                        return { duration: 3, percentage: e.percentage_amount, discountId: e.discount_id };
                }
        }
        return null;
    },
    T = () => (0, _.ds)();
