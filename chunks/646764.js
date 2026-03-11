"use strict";
n.d(t, { A: () => v });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(621466),
    l = n(311907),
    u = n(397927),
    c = n(775602),
    d = n(607470),
    _ = n(579473),
    f = n(18437),
    p = n(590202),
    h = n(92246),
    m = n(241124),
    E = n(415441),
    g = n(734736),
    A = n(545986),
    I = n(139384),
    T = n(654487),
    S = n(985018),
    y = n(773570);
let v = function (e) {
    let t,
        {
            className: n,
            quest: s,
            autoplay: v = !0,
            learnMoreStyle: N = null,
            learnMoreFontSize: C,
            sourceQuestContent: R,
            lazyLoad: O = !1,
            fullWidth: b = !1,
            style: D,
        } = e,
        L = (0, f.Ut)(),
        w = (0, l.bG)([c.A], () => c.A.useReducedMotion),
        M = i.useMemo(() => (0, _.tW)(s, _.fY.REWARD), [s]),
        x = i.useMemo(() => (0, _.tW)(s, _.fY.REWARD_IMAGE), [s]),
        P = i.useCallback(
            (t) => {
                (0, o.vq)(t.currentTarget, HTMLElement) && t.currentTarget.blur(),
                    L({
                        questId: s.id,
                        questContent: e.questContent,
                        questContentPosition: e.questContentPosition,
                        questContentCTA: p.Cy.REWARD_LEARN_MORE,
                        sourceQuestContent: R,
                    }),
                    (0, A.navigateToQuestHome)({ fromContent: e.questContent, questId: s.id }),
                    e.onClick?.(t);
            },
            [L, s.id, e, R],
        ),
        k = i.useRef(null),
        U = i.useRef(v),
        G = (0, h.K9)(s.config);
    return (
        i.useEffect(() => {
            if (null != k.current) {
                if (!M.isAnimated || w) {
                    (k.current.currentTime = 0), k.current.pause();
                    return;
                }
                v && !U.current
                    ? k.current.play()
                    : !v && U.current && ((k.current.currentTime = 0), k.current.pause()),
                    (U.current = v);
            }
        }, [v, M, w]),
        (0, I.A)(k, T.rE.QUEST_HOME_DESKTOP),
        (t = G
            ? (0, r.jsx)(m.Sn, {
                  id: "QuestRewardTile_rewardTileNitro",
                  children: (e) => (0, r.jsx)(g.A, { ref: e, className: y.eB }),
              })
            : O
              ? (0, r.jsx)(E.N, {
                    showVideo: v,
                    imageAsset:
                        null != x
                            ? {
                                  asset: x,
                                  assetId: "QuestRewardTile_rewardTileStatic",
                                  className: y.XM,
                                  alt: S.intl.string(S.t.UMclVN),
                              }
                            : void 0,
                    videoAsset: { asset: M, assetId: "QuestRewardTile_rewardTileAnimated", className: a()(y.eB, y.tv) },
                    onLoadComplete: e.onLoadComplete,
                })
              : M.isAnimated
                ? (0, r.jsx)(m.Sn, {
                      id: "QuestRewardTile_rewardTileAnimated",
                      children: (t) =>
                          (0, r.jsx)(d.A, {
                              ref: (e) => {
                                  (t.current = e), (k.current = e);
                              },
                              autoPlay: !w && v,
                              loop: !0,
                              muted: !0,
                              playsInline: !0,
                              className: y.eB,
                              controls: !1,
                              onProgress: e.onLoadComplete,
                              children: (0, r.jsx)("source", { src: M.url, type: M.mimetype ?? void 0 }),
                          }),
                  })
                : (0, r.jsx)(m.Sn, {
                      id: "QuestRewardTile_rewardTileStatic",
                      children: (t) =>
                          (0, r.jsx)("img", {
                              ref: t,
                              alt: (0, h.mq)(s.config),
                              className: a()(y.eB, y.Qz),
                              src: M.url,
                              onLoad: e.onLoadComplete,
                          }),
                  })),
        null == N
            ? (0, r.jsx)("div", { className: a()(y.al, n, { [y.Ij]: b }), style: D, children: t })
            : (0, r.jsxs)(u.DUT, {
                  className: a()(y.a$, y.al, y.Yi, n, { [y.Ij]: b }),
                  onClick: P,
                  style: D,
                  children: [
                      t,
                      "text" === N &&
                          (0, r.jsx)(u.Text, {
                              color: "always-white",
                              variant: "text-xs/normal",
                              className: y.n_,
                              style: { fontSize: C },
                              children: S.intl.format(S.t.DYAleT, {}),
                          }),
                      "icon" === N &&
                          (0, r.jsx)("div", {
                              className: y.n_,
                              children: (0, r.jsx)(u.mir, { size: "xxs", color: u.LU0.colors.WHITE.css }),
                          }),
                  ],
              })
    );
};
