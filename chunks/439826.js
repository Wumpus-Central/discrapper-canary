n.d(t, { Z: () => k }), n(571269), n(298267);
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
    x = n(70097),
    h = n(617136),
    g = n(272008),
    f = n(113434),
    _ = n(497505),
    C = n(918701),
    v = n(475595),
    j = n(720293),
    b = n(623249),
    T = n(685613),
    E = n(78826),
    N = n(670638),
    S = n(341907),
    y = n(642145),
    A = n(981631),
    B = n(388032),
    R = n(487685);
function w(e) {
    var t;
    let { quest: n, errorHints: s, warningHints: a, isDarkTheme: l } = e,
        { ref: c, height: p = 0 } = (0, u.Z)([s]),
        x = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        h = (0, f.z)(n),
        { type: g, hints: _ } = o.useMemo(
            () =>
                x || h
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
            [s, x, h, a]
        ),
        C = 2 !== g,
        v = (0, d.q_F)({
            opacity: C ? 1 : 0,
            height: C ? p : 0,
            config: y.Y
        }),
        j = 0 === g ? d.P4T : d.d3s,
        T = (0, m.Lq)(A.Ilk.RED_345),
        E = 0 === g ? T : l ? d.TVs.colors.TEXT_NORMAL : d.TVs.colors.WHITE;
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsx)(i.animated.div, {
            style: v,
            children: (0, r.jsxs)('div', {
                ref: c,
                className: R.hints,
                children: [
                    (0, r.jsxs)('div', {
                        className: R.hintsContainer,
                        children: [
                            (0, r.jsx)(j, {
                                size: 'xs',
                                color: E
                            }),
                            (0, r.jsx)(d.Text, {
                                variant: 'text-xs/medium',
                                color: l ? 'text-muted' : 'always-white',
                                children: _.at(0)
                            })
                        ]
                    }),
                    0 === g &&
                        (0, r.jsx)(d.zxk, {
                            onClick: () =>
                                (0, b.y)({
                                    questId: n.id,
                                    errorHints: s
                                }),
                            size: d.PhG.MIN,
                            look: d.iLD.LINK,
                            color: d.Ttl.CUSTOM,
                            style: { color: (0, m.Lq)(A.Ilk.BLUE_345) },
                            children: 'See Details'
                        })
                ]
            })
        })
    });
}
function q(e) {
    var t;
    let { asset: n, reducedMotionEnabled: s, visible: i } = e,
        l = o.useRef(null);
    return (
        o.useEffect(() => {
            null != l.current && i && l.current.play();
        }, [i]),
        (0, r.jsx)(x.Z, {
            ref: l,
            autoPlay: !s,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: a()(R.videoOverlay, { [R.videoOverlayVisible]: i }),
            controls: !1,
            children: (0, r.jsx)('source', {
                src: n.url,
                type: null !== (t = n.mimetype) && void 0 !== t ? t : void 0
            })
        })
    );
}
function k(e) {
    var t, n, s, i, u;
    let { quest: m, isHovering: b, errorHints: y, warningHints: k, onCtxMenuClose: P, onCtxMenuOpen: I, onCtxMenuSelect: M } = e,
        O = (0, C.q8)(m),
        W = o.useMemo(() => (0, v.fh)(m, v.eC.HERO), [m]),
        L = (0, p.ZP)(),
        D = ((0, c.wj)(L) ? A.BRd.DARK : A.BRd.LIGHT) === A.BRd.DARK,
        Q = o.useContext(l.S).reducedMotion.enabled,
        Z = (0, f.tP)(m),
        U = (null === (t = m.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
        V = o.useRef(b),
        H = o.useRef(null),
        z = (0, f.B6)(m.config.expiresAt, {
            month: 'numeric',
            day: 'numeric'
        }),
        F = (null === (n = m.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
        G = (null === (s = m.userStatus) || void 0 === s ? void 0 : s.completedAt) != null,
        K = o.useCallback(() => {
            O &&
                ((0, C.zi)(m) ||
                    F ||
                    (0, g.AH)(m.id, {
                        questContent: _.jn.QUEST_HOME_DESKTOP,
                        questContentCTA: h.jZ.ACCEPT_QUEST
                    }),
                (0, S.openVideoQuestModal)(m));
        }, [O, m, F]);
    o.useEffect(() => {
        if (W.isAnimated && null != H.current)
            return (
                V.current !== b && (b && !Q ? H.current.play() : (H.current.pause(), (H.current.currentTime = 0))),
                (V.current = b),
                () => {
                    var e;
                    null === (e = H.current) || void 0 === e || e.pause();
                }
            );
    }, [b, W, Q]);
    let Y = o.useMemo(() => (0, j.z)(j.i.QUEST_HOME_VIDEO, m), [m]);
    return (0, r.jsxs)('div', {
        className: R.container,
        children: [
            (0, r.jsxs)('div', {
                className: R.heroAssetWrapper,
                children: [
                    W.isAnimated
                        ? (0, r.jsx)(E.Fl, {
                              id: 'QuestTileBanner_heroAnimated',
                              children: (e) => {
                                  var t;
                                  return (
                                      null != e.current && (H.current = e.current),
                                      (0, r.jsx)(x.Z, {
                                          ref: e,
                                          autoPlay: !Q && b,
                                          loop: !0,
                                          muted: !0,
                                          playsInline: !0,
                                          className: R.heroAsset,
                                          controls: !1,
                                          children: (0, r.jsx)('source', {
                                              src: W.url,
                                              type: null !== (t = W.mimetype) && void 0 !== t ? t : void 0
                                          })
                                      })
                                  );
                              }
                          })
                        : (0, r.jsx)(E.Fl, {
                              id: 'QuestTileBanner',
                              children: (e) =>
                                  (0, r.jsx)('img', {
                                      ref: e,
                                      alt: ''.concat(m.config.messages.questName),
                                      className: R.heroAsset,
                                      src: W.url
                                  })
                          }),
                    O &&
                        !Q &&
                        null != Y &&
                        (0, r.jsx)(q, {
                            asset: Y,
                            reducedMotionEnabled: Q,
                            visible: b
                        })
                ]
            }),
            (0, r.jsx)('div', {
                className: a()(R.overlay, {
                    [R.darkThemeGradient]: D,
                    [R.lightThemeGradient]: !D
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
                                    m.preview &&
                                        (0, r.jsx)('div', {
                                            className: R.pill,
                                            children: (0, r.jsx)(d.Text, {
                                                variant: 'eyebrow',
                                                color: 'always-white',
                                                className: R.eyebrowText,
                                                children: B.intl.string(B.t.SKNnqq)
                                            })
                                        }),
                                    O &&
                                        (0, r.jsx)(d.ua7, {
                                            text: G ? B.intl.string(B.t.YsCuyM) : F ? B.intl.string(B.t['74Kqra']) : (0, C.zi)(m) ? B.intl.string(B.t['I6JG4+']) : B.intl.string(B.t.umdNio),
                                            children: (e) =>
                                                (0, r.jsx)(d.P3F, {
                                                    ...e,
                                                    className: R.utilButtonWrapper,
                                                    'aria-label': B.intl.string(B.t.RscU7O),
                                                    onClick: K,
                                                    children: (0, r.jsx)(d.o1U, {
                                                        color: 'currentColor',
                                                        className: R.utilButtonIcon
                                                    })
                                                })
                                        }),
                                    (0, r.jsx)(N.r, {
                                        onOpen: I,
                                        onClose: P,
                                        onSelect: M,
                                        questContent: _.jn.QUEST_HOME_DESKTOP,
                                        quest: m,
                                        hideLearnMore: !0,
                                        shouldShowDisclosure: !0,
                                        showShareLink: !0,
                                        children: (e) =>
                                            (0, r.jsx)(d.P3F, {
                                                ...e,
                                                className: R.utilButtonWrapper,
                                                'aria-label': B.intl.string(B.t.DEoVWV),
                                                children: (0, r.jsx)(d.xhG, {
                                                    size: 'md',
                                                    color: 'currentColor',
                                                    className: a()(R.utilButtonIcon)
                                                })
                                            })
                                    })
                                ]
                            }),
                            (0, r.jsx)(T.ZP, {
                                className: R.partnerBranding,
                                logotypeClassName: R.partnerLogotypes,
                                quest: m,
                                separatorSpacing: T.US.MEDIUM,
                                withGameTile: !1
                            }),
                            (0, r.jsxs)('div', {
                                className: R.bottomRow,
                                children: [
                                    (0, r.jsx)(d.Text, {
                                        variant: 'text-sm/medium',
                                        color: D ? 'text-muted' : 'always-white',
                                        children: B.intl.format(B.t.buEvBw, { brandName: null !== (u = null === (i = m.config.cosponsorMetadata) || void 0 === i ? void 0 : i.name) && void 0 !== u ? u : m.config.messages.gamePublisher })
                                    }),
                                    Z || U
                                        ? null
                                        : (0, r.jsx)(d.Text, {
                                              variant: 'text-sm/medium',
                                              color: D ? 'text-muted' : 'always-white',
                                              children: B.intl.format(B.t['7D8r4O'], { expiryDate: z })
                                          })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsx)(w, {
                        quest: m,
                        errorHints: y,
                        warningHints: k,
                        isDarkTheme: D
                    })
                ]
            })
        ]
    });
}
