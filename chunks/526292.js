var i = n(582128),
    s = n(536637),
    l = n.n(s),
    r = n(855986),
    a = n(155718),
    o = n(166403),
    c = n(89366),
    u = n(881489),
    d = n(739053),
    m = n(432779),
    f = n(423814),
    E = n(77528),
    I = n(682901);
let g = () => {
    let e = (0, r.bG)([o.A], () => o.A.getPremiumTypeSubscription()),
        t = e?.metadata?.active_discount_expires_at;
    return null != t && l()(Date.now()) <= l()(t);
};
function h(e) {
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
        case I.Ki:
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
        case I.sC:
            return { duration: 1, percentage: 30, discountId: e };
        default:
            return;
    }
}
n.d(
    t,
    {},
    {
        Bv: function (e) {
            for (let t of e.invoiceItems) {
                let e = t.discounts.find((e) => e.type === a.iS.SUBSCRIPTION_PLAN);
                if (e?.discount_id != null && I.i_.includes(e.discount_id))
                    return {
                        duration: h(e.discount_id)?.duration,
                        percentage: e.percentage_amount,
                        discountId: e.discount_id,
                    };
            }
            return null;
        },
        ar: function () {
            let e = (0, E.V)(),
                t = (0, c.QQ)(),
                n = (0, f.O)(),
                i = g();
            return null != e || t || null != n || i;
        },
        f9: function () {
            let e = (0, r.bG)([o.A], () => o.A.getPremiumTypeSubscription()),
                t = g(),
                n = null !== e && e.hasPremiumNitroMonthly,
                i = !!e?.hasActiveTrial;
            return n && !t && !i;
        },
        g5: function (e) {
            let t = (0, m.A)(I.q),
                n = (0, m.A)(I.W7),
                s = (0, m.A)(I.Qo),
                l = (0, m.A)(I.EG),
                r = (0, m.A)(I.Ki),
                [a, o] = i.useState(!1),
                [c, u] = i.useState(!1),
                [f, E] = i.useState(null),
                g = t ?? n ?? s ?? l ?? r ?? null;
            if (null != g) return { churnUserDiscountOffer: g, isFetchingChurnDiscountOffer: !1 };
            if (e) return { churnUserDiscountOffer: f, isFetchingChurnDiscountOffer: c };
            function h() {
                (o(!0), u(!1));
            }
            return (
                c ||
                    a ||
                    (u(!0),
                    (0, d.qz)()
                        .then((e) => {
                            (E(e), h());
                        })
                        .catch((e) => {
                            h();
                        })),
                { churnUserDiscountOffer: f, isFetchingChurnDiscountOffer: c }
            );
        },
        k0: function () {
            return (0, u.ds)();
        },
        k5: g,
        nf: function () {
            let e = (0, r.bG)([o.A], () => o.A.getPremiumTypeSubscription());
            return h(e?.metadata?.active_discount_id);
        },
    },
);
