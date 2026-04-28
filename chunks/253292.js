r.d(t, { K: () => o });
var a = r(64700),
    s = r(17928),
    l = r(775602),
    n = r(723702),
    i = r(746002),
    c = r(901139);
function o(e) {
    let { getImgCache: t } = (0, c.TW)(),
        r = (0, s.bG)([l.A], () => l.A.useReducedMotion);
    return a.useMemo(() => {
        if (null != e.previewToolKey && "" !== e.previewToolKey) {
            let r = t(e.previewToolKey);
            return { staticImageUrl: r?.staticUrl, animatedImageUrl: r?.animatedUrl };
        }
        let a = (platform.name ?? "unknown").toLowerCase(),
            s = r || (0, n.isLinux)() || "safari" === a;
        return {
            staticImageUrl: (0, i.getCollectiblesItemAssetUrl)({
                skuId: e.skuId,
                assetFormat: i.CollectiblesItemAssetFormat.STATIC,
            }),
            ...(s
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
    }, [e, t, r]);
}
