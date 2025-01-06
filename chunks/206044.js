n(47120);
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    o = n(752877),
    a = n(722770),
    u = n(442837),
    c = n(846519),
    d = n(481060),
    m = n(393238),
    x = n(607070),
    h = n(70097),
    C = n(572004),
    p = n(617136),
    g = n(113434),
    E = n(497505),
    j = n(918701),
    T = n(475595),
    f = n(566078),
    v = n(685613),
    S = n(611855),
    N = n(644646),
    q = n(64141),
    _ = n(87894),
    A = n(46140),
    R = n(231338),
    b = n(388032),
    I = n(747028);
let M = (0, o.animated)(d.ChevronSmallDownIcon),
    L = (0, o.animated)(h.Z),
    Z = (e) => {
        let { quest: t, location: n, questContentPosition: l, ...r } = e,
            [o, a] = s.useState(!1),
            u = s.useRef(new c.V7());
        s.useEffect(() => {
            let e = u.current;
            return function () {
                e.stop();
            };
        }, []);
        let m = () => {
            (0, p._3)({
                questId: t.id,
                questContent: n,
                questContentCTA: p.jZ.COPY_QUEST_URL,
                questContentPosition: l
            }),
                (0, C.JG)((0, j.Rs)(t.id)),
                a(!0),
                u.current.start(1000, () => a(!1));
        };
        return (0, i.jsx)(d.Tooltip, {
            forceOpen: o,
            shouldShow: o,
            color: d.Tooltip.Colors.GREEN,
            text: b.intl.string(b.t.MSaeTU),
            children: () =>
                (0, i.jsx)(d.Button, {
                    ...r,
                    className: I.shareButton,
                    color: d.Button.Colors.PRIMARY,
                    size: d.Button.Sizes.SMALL,
                    onClick: m,
                    children: b.intl.string(b.t['5Z6rz8'])
                })
        });
    };
