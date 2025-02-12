n.d(t, { Z: () => C });
var r = n(200651),
    o = n(192379),
    s = n(120356),
    a = n.n(s),
    i = n(642128),
    l = n(481060),
    c = n(617136),
    d = n(915750),
    u = n(497505),
    p = n(918701),
    m = n(685613),
    x = n(670638),
    h = n(341907),
    g = n(303385),
    f = n(388032),
    _ = n(145700);
let C = (e) => {
    let { quest: t, expansionSpring: n, onCtxMenuSelect: s, onCtxMenuOpen: C, onCtxMenuClose: v, useReducedMotion: j, isExpanded: b, isExpansionAnimationComplete: T } = e,
        E = (0, d.aM)(),
        N = o.useCallback(() => {
            (0, h.openDisclosureModal)(t, {
                content: u.jn.QUEST_BAR_V2,
                ctaContent: c.jZ.OPEN_DISCLOSURE
            });
        }, [t]),
        S = o.useCallback(() => {
            (0, p.FE)(t, {
                content: u.jn.QUEST_BAR_V2,
                ctaContent: c.jZ.OPEN_GAME_LINK,
                impressionId: E
            });
        }, [E, t]),
        y = b && T,
        A = (0, r.jsx)(l.P3F, {
            onClick: S,
            className: a()(_.clickable, { [_.logo]: y }),
            children: (0, r.jsx)(m.ZP, {
                quest: t,
                logotypeClassName: a()(_.rewardHighlightLogotype),
                withGameTile: !1
            })
        });
    return (0, r.jsxs)(i.animated.div, {
        className: a()(_.wrapper, _.rewardHighlightWrapper, { [_.interactable]: y }),
        style: {
            transform: (0, i.to)(
                [
                    n.to({
                        range: [0, 1],
                        output: [8, 0]
                    })
                ],
                (e) => 'translateY('.concat(e, 'px')
            )
        },
        children: [
            (0, r.jsx)(i.animated.div, {
                className: _.opaqueExpandedBackground,
                style: {
                    opacity: n.to({
                        range: [0, 1],
                        output: [0, 1]
                    }),
                    backdropFilter: n.to([0, 1], [0, 1]).to((e) => 'blur('.concat(10 * e, 'px) brightness(').concat(1 - e / 4, ')'))
                }
            }),
            (0, r.jsx)(g.Z, {
                quest: t,
                expansionSpring: n,
                isFullyExpanded: y,
                partnerBranding: A,
                useReducedMotion: j
            }),
            (0, r.jsxs)(i.animated.div, {
                className: _.promotedBadgeWrapper,
                style: {
                    opacity: n.to({
                        range: [0, 1],
                        output: [0, 1]
                    })
                },
                children: [
                    (0, r.jsxs)(l.P3F, {
                        className: _.promotedBadge,
                        onClick: N,
                        children: [
                            (0, r.jsx)(l.Text, {
                                color: 'always-white',
                                variant: 'text-xs/normal',
                                children: f.intl.string(f.t.o6FLcH)
                            }),
                            (0, r.jsx)(l.idN, {
                                color: l.TVs.colors.WHITE,
                                className: _.promotedBadgeIcon
                            })
                        ]
                    }),
                    (0, r.jsx)(x.r, {
                        onOpen: C,
                        onClose: v,
                        onSelect: s,
                        questContent: u.jn.QUEST_BAR_V2,
                        quest: t,
                        shouldShowDisclosure: !0,
                        showShareLink: !0,
                        children: (e) =>
                            (0, r.jsx)(l.P3F, {
                                ...e,
                                className: _.submenuWrapper,
                                'aria-label': f.intl.string(f.t.DEoVWV),
                                children: (0, r.jsx)(l.xhG, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: a()(_.submenuIcon, _.white)
                                })
                            })
                    })
                ]
            })
        ]
    });
};
