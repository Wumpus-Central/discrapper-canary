n.d(t, { Z: () => k }), n(571269), n(298267);
var s = n(200651),
    r = n(192379),
    a = n(120356),
    o = n.n(a),
    i = n(642128),
    l = n(186325),
    c = n(780384),
    d = n(481060),
    u = n(393238),
    p = n(410030),
    m = n(44315),
    x = n(70097),
    h = n(617136),
    g = n(272008),
    f = n(113434),
    v = n(497505),
    _ = n(918701),
    C = n(475595),
    j = n(720293),
    b = n(623249),
    T = n(685613),
    E = n(78826),
    S = n(64141),
    N = n(341907),
    y = n(642145),
    w = n(981631),
    A = n(388032),
    B = n(60821);
function R(e) {
    var t;
    let { quest: n, errorHints: a, warningHints: o, isDarkTheme: l } = e,
        { ref: c, height: p = 0 } = (0, u.Z)([a]),
        x = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        h = (0, f.z)(n),
        { type: g, hints: v } = r.useMemo(
            () =>
                x || h
                    ? {
                          type: 2,
                          hints: []
                      }
                    : a.length > 0
                      ? {
                            type: 0,
                            hints: a.map((e) => e.message)
                        }
                      : o.length > 0
                        ? {
                              type: 1,
                              hints: o
                          }
                        : {
                              type: 2,
                              hints: []
                          },
            [a, x, h, o]
        ),
        _ = 2 !== g,
        C = (0, d.q_F)({
            opacity: _ ? 1 : 0,
            height: _ ? p : 0,
            config: y.Y
        }),
        j = 0 === g ? d.P4T : d.d3s,
        T = (0, m.Lq)(w.Ilk.RED_345),
        E = 0 === g ? T : l ? d.TVs.colors.TEXT_NORMAL : d.TVs.colors.WHITE;
    return (0, s.jsx)(s.Fragment, {
        children: (0, s.jsx)(i.animated.div, {
            style: C,
            children: (0, s.jsxs)('div', {
                ref: c,
                className: B.hints,
                children: [
                    (0, s.jsxs)('div', {
                        className: B.hintsContainer,
                        children: [
                            (0, s.jsx)(j, {
                                size: 'xs',
                                color: E
                            }),
                            (0, s.jsx)(d.Text, {
                                variant: 'text-xs/medium',
                                color: l ? 'text-muted' : 'always-white',
                                children: v.at(0)
                            })
                        ]
                    }),
                    0 === g &&
                        (0, s.jsx)(d.zxk, {
                            onClick: () =>
                                (0, b.y)({
                                    questId: n.id,
                                    errorHints: a
                                }),
                            size: d.PhG.MIN,
                            look: d.iLD.LINK,
                            color: d.Ttl.CUSTOM,
                            style: { color: (0, m.Lq)(w.Ilk.BLUE_345) },
                            children: 'See Details'
                        })
                ]
            })
        })
    });
}
function P(e) {
    var t;
    let { asset: n, reducedMotionEnabled: a, visible: i } = e,
        l = r.useRef(null);
    return (
        r.useEffect(() => {
            null != l.current && i && l.current.play();
        }, [i]),
        (0, s.jsx)(x.Z, {
            ref: l,
            autoPlay: !a,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: o()(B.videoOverlay, { [B.videoOverlayVisible]: i }),
            controls: !1,
            children: (0, s.jsx)('source', {
                src: n.url,
                type: null !== (t = n.mimetype) && void 0 !== t ? t : void 0
            })
        })
    );
}
function k(e) {
    var t, n, a, i, u;
    let { quest: m, isHovering: b, errorHints: y, warningHints: k, onCtxMenuClose: q, onCtxMenuOpen: I, onCtxMenuSelect: O } = e,
        M = (0, _.q8)(m),
        D = r.useMemo(() => (0, C.fh)(m, C.eC.HERO), [m]),
        L = (0, p.ZP)(),
        Z = ((0, c.wj)(L) ? w.BRd.DARK : w.BRd.LIGHT) === w.BRd.DARK,
        W = r.useContext(l.S).reducedMotion.enabled,
        V = (0, f.tP)(m),
        Q = (null === (t = m.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
        U = r.useRef(b),
        H = r.useRef(null),
        z = (0, f.B6)(m.config.expiresAt, {
            month: 'numeric',
            day: 'numeric'
        }),
        F = (null === (n = m.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
        X = (null === (a = m.userStatus) || void 0 === a ? void 0 : a.completedAt) != null,
        K = r.useCallback(() => {
            M &&
                ((0, _.zi)(m) ||
                    F ||
                    (0, g.AH)(m.id, {
                        questContent: v.jn.QUEST_HOME_DESKTOP,
                        questContentCTA: h.jZ.ACCEPT_QUEST
                    }),
                (0, N.openVideoQuestModal)(m));
        }, [M, m, F]);
    r.useEffect(() => {
        if (D.isAnimated && null != H.current)
            return (
                U.current !== b && (b && !W ? H.current.play() : (H.current.pause(), (H.current.currentTime = 0))),
                (U.current = b),
                () => {
                    var e;
                    null === (e = H.current) || void 0 === e || e.pause();
                }
            );
    }, [b, D, W]);
    let Y = r.useMemo(() => (0, j.z)(j.i.QUEST_HOME_VIDEO, m), [m]);
    return (0, s.jsxs)('div', {
        className: B.container,
        children: [
            (0, s.jsxs)('div', {
                className: B.heroAssetWrapper,
                children: [
                    D.isAnimated
                        ? (0, s.jsx)(E.Fl, {
                              id: 'QuestTileBanner_heroAnimated',
                              children: (e) => {
                                  var t;
                                  return (
                                      null != e.current && (H.current = e.current),
                                      (0, s.jsx)(x.Z, {
                                          ref: e,
                                          autoPlay: !W && b,
                                          loop: !0,
                                          muted: !0,
                                          playsInline: !0,
                                          className: B.heroAsset,
                                          controls: !1,
                                          children: (0, s.jsx)('source', {
                                              src: D.url,
                                              type: null !== (t = D.mimetype) && void 0 !== t ? t : void 0
                                          })
                                      })
                                  );
                              }
                          })
                        : (0, s.jsx)(E.Fl, {
                              id: 'QuestTileBanner',
                              children: (e) =>
                                  (0, s.jsx)('img', {
                                      ref: e,
                                      alt: ''.concat(m.config.messages.questName),
                                      className: B.heroAsset,
                                      src: D.url
                                  })
                          }),
                    M &&
                        !W &&
                        null != Y &&
                        (0, s.jsx)(P, {
                            asset: Y,
                            reducedMotionEnabled: W,
                            visible: b
                        })
                ]
            }),
            (0, s.jsx)('div', {
                className: o()(B.overlay, {
                    [B.darkThemeGradient]: Z,
                    [B.lightThemeGradient]: !Z
                })
            }),
            (0, s.jsxs)('div', {
                className: B.positionContentOverBackground,
                children: [
                    (0, s.jsxs)('div', {
                        className: B.contents,
                        children: [
                            (0, s.jsxs)('div', {
                                className: B.topRow,
                                children: [
                                    m.preview &&
                                        (0, s.jsx)('div', {
                                            className: B.pill,
                                            children: (0, s.jsx)(d.Text, {
                                                variant: 'eyebrow',
                                                color: 'always-white',
                                                className: B.eyebrowText,
                                                children: A.intl.string(A.t.SKNnqq)
                                            })
                                        }),
                                    M &&
                                        (0, s.jsx)(d.ua7, {
                                            text: X ? A.intl.string(A.t.YsCuyM) : F ? A.intl.string(A.t['74Kqra']) : (0, _.zi)(m) ? A.intl.string(A.t['I6JG4+']) : A.intl.string(A.t.umdNio),
                                            children: (e) =>
                                                (0, s.jsx)(d.P3F, {
                                                    ...e,
                                                    className: B.utilButtonWrapper,
                                                    'aria-label': A.intl.string(A.t.RscU7O),
                                                    onClick: K,
                                                    children: (0, s.jsx)(d.o1U, {
                                                        color: 'currentColor',
                                                        className: B.utilButtonIcon
                                                    })
                                                })
                                        }),
                                    (0, s.jsx)(S.r, {
                                        onOpen: I,
                                        onClose: q,
                                        onSelect: O,
                                        questContent: v.jn.QUEST_HOME_DESKTOP,
                                        quest: m,
                                        hideLearnMore: !0,
                                        shouldShowDisclosure: !0,
                                        showShareLink: !0,
                                        children: (e) =>
                                            (0, s.jsx)(d.P3F, {
                                                ...e,
                                                className: B.utilButtonWrapper,
                                                'aria-label': A.intl.string(A.t.DEoVWV),
                                                children: (0, s.jsx)(d.xhG, {
                                                    size: 'md',
                                                    color: 'currentColor',
                                                    className: o()(B.utilButtonIcon)
                                                })
                                            })
                                    })
                                ]
                            }),
                            (0, s.jsx)(T.ZP, {
                                className: B.partnerBranding,
                                logotypeClassName: B.partnerLogotypes,
                                quest: m,
                                separatorSpacing: T.US.MEDIUM,
                                withGameTile: !1
                            }),
                            (0, s.jsxs)('div', {
                                className: B.bottomRow,
                                children: [
                                    (0, s.jsx)(d.Text, {
                                        variant: 'text-sm/medium',
                                        color: Z ? 'text-muted' : 'always-white',
                                        children: A.intl.format(A.t.buEvBw, { brandName: null !== (u = null === (i = m.config.cosponsorMetadata) || void 0 === i ? void 0 : i.name) && void 0 !== u ? u : m.config.messages.gamePublisher })
                                    }),
                                    V || Q
                                        ? null
                                        : (0, s.jsx)(d.Text, {
                                              variant: 'text-sm/medium',
                                              color: Z ? 'text-muted' : 'always-white',
                                              children: A.intl.format(A.t['7D8r4O'], { expiryDate: z })
                                          })
                                ]
                            })
                        ]
                    }),
                    (0, s.jsx)(R, {
                        quest: m,
                        errorHints: y,
                        warningHints: k,
                        isDarkTheme: Z
                    })
                ]
            })
        ]
    });
}
