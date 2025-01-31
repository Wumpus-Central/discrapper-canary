n.d(t, {
    B4: () => I,
    Nx: () => h,
    UV: () => y,
    WR: () => v,
    lr: () => g,
    t7: () => m
}),
    n(47120);
var i = n(192379),
    r = n(913527),
    a = n.n(r),
    s = n(442837),
    o = n(544891),
    l = n(78839),
    u = n(775412),
    c = n(464900),
    d = n(104494),
    f = n(639119),
    _ = n(474936),
    p = n(981631);
function h() {
    let e = (0, f.N)(),
        t = (0, u._O)(),
        n = (0, d.Ng)(),
        i = m();
    return null != e || t || null != n || i;
}
let m = () => {
        var e;
        let t = (0, s.e7)([l.ZP], () => l.ZP.getPremiumTypeSubscription()),
            n = null == t ? void 0 : null === (e = t.metadata) || void 0 === e ? void 0 : e.active_discount_expires_at;
        return null != n && a()(Date.now()) <= a()(n);
    },
    g = () => {
        var e;
        let t = (0, s.e7)([l.ZP], () => l.ZP.getPremiumTypeSubscription());
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
            case _.n5:
                return {
                    duration: 1,
                    percentage: 40
                };
            default:
                return;
        }
    },
    E = async () => {
        let e = null;
        try {
            var t;
            let n = await o.tn.post({
                url: p.ANM.CHURN_USER_OFFER,
                rejectWithError: !0
            });
            e = null !== (t = n.body.offer) && void 0 !== t ? t : null;
        } catch (e) {}
        return e;
    },
    v = (e) => {
        let [t, n] = i.useState(!1),
            [r, a] = i.useState(!1),
            [s, o] = i.useState(null);
        if (e)
            return {
                churnUserDiscountOffer: s,
                isFetchingChurnDiscountOffer: r
            };
        let l = () => {
            n(!0), a(!1);
        };
        return (
            r ||
                t ||
                (a(!0),
                E()
                    .then((e) => {
                        o(e), l();
                    })
                    .catch((e) => {
                        l();
                    })),
            {
                churnUserDiscountOffer: s,
                isFetchingChurnDiscountOffer: r
            }
        );
    },
    y = () => {
        let e = (0, s.e7)([l.ZP], () => l.ZP.getPremiumTypeSubscription()),
            t = m(),
            n = null !== e && e.hasPremiumNitroMonthly,
            i = null != e && null != e.trialId;
        return n && !i && !t;
    },
    I = (e) => {
        let { location: t } = e,
            n = (0, s.e7)([l.ZP], () => {
                let e = l.ZP.getPremiumTypeSubscription();
                return (null == e ? void 0 : e.trialId) === _.i_;
            }),
            i = c.L.useExperiment(
                { location: t },
                {
                    disable: !n,
                    autoTrackExposure: n
                }
            ).enabled;
        return n && i;
    };
