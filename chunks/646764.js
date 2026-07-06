s.d(t, { A: () => S });
var r = s(627968),
    n = s(64700),
    i = s(503698),
    l = s.n(i),
    a = s(323889),
    u = s(621466),
    o = s(17928),
    c = s(939249),
    d = s(834730),
    m = s(885574),
    f = s(661531),
    C = s(775602),
    A = s(274670),
    T = s(144779),
    _ = s(607470),
    E = s(287809),
    R = s(104886),
    x = s(46948),
    N = s(18437),
    p = s(590202),
    g = s(971649),
    h = s(801365),
    j = s(557637),
    y = s(415441),
    v = s(734736),
    M = s(617986),
    q = s(139384),
    w = s(190107),
    I = s(375708),
    L = s(369453);
let S = function (e) {
    let t,
        {
            className: s,
            quest: i,
            autoplay: S = !0,
            learnMoreStyle: b = null,
            learnMoreFontSize: Q,
            sourceQuestContent: W,
            lazyLoad: k = !1,
            fullWidth: P = !1,
            style: D,
            orbTier: U,
        } = e,
        V = (0, N.Ut)(),
        Y = (0, g.go)(),
        z = (0, o.bG)([C.Ay], () => C.Ay.useReducedMotion),
        B = (0, o.bG)([E.default], () => E.default.getCurrentUser()),
        G = n.useMemo(
            () =>
                (0, h.ks)(i.config) && i.userStatus?.claimedAt != null
                    ? I.intl.formatToPlainString(I.t["nLXlh+"], {
                          orbAmount: i.userStatus?.orbQuantityClaimed ?? (0, h._Z)(i.config) ?? 0,
                      })
                    : (0, h.mq)(i.config, B),
            [i.config, i.userStatus?.claimedAt, i.userStatus?.orbQuantityClaimed, B],
        ),
        H = n.useMemo(() => (0, x.tW)(i, x.fY.REWARD, void 0, void 0, U), [i, U]),
        K = n.useMemo(() => (0, x.tW)(i, x.fY.REWARD_IMAGE), [i]),
        O = n.useCallback(
            (t) => {
                (0, u.vq)(t.currentTarget, HTMLElement) && t.currentTarget.blur(),
                    (0, R.E5)(R.kI.STEP_2_CLICKED_INTERNAL, "quest_reward_tile")
                        ? (0, A.r)({
                              type: T.F.CLICK_INTERNAL,
                              adCreativeType: a.p.QUEST,
                              adCreativeId: i.id,
                              questContentCTA: p.Cy.REWARD_LEARN_MORE,
                              surfaceId: e.questContent,
                              sourceQuestContent: W,
                              impressionId: Y,
                              questContentPosition: e.questContentPosition,
                          })
                        : V({
                              questId: i.id,
                              questContent: e.questContent,
                              questContentPosition: e.questContentPosition,
                              questContentCTA: p.Cy.REWARD_LEARN_MORE,
                              sourceQuestContent: W,
                          }),
                    (0, M.mA)({ fromContent: e.questContent, questId: i.id }),
                    e.onClick?.(t);
            },
            [V, i.id, e, W, Y],
        ),
        X = n.useRef(null),
        F = n.useRef(S),
        Z = (0, h.K9)(i.config);
    if (
        (n.useEffect(() => {
            if (null != X.current) {
                if (!H.isAnimated || z) {
                    (X.current.currentTime = 0), X.current.pause();
                    return;
                }
                S && !F.current
                    ? X.current.play()
                    : !S && F.current && ((X.current.currentTime = 0), X.current.pause()),
                    (F.current = S);
            }
        }, [S, H, z]),
        (0, q.A)(X, w.rE.QUEST_HOME_DESKTOP),
        Z)
    )
        t = (0, r.jsx)(j._M, {
            id: "QuestRewardTile_rewardTileNitro",
            children: (e) => (0, r.jsx)(v.A, { ref: e, className: L.eB }),
        });
    else if (k)
        t = (0, r.jsx)(y.N, {
            showVideo: S,
            imageAsset:
                null != K
                    ? {
                          asset: K,
                          assetId: "QuestRewardTile_rewardTileStatic",
                          className: L.XM,
                          alt: I.intl.string(I.t.UMclVN),
                      }
                    : void 0,
            videoAsset: { asset: H, assetId: "QuestRewardTile_rewardTileAnimated", className: l()(L.eB, L.WY) },
            onLoadComplete: e.onLoadComplete,
        });
    else if (H.isAnimated) {
        let s = (0, x.WV)(H.url);
        t = (0, r.jsx)(j._M, {
            id: "QuestRewardTile_rewardTileAnimated",
            children: (t) =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        null != s && (0, r.jsx)("img", { alt: I.intl.string(I.t.UMclVN), className: L.XM, src: s }),
                        (0, r.jsx)(_.A, {
                            ref: (e) => {
                                (t.current = e), (X.current = e);
                            },
                            autoPlay: !z && S,
                            loop: !0,
                            muted: !0,
                            playsInline: !0,
                            className: l()(L.eB, L.WY),
                            controls: !1,
                            onProgress: e.onLoadComplete,
                            children: (0, r.jsx)("source", { src: H.url, type: H.mimetype ?? void 0 }),
                        }),
                    ],
                }),
        });
    } else
        t = (0, r.jsx)(j._M, {
            id: "QuestRewardTile_rewardTileStatic",
            children: (t) =>
                (0, r.jsx)("img", { ref: t, alt: G, className: l()(L.eB, L.Qz), src: H.url, onLoad: e.onLoadComplete }),
        });
    return null == b
        ? (0, r.jsx)("div", { className: l()(L.al, s, { [L.Ij]: P }), style: D, children: t })
        : (0, r.jsxs)(c.D, {
              className: l()(L.a$, L.al, L.Yi, s, { [L.Ij]: P }),
              onClick: O,
              style: D,
              children: [
                  t,
                  "text" === b &&
                      (0, r.jsx)(d.E, {
                          color: "text-overlay-light",
                          variant: "text-xs/normal",
                          className: L.n_,
                          style: { fontSize: Q },
                          children: I.intl.format(I.t.DYAleT, {}),
                      }),
                  "icon" === b &&
                      (0, r.jsx)("div", {
                          className: L.n_,
                          children: (0, r.jsx)(m.m, { size: "xxs", color: f.A.colors.WHITE.css }),
                      }),
              ],
          });
};
