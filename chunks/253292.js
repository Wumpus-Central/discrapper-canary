l.d(t, { K: () => o });
var r = l(64700),
    a = l(311907),
    s = l(775602),
    n = l(723702),
    i = l(746002),
    c = l(901139);
function o(e) {
    let { getImgCache: t } = (0, c.TW)(),
        l = (0, a.bG)([s.A], () => s.A.useReducedMotion);
    return r.useMemo(() => {
        if (null != e.previewToolKey && "" !== e.previewToolKey) {
            let l = t(e.previewToolKey);
            return { staticImageUrl: l?.staticUrl, animatedImageUrl: l?.animatedUrl };
        }
        let r = (platform.name ?? "unknown").toLowerCase(),
            a = l || (0, n.isLinux)() || "safari" === r;
        return {
            staticImageUrl: (0, i.getCollectiblesItemAssetUrl)({
                skuId: e.skuId,
                assetFormat: i.CollectiblesItemAssetFormat.STATIC,
            }),
            ...(a
                ? {
                      animatedImageUrl: (0, i.getCollectiblesItemAssetUrl)({
                          skuId: e.skuId,
                          assetFormat: i.CollectiblesItemAssetFormat.ANIMATED,
                      }),
                  }
                : {
                      videoUrl: (0, i.getCollectiblesItemAssetUrl)({
                          skuId: e.skuId,
                          assetFormat: i.CollectiblesItemAssetFormat.VIDEO,
                      }),
                  }),
        };
    }, [e, t, l]);
}
