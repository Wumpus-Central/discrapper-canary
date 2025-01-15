n.d(t, {
    Z: function () {
        return O;
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
    c = n(476183),
    d = n(186325),
    u = n(780384),
    p = n(481060),
    m = n(393238),
    x = n(410030),
    g = n(44315),
    h = n(70097),
    f = n(617136),
    v = n(272008),
    C = n(113434),
    j = n(497505),
    _ = n(918701),
    T = n(475595),
    E = n(720293),
    S = n(623249),
    b = n(685613),
    N = n(78826),
    B = n(64141),
    y = n(341907),
    A = n(642145),
    w = n(981631),
    R = n(388032),
    I = n(60821);
function P(e) {
    var t;
    let { quest: n, errorHints: o, warningHints: r, isDarkTheme: i } = e,
        { ref: l, height: d = 0 } = (0, m.Z)([o]),
        u = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        x = (0, C.z)(n),
        { type: h, hints: f } = a.useMemo(
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
        v = 2 !== h,
        j = (0, p.useSpring)({
            opacity: v ? 1 : 0,
            height: v ? d : 0,
            config: A.Y
        }),
        _ = 0 === h ? p.CircleWarningIcon : p.CircleInformationIcon,
        T = (0, g.Lq)(w.Ilk.RED_345),
        E = 0 === h ? T : i ? p.tokens.colors.TEXT_NORMAL : p.tokens.colors.WHITE;
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
                                color: E
                            }),
                            (0, s.jsx)(p.Text, {
                                variant: 'text-xs/medium',
                                color: i ? 'text-muted' : 'always-white',
                                children: f.at(0)
                            })
                        ]
                    }),
                    0 === h &&
                        (0, s.jsx)(p.Button, {
                            onClick: () =>
                                (0, S.openConsoleConnectionErrorsModal)({
                                    questId: n.id,
                                    errorHints: o
                                }),
                            size: p.ButtonSizes.MIN,
                            look: p.ButtonLooks.LINK,
                            color: p.ButtonColors.CUSTOM,
                            style: { color: (0, g.Lq)(w.Ilk.BLUE_345) },
                            children: 'See Details'
                        })
                ]
            })
        })
    });
}
function k(e) {
    var t;
    let { asset: n, reducedMotionEnabled: o, visible: r } = e,
        i = a.useRef(null);
    return (
        a.useEffect(() => {
            null != i.current && r && i.current.play();
        }, [r]),
        (0, s.jsx)(h.Z, {
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
function O(e) {
    var t, n, o, r, i;
    let { quest: c, isHovering: m, errorHints: g, warningHints: S, onCtxMenuClose: A, onCtxMenuOpen: O, onCtxMenuSelect: q } = e,
        M = (0, _.q8)(c),
        L = a.useMemo(() => (0, T.fh)(c, T.eC.HERO), [c]),
        D = (0, x.ZP)(),
        Z = ((0, u.wj)(D) ? w.BRd.DARK : w.BRd.LIGHT) === w.BRd.DARK,
        V = a.useContext(d.S).reducedMotion.enabled,
        W = (0, C.tP)(c),
        H = (null === (t = c.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
        Q = a.useRef(m),
        U = a.useRef(null),
        F = (0, C.B6)(c.config.expiresAt, {
            month: 'numeric',
            day: 'numeric'
        }),
        K = (null === (n = c.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
        z = (null === (o = c.userStatus) || void 0 === o ? void 0 : o.completedAt) != null,
        Y = a.useCallback(() => {
            if (!!M)
                !(0, _.zi)(c) &&
                    !K &&
                    (0, v.AH)(c.id, {
                        questContent: j.jn.QUEST_HOME_DESKTOP,
                        questContentCTA: f.jZ.ACCEPT_QUEST
                    }),
                    (0, y.openVideoQuestModal)(c);
        }, [M, c, K]);
    a.useEffect(() => {
        if (L.isAnimated && null != U.current)
            return (
                Q.current !== m && (m && !V ? U.current.play() : (U.current.pause(), (U.current.currentTime = 0))),
                (Q.current = m),
                () => {
                    var e;
                    null === (e = U.current) || void 0 === e || e.pause();
                }
            );
    }, [m, L, V]);
    let G = a.useMemo(() => (0, E.z)(E.i.QUEST_HOME_VIDEO, c), [c]);
    return (0, s.jsxs)('div', {
        className: I.container,
        children: [
            (0, s.jsxs)('div', {
                className: I.heroAssetWrapper,
                children: [
                    L.isAnimated
                        ? (0, s.jsx)(N.Fl, {
                              id: 'QuestTileBanner_heroAnimated',
                              children: (e) => {
                                  var t;
                                  return (
                                      null != e.current && (U.current = e.current),
                                      (0, s.jsx)(h.Z, {
                                          ref: e,
                                          autoPlay: !V && m,
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
                        : (0, s.jsx)(N.Fl, {
                              id: 'QuestTileBanner',
                              children: (e) =>
                                  (0, s.jsx)('img', {
                                      ref: e,
                                      alt: ''.concat(c.config.messages.questName),
                                      className: I.heroAsset,
                                      src: L.url
                                  })
                          }),
                    M &&
                        !V &&
                        null != G &&
                        (0, s.jsx)(k, {
                            asset: G,
                            reducedMotionEnabled: V,
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
                                                children: R.intl.string(R.t.SKNnqq)
                                            })
                                        }),
                                    M &&
                                        (0, s.jsx)(p.Tooltip, {
                                            text: z ? R.intl.string(R.t.YsCuyM) : K ? R.intl.string(R.t['74Kqra']) : (0, _.zi)(c) ? R.intl.string(R.t['I6JG4+']) : R.intl.string(R.t.umdNio),
                                            children: (e) =>
                                                (0, s.jsx)(p.Clickable, {
                                                    ...e,
                                                    className: I.utilButtonWrapper,
                                                    'aria-label': R.intl.string(R.t.RscU7O),
                                                    onClick: Y,
                                                    children: (0, s.jsx)(p.PlayIcon, { className: I.utilButtonIcon })
                                                })
                                        }),
                                    (0, s.jsx)(B.r, {
                                        onOpen: O,
                                        onClose: A,
                                        onSelect: q,
                                        questContent: j.jn.QUEST_HOME_DESKTOP,
                                        quest: c,
                                        hideLearnMore: !0,
                                        shouldShowDisclosure: !0,
                                        showShareLink: !0,
                                        children: (e) =>
                                            (0, s.jsx)(p.Clickable, {
                                                ...e,
                                                className: I.utilButtonWrapper,
                                                'aria-label': R.intl.string(R.t.DEoVWV),
                                                children: (0, s.jsx)(p.MoreHorizontalIcon, {
                                                    size: 'md',
                                                    color: 'currentColor',
                                                    className: l()(I.utilButtonIcon)
                                                })
                                            })
                                    })
                                ]
                            }),
                            (0, s.jsx)(b.ZP, {
                                className: I.partnerBranding,
                                logotypeClassName: I.partnerLogotypes,
                                quest: c,
                                separatorSpacing: b.US.MEDIUM,
                                withGameTile: !1
                            }),
                            (0, s.jsxs)('div', {
                                className: I.bottomRow,
                                children: [
                                    (0, s.jsx)(p.Text, {
                                        variant: 'text-sm/medium',
                                        color: Z ? 'text-muted' : 'always-white',
                                        children: R.intl.format(R.t.buEvBw, { brandName: null !== (i = null === (r = c.config.cosponsorMetadata) || void 0 === r ? void 0 : r.name) && void 0 !== i ? i : c.config.messages.gamePublisher })
                                    }),
                                    W || H
                                        ? null
                                        : (0, s.jsx)(p.Text, {
                                              variant: 'text-sm/medium',
                                              color: Z ? 'text-muted' : 'always-white',
                                              children: R.intl.format(R.t['7D8r4O'], { expiryDate: F })
                                          })
                                ]
                            })
                        ]
                    }),
                    (0, s.jsx)(P, {
                        quest: c,
                        errorHints: g,
                        warningHints: S,
                        isDarkTheme: Z
                    })
                ]
            })
        ]
    });
}
((r = o || (o = {}))[(r.ERROR = 0)] = 'ERROR'), (r[(r.WARNING = 1)] = 'WARNING'), (r[(r.NONE = 2)] = 'NONE');
