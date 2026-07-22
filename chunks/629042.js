n.d(t, { S: () => u, V: () => c });
var r = n(288106),
    i = n(223311),
    s = n(993408),
    l = n(623373),
    a = n(652215),
    o = n(375708);
function u(e) {
    let t = (0, i.A)(a.FYj);
    return null == t || (0, s.G0)(e) || (0, l.Ab)(e) || !e.isFirstParty ? null : t;
}
function c(e) {
    let t = u(e),
        n = t?.rewardConfig?.discount;
    return null == t || null == n
        ? null
        : t.rewardConfig?.discount?.type === r.RP.PERCENT && 100 === t.rewardConfig.discount.amount
          ? o.intl.string(o.t["302tKP"])
          : o.intl.string(o.t["7EGhnE"]);
}
