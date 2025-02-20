n.d(t, {
    C3: () => h,
    Cl: () => _,
    GT: () => E,
    MR: () => p,
    Wb: () => g,
    Xs: () => v,
    YE: () => u,
    _k: () => c,
    kG: () => f,
    km: () => d,
    u7: () => m
}),
    n(580130);
var r = n(55563),
    i = n(513785),
    o = n(474936),
    a = n(735825),
    s = n(981631),
    l = n(388032);
function c(e) {
    return e.type === s.qc2.PURCHASE && e.skuId === o.Si.TIER_2 && e.applicationId === o.CL && e.isValid(null, r.Z);
}
function u(e) {
    return e.type === s.qc2.PREMIUM_PURCHASE && a.uv.has(e.skuId) && e.applicationId === o.CL && e.isValid(null, r.Z);
}
function d(e) {
    return e.type === s.qc2.FREE_PURCHASE && e.skuId === a.qY && e.applicationId === s.XAJ && e.isValid(null, r.Z);
}
function f(e) {
    if (null != e) return Array.from(e).find((e) => c(e));
}
function p(e, t) {
    if (null != t) return Array.from(t).find((t) => t.type === s.qc2.PREMIUM_PURCHASE && e.includes(t.skuId) && t.applicationId === o.CL && t.isValid(null, r.Z));
}
function _(e, t) {
    if (null != t) return Array.from(t).find((t) => t.type === s.qc2.FREE_PURCHASE && t.skuId === e && t.applicationId === s.XAJ && t.isValid(null, r.Z));
}
function h(e, t) {
    var n;
    return null != t && (null === (n = t.avatarDecoration) || void 0 === n ? void 0 : n.skuId) === e;
}
function m(e) {
    return null != e.redeemable_at && null != e.next_tenure_reward_id;
}
function g(e) {
    switch (e) {
        case a.EB.PENDING:
            return l.NW.string(l.t.jyYgZ2);
        case a.EB.REDEEMABLE:
            return l.NW.string(l.t['+zx47e']);
        case a.EB.REDEEMED:
        default:
            return null;
    }
}
function E() {
    var e, t;
    return null !== (t = null !== (e = i.Z.getTenureRewardStatusForRewardId(a.Ft.FREE_AVATAR_DECO_1_MONTH)) && void 0 !== e ? e : i.Z.getTenureRewardStatusForRewardId(a.Ft.FREE_GUILD_BOOST_1_MONTH)) && void 0 !== t ? t : i.Z.getTenureRewardStatusForRewardId(a.Ft.FREE_GUILD_BOOST_3_MONTHS);
}
function v(e) {
    return e === a.Ft.FREE_AVATAR_DECO_1_MONTH ? a.nW.AVATAR_DECO : e === a.Ft.FREE_GUILD_BOOST_1_MONTH || e === a.Ft.FREE_GUILD_BOOST_3_MONTHS ? a.nW.SERVER_BOOST : void 0;
}
