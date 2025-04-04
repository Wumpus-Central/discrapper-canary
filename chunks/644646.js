n.d(t, { Z: () => v });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(374470),
    l = n(442837),
    c = n(481060),
    u = n(607070),
    d = n(70097),
    f = n(617136),
    _ = n(918701),
    p = n(475595),
    h = n(566078),
    m = n(352084),
    g = n(78826),
    E = n(341907),
    b = n(388032),
    y = n(734506);
let v = function (e) {
    let t,
        { className: n, quest: o, autoplay: v = !0, learnMoreStyle: O = null } = e,
        I = (0, f.O5)(),
        S = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
        T = i.useMemo(() => (0, p.fh)(o, p.eC.REWARD), [o]),
        N = i.useCallback(
            (t) => {
                var n;
                (0, s.k)(t.currentTarget, HTMLElement) && t.currentTarget.blur(),
                    I({
                        questId: o.id,
                        questContent: e.questContent,
                        questContentPosition: e.questContentPosition,
                        questContentCTA: f.jZ.REWARD_LEARN_MORE
                    }),
                    (0, E.navigateToQuestHome)({
                        fromContent: e.questContent,
                        questId: o.id
                    }),
                    null == (n = e.onClick) || n.call(e, t);
            },
            [I, o.id, e]
        ),
        A = i.useRef(null),
        C = i.useRef(v),
        R = (0, _.Bg)(o.config);
    return (
        i.useEffect(() => {
            if (null != A.current) {
                if (!T.isAnimated || S) {
                    (A.current.currentTime = 0), A.current.pause();
                    return;
                }
                v && !C.current ? A.current.play() : !v && C.current && ((A.current.currentTime = 0), A.current.pause()), (C.current = v);
            }
        }, [v, T, S]),
        (t = R
            ? (0, r.jsx)(g.Fl, {
                  id: 'QuestRewardTile_rewardTileNitro',
                  children: (e) =>
                      (0, r.jsx)(m.Z, {
                          ref: e,
                          className: y.questRewardTileAsset
                      })
              })
            : T.isAnimated
              ? (0, r.jsx)(g.Fl, {
                    id: 'QuestRewardTile_rewardTileAnimated',
                    children: (e) => {
                        var t;
                        return (0, r.jsx)(d.Z, {
                            ref: (t) => {
                                (e.current = t), (A.current = t);
                            },
                            autoPlay: !S && v,
                            loop: !0,
                            muted: !0,
                            playsInline: !0,
                            className: y.questRewardTileAsset,
                            controls: !1,
                            children: (0, r.jsx)('source', {
                                src: T.url,
                                type: null != (t = T.mimetype) ? t : void 0
                            })
                        });
                    }
                })
              : (0, r.jsx)(g.Fl, {
                    id: 'QuestRewardTile_rewardTileStatic',
                    children: (e) =>
                        (0, r.jsx)('img', {
                            ref: e,
                            alt: h.r.build(o.config).defaultReward.messages.name,
                            className: a()(y.questRewardTileAsset, y.questRewardTileAssetStatic),
                            src: T.url
                        })
                })),
        null == O
            ? (0, r.jsx)('div', {
                  className: a()(y.questRewardTile, n),
                  children: t
              })
            : (0, r.jsxs)(c.P3F, {
                  className: a()(y.questRewardTileInteractive, y.questRewardTile, y.rewardHighlight, n),
                  onClick: N,
                  children: [
                      t,
                      (0, r.jsx)(c.ZX5, {
                          className: y.shine,
                          shineSize: c.rHe.SMALL
                      }),
                      'text' === O &&
                          (0, r.jsx)(c.Text, {
                              color: 'always-white',
                              variant: 'text-xs/normal',
                              className: y.questRewardTileDetailsLearnMore,
                              children: b.NW.format(b.t.DYAleX, {})
                          }),
                      'icon' === O &&
                          (0, r.jsx)('div', {
                              className: y.questRewardTileDetailsLearnMore,
                              children: (0, r.jsx)(c.d3s, {
                                  size: 'xxs',
                                  color: c.TVs.colors.WHITE.css
                              })
                          })
                  ]
              })
    );
};
