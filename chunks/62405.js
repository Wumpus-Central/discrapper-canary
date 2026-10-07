s.d(t, { A: () => Q });
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
    C = s(775602),
    A = s(274670),
    T = s(144779),
    R = s(607470),
    _ = s(287809),
    E = s(104886),
    x = s(192444),
    I = s(426110),
    N = s(291749),
    g = s(18437),
    p = s(590202),
    h = s(971649),
    v = s(801365),
    j = s(557637),
    y = s(415441),
    w = s(734736),
    q = s(617986),
    M = s(139384),
    L = s(375708),
    b = s(632036);
let Q = function (e) {
    let t,
        {
            className: s,
            quest: i,
            autoplay: Q = !0,
            learnMoreStyle: W = null,
            learnMoreFontSize: S,
            sourceQuestContent: k,
            lazyLoad: D = !1,
            fullWidth: P = !1,
            style: V,
            location: U,
        } = e,
        Y = (0, g.Ut)(),
        G = (0, h.wW)(),
        z = (0, o.bG)([C.Ay], () => C.Ay.useReducedMotion),
        B = (0, o.bG)([_.default], () => _.default.getCurrentUser()),
        H = (function (e, t) {
            let { useNewTile: s } = x.aD.useConfig({ location: t }),
                { enabled: r } = x.LV.useConfig({ location: t }),
                n = (0, o.bG)([_.default], () => (0, I.Q)(e, _.default.getCurrentUser()));
            return s || r ? n : void 0;
        })(i.config, U),
        K = n.useMemo(
            () =>
                (0, v.ks)(i.config) && i.userStatus?.claimedAt != null
                    ? L.intl.formatToPlainString(L.t["nLXlh+"], {
                          orbAmount: i.userStatus?.orbQuantityClaimed ?? (0, v._Z)(i.config) ?? 0,
                      })
                    : (0, v.mq)(i.config, B),
            [i.config, i.userStatus?.claimedAt, i.userStatus?.orbQuantityClaimed, B],
        ),
        X = n.useMemo(() => (0, N.tW)(i, N.fY.REWARD, void 0, void 0, H), [i, H]),
        F = n.useMemo(() => (0, N.tW)(i, N.fY.REWARD_IMAGE), [i]),
        O = n.useCallback(
            (t) => {
                ((0, u.vq)(t.currentTarget, HTMLElement) && t.currentTarget.blur(),
                    (0, E.E5)(E.kI.STEP_2_CLICKED_INTERNAL, "quest_reward_tile")
                        ? (0, A.r)({
                              type: T.F.CLICK_INTERNAL,
                              adCreativeType: a.p.QUEST,
                              adCreativeId: i.id,
                              questContentCTA: p.Cy.REWARD_LEARN_MORE,
                              surfaceId: e.questContent,
                              sourceQuestContent: k,
                              impressionId: G(),
                              questContentPosition: e.questContentPosition,
                          })
                        : Y({
                              questId: i.id,
                              questContent: e.questContent,
                              questContentPosition: e.questContentPosition,
                              questContentCTA: p.Cy.REWARD_LEARN_MORE,
                              sourceQuestContent: k,
                          }),
                    (0, q.mA)({ fromContent: e.questContent, questId: i.id }),
                    e.onClick?.(t));
            },
            [Y, i.id, e, k, G],
        ),
        Z = n.useRef(null),
        $ = n.useRef(Q),
        J = (0, v.K9)(i.config);
    if (
        (n.useEffect(() => {
            if (null != Z.current) {
                if (!X.isAnimated || z) {
                    ((Z.current.currentTime = 0), Z.current.pause());
                    return;
                }
                (Q && !$.current
                    ? Z.current.play()
                    : !Q && $.current && ((Z.current.currentTime = 0), Z.current.pause()),
                    ($.current = Q));
            }
        }, [Q, X, z]),
        (0, M.A)(Z),
        J)
    )
        t = (0, r.jsx)(j._M, {
            id: "QuestRewardTile_rewardTileNitro",
            children: (e) => (0, r.jsx)(w.A, { ref: e, className: b.eB }),
        });
    else if (D)
        t = (0, r.jsx)(y.N, {
            showVideo: Q,
            imageAsset:
                null != F
                    ? {
                          asset: F,
                          assetId: "QuestRewardTile_rewardTileStatic",
                          className: b.XM,
                          alt: L.intl.string(L.t.UMclVN),
                      }
                    : void 0,
            videoAsset: { asset: X, assetId: "QuestRewardTile_rewardTileAnimated", className: l()(b.eB, b.WY) },
            onLoadComplete: e.onLoadComplete,
        });
    else if (X.isAnimated) {
        let s = (0, N.WV)(X.url);
        t = (0, r.jsx)(j._M, {
            id: "QuestRewardTile_rewardTileAnimated",
            children: (t) =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        null != s && (0, r.jsx)("img", { alt: L.intl.string(L.t.UMclVN), className: b.XM, src: s }),
                        (0, r.jsx)(R.A, {
                            ref: (e) => {
                                ((t.current = e), (Z.current = e));
                            },
                            autoPlay: !z && Q,
                            loop: !0,
                            muted: !0,
                            playsInline: !0,
                            className: l()(b.eB, b.WY),
                            controls: !1,
                            onProgress: e.onLoadComplete,
                            children: (0, r.jsx)("source", { src: X.url, type: X.mimetype ?? void 0 }),
                        }),
                    ],
                }),
        });
    } else
        t = (0, r.jsx)(j._M, {
            id: "QuestRewardTile_rewardTileStatic",
            children: (t) =>
                (0, r.jsx)("img", { ref: t, alt: K, className: l()(b.eB, b.Qz), src: X.url, onLoad: e.onLoadComplete }),
        });
    return null == W
        ? (0, r.jsx)("div", { className: l()(b.al, s, { [b.Ij]: P }), style: V, children: t })
        : (0, r.jsxs)(c.D, {
              className: l()(b.a$, b.al, b.Yi, s, { [b.Ij]: P }),
              onClick: O,
              style: V,
              children: [
                  t,
                  "text" === W &&
                      (0, r.jsx)(d.E, {
                          color: "text-overlay-light",
                          variant: "text-xs/normal",
                          className: b.n_,
                          style: { fontSize: S },
                          children: L.intl.format(L.t.DYAleT, {}),
                      }),
                  "icon" === W &&
                      (0, r.jsx)("div", {
                          className: b.n_,
                          children: (0, r.jsx)(m.CircleInformationIcon, { size: "xxs", color: f.A.colors.WHITE.css }),
                      }),
              ],
          });
};
