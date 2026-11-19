n.d(t, { w: () => u });
var r = n(855986),
    i = n(561573),
    l = n(65238),
    a = n(288106),
    s = n(669470);
function u(e, t) {
    let n = (0, r.bG)([i.A], () =>
        (function (e) {
            let t = 0;
            for (let n of e ?? []) {
                let e = n[a.QK.SELF_PURCHASE];
                e?.type === a.Ns.ACTION && (t += e.amount);
            }
            return t > 0 ? t : null;
        })(i.A.getRewardsForSkuId(t)),
    );
    if (null == e || !(0, s.xG)(e)) return null;
    if (null != n) return n;
    let u = (0, l.TX)(e, t),
        o = e.rewardConfig?.action?.orbsBackQuantity;
    return u && null != o && o > 0 ? o : null;
}
