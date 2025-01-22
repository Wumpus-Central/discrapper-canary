r.d(n, {
    B4: function () {
        return T;
    },
    Nx: function () {
        return g;
    },
    UV: function () {
        return I;
    },
    WR: function () {
        return b;
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
    o = r(913527),
    s = r.n(o),
    l = r(442837),
    u = r(544891),
    c = r(78839),
    d = r(775412),
    f = r(464900),
    p = r(104494),
    h = r(639119),
    _ = r(474936),
    m = r(981631);
function g() {
    let e = (0, h.N)(),
        n = (0, d._O)(),
        r = (0, p.Ng)(),
        i = E();
    return null != e || n || null != r || i;
}
let E = () => {
        var e;
        let n = (0, l.e7)([c.ZP], () => c.ZP.getPremiumTypeSubscription()),
            r = null == n ? void 0 : null === (e = n.metadata) || void 0 === e ? void 0 : e.active_discount_expires_at;
        return null != r && s()(Date.now()) <= s()(r);
    },
    v = () => {
        var e;
        let n = (0, l.e7)([c.ZP], () => c.ZP.getPremiumTypeSubscription());
        switch (null == n ? void 0 : null === (e = n.metadata) || void 0 === e ? void 0 : e.active_discount_id) {
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
    y = async () => {
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
    b = (e) => {
        let [n, r] = a.useState(!1),
            [i, o] = a.useState(!1),
            [s, l] = a.useState(null);
        if (e)
            return {
                churnUserDiscountOffer: s,
                isFetchingChurnDiscountOffer: i
            };
        let u = () => {
            r(!0), o(!1);
        };
        return (
            !i &&
                !n &&
                (o(!0),
                y()
                    .then((e) => {
                        l(e), u();
                    })
                    .catch((e) => {
                        u();
                    })),
            {
                churnUserDiscountOffer: s,
                isFetchingChurnDiscountOffer: i
            }
        );
    },
    I = () => {
        let e = (0, l.e7)([c.ZP], () => c.ZP.getPremiumTypeSubscription()),
            n = E(),
            r = null !== e && e.hasPremiumNitroMonthly,
            i = null != e && null != e.trialId;
        return r && !i && !n;
    },
    T = (e) => {
        let { location: n } = e,
            r = (0, l.e7)([c.ZP], () => {
                let e = c.ZP.getPremiumTypeSubscription();
                return (null == e ? void 0 : e.trialId) === _.i_;
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
