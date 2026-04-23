"use strict";
n.d(t, { A: () => O });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(621466),
    l = n(311907),
    u = n(939249),
    c = n(834730),
    d = n(885574),
    _ = n(827734),
    f = n(775602),
    p = n(607470),
    h = n(579473),
    E = n(18437),
    m = n(590202),
    g = n(92246),
    A = n(241124),
    I = n(415441),
    T = n(734736),
    S = n(545986),
    y = n(139384),
    N = n(654487),
    v = n(985018),
    C = n(369453);
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
        k = i.useMemo(() => (0, h.tW)(s, h.fY.REWARD), [s]),
        U = i.useMemo(() => (0, h.tW)(s, h.fY.REWARD_IMAGE), [s]),
        G = i.useCallback(
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
        F = i.useRef(null),
        V = i.useRef(O),
        B = (0, g.K9)(s.config);
    if (
        (i.useEffect(() => {
            if (null != F.current) {
                if (!k.isAnimated || x) {
                    (F.current.currentTime = 0), F.current.pause();
                    return;
                }
                O && !V.current
                    ? F.current.play()
                    : !O && V.current && ((F.current.currentTime = 0), F.current.pause()),
                    (V.current = O);
            }
        }, [O, k, x]),
        (0, y.A)(F, N.rE.QUEST_HOME_DESKTOP),
        B)
    )
        t = (0, r.jsx)(A.Sn, {
            id: "QuestRewardTile_rewardTileNitro",
            children: (e) => (0, r.jsx)(T.A, { ref: e, className: C.eB }),
        });
    else if (L)
        t = (0, r.jsx)(I.N, {
            showVideo: O,
            imageAsset:
                null != U
                    ? {
                          asset: U,
                          assetId: "QuestRewardTile_rewardTileStatic",
                          className: C.XM,
                          alt: v.intl.string(v.t.UMclVN),
                      }
                    : void 0,
            videoAsset: { asset: k, assetId: "QuestRewardTile_rewardTileAnimated", className: a()(C.eB, C.WY) },
            onLoadComplete: e.onLoadComplete,
        });
    else if (k.isAnimated) {
        let n = (0, h.WV)(k.url);
        t = (0, r.jsx)(A.Sn, {
            id: "QuestRewardTile_rewardTileAnimated",
            children: (t) =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        null != n && (0, r.jsx)("img", { alt: v.intl.string(v.t.UMclVN), className: C.XM, src: n }),
                        (0, r.jsx)(p.A, {
                            ref: (e) => {
                                (t.current = e), (F.current = e);
                            },
                            autoPlay: !x && O,
                            loop: !0,
                            muted: !0,
                            playsInline: !0,
                            className: a()(C.eB, C.WY),
                            controls: !1,
                            onProgress: e.onLoadComplete,
                            children: (0, r.jsx)("source", { src: k.url, type: k.mimetype ?? void 0 }),
                        }),
                    ],
                }),
        });
    } else
        t = (0, r.jsx)(A.Sn, {
            id: "QuestRewardTile_rewardTileStatic",
            children: (t) =>
                (0, r.jsx)("img", {
                    ref: t,
                    alt: (0, g.mq)(s.config),
                    className: a()(C.eB, C.Qz),
                    src: k.url,
                    onLoad: e.onLoadComplete,
                }),
        });
    return null == R
        ? (0, r.jsx)("div", { className: a()(C.al, n, { [C.Ij]: w }), style: M, children: t })
        : (0, r.jsxs)(u.D, {
              className: a()(C.a$, C.al, C.Yi, n, { [C.Ij]: w }),
              onClick: G,
              style: M,
              children: [
                  t,
                  "text" === R &&
                      (0, r.jsx)(c.E, {
                          color: "always-white",
                          variant: "text-xs/normal",
                          className: C.n_,
                          style: { fontSize: b },
                          children: v.intl.format(v.t.DYAleT, {}),
                      }),
                  "icon" === R &&
                      (0, r.jsx)("div", {
                          className: C.n_,
                          children: (0, r.jsx)(d.m, { size: "xxs", color: _.A.colors.WHITE.css }),
                      }),
              ],
          });
};
