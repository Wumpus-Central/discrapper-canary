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
    A = r(274670),
    _ = r(144779),
    R = r(607470),
    I = r(287809),
    C = r(192444),
    E = r(291749),
    x = r(426110),
    g = r(590202),
    p = r(971649),
    h = r(801365),
    v = r(557637),
    N = r(415441),
    j = r(734736),
    y = r(617986),
    L = r(139384),
    w = r(105292),
    S = r(632036);
let M = function (e) {
    let t,
        {
            className: r,
            quest: i,
            autoplay: M = !0,
            learnMoreStyle: b = null,
            learnMoreFontSize: Q,
            sourceQuestContent: D,
            lazyLoad: V = !1,
            fullWidth: W = !1,
            style: q,
            location: k,
        } = e,
        U = (0, p.wW)(),
        Y = (0, o.bG)([T.Ay], () => T.Ay.useReducedMotion),
        G = (0, o.bG)([I.default], () => I.default.getCurrentUser()),
        P = (function (e, t) {
            let { useNewTile: r } = C.aD.useConfig({ location: t }),
                { variant: s } = C.LV.useConfig({ location: t }),
                n = (0, o.bG)([I.default], () => (0, x.Q)(e, I.default.getCurrentUser()));
            return r || s === C.Ds.ALL_TIERS
                ? n
                : s === C.Ds.TIER_1_VISUALS
                  ? E.i2.TIER_1
                  : s === C.Ds.TIER_2_VISUALS
                    ? E.i2.TIER_2
                    : s === C.Ds.TIER_3_VISUALS
                      ? E.i2.TIER_3
                      : void 0;
        })(i.config, k),
        z = n.useMemo(
            () =>
                (0, h.ks)(i.config) && i.userStatus?.claimedAt != null
                    ? w.intl.formatToPlainString(w.t["nLXlh+"], {
                          orbAmount: i.userStatus?.orbQuantityClaimed ?? (0, h._Z)(i.config) ?? 0,
                      })
                    : (0, h.mq)(i.config, G),
            [i.config, i.userStatus?.claimedAt, i.userStatus?.orbQuantityClaimed, G],
        ),
        B = n.useMemo(() => (0, E.tW)(i, E.fY.REWARD, void 0, void 0, P), [i, P]),
        H = n.useMemo(() => (0, E.tW)(i, E.fY.REWARD_IMAGE), [i]),
        X = n.useCallback(
            (t) => {
                ((0, u.vq)(t.currentTarget, HTMLElement) && t.currentTarget.blur(),
                    (0, A.r)({
                        type: _.F.CLICK_INTERNAL,
                        adCreativeType: a.p.QUEST,
                        adCreativeId: i.id,
                        questContentCTA: g.Cy.REWARD_LEARN_MORE,
                        surfaceId: e.questContent,
                        sourceQuestContent: D,
                        impressionId: U(),
                        questContentPosition: e.questContentPosition,
                    }),
                    (0, y.mA)({ fromContent: e.questContent, questId: i.id }),
                    e.onClick?.(t));
            },
            [i.id, e, D, U],
        ),
        F = n.useRef(null),
        K = n.useRef(M),
        O = (0, h.K9)(i.config);
    if (
        (n.useEffect(() => {
            if (null != F.current) {
                if (!B.isAnimated || Y) {
                    ((F.current.currentTime = 0), F.current.pause());
                    return;
                }
                (M && !K.current
                    ? F.current.play()
                    : !M && K.current && ((F.current.currentTime = 0), F.current.pause()),
                    (K.current = M));
            }
        }, [M, B, Y]),
        (0, L.A)(F),
        O)
    )
        t = (0, s.jsx)(v._M, {
            id: "QuestRewardTile_rewardTileNitro",
            children: (e) => (0, s.jsx)(j.A, { ref: e, className: S.eB }),
        });
    else if (V)
        t = (0, s.jsx)(N.N, {
            showVideo: M,
            imageAsset:
                null != H
                    ? {
                          asset: H,
                          assetId: "QuestRewardTile_rewardTileStatic",
                          className: S.XM,
                          alt: w.intl.string(w.t.UMclVN),
                      }
                    : void 0,
            videoAsset: { asset: B, assetId: "QuestRewardTile_rewardTileAnimated", className: l()(S.eB, S.WY) },
            onLoadComplete: e.onLoadComplete,
        });
    else if (B.isAnimated) {
        let r = (0, E.WV)(B.url);
        t = (0, s.jsx)(v._M, {
            id: "QuestRewardTile_rewardTileAnimated",
            children: (t) =>
                (0, s.jsxs)(s.Fragment, {
                    children: [
                        null != r && (0, s.jsx)("img", { alt: w.intl.string(w.t.UMclVN), className: S.XM, src: r }),
                        (0, s.jsx)(R.A, {
                            ref: (e) => {
                                ((t.current = e), (F.current = e));
                            },
                            autoPlay: !Y && M,
                            loop: !0,
                            muted: !0,
                            playsInline: !0,
                            className: l()(S.eB, S.WY),
                            controls: !1,
                            onProgress: e.onLoadComplete,
                            children: (0, s.jsx)("source", { src: B.url, type: B.mimetype ?? void 0 }),
                        }),
                    ],
                }),
        });
    } else
        t = (0, s.jsx)(v._M, {
            id: "QuestRewardTile_rewardTileStatic",
            children: (t) =>
                (0, s.jsx)("img", { ref: t, alt: z, className: l()(S.eB, S.Qz), src: B.url, onLoad: e.onLoadComplete }),
        });
    return null == b
        ? (0, s.jsx)("div", { className: l()(S.al, r, { [S.Ij]: W }), style: q, children: t })
        : (0, s.jsxs)(c.D, {
              className: l()(S.a$, S.al, S.Yi, r, { [S.Ij]: W }),
              onClick: X,
              style: q,
              children: [
                  t,
                  "text" === b &&
                      (0, s.jsx)(d.E, {
                          color: "text-overlay-light",
                          variant: "text-xs/normal",
                          className: S.n_,
                          style: { fontSize: Q },
                          children: w.intl.format(w.t.DYAleT, {}),
                      }),
                  "icon" === b &&
                      (0, s.jsx)("div", {
                          className: S.n_,
                          children: (0, s.jsx)(m.CircleInformationIcon, { size: "xxs", color: f.A.colors.WHITE.css }),
                      }),
              ],
          });
};
