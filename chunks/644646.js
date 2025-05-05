n.d(t, { Z: () => v });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
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
    O = n(734506);
let v = function (e) {
    let t,
        { className: n, quest: a, autoplay: v = !0, learnMoreStyle: I = null } = e,
        S = (0, _.O5)(),
        T = (0, l.e7)([f.Z], () => f.Z.isFocused()),
        A = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
        N = i.useMemo(() => (0, h.fh)(a, h.eC.REWARD), [a]),
        C = i.useCallback(
            (t) => {
                var n;
                (0, s.k)(t.currentTarget, HTMLElement) && t.currentTarget.blur(),
                    S({
                        questId: a.id,
                        questContent: e.questContent,
                        questContentPosition: e.questContentPosition,
                        questContentCTA: _.jZ.REWARD_LEARN_MORE
                    }),
                    (0, b.navigateToQuestHome)({
                        fromContent: e.questContent,
                        questId: a.id
                    }),
                    null == (n = e.onClick) || n.call(e, t);
            },
            [S, a.id, e]
        ),
        R = i.useRef(null),
        P = i.useRef(v),
        w = (0, p.Bg)(a.config);
    return (
        i.useEffect(() => {
            if (null != R.current) {
                if (!N.isAnimated || A) {
                    (R.current.currentTime = 0), R.current.pause();
                    return;
                }
                v && !P.current ? R.current.play() : !v && P.current && ((R.current.currentTime = 0), R.current.pause()), (P.current = v);
            }
        }, [v, N, A]),
        (t = w
            ? (0, r.jsx)(E.Fl, {
                  id: 'QuestRewardTile_rewardTileNitro',
                  children: (e) =>
                      (0, r.jsx)(g.Z, {
                          ref: e,
                          className: O.questRewardTileAsset
                      })
              })
            : N.isAnimated
              ? (0, r.jsx)(E.Fl, {
                    id: 'QuestRewardTile_rewardTileAnimated',
                    children: (e) => {
                        var t;
                        return (0, r.jsx)(d.Z, {
                            ref: (t) => {
                                (e.current = t), (R.current = t);
                            },
                            autoPlay: !A && v,
                            loop: !0,
                            muted: !0,
                            playsInline: !0,
                            className: O.questRewardTileAsset,
                            controls: !1,
                            children: (0, r.jsx)('source', {
                                src: N.url,
                                type: null != (t = N.mimetype) ? t : void 0
                            })
                        });
                    }
                })
              : (0, r.jsx)(E.Fl, {
                    id: 'QuestRewardTile_rewardTileStatic',
                    children: (e) =>
                        (0, r.jsx)('img', {
                            ref: e,
                            alt: m.r.build(a.config).defaultReward.messages.name,
                            className: o()(O.questRewardTileAsset, O.questRewardTileAssetStatic),
                            src: N.url
                        })
                })),
        null == I
            ? (0, r.jsx)('div', {
                  className: o()(O.questRewardTile, n),
                  children: t
              })
            : (0, r.jsxs)(c.P3F, {
                  className: o()(O.questRewardTileInteractive, O.questRewardTile, O.rewardHighlight, n),
                  onClick: C,
                  children: [
                      t,
                      (0, r.jsx)(c.ZX5, {
                          className: O.shine,
                          shineSize: c.rHe.SMALL,
                          shinePaused: !T || A
                      }),
                      'text' === I &&
                          (0, r.jsx)(c.Text, {
                              color: 'always-white',
                              variant: 'text-xs/normal',
                              className: O.questRewardTileDetailsLearnMore,
                              children: y.intl.format(y.t.DYAleX, {})
                          }),
                      'icon' === I &&
                          (0, r.jsx)('div', {
                              className: O.questRewardTileDetailsLearnMore,
                              children: (0, r.jsx)(c.d3s, {
                                  size: 'xxs',
                                  color: c.TVs.colors.WHITE.css
                              })
                          })
                  ]
              })
    );
};
