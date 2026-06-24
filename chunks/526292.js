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
    d = n(945960),
    _ = n(432779),
    h = n(422936),
    f = n(234419),
    p = n(788868);
function E() {
    let e = (0, f.V)(),
        t = (0, u.QQ)(),
        n = (0, h.O)(),
        i = (0, h.p)(),
        r = m();
    return null != e || t || null != n || null != i || r;
}
let m = () => {
    let e = (0, a.bG)([l.A], () => l.A.getPremiumTypeSubscription()),
        t = e?.metadata?.active_discount_expires_at;
    return null != t && s()(Date.now()) <= s()(t);
};
function g() {
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
        case p.UX:
            return { duration: 12, percentage: 20, discountId: t };
        case p.RG:
            return { duration: 12, percentage: 30, discountId: t };
        case p.V2:
            return { duration: 1, percentage: 40, discountId: t };
        case p.xH:
            return { duration: 3, percentage: 30, discountId: t };
        default:
            return;
    }
}
function A(e) {
    let t = (0, _.A)(p.q),
        n = (0, _.A)(p.EG),
        [r, s] = i.useState(!1),
        [a, o] = i.useState(!1),
        [l, u] = i.useState(null),
        c = t ?? n ?? null;
    if (null != c) return { churnUserDiscountOffer: c, isFetchingChurnDiscountOffer: !1 };
    if (e) return { churnUserDiscountOffer: l, isFetchingChurnDiscountOffer: a };
    function h() {
        s(!0), o(!1);
    }
    return (
        a ||
            r ||
            (o(!0),
            (0, d.qz)()
                .then((e) => {
                    u(e), h();
                })
                .catch((e) => {
                    h();
                })),
        { churnUserDiscountOffer: l, isFetchingChurnDiscountOffer: a }
    );
}
function I() {
    let e = (0, a.bG)([l.A], () => l.A.getPremiumTypeSubscription()),
        t = m(),
        n = null !== e && e.hasPremiumNitroMonthly,
        i = !!e?.hasActiveTrial;
    return n && !t && !i;
}
function T(e) {
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
}
function S() {
    return (0, c.ds)();
}
