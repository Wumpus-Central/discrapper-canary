r.d(t, { m: () => x }), r(47120);
var n = r(192379),
    s = r(442837),
    i = r(355467),
    o = r(493773),
    l = r(594174),
    a = r(78839),
    c = r(431),
    u = r(358085),
    d = r(111361),
    p = r(74538),
    f = r(937579),
    b = r(557017),
    g = r(474936),
    O = r(231338);
let h = (e) => {
        let t = new Date();
        return t.setDate(t.getDate() - 10), e.currentPeriodEnd >= t;
    },
    m = (e) => {
        var t;
        let r = null === (t = (0, p.Af)(e)) || void 0 === t ? void 0 : t.planId;
        return void 0 === r || p.ZP.getPremiumType(r) !== g.p9.TIER_2;
    };
function x(e) {
    let { location: t } = e,
        [r, p] = n.useState(null),
        g = b.t.useExperiment({ location: t }),
        x = (0, s.e7)([a.ZP], () => a.ZP.getMostRecentPremiumTypeSubscription()),
        j = (0, s.e7)([c.Z], () => !c.Z.shouldFetchOffer()),
        y = (0, s.e7)([a.ZP], () => a.ZP.hasFetchedMostRecentPremiumTypeSubscription()),
        C = (0, s.e7)([l.default], () => l.default.getCurrentUser()),
        v = (0, d.I5)(C);
    return (
        (0, o.ZP)(() => {
            if (!1 === g.enabled) {
                p(!1);
                return;
            }
            if ((y || (0, i.ou)(), c.Z.shouldFetchOffer())) {
                let e;
                (0, u.isAndroid)() ? (e = O.gg.GOOGLE) : (0, u.isIOS)() && (e = O.gg.APPLE), (0, f.T)('useCollectibleDecoIsEligible', e);
            }
        }),
        n.useEffect(() => {
            if (!1 === g.enabled) {
                p(!1);
                return;
            }
            if (y && j) {
                if (null === x) {
                    v ? p(!1) : p(!0);
                    return;
                }
                x.isPaused ? p(!0) : x.isEnded ? (c.Z.hasAnyUnexpiredOffer() || c.Z.hasAnyUnexpiredDiscountOffer() || h(x) ? p(!1) : p(!0)) : x.isActive ? p(m(x)) : p(!1);
            }
        }, [g.enabled, y, x, j, v]),
        r
    );
}
