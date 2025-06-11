n.d(t, { Z: () => I }), n(784620), n(973216);
var r = n(255367),
    o = n(73800),
    s = n(120356),
    a = n.n(s),
    i = n(524979),
    l = n(780384),
    c = n(481060),
    d = n(393238),
    u = n(410030),
    p = n(44315),
    m = n(617136),
    f = n(272008),
    g = n(113434),
    x = n(497505),
    h = n(918701),
    b = n(974390),
    j = n(475595),
    v = n(18578),
    y = n(623249),
    _ = n(685613),
    C = n(670638),
    O = n(341907),
    w = n(251360),
    S = n(19148),
    E = n(46140),
    P = n(642145),
    T = n(981631),
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
    let { quest: n, errorHints: s, warningHints: a, isDarkTheme: l } = e,
        { ref: u, height: m = 0 } = (0, d.ZP)([s]),
        f = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
        x = (0, g.z)(n),
        { type: h, hints: b } = o.useMemo(
            () =>
                f || x
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
            [s, f, x, a]
        ),
        j = 2 !== h,
        v = (0, c.q_F)({
            opacity: +!!j,
            height: j ? m : 0,
            config: P.Y
        }),
        _ = 0 === h ? c.P4T : c.d3s,
        C = (0, p.Lq)(T.Ilk.RED_345),
        O = 0 === h ? C : l ? c.TVs.colors.TEXT_NORMAL : c.TVs.colors.WHITE;
    return (0, r.jsx)(i.animated.div, {
        style: v,
        children: (0, r.jsxs)('div', {
            ref: u,
            className: A.hints,
            children: [
                (0, r.jsxs)('div', {
                    className: A.hintsContainer,
                    children: [
                        (0, r.jsx)(_, {
                            size: 'xs',
                            color: O
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: 'text-xs/medium',
                            color: l ? 'text-muted' : 'always-white',
                            children: b.at(0)
                        })
                    ]
                }),
                0 === h &&
                    (0, r.jsx)(c.zxk, {
                        onClick: () =>
                            (0, y.y)({
                                questId: n.id,
                                errorHints: s
                            }),
                        size: c.PhG.MIN,
                        look: c.iLD.LINK,
                        color: c.Ttl.CUSTOM,
                        style: { color: (0, p.Lq)(T.Ilk.BLUE_345) },
                        children: 'See Details'
                    })
            ]
        })
    });
}
function q(e) {
    let { quest: t, isHovering: n, showAssets: s } = e,
        a = o.useMemo(() => (0, j.fh)(t, j.eC.HERO_IMAGE), [t]),
        i = o.useMemo(() => (0, j.fh)(t, j.eC.HERO_VIDEO), [t]),
        l = (0, b.h)(t, E.dr.QUEST_HOME_DESKTOP),
        { onAssetLoadComplete: c } = o.useContext(w.k);
    return (0, r.jsx)('div', {
        className: A.heroAssetCont,
        children:
            s &&
            (0, r.jsx)(v.K, {
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
                onLoadComplete: c
            })
    });
}
function I(e) {
    var t, n, s, i, d;
    let { quest: p, isHovering: b, errorHints: j, warningHints: v, isVisibleInViewport: y, onCtxMenuClose: E, onCtxMenuOpen: P, onCtxMenuSelect: I } = e,
        D = (0, h.PB)(p),
        M = (0, u.ZP)(),
        L = ((0, l.wj)(M) ? T.BRd.DARK : T.BRd.LIGHT) === T.BRd.DARK,
        V = (0, g.tP)(p),
        W = (null == (t = p.userStatus) ? void 0 : t.claimedAt) != null,
        Z = (0, g.B6)(p.config.expiresAt, {
            month: 'numeric',
            day: 'numeric'
        }),
        Q = (null == (n = p.userStatus) ? void 0 : n.enrolledAt) != null,
        U = (null == (s = p.userStatus) ? void 0 : s.completedAt) != null,
        { onAssetLoadComplete: H } = o.useContext(w.k),
        z = o.useCallback(() => {
            D &&
                ((0, h.zi)(p) ||
                    Q ||
                    (0, f.AH)(p.id, {
                        questContent: x.jn.QUEST_HOME_DESKTOP,
                        questContentCTA: m.jZ.ACCEPT_QUEST
                    }),
                (0, O.openVideoQuestModal)(p));
        }, [D, p, Q]);
    return (0, r.jsxs)('div', {
        className: A.container,
        children: [
            (0, r.jsx)('div', {
                className: A.heroAssetWrapper,
                children: (0, r.jsx)(q, {
                    quest: p,
                    isHovering: b,
                    showAssets: y
                })
            }),
            (0, r.jsx)('div', {
                className: a()(A.overlay, {
                    [A.darkThemeGradient]: L,
                    [A.lightThemeGradient]: !L
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
                                    D &&
                                        (0, r.jsx)(c.ua7, {
                                            text: U ? N.intl.string(N.t.YsCuyM) : Q ? N.intl.string(N.t['74Kqra']) : (0, h.zi)(p) ? N.intl.string(N.t['I6JG4+']) : N.intl.string(N.t.umdNio),
                                            children: (e) =>
                                                (0, r.jsx)(
                                                    c.P3F,
                                                    k(R({}, e), {
                                                        className: A.utilButtonWrapper,
                                                        'aria-label': N.intl.string(N.t.RscU7O),
                                                        onClick: z,
                                                        children: (0, r.jsx)(c.o1U, {
                                                            color: 'currentColor',
                                                            className: A.utilButtonIcon
                                                        })
                                                    })
                                                )
                                        }),
                                    (0, r.jsx)(C.r, {
                                        onOpen: P,
                                        onClose: E,
                                        onSelect: I,
                                        questContent: x.jn.QUEST_HOME_DESKTOP,
                                        quest: p,
                                        hideLearnMore: !0,
                                        shouldShowDisclosure: !0,
                                        showShareLink: !0,
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
                            (0, r.jsx)(S.E, {
                                showPlaceholder: !y,
                                width: 100,
                                height: 30,
                                className: A.partnerBranding,
                                children: (0, r.jsx)(_.ZP, {
                                    className: A.partnerBranding,
                                    logotypeClassName: A.partnerLogotypes,
                                    quest: p,
                                    separatorSpacing: _.US.MEDIUM,
                                    withGameTile: !1,
                                    onLoadComplete: H
                                })
                            }),
                            (0, r.jsxs)('div', {
                                className: A.bottomRow,
                                children: [
                                    (0, r.jsx)(c.Text, {
                                        variant: 'text-sm/medium',
                                        color: L ? 'text-muted' : 'always-white',
                                        children: N.intl.format(N.t.buEvBw, { brandName: null != (d = null == (i = p.config.cosponsorMetadata) ? void 0 : i.name) ? d : p.config.messages.gamePublisher })
                                    }),
                                    V || W
                                        ? null
                                        : (0, r.jsx)(c.Text, {
                                              variant: 'text-sm/medium',
                                              color: L ? 'text-muted' : 'always-white',
                                              children: N.intl.format(N.t['7D8r4O'], { expiryDate: Z })
                                          })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsx)(B, {
                        quest: p,
                        errorHints: j,
                        warningHints: v,
                        isDarkTheme: L
                    })
                ]
            })
        ]
    });
}
