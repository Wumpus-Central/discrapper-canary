n.d(t, { Z: () => T });
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
    g = n(18578),
    E = n(352084),
    b = n(110560),
    y = n(78826),
    O = n(388032),
    v = n(858191);
function I(e) {
    let { appFocused: t, location: n } = e,
        { shouldUseShine: i } = h.Z.useConfig({ location: n });
    return i
        ? (0, r.jsx)(c.ZX5, {
              "data-migration-pending": !0,
              className: v.shine,
              shineSize: c.rHe.SMALL,
              shinePaused: !t,
          })
        : null;
}
let T = function (e) {
    let t,
        {
            className: n,
            quest: a,
            autoplay: h = !0,
            learnMoreStyle: T = null,
            learnMoreFontSize: S,
            sourceQuestContent: A,
            lazyLoad: C = !1,
            style: N,
            showShine: R = !0,
            location: P,
        } = e,
        D = (0, _.O5)(),
        w = (0, l.e7)([f.Z], () => f.Z.isFocused()),
        L = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
        x = i.useMemo(() => (0, m.fh)(a, m.eC.REWARD), [a]),
        M = i.useMemo(() => (0, m.fh)(a, m.eC.REWARD_IMAGE), [a]),
        k = i.useCallback(
            (t) => {
                var n;
                (0, s.kK)(t.currentTarget, HTMLElement) && t.currentTarget.blur(),
                    D({
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
            [D, a.id, e, A],
        ),
        j = i.useRef(null),
        U = i.useRef(h),
        G = (0, p.Bg)(a.config);
    return (
        i.useEffect(() => {
            if (null != j.current) {
                if (!x.isAnimated || L) {
                    (j.current.currentTime = 0), j.current.pause();
                    return;
                }
                h && !U.current
                    ? j.current.play()
                    : !h && U.current && ((j.current.currentTime = 0), j.current.pause()),
                    (U.current = h);
            }
        }, [h, x, L]),
        (t = G
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
                    showVideo: h,
                    imageAsset:
                        null != M
                            ? {
                                  asset: M,
                                  assetId: "QuestRewardTile_rewardTileStatic",
                                  className: v.imageVideoOverlay,
                                  alt: O.intl.string(O.t.UMclVN),
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
                                  (t.current = e), (j.current = e);
                              },
                              autoPlay: !L && h,
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
                              alt: (0, p.w8)(a.config),
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
                  onClick: k,
                  style: N,
                  children: [
                      t,
                      R &&
                          !L &&
                          (0, r.jsx)(I, {
                              appFocused: w,
                              location: P,
                          }),
                      "text" === T &&
                          (0, r.jsx)(c.Text, {
                              color: "always-white",
                              variant: "text-xs/normal",
                              className: v.questRewardTileDetailsLearnMore,
                              style: { fontSize: S },
                              children: O.intl.format(O.t.DYAleT, {}),
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
