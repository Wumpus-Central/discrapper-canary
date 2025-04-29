n.d(t, { m: () => g }), n(388685);
var i = n(73800),
    r = n(442837),
    s = n(594174),
    l = n(78839),
    a = n(431),
    o = n(111361),
    c = n(74538),
    d = n(557017),
    u = n(474936);
let m = (e) => {
        let t = new Date();
        t.setDate(t.getDate() - 10);
        let n = e.endedAt;
        return null != n && n >= t;
    },
    p = (e) => {
        var t;
        let n = null == (t = (0, c.Af)(e)) ? void 0 : t.planId;
        return void 0 === n || c.ZP.getPremiumType(n) !== u.p9.TIER_2;
    };
function g(e) {
    let { location: t } = e,
        [n, c] = i.useState(null),
        g = d.t.useExperiment({ location: t }),
        [h, f] = (0, r.Wu)([l.ZP], () => [l.ZP.getMostRecentPremiumTypeSubscription(), l.ZP.getPreviousPremiumTypeSubscription()]),
        b = (0, r.e7)([a.Z], () => a.Z.hasFetchedOffer()),
        [_, x] = (0, r.Wu)([l.ZP], () => [l.ZP.hasFetchedMostRecentPremiumTypeSubscription(), l.ZP.hasFetchedPreviousPremiumTypeSubscription()]),
        E = (0, r.e7)([s.default], () => s.default.getCurrentUser()),
        j = (null == E ? void 0 : E.hasHadPremium()) && !_ && !x,
        C = !(0, o.I5)(E) && !b;
    return (
        i.useEffect(() => {
            if (!1 === g.enabled) return void c(!1);
            if (!j && !C) {
                if (null === h) return void ((0, o.I5)(E, u.p9.TIER_2) ? c(!1) : c(!0));
                if (h.isPaused) c(!0);
                else if (h.isEnded) a.Z.hasAnyUnexpiredOffer() || a.Z.hasAnyUnexpiredDiscountOffer() || m(h) ? c(!1) : c(!0);
                else if (h.isActive) {
                    let e = p(h),
                        t = null == f || !m(f);
                    c(e && t);
                } else c(!1);
            }
        }, [g.enabled, h, f, j, C, E]),
        n
    );
}
