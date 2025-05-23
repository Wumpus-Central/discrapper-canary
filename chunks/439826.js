n.d(t, { Z: () => I }), n(784620), n(973216);
var r = n(255367),
    o = n(73800),
    s = n(120356),
    a = n.n(s),
    i = n(366594),
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
    y = n(475595),
    _ = n(623249),
    O = n(685613),
    C = n(78826),
    w = n(670638),
    S = n(341907),
    P = n(251360),
    E = n(46140),
    T = n(642145),
    N = n(981631),
    A = n(388032),
    R = n(180022);
function k(e) {
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
function B(e, t) {
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
            config: T.Y
        }),
        y = 0 === x ? d.P4T : d.d3s,
        O = (0, m.Lq)(N.Ilk.RED_345),
        C = 0 === x ? O : l ? d.TVs.colors.TEXT_NORMAL : d.TVs.colors.WHITE;
    return (0, r.jsx)(i.animated.div, {
        style: v,
        children: (0, r.jsxs)('div', {
            ref: c,
            className: R.hints,
            children: [
                (0, r.jsxs)('div', {
                    className: R.hintsContainer,
                    children: [
                        (0, r.jsx)(y, {
                            size: 'xs',
                            color: C
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
                            (0, _.y)({
                                questId: n.id,
                                errorHints: s
                            }),
                        size: d.PhG.MIN,
                        look: d.iLD.LINK,
                        color: d.Ttl.CUSTOM,
                        style: { color: (0, m.Lq)(N.Ilk.BLUE_345) },
                        children: 'See Details'
                    })
            ]
        })
    });
}
function D(e) {
    let { quest: t, isHovering: n } = e,
        s = o.useRef(null),
        i = o.useRef(n),
        c = o.useContext(l.S).reducedMotion.enabled,
        d = o.useMemo(() => (0, y.fh)(t, y.eC.HERO_IMAGE), [t]),
        u = o.useMemo(() => (0, y.fh)(t, y.eC.HERO_VIDEO), [t]),
        p = (0, v.h)(t, E.dr.QUEST_HOME_DESKTOP),
        { onAssetLoadComplete: m } = o.useContext(P.k);
    o.useEffect(() => {
        if (null == u || null == s.current || i.current === n) return;
        n && !c ? s.current.play() : s.current.pause(), (i.current = n);
        let e = s.current;
        return () => {
            null != e && e.pause();
        };
    }, [n, c, u]);
    let g = null != u && !p && n;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != d &&
                (0, r.jsx)(C.Fl, {
                    id: 'QuestTileBanner',
                    children: (e) =>
                        (0, r.jsx)('img', {
                            ref: e,
                            alt: ''.concat(t.config.messages.questName),
                            className: a()(R.heroAsset, { [R.hidden]: g }),
                            src: d.url,
                            onLoad: m
                        })
                }),
            null != u &&
                !p &&
                (0, r.jsx)(C.Fl, {
                    id: 'QuestTileBanner_heroAnimated',
                    children: (e) => {
                        var t;
                        return (
                            null != e.current && (s.current = e.current),
                            (0, r.jsx)(f.Z, {
                                ref: e,
                                autoPlay: !1,
                                loop: !0,
                                muted: !0,
                                poster: null == d ? void 0 : d.url,
                                preload: 'none',
                                playsInline: !0,
                                className: a()(R.heroAssetVideo, { [R.visible]: g }),
                                controls: !1,
                                onLoadedData: m,
                                children: (0, r.jsx)('source', {
                                    src: u.url,
                                    type: null != (t = u.mimetype) ? t : void 0
                                })
                            })
                        );
                    }
                })
        ]
    });
}
function I(e) {
    var t, n, s, i, l;
    let { quest: u, isHovering: m, errorHints: f, warningHints: v, onCtxMenuClose: y, onCtxMenuOpen: _, onCtxMenuSelect: C } = e,
        E = (0, j.q8)(u),
        T = (0, p.ZP)(),
        I = ((0, c.wj)(T) ? N.BRd.DARK : N.BRd.LIGHT) === N.BRd.DARK,
        M = (0, h.tP)(u),
        L = (null == (t = u.userStatus) ? void 0 : t.claimedAt) != null,
        W = (0, h.B6)(u.config.expiresAt, {
            month: 'numeric',
            day: 'numeric'
        }),
        Z = (null == (n = u.userStatus) ? void 0 : n.enrolledAt) != null,
        V = (null == (s = u.userStatus) ? void 0 : s.completedAt) != null,
        { onAssetLoadComplete: Q } = o.useContext(P.k),
        H = o.useCallback(() => {
            E &&
                ((0, j.zi)(u) ||
                    Z ||
                    (0, x.AH)(u.id, {
                        questContent: b.jn.QUEST_HOME_DESKTOP,
                        questContentCTA: g.jZ.ACCEPT_QUEST
                    }),
                (0, S.openVideoQuestModal)(u));
        }, [E, u, Z]);
    return (0, r.jsxs)('div', {
        className: R.container,
        children: [
            (0, r.jsx)('div', {
                className: R.heroAssetWrapper,
                children: (0, r.jsx)(D, {
                    quest: u,
                    isHovering: m
                })
            }),
            (0, r.jsx)('div', {
                className: a()(R.overlay, {
                    [R.darkThemeGradient]: I,
                    [R.lightThemeGradient]: !I
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
                                    u.preview &&
                                        (0, r.jsx)('div', {
                                            className: R.pill,
                                            children: (0, r.jsx)(d.Text, {
                                                variant: 'eyebrow',
                                                color: 'always-white',
                                                className: R.eyebrowText,
                                                children: A.intl.string(A.t.SKNnqq)
                                            })
                                        }),
                                    E &&
                                        (0, r.jsx)(d.ua7, {
                                            text: V ? A.intl.string(A.t.YsCuyM) : Z ? A.intl.string(A.t['74Kqra']) : (0, j.zi)(u) ? A.intl.string(A.t['I6JG4+']) : A.intl.string(A.t.umdNio),
                                            children: (e) =>
                                                (0, r.jsx)(
                                                    d.P3F,
                                                    B(k({}, e), {
                                                        className: R.utilButtonWrapper,
                                                        'aria-label': A.intl.string(A.t.RscU7O),
                                                        onClick: H,
                                                        children: (0, r.jsx)(d.o1U, {
                                                            color: 'currentColor',
                                                            className: R.utilButtonIcon
                                                        })
                                                    })
                                                )
                                        }),
                                    (0, r.jsx)(w.r, {
                                        onOpen: _,
                                        onClose: y,
                                        onSelect: C,
                                        questContent: b.jn.QUEST_HOME_DESKTOP,
                                        quest: u,
                                        hideLearnMore: !0,
                                        shouldShowDisclosure: !0,
                                        showShareLink: !0,
                                        children: (e) =>
                                            (0, r.jsx)(
                                                d.P3F,
                                                B(k({}, e), {
                                                    className: R.utilButtonWrapper,
                                                    'aria-label': A.intl.string(A.t.DEoVWV),
                                                    children: (0, r.jsx)(d.xhG, {
                                                        size: 'md',
                                                        color: 'currentColor',
                                                        className: R.utilButtonIcon
                                                    })
                                                })
                                            )
                                    })
                                ]
                            }),
                            (0, r.jsx)(O.ZP, {
                                className: R.partnerBranding,
                                logotypeClassName: R.partnerLogotypes,
                                quest: u,
                                separatorSpacing: O.US.MEDIUM,
                                withGameTile: !1,
                                onLoadComplete: Q
                            }),
                            (0, r.jsxs)('div', {
                                className: R.bottomRow,
                                children: [
                                    (0, r.jsx)(d.Text, {
                                        variant: 'text-sm/medium',
                                        color: I ? 'text-muted' : 'always-white',
                                        children: A.intl.format(A.t.buEvBw, { brandName: null != (l = null == (i = u.config.cosponsorMetadata) ? void 0 : i.name) ? l : u.config.messages.gamePublisher })
                                    }),
                                    M || L
                                        ? null
                                        : (0, r.jsx)(d.Text, {
                                              variant: 'text-sm/medium',
                                              color: I ? 'text-muted' : 'always-white',
                                              children: A.intl.format(A.t['7D8r4O'], { expiryDate: W })
                                          })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsx)(q, {
                        quest: u,
                        errorHints: f,
                        warningHints: v,
                        isDarkTheme: I
                    })
                ]
            })
        ]
    });
}
