n.d(t, {
    Bv: () => y,
    ar: () => h,
    f9: () => b,
    g5: () => E,
    k0: () => O,
    k5: () => m,
    nf: () => g,
}),
    n(896048);
var r = n(64700),
    i = n(989349),
    a = n.n(i),
    s = n(311907),
    o = n(155718),
    l = n(166403),
    c = n(89366),
    u = n(637073),
    d = n(694080),
    f = n(422936),
    p = n(234419),
    _ = n(788868);

function h() {
    let e = (0, p.V)(),
        t = (0, c.QQ)(),
        n = (0, f.O)(),
        r = m();
    return null != e || t || null != n || r;
}
let m = () => {
        var e;
        let t = (0, s.bG)([l.A], () => l.A.getPremiumTypeSubscription()),
            n = null == t || null == (e = t.metadata) ? void 0 : e.active_discount_expires_at;
        return null != n && a()(Date.now()) <= a()(n);
    },
    g = () => {
        var e;
        let t = (0, s.bG)([l.A], () => l.A.getPremiumTypeSubscription()),
            n = null == t || null == (e = t.metadata) ? void 0 : e.active_discount_id;
        switch (n) {
            case _.q:
            case _.lj:
                return {
                    duration: 1,
                    percentage: 30,
                    discountId: n,
                };
            case _.EG:
            case _.TU:
            case _.KG:
                return {
                    duration: 3,
                    percentage: 30,
                    discountId: n,
                };
            case _.HF:
                return {
                    duration: 1,
                    percentage: 40,
                    discountId: n,
                };
            case _.BR:
                return {
                    duration: 1,
                    percentage: 20,
                    discountId: n,
                };
            case _.CW:
                return {
                    duration: 1,
                    percentage: 25,
                    discountId: n,
                };
            default:
                return;
        }
    },
    E = (e) => {
        let [t, n] = r.useState(!1),
            [i, a] = r.useState(!1),
            [s, o] = r.useState(null);
        if (e)
            return {
                churnUserDiscountOffer: s,
                isFetchingChurnDiscountOffer: i,
            };
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
            {
                churnUserDiscountOffer: s,
                isFetchingChurnDiscountOffer: i,
            }
        );
    },
    b = () => {
        let e = (0, s.bG)([l.A], () => l.A.getPremiumTypeSubscription()),
            t = m(),
            n = null !== e && e.hasPremiumNitroMonthly,
            r = !!(null == e ? void 0 : e.hasActiveTrial);
        return n && !r && !t;
    },
    y = (e) => {
        for (let t of e.invoiceItems) {
            let e = t.discounts.find((e) => e.type === o.iS.SUBSCRIPTION_PLAN);
            if (null != e)
                switch (e.discount_id) {
                    case _.q:
                        return {
                            duration: 1,
                            percentage: e.percentage_amount,
                            discountId: e.discount_id,
                        };
                    case _.EG:
                        return {
                            duration: 3,
                            percentage: e.percentage_amount,
                            discountId: e.discount_id,
                        };
                }
        }
        return null;
    },
    O = () => (0, u.d)();
