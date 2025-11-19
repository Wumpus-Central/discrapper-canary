n.d(t, {
    B4: () => O,
    Nx: () => h,
    UV: () => b,
    WR: () => E,
    Yi: () => y,
    lr: () => g,
    t7: () => m,
}),
    n(388685);
var r = n(473749),
    i = n(913527),
    a = n.n(i),
    o = n(442837),
    s = n(911969),
    l = n(78839),
    c = n(775412),
    u = n(695349),
    d = n(937579),
    f = n(622909),
    _ = n(639119),
    p = n(474936);
function h() {
    let e = (0, _.N)(),
        t = (0, c._O)(),
        n = (0, f.N)(),
        r = m();
    return null != e || t || null != n || r;
}
let m = () => {
        var e;
        let t = (0, o.e7)([l.Z], () => l.Z.getPremiumTypeSubscription()),
            n = null == t || null == (e = t.metadata) ? void 0 : e.active_discount_expires_at;
        return null != n && a()(Date.now()) <= a()(n);
    },
    g = () => {
        var e;
        let t = (0, o.e7)([l.Z], () => l.Z.getPremiumTypeSubscription()),
            n = null == t || null == (e = t.metadata) ? void 0 : e.active_discount_id;
        switch (n) {
            case p.dT:
            case p.rB:
                return {
                    duration: 1,
                    percentage: 30,
                    discountId: n,
                };
            case p.dB:
            case p.hs:
            case p.RU:
                return {
                    duration: 3,
                    percentage: 30,
                    discountId: n,
                };
            case p.ih:
                return {
                    duration: 1,
                    percentage: 40,
                    discountId: n,
                };
            case p.gW:
                return {
                    duration: 1,
                    percentage: 20,
                    discountId: n,
                };
            case p.Nl:
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
            [o, s] = r.useState(null);
        if (e)
            return {
                churnUserDiscountOffer: o,
                isFetchingChurnDiscountOffer: i,
            };
        let l = () => {
            n(!0), a(!1);
        };
        return (
            i ||
                t ||
                (a(!0),
                (0, d.ev)()
                    .then((e) => {
                        s(e), l();
                    })
                    .catch((e) => {
                        l();
                    })),
            {
                churnUserDiscountOffer: o,
                isFetchingChurnDiscountOffer: i,
            }
        );
    },
    b = () => {
        let e = (0, o.e7)([l.Z], () => l.Z.getPremiumTypeSubscription()),
            t = m(),
            n = null !== e && e.hasPremiumNitroMonthly,
            r = !!(null == e ? void 0 : e.hasActiveTrial);
        return n && !r && !t;
    },
    y = (e) => {
        for (let t of e.invoiceItems) {
            let e = t.discounts.find((e) => e.type === s.eW.SUBSCRIPTION_PLAN);
            if (null != e)
                switch (e.discount_id) {
                    case p.dT:
                        return {
                            duration: 1,
                            percentage: e.percentage_amount,
                            discountId: e.discount_id,
                        };
                    case p.dB:
                        return {
                            duration: 3,
                            percentage: e.percentage_amount,
                            discountId: e.discount_id,
                        };
                }
        }
        return null;
    },
    O = () => (0, u.W)();
