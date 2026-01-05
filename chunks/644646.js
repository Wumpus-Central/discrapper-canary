n.d(t, { Z: () => O });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(374470),
    l = n(442837),
    c = n(481060),
    u = n(607070),
    d = n(70097),
    f = n(617136),
    p = n(475595),
    _ = n(115179),
    m = n(455357),
    h = n(18578),
    g = n(352084),
    E = n(110560),
    b = n(388032),
    y = n(998008);
let O = function (e) {
    let t,
        {
            className: n,
            quest: a,
            autoplay: O = !0,
            learnMoreStyle: v = null,
            learnMoreFontSize: S,
            sourceQuestContent: I,
            lazyLoad: T = !1,
            style: C,
        } = e,
        A = (0, f.O5)(),
        N = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
        P = i.useMemo(() => (0, p.fh)(a, p.eC.REWARD), [a]),
        R = i.useMemo(() => (0, p.fh)(a, p.eC.REWARD_IMAGE), [a]),
        w = i.useCallback(
            (t) => {
                var n;
                (0, s.kK)(t.currentTarget, HTMLElement) && t.currentTarget.blur(),
                    A({
                        questId: a.id,
                        questContent: e.questContent,
                        questContentPosition: e.questContentPosition,
                        questContentCTA: f.jZ.REWARD_LEARN_MORE,
                        sourceQuestContent: I,
                    }),
                    (0, E.navigateToQuestHome)({
                        fromContent: e.questContent,
                        questId: a.id,
                    }),
                    null == (n = e.onClick) || n.call(e, t);
            },
            [A, a.id, e, I],
        ),
        D = i.useRef(null),
        x = i.useRef(O),
        L = (0, _.Bg)(a.config);
    return (
        i.useEffect(() => {
            if (null != D.current) {
                if (!P.isAnimated || N) {
                    (D.current.currentTime = 0), D.current.pause();
                    return;
                }
                O && !x.current
                    ? D.current.play()
                    : !O && x.current && ((D.current.currentTime = 0), D.current.pause()),
                    (x.current = O);
            }
        }, [O, P, N]),
        (t = L
            ? (0, r.jsx)(m.Fl, {
                  id: "QuestRewardTile_rewardTileNitro",
                  children: (e) =>
                      (0, r.jsx)(g.Z, {
                          ref: e,
                          className: y.questRewardTileAsset,
                      }),
              })
            : T
              ? (0, r.jsx)(h.K, {
                    showVideo: O,
                    imageAsset:
                        null != R
                            ? {
                                  asset: R,
                                  assetId: "QuestRewardTile_rewardTileStatic",
                                  className: y.imageVideoOverlay,
                                  alt: b.intl.string(b.t.UMclVN),
                              }
                            : void 0,
                    videoAsset: {
                        asset: P,
                        assetId: "QuestRewardTile_rewardTileAnimated",
                        className: o()(y.questRewardTileAsset, y.questRewardTileAssetLazyVideo),
                    },
                    onLoadComplete: e.onLoadComplete,
                })
              : P.isAnimated
                ? (0, r.jsx)(m.Fl, {
                      id: "QuestRewardTile_rewardTileAnimated",
                      children: (t) => {
                          var n;
                          return (0, r.jsx)(d.Z, {
                              ref: (e) => {
                                  (t.current = e), (D.current = e);
                              },
                              autoPlay: !N && O,
                              loop: !0,
                              muted: !0,
                              playsInline: !0,
                              className: y.questRewardTileAsset,
                              controls: !1,
                              onProgress: e.onLoadComplete,
                              children: (0, r.jsx)("source", {
                                  src: P.url,
                                  type: null != (n = P.mimetype) ? n : void 0,
                              }),
                          });
                      },
                  })
                : (0, r.jsx)(m.Fl, {
                      id: "QuestRewardTile_rewardTileStatic",
                      children: (t) =>
                          (0, r.jsx)("img", {
                              ref: t,
                              alt: (0, _.w8)(a.config),
                              className: o()(y.questRewardTileAsset, y.questRewardTileAssetStatic),
                              src: P.url,
                              onLoad: e.onLoadComplete,
                          }),
                  })),
        null == v
            ? (0, r.jsx)("div", {
                  className: o()(y.questRewardTile, n),
                  style: C,
                  children: t,
              })
            : (0, r.jsxs)(c.P3F, {
                  className: o()(y.questRewardTileInteractive, y.questRewardTile, y.rewardHighlight, n),
                  onClick: w,
                  style: C,
                  children: [
                      t,
                      "text" === v &&
                          (0, r.jsx)(c.Text, {
                              color: "always-white",
                              variant: "text-xs/normal",
                              className: y.questRewardTileDetailsLearnMore,
                              style: { fontSize: S },
                              children: b.intl.format(b.t.DYAleT, {}),
                          }),
                      "icon" === v &&
                          (0, r.jsx)("div", {
                              className: y.questRewardTileDetailsLearnMore,
                              children: (0, r.jsx)(c.d3s, {
                                  size: "xxs",
                                  color: c.TVs.colors.WHITE.css,
                              }),
                          }),
                  ],
              })
    );
};
