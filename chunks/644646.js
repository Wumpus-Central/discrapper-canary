n.d(t, { Z: () => I });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(374470),
    l = n(442837),
    c = n(481060),
    u = n(607070),
    d = n(70097),
    f = n(451478),
    p = n(617136),
    _ = n(132581),
    m = n(475595),
    h = n(115179),
    g = n(455357),
    E = n(18578),
    b = n(352084),
    y = n(110560),
    O = n(388032),
    v = n(858191);
function S(e) {
    let { appFocused: t, location: n } = e,
        { shouldUseShine: i } = _.Z.useConfig({ location: n });
    return i
        ? (0, r.jsx)(c.ZX5, {
              "data-migration-pending": !0,
              className: v.shine,
              shineSize: c.rHe.SMALL,
              shinePaused: !t,
          })
        : null;
}
let I = function (e) {
    let t,
        {
            className: n,
            quest: a,
            autoplay: _ = !0,
            learnMoreStyle: I = null,
            learnMoreFontSize: T,
            sourceQuestContent: A,
            lazyLoad: C = !1,
            style: N,
            showShine: P = !0,
            location: R,
        } = e,
        D = (0, p.O5)(),
        w = (0, l.e7)([f.Z], () => f.Z.isFocused()),
        x = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
        L = i.useMemo(() => (0, m.fh)(a, m.eC.REWARD), [a]),
        j = i.useMemo(() => (0, m.fh)(a, m.eC.REWARD_IMAGE), [a]),
        M = i.useCallback(
            (t) => {
                var n;
                (0, s.kK)(t.currentTarget, HTMLElement) && t.currentTarget.blur(),
                    D({
                        questId: a.id,
                        questContent: e.questContent,
                        questContentPosition: e.questContentPosition,
                        questContentCTA: p.jZ.REWARD_LEARN_MORE,
                        sourceQuestContent: A,
                    }),
                    (0, y.navigateToQuestHome)({
                        fromContent: e.questContent,
                        questId: a.id,
                    }),
                    null == (n = e.onClick) || n.call(e, t);
            },
            [D, a.id, e, A],
        ),
        k = i.useRef(null),
        U = i.useRef(_),
        G = (0, h.Bg)(a.config);
    return (
        i.useEffect(() => {
            if (null != k.current) {
                if (!L.isAnimated || x) {
                    (k.current.currentTime = 0), k.current.pause();
                    return;
                }
                _ && !U.current
                    ? k.current.play()
                    : !_ && U.current && ((k.current.currentTime = 0), k.current.pause()),
                    (U.current = _);
            }
        }, [_, L, x]),
        (t = G
            ? (0, r.jsx)(g.Fl, {
                  id: "QuestRewardTile_rewardTileNitro",
                  children: (e) =>
                      (0, r.jsx)(b.Z, {
                          ref: e,
                          className: v.questRewardTileAsset,
                      }),
              })
            : C
              ? (0, r.jsx)(E.K, {
                    showVideo: _,
                    imageAsset:
                        null != j
                            ? {
                                  asset: j,
                                  assetId: "QuestRewardTile_rewardTileStatic",
                                  className: v.imageVideoOverlay,
                                  alt: O.intl.string(O.t.UMclVN),
                              }
                            : void 0,
                    videoAsset: {
                        asset: L,
                        assetId: "QuestRewardTile_rewardTileAnimated",
                        className: o()(v.questRewardTileAsset, v.questRewardTileAssetLazyVideo),
                    },
                    onLoadComplete: e.onLoadComplete,
                })
              : L.isAnimated
                ? (0, r.jsx)(g.Fl, {
                      id: "QuestRewardTile_rewardTileAnimated",
                      children: (t) => {
                          var n;
                          return (0, r.jsx)(d.Z, {
                              ref: (e) => {
                                  (t.current = e), (k.current = e);
                              },
                              autoPlay: !x && _,
                              loop: !0,
                              muted: !0,
                              playsInline: !0,
                              className: v.questRewardTileAsset,
                              controls: !1,
                              onProgress: e.onLoadComplete,
                              children: (0, r.jsx)("source", {
                                  src: L.url,
                                  type: null != (n = L.mimetype) ? n : void 0,
                              }),
                          });
                      },
                  })
                : (0, r.jsx)(g.Fl, {
                      id: "QuestRewardTile_rewardTileStatic",
                      children: (t) =>
                          (0, r.jsx)("img", {
                              ref: t,
                              alt: (0, h.w8)(a.config),
                              className: o()(v.questRewardTileAsset, v.questRewardTileAssetStatic),
                              src: L.url,
                              onLoad: e.onLoadComplete,
                          }),
                  })),
        null == I
            ? (0, r.jsx)("div", {
                  className: o()(v.questRewardTile, n),
                  style: N,
                  children: t,
              })
            : (0, r.jsxs)(c.P3F, {
                  className: o()(v.questRewardTileInteractive, v.questRewardTile, v.rewardHighlight, n),
                  onClick: M,
                  style: N,
                  children: [
                      t,
                      P &&
                          !x &&
                          (0, r.jsx)(S, {
                              appFocused: w,
                              location: R,
                          }),
                      "text" === I &&
                          (0, r.jsx)(c.Text, {
                              color: "always-white",
                              variant: "text-xs/normal",
                              className: v.questRewardTileDetailsLearnMore,
                              style: { fontSize: T },
                              children: O.intl.format(O.t.DYAleT, {}),
                          }),
                      "icon" === I &&
                          (0, r.jsx)("div", {
                              className: v.questRewardTileDetailsLearnMore,
                              children: (0, r.jsx)(c.d3s, {
                                  size: "xxs",
                                  color: c.TVs.colors.WHITE.css,
                              }),
                          }),
                  ],
              })
    );
};
