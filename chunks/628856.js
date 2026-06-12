"use strict";
n.d(t, { V: () => i, t: () => r });
let i = (e) =>
    "string" == typeof e.skuId || "number" == typeof e.skuId
        ? String(e.skuId)
        : "string" == typeof e.sku_id || "number" == typeof e.sku_id
          ? String(e.sku_id)
          : null;
function r(e) {
    return "object" == typeof e && null != e && "nameplate" in e && "object" == typeof e.nameplate
        ? {
              nameplate: (function (e) {
                  if ("object" != typeof e || null == e) return null;
                  let t = i(e);
                  if (
                      null == t ||
                      !("label" in e) ||
                      "string" != typeof e.label ||
                      !("palette" in e) ||
                      "string" != typeof e.palette
                  )
                      return null;
                  let n = { skuId: t, label: e.label, palette: e.palette };
                  return (
                      "asset" in e && "string" == typeof e.asset && (n.asset = e.asset),
                      "expiresAt" in e && "number" == typeof e.expiresAt && (n.expiresAt = e.expiresAt),
                      "expires_at" in e && "number" == typeof e.expires_at && (n.expiresAt = e.expires_at),
                      n
                  );
              })(e.nameplate),
          }
        : null;
}
