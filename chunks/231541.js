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
        t.setDate(t.getDate() - 10);
        let n = e.endedAt;
        return null != n && n >= t;
    },
    d = (e) => {
        var t;
        let n = null === (t = (0, a.Af)(e)) || void 0 === t ? void 0 : t.planId;
        return void 0 === n || a.ZP.getPremiumType(n) !== c.p9.TIER_2;
    };
function p(e) {
    let { location: t } = e;
    if (!1 === s.t.getCurrentConfig({ location: t }).enabled) return !1;
    let n = i.ZP.getMostRecentPremiumTypeSubscription(),
        a = i.ZP.getPreviousPremiumTypeSubscription();
    if (null === n) {
        let e = r.default.getCurrentUser();
        return !(0, o.I5)(e);
    }
    if (n.isPaused) return !0;
    if (n.isEnded) return !(l.Z.hasAnyUnexpiredOffer() || l.Z.hasAnyUnexpiredDiscountOffer() || u(n));
    if (!n.isActive) return !1;
    {
        let e = d(n),
            t = null == a || !u(a);
        return e && t;
    }
}
