"use strict";
n.d(t, { A: () => y });
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
    p = n(590202),
    h = n(92246),
    m = n(241124),
    g = n(415441),
    E = n(734736),
    A = n(545986),
    I = n(985018),
    T = n(773570);
let y = function (e) {
    let t,
        {
            className: n,
            quest: a,
            autoplay: y = !0,
            learnMoreStyle: S = null,
            learnMoreFontSize: v,
            sourceQuestContent: C,
            lazyLoad: b = !1,
            style: N,
        } = e,
        R = (0, f.Ut)(),
        O = (0, l.bG)([c.A], () => c.A.useReducedMotion),
        D = i.useMemo(() => (0, _.tW)(a, _.fY.REWARD), [a]),
        L = i.useMemo(() => (0, _.tW)(a, _.fY.REWARD_IMAGE), [a]),
        w = i.useCallback(
            (t) => {
                (0, o.vq)(t.currentTarget, HTMLElement) && t.currentTarget.blur(),
                    R({
                        questId: a.id,
                        questContent: e.questContent,
                        questContentPosition: e.questContentPosition,
                        questContentCTA: p.Cy.REWARD_LEARN_MORE,
                        sourceQuestContent: C,
                    }),
                    (0, A.navigateToQuestHome)({ fromContent: e.questContent, questId: a.id }),
                    e.onClick?.(t);
            },
            [R, a.id, e, C],
        ),
        x = i.useRef(null),
        P = i.useRef(y),
        M = (0, h.K9)(a.config);
    return (
        i.useEffect(() => {
            if (null != x.current) {
                if (!D.isAnimated || O) {
                    (x.current.currentTime = 0), x.current.pause();
                    return;
                }
                y && !P.current
                    ? x.current.play()
                    : !y && P.current && ((x.current.currentTime = 0), x.current.pause()),
                    (P.current = y);
            }
        }, [y, D, O]),
        (t = M
            ? (0, r.jsx)(m.Sn, {
                  id: "QuestRewardTile_rewardTileNitro",
                  children: (e) => (0, r.jsx)(E.A, { ref: e, className: T.eB }),
              })
            : b
              ? (0, r.jsx)(g.N, {
                    showVideo: y,
                    imageAsset:
                        null != L
                            ? {
                                  asset: L,
                                  assetId: "QuestRewardTile_rewardTileStatic",
                                  className: T.XM,
                                  alt: I.intl.string(I.t.UMclVN),
                              }
                            : void 0,
                    videoAsset: { asset: D, assetId: "QuestRewardTile_rewardTileAnimated", className: s()(T.eB, T.tv) },
                    onLoadComplete: e.onLoadComplete,
                })
              : D.isAnimated
                ? (0, r.jsx)(m.Sn, {
                      id: "QuestRewardTile_rewardTileAnimated",
                      children: (t) =>
                          (0, r.jsx)(d.A, {
                              ref: (e) => {
                                  (t.current = e), (x.current = e);
                              },
                              autoPlay: !O && y,
                              loop: !0,
                              muted: !0,
                              playsInline: !0,
                              className: T.eB,
                              controls: !1,
                              onProgress: e.onLoadComplete,
                              children: (0, r.jsx)("source", { src: D.url, type: D.mimetype ?? void 0 }),
                          }),
                  })
                : (0, r.jsx)(m.Sn, {
                      id: "QuestRewardTile_rewardTileStatic",
                      children: (t) =>
                          (0, r.jsx)("img", {
                              ref: t,
                              alt: (0, h.mq)(a.config),
                              className: s()(T.eB, T.Qz),
                              src: D.url,
                              onLoad: e.onLoadComplete,
                          }),
                  })),
        null == S
            ? (0, r.jsx)("div", { className: s()(T.al, n), style: N, children: t })
            : (0, r.jsxs)(u.DUT, {
                  className: s()(T.a$, T.al, T.Yi, n),
                  onClick: w,
                  style: N,
                  children: [
                      t,
                      "text" === S &&
                          (0, r.jsx)(u.Text, {
                              color: "always-white",
                              variant: "text-xs/normal",
                              className: T.n_,
                              style: { fontSize: v },
                              children: I.intl.format(I.t.DYAleT, {}),
                          }),
                      "icon" === S &&
                          (0, r.jsx)("div", {
                              className: T.n_,
                              children: (0, r.jsx)(u.mir, { size: "xxs", color: u.LU0.colors.WHITE.css }),
                          }),
                  ],
              })
    );
};
