n.d(t, {
    C3: () => h,
    Cl: () => p,
    GT: () => E,
    MR: () => _,
    Wb: () => g,
    Xs: () => v,
    YE: () => c,
    _k: () => u,
    kG: () => f,
    km: () => d,
    u7: () => m
}),
    n(580130);
var i = n(55563),
    r = n(513785),
    a = n(474936),
    s = n(735825),
    o = n(981631),
    l = n(388032);
function u(e) {
    return e.type === o.qc2.PURCHASE && e.skuId === a.Si.TIER_2 && e.applicationId === a.CL && e.isValid(null, i.Z);
}
function c(e) {
    return e.type === o.qc2.PREMIUM_PURCHASE && s.uv.has(e.skuId) && e.applicationId === a.CL && e.isValid(null, i.Z);
}
function d(e) {
    return e.type === o.qc2.FREE_PURCHASE && e.skuId === s.qY && e.applicationId === o.XAJ && e.isValid(null, i.Z);
}
function f(e) {
    if (null != e) return Array.from(e).find((e) => u(e));
}
function _(e, t) {
    if (null != t) return Array.from(t).find((t) => t.type === o.qc2.PREMIUM_PURCHASE && e.includes(t.skuId) && t.applicationId === a.CL && t.isValid(null, i.Z));
}
function p(e, t) {
    if (null != t) return Array.from(t).find((t) => t.type === o.qc2.FREE_PURCHASE && t.skuId === e && t.applicationId === o.XAJ && t.isValid(null, i.Z));
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
        case s.EB.PENDING:
            return l.intl.string(l.t.jyYgZ2);
        case s.EB.REDEEMABLE:
            return l.intl.string(l.t['+zx47e']);
        case s.EB.REDEEMED:
        default:
            return null;
    }
}
function E() {
    var e, t;
    return null !== (t = null !== (e = r.Z.getTenureRewardStatusForRewardId(s.Ft.FREE_AVATAR_DECO_1_MONTH)) && void 0 !== e ? e : r.Z.getTenureRewardStatusForRewardId(s.Ft.FREE_GUILD_BOOST_1_MONTH)) && void 0 !== t ? t : r.Z.getTenureRewardStatusForRewardId(s.Ft.FREE_GUILD_BOOST_3_MONTHS);
}
function v(e) {
    return e === s.Ft.FREE_AVATAR_DECO_1_MONTH ? s.nW.AVATAR_DECO : e === s.Ft.FREE_GUILD_BOOST_1_MONTH || e === s.Ft.FREE_GUILD_BOOST_3_MONTHS ? s.nW.SERVER_BOOST : void 0;
}
