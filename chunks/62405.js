r.d(t, { A: () => M });
var s = r(477900),
    n = r(582128),
    i = r(503698),
    l = r.n(i),
    a = r(323889),
    u = r(621466),
    o = r(17928),
    c = r(939249),
    d = r(834730),
    m = r(885574),
    f = r(661531),
    T = r(775602),
    A = r(507395),
    R = r(144779),
    _ = r(607470),
    I = r(287809),
    C = r(192444),
    E = r(291749),
    p = r(426110),
    x = r(590202),
    g = r(971649),
    N = r(801365),
    h = r(557637),
    v = r(415441),
    j = r(734736),
    y = r(617986),
    L = r(139384),
    S = r(105292),
    w = r(632036);
let M = function (e) {
    let t,
        {
            className: r,
            quest: i,
            autoplay: M = !0,
            learnMoreStyle: Q = null,
            learnMoreFontSize: b,
            sourceQuestContent: V,
            lazyLoad: D = !1,
            fullWidth: W = !1,
            style: k,
            location: q,
        } = e,
        U = (0, g.wW)(),
        Y = (0, o.bG)([T.Ay], () => T.Ay.useReducedMotion),
        P = (0, o.bG)([I.default], () => I.default.getCurrentUser()),
        z = (function (e, t) {
            let { useNewTile: r } = C.aD.useConfig({ location: t }),
                { variant: s } = C.LV.useConfig({ location: t }),
                n = (0, p.Qn)(e);
            return r || s === C.Ds.ALL_TIERS
                ? n
                : s === C.Ds.TIER_1_VISUALS
                  ? E.i2.TIER_1
                  : s === C.Ds.TIER_2_VISUALS
                    ? E.i2.TIER_2
                    : s === C.Ds.TIER_3_VISUALS
                      ? E.i2.TIER_3
                      : void 0;
        })(i.config, q),
        B = n.useMemo(
            () =>
                (0, N.ks)(i.config) && i.userStatus?.claimedAt != null
                    ? S.intl.formatToPlainString(S.t["nLXlh+"], {
                          orbAmount: i.userStatus?.orbQuantityClaimed ?? (0, N._Z)(i.config) ?? 0,
                      })
                    : (0, N.mq)(i.config, P),
            [i.config, i.userStatus?.claimedAt, i.userStatus?.orbQuantityClaimed, P],
        ),
        G = n.useMemo(() => (0, E.tW)(i, E.fY.REWARD, void 0, void 0, z), [i, z]),
        H = n.useMemo(() => (0, E.tW)(i, E.fY.REWARD_IMAGE), [i]),
        X = n.useCallback(
            (t) => {
                ((0, u.vq)(t.currentTarget, HTMLElement) && t.currentTarget.blur(),
                    (0, A.r)({
                        type: R.F.CLICK_INTERNAL,
                        adCreativeType: a.p.QUEST,
                        adCreativeId: i.id,
                        questContentCTA: x.Cy.REWARD_LEARN_MORE,
                        surfaceId: e.questContent,
                        sourceQuestContent: V,
                        impressionId: U(),
                        questContentPosition: e.questContentPosition,
                    }),
                    (0, y.mA)({ fromContent: e.questContent, questId: i.id }),
                    e.onClick?.(t));
            },
            [i.id, e, V, U],
        ),
        F = n.useRef(null),
        K = n.useRef(M),
        Z = (0, N.K9)(i.config);
    if (
        (n.useEffect(() => {
            if (null != F.current) {
                if (!G.isAnimated || Y) {
                    ((F.current.currentTime = 0), F.current.pause());
                    return;
                }
                (M && !K.current
                    ? F.current.play()
                    : !M && K.current && ((F.current.currentTime = 0), F.current.pause()),
                    (K.current = M));
            }
        }, [M, G, Y]),
        (0, L.A)(F),
        Z)
    )
        t = (0, s.jsx)(h._M, {
            id: "QuestRewardTile_rewardTileNitro",
            children: (e) => (0, s.jsx)(j.A, { ref: e, className: w.eB }),
        });
    else if (D)
        t = (0, s.jsx)(v.N, {
            showVideo: M,
            imageAsset:
                null != H
                    ? {
                          asset: H,
                          assetId: "QuestRewardTile_rewardTileStatic",
                          className: w.XM,
                          alt: S.intl.string(S.t.UMclVN),
                      }
                    : void 0,
            videoAsset: { asset: G, assetId: "QuestRewardTile_rewardTileAnimated", className: l()(w.eB, w.WY) },
            onLoadComplete: e.onLoadComplete,
        });
    else if (G.isAnimated) {
        let r = (0, E.WV)(G.url);
        t = (0, s.jsx)(h._M, {
            id: "QuestRewardTile_rewardTileAnimated",
            children: (t) =>
                (0, s.jsxs)(s.Fragment, {
                    children: [
                        null != r && (0, s.jsx)("img", { alt: S.intl.string(S.t.UMclVN), className: w.XM, src: r }),
                        (0, s.jsx)(_.A, {
                            ref: (e) => {
                                ((t.current = e), (F.current = e));
                            },
                            autoPlay: !Y && M,
                            loop: !0,
                            muted: !0,
                            playsInline: !0,
                            className: l()(w.eB, w.WY),
                            controls: !1,
                            onProgress: e.onLoadComplete,
                            children: (0, s.jsx)("source", { src: G.url, type: G.mimetype ?? void 0 }),
                        }),
                    ],
                }),
        });
    } else
        t = (0, s.jsx)(h._M, {
            id: "QuestRewardTile_rewardTileStatic",
            children: (t) =>
                (0, s.jsx)("img", { ref: t, alt: B, className: l()(w.eB, w.Qz), src: G.url, onLoad: e.onLoadComplete }),
        });
    return null == Q
        ? (0, s.jsx)("div", { className: l()(w.al, r, { [w.Ij]: W }), style: k, children: t })
        : (0, s.jsxs)(c.D, {
              className: l()(w.a$, w.al, w.Yi, r, { [w.Ij]: W }),
              onClick: X,
              style: k,
              children: [
                  t,
                  "text" === Q &&
                      (0, s.jsx)(d.E, {
                          color: "text-overlay-light",
                          variant: "text-xs/normal",
                          className: w.n_,
                          style: { fontSize: b },
                          children: S.intl.format(S.t.DYAleT, {}),
                      }),
                  "icon" === Q &&
                      (0, s.jsx)("div", {
                          className: w.n_,
                          children: (0, s.jsx)(m.CircleInformationIcon, { size: "xxs", color: f.A.colors.WHITE.css }),
                      }),
              ],
          });
};
