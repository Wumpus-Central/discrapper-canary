r.d(n, {
    B4: function () {
        return y;
    },
    Nx: function () {
        return g;
    },
    UV: function () {
        return b;
    },
    WR: function () {
        return T;
    },
    lr: function () {
        return v;
    },
    t7: function () {
        return E;
    }
});
var i = r(47120);
var a = r(192379),
    s = r(913527),
    o = r.n(s),
    l = r(442837),
    u = r(544891),
    c = r(78839),
    d = r(775412),
    f = r(464900),
    _ = r(104494),
    h = r(639119),
    p = r(474936),
    m = r(981631);
function g() {
    let e = (0, h.N)(),
        n = (0, d._O)(),
        r = (0, _.Ng)(),
        i = E();
    return null != e || n || null != r || i;
}
let E = () => {
        var e;
        let n = (0, l.e7)([c.ZP], () => c.ZP.getPremiumTypeSubscription()),
            r = null == n ? void 0 : null === (e = n.metadata) || void 0 === e ? void 0 : e.active_discount_expires_at;
        return null != r && o()(Date.now()) <= o()(r);
    },
    v = () => {
        var e;
        let n = (0, l.e7)([c.ZP], () => c.ZP.getPremiumTypeSubscription());
        switch (null == n ? void 0 : null === (e = n.metadata) || void 0 === e ? void 0 : e.active_discount_id) {
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
    I = async () => {
        let e = null;
        try {
            var n;
            let r = await u.tn.post({
                url: m.ANM.CHURN_USER_OFFER,
                rejectWithError: !0
            });
            e = null !== (n = r.body.offer) && void 0 !== n ? n : null;
        } catch (e) {}
        return e;
    },
    T = (e) => {
        let [n, r] = a.useState(!1),
            [i, s] = a.useState(!1),
            [o, l] = a.useState(null);
        if (e)
            return {
                churnUserDiscountOffer: o,
                isFetchingChurnDiscountOffer: i
            };
        let u = () => {
            r(!0), s(!1);
        };
        return (
            !i &&
                !n &&
                (s(!0),
                I()
                    .then((e) => {
                        l(e), u();
                    })
                    .catch((e) => {
                        u();
                    })),
            {
                churnUserDiscountOffer: o,
                isFetchingChurnDiscountOffer: i
            }
        );
    },
    b = () => {
        let e = (0, l.e7)([c.ZP], () => c.ZP.getPremiumTypeSubscription()),
            n = E(),
            r = null !== e && e.hasPremiumNitroMonthly,
            i = null != e && null != e.trialId;
        return r && !i && !n;
    },
    y = (e) => {
        let { location: n } = e,
            r = (0, l.e7)([c.ZP], () => {
                let e = c.ZP.getPremiumTypeSubscription();
                return (null == e ? void 0 : e.trialId) === p.i_;
            }),
            i = f.L.useExperiment(
                { location: n },
                {
                    disable: !r,
                    autoTrackExposure: r
                }
            ).enabled;
        return r && i;
    };
