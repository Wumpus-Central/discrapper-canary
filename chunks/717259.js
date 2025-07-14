t.d(n, { Z: () => a });
var r = t(442837),
    i = t(430824),
    o = t(535396);
function a(e, n) {
    let t = (0, r.e7)([i.Z], () => i.Z.getGuild(e));
    if (null == n || null == t) return !1;
    let a = o.Rx[n.skuId];
    return null != a && t.premiumTier >= a;
}