t.Z = (e) => {
    var t, n;
    let { isFocused: l, isQuestExpired: c, quest: h, location: C, size: j, expansionSpring: y, isAnimating: P, isExpanded: B, isInConcurrentQuestExperiment: D, contentPosition: w, toggleExpanded: U } = e,
        { ref: O, height: Q } = (0, m.Z)(),
        { ref: k, width: H, scrollWidth: W } = (0, m.Z)(),
        G = (0, u.e7)([x.Z], () => x.Z.useReducedMotion),
        z = s.useMemo(() => (0, T.fh)(h, T.eC.HERO), [h]),
        F = s.useRef(null),
        V = (0, _.uq)(C),
        X = C === E.jn.QUESTS_EMBED,
        Y = (0, g.t5)(h, A.dr.QUESTS_CARD, C),
        K = (null === (t = h.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        J = (0, g.B6)(h.config.expiresAt, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }),
        $ = (0, g.B6)(f.r.build(h.config).rewardsExpireAt, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }),
        ee = s.useMemo(() => null != h.config.cosponsorMetadata, [h]),
        et = (e) => {
            e.stopPropagation(),
                e.currentTarget.blur(),
                U(),
                (0, p._3)({
                    questId: h.id,
                    questContent: C,
                    questContentCTA: B ? p.jZ.COLLAPSE : p.jZ.EXPAND,
                    questContentPosition: w
                });
        };
    s.useEffect(() => {
        z.isAnimated && null != F.current && (l ? F.current.play() : !l && (F.current.pause(), (F.current.currentTime = 0)));
    }, [l, z]);
    let en = (0, i.jsx)(v.ZP, {
        className: I.partnerBranding,
        logotypeClassName: ee ? I.partnerBrandingLogotypes : void 0,
        gameTileSize: v.fF.MEDIUM,
        quest: h,
        separatorSpacing: v.US.MEDIUM,
        theme: R.BR.DARK,
        withGameTile: !X || null == h.config.cosponsorMetadata
    });
    return (0, i.jsxs)('div', {
        className: r()(I.outerContainer, {
            [I.outerContainerGiftInventory]: V,
            [I.outerContainerEmbed]: X,
            [I.outerContainerXs]: 'xs' === j
        }),
        'aria-label': b.intl.string(b.t.dcl9MT),
        style: { height: V ? Q : void 0 },
        children: [
            (0, i.jsx)(L, {
                style: {
                    opacity: y.to({
                        range: [0, 1],
                        output: [0.25, 1]
                    })
                },
                autoPlay: !1,
                loop: !1,
                muted: !0,
                playsInline: !0,
                className: I.questSplash,
                controls: !1,
                poster: z.url,
                ref: F,
                children:
                    !G &&
                    z.isAnimated &&
                    (0, i.jsx)('source', {
                        src: z.url,
                        type: null !== (n = z.mimetype) && void 0 !== n ? n : void 0
                    })
            }),
            (0, i.jsxs)('div', {
                className: I.header,
                'aria-expanded': B,
                children: [
                    (0, i.jsxs)(o.animated.div, {
                        className: r()(I.headerContent, { [I.headerContentEmbed]: X }),
                        style: {
                            y: V
                                ? y.to({
                                      range: [0, 1],
                                      output: [_.DJ, 0]
                                  })
                                : void 0
                        },
                        children: [
                            V &&
                                (0, i.jsx)(o.animated.div, {
                                    className: I.headerCollapsedContent,
                                    style: {
                                        opacity: y.to({
                                            range: [0, 1],
                                            output: [1, 0]
                                        }),
                                        visibility: P || !B ? 'inherit' : 'hidden'
                                    },
                                    'aria-hidden': !P && B,
                                    children: (0, i.jsxs)(d.ClickableContainer, {
                                        'aria-label': b.intl.string(b.t.dcl9MT),
                                        onClick: et,
                                        className: I.headerCollapsedClickableContainer,
                                        children: [
                                            (0, i.jsx)('div', {
                                                className: I.headerCollapsedContentRewardWrapper,
                                                children: (0, i.jsx)(N.Z, {
                                                    quest: h,
                                                    questContent: C,
                                                    className: I.headerCollapsedRewardTile,
                                                    location: A.dr.QUESTS_CARD
                                                })
                                            }),
                                            (0, i.jsxs)('div', {
                                                className: I.headerCollapsedContentCopyWrapper,
                                                children: [
                                                    (0, i.jsxs)('div', {
                                                        className: I.headerCollapsedContentCopyLogos,
                                                        children: [en, (0, i.jsx)(S.Z, { color: 'always-white' })]
                                                    }),
                                                    (0, i.jsx)(d.Text, {
                                                        variant: 'text-xs/medium',
                                                        children: Y
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                            (0, i.jsxs)(o.animated.div, {
                                ref: (e) => {
                                    O.current = e;
                                },
                                className: r()(I.headerExpandedContent, {
                                    [I.outerContainerGiftInventory]: V,
                                    [I.outerContainerEmbed]: X
                                }),
                                style: {
                                    opacity: y.to({
                                        range: [0, 1],
                                        output: [0, 1]
                                    }),
                                    visibility: P || B ? 'inherit' : 'hidden'
                                },
                                'aria-hidden': !P && !B,
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: I.headerExpandedWrapper,
                                        children: [
                                            (0, i.jsxs)('div', {
                                                className: I.iconLogotypeContainer,
                                                children: [en, X ? null : (0, i.jsx)(S.Z, { color: 'always-white' })]
                                            }),
                                            (0, i.jsxs)('div', {
                                                className: I.questInfo,
                                                children: [
                                                    (0, i.jsx)(d.Tooltip, {
                                                        text: h.config.messages.questName,
                                                        shouldShow: null != H && null != W && H < W,
                                                        children: (e) =>
                                                            (0, i.jsx)(d.Heading, {
                                                                ref: k,
                                                                variant: 'lg' === j ? 'heading-xxl/bold' : 'sm' === j ? 'heading-xl/bold' : 'heading-lg/bold',
                                                                className: I.heading,
                                                                color: 'always-white',
                                                                ...e,
                                                                children: b.intl.format(b.t.EAYZAg, { questName: h.config.messages.questName })
                                                            })
                                                    }),
                                                    (0, i.jsx)(d.Text, {
                                                        variant: 'text-xs/normal',
                                                        color: 'always-white',
                                                        children: K ? b.intl.formatToPlainString(b.t.APddvL, { expirationDate: $ }) : c ? b.intl.formatToPlainString(b.t.v7xMw8, { expirationDate: J }) : b.intl.formatToPlainString(b.t['pX+fmp'], { expirationDate: J })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    !c &&
                                        V &&
                                        (0, i.jsx)(Z, {
                                            quest: h,
                                            location: C,
                                            questContentPosition: w
                                        })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsxs)(o.animated.div, {
                        className: I.iconsContainer,
                        style: {
                            top: V
                                ? y.to({
                                      range: [0, 1],
                                      output: [_.DJ / 2 - _.Z$ / 2, _.jc]
                                  })
                                : _.jc
                        },
                        children: [
                            (0, i.jsx)(q.r, {
                                questContent: C,
                                quest: h,
                                questContentPosition: w,
                                shouldShowDisclosure: !0,
                                hideLearnMore: V,
                                showShareLink: !c && X,
                                children: (e) =>
                                    (0, i.jsx)(o.animated.div, {
                                        style: {
                                            opacity: y,
                                            visibility: P || B ? 'inherit' : 'hidden'
                                        },
                                        'aria-hidden': !P && !B,
                                        children: (0, i.jsx)(d.Clickable, {
                                            ...e,
                                            className: I.iconWrapper,
                                            'aria-label': b.intl.string(b.t.DEoVWV),
                                            children: (0, i.jsx)(d.MoreHorizontalIcon, {
                                                size: 'md',
                                                color: a.Z.WHITE
                                            })
                                        })
                                    })
                            }),
                            D &&
                                !(0, _.W_)(C) &&
                                (0, i.jsx)(d.Clickable, {
                                    onClick: et,
                                    className: I.iconWrapper,
                                    'aria-label': B ? b.intl.string(b.t.iTcumZ) : b.intl.string(b.t.dcl9MT),
                                    children: (0, i.jsx)(M, {
                                        style: {
                                            rotate: y.to({
                                                range: [0, 1],
                                                output: [0, 180]
                                            })
                                        },
                                        color: a.Z.WHITE
                                    })
                                })
                        ]
                    })
                ]
            })
        ]
    });
};
