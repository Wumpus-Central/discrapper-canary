(n.d(t, { Z: () => D }), n(784620), n(973216));
var r = n(255367),
    s = n(73800),
    o = n(120356),
    a = n.n(o),
    i = n(108542),
    l = n(780384),
    c = n(755721),
    u = n(481060),
    d = n(393238),
    p = n(410030),
    m = n(44315),
    f = n(617136),
    g = n(272008),
    x = n(113434),
    h = n(497505),
    b = n(918701),
    j = n(974390),
    _ = n(475595),
    v = n(18578),
    y = n(623249),
    C = n(685613),
    O = n(670638),
    E = n(341907),
    S = n(251360),
    w = n(19148),
    P = n(46140),
    T = n(642145),
    N = n(981631),
    A = n(388032),
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
function q(e) {
    var t;
    let { quest: n, errorHints: o, warningHints: a, isDarkTheme: l, sourceQuestContent: p } = e,
        { ref: f, height: g = 0 } = (0, d.ZP)([o]),
        h = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
        b = (0, x.z)(n),
        { type: j, hints: _ } = s.useMemo(
            () =>
                h || b
                    ? {
                          type: 2,
                          hints: []
                      }
                    : o.length > 0
                      ? {
                            type: 0,
                            hints: o.map((e) => e.message)
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
            [o, h, b, a]
        ),
        v = 2 !== j,
        C = (0, u.q_F)({
            opacity: +!!v,
            height: v ? g : 0,
            config: T.Y
        }),
        O = 0 === j ? u.P4T : u.d3s,
        E = (0, m.Lq)(N.Ilk.RED_345),
        S = 0 === j ? E : l ? u.TVs.colors.TEXT_DEFAULT : u.TVs.colors.WHITE;
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
                            color: S
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
                                errorHints: o,
                                sourceQuestContent: p
                            }),
                        size: c.Ph.MIN,
                        look: c.iL.LINK,
                        color: c.Tt.CUSTOM,
                        style: { color: (0, m.Lq)(N.Ilk.BLUE_345) },
                        children: 'See Details'
                    })
            ]
        })
    });
}
function I(e) {
    let { quest: t, isHovering: n, showAssets: o } = e,
        a = s.useMemo(() => (0, _.fh)(t, _.eC.HERO_IMAGE), [t]),
        i = s.useMemo(() => (0, _.fh)(t, _.eC.HERO_VIDEO), [t]),
        l = (0, j.h)(t, P.dr.QUEST_HOME_DESKTOP),
        { onAssetLoadComplete: c } = s.useContext(S.k);
    return (0, r.jsx)('div', {
        className: R.heroAssetCont,
        children:
            o &&
            (0, r.jsx)(v.K, {
                imageAsset:
                    null != a
                        ? {
                              asset: a,
                              assetId: 'QuestTileBanner',
                              alt: A.intl.string(A.t.jnijW1),
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
    var t, n, o, i, c;
    let { quest: d, isHovering: m, errorHints: j, warningHints: _, isVisibleInViewport: v, onCtxMenuClose: y, onCtxMenuOpen: P, onCtxMenuSelect: T, sourceQuestContent: D } = e,
        Q = (0, b.PB)(d),
        V = (0, p.ZP)(),
        L = ((0, l.wj)(V) ? N.BRd.DARK : N.BRd.LIGHT) === N.BRd.DARK,
        M = (0, x.tP)(d),
        W = (null == (t = d.userStatus) ? void 0 : t.claimedAt) != null,
        Z = (0, x.B6)(d.config.expiresAt, {
            month: 'numeric',
            day: 'numeric'
        }),
        U = (null == (n = d.userStatus) ? void 0 : n.enrolledAt) != null,
        H = (null == (o = d.userStatus) ? void 0 : o.completedAt) != null,
        { onAssetLoadComplete: z } = s.useContext(S.k),
        F = s.useCallback(() => {
            Q &&
                ((0, b.zi)(d) ||
                    U ||
                    (0, g.AH)(d.id, {
                        questContent: h.jn.QUEST_HOME_DESKTOP,
                        questContentCTA: f.jZ.ACCEPT_QUEST,
                        sourceQuestContent: D
                    }),
                (0, E.openVideoQuestModal)({
                    quest: d,
                    sourceQuestContent: h.jn.QUEST_HOME_DESKTOP
                }));
        }, [Q, d, U, D]);
    return (0, r.jsxs)('div', {
        className: R.container,
        children: [
            (0, r.jsx)('div', {
                className: R.heroAssetWrapper,
                children: (0, r.jsx)(I, {
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
                                                children: A.intl.string(A.t.SKNnqq)
                                            })
                                        }),
                                    Q &&
                                        (0, r.jsx)(u.ua7, {
                                            text: H ? A.intl.string(A.t.YsCuyM) : U ? A.intl.string(A.t['74Kqra']) : (0, b.zi)(d) ? A.intl.string(A.t['I6JG4+']) : A.intl.string(A.t.umdNio),
                                            children: (e) =>
                                                (0, r.jsx)(
                                                    u.P3F,
                                                    k(B({}, e), {
                                                        className: R.utilButtonWrapper,
                                                        'aria-label': A.intl.string(A.t.RscU7O),
                                                        onClick: F,
                                                        children: (0, r.jsx)(u.o1U, {
                                                            color: 'currentColor',
                                                            className: R.utilButtonIcon
                                                        })
                                                    })
                                                )
                                        }),
                                    (0, r.jsx)(O.r, {
                                        onOpen: P,
                                        onClose: y,
                                        onSelect: T,
                                        questContent: h.jn.QUEST_HOME_DESKTOP,
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
                                                    'aria-label': A.intl.string(A.t.DEoVWV),
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
                            (0, r.jsx)(w.E, {
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
                                        children: A.intl.format(A.t.buEvBw, { brandName: null != (c = null == (i = d.config.cosponsorMetadata) ? void 0 : i.name) ? c : d.config.messages.gamePublisher })
                                    }),
                                    M || W
                                        ? null
                                        : (0, r.jsx)(u.Text, {
                                              variant: 'text-sm/medium',
                                              color: L ? 'text-muted' : 'always-white',
                                              children: A.intl.format(A.t['7D8r4O'], { expiryDate: Z })
                                          })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsx)(q, {
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
