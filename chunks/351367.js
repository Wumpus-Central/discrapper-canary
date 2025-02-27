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
        b = u.t.useExperiment({ location: t }),
        g = (0, s.e7)([o.ZP], () => o.ZP.getMostRecentPremiumTypeSubscription()),
        O = (0, s.e7)([l.Z], () => l.Z.hasFetchedOffer()),
        m = (0, s.e7)([o.ZP], () => o.ZP.hasFetchedMostRecentPremiumTypeSubscription()),
        h = (0, s.e7)([i.default], () => i.default.getCurrentUser()),
        x = (null == h ? void 0 : h.hadPremiumSubscription()) && !m,
        j = !(0, a.I5)(h) && !O;
    return (
        n.useEffect(() => {
            if (!1 === b.enabled) {
                c(!1);
                return;
            }
            if (!x && !j) {
                if (null === g) {
                    (0, a.I5)(h, d.p9.TIER_2) ? c(!1) : c(!0);
                    return;
                }
                g.isPaused ? c(!0) : g.isEnded ? (l.Z.hasAnyUnexpiredOffer() || l.Z.hasAnyUnexpiredDiscountOffer() || p(g) ? c(!1) : c(!0)) : g.isActive ? c(f(g)) : c(!1);
            }
        }, [b.enabled, g, x, j, h]),
        r
    );
}
