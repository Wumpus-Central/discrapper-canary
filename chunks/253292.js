"use strict";
n.d(t, { K: () => u });
var r = n(64700),
    i = n(311907),
    s = n(775602),
    a = n(723702),
    o = n(746002),
    l = n(901139);
function u(e) {
    let { getImgCache: t } = (0, l.TW)(),
        n = (0, i.bG)([s.A], () => s.A.useReducedMotion);
    return r.useMemo(() => {
        if (null != e.previewToolKey && "" !== e.previewToolKey) {
            let n = t(e.previewToolKey);
            return { staticImageUrl: n?.staticUrl, animatedImageUrl: n?.animatedUrl };
        }
        let r = (platform.name ?? "unknown").toLowerCase(),
            i = n || (0, a.isLinux)() || "safari" === r;
        return {
            staticImageUrl: (0, o.getCollectiblesItemAssetUrl)({
                skuId: e.skuId,
                assetFormat: o.CollectiblesItemAssetFormat.STATIC,
            }),
            ...(i
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
