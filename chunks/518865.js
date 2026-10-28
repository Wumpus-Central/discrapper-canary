e.d(n, { Dj: () => o, Jl: () => d, MX: () => s, PY: () => c, aJ: () => f, lG: () => p });
var r = e(288106),
    u = e(604913),
    a = e(993408),
    l = e(623373),
    i = e(105292);
function o(t) {
    return t?.tenantMetadata?.collectibles?.type === u.hE.TARGETED_OFFER;
}
function c(t, n) {
    if (null == n || n.rewardStatus !== r.GM.EARNED || !o(n)) return null;
    let e = n.rewardConfig?.discount;
    return null == e ||
        (0, a.G0)(t) ||
        !t.isFirstParty ||
        ((0, a.aw)(t) && !n.includeBundles) ||
        !(e.fiatEnabled && (0, l.go)(t))
        ? null
        : n;
}
function s(t) {
    return o(t) && t?.rewardConfig?.discount != null
        ? t.rewardConfig?.discount?.type === r.RP.PERCENT && 100 === t.rewardConfig.discount.amount
            ? i.intl.string(i.t["302tKP"])
            : i.intl.string(i.t["7EGhnE"])
        : null;
}
function d(t) {
    if (!o(t)) return !1;
    let n = t?.rewardConfig?.discount;
    return null != n && n.fiatEnabled;
}
function f(t) {
    return t === u.Pz.NITRO ? "nitro-pink" : "collectibles";
}
function p(t) {
    return t === u.Pz.NITRO ? "nitro-pink" : "purple";
}
