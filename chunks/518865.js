n.d(t, { Dj: () => i, Jl: () => d, MX: () => s, PY: () => c, aJ: () => f, lG: () => E });
var r = n(288106),
    l = n(604913),
    a = n(993408),
    u = n(623373),
    o = n(375708);
function i(e) {
    return e?.tenantMetadata?.collectibles?.type === l.hE.TARGETED_OFFER;
}
function c(e, t) {
    if (null == t || t.rewardStatus !== r.GM.EARNED || !i(t)) return null;
    let n = t.rewardConfig?.discount;
    if (null == n || (0, a.G0)(e) || !e.isFirstParty || ((0, a.aw)(e) && !t.includeBundles)) return null;
    let l = n.fiatEnabled && (0, u.go)(e),
        o = n.orbsEnabled && (0, u.Vx)(e);
    return l || o ? t : null;
}
function s(e) {
    return i(e) && e?.rewardConfig?.discount != null
        ? e.rewardConfig?.discount?.type === r.RP.PERCENT && 100 === e.rewardConfig.discount.amount
            ? o.intl.string(o.t["302tKP"])
            : o.intl.string(o.t["7EGhnE"])
        : null;
}
function d(e) {
    if (!i(e)) return !1;
    let t = e?.rewardConfig?.discount;
    return null != t && t.fiatEnabled && !t.orbsEnabled;
}
function f(e) {
    return e === l.Pz.NITRO ? "nitro-pink" : "collectibles";
}
function E(e) {
    return e === l.Pz.NITRO ? "nitro-pink" : "purple";
}
