n.d(t, { A: () => r });
var i = n(821956);
function r(e) {
    let t = (0, i.Xq)(e);
    return t?.skuId == null || null == t.asset
        ? null
        : { asset: t.asset, sku_id: t.skuId, expires_at: t.expiresAt ?? null };
}
