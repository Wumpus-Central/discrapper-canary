n.d(t, {
    Xq: () => i,
    bS: () => a,
    kn: () => s,
    uZ: () => o,
});
var r = n(735438);
let i = (e) => {
        if ("object" != typeof e || null == e || !("asset" in e) || "string" != typeof e.asset) return null;
        let t = { asset: e.asset };
        return (
            "sku_id" in e && "string" == typeof e.sku_id && (t.skuId = e.sku_id),
            "skuId" in e && "string" == typeof e.skuId && (t.skuId = e.skuId),
            "expires_at" in e && "number" == typeof e.expires_at && (t.expiresAt = e.expires_at),
            "expiresAt" in e && "number" == typeof e.expiresAt && (t.expiresAt = e.expiresAt),
            t
        );
    },
    a = (e) => (null == e ? void 0 : e.expiresAt) != null && 1000 * e.expiresAt < Date.now(),
    s = (e, t) => (null == e || null == t ? e === t : (0, r.isEqual)(i(e), i(t))),
    o = (e, t) => {
        var n;
        return (
            null != t &&
            !a(null == e ? void 0 : e.avatarDecoration) &&
            (null == e || null == (n = e.avatarDecoration) ? void 0 : n.asset) != null
        );
    };
