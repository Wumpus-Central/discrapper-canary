n.d(t, { Z: () => I }), n(571269), n(298267);
var r = n(200651),
    o = n(192379),
    s = n(120356),
    a = n.n(s),
    i = n(642128),
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
    _ = n(720293),
    C = n(623249),
    O = n(685613),
    w = n(78826),
    S = n(670638),
    P = n(341907),
    N = n(46140),
    E = n(642145),
    T = n(981631),
    A = n(388032),
    B = n(508936);
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
function q(e) {
    var t;
    let { quest: n, errorHints: s, warningHints: a, isDarkTheme: l } = e,
        { ref: c, height: p = 0 } = (0, u.Z)([s]),
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
            config: E.Y
        }),
        y = 0 === x ? d.P4T : d.d3s,
        _ = (0, m.Lq)(T.Ilk.RED_345),
        O = 0 === x ? _ : l ? d.TVs.colors.TEXT_NORMAL : d.TVs.colors.WHITE;
    return (0, r.jsx)(i.animated.div, {
        style: v,
        children: (0, r.jsxs)('div', {
            ref: c,
            className: B.hints,
            children: [
                (0, r.jsxs)('div', {
                    className: B.hintsContainer,
                    children: [
                        (0, r.jsx)(y, {
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
                        style: { color: (0, m.Lq)(T.Ilk.BLUE_345) },
                        children: 'See Details'
                    })
            ]
        })
    });
}
function D(e) {
    var t;
    let { asset: n, reducedMotionEnabled: s, visible: i } = e,
        l = o.useRef(null);
    return (
        o.useEffect(() => {
            null != l.current && i && l.current.play();
        }, [i]),
        (0, r.jsx)(f.Z, {
            ref: l,
            autoPlay: !s,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: a()(B.videoOverlay, { [B.videoOverlayVisible]: i }),
            controls: !1,
            children: (0, r.jsx)('source', {
                src: n.url,
                type: null != (t = n.mimetype) ? t : void 0
            })
        })
    );
}
function I(e) {
    var t, n, s, i, u;
    let { quest: m, isHovering: C, errorHints: E, warningHints: I, onCtxMenuClose: W, onCtxMenuOpen: M, onCtxMenuSelect: L } = e,
        Z = (0, j.q8)(m),
        V = o.useMemo(() => (0, y.fh)(m, y.eC.HERO), [m]),
        Q = (0, p.ZP)(),
        U = ((0, c.wj)(Q) ? T.BRd.DARK : T.BRd.LIGHT) === T.BRd.DARK,
        H = o.useContext(l.S).reducedMotion.enabled,
        z = (0, h.tP)(m),
        F = (null == (t = m.userStatus) ? void 0 : t.claimedAt) != null,
        X = o.useRef(C),
        K = o.useRef(null),
        Y = (0, h.B6)(m.config.expiresAt, {
            month: 'numeric',
            day: 'numeric'
        }),
        G = (null == (n = m.userStatus) ? void 0 : n.enrolledAt) != null,
        J = (null == (s = m.userStatus) ? void 0 : s.completedAt) != null,
        $ = (0, v.h)(m, N.dr.QUEST_HOME_DESKTOP),
        ee = o.useCallback(() => {
            Z &&
                ((0, j.zi)(m) ||
                    G ||
                    (0, x.AH)(m.id, {
                        questContent: b.jn.QUEST_HOME_DESKTOP,
                        questContentCTA: g.jZ.ACCEPT_QUEST
                    }),
                (0, P.openVideoQuestModal)(m));
        }, [Z, m, G]);
    o.useEffect(() => {
        if (V.isAnimated && null != K.current)
            return (
                X.current !== C && (C && !H ? K.current.play() : (K.current.pause(), (K.current.currentTime = 0))),
                (X.current = C),
                () => {
                    var e;
                    null == (e = K.current) || e.pause();
                }
            );
    }, [C, V, H]);
    let et = o.useMemo(() => (0, _.z)(_.i.QUEST_HOME_VIDEO, m), [m]);
    return (0, r.jsxs)('div', {
        className: B.container,
        children: [
            (0, r.jsxs)('div', {
                className: B.heroAssetWrapper,
                children: [
                    V.isAnimated
                        ? (0, r.jsx)(w.Fl, {
                              id: 'QuestTileBanner_heroAnimated',
                              children: (e) => {
                                  var t;
                                  return (
                                      null != e.current && (K.current = e.current),
                                      (0, r.jsx)(f.Z, {
                                          ref: e,
                                          autoPlay: !H && C,
                                          loop: !0,
                                          muted: !0,
                                          playsInline: !0,
                                          className: B.heroAsset,
                                          controls: !1,
                                          children: (0, r.jsx)('source', {
                                              src: V.url,
                                              type: null != (t = V.mimetype) ? t : void 0
                                          })
                                      })
                                  );
                              }
                          })
                        : (0, r.jsx)(w.Fl, {
                              id: 'QuestTileBanner',
                              children: (e) =>
                                  (0, r.jsx)('img', {
                                      ref: e,
                                      alt: ''.concat(m.config.messages.questName),
                                      className: B.heroAsset,
                                      src: V.url
                                  })
                          }),
                    Z &&
                        !H &&
                        null != et &&
                        !$ &&
                        (0, r.jsx)(D, {
                            asset: et,
                            reducedMotionEnabled: H,
                            visible: C
                        })
                ]
            }),
            (0, r.jsx)('div', {
                className: a()(B.overlay, {
                    [B.darkThemeGradient]: U,
                    [B.lightThemeGradient]: !U
                })
            }),
            (0, r.jsxs)('div', {
                className: B.positionContentOverBackground,
                children: [
                    (0, r.jsxs)('div', {
                        className: B.contents,
                        children: [
                            (0, r.jsxs)('div', {
                                className: B.topRow,
                                children: [
                                    m.preview &&
                                        (0, r.jsx)('div', {
                                            className: B.pill,
                                            children: (0, r.jsx)(d.Text, {
                                                variant: 'eyebrow',
                                                color: 'always-white',
                                                className: B.eyebrowText,
                                                children: A.NW.string(A.t.SKNnqq)
                                            })
                                        }),
                                    Z &&
                                        (0, r.jsx)(d.ua7, {
                                            text: J ? A.NW.string(A.t.YsCuyM) : G ? A.NW.string(A.t['74Kqra']) : (0, j.zi)(m) ? A.NW.string(A.t['I6JG4+']) : A.NW.string(A.t.umdNio),
                                            children: (e) =>
                                                (0, r.jsx)(
                                                    d.P3F,
                                                    k(R({}, e), {
                                                        className: B.utilButtonWrapper,
                                                        'aria-label': A.NW.string(A.t.RscU7O),
                                                        onClick: ee,
                                                        children: (0, r.jsx)(d.o1U, {
                                                            color: 'currentColor',
                                                            className: B.utilButtonIcon
                                                        })
                                                    })
                                                )
                                        }),
                                    (0, r.jsx)(S.r, {
                                        onOpen: M,
                                        onClose: W,
                                        onSelect: L,
                                        questContent: b.jn.QUEST_HOME_DESKTOP,
                                        quest: m,
                                        hideLearnMore: !0,
                                        shouldShowDisclosure: !0,
                                        showShareLink: !0,
                                        children: (e) =>
                                            (0, r.jsx)(
                                                d.P3F,
                                                k(R({}, e), {
                                                    className: B.utilButtonWrapper,
                                                    'aria-label': A.NW.string(A.t.DEoVWV),
                                                    children: (0, r.jsx)(d.xhG, {
                                                        size: 'md',
                                                        color: 'currentColor',
                                                        className: B.utilButtonIcon
                                                    })
                                                })
                                            )
                                    })
                                ]
                            }),
                            (0, r.jsx)(O.ZP, {
                                className: B.partnerBranding,
                                logotypeClassName: B.partnerLogotypes,
                                quest: m,
                                separatorSpacing: O.US.MEDIUM,
                                withGameTile: !1
                            }),
                            (0, r.jsxs)('div', {
                                className: B.bottomRow,
                                children: [
                                    (0, r.jsx)(d.Text, {
                                        variant: 'text-sm/medium',
                                        color: U ? 'text-muted' : 'always-white',
                                        children: A.NW.format(A.t.buEvBw, { brandName: null != (u = null == (i = m.config.cosponsorMetadata) ? void 0 : i.name) ? u : m.config.messages.gamePublisher })
                                    }),
                                    z || F
                                        ? null
                                        : (0, r.jsx)(d.Text, {
                                              variant: 'text-sm/medium',
                                              color: U ? 'text-muted' : 'always-white',
                                              children: A.NW.format(A.t['7D8r4O'], { expiryDate: Y })
                                          })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsx)(q, {
                        quest: m,
                        errorHints: E,
                        warningHints: I,
                        isDarkTheme: U
                    })
                ]
            })
        ]
    });
}
