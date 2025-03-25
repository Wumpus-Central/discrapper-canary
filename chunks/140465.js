n.d(t, {
    B4: () => y,
    Nx: () => h,
    UV: () => v,
    WR: () => b,
    lr: () => g,
    t7: () => m
}),
    n(47120);
var r = n(192379),
    i = n(913527),
    o = n.n(i),
    a = n(442837),
    s = n(544891),
    l = n(78839),
    c = n(775412),
    u = n(695349),
    d = n(104494),
    f = n(639119),
    _ = n(474936),
    p = n(981631);
function h() {
    let e = (0, f.N)(),
        t = (0, c._O)(),
        n = (0, d.Ng)(),
        r = m();
    return null != e || t || null != n || r;
}
let m = () => {
        var e;
        let t = (0, a.e7)([l.ZP], () => l.ZP.getPremiumTypeSubscription()),
            n = null == t ? void 0 : null === (e = t.metadata) || void 0 === e ? void 0 : e.active_discount_expires_at;
        return null != n && o()(Date.now()) <= o()(n);
    },
    g = () => {
        var e;
        let t = (0, a.e7)([l.ZP], () => l.ZP.getPremiumTypeSubscription());
        switch (null == t ? void 0 : null === (e = t.metadata) || void 0 === e ? void 0 : e.active_discount_id) {
            case _.dT:
            case _.rB:
                return {
                    duration: 1,
                    percentage: 30
                };
            case _.dB:
            case _.hs:
            case _.RU:
                return {
                    duration: 3,
                    percentage: 30
                };
            case _.ih:
                return {
                    duration: 1,
                    percentage: 40
                };
            case _.gW:
                return {
                    duration: 1,
                    percentage: 20
                };
            case _.Nl:
                return {
                    duration: 1,
                    percentage: 25
                };
            default:
                return;
        }
    },
    E = async () => {
        let e = null;
        try {
            var t;
            let n = await s.tn.post({
                url: p.ANM.CHURN_USER_OFFER,
                rejectWithError: !0
            });
            e = null !== (t = n.body.offer) && void 0 !== t ? t : null;
        } catch (e) {}
        return e;
    },
    b = (e) => {
        let [t, n] = r.useState(!1),
            [i, o] = r.useState(!1),
            [a, s] = r.useState(null);
        if (e)
            return {
                churnUserDiscountOffer: a,
                isFetchingChurnDiscountOffer: i
            };
        let l = () => {
            n(!0), o(!1);
        };
        return (
            i ||
                t ||
                (o(!0),
                E()
                    .then((e) => {
                        s(e), l();
                    })
                    .catch((e) => {
                        l();
                    })),
            {
                churnUserDiscountOffer: a,
                isFetchingChurnDiscountOffer: i
            }
        );
    },
    v = () => {
        let e = (0, a.e7)([l.ZP], () => l.ZP.getPremiumTypeSubscription()),
            t = m(),
            n = null !== e && e.hasPremiumNitroMonthly,
            r = null != e && null != e.trialId;
        return n && !r && !t;
    },
    y = () => (0, u.W)();
