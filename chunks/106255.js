n.d(t, {
    C3: () => d,
    Cl: () => u,
    MR: () => c,
    Wb: () => h,
    Xs: () => p,
    kG: () => a
});
var r = n(55563),
    i = n(474936),
    l = n(735825),
    o = n(981631),
    s = n(388032);
function a(e) {
    if (null != e) return Array.from(e).find((e) => e.type === o.qc2.PURCHASE && e.skuId === i.Si.TIER_2 && e.applicationId === i.CL && e.isValid(null, r.Z));
}
function c(e, t) {
    if (null != t) return Array.from(t).find((t) => t.type === o.qc2.PREMIUM_PURCHASE && e.includes(t.skuId) && t.applicationId === i.CL && t.isValid(null, r.Z));
}
function u(e, t) {
    if (null != t) return Array.from(t).find((t) => t.type === o.qc2.FREE_PURCHASE && t.skuId === e && t.applicationId === o.XAJ && t.isValid(null, r.Z));
}
function d(e, t) {
    var n;
    return null != t && (null == (n = t.avatarDecoration) ? void 0 : n.skuId) === e;
}
function h(e) {
    switch (e) {
        case l.EB.PENDING:
            return s.intl.string(s.t.jyYgZ2);
        case l.EB.REDEEMABLE:
            return s.intl.string(s.t['+zx47e']);
        case l.EB.REDEEMED:
        default:
            return null;
    }
}
function p(e) {
    if (e === l.Ft.FREE_AVATAR_DECO_1_MONTH) return l.nW.AVATAR_DECO;
}
