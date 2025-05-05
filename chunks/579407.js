n.d(t, {
    EU: () => a,
    Xm: () => i
});
var r = n(4242);
function i(e) {
    return null == e ? null : { nameplate: o(e.nameplate) };
}
function o(e) {
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
function a(e) {
    return {
        src: e.asset,
        imgAlt: e.label,
        palette: (0, r.t1)(e.palette)
    };
}
