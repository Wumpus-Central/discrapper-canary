"use strict";
n.r(t), n.d(t, { CollectiblesItemAssetFormat: () => s, getCollectiblesItemAssetUrl: () => u });
var r = n(403362),
    i = n(98434),
    s = (function (e) {
        return (e.ANIMATED = "animated"), (e.STATIC = "static"), (e.VIDEO = "video"), e;
    })({});
let a = "http://localhost:3000/_storage",
    o = "https://cdn.discordapp.com",
    l = "media/v1/collectibles-shop",
    u = (e, t) =>
        (0, i.e)("getCollectiblesItemAssetUrl") && null != e
            ? (0, r.iT)()
                ? `${a}/${l}/${e}/${t}`
                : `${o}/${l}/${e}/${t}`
            : null;
