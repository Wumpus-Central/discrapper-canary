function r(e) {
    return null == e ? null : { nameplate: i(e.nameplate) };
}
function i(e) {
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
n.d(t, { X: () => r });
