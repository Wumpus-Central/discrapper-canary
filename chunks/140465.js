n.d(t, {
    B4: () => O,
    Nx: () => m,
    UV: () => y,
    WR: () => b,
    lr: () => E,
    t7: () => g
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
    d = n(464900),
    f = n(104494),
    _ = n(639119),
    p = n(474936),
    h = n(981631);
function m() {
    let e = (0, _.N)(),
        t = (0, c._O)(),
        n = (0, f.Ng)(),
        r = g();
    return null != e || t || null != n || r;
}
let g = () => {
        var e;
        let t = (0, a.e7)([l.ZP], () => l.ZP.getPremiumTypeSubscription()),
            n = null == t ? void 0 : null === (e = t.metadata) || void 0 === e ? void 0 : e.active_discount_expires_at;
        return null != n && o()(Date.now()) <= o()(n);
    },
    E = () => {
        var e;
        let t = (0, a.e7)([l.ZP], () => l.ZP.getPremiumTypeSubscription());
        switch (null == t ? void 0 : null === (e = t.metadata) || void 0 === e ? void 0 : e.active_discount_id) {
            case p.dT:
            case p.rB:
                return {
                    duration: 1,
                    percentage: 30
                };
            case p.dB:
            case p.hs:
            case p.RU:
                return {
                    duration: 3,
                    percentage: 30
                };
            case p.ih:
                return {
                    duration: 1,
                    percentage: 40
                };
            case p.gW:
                return {
                    duration: 1,
                    percentage: 20
                };
            case p.Nl:
                return {
                    duration: 1,
                    percentage: 25
                };
            default:
                return;
        }
    },
    v = async () => {
        let e = null;
        try {
            var t;
            let n = await s.tn.post({
                url: h.ANM.CHURN_USER_OFFER,
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
                v()
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
    y = () => {
        let e = (0, a.e7)([l.ZP], () => l.ZP.getPremiumTypeSubscription()),
            t = g(),
            n = null !== e && e.hasPremiumNitroMonthly,
            r = null != e && null != e.trialId;
        return n && !r && !t;
    },
    O = (e) => {
        let { location: t } = e,
            n = (0, a.e7)([l.ZP], () => {
                let e = l.ZP.getPremiumTypeSubscription();
                return (null == e ? void 0 : e.trialId) === p.i_;
            }),
            r = (0, u.W)(),
            i = d.L.useExperiment(
                { location: t },
                {
                    disable: !n,
                    autoTrackExposure: n
                }
            ).enabled;
        return (n && i) || r;
    };
