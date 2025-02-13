n.d(t, {
    B4: () => T,
    Nx: () => m,
    UV: () => I,
    WR: () => y,
    lr: () => E,
    t7: () => g
}),
    n(47120);
var i = n(192379),
    r = n(913527),
    a = n.n(r),
    s = n(442837),
    o = n(544891),
    l = n(78839),
    u = n(775412),
    c = n(695349),
    d = n(464900),
    f = n(104494),
    _ = n(639119),
    p = n(474936),
    h = n(981631);
function m() {
    let e = (0, _.N)(),
        t = (0, u._O)(),
        n = (0, f.Ng)(),
        i = g();
    return null != e || t || null != n || i;
}
let g = () => {
        var e;
        let t = (0, s.e7)([l.ZP], () => l.ZP.getPremiumTypeSubscription()),
            n = null == t ? void 0 : null === (e = t.metadata) || void 0 === e ? void 0 : e.active_discount_expires_at;
        return null != n && a()(Date.now()) <= a()(n);
    },
    E = () => {
        var e;
        let t = (0, s.e7)([l.ZP], () => l.ZP.getPremiumTypeSubscription());
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
            case p.n5:
                return {
                    duration: 1,
                    percentage: 40
                };
            default:
                return;
        }
    },
    v = async () => {
        let e = null;
        try {
            var t;
            let n = await o.tn.post({
                url: h.ANM.CHURN_USER_OFFER,
                rejectWithError: !0
            });
            e = null !== (t = n.body.offer) && void 0 !== t ? t : null;
        } catch (e) {}
        return e;
    },
    y = (e) => {
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
                v()
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
    I = () => {
        let e = (0, s.e7)([l.ZP], () => l.ZP.getPremiumTypeSubscription()),
            t = g(),
            n = null !== e && e.hasPremiumNitroMonthly,
            i = null != e && null != e.trialId;
        return n && !i && !t;
    },
    T = (e) => {
        let { location: t } = e,
            n = (0, s.e7)([l.ZP], () => {
                let e = l.ZP.getPremiumTypeSubscription();
                return (null == e ? void 0 : e.trialId) === p.i_;
            }),
            i = (0, c.W)(),
            r = d.L.useExperiment(
                { location: t },
                {
                    disable: !n,
                    autoTrackExposure: n
                }
            ).enabled;
        return (n && r) || i;
    };
