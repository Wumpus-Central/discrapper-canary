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
            sourceQuestContent: S,
            lazyLoad: A = !1,
        } = e,
        C = (0, _.O5)(),
        N = (0, l.e7)([f.Z], () => f.Z.isFocused()),
        R = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
        P = i.useMemo(() => (0, h.fh)(a, h.eC.REWARD), [a]),
        w = i.useMemo(() => (0, h.fh)(a, h.eC.REWARD_IMAGE), [a]),
        D = i.useCallback(
            (t) => {
                var n;
                (0, s.k)(t.currentTarget, HTMLElement) && t.currentTarget.blur(),
                    C({
                        questId: a.id,
                        questContent: e.questContent,
                        questContentPosition: e.questContentPosition,
                        questContentCTA: _.jZ.REWARD_LEARN_MORE,
                        sourceQuestContent: S,
                    }),
                    (0, b.navigateToQuestHome)({
                        fromContent: e.questContent,
                        questId: a.id,
                    }),
                    null == (n = e.onClick) || n.call(e, t);
            },
            [C, a.id, e, S],
        ),
        x = i.useRef(null),
        L = i.useRef(I),
        j = (0, p.Bg)(a.config);
    return (
        i.useEffect(() => {
            if (null != x.current) {
                if (!P.isAnimated || R) {
                    (x.current.currentTime = 0), x.current.pause();
                    return;
                }
                I && !L.current
                    ? x.current.play()
                    : !I && L.current && ((x.current.currentTime = 0), x.current.pause()),
                    (L.current = I);
            }
        }, [I, P, R]),
        (t = j
            ? (0, r.jsx)(y.Fl, {
                  id: "QuestRewardTile_rewardTileNitro",
                  children: (e) =>
                      (0, r.jsx)(E.Z, {
                          ref: e,
                          className: v.questRewardTileAsset,
                      }),
              })
            : A
              ? (0, r.jsx)(g.K, {
                    imageAsset:
                        null != w
                            ? {
                                  asset: w,
                                  assetId: "QuestRewardTile_rewardTileStatic",
                                  className: v.imageVideoOverlay,
                                  alt: O.intl.string(O.t.UMclVF),
                              }
                            : void 0,
                    videoAsset: {
                        asset: P,
                        assetId: "QuestRewardTile_rewardTileAnimated",
                        className: o()(v.questRewardTileAsset, v.questRewardTileAssetLazyVideo),
                    },
                    videoActive: I,
                    onLoadComplete: e.onLoadComplete,
                })
              : P.isAnimated
                ? (0, r.jsx)(y.Fl, {
                      id: "QuestRewardTile_rewardTileAnimated",
                      children: (t) => {
                          var n;
                          return (0, r.jsx)(d.Z, {
                              ref: (e) => {
                                  (t.current = e), (x.current = e);
                              },
                              autoPlay: !R && I,
                              loop: !0,
                              muted: !0,
                              playsInline: !0,
                              className: v.questRewardTileAsset,
                              controls: !1,
                              onProgress: e.onLoadComplete,
                              children: (0, r.jsx)("source", {
                                  src: P.url,
                                  type: null != (n = P.mimetype) ? n : void 0,
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
                              src: P.url,
                              onLoad: e.onLoadComplete,
                          }),
                  })),
        null == T
            ? (0, r.jsx)("div", {
                  className: o()(v.questRewardTile, n),
                  children: t,
              })
            : (0, r.jsxs)(c.P3F, {
                  className: o()(v.questRewardTileInteractive, v.questRewardTile, v.rewardHighlight, n),
                  onClick: D,
                  children: [
                      t,
                      (0, r.jsx)(c.ZX5, {
                          className: v.shine,
                          shineSize: c.rHe.SMALL,
                          shinePaused: !N || R,
                      }),
                      "text" === T &&
                          (0, r.jsx)(c.Text, {
                              color: "always-white",
                              variant: "text-xs/normal",
                              className: v.questRewardTileDetailsLearnMore,
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
