var o = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    i = n(752877),
    l = n(481060),
    c = n(617136),
    d = n(497505),
    u = n(918701),
    p = n(685613),
    m = n(64141),
    x = n(341907),
    g = n(303385),
    f = n(388032),
    h = n(626094);
t.Z = (e) => {
    let { quest: t, expansionSpring: n, onCtxMenuSelect: s, onCtxMenuOpen: C, onCtxMenuClose: v, useReducedMotion: j, isExpanded: _, isExpansionAnimationComplete: b } = e,
        N = r.useCallback(() => {
            (0, x.openDisclosureModal)(t, {
                content: d.jn.QUEST_BAR_V2,
                ctaContent: c.jZ.OPEN_DISCLOSURE
            });
        }, [t]),
        E = r.useCallback(() => {
            (0, u.FE)(t, {
                content: d.jn.QUEST_BAR_V2,
                ctaContent: c.jZ.OPEN_GAME_LINK
            });
        }, [t]),
        B = _ && b,
        T = (0, o.jsx)(l.Clickable, {
            onClick: E,
            className: a()(h.clickable, { [h.logo]: B }),
            children: (0, o.jsx)(p.ZP, {
                quest: t,
                logotypeClassName: a()(h.rewardHighlightLogotype),
                withGameTile: !1
            })
        });
    return (0, o.jsxs)(i.animated.div, {
        className: a()(h.wrapper, h.rewardHighlightWrapper, { [h.interactable]: B }),
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
                className: h.opaqueExpandedBackground,
                style: {
                    opacity: n.to({
                        range: [0, 1],
                        output: [0, 1]
                    }),
                    backdropFilter: n.to([0, 1], [0, 1]).to((e) => 'blur('.concat(10 * e, 'px) brightness(').concat(1 - e / 4, ')'))
                }
            }),
            (0, o.jsx)(g.Z, {
                quest: t,
                expansionSpring: n,
                isFullyExpanded: B,
                partnerBranding: T,
                useReducedMotion: j
            }),
            (0, o.jsxs)(i.animated.div, {
                className: h.promotedBadgeWrapper,
                style: {
                    opacity: n.to({
                        range: [0, 1],
                        output: [0, 1]
                    })
                },
                children: [
                    (0, o.jsxs)(l.Clickable, {
                        className: h.promotedBadge,
                        onClick: N,
                        children: [
                            (0, o.jsx)(l.Text, {
                                color: 'always-white',
                                variant: 'text-xs/normal',
                                children: f.intl.string(f.t.o6FLcH)
                            }),
                            (0, o.jsx)(l.CircleQuestionIcon, {
                                color: l.tokens.colors.WHITE,
                                className: h.promotedBadgeIcon
                            })
                        ]
                    }),
                    (0, o.jsx)(m.r, {
                        onOpen: C,
                        onClose: v,
                        onSelect: s,
                        questContent: d.jn.QUEST_BAR_V2,
                        quest: t,
                        shouldShowDisclosure: !0,
                        showShareLink: !0,
                        children: (e) =>
                            (0, o.jsx)(l.Clickable, {
                                ...e,
                                className: h.submenuWrapper,
                                'aria-label': f.intl.string(f.t.DEoVWV),
                                children: (0, o.jsx)(l.MoreHorizontalIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: a()(h.submenuIcon, h.white)
                                })
                            })
                    })
                ]
            })
        ]
    });
};
