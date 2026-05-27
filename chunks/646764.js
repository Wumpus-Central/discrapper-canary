s.d(t, { A: () => y });
var r = s(627968),
    l = s(64700),
    n = s(503698),
    i = s.n(n),
    a = s(621466),
    u = s(17928),
    o = s(939249),
    c = s(834730),
    d = s(885574),
    m = s(661531),
    f = s(775602),
    A = s(607470),
    T = s(287809),
    x = s(551875),
    C = s(18437),
    h = s(590202),
    g = s(801365),
    j = s(241124),
    R = s(415441),
    p = s(734736),
    N = s(617986),
    w = s(139384),
    E = s(190107),
    v = s(375708),
    _ = s(369453);
let y = function (e) {
    let t,
        {
            className: s,
            quest: n,
            autoplay: y = !0,
            learnMoreStyle: M = null,
            learnMoreFontSize: S,
            sourceQuestContent: b,
            lazyLoad: q = !1,
            fullWidth: Q = !1,
            style: I,
            orbTier: L,
        } = e,
        W = (0, C.Ut)(),
        k = (0, u.bG)([f.A], () => f.A.useReducedMotion),
        D = (0, u.bG)([T.default], () => T.default.getCurrentUser()),
        P = l.useMemo(
            () =>
                (0, g.ks)(n.config) && n.userStatus?.claimedAt != null
                    ? v.intl.formatToPlainString(v.t["nLXlh+"], {
                          orbAmount: n.userStatus?.orbQuantityClaimed ?? (0, g._Z)(n.config) ?? 0,
                      })
                    : (0, g.mq)(n.config, D),
            [n.config, n.userStatus?.claimedAt, n.userStatus?.orbQuantityClaimed, D],
        ),
        V = l.useMemo(() => (0, x.tW)(n, x.fY.REWARD, void 0, void 0, L), [n, L]),
        Y = l.useMemo(() => (0, x.tW)(n, x.fY.REWARD_IMAGE), [n]),
        H = l.useCallback(
            (t) => {
                (0, a.vq)(t.currentTarget, HTMLElement) && t.currentTarget.blur(),
                    W({
                        questId: n.id,
                        questContent: e.questContent,
                        questContentPosition: e.questContentPosition,
                        questContentCTA: h.Cy.REWARD_LEARN_MORE,
                        sourceQuestContent: b,
                    }),
                    (0, N.navigateToQuestHome)({ fromContent: e.questContent, questId: n.id }),
                    e.onClick?.(t);
            },
            [W, n.id, e, b],
        ),
        U = l.useRef(null),
        z = l.useRef(y),
        B = (0, g.K9)(n.config);
    if (
        (l.useEffect(() => {
            if (null != U.current) {
                if (!V.isAnimated || k) {
                    (U.current.currentTime = 0), U.current.pause();
                    return;
                }
                y && !z.current
                    ? U.current.play()
                    : !y && z.current && ((U.current.currentTime = 0), U.current.pause()),
                    (z.current = y);
            }
        }, [y, V, k]),
        (0, w.A)(U, E.rE.QUEST_HOME_DESKTOP),
        B)
    )
        t = (0, r.jsx)(j.Sn, {
            id: "QuestRewardTile_rewardTileNitro",
            children: (e) => (0, r.jsx)(p.A, { ref: e, className: _.eB }),
        });
    else if (q)
        t = (0, r.jsx)(R.N, {
            showVideo: y,
            imageAsset:
                null != Y
                    ? {
                          asset: Y,
                          assetId: "QuestRewardTile_rewardTileStatic",
                          className: _.XM,
                          alt: v.intl.string(v.t.UMclVN),
                      }
                    : void 0,
            videoAsset: { asset: V, assetId: "QuestRewardTile_rewardTileAnimated", className: i()(_.eB, _.WY) },
            onLoadComplete: e.onLoadComplete,
        });
    else if (V.isAnimated) {
        let s = (0, x.WV)(V.url);
        t = (0, r.jsx)(j.Sn, {
            id: "QuestRewardTile_rewardTileAnimated",
            children: (t) =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        null != s && (0, r.jsx)("img", { alt: v.intl.string(v.t.UMclVN), className: _.XM, src: s }),
                        (0, r.jsx)(A.A, {
                            ref: (e) => {
                                (t.current = e), (U.current = e);
                            },
                            autoPlay: !k && y,
                            loop: !0,
                            muted: !0,
                            playsInline: !0,
                            className: i()(_.eB, _.WY),
                            controls: !1,
                            onProgress: e.onLoadComplete,
                            children: (0, r.jsx)("source", { src: V.url, type: V.mimetype ?? void 0 }),
                        }),
                    ],
                }),
        });
    } else
        t = (0, r.jsx)(j.Sn, {
            id: "QuestRewardTile_rewardTileStatic",
            children: (t) =>
                (0, r.jsx)("img", { ref: t, alt: P, className: i()(_.eB, _.Qz), src: V.url, onLoad: e.onLoadComplete }),
        });
    return null == M
        ? (0, r.jsx)("div", { className: i()(_.al, s, { [_.Ij]: Q }), style: I, children: t })
        : (0, r.jsxs)(o.D, {
              className: i()(_.a$, _.al, _.Yi, s, { [_.Ij]: Q }),
              onClick: H,
              style: I,
              children: [
                  t,
                  "text" === M &&
                      (0, r.jsx)(c.E, {
                          color: "always-white",
                          variant: "text-xs/normal",
                          className: _.n_,
                          style: { fontSize: S },
                          children: v.intl.format(v.t.DYAleT, {}),
                      }),
                  "icon" === M &&
                      (0, r.jsx)("div", {
                          className: _.n_,
                          children: (0, r.jsx)(d.m, { size: "xxs", color: m.A.colors.WHITE.css }),
                      }),
              ],
          });
};
