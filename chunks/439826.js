n.d(t, { Z: () => I }), n(784620), n(973216);
var r = n(255367),
    s = n(73800),
    o = n(120356),
    a = n.n(o),
    i = n(695469),
    l = n(780384),
    c = n(481060),
    u = n(393238),
    d = n(410030),
    p = n(44315),
    m = n(617136),
    f = n(272008),
    g = n(113434),
    x = n(497505),
    h = n(918701),
    b = n(974390),
    j = n(475595),
    _ = n(18578),
    v = n(623249),
    y = n(685613),
    C = n(670638),
    O = n(341907),
    S = n(251360),
    E = n(19148),
    w = n(46140),
    T = n(642145),
    P = n(981631),
    N = n(388032),
    A = n(508936);
function R(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
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
function B(e) {
    var t;
    let { quest: n, errorHints: o, warningHints: a, isDarkTheme: l, sourceQuestContent: d } = e,
        { ref: m, height: f = 0 } = (0, u.ZP)([o]),
        x = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
        h = (0, g.z)(n),
        { type: b, hints: j } = s.useMemo(
            () =>
                x || h
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
            [o, x, h, a]
        ),
        _ = 2 !== b,
        y = (0, c.q_F)({
            opacity: +!!_,
            height: _ ? f : 0,
            config: T.Y
        }),
        C = 0 === b ? c.P4T : c.d3s,
        O = (0, p.Lq)(P.Ilk.RED_345),
        S = 0 === b ? O : l ? c.TVs.colors.TEXT_NORMAL : c.TVs.colors.WHITE;
    return (0, r.jsx)(i.animated.div, {
        style: y,
        children: (0, r.jsxs)('div', {
            ref: m,
            className: A.hints,
            children: [
                (0, r.jsxs)('div', {
                    className: A.hintsContainer,
                    children: [
                        (0, r.jsx)(C, {
                            size: 'xs',
                            color: S
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: 'text-xs/medium',
                            color: l ? 'text-muted' : 'always-white',
                            children: j.at(0)
                        })
                    ]
                }),
                0 === b &&
                    (0, r.jsx)(c.zxk, {
                        onClick: () =>
                            (0, v.y)({
                                questId: n.id,
                                errorHints: o,
                                sourceQuestContent: d
                            }),
                        size: c.PhG.MIN,
                        look: c.iLD.LINK,
                        color: c.Ttl.CUSTOM,
                        style: { color: (0, p.Lq)(P.Ilk.BLUE_345) },
                        children: 'See Details'
                    })
            ]
        })
    });
}
function q(e) {
    let { quest: t, isHovering: n, showAssets: o } = e,
        a = s.useMemo(() => (0, j.fh)(t, j.eC.HERO_IMAGE), [t]),
        i = s.useMemo(() => (0, j.fh)(t, j.eC.HERO_VIDEO), [t]),
        l = (0, b.h)(t, w.dr.QUEST_HOME_DESKTOP),
        { onAssetLoadComplete: c } = s.useContext(S.k);
    return (0, r.jsx)('div', {
        className: A.heroAssetCont,
        children:
            o &&
            (0, r.jsx)(_.K, {
                imageAsset:
                    null != a
                        ? {
                              asset: a,
                              assetId: 'QuestTileBanner',
                              className: A.heroAsset
                          }
                        : void 0,
                videoAsset:
                    null != i
                        ? {
                              asset: i,
                              assetId: 'QuestTileBanner_heroAnimated',
                              className: A.heroAssetVideo
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
function I(e) {
    var t, n, o, i, u;
    let { quest: p, isHovering: b, errorHints: j, warningHints: _, isVisibleInViewport: v, onCtxMenuClose: w, onCtxMenuOpen: T, onCtxMenuSelect: I, sourceQuestContent: D } = e,
        Q = (0, h.PB)(p),
        L = (0, d.ZP)(),
        V = ((0, l.wj)(L) ? P.BRd.DARK : P.BRd.LIGHT) === P.BRd.DARK,
        M = (0, g.tP)(p),
        W = (null == (t = p.userStatus) ? void 0 : t.claimedAt) != null,
        Z = (0, g.B6)(p.config.expiresAt, {
            month: 'numeric',
            day: 'numeric'
        }),
        U = (null == (n = p.userStatus) ? void 0 : n.enrolledAt) != null,
        H = (null == (o = p.userStatus) ? void 0 : o.completedAt) != null,
        { onAssetLoadComplete: z } = s.useContext(S.k),
        F = s.useCallback(() => {
            Q &&
                ((0, h.zi)(p) ||
                    U ||
                    (0, f.AH)(p.id, {
                        questContent: x.jn.QUEST_HOME_DESKTOP,
                        questContentCTA: m.jZ.ACCEPT_QUEST,
                        sourceQuestContent: D
                    }),
                (0, O.openVideoQuestModal)({
                    quest: p,
                    sourceQuestContent: x.jn.QUEST_HOME_DESKTOP
                }));
        }, [Q, p, U, D]);
    return (0, r.jsxs)('div', {
        className: A.container,
        children: [
            (0, r.jsx)('div', {
                className: A.heroAssetWrapper,
                children: (0, r.jsx)(q, {
                    quest: p,
                    isHovering: b,
                    showAssets: v
                })
            }),
            (0, r.jsx)('div', {
                className: a()(A.overlay, {
                    [A.darkThemeGradient]: V,
                    [A.lightThemeGradient]: !V
                })
            }),
            (0, r.jsxs)('div', {
                className: A.positionContentOverBackground,
                children: [
                    (0, r.jsxs)('div', {
                        className: A.contents,
                        children: [
                            (0, r.jsxs)('div', {
                                className: A.topRow,
                                children: [
                                    p.preview &&
                                        (0, r.jsx)('div', {
                                            className: A.pill,
                                            children: (0, r.jsx)(c.Text, {
                                                variant: 'eyebrow',
                                                color: 'always-white',
                                                className: A.eyebrowText,
                                                children: N.intl.string(N.t.SKNnqq)
                                            })
                                        }),
                                    Q &&
                                        (0, r.jsx)(c.ua7, {
                                            text: H ? N.intl.string(N.t.YsCuyM) : U ? N.intl.string(N.t['74Kqra']) : (0, h.zi)(p) ? N.intl.string(N.t['I6JG4+']) : N.intl.string(N.t.umdNio),
                                            children: (e) =>
                                                (0, r.jsx)(
                                                    c.P3F,
                                                    k(R({}, e), {
                                                        className: A.utilButtonWrapper,
                                                        'aria-label': N.intl.string(N.t.RscU7O),
                                                        onClick: F,
                                                        children: (0, r.jsx)(c.o1U, {
                                                            color: 'currentColor',
                                                            className: A.utilButtonIcon
                                                        })
                                                    })
                                                )
                                        }),
                                    (0, r.jsx)(C.r, {
                                        onOpen: T,
                                        onClose: w,
                                        onSelect: I,
                                        questContent: x.jn.QUEST_HOME_DESKTOP,
                                        quest: p,
                                        hideLearnMore: !0,
                                        shouldShowDisclosure: !0,
                                        showShareLink: !0,
                                        sourceQuestContent: D,
                                        children: (e) =>
                                            (0, r.jsx)(
                                                c.P3F,
                                                k(R({}, e), {
                                                    className: A.utilButtonWrapper,
                                                    'aria-label': N.intl.string(N.t.DEoVWV),
                                                    children: (0, r.jsx)(c.xhG, {
                                                        size: 'md',
                                                        color: 'currentColor',
                                                        className: A.utilButtonIcon
                                                    })
                                                })
                                            )
                                    })
                                ]
                            }),
                            (0, r.jsx)(E.E, {
                                showPlaceholder: !v,
                                width: 100,
                                height: 30,
                                className: A.partnerBranding,
                                children: (0, r.jsx)(y.ZP, {
                                    className: A.partnerBranding,
                                    logotypeClassName: A.partnerLogotypes,
                                    quest: p,
                                    separatorSpacing: y.US.MEDIUM,
                                    withGameTile: !1,
                                    onLoadComplete: z
                                })
                            }),
                            (0, r.jsxs)('div', {
                                className: A.bottomRow,
                                children: [
                                    (0, r.jsx)(c.Text, {
                                        variant: 'text-sm/medium',
                                        color: V ? 'text-muted' : 'always-white',
                                        children: N.intl.format(N.t.buEvBw, { brandName: null != (u = null == (i = p.config.cosponsorMetadata) ? void 0 : i.name) ? u : p.config.messages.gamePublisher })
                                    }),
                                    M || W
                                        ? null
                                        : (0, r.jsx)(c.Text, {
                                              variant: 'text-sm/medium',
                                              color: V ? 'text-muted' : 'always-white',
                                              children: N.intl.format(N.t['7D8r4O'], { expiryDate: Z })
                                          })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsx)(B, {
                        quest: p,
                        errorHints: j,
                        warningHints: _,
                        isDarkTheme: V,
                        sourceQuestContent: D
                    })
                ]
            })
        ]
    });
}
