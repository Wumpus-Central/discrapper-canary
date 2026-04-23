n.d(t, { A: () => h });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    _ = n(621466),
    l = n(17928),
    o = n(939249),
    E = n(834730),
    d = n(885574),
    c = n(661531),
    u = n(775602),
    I = n(607470),
    A = n(859387),
    T = n(18437),
    S = n(590202),
    N = n(801365),
    O = n(241124),
    R = n(415441),
    f = n(734736),
    C = n(545986),
    p = n(139384),
    m = n(654487),
    L = n(985018),
    D = n(369453);
let h = function (e) {
    let t,
        {
            className: n,
            quest: a,
            autoplay: h = !0,
            learnMoreStyle: g = null,
            learnMoreFontSize: b,
            sourceQuestContent: U,
            lazyLoad: P = !1,
            fullWidth: M = !1,
            style: y,
        } = e,
        G = (0, T.Ut)(),
        v = (0, l.bG)([u.A], () => u.A.useReducedMotion),
        B = r.useMemo(() => (0, A.tW)(a, A.fY.REWARD), [a]),
        w = r.useMemo(() => (0, A.tW)(a, A.fY.REWARD_IMAGE), [a]),
        F = r.useCallback(
            (t) => {
                (0, _.vq)(t.currentTarget, HTMLElement) && t.currentTarget.blur(),
                    G({
                        questId: a.id,
                        questContent: e.questContent,
                        questContentPosition: e.questContentPosition,
                        questContentCTA: S.Cy.REWARD_LEARN_MORE,
                        sourceQuestContent: U,
                    }),
                    (0, C.navigateToQuestHome)({ fromContent: e.questContent, questId: a.id }),
                    e.onClick?.(t);
            },
            [G, a.id, e, U],
        ),
        V = r.useRef(null),
        H = r.useRef(h),
        k = (0, N.K9)(a.config);
    if (
        (r.useEffect(() => {
            if (null != V.current) {
                if (!B.isAnimated || v) {
                    (V.current.currentTime = 0), V.current.pause();
                    return;
                }
                h && !H.current
                    ? V.current.play()
                    : !h && H.current && ((V.current.currentTime = 0), V.current.pause()),
                    (H.current = h);
            }
        }, [h, B, v]),
        (0, p.A)(V, m.rE.QUEST_HOME_DESKTOP),
        k)
    )
        t = (0, i.jsx)(O.Sn, {
            id: "QuestRewardTile_rewardTileNitro",
            children: (e) => (0, i.jsx)(f.A, { ref: e, className: D.eB }),
        });
    else if (P)
        t = (0, i.jsx)(R.N, {
            showVideo: h,
            imageAsset:
                null != w
                    ? {
                          asset: w,
                          assetId: "QuestRewardTile_rewardTileStatic",
                          className: D.XM,
                          alt: L.intl.string(L.t.UMclVN),
                      }
                    : void 0,
            videoAsset: { asset: B, assetId: "QuestRewardTile_rewardTileAnimated", className: s()(D.eB, D.WY) },
            onLoadComplete: e.onLoadComplete,
        });
    else if (B.isAnimated) {
        let n = (0, A.WV)(B.url);
        t = (0, i.jsx)(O.Sn, {
            id: "QuestRewardTile_rewardTileAnimated",
            children: (t) =>
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        null != n && (0, i.jsx)("img", { alt: L.intl.string(L.t.UMclVN), className: D.XM, src: n }),
                        (0, i.jsx)(I.A, {
                            ref: (e) => {
                                (t.current = e), (V.current = e);
                            },
                            autoPlay: !v && h,
                            loop: !0,
                            muted: !0,
                            playsInline: !0,
                            className: s()(D.eB, D.WY),
                            controls: !1,
                            onProgress: e.onLoadComplete,
                            children: (0, i.jsx)("source", { src: B.url, type: B.mimetype ?? void 0 }),
                        }),
                    ],
                }),
        });
    } else
        t = (0, i.jsx)(O.Sn, {
            id: "QuestRewardTile_rewardTileStatic",
            children: (t) =>
                (0, i.jsx)("img", {
                    ref: t,
                    alt: (0, N.mq)(a.config),
                    className: s()(D.eB, D.Qz),
                    src: B.url,
                    onLoad: e.onLoadComplete,
                }),
        });
    return null == g
        ? (0, i.jsx)("div", { className: s()(D.al, n, { [D.Ij]: M }), style: y, children: t })
        : (0, i.jsxs)(o.D, {
              className: s()(D.a$, D.al, D.Yi, n, { [D.Ij]: M }),
              onClick: F,
              style: y,
              children: [
                  t,
                  "text" === g &&
                      (0, i.jsx)(E.E, {
                          color: "always-white",
                          variant: "text-xs/normal",
                          className: D.n_,
                          style: { fontSize: b },
                          children: L.intl.format(L.t.DYAleT, {}),
                      }),
                  "icon" === g &&
                      (0, i.jsx)("div", {
                          className: D.n_,
                          children: (0, i.jsx)(d.m, { size: "xxs", color: c.A.colors.WHITE.css }),
                      }),
              ],
          });
};
