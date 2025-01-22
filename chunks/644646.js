var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(513431),
    u = r(442837),
    c = r(481060),
    d = r(607070),
    f = r(70097),
    p = r(617136),
    h = r(918701),
    _ = r(475595),
    m = r(566078),
    g = r(352084),
    E = r(78826),
    v = r(341907),
    y = r(388032),
    b = r(66330);
function I(e) {
    let n;
    let { className: r, quest: o, autoplay: I = !0, learnMoreStyle: T = null } = e,
        S = (0, p.O5)(),
        A = (0, u.e7)([d.Z], () => d.Z.useReducedMotion),
        C = a.useMemo(() => (0, _.fh)(o, _.eC.REWARD), [o]),
        N = a.useCallback(
            (n) => {
                var r;
                (0, l.k)(n.currentTarget, HTMLElement) && n.currentTarget.blur(),
                    S({
                        questId: o.id,
                        questContent: e.questContent,
                        questContentPosition: e.questContentPosition,
                        questContentCTA: p.jZ.REWARD_LEARN_MORE
                    }),
                    (0, v.navigateToQuestHome)(e.location, e.questContent, o.id),
                    null === (r = e.onClick) || void 0 === r || r.call(e, n);
            },
            [S, o.id, e]
        ),
        R = a.useRef(null),
        O = a.useRef(I),
        D = (0, h.Bg)(o.config);
    return (
        a.useEffect(() => {
            if (null != R.current) {
                if (!C.isAnimated || A) {
                    (R.current.currentTime = 0), R.current.pause();
                    return;
                }
                I && !O.current ? R.current.play() : !I && O.current && ((R.current.currentTime = 0), R.current.pause()), (O.current = I);
            }
        }, [I, C, A]),
        (n = D
            ? (0, i.jsx)(E.Fl, {
                  id: 'QuestRewardTile_rewardTileNitro',
                  children: (e) =>
                      (0, i.jsx)(g.Z, {
                          ref: e,
                          className: b.questRewardTileAsset
                      })
              })
            : C.isAnimated
              ? (0, i.jsx)(E.Fl, {
                    id: 'QuestRewardTile_rewardTileAnimated',
                    children: (e) => {
                        var n;
                        return (0, i.jsx)(f.Z, {
                            ref: (n) => {
                                (e.current = n), (R.current = n);
                            },
                            autoPlay: !A && I,
                            loop: !0,
                            muted: !0,
                            playsInline: !0,
                            className: b.questRewardTileAsset,
                            controls: !1,
                            children: (0, i.jsx)('source', {
                                src: C.url,
                                type: null !== (n = C.mimetype) && void 0 !== n ? n : void 0
                            })
                        });
                    }
                })
              : (0, i.jsx)(E.Fl, {
                    id: 'QuestRewardTile_rewardTileStatic',
                    children: (e) =>
                        (0, i.jsx)('img', {
                            ref: e,
                            alt: m.r.build(o.config).defaultReward.messages.name,
                            className: s()(b.questRewardTileAsset, b.questRewardTileAssetStatic),
                            src: C.url
                        })
                })),
        null == T
            ? (0, i.jsx)('div', {
                  className: s()(b.questRewardTile, r),
                  children: n
              })
            : (0, i.jsxs)(c.Clickable, {
                  className: s()(b.questRewardTileInteractive, b.questRewardTile, b.rewardHighlight, r),
                  onClick: N,
                  children: [
                      n,
                      (0, i.jsx)(c.Shine, {
                          className: b.shine,
                          shineSize: c.ShineSizes.SMALL
                      }),
                      'text' === T &&
                          (0, i.jsx)(c.Text, {
                              color: 'always-white',
                              variant: 'text-xs/normal',
                              className: b.questRewardTileDetailsLearnMore,
                              children: y.intl.format(y.t.DYAleX, {})
                          }),
                      'icon' === T &&
                          (0, i.jsx)('div', {
                              className: b.questRewardTileDetailsLearnMore,
                              children: (0, i.jsx)(c.CircleInformationIcon, {
                                  size: 'xxs',
                                  color: c.tokens.colors.WHITE.css
                              })
                          })
                  ]
              })
    );
}
n.Z = I;
