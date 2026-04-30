"use strict";
n.d(t, { K: () => u });
var i = n(64700),
    r = n(17928),
    s = n(775602),
    a = n(723702),
    o = n(746002),
    l = n(901139);
function u(e) {
    let { getImgCache: t } = (0, l.TW)(),
        n = (0, r.bG)([s.A], () => s.A.useReducedMotion);
    return i.useMemo(() => {
        if (null != e.previewToolKey && "" !== e.previewToolKey) {
            let n = t(e.previewToolKey);
            return { staticImageUrl: n?.staticUrl, animatedImageUrl: n?.animatedUrl };
        }
        let i = (platform.name ?? "unknown").toLowerCase(),
            r = n || (0, a.isLinux)() || "safari" === i;
        return {
            staticImageUrl: (0, o.getCollectiblesItemAssetUrl)({
                skuId: e.skuId,
                assetFormat: o.CollectiblesItemAssetFormat.STATIC,
            }),
            ...(r
                ? {
                      animatedImageUrl: (0, o.getCollectiblesItemAssetUrl)({
                          skuId: e.skuId,
                          assetFormat: o.CollectiblesItemAssetFormat.ANIMATED,
                      }),
                  }
                : {
                      videoUrl: (0, o.getCollectiblesItemAssetUrl)({
                          skuId: e.skuId,
                          assetFormat: o.CollectiblesItemAssetFormat.VIDEO,
                      }),
                  }),
        };
    }, [e, t, n]);
}
