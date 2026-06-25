"use strict";
n.d(t, { ij: () => l, wA: () => u });
var i = n(428262),
    r = n(852218),
    s = n(788868);
let a = new Set([s.k4, s.Dw, s.pX, s.Hp, s.fY, s.bi, s.J7, s.a7, s.Tt]),
    o = new Set([s.gd, s.Uk]);
function l(e, t, n) {
    if (null == e || (!e.statusAllowsPerks && t !== s.xc.FP_SUB_PAUSED)) return !1;
    let l = (0, i.EL)(e);
    return (
        null != l &&
        s.hd[l.planId]?.premiumType === s.PremiumTypes.TIER_2 &&
        !(null != e.trialId && (n?.partnerId === r.NC ? !a.has(e.trialId) : o.has(e.trialId)))
    );
}
function u(e, t, n) {
    return !!l(e, t, n) && (e?.trialId == null || !!n.hasFlag(s.$3.IS_OUTBOUND_REDEEMABLE_BY_TRIAL_USERS));
}
