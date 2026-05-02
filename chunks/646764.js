"use strict";
n.d(t, { A: () => O });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(621466),
    l = n(17928),
    u = n(939249),
    c = n(834730),
    d = n(885574),
    _ = n(661531),
    f = n(775602),
    h = n(607470),
    p = n(859387),
    E = n(18437),
    m = n(590202),
    g = n(801365),
    A = n(241124),
    I = n(415441),
    T = n(734736),
    S = n(617986),
    N = n(139384),
    y = n(190107),
    C = n(375708),
    v = n(369453);
let O = function (e) {
    let t,
        {
            className: n,
            quest: s,
            autoplay: O = !0,
            learnMoreStyle: R = null,
            learnMoreFontSize: b,
            sourceQuestContent: D,
            lazyLoad: L = !1,
            fullWidth: w = !1,
            style: M,
        } = e,
        P = (0, E.Ut)(),
        x = (0, l.bG)([f.A], () => f.A.useReducedMotion),
        U = r.useMemo(() => (0, p.tW)(s, p.fY.REWARD), [s]),
        k = r.useMemo(() => (0, p.tW)(s, p.fY.REWARD_IMAGE), [s]),
        G = r.useCallback(
            (t) => {
                (0, o.vq)(t.currentTarget, HTMLElement) && t.currentTarget.blur(),
                    P({
                        questId: s.id,
                        questContent: e.questContent,
                        questContentPosition: e.questContentPosition,
                        questContentCTA: m.Cy.REWARD_LEARN_MORE,
                        sourceQuestContent: D,
                    }),
                    (0, S.navigateToQuestHome)({ fromContent: e.questContent, questId: s.id }),
                    e.onClick?.(t);
            },
            [P, s.id, e, D],
        ),
        F = r.useRef(null),
        V = r.useRef(O),
        B = (0, g.K9)(s.config);
    if (
        (r.useEffect(() => {
            if (null != F.current) {
                if (!U.isAnimated || x) {
                    (F.current.currentTime = 0), F.current.pause();
                    return;
                }
                O && !V.current
                    ? F.current.play()
                    : !O && V.current && ((F.current.currentTime = 0), F.current.pause()),
                    (V.current = O);
            }
        }, [O, U, x]),
        (0, N.A)(F, y.rE.QUEST_HOME_DESKTOP),
        B)
    )
        t = (0, i.jsx)(A.Sn, {
            id: "QuestRewardTile_rewardTileNitro",
            children: (e) => (0, i.jsx)(T.A, { ref: e, className: v.eB }),
        });
    else if (L)
        t = (0, i.jsx)(I.N, {
            showVideo: O,
            imageAsset:
                null != k
                    ? {
                          asset: k,
                          assetId: "QuestRewardTile_rewardTileStatic",
                          className: v.XM,
                          alt: C.intl.string(C.t.UMclVN),
                      }
                    : void 0,
            videoAsset: { asset: U, assetId: "QuestRewardTile_rewardTileAnimated", className: a()(v.eB, v.WY) },
            onLoadComplete: e.onLoadComplete,
        });
    else if (U.isAnimated) {
        let n = (0, p.WV)(U.url);
        t = (0, i.jsx)(A.Sn, {
            id: "QuestRewardTile_rewardTileAnimated",
            children: (t) =>
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        null != n && (0, i.jsx)("img", { alt: C.intl.string(C.t.UMclVN), className: v.XM, src: n }),
                        (0, i.jsx)(h.A, {
                            ref: (e) => {
                                (t.current = e), (F.current = e);
                            },
                            autoPlay: !x && O,
                            loop: !0,
                            muted: !0,
                            playsInline: !0,
                            className: a()(v.eB, v.WY),
                            controls: !1,
                            onProgress: e.onLoadComplete,
                            children: (0, i.jsx)("source", { src: U.url, type: U.mimetype ?? void 0 }),
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
                    alt: (0, g.mq)(s.config),
                    className: a()(v.eB, v.Qz),
                    src: U.url,
                    onLoad: e.onLoadComplete,
                }),
        });
    return null == R
        ? (0, i.jsx)("div", { className: a()(v.al, n, { [v.Ij]: w }), style: M, children: t })
        : (0, i.jsxs)(u.D, {
              className: a()(v.a$, v.al, v.Yi, n, { [v.Ij]: w }),
              onClick: G,
              style: M,
              children: [
                  t,
                  "text" === R &&
                      (0, i.jsx)(c.E, {
                          color: "always-white",
                          variant: "text-xs/normal",
                          className: v.n_,
                          style: { fontSize: b },
                          children: C.intl.format(C.t.DYAleT, {}),
                      }),
                  "icon" === R &&
                      (0, i.jsx)("div", {
                          className: v.n_,
                          children: (0, i.jsx)(d.m, { size: "xxs", color: _.A.colors.WHITE.css }),
                      }),
              ],
          });
};
