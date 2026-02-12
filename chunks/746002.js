"use strict";
n.d(t, { Y: () => u, _: () => a });
var r = n(403362),
    i = n(98434),
    a = (function (e) {
        return (e.ANIMATED = "animated"), (e.STATIC = "static"), (e.VIDEO = "video"), e;
    })({});
let s = "http://localhost:3000/_storage",
    o = "https://cdn.discordapp.com",
    l = "media/v1/collectibles-shop",
    u = (e, t) =>
        (0, i.e)("getCollectiblesItemAssetUrl") && null != e
            ? (0, r.iT)()
                ? `${s}/${l}/${e}/${t}`
                : `${o}/${l}/${e}/${t}`
            : null;
