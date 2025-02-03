n.d(t, { Z: () => I });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(374470),
    l = n(442837),
    u = n(481060),
    c = n(607070),
    d = n(70097),
    f = n(617136),
    _ = n(918701),
    p = n(475595),
    h = n(566078),
    m = n(352084),
    g = n(78826),
    E = n(341907),
    v = n(388032),
    y = n(66330);
let I = function (e) {
    let t;
    let { className: n, quest: a, autoplay: I = !0, learnMoreStyle: b = null } = e,
        T = (0, f.O5)(),
        S = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
        A = r.useMemo(() => (0, p.fh)(a, p.eC.REWARD), [a]),
        N = r.useCallback(
            (t) => {
                var n;
                (0, o.k)(t.currentTarget, HTMLElement) && t.currentTarget.blur(),
                    T({
                        questId: a.id,
                        questContent: e.questContent,
                        questContentPosition: e.questContentPosition,
                        questContentCTA: f.jZ.REWARD_LEARN_MORE
                    }),
                    (0, E.navigateToQuestHome)(e.location, e.questContent, a.id),
                    null === (n = e.onClick) || void 0 === n || n.call(e, t);
            },
            [T, a.id, e]
        ),
        C = r.useRef(null),
        R = r.useRef(I),
        O = (0, _.Bg)(a.config);
    return (
        r.useEffect(() => {
            if (null != C.current) {
                if (!A.isAnimated || S) {
                    (C.current.currentTime = 0), C.current.pause();
                    return;
                }
                I && !R.current ? C.current.play() : !I && R.current && ((C.current.currentTime = 0), C.current.pause()), (R.current = I);
            }
        }, [I, A, S]),
        (t = O
            ? (0, i.jsx)(g.Fl, {
                  id: 'QuestRewardTile_rewardTileNitro',
                  children: (e) =>
                      (0, i.jsx)(m.Z, {
                          ref: e,
                          className: y.questRewardTileAsset
                      })
              })
            : A.isAnimated
              ? (0, i.jsx)(g.Fl, {
                    id: 'QuestRewardTile_rewardTileAnimated',
                    children: (e) => {
                        var t;
                        return (0, i.jsx)(d.Z, {
                            ref: (t) => {
                                (e.current = t), (C.current = t);
                            },
                            autoPlay: !S && I,
                            loop: !0,
                            muted: !0,
                            playsInline: !0,
                            className: y.questRewardTileAsset,
                            controls: !1,
                            children: (0, i.jsx)('source', {
                                src: A.url,
                                type: null !== (t = A.mimetype) && void 0 !== t ? t : void 0
                            })
                        });
                    }
                })
              : (0, i.jsx)(g.Fl, {
                    id: 'QuestRewardTile_rewardTileStatic',
                    children: (e) =>
                        (0, i.jsx)('img', {
                            ref: e,
                            alt: h.r.build(a.config).defaultReward.messages.name,
                            className: s()(y.questRewardTileAsset, y.questRewardTileAssetStatic),
                            src: A.url
                        })
                })),
        null == b
            ? (0, i.jsx)('div', {
                  className: s()(y.questRewardTile, n),
                  children: t
              })
            : (0, i.jsxs)(u.P3F, {
                  className: s()(y.questRewardTileInteractive, y.questRewardTile, y.rewardHighlight, n),
                  onClick: N,
                  children: [
                      t,
                      (0, i.jsx)(u.ZX5, {
                          className: y.shine,
                          shineSize: u.rHe.SMALL
                      }),
                      'text' === b &&
                          (0, i.jsx)(u.Text, {
                              color: 'always-white',
                              variant: 'text-xs/normal',
                              className: y.questRewardTileDetailsLearnMore,
                              children: v.intl.format(v.t.DYAleX, {})
                          }),
                      'icon' === b &&
                          (0, i.jsx)('div', {
                              className: y.questRewardTileDetailsLearnMore,
                              children: (0, i.jsx)(u.d3s, {
                                  size: 'xxs',
                                  color: u.TVs.colors.WHITE.css
                              })
                          })
                  ]
              })
    );
};
