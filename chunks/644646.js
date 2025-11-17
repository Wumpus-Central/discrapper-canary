n.d(t, { Z: () => S });
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
    _ = n(617136),
    p = n(509212),
    h = n(132581),
    m = n(475595),
    g = n(566078),
    E = n(18578),
    b = n(352084),
    y = n(110560),
    O = n(78826),
    v = n(388032),
    I = n(858191);
function T(e) {
    let { appFocused: t, location: n } = e,
        { shouldUseShine: i } = h.Z.useConfig({ location: n });
    return i
        ? (0, r.jsx)(c.ZX5, {
              "data-migration-pending": !0,
              className: I.shine,
              shineSize: c.rHe.SMALL,
              shinePaused: !t,
          })
        : null;
}
let S = function (e) {
    let t,
        {
            className: n,
            quest: a,
            autoplay: h = !0,
            learnMoreStyle: S = null,
            learnMoreFontSize: A,
            sourceQuestContent: C,
            lazyLoad: N = !1,
            style: R,
            showShine: P = !0,
            location: D,
        } = e,
        w = (0, _.O5)(),
        x = (0, l.e7)([f.Z], () => f.Z.isFocused()),
        L = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
        M = i.useMemo(() => (0, m.fh)(a, m.eC.REWARD), [a]),
        k = i.useMemo(() => (0, m.fh)(a, m.eC.REWARD_IMAGE), [a]),
        j = i.useCallback(
            (t) => {
                var n;
                (0, s.kK)(t.currentTarget, HTMLElement) && t.currentTarget.blur(),
                    w({
                        questId: a.id,
                        questContent: e.questContent,
                        questContentPosition: e.questContentPosition,
                        questContentCTA: _.jZ.REWARD_LEARN_MORE,
                        sourceQuestContent: C,
                    }),
                    (0, y.navigateToQuestHome)({
                        fromContent: e.questContent,
                        questId: a.id,
                    }),
                    null == (n = e.onClick) || n.call(e, t);
            },
            [w, a.id, e, C],
        ),
        U = i.useRef(null),
        G = i.useRef(h),
        B = (0, p.Bg)(a.config);
    return (
        i.useEffect(() => {
            if (null != U.current) {
                if (!M.isAnimated || L) {
                    (U.current.currentTime = 0), U.current.pause();
                    return;
                }
                h && !G.current
                    ? U.current.play()
                    : !h && G.current && ((U.current.currentTime = 0), U.current.pause()),
                    (G.current = h);
            }
        }, [h, M, L]),
        (t = B
            ? (0, r.jsx)(O.Fl, {
                  id: "QuestRewardTile_rewardTileNitro",
                  children: (e) =>
                      (0, r.jsx)(b.Z, {
                          ref: e,
                          className: I.questRewardTileAsset,
                      }),
              })
            : N
              ? (0, r.jsx)(E.K, {
                    showVideo: h,
                    imageAsset:
                        null != k
                            ? {
                                  asset: k,
                                  assetId: "QuestRewardTile_rewardTileStatic",
                                  className: I.imageVideoOverlay,
                                  alt: v.intl.string(v.t.UMclVN),
                              }
                            : void 0,
                    videoAsset: {
                        asset: M,
                        assetId: "QuestRewardTile_rewardTileAnimated",
                        className: o()(I.questRewardTileAsset, I.questRewardTileAssetLazyVideo),
                    },
                    onLoadComplete: e.onLoadComplete,
                })
              : M.isAnimated
                ? (0, r.jsx)(O.Fl, {
                      id: "QuestRewardTile_rewardTileAnimated",
                      children: (t) => {
                          var n;
                          return (0, r.jsx)(d.Z, {
                              ref: (e) => {
                                  (t.current = e), (U.current = e);
                              },
                              autoPlay: !L && h,
                              loop: !0,
                              muted: !0,
                              playsInline: !0,
                              className: I.questRewardTileAsset,
                              controls: !1,
                              onProgress: e.onLoadComplete,
                              children: (0, r.jsx)("source", {
                                  src: M.url,
                                  type: null != (n = M.mimetype) ? n : void 0,
                              }),
                          });
                      },
                  })
                : (0, r.jsx)(O.Fl, {
                      id: "QuestRewardTile_rewardTileStatic",
                      children: (t) =>
                          (0, r.jsx)("img", {
                              ref: t,
                              alt: g.r.build(a.config).defaultRewardName,
                              className: o()(I.questRewardTileAsset, I.questRewardTileAssetStatic),
                              src: M.url,
                              onLoad: e.onLoadComplete,
                          }),
                  })),
        null == S
            ? (0, r.jsx)("div", {
                  className: o()(I.questRewardTile, n),
                  style: R,
                  children: t,
              })
            : (0, r.jsxs)(c.P3F, {
                  className: o()(I.questRewardTileInteractive, I.questRewardTile, I.rewardHighlight, n),
                  onClick: j,
                  style: R,
                  children: [
                      t,
                      P &&
                          !L &&
                          (0, r.jsx)(T, {
                              appFocused: x,
                              location: D,
                          }),
                      "text" === S &&
                          (0, r.jsx)(c.Text, {
                              color: "always-white",
                              variant: "text-xs/normal",
                              className: I.questRewardTileDetailsLearnMore,
                              style: { fontSize: A },
                              children: v.intl.format(v.t.DYAleT, {}),
                          }),
                      "icon" === S &&
                          (0, r.jsx)("div", {
                              className: I.questRewardTileDetailsLearnMore,
                              children: (0, r.jsx)(c.d3s, {
                                  size: "xxs",
                                  color: c.TVs.colors.WHITE.css,
                              }),
                          }),
                  ],
              })
    );
};
