"use strict";
n.d(t, { K: () => d });
var r = n(64700),
    i = n(311907),
    s = n(775602),
    a = n(289397),
    o = n(723702),
    l = n(98434),
    u = n(746002),
    c = n(901139);
function d(e) {
    let { getImgCache: t } = (0, c.TW)(),
        n = (0, i.bG)([s.A], () => s.A.useReducedMotion);
    return r.useMemo(() => {
        if (null != e.previewToolKey && "" !== e.previewToolKey) {
            let n = t(e.previewToolKey);
            return { staticImageUrl: n?.staticUrl, animatedImageUrl: n?.animatedUrl };
        }
        let r = (platform.name ?? "unknown").toLowerCase(),
            i = n || (0, o.isLinux)() || "safari" === r;
        return (0, l.e)("useNameplateAsset")
            ? {
                  staticImageUrl: (0, u.getCollectiblesItemAssetUrl)({
                      skuId: e.skuId,
                      assetFormat: u.CollectiblesItemAssetFormat.STATIC,
                  }),
                  ...(i
                      ? {
                            animatedImageUrl: (0, u.getCollectiblesItemAssetUrl)({
                                skuId: e.skuId,
                                assetFormat: u.CollectiblesItemAssetFormat.ANIMATED,
                            }),
                        }
                      : {
                            videoUrl: (0, u.getCollectiblesItemAssetUrl)({
                                skuId: e.skuId,
                                assetFormat: u.CollectiblesItemAssetFormat.VIDEO,
                            }),
                        }),
              }
            : {
                  staticImageUrl: (0, a.n)(`collectibles/${e.src}static.png`),
                  ...(i
                      ? { animatedImageUrl: (0, a.n)(`collectibles/${e.src}img.png`) }
                      : { videoUrl: (0, a.n)(`collectibles/${e.src}asset.webm`) }),
              };
    }, [e, t, n]);
}
