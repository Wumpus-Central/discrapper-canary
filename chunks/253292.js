l.d(t, { K: () => c });
var a = l(64700),
    s = l(17928),
    r = l(775602),
    n = l(723702),
    u = l(746002),
    o = l(901139);
function c(e) {
    let { getImgCache: t } = (0, o.TW)(),
        l = (0, s.bG)([r.Ay], () => r.Ay.useReducedMotion);
    return a.useMemo(() => {
        if (null != e.previewToolKey && "" !== e.previewToolKey) {
            let l = t(e.previewToolKey);
            return { staticImageUrl: l?.staticUrl, animatedImageUrl: l?.animatedUrl };
        }
        let a = (platform.name ?? "unknown").toLowerCase(),
            s = l || (0, n.isLinux)() || "safari" === a;
        return {
            staticImageUrl: (0, u.getCollectiblesItemAssetUrl)({
                skuId: e.skuId,
                assetFormat: u.CollectiblesItemAssetFormat.STATIC,
            }),
            ...(s
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
        };
    }, [e, t, l]);
}
