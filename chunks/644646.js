n.d(t, { Z: () => I });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(374470),
    l = n(442837),
    c = n(481060),
    u = n(607070),
    d = n(70097),
    f = n(451478),
    _ = n(617136),
    p = n(509212),
    h = n(475595),
    m = n(566078),
    g = n(18578),
    E = n(352084),
    b = n(110560),
    y = n(78826),
    O = n(388032),
    v = n(858191);
let I = function (e) {
    let t,
        {
            className: n,
            quest: a,
            autoplay: I = !0,
            learnMoreStyle: T = null,
            learnMoreFontSize: S,
            sourceQuestContent: A,
            lazyLoad: C = !1,
            style: N,
            showShine: R = !0,
        } = e,
        P = (0, _.O5)(),
        w = (0, l.e7)([f.Z], () => f.Z.isFocused()),
        D = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
        x = i.useMemo(() => (0, h.fh)(a, h.eC.REWARD), [a]),
        L = i.useMemo(() => (0, h.fh)(a, h.eC.REWARD_IMAGE), [a]),
        j = i.useCallback(
            (t) => {
                var n;
                (0, s.kK)(t.currentTarget, HTMLElement) && t.currentTarget.blur(),
                    P({
                        questId: a.id,
                        questContent: e.questContent,
                        questContentPosition: e.questContentPosition,
                        questContentCTA: _.jZ.REWARD_LEARN_MORE,
                        sourceQuestContent: A,
                    }),
                    (0, b.navigateToQuestHome)({
                        fromContent: e.questContent,
                        questId: a.id,
                    }),
                    null == (n = e.onClick) || n.call(e, t);
            },
            [P, a.id, e, A],
        ),
        M = i.useRef(null),
        k = i.useRef(I),
        U = (0, p.Bg)(a.config);
    return (
        i.useEffect(() => {
            if (null != M.current) {
                if (!x.isAnimated || D) {
                    (M.current.currentTime = 0), M.current.pause();
                    return;
                }
                I && !k.current
                    ? M.current.play()
                    : !I && k.current && ((M.current.currentTime = 0), M.current.pause()),
                    (k.current = I);
            }
        }, [I, x, D]),
        (t = U
            ? (0, r.jsx)(y.Fl, {
                  id: "QuestRewardTile_rewardTileNitro",
                  children: (e) =>
                      (0, r.jsx)(E.Z, {
                          ref: e,
                          className: v.questRewardTileAsset,
                      }),
              })
            : C
              ? (0, r.jsx)(g.K, {
                    showVideo: I,
                    imageAsset:
                        null != L
                            ? {
                                  asset: L,
                                  assetId: "QuestRewardTile_rewardTileStatic",
                                  className: v.imageVideoOverlay,
                                  alt: O.intl.string(O.t.UMclVF),
                              }
                            : void 0,
                    videoAsset: {
                        asset: x,
                        assetId: "QuestRewardTile_rewardTileAnimated",
                        className: o()(v.questRewardTileAsset, v.questRewardTileAssetLazyVideo),
                    },
                    onLoadComplete: e.onLoadComplete,
                })
              : x.isAnimated
                ? (0, r.jsx)(y.Fl, {
                      id: "QuestRewardTile_rewardTileAnimated",
                      children: (t) => {
                          var n;
                          return (0, r.jsx)(d.Z, {
                              ref: (e) => {
                                  (t.current = e), (M.current = e);
                              },
                              autoPlay: !D && I,
                              loop: !0,
                              muted: !0,
                              playsInline: !0,
                              className: v.questRewardTileAsset,
                              controls: !1,
                              onProgress: e.onLoadComplete,
                              children: (0, r.jsx)("source", {
                                  src: x.url,
                                  type: null != (n = x.mimetype) ? n : void 0,
                              }),
                          });
                      },
                  })
                : (0, r.jsx)(y.Fl, {
                      id: "QuestRewardTile_rewardTileStatic",
                      children: (t) =>
                          (0, r.jsx)("img", {
                              ref: t,
                              alt: m.r.build(a.config).defaultRewardName,
                              className: o()(v.questRewardTileAsset, v.questRewardTileAssetStatic),
                              src: x.url,
                              onLoad: e.onLoadComplete,
                          }),
                  })),
        null == T
            ? (0, r.jsx)("div", {
                  className: o()(v.questRewardTile, n),
                  style: N,
                  children: t,
              })
            : (0, r.jsxs)(c.P3F, {
                  className: o()(v.questRewardTileInteractive, v.questRewardTile, v.rewardHighlight, n),
                  onClick: j,
                  style: N,
                  children: [
                      t,
                      R &&
                          (0, r.jsx)(c.ZX5, {
                              className: v.shine,
                              shineSize: c.rHe.SMALL,
                              shinePaused: !w || D,
                          }),
                      "text" === T &&
                          (0, r.jsx)(c.Text, {
                              color: "always-white",
                              variant: "text-xs/normal",
                              className: v.questRewardTileDetailsLearnMore,
                              style: { fontSize: S },
                              children: O.intl.format(O.t.DYAleX, {}),
                          }),
                      "icon" === T &&
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
