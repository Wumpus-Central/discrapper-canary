r.d(t, { m: () => m }), r(47120);
var n = r(192379),
    s = r(442837),
    i = r(355467),
    o = r(493773),
    l = r(594174),
    a = r(78839),
    c = r(431),
    u = r(111361),
    d = r(74538),
    p = r(937579),
    f = r(557017),
    b = r(474936);
let g = (e) => {
        let t = new Date();
        return t.setDate(t.getDate() - 10), e.currentPeriodEnd >= t;
    },
    O = (e) => {
        var t;
        let r = null === (t = (0, d.Af)(e)) || void 0 === t ? void 0 : t.planId;
        return void 0 === r || d.ZP.getPremiumType(r) !== b.p9.TIER_2;
    };
function m(e) {
    let { location: t } = e,
        [r, d] = n.useState(null),
        b = f.t.useExperiment({ location: t }),
        m = (0, s.e7)([a.ZP], () => a.ZP.getMostRecentPremiumTypeSubscription()),
        h = (0, s.e7)([c.Z], () => !c.Z.shouldFetchOffer()),
        x = (0, s.e7)([a.ZP], () => a.ZP.hasFetchedMostRecentPremiumTypeSubscription()),
        j = (0, s.e7)([l.default], () => l.default.getCurrentUser()),
        y = (0, u.I5)(j);
    return (
        (0, o.ZP)(() => {
            if (!1 === b.enabled) {
                d(!1);
                return;
            }
            x || (0, i.ou)(), c.Z.shouldFetchOffer() && (0, p.T)('useCollectibleDecoIsEligible');
        }),
        n.useEffect(() => {
            if (!1 === b.enabled) {
                d(!1);
                return;
            }
            if (x && h) {
                if (null === m) {
                    y ? d(!1) : d(!0);
                    return;
                }
                m.isPaused ? d(!0) : m.isEnded ? (c.Z.hasAnyUnexpiredOffer() || c.Z.hasAnyUnexpiredDiscountOffer() || g(m) ? d(!1) : d(!0)) : m.isActive ? d(O(m)) : d(!1);
            }
        }, [b.enabled, x, m, h, y]),
        r
    );
}
