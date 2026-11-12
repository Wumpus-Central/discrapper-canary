r.d(t, { A: () => b });
var s = r(477900),
    n = r(582128),
    i = r(503698),
    l = r.n(i),
    a = r(323889),
    u = r(621466),
    o = r(855986),
    c = r(939249),
    d = r(834730),
    m = r(885574),
    f = r(646514),
    T = r(736653),
    A = r(775602),
    _ = r(438457),
    I = r(144779),
    R = r(607470),
    C = r(287809),
    E = r(914313),
    g = r(760914),
    p = r(426110),
    x = r(590202),
    N = r(971649),
    h = r(417404),
    y = r(557637),
    j = r(415441),
    v = r(734736),
    L = r(321538),
    M = r(139384),
    S = r(792996),
    w = r(632036);
let b = function (e) {
    let t,
        {
            className: r,
            quest: i,
            autoplay: b = !0,
            useGameIcon: Q = !1,
            learnMoreStyle: W = null,
            learnMoreFontSize: V,
            sourceQuestContent: D,
            lazyLoad: k = !1,
            fullWidth: q = !1,
            style: U,
            location: Y,
        } = e,
        G = (0, T.Ay)(),
        P = (0, N.wW)(),
        z = (0, o.bG)([A.Ay], () => A.Ay.useReducedMotion),
        B = (0, o.bG)([C.default], () => C.default.getCurrentUser()),
        H = (function (e, t) {
            let { useNewTile: r } = E.aD.useConfig({ location: t }),
                { variant: s } = E.LV.useConfig({ location: t }),
                n = (0, p.Qn)(e);
            return r || s === E.Ds.ALL_TIERS
                ? n
                : s === E.Ds.TIER_1_VISUALS
                  ? g.i2.TIER_1
                  : s === E.Ds.TIER_2_VISUALS
                    ? g.i2.TIER_2
                    : s === E.Ds.TIER_3_VISUALS
                      ? g.i2.TIER_3
                      : void 0;
        })(i.config, Y),
        X = n.useMemo(
            () =>
                Q
                    ? i.config.messages.gameTitle
                    : (0, h.ks)(i.config) && i.userStatus?.claimedAt != null
                      ? S.intl.formatToPlainString(S.t["nLXlh+"], {
                            orbAmount: i.userStatus?.orbQuantityClaimed ?? (0, h._Z)(i.config) ?? 0,
                        })
                      : (0, h.mq)(i.config, B),
            [i.config, i.userStatus?.claimedAt, i.userStatus?.orbQuantityClaimed, B, Q],
        ),
        F = n.useMemo(
            () => (Q ? (0, g.tW)(i, g.fY.GAME_TILE, G) : (0, g.tW)(i, g.fY.REWARD, void 0, void 0, H)),
            [i, H, G, Q],
        ),
        K = n.useMemo(() => (0, g.tW)(i, g.fY.REWARD_IMAGE), [i]),
        Z = n.useCallback(
            (t) => {
                ((0, u.vq)(t.currentTarget, HTMLElement) && t.currentTarget.blur(),
                    (0, _.r)({
                        type: I.F.CLICK_INTERNAL,
                        adCreativeType: a.p.QUEST,
                        adCreativeId: i.id,
                        questContentCTA: x.Cy.REWARD_LEARN_MORE,
                        surfaceId: e.questContent,
                        sourceQuestContent: D,
                        impressionId: P(),
                        questContentPosition: e.questContentPosition,
                    }),
                    (0, L.mA)({ fromContent: e.questContent, questId: i.id }),
                    e.onClick?.(t));
            },
            [i.id, e, D, P],
        ),
        O = n.useRef(null),
        $ = n.useRef(b),
        J = (0, h.K9)(i.config);
    (n.useEffect(() => {
        if (null != O.current) {
            if (!F.isAnimated || z) {
                ((O.current.currentTime = 0), O.current.pause());
                return;
            }
            (b && !$.current ? O.current.play() : !b && $.current && ((O.current.currentTime = 0), O.current.pause()),
                ($.current = b));
        }
    }, [b, F, z]),
        (0, M.A)(O));
    let ee = (0, s.jsx)(y._M, {
        id: "QuestRewardTile_rewardTileStatic",
        children: (t) =>
            (0, s.jsx)("img", {
                ref: t,
                alt: X,
                className: l()(w.eB, w.Qz, { [w.Gt]: Q, [w.Ij]: Q && q }),
                src: F.url,
                onLoad: e.onLoadComplete,
            }),
    });
    if (Q) return ee;
    if (J)
        t = (0, s.jsx)(y._M, {
            id: "QuestRewardTile_rewardTileNitro",
            children: (e) => (0, s.jsx)(v.A, { ref: e, className: w.eB }),
        });
    else if (k)
        t = (0, s.jsx)(j.N, {
            showVideo: b,
            imageAsset:
                null != K
                    ? {
                          asset: K,
                          assetId: "QuestRewardTile_rewardTileStatic",
                          className: w.XM,
                          alt: S.intl.string(S.t.UMclVN),
                      }
                    : void 0,
            videoAsset: { asset: F, assetId: "QuestRewardTile_rewardTileAnimated", className: l()(w.eB, w.WY) },
            onLoadComplete: e.onLoadComplete,
        });
    else if (F.isAnimated) {
        let r = (0, g.WV)(F.url);
        t = (0, s.jsx)(y._M, {
            id: "QuestRewardTile_rewardTileAnimated",
            children: (t) =>
                (0, s.jsxs)(s.Fragment, {
                    children: [
                        null != r && (0, s.jsx)("img", { alt: S.intl.string(S.t.UMclVN), className: w.XM, src: r }),
                        (0, s.jsx)(R.A, {
                            ref: (e) => {
                                ((t.current = e), (O.current = e));
                            },
                            autoPlay: !z && b,
                            loop: !0,
                            muted: !0,
                            playsInline: !0,
                            className: l()(w.eB, w.WY),
                            controls: !1,
                            onProgress: e.onLoadComplete,
                            children: (0, s.jsx)("source", { src: F.url, type: F.mimetype ?? void 0 }),
                        }),
                    ],
                }),
        });
    } else t = ee;
    return null == W
        ? (0, s.jsx)("div", { className: l()(w.al, r, { [w.Ij]: q }), style: U, children: t })
        : (0, s.jsxs)(c.D, {
              className: l()(w.a$, w.al, w.Yi, r, { [w.Ij]: q }),
              onClick: Z,
              style: U,
              children: [
                  t,
                  "text" === W &&
                      (0, s.jsx)(d.E, {
                          color: "text-overlay-light",
                          variant: "body-xs/normal",
                          className: w.n_,
                          style: { fontSize: V },
                          children: S.intl.format(S.t.DYAleT, {}),
                      }),
                  "icon" === W &&
                      (0, s.jsx)("div", {
                          className: w.n_,
                          children: (0, s.jsx)(m.CircleInformationIcon, { size: "xxs", color: f.A.colors.WHITE.css }),
                      }),
              ],
          });
};
