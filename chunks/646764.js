"use strict";
n.d(t, { A: () => S });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(621466),
    l = n(311907),
    u = n(397927),
    c = n(775602),
    d = n(607470),
    _ = n(579473),
    f = n(18437),
    h = n(590202),
    p = n(92246),
    g = n(241124),
    E = n(415441),
    A = n(734736),
    I = n(545986),
    T = n(985018),
    y = n(773570);
let S = function (e) {
    let t,
        {
            className: n,
            quest: a,
            autoplay: S = !0,
            learnMoreStyle: v = null,
            learnMoreFontSize: C,
            sourceQuestContent: b,
            lazyLoad: N = !1,
            fullWidth: R = !1,
            style: O,
        } = e,
        D = (0, f.Ut)(),
        L = (0, l.bG)([c.A], () => c.A.useReducedMotion),
        w = i.useMemo(() => (0, _.tW)(a, _.fY.REWARD), [a]),
        x = i.useMemo(() => (0, _.tW)(a, _.fY.REWARD_IMAGE), [a]),
        P = i.useCallback(
            (t) => {
                (0, o.vq)(t.currentTarget, HTMLElement) && t.currentTarget.blur(),
                    D({
                        questId: a.id,
                        questContent: e.questContent,
                        questContentPosition: e.questContentPosition,
                        questContentCTA: h.Cy.REWARD_LEARN_MORE,
                        sourceQuestContent: b,
                    }),
                    (0, I.navigateToQuestHome)({ fromContent: e.questContent, questId: a.id }),
                    e.onClick?.(t);
            },
            [D, a.id, e, b],
        ),
        M = i.useRef(null),
        k = i.useRef(S),
        U = (0, p.K9)(a.config);
    return (
        i.useEffect(() => {
            if (null != M.current) {
                if (!w.isAnimated || L) {
                    (M.current.currentTime = 0), M.current.pause();
                    return;
                }
                S && !k.current
                    ? M.current.play()
                    : !S && k.current && ((M.current.currentTime = 0), M.current.pause()),
                    (k.current = S);
            }
        }, [S, w, L]),
        (t = U
            ? (0, r.jsx)(g.Sn, {
                  id: "QuestRewardTile_rewardTileNitro",
                  children: (e) => (0, r.jsx)(A.A, { ref: e, className: y.eB }),
              })
            : N
              ? (0, r.jsx)(E.N, {
                    showVideo: S,
                    imageAsset:
                        null != x
                            ? {
                                  asset: x,
                                  assetId: "QuestRewardTile_rewardTileStatic",
                                  className: y.XM,
                                  alt: T.intl.string(T.t.UMclVN),
                              }
                            : void 0,
                    videoAsset: { asset: w, assetId: "QuestRewardTile_rewardTileAnimated", className: s()(y.eB, y.tv) },
                    onLoadComplete: e.onLoadComplete,
                })
              : w.isAnimated
                ? (0, r.jsx)(g.Sn, {
                      id: "QuestRewardTile_rewardTileAnimated",
                      children: (t) =>
                          (0, r.jsx)(d.A, {
                              ref: (e) => {
                                  (t.current = e), (M.current = e);
                              },
                              autoPlay: !L && S,
                              loop: !0,
                              muted: !0,
                              playsInline: !0,
                              className: y.eB,
                              controls: !1,
                              onProgress: e.onLoadComplete,
                              children: (0, r.jsx)("source", { src: w.url, type: w.mimetype ?? void 0 }),
                          }),
                  })
                : (0, r.jsx)(g.Sn, {
                      id: "QuestRewardTile_rewardTileStatic",
                      children: (t) =>
                          (0, r.jsx)("img", {
                              ref: t,
                              alt: (0, p.mq)(a.config),
                              className: s()(y.eB, y.Qz),
                              src: w.url,
                              onLoad: e.onLoadComplete,
                          }),
                  })),
        null == v
            ? (0, r.jsx)("div", { className: s()(y.al, n, { [y.Ij]: R }), style: O, children: t })
            : (0, r.jsxs)(u.DUT, {
                  className: s()(y.a$, y.al, y.Yi, n, { [y.Ij]: R }),
                  onClick: P,
                  style: O,
                  children: [
                      t,
                      "text" === v &&
                          (0, r.jsx)(u.Text, {
                              color: "always-white",
                              variant: "text-xs/normal",
                              className: y.n_,
                              style: { fontSize: C },
                              children: T.intl.format(T.t.DYAleT, {}),
                          }),
                      "icon" === v &&
                          (0, r.jsx)("div", {
                              className: y.n_,
                              children: (0, r.jsx)(u.mir, { size: "xxs", color: u.LU0.colors.WHITE.css }),
                          }),
                  ],
              })
    );
};
