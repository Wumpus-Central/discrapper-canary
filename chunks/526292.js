"use strict";
n.d(t, { Bv: () => g, ar: () => I, f9: () => m, g5: () => T, k0: () => S, k5: () => f, nf: () => p });
var i = n(582128),
    r = n(989349),
    a = n.n(r),
    s = n(17928),
    l = n(155718),
    o = n(166403),
    d = n(89366),
    c = n(881489),
    u = n(945960),
    _ = n(432779),
    E = n(422936),
    A = n(732280),
    h = n(202541);
function I() {
    let e = (0, A.V)(),
        t = (0, d.QQ)(),
        n = (0, E.O)(),
        i = (0, E.p)(),
        r = f();
    return null != e || t || null != n || null != i || r;
}
let f = () => {
    let e = (0, s.bG)([o.A], () => o.A.getPremiumTypeSubscription()),
        t = e?.metadata?.active_discount_expires_at;
    return null != t && a()(Date.now()) <= a()(t);
};
function p() {
    let e = (0, s.bG)([o.A], () => o.A.getPremiumTypeSubscription()),
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
        case h.UX:
            return { duration: 12, percentage: 20, discountId: t };
        case h.RG:
            return { duration: 12, percentage: 30, discountId: t };
        case h.V2:
            return { duration: 1, percentage: 40, discountId: t };
        case h.xH:
            return { duration: 3, percentage: 30, discountId: t };
        default:
            return;
    }
}
function T(e) {
    let t = (0, _.A)(h.q),
        n = (0, _.A)(h.EG),
        [r, a] = i.useState(!1),
        [s, l] = i.useState(!1),
        [o, d] = i.useState(null),
        c = t ?? n ?? null;
    if (null != c) return { churnUserDiscountOffer: c, isFetchingChurnDiscountOffer: !1 };
    if (e) return { churnUserDiscountOffer: o, isFetchingChurnDiscountOffer: s };
    function E() {
        a(!0), l(!1);
    }
    return (
        s ||
            r ||
            (l(!0),
            (0, u.qz)()
                .then((e) => {
                    d(e), E();
                })
                .catch((e) => {
                    E();
                })),
        { churnUserDiscountOffer: o, isFetchingChurnDiscountOffer: s }
    );
}
function m() {
    let e = (0, s.bG)([o.A], () => o.A.getPremiumTypeSubscription()),
        t = f(),
        n = null !== e && e.hasPremiumNitroMonthly,
        i = !!e?.hasActiveTrial;
    return n && !t && !i;
}
function g(e) {
    for (let t of e.invoiceItems) {
        let e = t.discounts.find((e) => e.type === l.iS.SUBSCRIPTION_PLAN);
        if (null != e)
            switch (e.discount_id) {
                case h.q:
                    return { duration: 1, percentage: e.percentage_amount, discountId: e.discount_id };
                case h.EG:
                    return { duration: 3, percentage: e.percentage_amount, discountId: e.discount_id };
            }
    }
    return null;
}
function S() {
    return (0, c.ds)();
}
