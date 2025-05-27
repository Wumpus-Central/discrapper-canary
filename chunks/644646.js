n.d(t, { Z: () => I });
var r = n(255367),
    i = n(73800),
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
    O = n(734506);
function v(e) {
    let { videoActive: t, imageAsset: n, videoAsset: o, useReducedMotion: s, onLoadComplete: l } = e,
        c = i.useRef(null),
        u = i.useRef(t);
    i.useEffect(() => {
        var e;
        if (null != o && null != c.current) {
            if (!(null == (e = o.asset) ? void 0 : e.isAnimated) || s) {
                (c.current.currentTime = 0), c.current.pause();
                return;
            }
            t && !u.current ? c.current.play() : !t && u.current && ((c.current.currentTime = 0), c.current.pause()), (u.current = t);
        }
    }, [t, o, s]);
    let f = null != n && !n.asset.isAnimated,
        _ = null != o && o.asset.isAnimated;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            f &&
                (0, r.jsx)(E.Fl, {
                    id: n.assetId,
                    children: (e) => {
                        var i;
                        return (0, r.jsx)('img', {
                            ref: e,
                            alt: n.alt,
                            className: a()(n.className, { [O.hidden]: t }),
                            src: null == (i = n.asset) ? void 0 : i.url,
                            onLoad: l
                        });
                    }
                }),
            _ &&
                (0, r.jsx)(E.Fl, {
                    id: o.assetId,
                    children: (e) => {
                        var i, u, _, p;
                        return (0, r.jsx)(d.Z, {
                            ref: (t) => {
                                (e.current = t), (c.current = t);
                            },
                            autoPlay: !s && t,
                            loop: !0,
                            muted: !0,
                            preload: f ? 'none' : 'auto',
                            poster: f ? (null == (i = n.asset) ? void 0 : i.url) : void 0,
                            playsInline: !0,
                            className: a()(o.className, { [O.hidden]: !t && f }),
                            controls: !1,
                            onProgress: l,
                            children: (0, r.jsx)('source', {
                                src: null == (u = o.asset) ? void 0 : u.url,
                                type: null != (p = null == (_ = o.asset) ? void 0 : _.mimetype) ? p : void 0
                            })
                        });
                    }
                })
        ]
    });
}
let I = function (e) {
    let t,
        { className: n, quest: o, autoplay: d = !0, learnMoreStyle: I = null } = e,
        S = (0, _.O5)(),
        T = (0, l.e7)([f.Z], () => f.Z.isFocused()),
        A = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
        N = i.useMemo(() => (0, h.fh)(o, h.eC.REWARD), [o]),
        C = i.useMemo(() => (0, h.fh)(o, h.eC.REWARD_IMAGE), [o]),
        P = i.useCallback(
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
        );
    return (
        (t = (0, p.Bg)(o.config)
            ? (0, r.jsx)(E.Fl, {
                  id: 'QuestRewardTile_rewardTileNitro',
                  children: (e) =>
                      (0, r.jsx)(g.Z, {
                          ref: e,
                          className: O.questRewardTileAsset
                      })
              })
            : N.isAnimated
              ? (0, r.jsx)(v, {
                    imageAsset:
                        null != C
                            ? {
                                  asset: C,
                                  assetId: 'QuestRewardTile_rewardTileStatic',
                                  className: O.imageVideoOverlay
                              }
                            : void 0,
                    videoAsset: {
                        asset: N,
                        assetId: 'QuestRewardTile_rewardTileAnimated',
                        className: O.questRewardTileAsset
                    },
                    videoActive: d,
                    useReducedMotion: A,
                    onLoadComplete: e.onLoadComplete
                })
              : (0, r.jsx)(E.Fl, {
                    id: 'QuestRewardTile_rewardTileStatic',
                    children: (t) =>
                        (0, r.jsx)('img', {
                            ref: t,
                            alt: m.r.build(o.config).defaultReward.messages.name,
                            className: a()(O.questRewardTileAsset, O.questRewardTileAssetStatic),
                            src: N.url,
                            onLoad: e.onLoadComplete
                        })
                })),
        null == I
            ? (0, r.jsx)('div', {
                  className: a()(O.questRewardTile, n),
                  children: t
              })
            : (0, r.jsxs)(c.P3F, {
                  className: a()(O.questRewardTileInteractive, O.questRewardTile, O.rewardHighlight, n),
                  onClick: P,
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
