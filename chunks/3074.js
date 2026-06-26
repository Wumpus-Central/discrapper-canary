i.d(t, { N: () => u });
var r = i(17928),
    s = i(531260),
    n = i(166403),
    l = i(428262),
    a = i(852218),
    o = i(788868);
let d = new Set([o.k4, o.Dw, o.pX, o.Hp, o.fY, o.bi, o.J7, o.a7, o.Tt]),
    c = new Set([o.gd, o.Uk]);
function u(e) {
    let t = (0, r.bG)([n.A], () => n.A.getPremiumTypeSubscription()),
        i = (0, r.bG)([n.A], () => n.A.hasFetchedSubscriptions()),
        { fractionalState: u, fetched: m } = (0, s.A)();
    if (!i || !m) return null;
    if (null == t || (!t.statusAllowsPerks && u !== o.xc.FP_SUB_PAUSED)) return !1;
    let h = (0, l.EL)(t);
    return (
        null != h &&
        o.hd[h.planId]?.premiumType === o.PremiumTypes.TIER_2 &&
        !(null != t.trialId && (e?.partnerId === a.NC ? !d.has(t.trialId) : c.has(t.trialId)))
    );
}
