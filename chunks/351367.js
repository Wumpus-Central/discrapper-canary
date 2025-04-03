s.d(t, { m: () => b }), s(47120);
var r = s(192379),
    n = s(442837),
    i = s(594174),
    o = s(78839),
    l = s(431),
    a = s(111361),
    c = s(74538),
    u = s(557017),
    d = s(474936);
let p = (e) => {
        let t = new Date();
        t.setDate(t.getDate() - 10);
        let s = e.endedAt;
        return null != s && s >= t;
    },
    f = (e) => {
        var t;
        let s = null == (t = (0, c.Af)(e)) ? void 0 : t.planId;
        return void 0 === s || c.ZP.getPremiumType(s) !== d.p9.TIER_2;
    };
function b(e) {
    let { location: t } = e,
        [s, c] = r.useState(null),
        b = u.t.useExperiment({ location: t }),
        [g, O] = (0, n.Wu)([o.ZP], () => [o.ZP.getMostRecentPremiumTypeSubscription(), o.ZP.getPreviousPremiumTypeSubscription()]),
        x = (0, n.e7)([l.Z], () => l.Z.hasFetchedOffer()),
        [m, h] = (0, n.Wu)([o.ZP], () => [o.ZP.hasFetchedMostRecentPremiumTypeSubscription(), o.ZP.hasFetchedPreviousPremiumTypeSubscription()]),
        j = (0, n.e7)([i.default], () => i.default.getCurrentUser()),
        y = (null == j ? void 0 : j.hasHadPremium()) && !m && !h,
        C = !(0, a.I5)(j) && !x;
    return (
        r.useEffect(() => {
            if (!1 === b.enabled) return void c(!1);
            if (!y && !C) {
                if (null === g) return void ((0, a.I5)(j, d.p9.TIER_2) ? c(!1) : c(!0));
                if (g.isPaused) c(!0);
                else if (g.isEnded) l.Z.hasAnyUnexpiredOffer() || l.Z.hasAnyUnexpiredDiscountOffer() || p(g) ? c(!1) : c(!0);
                else if (g.isActive) {
                    let e = f(g),
                        t = null == O || !p(O);
                    c(e && t);
                } else c(!1);
            }
        }, [b.enabled, g, O, y, C, j]),
        s
    );
}
