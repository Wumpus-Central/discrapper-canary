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
    let { quest: t, isInteracting: n, hideAssets: a, imageSize: p, containerClassName: h, imageClassName: m } = e,
        g = i.useMemo(() => (0, l.fh)(t, l.eC.HERO_IMAGE), [t]),
        E = i.useMemo(() => (0, l.fh)(t, l.eC.HERO_VIDEO), [t]),
        b = (0, s.h)(t, d.dr.QUEST_HOME_DESKTOP),
        { onAssetLoadComplete: y } = i.useContext(u.k),
        O = !b && n;
    return (0, r.jsx)("div", {
        className: o()(_.heroAssetCont, h),
        children:
            !a &&
            (0, r.jsx)(c.K, {
                imageAsset:
                    null != g
                        ? {
                              asset: g,
                              assetId: "QuestTileBanner",
                              alt: f.intl.string(f.t.jnijW1),
                              className: o()(_.heroAsset, m),
                          }
                        : void 0,
                videoAsset:
                    null != E
                        ? {
                              asset: E,
                              assetId: "QuestTileBanner_heroAnimated",
                              className: _.heroAssetVideo,
                          }
                        : void 0,
                showVideo: O,
                imageSize: p,
                onLoadComplete: y,
            }),
    });
}
