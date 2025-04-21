n.d(t, { m: () => g }), n(388685);
var r = n(192379),
    i = n(442837),
    s = n(594174),
    o = n(78839),
    l = n(431),
    a = n(111361),
    c = n(74538),
    u = n(557017),
    d = n(474936);
let f = (e) => {
        let t = new Date();
        t.setDate(t.getDate() - 10);
        let n = e.endedAt;
        return null != n && n >= t;
    },
    p = (e) => {
        var t;
        let n = null == (t = (0, c.Af)(e)) ? void 0 : t.planId;
        return void 0 === n || c.ZP.getPremiumType(n) !== d.p9.TIER_2;
    };
function g(e) {
    let { location: t } = e,
        [n, c] = r.useState(null),
        g = u.t.useExperiment({ location: t }),
        [b, m] = (0, i.Wu)([o.ZP], () => [o.ZP.getMostRecentPremiumTypeSubscription(), o.ZP.getPreviousPremiumTypeSubscription()]),
        h = (0, i.e7)([l.Z], () => l.Z.hasFetchedOffer()),
        [v, _] = (0, i.Wu)([o.ZP], () => [o.ZP.hasFetchedMostRecentPremiumTypeSubscription(), o.ZP.hasFetchedPreviousPremiumTypeSubscription()]),
        O = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
        y = (null == O ? void 0 : O.hasHadPremium()) && !v && !_,
        j = !(0, a.I5)(O) && !h;
    return (
        r.useEffect(() => {
            if (!1 === g.enabled) return void c(!1);
            if (!y && !j) {
                if (null === b) return void ((0, a.I5)(O, d.p9.TIER_2) ? c(!1) : c(!0));
                if (b.isPaused) c(!0);
                else if (b.isEnded) l.Z.hasAnyUnexpiredOffer() || l.Z.hasAnyUnexpiredDiscountOffer() || f(b) ? c(!1) : c(!0);
                else if (b.isActive) {
                    let e = p(b),
                        t = null == m || !f(m);
                    c(e && t);
                } else c(!1);
            }
        }, [g.enabled, b, m, y, j, O]),
        n
    );
}
