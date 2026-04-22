"use strict";
n.r(t),
    n.d(t, {
        CollectiblesItemAssetFormat: () => a,
        getCollectiblesItemAssetUrl: () => l,
        parseSkuIdFromServerData: () => s.V,
    });
var r,
    i = n(403362),
    s = n(628856),
    a = (((r = {}).ANIMATED = "animated"), (r.STATIC = "static"), (r.VIDEO = "video"), r);
let o = "media/v1/collectibles-shop",
    l = (e) => {
        let { skuId: t, assetFormat: n, assetId: r } = e;
        return null == t
            ? null
            : (0, i.iT)()
              ? `http://localhost:3000/_storage/${o}/${t}/${r ? `${r}/` : ""}${n}`
              : `https://cdn.discordapp.com/${o}/${t}/${r ? `${r}/` : ""}${n}`;
    };
