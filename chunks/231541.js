n.d(t, { M: () => p });
var r = n(594174),
    i = n(78839),
    l = n(431),
    a = n(111361),
    o = n(74538),
    s = n(557017),
    c = n(474936);
let u = (e) => {
        let t = new Date();
        t.setDate(t.getDate() - 10);
        let n = e.endedAt;
        return null != n && n >= t;
    },
    d = (e) => {
        var t;
        let n = null == (t = (0, o.Af)(e)) ? void 0 : t.planId;
        return void 0 === n || o.ZP.getPremiumType(n) !== c.p9.TIER_2;
    };
function p(e) {
    let { location: t } = e;
    if (!1 === s.t.getCurrentConfig({ location: t }).enabled) return !1;
    let n = i.ZP.getMostRecentPremiumTypeSubscription(),
        o = i.ZP.getPreviousPremiumTypeSubscription();
    if (null === n) {
        let e = r.default.getCurrentUser();
        return !(0, a.I5)(e);
    }
    if (n.isPaused) return !0;
    if (n.isEnded)
        if (!(l.Z.hasAnyUnexpiredOffer() || l.Z.hasAnyUnexpiredDiscountOffer()) && !u(n)) return !0;
        else return !1;
    if (!n.isActive) return !1;
    {
        let e = d(n),
            t = null == o || !u(o);
        return e && t;
    }
}
