s.d(t, { A: () => b });
var r = s(477900),
    n = s(582128),
    i = s(503698),
    l = s.n(i),
    a = s(323889),
    u = s(621466),
    o = s(17928),
    c = s(939249),
    d = s(834730),
    m = s(885574),
    f = s(661531),
    _ = s(775602),
    A = s(274670),
    C = s(144779),
    T = s(607470),
    R = s(287809),
    I = s(104886),
    E = s(192444),
    x = s(291749),
    N = s(426110),
    g = s(18437),
    p = s(590202),
    h = s(971649),
    v = s(801365),
    L = s(557637),
    j = s(415441),
    y = s(734736),
    w = s(617986),
    S = s(139384),
    q = s(660183),
    M = s(632036);
let b = function (e) {
    let t,
        {
            className: s,
            quest: i,
            autoplay: b = !0,
            learnMoreStyle: D = null,
            learnMoreFontSize: Q,
            sourceQuestContent: W,
            lazyLoad: V = !1,
            fullWidth: k = !1,
            style: U,
            location: P,
        } = e,
        Y = (0, g.Ut)(),
        G = (0, h.wW)(),
        z = (0, o.bG)([_.Ay], () => _.Ay.useReducedMotion),
        B = (0, o.bG)([R.default], () => R.default.getCurrentUser()),
        H = (function (e, t) {
            let { useNewTile: s } = E.aD.useConfig({ location: t }),
                { variant: r } = E.LV.useConfig({ location: t }),
                n = (0, o.bG)([R.default], () => (0, N.Q)(e, R.default.getCurrentUser()));
            return s || r === E.Ds.ALL_TIERS
                ? n
                : r === E.Ds.TIER_1_VISUALS
                  ? x.i2.TIER_1
                  : r === E.Ds.TIER_2_VISUALS
                    ? x.i2.TIER_2
                    : r === E.Ds.TIER_3_VISUALS
                      ? x.i2.TIER_3
                      : void 0;
        })(i.config, P),
        K = n.useMemo(
            () =>
                (0, v.ks)(i.config) && i.userStatus?.claimedAt != null
                    ? q.intl.formatToPlainString(q.t["nLXlh+"], {
                          orbAmount: i.userStatus?.orbQuantityClaimed ?? (0, v._Z)(i.config) ?? 0,
                      })
                    : (0, v.mq)(i.config, B),
            [i.config, i.userStatus?.claimedAt, i.userStatus?.orbQuantityClaimed, B],
        ),
        X = n.useMemo(() => (0, x.tW)(i, x.fY.REWARD, void 0, void 0, H), [i, H]),
        F = n.useMemo(() => (0, x.tW)(i, x.fY.REWARD_IMAGE), [i]),
        O = n.useCallback(
            (t) => {
                ((0, u.vq)(t.currentTarget, HTMLElement) && t.currentTarget.blur(),
                    (0, I.E5)(I.kI.STEP_2_CLICKED_INTERNAL, "quest_reward_tile")
                        ? (0, A.r)({
                              type: C.F.CLICK_INTERNAL,
                              adCreativeType: a.p.QUEST,
                              adCreativeId: i.id,
                              questContentCTA: p.Cy.REWARD_LEARN_MORE,
                              surfaceId: e.questContent,
                              sourceQuestContent: W,
                              impressionId: G(),
                              questContentPosition: e.questContentPosition,
                          })
                        : Y({
                              questId: i.id,
                              questContent: e.questContent,
                              questContentPosition: e.questContentPosition,
                              questContentCTA: p.Cy.REWARD_LEARN_MORE,
                              sourceQuestContent: W,
                          }),
                    (0, w.mA)({ fromContent: e.questContent, questId: i.id }),
                    e.onClick?.(t));
            },
            [Y, i.id, e, W, G],
        ),
        Z = n.useRef(null),
        $ = n.useRef(b),
        J = (0, v.K9)(i.config);
    if (
        (n.useEffect(() => {
            if (null != Z.current) {
                if (!X.isAnimated || z) {
                    ((Z.current.currentTime = 0), Z.current.pause());
                    return;
                }
                (b && !$.current
                    ? Z.current.play()
                    : !b && $.current && ((Z.current.currentTime = 0), Z.current.pause()),
                    ($.current = b));
            }
        }, [b, X, z]),
        (0, S.A)(Z),
        J)
    )
        t = (0, r.jsx)(L._M, {
            id: "QuestRewardTile_rewardTileNitro",
            children: (e) => (0, r.jsx)(y.A, { ref: e, className: M.eB }),
        });
    else if (V)
        t = (0, r.jsx)(j.N, {
            showVideo: b,
            imageAsset:
                null != F
                    ? {
                          asset: F,
                          assetId: "QuestRewardTile_rewardTileStatic",
                          className: M.XM,
                          alt: q.intl.string(q.t.UMclVN),
                      }
                    : void 0,
            videoAsset: { asset: X, assetId: "QuestRewardTile_rewardTileAnimated", className: l()(M.eB, M.WY) },
            onLoadComplete: e.onLoadComplete,
        });
    else if (X.isAnimated) {
        let s = (0, x.WV)(X.url);
        t = (0, r.jsx)(L._M, {
            id: "QuestRewardTile_rewardTileAnimated",
            children: (t) =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        null != s && (0, r.jsx)("img", { alt: q.intl.string(q.t.UMclVN), className: M.XM, src: s }),
                        (0, r.jsx)(T.A, {
                            ref: (e) => {
                                ((t.current = e), (Z.current = e));
                            },
                            autoPlay: !z && b,
                            loop: !0,
                            muted: !0,
                            playsInline: !0,
                            className: l()(M.eB, M.WY),
                            controls: !1,
                            onProgress: e.onLoadComplete,
                            children: (0, r.jsx)("source", { src: X.url, type: X.mimetype ?? void 0 }),
                        }),
                    ],
                }),
        });
    } else
        t = (0, r.jsx)(L._M, {
            id: "QuestRewardTile_rewardTileStatic",
            children: (t) =>
                (0, r.jsx)("img", { ref: t, alt: K, className: l()(M.eB, M.Qz), src: X.url, onLoad: e.onLoadComplete }),
        });
    return null == D
        ? (0, r.jsx)("div", { className: l()(M.al, s, { [M.Ij]: k }), style: U, children: t })
        : (0, r.jsxs)(c.D, {
              className: l()(M.a$, M.al, M.Yi, s, { [M.Ij]: k }),
              onClick: O,
              style: U,
              children: [
                  t,
                  "text" === D &&
                      (0, r.jsx)(d.E, {
                          color: "text-overlay-light",
                          variant: "text-xs/normal",
                          className: M.n_,
                          style: { fontSize: Q },
                          children: q.intl.format(q.t.DYAleT, {}),
                      }),
                  "icon" === D &&
                      (0, r.jsx)("div", {
                          className: M.n_,
                          children: (0, r.jsx)(m.CircleInformationIcon, { size: "xxs", color: f.A.colors.WHITE.css }),
                      }),
              ],
          });
};
