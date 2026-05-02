s.d(t, { A: () => v });
var r = s(627968),
    l = s(64700),
    n = s(503698),
    i = s.n(n),
    a = s(621466),
    c = s(17928),
    o = s(939249),
    u = s(834730),
    d = s(885574),
    m = s(661531),
    f = s(775602),
    A = s(607470),
    x = s(859387),
    T = s(18437),
    h = s(590202),
    j = s(801365),
    C = s(241124),
    R = s(415441),
    p = s(734736),
    N = s(617986),
    w = s(139384),
    E = s(190107),
    g = s(375708),
    _ = s(369453);
let v = function (e) {
    let t,
        {
            className: s,
            quest: n,
            autoplay: v = !0,
            learnMoreStyle: M = null,
            learnMoreFontSize: q,
            sourceQuestContent: y,
            lazyLoad: I = !1,
            fullWidth: Q = !1,
            style: W,
        } = e,
        L = (0, T.Ut)(),
        S = (0, c.bG)([f.A], () => f.A.useReducedMotion),
        b = l.useMemo(() => (0, x.tW)(n, x.fY.REWARD), [n]),
        k = l.useMemo(() => (0, x.tW)(n, x.fY.REWARD_IMAGE), [n]),
        D = l.useCallback(
            (t) => {
                (0, a.vq)(t.currentTarget, HTMLElement) && t.currentTarget.blur(),
                    L({
                        questId: n.id,
                        questContent: e.questContent,
                        questContentPosition: e.questContentPosition,
                        questContentCTA: h.Cy.REWARD_LEARN_MORE,
                        sourceQuestContent: y,
                    }),
                    (0, N.navigateToQuestHome)({ fromContent: e.questContent, questId: n.id }),
                    e.onClick?.(t);
            },
            [L, n.id, e, y],
        ),
        V = l.useRef(null),
        Y = l.useRef(v),
        H = (0, j.K9)(n.config);
    if (
        (l.useEffect(() => {
            if (null != V.current) {
                if (!b.isAnimated || S) {
                    (V.current.currentTime = 0), V.current.pause();
                    return;
                }
                v && !Y.current
                    ? V.current.play()
                    : !v && Y.current && ((V.current.currentTime = 0), V.current.pause()),
                    (Y.current = v);
            }
        }, [v, b, S]),
        (0, w.A)(V, E.rE.QUEST_HOME_DESKTOP),
        H)
    )
        t = (0, r.jsx)(C.Sn, {
            id: "QuestRewardTile_rewardTileNitro",
            children: (e) => (0, r.jsx)(p.A, { ref: e, className: _.eB }),
        });
    else if (I)
        t = (0, r.jsx)(R.N, {
            showVideo: v,
            imageAsset:
                null != k
                    ? {
                          asset: k,
                          assetId: "QuestRewardTile_rewardTileStatic",
                          className: _.XM,
                          alt: g.intl.string(g.t.UMclVN),
                      }
                    : void 0,
            videoAsset: { asset: b, assetId: "QuestRewardTile_rewardTileAnimated", className: i()(_.eB, _.WY) },
            onLoadComplete: e.onLoadComplete,
        });
    else if (b.isAnimated) {
        let s = (0, x.WV)(b.url);
        t = (0, r.jsx)(C.Sn, {
            id: "QuestRewardTile_rewardTileAnimated",
            children: (t) =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        null != s && (0, r.jsx)("img", { alt: g.intl.string(g.t.UMclVN), className: _.XM, src: s }),
                        (0, r.jsx)(A.A, {
                            ref: (e) => {
                                (t.current = e), (V.current = e);
                            },
                            autoPlay: !S && v,
                            loop: !0,
                            muted: !0,
                            playsInline: !0,
                            className: i()(_.eB, _.WY),
                            controls: !1,
                            onProgress: e.onLoadComplete,
                            children: (0, r.jsx)("source", { src: b.url, type: b.mimetype ?? void 0 }),
                        }),
                    ],
                }),
        });
    } else
        t = (0, r.jsx)(C.Sn, {
            id: "QuestRewardTile_rewardTileStatic",
            children: (t) =>
                (0, r.jsx)("img", {
                    ref: t,
                    alt: (0, j.mq)(n.config),
                    className: i()(_.eB, _.Qz),
                    src: b.url,
                    onLoad: e.onLoadComplete,
                }),
        });
    return null == M
        ? (0, r.jsx)("div", { className: i()(_.al, s, { [_.Ij]: Q }), style: W, children: t })
        : (0, r.jsxs)(o.D, {
              className: i()(_.a$, _.al, _.Yi, s, { [_.Ij]: Q }),
              onClick: D,
              style: W,
              children: [
                  t,
                  "text" === M &&
                      (0, r.jsx)(u.E, {
                          color: "always-white",
                          variant: "text-xs/normal",
                          className: _.n_,
                          style: { fontSize: q },
                          children: g.intl.format(g.t.DYAleT, {}),
                      }),
                  "icon" === M &&
                      (0, r.jsx)("div", {
                          className: _.n_,
                          children: (0, r.jsx)(d.m, { size: "xxs", color: m.A.colors.WHITE.css }),
                      }),
              ],
          });
};
