"use strict";
n.d(t, { K: () => c });
var l = n(64700),
    i = n(17928),
    s = n(775602),
    a = n(723702),
    r = n(746002),
    o = n(901139);
function c(e) {
    let { getImgCache: t } = (0, o.TW)(),
        n = (0, i.bG)([s.A], () => s.A.useReducedMotion);
    return l.useMemo(() => {
        if (null != e.previewToolKey && "" !== e.previewToolKey) {
            let n = t(e.previewToolKey);
            return { staticImageUrl: n?.staticUrl, animatedImageUrl: n?.animatedUrl };
        }
        let l = (platform.name ?? "unknown").toLowerCase(),
            i = n || (0, a.isLinux)() || "safari" === l;
        return {
            staticImageUrl: (0, r.getCollectiblesItemAssetUrl)({
                skuId: e.skuId,
                assetFormat: r.CollectiblesItemAssetFormat.STATIC,
            }),
            ...(i
                ? {
                      animatedImageUrl: (0, r.getCollectiblesItemAssetUrl)({
                          skuId: e.skuId,
                          assetFormat: r.CollectiblesItemAssetFormat.ANIMATED,
                      }),
                  }
                : {
                      videoUrl: (0, r.getCollectiblesItemAssetUrl)({
                          skuId: e.skuId,
                          assetFormat: r.CollectiblesItemAssetFormat.VIDEO,
                      }),
                  }),
        };
    }, [e, t, n]);
}
