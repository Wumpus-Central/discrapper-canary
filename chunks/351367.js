r.d(t, { m: () => p }), r(388685);
var n = r(192379),
    i = r(442837),
    s = r(594174),
    o = r(78839),
    l = r(431),
    a = r(111361),
    c = r(74538),
    h = r(557017),
    v = r(474936);
let u = (e) => {
        let t = new Date();
        t.setDate(t.getDate() - 10);
        let r = e.endedAt;
        return null != r && r >= t;
    },
    f = (e) => {
        var t;
        let r = null == (t = (0, c.Af)(e)) ? void 0 : t.planId;
        return void 0 === r || c.ZP.getPremiumType(r) !== v.p9.TIER_2;
    };
function p(e) {
    let { location: t } = e,
        [r, c] = n.useState(null),
        p = h.t.useExperiment({ location: t }),
        [d, b] = (0, i.Wu)([o.ZP], () => [o.ZP.getMostRecentPremiumTypeSubscription(), o.ZP.getPreviousPremiumTypeSubscription()]),
        Z = (0, i.e7)([l.Z], () => l.Z.hasFetchedOffer()),
        [M, g] = (0, i.Wu)([o.ZP], () => [o.ZP.hasFetchedMostRecentPremiumTypeSubscription(), o.ZP.hasFetchedPreviousPremiumTypeSubscription()]),
        j = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
        O = (null == j ? void 0 : j.hasHadPremium()) && !M && !g,
        y = !(0, a.I5)(j) && !Z;
    return (
        n.useEffect(() => {
            if (!1 === p.enabled) return void c(!1);
            if (!O && !y) {
                if (null === d) return void ((0, a.I5)(j, v.p9.TIER_2) ? c(!1) : c(!0));
                if (d.isPaused) c(!0);
                else if (d.isEnded) l.Z.hasAnyUnexpiredOffer() || l.Z.hasAnyUnexpiredDiscountOffer() || u(d) ? c(!1) : c(!0);
                else if (d.isActive) {
                    let e = f(d),
                        t = null == b || !u(b);
                    c(e && t);
                } else c(!1);
            }
        }, [p.enabled, d, b, O, y, j]),
        r
    );
}
