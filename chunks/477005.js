n.d(t, { Z: () => f });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(475595),
    l = n(18578),
    c = n(251360),
    u = n(388032),
    d = n(891551);
function f(e) {
    let {
            quest: t,
            isInteracting: n,
            hideAssets: a,
            imageSize: f,
            containerClassName: p,
            imageClassName: _,
            assetRef: m,
        } = e,
        h = i.useMemo(() => (0, s.fh)(t, s.eC.HERO_IMAGE), [t]),
        g = i.useMemo(() => (0, s.fh)(t, s.eC.HERO_VIDEO), [t]),
        { onAssetLoadComplete: E } = i.useContext(c.k);
    return (0, r.jsx)("div", {
        className: o()(d.heroAssetCont, p),
        children:
            !a &&
            (0, r.jsx)(l.K, {
                imageAsset:
                    null != h
                        ? {
                              asset: h,
                              assetId: "QuestTileBanner",
                              alt: u.intl.string(u.t.jnijWz),
                              className: o()(d.heroAsset, _),
                          }
                        : void 0,
                videoAsset:
                    null != g
                        ? {
                              asset: g,
                              assetId: "QuestTileBanner_heroAnimated",
                              className: d.heroAssetVideo,
                          }
                        : void 0,
                showVideo: n,
                imageSize: f,
                onLoadComplete: E,
                assetRef: m,
            }),
    });
}
