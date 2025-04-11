n.d(t, { Z: () => O });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(374470),
    l = n(442837),
    c = n(481060),
    u = n(607070),
    d = n(70097),
    f = n(451478),
    _ = n(617136),
    p = n(918701),
    h = n(475595),
    m = n(566078),
    g = n(352084),
    E = n(78826),
    b = n(341907),
    y = n(388032),
    v = n(734506);
let O = function (e) {
    let t,
        { className: n, quest: o, autoplay: O = !0, learnMoreStyle: I = null } = e,
        S = (0, _.O5)(),
        T = (0, l.e7)([f.Z], () => f.Z.isFocused()),
        N = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
        A = i.useMemo(() => (0, h.fh)(o, h.eC.REWARD), [o]),
        C = i.useCallback(
            (t) => {
                var n;
                (0, s.k)(t.currentTarget, HTMLElement) && t.currentTarget.blur(),
                    S({
                        questId: o.id,
                        questContent: e.questContent,
                        questContentPosition: e.questContentPosition,
                        questContentCTA: _.jZ.REWARD_LEARN_MORE
                    }),
                    (0, b.navigateToQuestHome)({
                        fromContent: e.questContent,
                        questId: o.id
                    }),
                    null == (n = e.onClick) || n.call(e, t);
            },
            [S, o.id, e]
        ),
        P = i.useRef(null),
        R = i.useRef(O),
        w = (0, p.Bg)(o.config);
    return (
        i.useEffect(() => {
            if (null != P.current) {
                if (!A.isAnimated || N) {
                    (P.current.currentTime = 0), P.current.pause();
                    return;
                }
                O && !R.current ? P.current.play() : !O && R.current && ((P.current.currentTime = 0), P.current.pause()), (R.current = O);
            }
        }, [O, A, N]),
        (t = w
            ? (0, r.jsx)(E.Fl, {
                  id: 'QuestRewardTile_rewardTileNitro',
                  children: (e) =>
                      (0, r.jsx)(g.Z, {
                          ref: e,
                          className: v.questRewardTileAsset
                      })
              })
            : A.isAnimated
              ? (0, r.jsx)(E.Fl, {
                    id: 'QuestRewardTile_rewardTileAnimated',
                    children: (e) => {
                        var t;
                        return (0, r.jsx)(d.Z, {
                            ref: (t) => {
                                (e.current = t), (P.current = t);
                            },
                            autoPlay: !N && O,
                            loop: !0,
                            muted: !0,
                            playsInline: !0,
                            className: v.questRewardTileAsset,
                            controls: !1,
                            children: (0, r.jsx)('source', {
                                src: A.url,
                                type: null != (t = A.mimetype) ? t : void 0
                            })
                        });
                    }
                })
              : (0, r.jsx)(E.Fl, {
                    id: 'QuestRewardTile_rewardTileStatic',
                    children: (e) =>
                        (0, r.jsx)('img', {
                            ref: e,
                            alt: m.r.build(o.config).defaultReward.messages.name,
                            className: a()(v.questRewardTileAsset, v.questRewardTileAssetStatic),
                            src: A.url
                        })
                })),
        null == I
            ? (0, r.jsx)('div', {
                  className: a()(v.questRewardTile, n),
                  children: t
              })
            : (0, r.jsxs)(c.P3F, {
                  className: a()(v.questRewardTileInteractive, v.questRewardTile, v.rewardHighlight, n),
                  onClick: C,
                  children: [
                      t,
                      (0, r.jsx)(c.ZX5, {
                          className: v.shine,
                          shineSize: c.rHe.SMALL,
                          shinePaused: !T || N
                      }),
                      'text' === I &&
                          (0, r.jsx)(c.Text, {
                              color: 'always-white',
                              variant: 'text-xs/normal',
                              className: v.questRewardTileDetailsLearnMore,
                              children: y.NW.format(y.t.DYAleX, {})
                          }),
                      'icon' === I &&
                          (0, r.jsx)('div', {
                              className: v.questRewardTileDetailsLearnMore,
                              children: (0, r.jsx)(c.d3s, {
                                  size: 'xxs',
                                  color: c.TVs.colors.WHITE.css
                              })
                          })
                  ]
              })
    );
};
