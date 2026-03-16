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
    c = (e, t) =>
        (0, i.e)("getCollectiblesItemAssetUrl") && null != e
            ? (0, r.iT)()
                ? `${o}/${u}/${e}/${t}`
                : `${l}/${u}/${e}/${t}`
            : null;
