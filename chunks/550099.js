n.d(t, { A: () => l });
var i = n(287809),
    a = n(412260),
    r = n(891786);
function l(e, t) {
    let [n] = a.A.getPromotionsByPartner(e).oneTime;
    if (null == n) return null;
    let l = i.default.getCurrentUser(),
        s = new Date();
    return (0, r.A)(
        n.marketingComponents.filter((e) => e.componentType === t),
        s,
        (e) => null != l && e.isIncludedInRollout(l.id, s),
    );
}
