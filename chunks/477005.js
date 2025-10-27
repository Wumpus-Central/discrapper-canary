n.d(t, { Z: () => p });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(974390),
    l = n(475595),
    c = n(18578),
    u = n(251360),
    d = n(46140),
    f = n(388032),
    _ = n(178833);
function p(e) {
    let {
            quest: t,
            isInteracting: n,
            hideAssets: a,
            imageSize: p,
            containerClassName: h,
            imageClassName: m,
            assetRef: g,
        } = e,
        E = i.useMemo(() => (0, l.fh)(t, l.eC.HERO_IMAGE), [t]),
        b = i.useMemo(() => (0, l.fh)(t, l.eC.HERO_VIDEO), [t]),
        y = (0, s.h)(t, d.dr.QUEST_HOME_DESKTOP),
        { onAssetLoadComplete: O } = i.useContext(u.k),
        v = !y && n;
    return (0, r.jsx)("div", {
        className: o()(_.heroAssetCont, h),
        children:
            !a &&
            (0, r.jsx)(c.K, {
                imageAsset:
                    null != E
                        ? {
                              asset: E,
                              assetId: "QuestTileBanner",
                              alt: f.intl.string(f.t.jnijWz),
                              className: o()(_.heroAsset, m),
                          }
                        : void 0,
                videoAsset:
                    null != b
                        ? {
                              asset: b,
                              assetId: "QuestTileBanner_heroAnimated",
                              className: _.heroAssetVideo,
                          }
                        : void 0,
                showVideo: v,
                imageSize: p,
                onLoadComplete: O,
                assetRef: g,
            }),
    });
}
