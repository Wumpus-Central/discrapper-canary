n.d(t, { K: () => u });
var i = n(582128),
    l = n(17928),
    s = n(775602),
    r = n(723702),
    a = n(746002),
    o = n(901139);
function u(e) {
    let { getImgCache: t } = (0, o.TW)(),
        n = (0, l.bG)([s.Ay], () => s.Ay.useReducedMotion);
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
