n.d(t, {
    Z: function () {
        return P;
    }
}),
    n(571269),
    n(298267);
var o,
    r,
    s = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    c = n(666912),
    d = n(186325),
    u = n(780384),
    p = n(481060),
    m = n(393238),
    x = n(410030),
    f = n(44315),
    g = n(70097),
    h = n(617136),
    C = n(272008),
    v = n(113434),
    j = n(497505),
    _ = n(918701),
    b = n(475595),
    N = n(720293),
    E = n(623249),
    B = n(685613),
    T = n(78826),
    S = n(64141),
    y = n(341907),
    A = n(642145),
    R = n(981631),
    w = n(388032),
    I = n(60821);
function k(e) {
    var t;
    let { quest: n, errorHints: o, warningHints: r, isDarkTheme: i } = e,
        { ref: l, height: d = 0 } = (0, m.Z)([o]),
        u = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        x = (0, v.z)(n),
        { type: g, hints: h } = a.useMemo(
            () =>
                u || x
                    ? {
                          type: 2,
                          hints: []
                      }
                    : o.length > 0
                      ? {
                            type: 0,
                            hints: o.map((e) => e.message)
                        }
                      : r.length > 0
                        ? {
                              type: 1,
                              hints: r
                          }
                        : {
                              type: 2,
                              hints: []
                          },
            [o, u, x, r]
        ),
        C = 2 !== g,
        j = (0, p.useSpring)({
            opacity: C ? 1 : 0,
            height: C ? d : 0,
            config: A.Y
        }),
        _ = 0 === g ? p.CircleWarningIcon : p.CircleInformationIcon,
        b = (0, f.Lq)(R.Ilk.RED_345),
        N = 0 === g ? b : i ? p.tokens.colors.TEXT_NORMAL : p.tokens.colors.WHITE;
    return (0, s.jsx)(s.Fragment, {
        children: (0, s.jsx)(c.animated.div, {
            style: j,
            children: (0, s.jsxs)('div', {
                ref: l,
                className: I.hints,
                children: [
                    (0, s.jsxs)('div', {
                        className: I.hintsContainer,
                        children: [
                            (0, s.jsx)(_, {
                                size: 'xs',
                                color: N
                            }),
                            (0, s.jsx)(p.Text, {
                                variant: 'text-xs/medium',
                                color: i ? 'text-muted' : 'always-white',
                                children: h.at(0)
                            })
                        ]
                    }),
                    0 === g &&
                        (0, s.jsx)(p.Button, {
                            onClick: () =>
                                (0, E.openConsoleConnectionErrorsModal)({
                                    questId: n.id,
                                    errorHints: o
                                }),
                            size: p.ButtonSizes.MIN,
                            look: p.ButtonLooks.LINK,
                            color: p.ButtonColors.CUSTOM,
                            style: { color: (0, f.Lq)(R.Ilk.BLUE_345) },
                            children: 'See Details'
                        })
                ]
            })
        })
    });
}
function q(e) {
    var t;
    let { asset: n, reducedMotionEnabled: o, visible: r } = e,
        i = a.useRef(null);
    return (
        a.useEffect(() => {
            null != i.current && r && i.current.play();
        }, [r]),
        (0, s.jsx)(g.Z, {
            ref: i,
            autoPlay: !o,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: l()(I.videoOverlay, { [I.videoOverlayVisible]: r }),
            controls: !1,
            children: (0, s.jsx)('source', {
                src: n.url,
                type: null !== (t = n.mimetype) && void 0 !== t ? t : void 0
            })
        })
    );
}
function P(e) {
    var t, n, o, r, i;
    let { quest: c, isHovering: m, errorHints: f, warningHints: E, onCtxMenuClose: A, onCtxMenuOpen: P, onCtxMenuSelect: M } = e,
        O = (0, _.q8)(c),
        L = a.useMemo(() => (0, b.fh)(c, b.eC.HERO), [c]),
        W = (0, x.ZP)(),
        Z = ((0, u.wj)(W) ? R.BRd.DARK : R.BRd.LIGHT) === R.BRd.DARK,
        Q = a.useContext(d.S).reducedMotion.enabled,
        D = (0, v.tP)(c),
        H = (null === (t = c.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
        V = a.useRef(m),
        U = a.useRef(null),
        z = (0, v.B6)(c.config.expiresAt, {
            month: 'numeric',
            day: 'numeric'
        }),
        F = (null === (n = c.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
        G = (null === (o = c.userStatus) || void 0 === o ? void 0 : o.completedAt) != null,
        K = a.useCallback(() => {
            if (!!O)
                !(0, _.zi)(c) &&
                    !F &&
                    (0, C.AH)(c.id, {
                        questContent: j.jn.QUEST_HOME_DESKTOP,
                        questContentCTA: h.jZ.ACCEPT_QUEST
                    }),
                    (0, y.openVideoQuestModal)(c);
        }, [O, c, F]);
    a.useEffect(() => {
        if (L.isAnimated && null != U.current)
            return (
                V.current !== m && (m && !Q ? U.current.play() : (U.current.pause(), (U.current.currentTime = 0))),
                (V.current = m),
                () => {
                    var e;
                    null === (e = U.current) || void 0 === e || e.pause();
                }
            );
    }, [m, L, Q]);
    let Y = a.useMemo(() => (0, N.z)(N.i.QUEST_HOME_VIDEO, c), [c]);
    return (0, s.jsxs)('div', {
        className: I.container,
        children: [
            (0, s.jsxs)('div', {
                className: I.heroAssetWrapper,
                children: [
                    L.isAnimated
                        ? (0, s.jsx)(T.Fl, {
                              id: 'QuestTileBanner_heroAnimated',
                              children: (e) => {
                                  var t;
                                  return (
                                      null != e.current && (U.current = e.current),
                                      (0, s.jsx)(g.Z, {
                                          ref: e,
                                          autoPlay: !Q && m,
                                          loop: !0,
                                          muted: !0,
                                          playsInline: !0,
                                          className: I.heroAsset,
                                          controls: !1,
                                          children: (0, s.jsx)('source', {
                                              src: L.url,
                                              type: null !== (t = L.mimetype) && void 0 !== t ? t : void 0
                                          })
                                      })
                                  );
                              }
                          })
                        : (0, s.jsx)(T.Fl, {
                              id: 'QuestTileBanner',
                              children: (e) =>
                                  (0, s.jsx)('img', {
                                      ref: e,
                                      alt: ''.concat(c.config.messages.questName),
                                      className: I.heroAsset,
                                      src: L.url
                                  })
                          }),
                    O &&
                        !Q &&
                        null != Y &&
                        (0, s.jsx)(q, {
                            asset: Y,
                            reducedMotionEnabled: Q,
                            visible: m
                        })
                ]
            }),
            (0, s.jsx)('div', {
                className: l()(I.overlay, {
                    [I.darkThemeGradient]: Z,
                    [I.lightThemeGradient]: !Z
                })
            }),
            (0, s.jsxs)('div', {
                className: I.positionContentOverBackground,
                children: [
                    (0, s.jsxs)('div', {
                        className: I.contents,
                        children: [
                            (0, s.jsxs)('div', {
                                className: I.topRow,
                                children: [
                                    c.preview &&
                                        (0, s.jsx)('div', {
                                            className: I.pill,
                                            children: (0, s.jsx)(p.Text, {
                                                variant: 'eyebrow',
                                                color: 'always-white',
                                                className: I.eyebrowText,
                                                children: w.intl.string(w.t.SKNnqq)
                                            })
                                        }),
                                    O &&
                                        (0, s.jsx)(p.Tooltip, {
                                            text: G ? w.intl.string(w.t.YsCuyM) : F ? w.intl.string(w.t['74Kqra']) : (0, _.zi)(c) ? w.intl.string(w.t['I6JG4+']) : w.intl.string(w.t.umdNio),
                                            children: (e) =>
                                                (0, s.jsx)(p.Clickable, {
                                                    ...e,
                                                    className: I.utilButtonWrapper,
                                                    'aria-label': w.intl.string(w.t.RscU7O),
                                                    onClick: K,
                                                    children: (0, s.jsx)(p.PlayIcon, { className: I.utilButtonIcon })
                                                })
                                        }),
                                    (0, s.jsx)(S.r, {
                                        onOpen: P,
                                        onClose: A,
                                        onSelect: M,
                                        questContent: j.jn.QUEST_HOME_DESKTOP,
                                        quest: c,
                                        hideLearnMore: !0,
                                        shouldShowDisclosure: !0,
                                        showShareLink: !0,
                                        children: (e) =>
                                            (0, s.jsx)(p.Clickable, {
                                                ...e,
                                                className: I.utilButtonWrapper,
                                                'aria-label': w.intl.string(w.t.DEoVWV),
                                                children: (0, s.jsx)(p.MoreHorizontalIcon, {
                                                    size: 'md',
                                                    color: 'currentColor',
                                                    className: l()(I.utilButtonIcon)
                                                })
                                            })
                                    })
                                ]
                            }),
                            (0, s.jsx)(B.ZP, {
                                className: I.partnerBranding,
                                logotypeClassName: I.partnerLogotypes,
                                quest: c,
                                separatorSpacing: B.US.MEDIUM,
                                withGameTile: !1
                            }),
                            (0, s.jsxs)('div', {
                                className: I.bottomRow,
                                children: [
                                    (0, s.jsx)(p.Text, {
                                        variant: 'text-sm/medium',
                                        color: Z ? 'text-muted' : 'always-white',
                                        children: w.intl.format(w.t.buEvBw, { brandName: null !== (i = null === (r = c.config.cosponsorMetadata) || void 0 === r ? void 0 : r.name) && void 0 !== i ? i : c.config.messages.gamePublisher })
                                    }),
                                    D || H
                                        ? null
                                        : (0, s.jsx)(p.Text, {
                                              variant: 'text-sm/medium',
                                              color: Z ? 'text-muted' : 'always-white',
                                              children: w.intl.format(w.t['7D8r4O'], { expiryDate: z })
                                          })
                                ]
                            })
                        ]
                    }),
                    (0, s.jsx)(k, {
                        quest: c,
                        errorHints: f,
                        warningHints: E,
                        isDarkTheme: Z
                    })
                ]
            })
        ]
    });
}
((r = o || (o = {}))[(r.ERROR = 0)] = 'ERROR'), (r[(r.WARNING = 1)] = 'WARNING'), (r[(r.NONE = 2)] = 'NONE');
