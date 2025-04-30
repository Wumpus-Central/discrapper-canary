n.d(t, {
    EU: () => o,
    Xm: () => i
});
var r = n(4242);
function i(e) {
    return null == e ? null : { nameplate: a(e.nameplate) };
}
function a(e) {
    return null == e
        ? null
        : {
              asset: e.asset,
              skuId: e.sku_id,
              expiresAt: e.expires_at,
              label: e.label,
              palette: e.palette
          };
}
function o(e) {
    return {
        src: e.asset,
        imgAlt: e.label,
        palette: (0, r.t1)(e.palette)
    };
}
