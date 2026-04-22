"use strict";
n.d(t, { A: () => N });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(621466),
    o = n(311907),
    c = n(939249),
    u = n(834730),
    d = n(885574),
    h = n(827734),
    m = n(775602),
    p = n(607470),
    f = n(579473),
    g = n(18437),
    _ = n(590202),
    x = n(92246),
    A = n(241124),
    C = n(415441),
    E = n(734736),
    I = n(545986),
    v = n(139384),
    y = n(654487),
    S = n(985018),
    b = n(369453);
let N = function (e) {
    let t,
        {
            className: n,
            quest: s,
            autoplay: N = !0,
            learnMoreStyle: T = null,
            learnMoreFontSize: j,
            sourceQuestContent: R,
            lazyLoad: w = !1,
            fullWidth: L = !1,
            style: M,
        } = e,
        k = (0, g.Ut)(),
        O = (0, o.bG)([m.A], () => m.A.useReducedMotion),
        P = l.useMemo(() => (0, f.tW)(s, f.fY.REWARD), [s]),
        D = l.useMemo(() => (0, f.tW)(s, f.fY.REWARD_IMAGE), [s]),
        U = l.useCallback(
            (t) => {
                (0, a.vq)(t.currentTarget, HTMLElement) && t.currentTarget.blur(),
                    k({
                        questId: s.id,
                        questContent: e.questContent,
                        questContentPosition: e.questContentPosition,
                        questContentCTA: _.Cy.REWARD_LEARN_MORE,
                        sourceQuestContent: R,
                    }),
                    (0, I.navigateToQuestHome)({ fromContent: e.questContent, questId: s.id }),
                    e.onClick?.(t);
            },
            [k, s.id, e, R],
        ),
        V = l.useRef(null),
        G = l.useRef(N),
        F = (0, x.K9)(s.config);
    if (
        (l.useEffect(() => {
            if (null != V.current) {
                if (!P.isAnimated || O) {
                    (V.current.currentTime = 0), V.current.pause();
                    return;
                }
                N && !G.current
                    ? V.current.play()
                    : !N && G.current && ((V.current.currentTime = 0), V.current.pause()),
                    (G.current = N);
            }
        }, [N, P, O]),
        (0, v.A)(V, y.rE.QUEST_HOME_DESKTOP),
        F)
    )
        t = (0, i.jsx)(A.Sn, {
            id: "QuestRewardTile_rewardTileNitro",
            children: (e) => (0, i.jsx)(E.A, { ref: e, className: b.eB }),
        });
    else if (w)
        t = (0, i.jsx)(C.N, {
            showVideo: N,
            imageAsset:
                null != D
                    ? {
                          asset: D,
                          assetId: "QuestRewardTile_rewardTileStatic",
                          className: b.XM,
                          alt: S.intl.string(S.t.UMclVN),
                      }
                    : void 0,
            videoAsset: { asset: P, assetId: "QuestRewardTile_rewardTileAnimated", className: r()(b.eB, b.WY) },
            onLoadComplete: e.onLoadComplete,
        });
    else if (P.isAnimated) {
        let n = (0, f.WV)(P.url);
        t = (0, i.jsx)(A.Sn, {
            id: "QuestRewardTile_rewardTileAnimated",
            children: (t) =>
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        null != n && (0, i.jsx)("img", { alt: S.intl.string(S.t.UMclVN), className: b.XM, src: n }),
                        (0, i.jsx)(p.A, {
                            ref: (e) => {
                                (t.current = e), (V.current = e);
                            },
                            autoPlay: !O && N,
                            loop: !0,
                            muted: !0,
                            playsInline: !0,
                            className: r()(b.eB, b.WY),
                            controls: !1,
                            onProgress: e.onLoadComplete,
                            children: (0, i.jsx)("source", { src: P.url, type: P.mimetype ?? void 0 }),
                        }),
                    ],
                }),
        });
    } else
        t = (0, i.jsx)(A.Sn, {
            id: "QuestRewardTile_rewardTileStatic",
            children: (t) =>
                (0, i.jsx)("img", {
                    ref: t,
                    alt: (0, x.mq)(s.config),
                    className: r()(b.eB, b.Qz),
                    src: P.url,
                    onLoad: e.onLoadComplete,
                }),
        });
    return null == T
        ? (0, i.jsx)("div", { className: r()(b.al, n, { [b.Ij]: L }), style: M, children: t })
        : (0, i.jsxs)(c.D, {
              className: r()(b.a$, b.al, b.Yi, n, { [b.Ij]: L }),
              onClick: U,
              style: M,
              children: [
                  t,
                  "text" === T &&
                      (0, i.jsx)(u.E, {
                          color: "always-white",
                          variant: "text-xs/normal",
                          className: b.n_,
                          style: { fontSize: j },
                          children: S.intl.format(S.t.DYAleT, {}),
                      }),
                  "icon" === T &&
                      (0, i.jsx)("div", {
                          className: b.n_,
                          children: (0, i.jsx)(d.m, { size: "xxs", color: h.A.colors.WHITE.css }),
                      }),
              ],
          });
};
