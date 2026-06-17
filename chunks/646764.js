"use strict";
n.d(t, { A: () => M });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(323889),
    l = n(621466),
    u = n(17928),
    c = n(939249),
    d = n(834730),
    _ = n(885574),
    h = n(661531),
    f = n(775602),
    p = n(274670),
    E = n(144779),
    m = n(607470),
    g = n(287809),
    A = n(104886),
    I = n(551875),
    T = n(18437),
    S = n(590202),
    y = n(971649),
    C = n(801365),
    N = n(241124),
    v = n(415441),
    R = n(734736),
    O = n(617986),
    b = n(139384),
    D = n(190107),
    L = n(375708),
    w = n(1389);
let M = function (e) {
    let t,
        {
            className: n,
            quest: s,
            autoplay: M = !0,
            learnMoreStyle: P = null,
            learnMoreFontSize: x,
            sourceQuestContent: k,
            lazyLoad: U = !1,
            fullWidth: G = !1,
            style: F,
            orbTier: V,
        } = e,
        B = (0, T.Ut)(),
        j = (0, y.go)(),
        H = (0, u.bG)([f.Ay], () => f.Ay.useReducedMotion),
        Y = (0, u.bG)([g.default], () => g.default.getCurrentUser()),
        W = r.useMemo(
            () =>
                (0, C.ks)(s.config) && s.userStatus?.claimedAt != null
                    ? L.intl.formatToPlainString(L.t["nLXlh+"], {
                          orbAmount: s.userStatus?.orbQuantityClaimed ?? (0, C._Z)(s.config) ?? 0,
                      })
                    : (0, C.mq)(s.config, Y),
            [s.config, s.userStatus?.claimedAt, s.userStatus?.orbQuantityClaimed, Y],
        ),
        K = r.useMemo(() => (0, I.tW)(s, I.fY.REWARD, void 0, void 0, V), [s, V]),
        $ = r.useMemo(() => (0, I.tW)(s, I.fY.REWARD_IMAGE), [s]),
        z = r.useCallback(
            (t) => {
                (0, l.vq)(t.currentTarget, HTMLElement) && t.currentTarget.blur(),
                    (0, A.E5)(A.kI.STEP_2_CLICKED_INTERNAL, "quest_reward_tile")
                        ? (0, p.r)({
                              type: E.F.CLICK_INTERNAL,
                              adCreativeType: o.p.QUEST,
                              adCreativeId: s.id,
                              questContentCTA: S.Cy.REWARD_LEARN_MORE,
                              surfaceId: e.questContent,
                              sourceQuestContent: k,
                              impressionId: j,
                              questContentPosition: e.questContentPosition,
                          })
                        : B({
                              questId: s.id,
                              questContent: e.questContent,
                              questContentPosition: e.questContentPosition,
                              questContentCTA: S.Cy.REWARD_LEARN_MORE,
                              sourceQuestContent: k,
                          }),
                    (0, O.navigateToQuestHome)({ fromContent: e.questContent, questId: s.id }),
                    e.onClick?.(t);
            },
            [B, s.id, e, k, j],
        ),
        q = r.useRef(null),
        Z = r.useRef(M),
        X = (0, C.K9)(s.config);
    if (
        (r.useEffect(() => {
            if (null != q.current) {
                if (!K.isAnimated || H) {
                    (q.current.currentTime = 0), q.current.pause();
                    return;
                }
                M && !Z.current
                    ? q.current.play()
                    : !M && Z.current && ((q.current.currentTime = 0), q.current.pause()),
                    (Z.current = M);
            }
        }, [M, K, H]),
        (0, b.A)(q, D.rE.QUEST_HOME_DESKTOP),
        X)
    )
        t = (0, i.jsx)(N.Sn, {
            id: "QuestRewardTile_rewardTileNitro",
            children: (e) => (0, i.jsx)(R.A, { ref: e, className: w.eB }),
        });
    else if (U)
        t = (0, i.jsx)(v.N, {
            showVideo: M,
            imageAsset:
                null != $
                    ? {
                          asset: $,
                          assetId: "QuestRewardTile_rewardTileStatic",
                          className: w.XM,
                          alt: L.intl.string(L.t.UMclVN),
                      }
                    : void 0,
            videoAsset: { asset: K, assetId: "QuestRewardTile_rewardTileAnimated", className: a()(w.eB, w.WY) },
            onLoadComplete: e.onLoadComplete,
        });
    else if (K.isAnimated) {
        let n = (0, I.WV)(K.url);
        t = (0, i.jsx)(N.Sn, {
            id: "QuestRewardTile_rewardTileAnimated",
            children: (t) =>
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        null != n && (0, i.jsx)("img", { alt: L.intl.string(L.t.UMclVN), className: w.XM, src: n }),
                        (0, i.jsx)(m.A, {
                            ref: (e) => {
                                (t.current = e), (q.current = e);
                            },
                            autoPlay: !H && M,
                            loop: !0,
                            muted: !0,
                            playsInline: !0,
                            className: a()(w.eB, w.WY),
                            controls: !1,
                            onProgress: e.onLoadComplete,
                            children: (0, i.jsx)("source", { src: K.url, type: K.mimetype ?? void 0 }),
                        }),
                    ],
                }),
        });
    } else
        t = (0, i.jsx)(N.Sn, {
            id: "QuestRewardTile_rewardTileStatic",
            children: (t) =>
                (0, i.jsx)("img", { ref: t, alt: W, className: a()(w.eB, w.Qz), src: K.url, onLoad: e.onLoadComplete }),
        });
    return null == P
        ? (0, i.jsx)("div", { className: a()(w.al, n, { [w.Ij]: G }), style: F, children: t })
        : (0, i.jsxs)(c.D, {
              className: a()(w.a$, w.al, w.Yi, n, { [w.Ij]: G }),
              onClick: z,
              style: F,
              children: [
                  t,
                  "text" === P &&
                      (0, i.jsx)(d.E, {
                          color: "always-white",
                          variant: "text-xs/normal",
                          className: w.n_,
                          style: { fontSize: x },
                          children: L.intl.format(L.t.DYAleT, {}),
                      }),
                  "icon" === P &&
                      (0, i.jsx)("div", {
                          className: w.n_,
                          children: (0, i.jsx)(_.m, { size: "xxs", color: h.A.colors.WHITE.css }),
                      }),
              ],
          });
};
