"use strict";
n.r(t),
    n.d(t, {
        CollectiblesItemAssetFormat: () => s,
        getCollectiblesItemAssetUrl: () => o,
        parseSkuIdFromServerData: () => a.V,
    });
var i,
    r = n(403362),
    a = n(628856),
    s = (((i = {}).ANIMATED = "animated"), (i.STATIC = "static"), (i.VIDEO = "video"), i);
let l = "media/v1/collectibles-shop";
function o(e) {
    let { skuId: t, assetFormat: n, assetId: i } = e;
    return null == t
        ? null
        : (0, r.iT)()
          ? `http://localhost:3000/_storage/${l}/${t}/${i ? `${i}/` : ""}${n}`
          : `https://cdn.discordapp.com/${l}/${t}/${i ? `${i}/` : ""}${n}`;
}
