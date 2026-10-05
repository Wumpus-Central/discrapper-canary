e.d(n, { Dj: () => i, Jl: () => d, MX: () => s, PY: () => c, aJ: () => f, lG: () => p });
var r = e(288106),
    u = e(604913),
    l = e(993408),
    a = e(623373),
    o = e(375708);
function i(t) {
    return t?.tenantMetadata?.collectibles?.type === u.hE.TARGETED_OFFER;
}
function c(t, n) {
    if (null == n || n.rewardStatus !== r.GM.EARNED || !i(n)) return null;
    let e = n.rewardConfig?.discount;
    if (null == e || (0, l.G0)(t) || !t.isFirstParty || ((0, l.aw)(t) && !n.includeBundles)) return null;
    let u = e.fiatEnabled && (0, a.go)(t),
        o = e.orbsEnabled && (0, a.Vx)(t);
    return u || o ? n : null;
}
function s(t) {
    return i(t) && t?.rewardConfig?.discount != null
        ? t.rewardConfig?.discount?.type === r.RP.PERCENT && 100 === t.rewardConfig.discount.amount
            ? o.intl.string(o.t["302tKP"])
            : o.intl.string(o.t["7EGhnE"])
        : null;
}
function d(t) {
    if (!i(t)) return !1;
    let n = t?.rewardConfig?.discount;
    return null != n && n.fiatEnabled && !n.orbsEnabled;
}
function f(t) {
    return t === u.Pz.NITRO ? "nitro-pink" : "collectibles";
}
function p(t) {
    return t === u.Pz.NITRO ? "nitro-pink" : "purple";
}
