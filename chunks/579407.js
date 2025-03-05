n.d(t, {
    EU: () => s,
    Xm: () => o
});
var r = n(4242),
    i = n(578976);
function o(e) {
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
function s(e) {
    return {
        src: (0, i.lc)(e.asset),
        imgAlt: e.label,
        palette: (0, r.t1)(e.palette)
    };
}
