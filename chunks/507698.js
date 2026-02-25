"use strict";
n.d(t, { Xq: () => i, bS: () => s, kn: () => a, uZ: () => o });
var r = n(735438);
let i = (e) => {
        if ("object" != typeof e || null == e) return null;
        let t = {};
        return (
            "asset" in e && "string" == typeof e.asset && (t.asset = e.asset),
            "sku_id" in e && "string" == typeof e.sku_id && (t.skuId = e.sku_id),
            "skuId" in e && "string" == typeof e.skuId && (t.skuId = e.skuId),
            "expires_at" in e && "number" == typeof e.expires_at && (t.expiresAt = e.expires_at),
            "expiresAt" in e && "number" == typeof e.expiresAt && (t.expiresAt = e.expiresAt),
            t
        );
    },
    s = (e) => e?.expiresAt != null && 1e3 * e.expiresAt < Date.now(),
    a = (e, t) => (null == e || null == t ? e === t : (0, r.isEqual)(i(e), i(t))),
    o = (e, t) => null != t && !s(e?.avatarDecoration) && e?.avatarDecoration?.asset != null;
