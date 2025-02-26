r.d(t, { m: () => b }), r(47120);
var n = r(192379),
    s = r(442837),
    i = r(594174),
    o = r(78839),
    l = r(431),
    a = r(111361),
    c = r(74538),
    u = r(557017),
    d = r(474936);
let p = (e) => {
        let t = new Date();
        return t.setDate(t.getDate() - 10), e.currentPeriodEnd >= t;
    },
    f = (e) => {
        var t;
        let r = null === (t = (0, c.Af)(e)) || void 0 === t ? void 0 : t.planId;
        return void 0 === r || c.ZP.getPremiumType(r) !== d.p9.TIER_2;
    };
function b(e) {
    let { location: t } = e,
        [r, c] = n.useState(null),
        d = u.t.useExperiment({ location: t }),
        b = (0, s.e7)([o.ZP], () => o.ZP.getMostRecentPremiumTypeSubscription()),
        g = (0, s.e7)([l.Z], () => !l.Z.shouldFetchOffer()),
        O = (0, s.e7)([o.ZP], () => o.ZP.hasFetchedMostRecentPremiumTypeSubscription()),
        m = (0, s.e7)([i.default], () => i.default.getCurrentUser()),
        h = (0, a.I5)(m);
    return (
        n.useEffect(() => {
            if (!1 === d.enabled) {
                c(!1);
                return;
            }
            if (O && g) {
                if (null === b) {
                    h ? c(!1) : c(!0);
                    return;
                }
                b.isPaused ? c(!0) : b.isEnded ? (l.Z.hasAnyUnexpiredOffer() || l.Z.hasAnyUnexpiredDiscountOffer() || p(b) ? c(!1) : c(!0)) : b.isActive ? c(f(b)) : c(!1);
            }
        }, [d.enabled, O, b, g, h]),
        r
    );
}
