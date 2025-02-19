n.d(t, { m: () => b }), n(47120);
var r = n(192379),
    i = n(442837),
    s = n(355467),
    a = n(493773),
    l = n(594174),
    o = n(78839),
    c = n(431),
    d = n(111361),
    u = n(74538),
    m = n(937579),
    g = n(557017),
    p = n(474936);
let h = (e) => {
        let t = new Date();
        return t.setDate(t.getDate() - 10), e.currentPeriodEnd >= t;
    },
    f = (e) => {
        var t;
        let n = null === (t = (0, u.Af)(e)) || void 0 === t ? void 0 : t.planId;
        return void 0 === n || u.ZP.getPremiumType(n) !== p.p9.TIER_2;
    };
function b(e) {
    let { location: t } = e,
        [n, u] = r.useState(null),
        p = g.t.useExperiment({ location: t }),
        b = (0, i.e7)([o.ZP], () => o.ZP.getMostRecentPremiumTypeSubscription()),
        N = (0, i.e7)([c.Z], () => !c.Z.shouldFetchOffer()),
        x = (0, i.e7)([o.ZP], () => o.ZP.hasFetchedMostRecentPremiumTypeSubscription()),
        _ = (0, i.e7)([l.default], () => l.default.getCurrentUser()),
        E = (0, d.I5)(_);
    return (
        (0, a.ZP)(() => {
            x || (0, s.ou)(), c.Z.shouldFetchOffer() && (0, m.T)('useCollectibleDecoIsEligible');
        }),
        r.useEffect(() => {
            if (!1 === p.enabled) {
                u(!1);
                return;
            }
            if (x && N) {
                if (null === b) {
                    E ? u(!1) : u(!0);
                    return;
                }
                b.isPaused ? u(!0) : b.isEnded ? (c.Z.hasAnyUnexpiredOffer() || c.Z.hasAnyUnexpiredDiscountOffer() || h(b) ? u(!1) : u(!0)) : b.isActive ? u(f(b)) : u(!1);
            }
        }, [p.enabled, x, b, N, E]),
        n
    );
}
