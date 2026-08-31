s.d(t, { A: () => L });
var r = s(477900),
    n = s(582128),
    i = s(503698),
    l = s.n(i),
    a = s(323889),
    o = s(621466),
    u = s(17928),
    c = s(939249),
    d = s(834730),
    m = s(885574),
    f = s(661531),
    C = s(775602),
    A = s(274670),
    T = s(144779),
    R = s(607470),
    _ = s(287809),
    x = s(104886),
    N = s(291749),
    p = s(18437),
    E = s(590202),
    h = s(971649),
    g = s(801365),
    j = s(557637),
    y = s(415441),
    I = s(734736),
    v = s(617986),
    q = s(139384),
    w = s(375708),
    M = s(632036);
let L = function (e) {
    let t,
        {
            className: s,
            quest: i,
            autoplay: L = !0,
            learnMoreStyle: b = null,
            learnMoreFontSize: Q,
            sourceQuestContent: S,
            lazyLoad: W = !1,
            fullWidth: k = !1,
            style: P,
            orbTier: D,
        } = e,
        V = (0, p.Ut)(),
        Y = (0, h.go)(),
        U = (0, u.bG)([C.Ay], () => C.Ay.useReducedMotion),
        z = (0, u.bG)([_.default], () => _.default.getCurrentUser()),
        B = n.useMemo(
            () =>
                (0, g.ks)(i.config) && i.userStatus?.claimedAt != null
                    ? w.intl.formatToPlainString(w.t["nLXlh+"], {
                          orbAmount: i.userStatus?.orbQuantityClaimed ?? (0, g._Z)(i.config) ?? 0,
                      })
                    : (0, g.mq)(i.config, z),
            [i.config, i.userStatus?.claimedAt, i.userStatus?.orbQuantityClaimed, z],
        ),
        G = n.useMemo(() => (0, N.tW)(i, N.fY.REWARD, void 0, void 0, D), [i, D]),
        H = n.useMemo(() => (0, N.tW)(i, N.fY.REWARD_IMAGE), [i]),
        K = n.useCallback(
            (t) => {
                (0, o.vq)(t.currentTarget, HTMLElement) && t.currentTarget.blur(),
                    (0, x.E5)(x.kI.STEP_2_CLICKED_INTERNAL, "quest_reward_tile")
                        ? (0, A.r)({
                              type: T.F.CLICK_INTERNAL,
                              adCreativeType: a.p.QUEST,
                              adCreativeId: i.id,
                              questContentCTA: E.Cy.REWARD_LEARN_MORE,
                              surfaceId: e.questContent,
                              sourceQuestContent: S,
                              impressionId: Y,
                              questContentPosition: e.questContentPosition,
                          })
                        : V({
                              questId: i.id,
                              questContent: e.questContent,
                              questContentPosition: e.questContentPosition,
                              questContentCTA: E.Cy.REWARD_LEARN_MORE,
                              sourceQuestContent: S,
                          }),
                    (0, v.mA)({ fromContent: e.questContent, questId: i.id }),
                    e.onClick?.(t);
            },
            [V, i.id, e, S, Y],
        ),
        X = n.useRef(null),
        F = n.useRef(L),
        O = (0, g.K9)(i.config);
    if (
        (n.useEffect(() => {
            if (null != X.current) {
                if (!G.isAnimated || U) {
                    (X.current.currentTime = 0), X.current.pause();
                    return;
                }
                L && !F.current
                    ? X.current.play()
                    : !L && F.current && ((X.current.currentTime = 0), X.current.pause()),
                    (F.current = L);
            }
        }, [L, G, U]),
        (0, q.A)(X),
        O)
    )
        t = (0, r.jsx)(j._M, {
            id: "QuestRewardTile_rewardTileNitro",
            children: (e) => (0, r.jsx)(I.A, { ref: e, className: M.eB }),
        });
    else if (W)
        t = (0, r.jsx)(y.N, {
            showVideo: L,
            imageAsset:
                null != H
                    ? {
                          asset: H,
                          assetId: "QuestRewardTile_rewardTileStatic",
                          className: M.XM,
                          alt: w.intl.string(w.t.UMclVN),
                      }
                    : void 0,
            videoAsset: { asset: G, assetId: "QuestRewardTile_rewardTileAnimated", className: l()(M.eB, M.WY) },
            onLoadComplete: e.onLoadComplete,
        });
    else if (G.isAnimated) {
        let s = (0, N.WV)(G.url);
        t = (0, r.jsx)(j._M, {
            id: "QuestRewardTile_rewardTileAnimated",
            children: (t) =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        null != s && (0, r.jsx)("img", { alt: w.intl.string(w.t.UMclVN), className: M.XM, src: s }),
                        (0, r.jsx)(R.A, {
                            ref: (e) => {
                                (t.current = e), (X.current = e);
                            },
                            autoPlay: !U && L,
                            loop: !0,
                            muted: !0,
                            playsInline: !0,
                            className: l()(M.eB, M.WY),
                            controls: !1,
                            onProgress: e.onLoadComplete,
                            children: (0, r.jsx)("source", { src: G.url, type: G.mimetype ?? void 0 }),
                        }),
                    ],
                }),
        });
    } else
        t = (0, r.jsx)(j._M, {
            id: "QuestRewardTile_rewardTileStatic",
            children: (t) =>
                (0, r.jsx)("img", { ref: t, alt: B, className: l()(M.eB, M.Qz), src: G.url, onLoad: e.onLoadComplete }),
        });
    return null == b
        ? (0, r.jsx)("div", { className: l()(M.al, s, { [M.Ij]: k }), style: P, children: t })
        : (0, r.jsxs)(c.D, {
              className: l()(M.a$, M.al, M.Yi, s, { [M.Ij]: k }),
              onClick: K,
              style: P,
              children: [
                  t,
                  "text" === b &&
                      (0, r.jsx)(d.E, {
                          color: "text-overlay-light",
                          variant: "text-xs/normal",
                          className: M.n_,
                          style: { fontSize: Q },
                          children: w.intl.format(w.t.DYAleT, {}),
                      }),
                  "icon" === b &&
                      (0, r.jsx)("div", {
                          className: M.n_,
                          children: (0, r.jsx)(m.CircleInformationIcon, { size: "xxs", color: f.A.colors.WHITE.css }),
                      }),
              ],
          });
};
