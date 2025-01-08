var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(513431),
    u = r(442837),
    c = r(481060),
    d = r(607070),
    f = r(70097),
    _ = r(617136),
    h = r(918701),
    p = r(475595),
    m = r(566078),
    g = r(352084),
    E = r(78826),
    v = r(341907),
    I = r(388032),
    T = r(66330);
function b(e) {
    let n;
    let { className: r, quest: s, autoplay: b = !0, learnMoreStyle: y = null } = e,
        S = (0, u.e7)([d.Z], () => d.Z.useReducedMotion),
        A = a.useMemo(() => (0, p.fh)(s, p.eC.REWARD), [s]),
        N = a.useCallback(
            (n) => {
                var r;
                (0, l.k)(n.currentTarget, HTMLElement) && n.currentTarget.blur(),
                    (0, _._3)({
                        questId: s.id,
                        questContent: e.questContent,
                        questContentPosition: e.questContentPosition,
                        questContentCTA: _.jZ.REWARD_LEARN_MORE
                    }),
                    (0, v.navigateToQuestHome)(e.location, e.questContent, s.id),
                    null === (r = e.onClick) || void 0 === r || r.call(e, n);
            },
            [s.id, e]
        ),
        C = a.useRef(null),
        R = a.useRef(b),
        O = (0, h.Bg)(s.config);
    return (
        a.useEffect(() => {
            if (null != C.current) {
                if (!A.isAnimated || S) {
                    (C.current.currentTime = 0), C.current.pause();
                    return;
                }
                b && !R.current ? C.current.play() : !b && R.current && ((C.current.currentTime = 0), C.current.pause()), (R.current = b);
            }
        }, [b, A, S]),
        (n = O
            ? (0, i.jsx)(E.Fl, {
                  id: 'QuestRewardTile_rewardTileNitro',
                  children: (e) =>
                      (0, i.jsx)(g.Z, {
                          ref: e,
                          className: T.questRewardTileAsset
                      })
              })
            : A.isAnimated
              ? (0, i.jsx)(E.Fl, {
                    id: 'QuestRewardTile_rewardTileAnimated',
                    children: (e) => {
                        var n;
                        return (0, i.jsx)(f.Z, {
                            ref: (n) => {
                                (e.current = n), (C.current = n);
                            },
                            autoPlay: !S && b,
                            loop: !0,
                            muted: !0,
                            playsInline: !0,
                            className: T.questRewardTileAsset,
                            controls: !1,
                            children: (0, i.jsx)('source', {
                                src: A.url,
                                type: null !== (n = A.mimetype) && void 0 !== n ? n : void 0
                            })
                        });
                    }
                })
              : (0, i.jsx)(E.Fl, {
                    id: 'QuestRewardTile_rewardTileStatic',
                    children: (e) =>
                        (0, i.jsx)('img', {
                            ref: e,
                            alt: m.r.build(s.config).defaultReward.messages.name,
                            className: o()(T.questRewardTileAsset, T.questRewardTileAssetStatic),
                            src: A.url
                        })
                })),
        null == y
            ? (0, i.jsx)('div', {
                  className: o()(T.questRewardTile, r),
                  children: n
              })
            : (0, i.jsxs)(c.Clickable, {
                  className: o()(T.questRewardTileInteractive, T.questRewardTile, T.rewardHighlight, r),
                  onClick: N,
                  children: [
                      n,
                      (0, i.jsx)(c.Shine, {
                          className: T.shine,
                          shineSize: c.ShineSizes.SMALL
                      }),
                      'text' === y &&
                          (0, i.jsx)(c.Text, {
                              color: 'always-white',
                              variant: 'text-xs/normal',
                              className: T.questRewardTileDetailsLearnMore,
                              children: I.intl.format(I.t.DYAleX, {})
                          }),
                      'icon' === y &&
                          (0, i.jsx)('div', {
                              className: T.questRewardTileDetailsLearnMore,
                              children: (0, i.jsx)(c.CircleInformationIcon, {
                                  size: 'xxs',
                                  color: c.tokens.colors.WHITE.css
                              })
                          })
                  ]
              })
    );
}
n.Z = b;
