n.d(t, { Z: () => L }), n(784620), n(973216);
var r = n(255367),
    o = n(73800),
    s = n(120356),
    a = n.n(s),
    i = n(683305),
    l = n(186325),
    c = n(780384),
    d = n(481060),
    u = n(393238),
    p = n(410030),
    m = n(44315),
    f = n(70097),
    g = n(617136),
    x = n(272008),
    h = n(113434),
    b = n(497505),
    j = n(918701),
    v = n(974390),
    _ = n(475595),
    y = n(720293),
    C = n(623249),
    O = n(685613),
    w = n(78826),
    S = n(670638),
    P = n(341907),
    E = n(251360),
    T = n(19148),
    N = n(46140),
    A = n(642145),
    R = n(981631),
    B = n(388032),
    k = n(508936);
function q(e) {
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
function I(e, t) {
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
function D(e) {
    var t;
    let { quest: n, errorHints: s, warningHints: a, isDarkTheme: l } = e,
        { ref: c, height: p = 0 } = (0, u.ZP)([s]),
        f = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
        g = (0, h.z)(n),
        { type: x, hints: b } = o.useMemo(
            () =>
                f || g
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
            [s, f, g, a]
        ),
        j = 2 !== x,
        v = (0, d.q_F)({
            opacity: +!!j,
            height: j ? p : 0,
            config: A.Y
        }),
        _ = 0 === x ? d.P4T : d.d3s,
        y = (0, m.Lq)(R.Ilk.RED_345),
        O = 0 === x ? y : l ? d.TVs.colors.TEXT_NORMAL : d.TVs.colors.WHITE;
    return (0, r.jsx)(i.animated.div, {
        style: v,
        children: (0, r.jsxs)('div', {
            ref: c,
            className: k.hints,
            children: [
                (0, r.jsxs)('div', {
                    className: k.hintsContainer,
                    children: [
                        (0, r.jsx)(_, {
                            size: 'xs',
                            color: O
                        }),
                        (0, r.jsx)(d.Text, {
                            variant: 'text-xs/medium',
                            color: l ? 'text-muted' : 'always-white',
                            children: b.at(0)
                        })
                    ]
                }),
                0 === x &&
                    (0, r.jsx)(d.zxk, {
                        onClick: () =>
                            (0, C.y)({
                                questId: n.id,
                                errorHints: s
                            }),
                        size: d.PhG.MIN,
                        look: d.iLD.LINK,
                        color: d.Ttl.CUSTOM,
                        style: { color: (0, m.Lq)(R.Ilk.BLUE_345) },
                        children: 'See Details'
                    })
            ]
        })
    });
}
function M(e) {
    let { quest: t, isHovering: n, showAssets: s } = e,
        i = o.useRef(null),
        c = o.useRef(n),
        d = o.useContext(l.S).reducedMotion.enabled,
        u = o.useMemo(() => (0, _.fh)(t, _.eC.HERO_IMAGE), [t]),
        p = o.useMemo(() => {
            let e = (0, _.fh)(t, _.eC.HERO);
            return e.isAnimated ? e : (0, y.z)(y.i.QUEST_HOME_VIDEO, t);
        }, [t]),
        m = (0, v.h)(t, N.dr.QUEST_HOME_DESKTOP),
        { onAssetLoadComplete: g } = o.useContext(E.k);
    o.useEffect(() => {
        if (null == p || null == i.current || c.current === n) return;
        n && !d ? i.current.play() : i.current.pause(), (c.current = n);
        let e = i.current;
        return () => {
            null != e && e.pause();
        };
    }, [n, d, p]);
    let x = null != p && !m && n;
    return (0, r.jsxs)('div', {
        className: k.heroAssetCont,
        children: [
            s &&
                null != u &&
                (0, r.jsx)(w.Fl, {
                    id: 'QuestTileBanner',
                    children: (e) =>
                        (0, r.jsx)('img', {
                            ref: e,
                            alt: ''.concat(t.config.messages.questName),
                            className: a()(k.heroAsset, { [k.hidden]: x }),
                            src: u.url,
                            onLoad: g
                        })
                }),
            s &&
                null != p &&
                !m &&
                (0, r.jsx)(w.Fl, {
                    id: 'QuestTileBanner_heroAnimated',
                    children: (e) => {
                        var t;
                        return (
                            null != e.current && (i.current = e.current),
                            (0, r.jsx)(f.Z, {
                                ref: e,
                                autoPlay: !1,
                                loop: !0,
                                muted: !0,
                                poster: null == u ? void 0 : u.url,
                                preload: 'none',
                                playsInline: !0,
                                className: a()(k.heroAssetVideo, { [k.visible]: x }),
                                controls: !1,
                                onLoadedData: g,
                                children: (0, r.jsx)('source', {
                                    src: p.url,
                                    type: null != (t = p.mimetype) ? t : void 0
                                })
                            })
                        );
                    }
                })
        ]
    });
}
function L(e) {
    var t, n, s, i, l;
    let { quest: u, isHovering: m, errorHints: f, warningHints: v, isVisibleInViewport: _, onCtxMenuClose: y, onCtxMenuOpen: C, onCtxMenuSelect: w } = e,
        N = (0, j.q8)(u),
        A = (0, p.ZP)(),
        L = ((0, c.wj)(A) ? R.BRd.DARK : R.BRd.LIGHT) === R.BRd.DARK,
        Z = (0, h.tP)(u),
        W = (null == (t = u.userStatus) ? void 0 : t.claimedAt) != null,
        V = (0, h.B6)(u.config.expiresAt, {
            month: 'numeric',
            day: 'numeric'
        }),
        Q = (null == (n = u.userStatus) ? void 0 : n.enrolledAt) != null,
        U = (null == (s = u.userStatus) ? void 0 : s.completedAt) != null,
        { onAssetLoadComplete: H } = o.useContext(E.k),
        z = o.useCallback(() => {
            N &&
                ((0, j.zi)(u) ||
                    Q ||
                    (0, x.AH)(u.id, {
                        questContent: b.jn.QUEST_HOME_DESKTOP,
                        questContentCTA: g.jZ.ACCEPT_QUEST
                    }),
                (0, P.openVideoQuestModal)(u));
        }, [N, u, Q]);
    return (0, r.jsxs)('div', {
        className: k.container,
        children: [
            (0, r.jsx)('div', {
                className: k.heroAssetWrapper,
                children: (0, r.jsx)(M, {
                    quest: u,
                    isHovering: m,
                    showAssets: _
                })
            }),
            (0, r.jsx)('div', {
                className: a()(k.overlay, {
                    [k.darkThemeGradient]: L,
                    [k.lightThemeGradient]: !L
                })
            }),
            (0, r.jsxs)('div', {
                className: k.positionContentOverBackground,
                children: [
                    (0, r.jsxs)('div', {
                        className: k.contents,
                        children: [
                            (0, r.jsxs)('div', {
                                className: k.topRow,
                                children: [
                                    u.preview &&
                                        (0, r.jsx)('div', {
                                            className: k.pill,
                                            children: (0, r.jsx)(d.Text, {
                                                variant: 'eyebrow',
                                                color: 'always-white',
                                                className: k.eyebrowText,
                                                children: B.intl.string(B.t.SKNnqq)
                                            })
                                        }),
                                    N &&
                                        (0, r.jsx)(d.ua7, {
                                            text: U ? B.intl.string(B.t.YsCuyM) : Q ? B.intl.string(B.t['74Kqra']) : (0, j.zi)(u) ? B.intl.string(B.t['I6JG4+']) : B.intl.string(B.t.umdNio),
                                            children: (e) =>
                                                (0, r.jsx)(
                                                    d.P3F,
                                                    I(q({}, e), {
                                                        className: k.utilButtonWrapper,
                                                        'aria-label': B.intl.string(B.t.RscU7O),
                                                        onClick: z,
                                                        children: (0, r.jsx)(d.o1U, {
                                                            color: 'currentColor',
                                                            className: k.utilButtonIcon
                                                        })
                                                    })
                                                )
                                        }),
                                    (0, r.jsx)(S.r, {
                                        onOpen: C,
                                        onClose: y,
                                        onSelect: w,
                                        questContent: b.jn.QUEST_HOME_DESKTOP,
                                        quest: u,
                                        hideLearnMore: !0,
                                        shouldShowDisclosure: !0,
                                        showShareLink: !0,
                                        children: (e) =>
                                            (0, r.jsx)(
                                                d.P3F,
                                                I(q({}, e), {
                                                    className: k.utilButtonWrapper,
                                                    'aria-label': B.intl.string(B.t.DEoVWV),
                                                    children: (0, r.jsx)(d.xhG, {
                                                        size: 'md',
                                                        color: 'currentColor',
                                                        className: k.utilButtonIcon
                                                    })
                                                })
                                            )
                                    })
                                ]
                            }),
                            (0, r.jsx)(T.E, {
                                showPlaceholder: !_,
                                width: 100,
                                height: 30,
                                className: k.partnerBranding,
                                children: (0, r.jsx)(O.ZP, {
                                    className: k.partnerBranding,
                                    logotypeClassName: k.partnerLogotypes,
                                    quest: u,
                                    separatorSpacing: O.US.MEDIUM,
                                    withGameTile: !1,
                                    onLoadComplete: H
                                })
                            }),
                            (0, r.jsxs)('div', {
                                className: k.bottomRow,
                                children: [
                                    (0, r.jsx)(d.Text, {
                                        variant: 'text-sm/medium',
                                        color: L ? 'text-muted' : 'always-white',
                                        children: B.intl.format(B.t.buEvBw, { brandName: null != (l = null == (i = u.config.cosponsorMetadata) ? void 0 : i.name) ? l : u.config.messages.gamePublisher })
                                    }),
                                    Z || W
                                        ? null
                                        : (0, r.jsx)(d.Text, {
                                              variant: 'text-sm/medium',
                                              color: L ? 'text-muted' : 'always-white',
                                              children: B.intl.format(B.t['7D8r4O'], { expiryDate: V })
                                          })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsx)(D, {
                        quest: u,
                        errorHints: f,
                        warningHints: v,
                        isDarkTheme: L
                    })
                ]
            })
        ]
    });
}
