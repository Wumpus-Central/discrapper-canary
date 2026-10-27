s.d(t, { A: () => M });
var r = s(477900),
    i = s(582128),
    n = s(503698),
    l = s.n(n),
    a = s(323889),
    o = s(621466),
    u = s(17928),
    c = s(939249),
    d = s(834730),
    m = s(885574),
    f = s(661531),
    T = s(775602),
    _ = s(507395),
    A = s(144779),
    I = s(607470),
    R = s(287809),
    C = s(192444),
    x = s(291749),
    E = s(426110),
    g = s(590202),
    p = s(971649),
    N = s(801365),
    h = s(557637),
    j = s(415441),
    v = s(734736),
    w = s(617986),
    y = s(139384),
    L = s(105292),
    S = s(632036);
let M = function (e) {
    let t,
        {
            className: s,
            quest: n,
            autoplay: M = !0,
            learnMoreStyle: Q = null,
            learnMoreFontSize: b,
            sourceQuestContent: D,
            lazyLoad: W = !1,
            fullWidth: k = !1,
            style: q,
            location: U,
        } = e,
        V = (0, p.wW)(),
        Y = (0, u.bG)([T.Ay], () => T.Ay.useReducedMotion),
        P = (0, u.bG)([R.default], () => R.default.getCurrentUser()),
        z = (function (e, t) {
            let { useNewTile: s } = C.aD.useConfig({ location: t }),
                { variant: r } = C.LV.useConfig({ location: t }),
                i = (0, u.bG)([R.default], () => (0, E.Q)(e, R.default.getCurrentUser()));
            return s || r === C.Ds.ALL_TIERS
                ? i
                : r === C.Ds.TIER_1_VISUALS
                  ? x.i2.TIER_1
                  : r === C.Ds.TIER_2_VISUALS
                    ? x.i2.TIER_2
                    : r === C.Ds.TIER_3_VISUALS
                      ? x.i2.TIER_3
                      : void 0;
        })(n.config, U),
        B = i.useMemo(
            () =>
                (0, N.ks)(n.config) && n.userStatus?.claimedAt != null
                    ? L.intl.formatToPlainString(L.t["nLXlh+"], {
                          orbAmount: n.userStatus?.orbQuantityClaimed ?? (0, N._Z)(n.config) ?? 0,
                      })
                    : (0, N.mq)(n.config, P),
            [n.config, n.userStatus?.claimedAt, n.userStatus?.orbQuantityClaimed, P],
        ),
        G = i.useMemo(() => (0, x.tW)(n, x.fY.REWARD, void 0, void 0, z), [n, z]),
        X = i.useMemo(() => (0, x.tW)(n, x.fY.REWARD_IMAGE), [n]),
        F = i.useCallback(
            (t) => {
                ((0, o.vq)(t.currentTarget, HTMLElement) && t.currentTarget.blur(),
                    (0, _.r)({
                        type: A.F.CLICK_INTERNAL,
                        adCreativeType: a.p.QUEST,
                        adCreativeId: n.id,
                        questContentCTA: g.Cy.REWARD_LEARN_MORE,
                        surfaceId: e.questContent,
                        sourceQuestContent: D,
                        impressionId: V(),
                        questContentPosition: e.questContentPosition,
                    }),
                    (0, w.mA)({ fromContent: e.questContent, questId: n.id }),
                    e.onClick?.(t));
            },
            [n.id, e, D, V],
        ),
        H = i.useRef(null),
        K = i.useRef(M),
        O = (0, N.K9)(n.config);
    if (
        (i.useEffect(() => {
            if (null != H.current) {
                if (!G.isAnimated || Y) {
                    ((H.current.currentTime = 0), H.current.pause());
                    return;
                }
                (M && !K.current
                    ? H.current.play()
                    : !M && K.current && ((H.current.currentTime = 0), H.current.pause()),
                    (K.current = M));
            }
        }, [M, G, Y]),
        (0, y.A)(H),
        O)
    )
        t = (0, r.jsx)(h._M, {
            id: "QuestRewardTile_rewardTileNitro",
            children: (e) => (0, r.jsx)(v.A, { ref: e, className: S.eB }),
        });
    else if (W)
        t = (0, r.jsx)(j.N, {
            showVideo: M,
            imageAsset:
                null != X
                    ? {
                          asset: X,
                          assetId: "QuestRewardTile_rewardTileStatic",
                          className: S.XM,
                          alt: L.intl.string(L.t.UMclVN),
                      }
                    : void 0,
            videoAsset: { asset: G, assetId: "QuestRewardTile_rewardTileAnimated", className: l()(S.eB, S.WY) },
            onLoadComplete: e.onLoadComplete,
        });
    else if (G.isAnimated) {
        let s = (0, x.WV)(G.url);
        t = (0, r.jsx)(h._M, {
            id: "QuestRewardTile_rewardTileAnimated",
            children: (t) =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        null != s && (0, r.jsx)("img", { alt: L.intl.string(L.t.UMclVN), className: S.XM, src: s }),
                        (0, r.jsx)(I.A, {
                            ref: (e) => {
                                ((t.current = e), (H.current = e));
                            },
                            autoPlay: !Y && M,
                            loop: !0,
                            muted: !0,
                            playsInline: !0,
                            className: l()(S.eB, S.WY),
                            controls: !1,
                            onProgress: e.onLoadComplete,
                            children: (0, r.jsx)("source", { src: G.url, type: G.mimetype ?? void 0 }),
                        }),
                    ],
                }),
        });
    } else
        t = (0, r.jsx)(h._M, {
            id: "QuestRewardTile_rewardTileStatic",
            children: (t) =>
                (0, r.jsx)("img", { ref: t, alt: B, className: l()(S.eB, S.Qz), src: G.url, onLoad: e.onLoadComplete }),
        });
    return null == Q
        ? (0, r.jsx)("div", { className: l()(S.al, s, { [S.Ij]: k }), style: q, children: t })
        : (0, r.jsxs)(c.D, {
              className: l()(S.a$, S.al, S.Yi, s, { [S.Ij]: k }),
              onClick: F,
              style: q,
              children: [
                  t,
                  "text" === Q &&
                      (0, r.jsx)(d.E, {
                          color: "text-overlay-light",
                          variant: "text-xs/normal",
                          className: S.n_,
                          style: { fontSize: b },
                          children: L.intl.format(L.t.DYAleT, {}),
                      }),
                  "icon" === Q &&
                      (0, r.jsx)("div", {
                          className: S.n_,
                          children: (0, r.jsx)(m.CircleInformationIcon, { size: "xxs", color: f.A.colors.WHITE.css }),
                      }),
              ],
          });
};
