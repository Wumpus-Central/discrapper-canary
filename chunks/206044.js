n.d(t, { Z: () => L }), n(47120);
var s = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    r = n(642128),
    o = n(722770),
    d = n(442837),
    u = n(846519),
    c = n(481060),
    m = n(393238),
    x = n(607070),
    h = n(70097),
    g = n(572004),
    C = n(617136),
    p = n(113434),
    j = n(497505),
    T = n(918701),
    v = n(475595),
    E = n(566078),
    f = n(685613),
    N = n(611855),
    S = n(644646),
    q = n(670638),
    A = n(87894),
    R = n(46140),
    _ = n(231338),
    b = n(388032),
    Z = n(997925);
let I = (0, r.animated)(c.CJ0),
    M = (0, r.animated)(h.Z),
    y = (e) => {
        let { quest: t, location: n, questContentPosition: l, ...a } = e,
            [r, o] = i.useState(!1),
            d = i.useRef(new u.V7()),
            m = (0, C.O5)();
        i.useEffect(() => {
            let e = d.current;
            return function () {
                e.stop();
            };
        }, []);
        let x = () => {
            m({
                questId: t.id,
                questContent: n,
                questContentCTA: C.jZ.COPY_QUEST_URL,
                questContentPosition: l
            }),
                (0, g.JG)((0, T.Rs)(t.id)),
                o(!0),
                d.current.start(1000, () => o(!1));
        };
        return (0, s.jsx)(c.ua7, {
            forceOpen: r,
            shouldShow: r,
            color: c.ua7.Colors.GREEN,
            text: b.intl.string(b.t.MSaeTU),
            children: () =>
                (0, s.jsx)(c.zxk, {
                    ...a,
                    className: Z.shareButton,
                    color: c.zxk.Colors.PRIMARY,
                    size: c.zxk.Sizes.SMALL,
                    onClick: x,
                    children: b.intl.string(b.t['5Z6rz8'])
                })
        });
    },
    L = (e) => {
        var t, n;
        let { isFocused: l, isQuestExpired: u, quest: h, location: g, size: T, expansionSpring: L, isAnimating: P, isExpanded: w, isInConcurrentQuestExperiment: D, contentPosition: k, toggleExpanded: U } = e,
            { ref: O, height: B } = (0, m.Z)(),
            { ref: Q, width: z, scrollWidth: W } = (0, m.Z)(),
            F = (0, d.e7)([x.Z], () => x.Z.useReducedMotion),
            G = i.useMemo(() => (0, v.fh)(h, v.eC.HERO), [h]),
            H = i.useRef(null),
            V = (0, A.uq)(g),
            X = g === j.jn.QUESTS_EMBED,
            Y = (0, p.t5)(h, R.dr.QUESTS_CARD, g),
            K = (null === (t = h.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
            J = (0, C.O5)(),
            $ = (0, p.B6)(h.config.expiresAt, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }),
            ee = (0, p.B6)(E.r.build(h.config).rewardsExpireAt, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }),
            et = i.useMemo(() => null != h.config.cosponsorMetadata, [h]),
            en = (e) => {
                e.stopPropagation(),
                    e.currentTarget.blur(),
                    U(),
                    J({
                        questId: h.id,
                        questContent: g,
                        questContentCTA: w ? C.jZ.COLLAPSE : C.jZ.EXPAND,
                        questContentPosition: k
                    });
            };
        i.useEffect(() => {
            G.isAnimated && null != H.current && (l ? H.current.play() : l || (H.current.pause(), (H.current.currentTime = 0)));
        }, [l, G]);
        let es = (0, s.jsx)(f.ZP, {
            className: Z.partnerBranding,
            logotypeClassName: et ? Z.partnerBrandingLogotypes : void 0,
            gameTileSize: f.fF.MEDIUM,
            quest: h,
            separatorSpacing: f.US.MEDIUM,
            theme: _.BR.DARK,
            withGameTile: !X || null == h.config.cosponsorMetadata
        });
        return (0, s.jsxs)('div', {
            className: a()(Z.outerContainer, {
                [Z.outerContainerGiftInventory]: V,
                [Z.outerContainerEmbed]: X,
                [Z.outerContainerXs]: 'xs' === T
            }),
            'aria-label': b.intl.string(b.t.dcl9MT),
            style: { height: V ? B : void 0 },
            children: [
                (0, s.jsx)(M, {
                    style: {
                        opacity: L.to({
                            range: [0, 1],
                            output: [0.25, 1]
                        })
                    },
                    autoPlay: !1,
                    loop: !1,
                    muted: !0,
                    playsInline: !0,
                    className: Z.questSplash,
                    controls: !1,
                    poster: G.url,
                    ref: H,
                    children:
                        !F &&
                        G.isAnimated &&
                        (0, s.jsx)('source', {
                            src: G.url,
                            type: null !== (n = G.mimetype) && void 0 !== n ? n : void 0
                        })
                }),
                (0, s.jsxs)('div', {
                    className: Z.header,
                    'aria-expanded': w,
                    children: [
                        (0, s.jsxs)(r.animated.div, {
                            className: a()(Z.headerContent, { [Z.headerContentEmbed]: X }),
                            style: {
                                y: V
                                    ? L.to({
                                          range: [0, 1],
                                          output: [A.DJ, 0]
                                      })
                                    : void 0
                            },
                            children: [
                                V &&
                                    (0, s.jsx)(r.animated.div, {
                                        className: Z.headerCollapsedContent,
                                        style: {
                                            opacity: L.to({
                                                range: [0, 1],
                                                output: [1, 0]
                                            }),
                                            visibility: P || !w ? 'inherit' : 'hidden'
                                        },
                                        'aria-hidden': !P && w,
                                        children: (0, s.jsxs)(c.kL8, {
                                            'aria-label': b.intl.string(b.t.dcl9MT),
                                            onClick: en,
                                            className: Z.headerCollapsedClickableContainer,
                                            children: [
                                                (0, s.jsx)('div', {
                                                    className: Z.headerCollapsedContentRewardWrapper,
                                                    children: (0, s.jsx)(S.Z, {
                                                        quest: h,
                                                        questContent: g,
                                                        className: Z.headerCollapsedRewardTile,
                                                        location: R.dr.QUESTS_CARD
                                                    })
                                                }),
                                                (0, s.jsxs)('div', {
                                                    className: Z.headerCollapsedContentCopyWrapper,
                                                    children: [
                                                        (0, s.jsxs)('div', {
                                                            className: Z.headerCollapsedContentCopyLogos,
                                                            children: [es, (0, s.jsx)(N.Z, { color: 'always-white' })]
                                                        }),
                                                        (0, s.jsx)(c.Text, {
                                                            variant: 'text-xs/medium',
                                                            children: Y
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                (0, s.jsxs)(r.animated.div, {
                                    ref: (e) => {
                                        O.current = e;
                                    },
                                    className: a()(Z.headerExpandedContent, {
                                        [Z.outerContainerGiftInventory]: V,
                                        [Z.outerContainerEmbed]: X
                                    }),
                                    style: {
                                        opacity: L.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        }),
                                        visibility: P || w ? 'inherit' : 'hidden'
                                    },
                                    'aria-hidden': !P && !w,
                                    children: [
                                        (0, s.jsxs)('div', {
                                            className: Z.headerExpandedWrapper,
                                            children: [
                                                (0, s.jsxs)('div', {
                                                    className: Z.iconLogotypeContainer,
                                                    children: [es, X ? null : (0, s.jsx)(N.Z, { color: 'always-white' })]
                                                }),
                                                (0, s.jsxs)('div', {
                                                    className: Z.questInfo,
                                                    children: [
                                                        (0, s.jsx)(c.ua7, {
                                                            text: h.config.messages.questName,
                                                            shouldShow: null != z && null != W && z < W,
                                                            children: (e) =>
                                                                (0, s.jsx)(c.X6q, {
                                                                    ref: Q,
                                                                    variant: 'lg' === T ? 'heading-xxl/bold' : 'sm' === T ? 'heading-xl/bold' : 'heading-lg/bold',
                                                                    className: Z.heading,
                                                                    color: 'always-white',
                                                                    ...e,
                                                                    children: b.intl.format(b.t.EAYZAg, { questName: h.config.messages.questName })
                                                                })
                                                        }),
                                                        (0, s.jsx)(c.Text, {
                                                            variant: 'text-xs/normal',
                                                            color: 'always-white',
                                                            children: K ? b.intl.formatToPlainString(b.t.APddvL, { expirationDate: ee }) : u ? b.intl.formatToPlainString(b.t.v7xMw8, { expirationDate: $ }) : b.intl.formatToPlainString(b.t['pX+fmp'], { expirationDate: $ })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        !u &&
                                            V &&
                                            (0, s.jsx)(y, {
                                                quest: h,
                                                location: g,
                                                questContentPosition: k
                                            })
                                    ]
                                })
                            ]
                        }),
                        (0, s.jsxs)(r.animated.div, {
                            className: Z.iconsContainer,
                            style: {
                                top: V
                                    ? L.to({
                                          range: [0, 1],
                                          output: [A.DJ / 2 - A.Z$ / 2, A.jc]
                                      })
                                    : A.jc
                            },
                            children: [
                                (0, s.jsx)(q.r, {
                                    questContent: g,
                                    quest: h,
                                    questContentPosition: k,
                                    shouldShowDisclosure: !0,
                                    hideLearnMore: V,
                                    showShareLink: !u && X,
                                    children: (e) =>
                                        (0, s.jsx)(r.animated.div, {
                                            style: {
                                                opacity: L,
                                                visibility: P || w ? 'inherit' : 'hidden'
                                            },
                                            'aria-hidden': !P && !w,
                                            children: (0, s.jsx)(c.P3F, {
                                                ...e,
                                                className: Z.iconWrapper,
                                                'aria-label': b.intl.string(b.t.DEoVWV),
                                                children: (0, s.jsx)(c.xhG, {
                                                    size: 'md',
                                                    color: o.Z.WHITE
                                                })
                                            })
                                        })
                                }),
                                D &&
                                    !(0, A.W_)(g) &&
                                    (0, s.jsx)(c.P3F, {
                                        onClick: en,
                                        className: Z.iconWrapper,
                                        'aria-label': w ? b.intl.string(b.t.iTcumZ) : b.intl.string(b.t.dcl9MT),
                                        children: (0, s.jsx)(I, {
                                            style: {
                                                rotate: L.to({
                                                    range: [0, 1],
                                                    output: [0, 180]
                                                })
                                            },
                                            color: o.Z.WHITE
                                        })
                                    })
                            ]
                        })
                    ]
                })
            ]
        });
    };
