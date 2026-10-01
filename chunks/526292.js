n.d(t, { Bv: () => C, ar: () => g, f9: () => N, g5: () => p, k0: () => O, k5: () => h, nf: () => _ });
var i = n(582128),
    s = n(536637),
    l = n.n(s),
    r = n(17928),
    a = n(155718),
    o = n(166403),
    c = n(89366),
    u = n(881489),
    d = n(10392),
    m = n(432779),
    f = n(724651),
    E = n(732280),
    I = n(202541);
function g() {
    let e = (0, E.V)(),
        t = (0, c.QQ)(),
        n = (0, f.O)(),
        i = (0, f.p)(),
        s = h();
    return null != e || t || null != n || null != i || s;
}
let h = () => {
    let e = (0, r.bG)([o.A], () => o.A.getPremiumTypeSubscription()),
        t = e?.metadata?.active_discount_expires_at;
    return null != t && l()(Date.now()) <= l()(t);
};
function A(e) {
    switch (e) {
        case I.q:
        case I.lj:
            return { duration: 1, percentage: 30, discountId: e };
        case I.W7:
            return { duration: 1, percentage: 10, discountId: e };
        case I.Qo:
            return { duration: 1, percentage: 50, discountId: e };
        case I.EG:
        case I.TU:
        case I.KG:
            return { duration: 3, percentage: 30, discountId: e };
        case I.HF:
            return { duration: 1, percentage: 40, discountId: e };
        case I.BR:
            return { duration: 1, percentage: 20, discountId: e };
        case I.CW:
            return { duration: 1, percentage: 25, discountId: e };
        case I.UX:
            return { duration: 12, percentage: 20, discountId: e };
        case I.RG:
            return { duration: 12, percentage: 30, discountId: e };
        case I.V2:
            return { duration: 1, percentage: 40, discountId: e };
        case I.xH:
            return { duration: 3, percentage: 30, discountId: e };
        case I.sC:
            return { duration: 1, percentage: 30, discountId: e };
        default:
            return;
    }
}
function _() {
    let e = (0, r.bG)([o.A], () => o.A.getPremiumTypeSubscription());
    return A(e?.metadata?.active_discount_id);
}
function p(e) {
    let t = (0, m.A)(I.q),
        n = (0, m.A)(I.W7),
        s = (0, m.A)(I.Qo),
        l = (0, m.A)(I.EG),
        [r, a] = i.useState(!1),
        [o, c] = i.useState(!1),
        [u, f] = i.useState(null),
        E = t ?? n ?? s ?? l ?? null;
    if (null != E) return { churnUserDiscountOffer: E, isFetchingChurnDiscountOffer: !1 };
    if (e) return { churnUserDiscountOffer: u, isFetchingChurnDiscountOffer: o };
    function g() {
        (a(!0), c(!1));
    }
    return (
        o ||
            r ||
            (c(!0),
            (0, d.qz)()
                .then((e) => {
                    (f(e), g());
                })
                .catch((e) => {
                    g();
                })),
        { churnUserDiscountOffer: u, isFetchingChurnDiscountOffer: o }
    );
}
function N() {
    let e = (0, r.bG)([o.A], () => o.A.getPremiumTypeSubscription()),
        t = h(),
        n = null !== e && e.hasPremiumNitroMonthly,
        i = !!e?.hasActiveTrial;
    return n && !t && !i;
}
function C(e) {
    for (let t of e.invoiceItems) {
        let e = t.discounts.find((e) => e.type === a.iS.SUBSCRIPTION_PLAN);
        if (e?.discount_id != null && I.i_.includes(e.discount_id))
            return { duration: A(e.discount_id)?.duration, percentage: e.percentage_amount, discountId: e.discount_id };
    }
    return null;
}
function O() {
    return (0, u.ds)();
}
