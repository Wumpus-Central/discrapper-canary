n.d(t, {
    A: () => O,
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
    f = n(216456),
    p = n(579473),
    _ = n(92246),
    h = n(241124),
    m = n(415441),
    g = n(734736),
    E = n(545986),
    b = n(985018),
    y = n(773570);
let O = function (e) {
    let t,
        {
            className: n,
            quest: a,
            autoplay: O = !0,
            learnMoreStyle: A = null,
            learnMoreFontSize: v,
            sourceQuestContent: S,
            lazyLoad: I = !1,
            style: T,
        } = e,
        C = (0, f.Ut)(),
        N = (0, l.bG)([u.A], () => u.A.useReducedMotion),
        R = i.useMemo(() => (0, p.tW)(a, p.fY.REWARD), [a]),
        w = i.useMemo(() => (0, p.tW)(a, p.fY.REWARD_IMAGE), [a]),
        P = i.useCallback(
            (t) => {
                var n;
                (0, o.vq)(t.currentTarget, HTMLElement) && t.currentTarget.blur(),
                    C({
                        questId: a.id,
                        questContent: e.questContent,
                        questContentPosition: e.questContentPosition,
                        questContentCTA: f.Cy.REWARD_LEARN_MORE,
                        sourceQuestContent: S,
                    }),
                    (0, E.navigateToQuestHome)({
                        fromContent: e.questContent,
                        questId: a.id,
                    }),
                    null == (n = e.onClick) || n.call(e, t);
            },
            [C, a.id, e, S],
        ),
        D = i.useRef(null),
        x = i.useRef(O),
        L = (0, _.K9)(a.config);
    return (
        i.useEffect(() => {
            if (null != D.current) {
                if (!R.isAnimated || N) {
                    (D.current.currentTime = 0), D.current.pause();
                    return;
                }
                O && !x.current
                    ? D.current.play()
                    : !O && x.current && ((D.current.currentTime = 0), D.current.pause()),
                    (x.current = O);
            }
        }, [O, R, N]),
        (t = L
            ? (0, r.jsx)(h.Sn, {
                  id: "QuestRewardTile_rewardTileNitro",
                  children: (e) =>
                      (0, r.jsx)(g.A, {
                          ref: e,
                          className: y.eB,
                      }),
              })
            : I
              ? (0, r.jsx)(m.N, {
                    showVideo: O,
                    imageAsset:
                        null != w
                            ? {
                                  asset: w,
                                  assetId: "QuestRewardTile_rewardTileStatic",
                                  className: y.XM,
                                  alt: b.intl.string(b.t.UMclVN),
                              }
                            : void 0,
                    videoAsset: {
                        asset: R,
                        assetId: "QuestRewardTile_rewardTileAnimated",
                        className: s()(y.eB, y.tv),
                    },
                    onLoadComplete: e.onLoadComplete,
                })
              : R.isAnimated
                ? (0, r.jsx)(h.Sn, {
                      id: "QuestRewardTile_rewardTileAnimated",
                      children: (t) => {
                          var n;
                          return (0, r.jsx)(d.A, {
                              ref: (e) => {
                                  (t.current = e), (D.current = e);
                              },
                              autoPlay: !N && O,
                              loop: !0,
                              muted: !0,
                              playsInline: !0,
                              className: y.eB,
                              controls: !1,
                              onProgress: e.onLoadComplete,
                              children: (0, r.jsx)("source", {
                                  src: R.url,
                                  type: null != (n = R.mimetype) ? n : void 0,
                              }),
                          });
                      },
                  })
                : (0, r.jsx)(h.Sn, {
                      id: "QuestRewardTile_rewardTileStatic",
                      children: (t) =>
                          (0, r.jsx)("img", {
                              ref: t,
                              alt: (0, _.mq)(a.config),
                              className: s()(y.eB, y.Qz),
                              src: R.url,
                              onLoad: e.onLoadComplete,
                          }),
                  })),
        null == A
            ? (0, r.jsx)("div", {
                  className: s()(y.al, n),
                  style: T,
                  children: t,
              })
            : (0, r.jsxs)(c.DUT, {
                  className: s()(y.a$, y.al, y.Yi, n),
                  onClick: P,
                  style: T,
                  children: [
                      t,
                      "text" === A &&
                          (0, r.jsx)(c.Text, {
                              color: "always-white",
                              variant: "text-xs/normal",
                              className: y.n_,
                              style: {
                                  fontSize: v,
                              },
                              children: b.intl.format(b.t.DYAleT, {}),
                          }),
                      "icon" === A &&
                          (0, r.jsx)("div", {
                              className: y.n_,
                              children: (0, r.jsx)(c.mir, {
                                  size: "xxs",
                                  color: c.LU0.colors.WHITE.css,
                              }),
                          }),
                  ],
              })
    );
};
