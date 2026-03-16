"use strict";
n.d(t, { Xq: () => s, bS: () => a, kn: () => o, uZ: () => l });
var r = n(735438),
    i = n(628856);
let s = (e) => {
        if ("object" != typeof e || null == e) return null;
        let t = (0, i.V)(e);
        if (null == t) return null;
        let n = { skuId: t };
        return (
            "asset" in e && "string" == typeof e.asset && (n.asset = e.asset),
            "expires_at" in e && "number" == typeof e.expires_at && (n.expiresAt = e.expires_at),
            "expiresAt" in e && "number" == typeof e.expiresAt && (n.expiresAt = e.expiresAt),
            n
        );
    },
    a = (e) => e?.expiresAt != null && 1e3 * e.expiresAt < Date.now(),
    o = (e, t) => (null == e || null == t ? e === t : (0, r.isEqual)(s(e), s(t))),
    l = (e, t) => null != t && !a(e?.avatarDecoration) && e?.avatarDecoration?.asset != null;
