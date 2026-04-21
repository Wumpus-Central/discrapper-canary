"use strict";
n.r(t),
    n.d(t, {
        CollectiblesItemAssetFormat: () => a,
        getCollectiblesItemAssetUrl: () => c,
        parseSkuIdFromServerData: () => s.V,
    });
var r = n(403362),
    i = n(98434),
    s = n(628856),
    a = (function (e) {
        return (e.ANIMATED = "animated"), (e.STATIC = "static"), (e.VIDEO = "video"), e;
    })({});
let o = "http://localhost:3000/_storage",
    l = "https://cdn.discordapp.com",
    u = "media/v1/collectibles-shop",
    c = (e) => {
        let { skuId: t, assetFormat: n, assetId: s } = e;
        return (0, i.e)("getCollectiblesItemAssetUrl") && null != t
            ? (0, r.iT)()
                ? `${o}/${u}/${t}/${s ? `${s}/` : ""}${n}`
                : `${l}/${u}/${t}/${s ? `${s}/` : ""}${n}`
            : null;
    };
