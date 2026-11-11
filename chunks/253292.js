var l = n(582128),
    i = n(855986),
    s = n(775602),
    r = n(723702),
    a = n(746002),
    o = n(901139);
n.d(
    t,
    {},
    {
        K: function (e) {
            let { getImgCache: t } = (0, o.TW)(),
                n = (0, i.bG)([s.Ay], () => s.Ay.useReducedMotion);
            return l.useMemo(() => {
                if (null != e.previewToolKey && "" !== e.previewToolKey) {
                    let n = t(e.previewToolKey);
                    return { staticImageUrl: n?.staticUrl, animatedImageUrl: n?.animatedUrl };
                }
                let l = (platform.name ?? "unknown").toLowerCase(),
                    i = n || (0, r.j9)() || "safari" === l;
                return {
                    staticImageUrl: (0, a.getCollectiblesItemAssetUrl)({
                        skuId: e.skuId,
                        assetFormat: a.CollectiblesItemAssetFormat.STATIC,
                    }),
                    ...(i
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
        },
    },
);
