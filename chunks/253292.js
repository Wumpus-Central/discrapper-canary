"use strict";
n.d(t, { K: () => c });
var i = n(64700),
    l = n(311907),
    s = n(775602),
    r = n(723702),
    a = n(746002),
    o = n(901139);
function c(e) {
    let { getImgCache: t } = (0, o.TW)(),
        n = (0, l.bG)([s.A], () => s.A.useReducedMotion);
    return i.useMemo(() => {
        if (null != e.previewToolKey && "" !== e.previewToolKey) {
            let n = t(e.previewToolKey);
            return { staticImageUrl: n?.staticUrl, animatedImageUrl: n?.animatedUrl };
        }
        let i = (platform.name ?? "unknown").toLowerCase(),
            l = n || (0, r.isLinux)() || "safari" === i;
        return {
            staticImageUrl: (0, a.getCollectiblesItemAssetUrl)({
                skuId: e.skuId,
                assetFormat: a.CollectiblesItemAssetFormat.STATIC,
            }),
            ...(l
                ? {
                      animatedImageUrl: (0, a.getCollectiblesItemAssetUrl)({
                          skuId: e.skuId,
                          assetFormat: a.CollectiblesItemAssetFormat.ANIMATED,
                      }),
                  }
                : {
                      videoUrl: (0, a.getCollectiblesItemAssetUrl)({
                          skuId: e.skuId,
                          assetFormat: a.CollectiblesItemAssetFormat.VIDEO,
                      }),
                  }),
        };
    }, [e, t, n]);
}
