n.d(t, { L0: () => o, Nc: () => d, SV: () => u, VZ: () => c });
var l = n(288106),
    i = n(993408),
    r = n(623373),
    a = n(80151),
    s = n(375708);
function o(e, t) {
    let n = t?.rewardConfig?.discount;
    if (null == t || null == n || (0, i.G0)(e) || !e.isFirstParty || ((0, i.aw)(e) && !t.includeBundles)) return null;
    let l = n.fiatEnabled && (0, r.go)(e),
        a = n.orbsEnabled && (0, r.Vx)(e);
    return l || a ? t : null;
}
function u(e) {
    return o(e, (0, a.A)());
}
function c(e) {
    let t = u(e),
        n = t?.rewardConfig?.discount;
    return null == t || null == n
        ? null
        : t.rewardConfig?.discount?.type === l.RP.PERCENT && 100 === t.rewardConfig.discount.amount
          ? s.intl.string(s.t["302tKP"])
          : s.intl.string(s.t["7EGhnE"]);
}
function d(e) {
    let t = u(e);
    return (
        null != t &&
        t.rewardConfig?.discount != null &&
        t.rewardConfig.discount.fiatEnabled &&
        !t.rewardConfig.discount.orbsEnabled
    );
}
