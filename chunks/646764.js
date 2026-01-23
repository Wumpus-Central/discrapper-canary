n.d(t, {
    A: () => v,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(621466),
    l = n(311907),
    c = n(397927),
    u = n(775602),
    d = n(607470),
    f = n(579473),
    p = n(18437),
    _ = n(590202),
    h = n(92246),
    m = n(241124),
    g = n(415441),
    E = n(734736),
    y = n(545986),
    b = n(985018),
    O = n(773570);
let v = function (e) {
    let t,
        {
            className: n,
            quest: a,
            autoplay: v = !0,
            learnMoreStyle: A = null,
            learnMoreFontSize: I,
            sourceQuestContent: S,
            lazyLoad: T = !1,
            style: C,
        } = e,
        N = (0, p.Ut)(),
        w = (0, l.bG)([u.A], () => u.A.useReducedMotion),
        R = i.useMemo(() => (0, f.tW)(a, f.fY.REWARD), [a]),
        P = i.useMemo(() => (0, f.tW)(a, f.fY.REWARD_IMAGE), [a]),
        D = i.useCallback(
            (t) => {
                var n;
                (0, o.vq)(t.currentTarget, HTMLElement) && t.currentTarget.blur(),
                    N({
                        questId: a.id,
                        questContent: e.questContent,
                        questContentPosition: e.questContentPosition,
                        questContentCTA: _.Cy.REWARD_LEARN_MORE,
                        sourceQuestContent: S,
                    }),
                    (0, y.navigateToQuestHome)({
                        fromContent: e.questContent,
                        questId: a.id,
                    }),
                    null == (n = e.onClick) || n.call(e, t);
            },
            [N, a.id, e, S],
        ),
        x = i.useRef(null),
        L = i.useRef(v),
        j = (0, h.K9)(a.config);
    return (
        i.useEffect(() => {
            if (null != x.current) {
                if (!R.isAnimated || w) {
                    (x.current.currentTime = 0), x.current.pause();
                    return;
                }
                v && !L.current
                    ? x.current.play()
                    : !v && L.current && ((x.current.currentTime = 0), x.current.pause()),
                    (L.current = v);
            }
        }, [v, R, w]),
        (t = j
            ? (0, r.jsx)(m.Sn, {
                  id: "QuestRewardTile_rewardTileNitro",
                  children: (e) =>
                      (0, r.jsx)(E.A, {
                          ref: e,
                          className: O.eB,
                      }),
              })
            : T
              ? (0, r.jsx)(g.N, {
                    showVideo: v,
                    imageAsset:
                        null != P
                            ? {
                                  asset: P,
                                  assetId: "QuestRewardTile_rewardTileStatic",
                                  className: O.XM,
                                  alt: b.intl.string(b.t.UMclVN),
                              }
                            : void 0,
                    videoAsset: {
                        asset: R,
                        assetId: "QuestRewardTile_rewardTileAnimated",
                        className: s()(O.eB, O.tv),
                    },
                    onLoadComplete: e.onLoadComplete,
                })
              : R.isAnimated
                ? (0, r.jsx)(m.Sn, {
                      id: "QuestRewardTile_rewardTileAnimated",
                      children: (t) => {
                          var n;
                          return (0, r.jsx)(d.A, {
                              ref: (e) => {
                                  (t.current = e), (x.current = e);
                              },
                              autoPlay: !w && v,
                              loop: !0,
                              muted: !0,
                              playsInline: !0,
                              className: O.eB,
                              controls: !1,
                              onProgress: e.onLoadComplete,
                              children: (0, r.jsx)("source", {
                                  src: R.url,
                                  type: null != (n = R.mimetype) ? n : void 0,
                              }),
                          });
                      },
                  })
                : (0, r.jsx)(m.Sn, {
                      id: "QuestRewardTile_rewardTileStatic",
                      children: (t) =>
                          (0, r.jsx)("img", {
                              ref: t,
                              alt: (0, h.mq)(a.config),
                              className: s()(O.eB, O.Qz),
                              src: R.url,
                              onLoad: e.onLoadComplete,
                          }),
                  })),
        null == A
            ? (0, r.jsx)("div", {
                  className: s()(O.al, n),
                  style: C,
                  children: t,
              })
            : (0, r.jsxs)(c.DUT, {
                  className: s()(O.a$, O.al, O.Yi, n),
                  onClick: D,
                  style: C,
                  children: [
                      t,
                      "text" === A &&
                          (0, r.jsx)(c.Text, {
                              color: "always-white",
                              variant: "text-xs/normal",
                              className: O.n_,
                              style: {
                                  fontSize: I,
                              },
                              children: b.intl.format(b.t.DYAleT, {}),
                          }),
                      "icon" === A &&
                          (0, r.jsx)("div", {
                              className: O.n_,
                              children: (0, r.jsx)(c.mir, {
                                  size: "xxs",
                                  color: c.LU0.colors.WHITE.css,
                              }),
                          }),
                  ],
              })
    );
};
