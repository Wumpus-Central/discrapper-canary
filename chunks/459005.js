n.d(t, { n: () => a });
var l = n(17928),
    i = n(561573),
    r = n(379031);
function a(e) {
    let { surface: t, skuId: n } = e,
        a = (0, r.g)(t);
    return (0, l.bG)(
        [i.A],
        () =>
            (function (e, t) {
                if (null == e) return null;
                for (let n of e) {
                    let e = n[t];
                    if (e?.amount != null && e.amount > 0) return e;
                }
                return null;
            })(i.A.getRewardsForSkuId(n), a),
        [n, a],
    );
}
