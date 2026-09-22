(n.r(t),
    n.d(t, {
        BASE_URL_BY_RELEASE_CHANNEL: () => s,
        CollectiblesItemAssetFormat: () => a,
        getCollectiblesItemAssetUrl: () => l,
        parseSkuIdFromServerData: () => r.V,
    }));
var i,
    r = n(628856),
    a = (((i = {}).ANIMATED = "animated"), (i.STATIC = "static"), (i.VIDEO = "video"), i);
let s =
    "production" === window.GLOBAL_ENV.PROJECT_ENV
        ? "https://cdn.discordapp.com"
        : "staging" === window.GLOBAL_ENV.PROJECT_ENV
          ? "https://staging-cdn.discord.co"
          : "http://localhost:3000/_storage";
function l(e) {
    let { skuId: t, assetFormat: n, assetId: i } = e;
    return null == t ? null : `${s}/media/v1/collectibles-shop/${t}/${i ? `${i}/` : ""}${n}`;
}
