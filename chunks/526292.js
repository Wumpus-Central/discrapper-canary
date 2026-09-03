n.d(t, { Bv: () => I, ar: () => g, f9: () => C, g5: () => E, k0: () => y, k5: () => x, nf: () => A });
var l = n(582128),
    i = n(536637),
    s = n.n(i),
    r = n(17928),
    a = n(155718),
    o = n(166403),
    u = n(89366),
    c = n(881489),
    d = n(10392),
    h = n(432779),
    m = n(724651),
    f = n(732280),
    p = n(202541);
function g() {
    let e = (0, f.V)(),
        t = (0, u.QQ)(),
        n = (0, m.O)(),
        l = (0, m.p)(),
        i = x();
    return null != e || t || null != n || null != l || i;
}
let x = () => {
    let e = (0, r.bG)([o.A], () => o.A.getPremiumTypeSubscription()),
        t = e?.metadata?.active_discount_expires_at;
    return null != t && s()(Date.now()) <= s()(t);
};
function A() {
    let e = (0, r.bG)([o.A], () => o.A.getPremiumTypeSubscription()),
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
        case p.sC:
            return { duration: 1, percentage: 30, discountId: t };
        default:
            return;
    }
}
function E(e) {
    let t = (0, h.A)(p.q),
        n = (0, h.A)(p.EG),
        [i, s] = l.useState(!1),
        [r, a] = l.useState(!1),
        [o, u] = l.useState(null),
        c = t ?? n ?? null;
    if (null != c) return { churnUserDiscountOffer: c, isFetchingChurnDiscountOffer: !1 };
    if (e) return { churnUserDiscountOffer: o, isFetchingChurnDiscountOffer: r };
    function m() {
        s(!0), a(!1);
    }
    return (
        r ||
            i ||
            (a(!0),
            (0, d.qz)()
                .then((e) => {
                    u(e), m();
                })
                .catch((e) => {
                    m();
                })),
        { churnUserDiscountOffer: o, isFetchingChurnDiscountOffer: r }
    );
}
function C() {
    let e = (0, r.bG)([o.A], () => o.A.getPremiumTypeSubscription()),
        t = x(),
        n = null !== e && e.hasPremiumNitroMonthly,
        l = !!e?.hasActiveTrial;
    return n && !t && !l;
}
function I(e) {
    for (let t of e.invoiceItems) {
        let e = t.discounts.find((e) => e.type === a.iS.SUBSCRIPTION_PLAN);
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
function y() {
    return (0, c.ds)();
}
