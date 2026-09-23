n.d(t, { Bv: () => y, ar: () => g, f9: () => I, g5: () => E, k0: () => S, k5: () => x, nf: () => C });
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
function A(e) {
    switch (e) {
        case p.q:
        case p.lj:
            return { duration: 1, percentage: 30, discountId: e };
        case p.W7:
            return { duration: 1, percentage: 10, discountId: e };
        case p.Qo:
            return { duration: 1, percentage: 50, discountId: e };
        case p.EG:
        case p.TU:
        case p.KG:
            return { duration: 3, percentage: 30, discountId: e };
        case p.HF:
            return { duration: 1, percentage: 40, discountId: e };
        case p.BR:
            return { duration: 1, percentage: 20, discountId: e };
        case p.CW:
            return { duration: 1, percentage: 25, discountId: e };
        case p.UX:
            return { duration: 12, percentage: 20, discountId: e };
        case p.RG:
            return { duration: 12, percentage: 30, discountId: e };
        case p.V2:
            return { duration: 1, percentage: 40, discountId: e };
        case p.xH:
            return { duration: 3, percentage: 30, discountId: e };
        case p.sC:
            return { duration: 1, percentage: 30, discountId: e };
        default:
            return;
    }
}
function C() {
    let e = (0, r.bG)([o.A], () => o.A.getPremiumTypeSubscription());
    return A(e?.metadata?.active_discount_id);
}
function E(e) {
    let t = (0, h.A)(p.q),
        n = (0, h.A)(p.W7),
        i = (0, h.A)(p.Qo),
        s = (0, h.A)(p.EG),
        [r, a] = l.useState(!1),
        [o, u] = l.useState(!1),
        [c, m] = l.useState(null),
        f = t ?? n ?? i ?? s ?? null;
    if (null != f) return { churnUserDiscountOffer: f, isFetchingChurnDiscountOffer: !1 };
    if (e) return { churnUserDiscountOffer: c, isFetchingChurnDiscountOffer: o };
    function g() {
        (a(!0), u(!1));
    }
    return (
        o ||
            r ||
            (u(!0),
            (0, d.qz)()
                .then((e) => {
                    (m(e), g());
                })
                .catch((e) => {
                    g();
                })),
        { churnUserDiscountOffer: c, isFetchingChurnDiscountOffer: o }
    );
}
function I() {
    let e = (0, r.bG)([o.A], () => o.A.getPremiumTypeSubscription()),
        t = x(),
        n = null !== e && e.hasPremiumNitroMonthly,
        l = !!e?.hasActiveTrial;
    return n && !t && !l;
}
function y(e) {
    for (let t of e.invoiceItems) {
        let e = t.discounts.find((e) => e.type === a.iS.SUBSCRIPTION_PLAN);
        if (e?.discount_id != null && p.i_.includes(e.discount_id))
            return { duration: A(e.discount_id)?.duration, percentage: e.percentage_amount, discountId: e.discount_id };
    }
    return null;
}
function S() {
    return (0, c.ds)();
}
