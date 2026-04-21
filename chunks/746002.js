"use strict";
n.r(t),
    n.d(t, {
        CollectiblesItemAssetFormat: () => s,
        getCollectiblesItemAssetUrl: () => u,
        parseSkuIdFromServerData: () => i.V,
    });
var r = n(403362),
    i = n(628856),
    s = (function (e) {
        return (e.ANIMATED = "animated"), (e.STATIC = "static"), (e.VIDEO = "video"), e;
    })({});
let a = "http://localhost:3000/_storage",
    o = "https://cdn.discordapp.com",
    l = "media/v1/collectibles-shop",
    u = (e) => {
        let { skuId: t, assetFormat: n, assetId: i } = e;
        return null == t
            ? null
            : (0, r.iT)()
              ? `${a}/${l}/${t}/${i ? `${i}/` : ""}${n}`
              : `${o}/${l}/${t}/${i ? `${i}/` : ""}${n}`;
    };
