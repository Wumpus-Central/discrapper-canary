n(628856);
var i,
    r = (((i = {}).ANIMATED = "animated"), (i.STATIC = "static"), (i.VIDEO = "video"), i);
let a =
    "production" === window.GLOBAL_ENV.PROJECT_ENV
        ? "https://cdn.discordapp.com"
        : "staging" === window.GLOBAL_ENV.PROJECT_ENV
          ? "https://staging-cdn.discord.co"
          : "http://localhost:3000/_storage";
n.d(
    t,
    {},
    {
        CollectiblesItemAssetFormat: r,
        getCollectiblesItemAssetUrl: function (e) {
            let { skuId: t, assetFormat: n, assetId: i } = e;
            return null == t ? null : `${a}/media/v1/collectibles-shop/${t}/${i ? `${i}/` : ""}${n}`;
        },
    },
);
