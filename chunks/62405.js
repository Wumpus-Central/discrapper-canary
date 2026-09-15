r.d(t, { A: () => Q });
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
    C = r(775602),
    A = r(274670),
    T = r(144779),
    R = r(607470),
    _ = r(287809),
    E = r(104886),
    x = r(192444),
    N = r(426110),
    g = r(291749),
    I = r(18437),
    p = r(590202),
    h = r(971649),
    j = r(801365),
    v = r(557637),
    y = r(415441),
    w = r(734736),
    q = r(617986),
    M = r(139384),
    L = r(375708),
    b = r(632036);
let Q = function (e) {
    let t,
        {
            className: r,
            quest: i,
            autoplay: Q = !0,
            learnMoreStyle: S = null,
            learnMoreFontSize: W,
            sourceQuestContent: k,
            lazyLoad: D = !1,
            fullWidth: P = !1,
            style: U,
            location: V,
        } = e,
        Y = (0, I.Ut)(),
        G = (0, h.go)(),
        z = (0, o.bG)([C.Ay], () => C.Ay.useReducedMotion),
        B = (0, o.bG)([_.default], () => _.default.getCurrentUser()),
        H = (function (e, t) {
            let { useNewTile: r } = x.aD.useConfig({ location: t }),
                s = (0, o.bG)([_.default], () => (0, N.Q)(e, _.default.getCurrentUser()));
            return r ? s : void 0;
        })(i.config, V),
        K = n.useMemo(
            () =>
                (0, j.ks)(i.config) && i.userStatus?.claimedAt != null
                    ? L.intl.formatToPlainString(L.t["nLXlh+"], {
                          orbAmount: i.userStatus?.orbQuantityClaimed ?? (0, j._Z)(i.config) ?? 0,
                      })
                    : (0, j.mq)(i.config, B),
            [i.config, i.userStatus?.claimedAt, i.userStatus?.orbQuantityClaimed, B],
        ),
        X = n.useMemo(() => (0, g.tW)(i, g.fY.REWARD, void 0, void 0, H), [i, H]),
        F = n.useMemo(() => (0, g.tW)(i, g.fY.REWARD_IMAGE), [i]),
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
                              impressionId: G,
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
        J = (0, j.K9)(i.config);
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
        t = (0, s.jsx)(v._M, {
            id: "QuestRewardTile_rewardTileNitro",
            children: (e) => (0, s.jsx)(w.A, { ref: e, className: b.eB }),
        });
    else if (D)
        t = (0, s.jsx)(y.N, {
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
        let r = (0, g.WV)(X.url);
        t = (0, s.jsx)(v._M, {
            id: "QuestRewardTile_rewardTileAnimated",
            children: (t) =>
                (0, s.jsxs)(s.Fragment, {
                    children: [
                        null != r && (0, s.jsx)("img", { alt: L.intl.string(L.t.UMclVN), className: b.XM, src: r }),
                        (0, s.jsx)(R.A, {
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
                            children: (0, s.jsx)("source", { src: X.url, type: X.mimetype ?? void 0 }),
                        }),
                    ],
                }),
        });
    } else
        t = (0, s.jsx)(v._M, {
            id: "QuestRewardTile_rewardTileStatic",
            children: (t) =>
                (0, s.jsx)("img", { ref: t, alt: K, className: l()(b.eB, b.Qz), src: X.url, onLoad: e.onLoadComplete }),
        });
    return null == S
        ? (0, s.jsx)("div", { className: l()(b.al, r, { [b.Ij]: P }), style: U, children: t })
        : (0, s.jsxs)(c.D, {
              className: l()(b.a$, b.al, b.Yi, r, { [b.Ij]: P }),
              onClick: O,
              style: U,
              children: [
                  t,
                  "text" === S &&
                      (0, s.jsx)(d.E, {
                          color: "text-overlay-light",
                          variant: "text-xs/normal",
                          className: b.n_,
                          style: { fontSize: W },
                          children: L.intl.format(L.t.DYAleT, {}),
                      }),
                  "icon" === S &&
                      (0, s.jsx)("div", {
                          className: b.n_,
                          children: (0, s.jsx)(m.CircleInformationIcon, { size: "xxs", color: f.A.colors.WHITE.css }),
                      }),
              ],
          });
};
