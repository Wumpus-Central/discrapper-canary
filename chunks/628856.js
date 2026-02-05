"use strict";
n.d(t, { D: () => s, t: () => i });
var r = n(369496);
function i(e) {
    return "object" == typeof e && null != e && "nameplate" in e && "object" == typeof e.nameplate
        ? { nameplate: a(e.nameplate) }
        : null;
}
function a(e) {
    if (
        "object" != typeof e ||
        null == e ||
        !("asset" in e) ||
        "string" != typeof e.asset ||
        !("label" in e) ||
        "string" != typeof e.label ||
        !("palette" in e) ||
        "string" != typeof e.palette
    )
        return null;
    let t = { asset: e.asset, label: e.label, palette: e.palette };
    return (
        "skuId" in e && "string" == typeof e.skuId && (t.skuId = e.skuId),
        "sku_id" in e && "string" == typeof e.sku_id && (t.skuId = e.sku_id),
        "expiresAt" in e && "number" == typeof e.expiresAt && (t.expiresAt = e.expiresAt),
        "expires_at" in e && "number" == typeof e.expires_at && (t.expiresAt = e.expires_at),
        t
    );
}
function s(e) {
    return { src: e.asset, imgAlt: e.label, palette: (0, r.H6)(e.palette) };
}
