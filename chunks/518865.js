t.d(e, { Dj: () => o, Jl: () => d, MX: () => s, PY: () => c, aJ: () => E, lG: () => f });
var r = t(288106),
    l = t(604913),
    a = t(993408),
    u = t(623373),
    i = t(375708);
function o(n) {
    return n?.tenantMetadata?.collectibles?.type === l.hE.TARGETED_OFFER;
}
function c(n, e) {
    if (null == e || e.rewardStatus !== r.GM.EARNED || !o(e)) return null;
    let t = e.rewardConfig?.discount;
    if (null == t || (0, a.G0)(n) || !n.isFirstParty || ((0, a.aw)(n) && !e.includeBundles)) return null;
    let l = t.fiatEnabled && (0, u.go)(n),
        i = t.orbsEnabled && (0, u.Vx)(n);
    return l || i ? e : null;
}
function s(n) {
    return o(n) && n?.rewardConfig?.discount != null
        ? n.rewardConfig?.discount?.type === r.RP.PERCENT && 100 === n.rewardConfig.discount.amount
            ? i.intl.string(i.t["302tKP"])
            : i.intl.string(i.t["7EGhnE"])
        : null;
}
function d(n) {
    if (!o(n)) return !1;
    let e = n?.rewardConfig?.discount;
    return null != e && e.fiatEnabled && !e.orbsEnabled;
}
function E(n) {
    return n === l.Pz.NITRO ? "nitro-pink" : "collectibles";
}
function f(n) {
    return n === l.Pz.NITRO ? "nitro-pink" : "purple";
}
