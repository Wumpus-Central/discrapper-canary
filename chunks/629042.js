n.d(t, { L0: () => u, Nc: () => p, SV: () => c, VZ: () => d });
var l = n(288106),
    i = n(223311),
    r = n(993408),
    a = n(623373),
    s = n(652215),
    o = n(375708);
function u(e, t) {
    let n = t?.rewardConfig?.discount;
    if (null == t || null == n || (0, r.G0)(e) || !e.isFirstParty || ((0, r.aw)(e) && !t.includeBundles)) return null;
    let l = n.fiatEnabled && (0, a.go)(e),
        i = n.orbsEnabled && (0, a.Vx)(e);
    return l || i ? t : null;
}
function c(e) {
    return u(e, (0, i.A)(s.FYj));
}
function d(e) {
    let t = c(e),
        n = t?.rewardConfig?.discount;
    return null == t || null == n
        ? null
        : t.rewardConfig?.discount?.type === l.RP.PERCENT && 100 === t.rewardConfig.discount.amount
          ? o.intl.string(o.t["302tKP"])
          : o.intl.string(o.t["7EGhnE"]);
}
function p(e) {
    let t = c(e);
    return (
        null != t &&
        t.rewardConfig?.discount != null &&
        t.rewardConfig.discount.fiatEnabled &&
        !t.rewardConfig.discount.orbsEnabled
    );
}
