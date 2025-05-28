n.d(t, { Z: () => M }), n(784620), n(973216);
var r = n(255367),
    o = n(73800),
    s = n(120356),
    a = n.n(s),
    i = n(240894),
    l = n(186325),
    c = n(780384),
    u = n(481060),
    d = n(393238),
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
    E = n(19148),
    T = n(46140),
    N = n(642145),
    A = n(981631),
    R = n(388032),
    k = n(508936);
function B(e) {
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
function q(e, t) {
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
    let { quest: n, errorHints: s, warningHints: a, isDarkTheme: l } = e,
        { ref: c, height: p = 0 } = (0, d.ZP)([s]),
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
        v = (0, u.q_F)({
            opacity: +!!j,
            height: j ? p : 0,
            config: N.Y
        }),
        y = 0 === x ? u.P4T : u.d3s,
        O = (0, m.Lq)(A.Ilk.RED_345),
        C = 0 === x ? O : l ? u.TVs.colors.TEXT_NORMAL : u.TVs.colors.WHITE;
    return (0, r.jsx)(i.animated.div, {
        style: v,
        children: (0, r.jsxs)('div', {
            ref: c,
            className: k.hints,
            children: [
                (0, r.jsxs)('div', {
                    className: k.hintsContainer,
                    children: [
                        (0, r.jsx)(y, {
                            size: 'xs',
                            color: C
                        }),
                        (0, r.jsx)(u.Text, {
                            variant: 'text-xs/medium',
                            color: l ? 'text-muted' : 'always-white',
                            children: b.at(0)
                        })
                    ]
                }),
                0 === x &&
                    (0, r.jsx)(u.zxk, {
                        onClick: () =>
                            (0, _.y)({
                                questId: n.id,
                                errorHints: s
                            }),
                        size: u.PhG.MIN,
                        look: u.iLD.LINK,
                        color: u.Ttl.CUSTOM,
                        style: { color: (0, m.Lq)(A.Ilk.BLUE_345) },
                        children: 'See Details'
                    })
            ]
        })
    });
}
function D(e) {
    let { quest: t, isHovering: n, showAssets: s } = e,
        i = o.useRef(null),
        c = o.useRef(n),
        u = o.useContext(l.S).reducedMotion.enabled,
        d = o.useMemo(() => (0, y.fh)(t, y.eC.HERO_IMAGE), [t]),
        p = o.useMemo(() => (0, y.fh)(t, y.eC.HERO_VIDEO), [t]),
        m = (0, v.h)(t, T.dr.QUEST_HOME_DESKTOP),
        { onAssetLoadComplete: g } = o.useContext(P.k);
    o.useEffect(() => {
        if (null == p || null == i.current || c.current === n) return;
        n && !u ? i.current.play() : i.current.pause(), (c.current = n);
        let e = i.current;
        return () => {
            null != e && e.pause();
        };
    }, [n, u, p]);
    let x = null != p && !m && n;
    return (0, r.jsxs)('div', {
        className: k.heroAssetCont,
        children: [
            s &&
                null != d &&
                (0, r.jsx)(C.Fl, {
                    id: 'QuestTileBanner',
                    children: (e) =>
                        (0, r.jsx)('img', {
                            ref: e,
                            alt: ''.concat(t.config.messages.questName),
                            className: a()(k.heroAsset, { [k.hidden]: x }),
                            src: d.url,
                            onLoad: g
                        })
                }),
            s &&
                null != p &&
                !m &&
                (0, r.jsx)(C.Fl, {
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
                                poster: null == d ? void 0 : d.url,
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
function M(e) {
    var t, n, s, i, l;
    let { quest: d, isHovering: m, errorHints: f, warningHints: v, isVisibleInViewport: y, onCtxMenuClose: _, onCtxMenuOpen: C, onCtxMenuSelect: T } = e,
        N = (0, j.q8)(d),
        M = (0, p.ZP)(),
        L = ((0, c.wj)(M) ? A.BRd.DARK : A.BRd.LIGHT) === A.BRd.DARK,
        W = (0, h.tP)(d),
        Z = (null == (t = d.userStatus) ? void 0 : t.claimedAt) != null,
        V = (0, h.B6)(d.config.expiresAt, {
            month: 'numeric',
            day: 'numeric'
        }),
        Q = (null == (n = d.userStatus) ? void 0 : n.enrolledAt) != null,
        H = (null == (s = d.userStatus) ? void 0 : s.completedAt) != null,
        { onAssetLoadComplete: U } = o.useContext(P.k),
        z = o.useCallback(() => {
            N &&
                ((0, j.zi)(d) ||
                    Q ||
                    (0, x.AH)(d.id, {
                        questContent: b.jn.QUEST_HOME_DESKTOP,
                        questContentCTA: g.jZ.ACCEPT_QUEST
                    }),
                (0, S.openVideoQuestModal)(d));
        }, [N, d, Q]);
    return (0, r.jsxs)('div', {
        className: k.container,
        children: [
            (0, r.jsx)('div', {
                className: k.heroAssetWrapper,
                children: (0, r.jsx)(D, {
                    quest: d,
                    isHovering: m,
                    showAssets: y
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
                                    d.preview &&
                                        (0, r.jsx)('div', {
                                            className: k.pill,
                                            children: (0, r.jsx)(u.Text, {
                                                variant: 'eyebrow',
                                                color: 'always-white',
                                                className: k.eyebrowText,
                                                children: R.intl.string(R.t.SKNnqq)
                                            })
                                        }),
                                    N &&
                                        (0, r.jsx)(u.ua7, {
                                            text: H ? R.intl.string(R.t.YsCuyM) : Q ? R.intl.string(R.t['74Kqra']) : (0, j.zi)(d) ? R.intl.string(R.t['I6JG4+']) : R.intl.string(R.t.umdNio),
                                            children: (e) =>
                                                (0, r.jsx)(
                                                    u.P3F,
                                                    q(B({}, e), {
                                                        className: k.utilButtonWrapper,
                                                        'aria-label': R.intl.string(R.t.RscU7O),
                                                        onClick: z,
                                                        children: (0, r.jsx)(u.o1U, {
                                                            color: 'currentColor',
                                                            className: k.utilButtonIcon
                                                        })
                                                    })
                                                )
                                        }),
                                    (0, r.jsx)(w.r, {
                                        onOpen: C,
                                        onClose: _,
                                        onSelect: T,
                                        questContent: b.jn.QUEST_HOME_DESKTOP,
                                        quest: d,
                                        hideLearnMore: !0,
                                        shouldShowDisclosure: !0,
                                        showShareLink: !0,
                                        children: (e) =>
                                            (0, r.jsx)(
                                                u.P3F,
                                                q(B({}, e), {
                                                    className: k.utilButtonWrapper,
                                                    'aria-label': R.intl.string(R.t.DEoVWV),
                                                    children: (0, r.jsx)(u.xhG, {
                                                        size: 'md',
                                                        color: 'currentColor',
                                                        className: k.utilButtonIcon
                                                    })
                                                })
                                            )
                                    })
                                ]
                            }),
                            (0, r.jsx)(E.E, {
                                showPlaceholder: !y,
                                width: 100,
                                height: 30,
                                className: k.partnerBranding,
                                children: (0, r.jsx)(O.ZP, {
                                    className: k.partnerBranding,
                                    logotypeClassName: k.partnerLogotypes,
                                    quest: d,
                                    separatorSpacing: O.US.MEDIUM,
                                    withGameTile: !1,
                                    onLoadComplete: U
                                })
                            }),
                            (0, r.jsxs)('div', {
                                className: k.bottomRow,
                                children: [
                                    (0, r.jsx)(u.Text, {
                                        variant: 'text-sm/medium',
                                        color: L ? 'text-muted' : 'always-white',
                                        children: R.intl.format(R.t.buEvBw, { brandName: null != (l = null == (i = d.config.cosponsorMetadata) ? void 0 : i.name) ? l : d.config.messages.gamePublisher })
                                    }),
                                    W || Z
                                        ? null
                                        : (0, r.jsx)(u.Text, {
                                              variant: 'text-sm/medium',
                                              color: L ? 'text-muted' : 'always-white',
                                              children: R.intl.format(R.t['7D8r4O'], { expiryDate: V })
                                          })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsx)(I, {
                        quest: d,
                        errorHints: f,
                        warningHints: v,
                        isDarkTheme: L
                    })
                ]
            })
        ]
    });
}
