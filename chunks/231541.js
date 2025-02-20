n.d(t, { M: () => f });
var r = n(355467),
    i = n(594174),
    l = n(78839),
    o = n(431),
    a = n(111361),
    s = n(74538),
    c = n(937579),
    u = n(557017),
    d = n(474936);
let p = (e) => {
        let t = new Date();
        return t.setDate(t.getDate() - 10), e.currentPeriodEnd >= t;
    },
    h = (e) => {
        var t;
        let n = null === (t = (0, s.Af)(e)) || void 0 === t ? void 0 : t.planId;
        return void 0 === n || s.ZP.getPremiumType(n) !== d.p9.TIER_2;
    };
async function f(e) {
    let { location: t } = e;
    if (!1 === u.t.getCurrentConfig({ location: t }).enabled) return !1;
    l.ZP.hasFetchedMostRecentPremiumTypeSubscription() || (await (0, r.ou)()), o.Z.shouldFetchOffer() && (await (0, c.T)('useCollectibleDecoIsEligible'));
    let n = l.ZP.getMostRecentPremiumTypeSubscription();
    if (null === n) {
        let e = i.default.getCurrentUser();
        return !(0, a.I5)(e);
    }
    return !!n.isPaused || (n.isEnded ? !(o.Z.hasAnyUnexpiredOffer() || o.Z.hasAnyUnexpiredDiscountOffer() || p(n)) : !!n.isActive && h(n));
}
