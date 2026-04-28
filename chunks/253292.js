s.d(t, { K: () => c });
var l = s(64700),
    a = s(17928),
    r = s(775602),
    n = s(723702),
    o = s(746002),
    u = s(901139);
function c(e) {
    let { getImgCache: t } = (0, u.TW)(),
        s = (0, a.bG)([r.A], () => r.A.useReducedMotion);
    return l.useMemo(() => {
        if (null != e.previewToolKey && "" !== e.previewToolKey) {
            let s = t(e.previewToolKey);
            return { staticImageUrl: s?.staticUrl, animatedImageUrl: s?.animatedUrl };
        }
        let l = (platform.name ?? "unknown").toLowerCase(),
            a = s || (0, n.isLinux)() || "safari" === l;
        return {
            staticImageUrl: (0, o.getCollectiblesItemAssetUrl)({
                skuId: e.skuId,
                assetFormat: o.CollectiblesItemAssetFormat.STATIC,
            }),
            ...(a
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
    }, [e, t, s]);
}
