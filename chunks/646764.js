"use strict";
n.d(t, { A: () => R });
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
    p = n(287809),
    E = n(859387),
    m = n(18437),
    g = n(590202),
    A = n(801365),
    I = n(241124),
    T = n(415441),
    S = n(734736),
    N = n(617986),
    y = n(139384),
    C = n(190107),
    v = n(375708),
    O = n(369453);
let R = function (e) {
    let t,
        {
            className: n,
            quest: s,
            autoplay: R = !0,
            learnMoreStyle: b = null,
            learnMoreFontSize: D,
            sourceQuestContent: L,
            lazyLoad: w = !1,
            fullWidth: M = !1,
            style: P,
        } = e,
        x = (0, m.Ut)(),
        U = (0, l.bG)([f.A], () => f.A.useReducedMotion),
        k = (0, l.bG)([p.default], () => p.default.getCurrentUser()),
        G = r.useMemo(
            () =>
                (0, A.ks)(s.config) && s.userStatus?.claimedAt != null
                    ? v.intl.formatToPlainString(v.t["nLXlh+"], {
                          orbAmount: s.userStatus?.orbQuantityClaimed ?? (0, A._Z)(s.config) ?? 0,
                      })
                    : (0, A.mq)(s.config, k),
            [s.config, s.userStatus?.claimedAt, s.userStatus?.orbQuantityClaimed, k],
        ),
        F = r.useMemo(() => (0, E.tW)(s, E.fY.REWARD), [s]),
        V = r.useMemo(() => (0, E.tW)(s, E.fY.REWARD_IMAGE), [s]),
        B = r.useCallback(
            (t) => {
                (0, o.vq)(t.currentTarget, HTMLElement) && t.currentTarget.blur(),
                    x({
                        questId: s.id,
                        questContent: e.questContent,
                        questContentPosition: e.questContentPosition,
                        questContentCTA: g.Cy.REWARD_LEARN_MORE,
                        sourceQuestContent: L,
                    }),
                    (0, N.navigateToQuestHome)({ fromContent: e.questContent, questId: s.id }),
                    e.onClick?.(t);
            },
            [x, s.id, e, L],
        ),
        H = r.useRef(null),
        j = r.useRef(R),
        Y = (0, A.K9)(s.config);
    if (
        (r.useEffect(() => {
            if (null != H.current) {
                if (!F.isAnimated || U) {
                    (H.current.currentTime = 0), H.current.pause();
                    return;
                }
                R && !j.current
                    ? H.current.play()
                    : !R && j.current && ((H.current.currentTime = 0), H.current.pause()),
                    (j.current = R);
            }
        }, [R, F, U]),
        (0, y.A)(H, C.rE.QUEST_HOME_DESKTOP),
        Y)
    )
        t = (0, i.jsx)(I.Sn, {
            id: "QuestRewardTile_rewardTileNitro",
            children: (e) => (0, i.jsx)(S.A, { ref: e, className: O.eB }),
        });
    else if (w)
        t = (0, i.jsx)(T.N, {
            showVideo: R,
            imageAsset:
                null != V
                    ? {
                          asset: V,
                          assetId: "QuestRewardTile_rewardTileStatic",
                          className: O.XM,
                          alt: v.intl.string(v.t.UMclVN),
                      }
                    : void 0,
            videoAsset: { asset: F, assetId: "QuestRewardTile_rewardTileAnimated", className: a()(O.eB, O.WY) },
            onLoadComplete: e.onLoadComplete,
        });
    else if (F.isAnimated) {
        let n = (0, E.WV)(F.url);
        t = (0, i.jsx)(I.Sn, {
            id: "QuestRewardTile_rewardTileAnimated",
            children: (t) =>
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        null != n && (0, i.jsx)("img", { alt: v.intl.string(v.t.UMclVN), className: O.XM, src: n }),
                        (0, i.jsx)(h.A, {
                            ref: (e) => {
                                (t.current = e), (H.current = e);
                            },
                            autoPlay: !U && R,
                            loop: !0,
                            muted: !0,
                            playsInline: !0,
                            className: a()(O.eB, O.WY),
                            controls: !1,
                            onProgress: e.onLoadComplete,
                            children: (0, i.jsx)("source", { src: F.url, type: F.mimetype ?? void 0 }),
                        }),
                    ],
                }),
        });
    } else
        t = (0, i.jsx)(I.Sn, {
            id: "QuestRewardTile_rewardTileStatic",
            children: (t) =>
                (0, i.jsx)("img", { ref: t, alt: G, className: a()(O.eB, O.Qz), src: F.url, onLoad: e.onLoadComplete }),
        });
    return null == b
        ? (0, i.jsx)("div", { className: a()(O.al, n, { [O.Ij]: M }), style: P, children: t })
        : (0, i.jsxs)(u.D, {
              className: a()(O.a$, O.al, O.Yi, n, { [O.Ij]: M }),
              onClick: B,
              style: P,
              children: [
                  t,
                  "text" === b &&
                      (0, i.jsx)(c.E, {
                          color: "always-white",
                          variant: "text-xs/normal",
                          className: O.n_,
                          style: { fontSize: D },
                          children: v.intl.format(v.t.DYAleT, {}),
                      }),
                  "icon" === b &&
                      (0, i.jsx)("div", {
                          className: O.n_,
                          children: (0, i.jsx)(d.m, { size: "xxs", color: _.A.colors.WHITE.css }),
                      }),
              ],
          });
};
