r.d(t, { Dj: () => o, Jl: () => d, MX: () => c, PY: () => s, aJ: () => f, lG: () => p });
var e = r(288106),
    u = r(604913),
    i = r(993408),
    a = r(623373),
    l = r(105292);
function o(n) {
    return n?.tenantMetadata?.collectibles?.type === u.hE.TARGETED_OFFER;
}
function s(n, t) {
    if (null == t || t.rewardStatus !== e.GM.EARNED || !o(t)) return null;
    let r = t.rewardConfig?.discount;
    return null == r ||
        (0, i.G0)(n) ||
        !n.isFirstParty ||
        ((0, i.aw)(n) && !t.includeBundles) ||
        !(r.fiatEnabled && (0, a.go)(n))
        ? null
        : t;
}
function c(n) {
    return o(n) && n?.rewardConfig?.discount != null
        ? n.rewardConfig?.discount?.type === e.RP.PERCENT && 100 === n.rewardConfig.discount.amount
            ? l.intl.string(l.t["302tKP"])
            : l.intl.string(l.t["7EGhnE"])
        : null;
}
function d(n) {
    if (!o(n)) return !1;
    let t = n?.rewardConfig?.discount;
    return null != t && t.fiatEnabled;
}
function f(n) {
    return n === u.Pz.NITRO ? "nitro-pink" : "collectibles";
}
function p(n) {
    return n === u.Pz.NITRO ? "nitro-pink" : "purple";
}
