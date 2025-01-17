var o = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    i = n(642128),
    l = n(481060),
    c = n(617136),
    d = n(915750),
    u = n(497505),
    p = n(918701),
    m = n(685613),
    x = n(64141),
    g = n(341907),
    h = n(303385),
    f = n(388032),
    v = n(626094);
t.Z = (e) => {
    let { quest: t, expansionSpring: n, onCtxMenuSelect: s, onCtxMenuOpen: C, onCtxMenuClose: j, useReducedMotion: _, isExpanded: T, isExpansionAnimationComplete: E } = e,
        S = (0, d.aM)(),
        b = r.useCallback(() => {
            (0, g.openDisclosureModal)(t, {
                content: u.jn.QUEST_BAR_V2,
                ctaContent: c.jZ.OPEN_DISCLOSURE
            });
        }, [t]),
        N = r.useCallback(() => {
            (0, p.FE)(t, {
                content: u.jn.QUEST_BAR_V2,
                ctaContent: c.jZ.OPEN_GAME_LINK,
                impressionId: S
            });
        }, [S, t]),
        B = T && E,
        y = (0, o.jsx)(l.Clickable, {
            onClick: N,
            className: a()(v.clickable, { [v.logo]: B }),
            children: (0, o.jsx)(m.ZP, {
                quest: t,
                logotypeClassName: a()(v.rewardHighlightLogotype),
                withGameTile: !1
            })
        });
    return (0, o.jsxs)(i.animated.div, {
        className: a()(v.wrapper, v.rewardHighlightWrapper, { [v.interactable]: B }),
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
            (0, o.jsx)(i.animated.div, {
                className: v.opaqueExpandedBackground,
                style: {
                    opacity: n.to({
                        range: [0, 1],
                        output: [0, 1]
                    }),
                    backdropFilter: n.to([0, 1], [0, 1]).to((e) => 'blur('.concat(10 * e, 'px) brightness(').concat(1 - e / 4, ')'))
                }
            }),
            (0, o.jsx)(h.Z, {
                quest: t,
                expansionSpring: n,
                isFullyExpanded: B,
                partnerBranding: y,
                useReducedMotion: _
            }),
            (0, o.jsxs)(i.animated.div, {
                className: v.promotedBadgeWrapper,
                style: {
                    opacity: n.to({
                        range: [0, 1],
                        output: [0, 1]
                    })
                },
                children: [
                    (0, o.jsxs)(l.Clickable, {
                        className: v.promotedBadge,
                        onClick: b,
                        children: [
                            (0, o.jsx)(l.Text, {
                                color: 'always-white',
                                variant: 'text-xs/normal',
                                children: f.intl.string(f.t.o6FLcH)
                            }),
                            (0, o.jsx)(l.CircleQuestionIcon, {
                                color: l.tokens.colors.WHITE,
                                className: v.promotedBadgeIcon
                            })
                        ]
                    }),
                    (0, o.jsx)(x.r, {
                        onOpen: C,
                        onClose: j,
                        onSelect: s,
                        questContent: u.jn.QUEST_BAR_V2,
                        quest: t,
                        shouldShowDisclosure: !0,
                        showShareLink: !0,
                        children: (e) =>
                            (0, o.jsx)(l.Clickable, {
                                ...e,
                                className: v.submenuWrapper,
                                'aria-label': f.intl.string(f.t.DEoVWV),
                                children: (0, o.jsx)(l.MoreHorizontalIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: a()(v.submenuIcon, v.white)
                                })
                            })
                    })
                ]
            })
        ]
    });
};
