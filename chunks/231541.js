n.d(t, { M: () => p });
var r = n(594174),
    i = n(78839),
    l = n(431),
    o = n(111361),
    a = n(74538),
    s = n(557017),
    c = n(474936);
let u = (e) => {
        let t = new Date();
        return t.setDate(t.getDate() - 10), e.currentPeriodEnd >= t;
    },
    d = (e) => {
        var t;
        let n = null === (t = (0, a.Af)(e)) || void 0 === t ? void 0 : t.planId;
        return void 0 === n || a.ZP.getPremiumType(n) !== c.p9.TIER_2;
    };
function p(e) {
    let { location: t } = e;
    if (!1 === s.t.getCurrentConfig({ location: t }).enabled) return !1;
    let n = i.ZP.getMostRecentPremiumTypeSubscription();
    if (null === n) {
        let e = r.default.getCurrentUser();
        return !(0, o.I5)(e);
    }
    return !!n.isPaused || (n.isEnded ? !(l.Z.hasAnyUnexpiredOffer() || l.Z.hasAnyUnexpiredDiscountOffer() || u(n)) : !!n.isActive && d(n));
}
