(n.d(t, { Z: () => D }), n(784620), n(973216));
var r = n(255367),
    o = n(73800),
    s = n(120356),
    a = n.n(s),
    i = n(66546),
    l = n(780384),
    c = n(755721),
    u = n(481060),
    d = n(393238),
    p = n(410030),
    m = n(44315),
    f = n(617136),
    g = n(509212),
    x = n(272008),
    h = n(113434),
    b = n(497505),
    j = n(974390),
    _ = n(475595),
    v = n(18578),
    y = n(623249),
    C = n(685613),
    O = n(110560),
    E = n(670638),
    w = n(251360),
    S = n(19148),
    T = n(46140),
    P = n(642145),
    A = n(981631),
    N = n(388032),
    R = n(508936);
function B(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function k(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e) {
    var t;
    let { quest: n, errorHints: s, warningHints: a, isDarkTheme: l, sourceQuestContent: p } = e,
        { ref: f, height: g = 0 } = (0, d.ZP)([s]),
        x = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
        b = (0, h.z)(n),
        { type: j, hints: _ } = o.useMemo(
            () =>
                x || b
                    ? {
                          type: 2,
                          hints: []
                      }
                    : s.length > 0
                      ? {
                            type: 0,
                            hints: s.map((e) => e.message)
                        }
                      : a.length > 0
                        ? {
                              type: 1,
                              hints: a
                          }
                        : {
                              type: 2,
                              hints: []
                          },
            [s, x, b, a]
        ),
        v = 2 !== j,
        C = (0, u.q_F)({
            opacity: +!!v,
            height: v ? g : 0,
            config: P.Y
        }),
        O = 0 === j ? u.Mgn : u.d3s,
        E = (0, m.Lq)(A.Ilk.RED_345),
        w = 0 === j ? E : l ? u.TVs.colors.TEXT_DEFAULT : u.TVs.colors.WHITE;
    return (0, r.jsx)(i.animated.div, {
        style: C,
        children: (0, r.jsxs)('div', {
            ref: f,
            className: R.hints,
            children: [
                (0, r.jsxs)('div', {
                    className: R.hintsContainer,
                    children: [
                        (0, r.jsx)(O, {
                            size: 'xs',
                            color: w
                        }),
                        (0, r.jsx)(u.Text, {
                            variant: 'text-xs/medium',
                            color: l ? 'text-muted' : 'always-white',
                            children: _.at(0)
                        })
                    ]
                }),
                0 === j &&
                    (0, r.jsx)(c.zx, {
                        onClick: () =>
                            (0, y.y)({
                                questId: n.id,
                                errorHints: s,
                                sourceQuestContent: p
                            }),
                        size: c.Ph.MIN,
                        look: c.iL.LINK,
                        color: c.Tt.CUSTOM,
                        style: { color: (0, m.Lq)(A.Ilk.BLUE_345) },
                        children: 'See Details'
                    })
            ]
        })
    });
}
function q(e) {
    let { quest: t, isHovering: n, showAssets: s } = e,
        a = o.useMemo(() => (0, _.fh)(t, _.eC.HERO_IMAGE), [t]),
        i = o.useMemo(() => (0, _.fh)(t, _.eC.HERO_VIDEO), [t]),
        l = (0, j.h)(t, T.dr.QUEST_HOME_DESKTOP),
        { onAssetLoadComplete: c } = o.useContext(w.k);
    return (0, r.jsx)('div', {
        className: R.heroAssetCont,
        children:
            s &&
            (0, r.jsx)(v.K, {
                imageAsset:
                    null != a
                        ? {
                              asset: a,
                              assetId: 'QuestTileBanner',
                              alt: N.intl.string(N.t.jnijW1),
                              className: R.heroAsset
                          }
                        : void 0,
                videoAsset:
                    null != i
                        ? {
                              asset: i,
                              assetId: 'QuestTileBanner_heroAnimated',
                              className: R.heroAssetVideo
                          }
                        : void 0,
                videoActive: !l && n,
                imageDimensions: {
                    width: 1320,
                    height: 370
                },
                onLoadComplete: c
            })
    });
}
function D(e) {
    var t, n, s, i, c;
    let { quest: d, isHovering: m, errorHints: j, warningHints: _, isVisibleInViewport: v, onCtxMenuClose: y, onCtxMenuOpen: T, onCtxMenuSelect: P, sourceQuestContent: D } = e,
        Q = (0, g.PB)(d),
        V = (0, p.ZP)(),
        L = ((0, l.wj)(V) ? A.BRd.DARK : A.BRd.LIGHT) === A.BRd.DARK,
        M = (0, h.tP)(d),
        W = (null == (t = d.userStatus) ? void 0 : t.claimedAt) != null,
        Z = (0, h.B6)(d.config.expiresAt, {
            month: 'numeric',
            day: 'numeric'
        }),
        U = (null == (n = d.userStatus) ? void 0 : n.enrolledAt) != null,
        H = (null == (s = d.userStatus) ? void 0 : s.completedAt) != null,
        { onAssetLoadComplete: z } = o.useContext(w.k),
        F = o.useCallback(() => {
            Q &&
                ((0, g.zi)(d) ||
                    U ||
                    (0, x.AH)(d.id, {
                        questContent: b.jn.QUEST_HOME_DESKTOP,
                        questContentCTA: f.jZ.ACCEPT_QUEST,
                        sourceQuestContent: D
                    }),
                (0, O.openVideoQuestModal)({
                    quest: d,
                    questContent: b.jn.QUEST_HOME_DESKTOP,
                    sourceQuestContent: D,
                    sourceQuestContentCTA: f.jZ.QUEST_HOME_TILE_HEADER_WATCH_VIDEO
                }));
        }, [Q, d, U, D]);
    return (0, r.jsxs)('div', {
        className: R.container,
        children: [
            (0, r.jsx)('div', {
                className: R.heroAssetWrapper,
                children: (0, r.jsx)(q, {
                    quest: d,
                    isHovering: m,
                    showAssets: v
                })
            }),
            (0, r.jsx)('div', {
                className: a()(R.overlay, {
                    [R.darkThemeGradient]: L,
                    [R.lightThemeGradient]: !L
                })
            }),
            (0, r.jsxs)('div', {
                className: R.positionContentOverBackground,
                children: [
                    (0, r.jsxs)('div', {
                        className: R.contents,
                        children: [
                            (0, r.jsxs)('div', {
                                className: R.topRow,
                                children: [
                                    d.preview &&
                                        (0, r.jsx)('div', {
                                            className: R.pill,
                                            children: (0, r.jsx)(u.Text, {
                                                variant: 'eyebrow',
                                                color: 'always-white',
                                                className: R.eyebrowText,
                                                children: N.intl.string(N.t.SKNnqq)
                                            })
                                        }),
                                    Q &&
                                        (0, r.jsx)(u.ua7, {
                                            text: H ? N.intl.string(N.t.YsCuyM) : U ? N.intl.string(N.t['74Kqra']) : (0, g.zi)(d) ? N.intl.string(N.t['I6JG4+']) : N.intl.string(N.t.umdNio),
                                            children: (e) =>
                                                (0, r.jsx)(
                                                    u.P3F,
                                                    k(B({}, e), {
                                                        className: R.utilButtonWrapper,
                                                        'aria-label': N.intl.string(N.t.RscU7O),
                                                        onClick: F,
                                                        children: (0, r.jsx)(u.o1U, {
                                                            color: 'currentColor',
                                                            className: R.utilButtonIcon
                                                        })
                                                    })
                                                )
                                        }),
                                    (0, r.jsx)(E.r, {
                                        onOpen: T,
                                        onClose: y,
                                        onSelect: P,
                                        questContent: b.jn.QUEST_HOME_DESKTOP,
                                        quest: d,
                                        hideLearnMore: !0,
                                        shouldShowDisclosure: !0,
                                        showShareLink: !0,
                                        sourceQuestContent: D,
                                        children: (e) =>
                                            (0, r.jsx)(
                                                u.P3F,
                                                k(B({}, e), {
                                                    className: R.utilButtonWrapper,
                                                    'aria-label': N.intl.string(N.t.DEoVWV),
                                                    children: (0, r.jsx)(u.xhG, {
                                                        size: 'md',
                                                        color: 'currentColor',
                                                        className: R.utilButtonIcon
                                                    })
                                                })
                                            )
                                    })
                                ]
                            }),
                            (0, r.jsx)(S.E, {
                                showPlaceholder: !v,
                                width: 100,
                                height: 30,
                                className: R.partnerBranding,
                                children: (0, r.jsx)(C.ZP, {
                                    className: R.partnerBranding,
                                    logotypeClassName: R.partnerLogotypes,
                                    quest: d,
                                    separatorSpacing: C.US.MEDIUM,
                                    withGameTile: !1,
                                    onLoadComplete: z
                                })
                            }),
                            (0, r.jsxs)('div', {
                                className: R.bottomRow,
                                children: [
                                    (0, r.jsx)(u.Text, {
                                        variant: 'text-sm/medium',
                                        color: L ? 'text-muted' : 'always-white',
                                        children: N.intl.format(N.t.buEvBw, { brandName: null != (c = null == (i = d.config.cosponsorMetadata) ? void 0 : i.name) ? c : d.config.messages.gamePublisher })
                                    }),
                                    M || W
                                        ? null
                                        : (0, r.jsx)(u.Text, {
                                              variant: 'text-sm/medium',
                                              color: L ? 'text-muted' : 'always-white',
                                              children: N.intl.format(N.t['7D8r4O'], { expiryDate: Z })
                                          })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsx)(I, {
                        quest: d,
                        errorHints: j,
                        warningHints: _,
                        isDarkTheme: L,
                        sourceQuestContent: D
                    })
                ]
            })
        ]
    });
}
