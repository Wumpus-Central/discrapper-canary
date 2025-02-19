n.d(t, { Z: () => q }), n(571269), n(298267);
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
    v = n(475595),
    y = n(720293),
    _ = n(623249),
    C = n(685613),
    O = n(78826),
    w = n(670638),
    S = n(341907),
    P = n(642145),
    N = n(981631),
    E = n(388032),
    T = n(487653);
function A(e) {
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
function R(e) {
    var t;
    let { quest: n, errorHints: s, warningHints: a, isDarkTheme: l } = e,
        { ref: c, height: p = 0 } = (0, u.Z)([s]),
        f = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
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
            config: P.Y
        }),
        y = 0 === x ? d.P4T : d.d3s,
        C = (0, m.Lq)(N.Ilk.RED_345),
        O = 0 === x ? C : l ? d.TVs.colors.TEXT_NORMAL : d.TVs.colors.WHITE;
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsx)(i.animated.div, {
            style: v,
            children: (0, r.jsxs)('div', {
                ref: c,
                className: T.hints,
                children: [
                    (0, r.jsxs)('div', {
                        className: T.hintsContainer,
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
        })
    });
}
function k(e) {
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
            className: a()(T.videoOverlay, { [T.videoOverlayVisible]: i }),
            controls: !1,
            children: (0, r.jsx)('source', {
                src: n.url,
                type: null !== (t = n.mimetype) && void 0 !== t ? t : void 0
            })
        })
    );
}
function q(e) {
    var t, n, s, i, u;
    let { quest: m, isHovering: _, errorHints: P, warningHints: q, onCtxMenuClose: D, onCtxMenuOpen: W, onCtxMenuSelect: I } = e,
        M = (0, j.q8)(m),
        L = o.useMemo(() => (0, v.fh)(m, v.eC.HERO), [m]),
        Z = (0, p.ZP)(),
        V = ((0, c.wj)(Z) ? N.BRd.DARK : N.BRd.LIGHT) === N.BRd.DARK,
        Q = o.useContext(l.S).reducedMotion.enabled,
        U = (0, h.tP)(m),
        H = (null === (t = m.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
        z = o.useRef(_),
        F = o.useRef(null),
        X = (0, h.B6)(m.config.expiresAt, {
            month: 'numeric',
            day: 'numeric'
        }),
        K = (null === (n = m.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
        Y = (null === (s = m.userStatus) || void 0 === s ? void 0 : s.completedAt) != null,
        G = o.useCallback(() => {
            M &&
                ((0, j.zi)(m) ||
                    K ||
                    (0, x.AH)(m.id, {
                        questContent: b.jn.QUEST_HOME_DESKTOP,
                        questContentCTA: g.jZ.ACCEPT_QUEST
                    }),
                (0, S.openVideoQuestModal)(m));
        }, [M, m, K]);
    o.useEffect(() => {
        if (L.isAnimated && null != F.current)
            return (
                z.current !== _ && (_ && !Q ? F.current.play() : (F.current.pause(), (F.current.currentTime = 0))),
                (z.current = _),
                () => {
                    var e;
                    null === (e = F.current) || void 0 === e || e.pause();
                }
            );
    }, [_, L, Q]);
    let J = o.useMemo(() => (0, y.z)(y.i.QUEST_HOME_VIDEO, m), [m]);
    return (0, r.jsxs)('div', {
        className: T.container,
        children: [
            (0, r.jsxs)('div', {
                className: T.heroAssetWrapper,
                children: [
                    L.isAnimated
                        ? (0, r.jsx)(O.Fl, {
                              id: 'QuestTileBanner_heroAnimated',
                              children: (e) => {
                                  var t;
                                  return (
                                      null != e.current && (F.current = e.current),
                                      (0, r.jsx)(f.Z, {
                                          ref: e,
                                          autoPlay: !Q && _,
                                          loop: !0,
                                          muted: !0,
                                          playsInline: !0,
                                          className: T.heroAsset,
                                          controls: !1,
                                          children: (0, r.jsx)('source', {
                                              src: L.url,
                                              type: null !== (t = L.mimetype) && void 0 !== t ? t : void 0
                                          })
                                      })
                                  );
                              }
                          })
                        : (0, r.jsx)(O.Fl, {
                              id: 'QuestTileBanner',
                              children: (e) =>
                                  (0, r.jsx)('img', {
                                      ref: e,
                                      alt: ''.concat(m.config.messages.questName),
                                      className: T.heroAsset,
                                      src: L.url
                                  })
                          }),
                    M &&
                        !Q &&
                        null != J &&
                        (0, r.jsx)(k, {
                            asset: J,
                            reducedMotionEnabled: Q,
                            visible: _
                        })
                ]
            }),
            (0, r.jsx)('div', {
                className: a()(T.overlay, {
                    [T.darkThemeGradient]: V,
                    [T.lightThemeGradient]: !V
                })
            }),
            (0, r.jsxs)('div', {
                className: T.positionContentOverBackground,
                children: [
                    (0, r.jsxs)('div', {
                        className: T.contents,
                        children: [
                            (0, r.jsxs)('div', {
                                className: T.topRow,
                                children: [
                                    m.preview &&
                                        (0, r.jsx)('div', {
                                            className: T.pill,
                                            children: (0, r.jsx)(d.Text, {
                                                variant: 'eyebrow',
                                                color: 'always-white',
                                                className: T.eyebrowText,
                                                children: E.NW.string(E.t.SKNnqq)
                                            })
                                        }),
                                    M &&
                                        (0, r.jsx)(d.ua7, {
                                            text: Y ? E.NW.string(E.t.YsCuyM) : K ? E.NW.string(E.t['74Kqra']) : (0, j.zi)(m) ? E.NW.string(E.t['I6JG4+']) : E.NW.string(E.t.umdNio),
                                            children: (e) =>
                                                (0, r.jsx)(
                                                    d.P3F,
                                                    B(A({}, e), {
                                                        className: T.utilButtonWrapper,
                                                        'aria-label': E.NW.string(E.t.RscU7O),
                                                        onClick: G,
                                                        children: (0, r.jsx)(d.o1U, {
                                                            color: 'currentColor',
                                                            className: T.utilButtonIcon
                                                        })
                                                    })
                                                )
                                        }),
                                    (0, r.jsx)(w.r, {
                                        onOpen: W,
                                        onClose: D,
                                        onSelect: I,
                                        questContent: b.jn.QUEST_HOME_DESKTOP,
                                        quest: m,
                                        hideLearnMore: !0,
                                        shouldShowDisclosure: !0,
                                        showShareLink: !0,
                                        children: (e) =>
                                            (0, r.jsx)(
                                                d.P3F,
                                                B(A({}, e), {
                                                    className: T.utilButtonWrapper,
                                                    'aria-label': E.NW.string(E.t.DEoVWV),
                                                    children: (0, r.jsx)(d.xhG, {
                                                        size: 'md',
                                                        color: 'currentColor',
                                                        className: a()(T.utilButtonIcon)
                                                    })
                                                })
                                            )
                                    })
                                ]
                            }),
                            (0, r.jsx)(C.ZP, {
                                className: T.partnerBranding,
                                logotypeClassName: T.partnerLogotypes,
                                quest: m,
                                separatorSpacing: C.US.MEDIUM,
                                withGameTile: !1
                            }),
                            (0, r.jsxs)('div', {
                                className: T.bottomRow,
                                children: [
                                    (0, r.jsx)(d.Text, {
                                        variant: 'text-sm/medium',
                                        color: V ? 'text-muted' : 'always-white',
                                        children: E.NW.format(E.t.buEvBw, { brandName: null !== (u = null === (i = m.config.cosponsorMetadata) || void 0 === i ? void 0 : i.name) && void 0 !== u ? u : m.config.messages.gamePublisher })
                                    }),
                                    U || H
                                        ? null
                                        : (0, r.jsx)(d.Text, {
                                              variant: 'text-sm/medium',
                                              color: V ? 'text-muted' : 'always-white',
                                              children: E.NW.format(E.t['7D8r4O'], { expiryDate: X })
                                          })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsx)(R, {
                        quest: m,
                        errorHints: P,
                        warningHints: q,
                        isDarkTheme: V
                    })
                ]
            })
        ]
    });
}
