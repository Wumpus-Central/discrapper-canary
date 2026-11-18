n.d(t, { w: () => a });
var r = n(855986),
    i = n(561573),
    l = n(288106),
    s = n(669470);
function a(e, t) {
    let n = (0, r.bG)([i.A], () =>
        (function (e) {
            let t = 0;
            for (let n of e ?? []) {
                let e = n[l.QK.SELF_PURCHASE];
                e?.type === l.Ns.ACTION && (t += e.amount);
            }
            return t > 0 ? t : null;
        })(i.A.getRewardsForSkuId(t)),
    );
    if (null == e || !(0, s.xG)(e)) return null;
    if (null != n) return n;
    let a = e.appliesToAllSkus || (null != t && e.skuIds?.includes(t) === !0),
        u = e.rewardConfig?.action?.orbsBackQuantity;
    return a && null != u && u > 0 ? u : null;
}
