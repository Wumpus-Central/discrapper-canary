var o = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    i = n(476183),
    l = n(481060),
    c = n(617136),
    d = n(915750),
    u = n(497505),
    p = n(918701),
    m = n(685613),
    x = n(64141),
    f = n(341907),
    g = n(303385),
    h = n(388032),
    C = n(626094);
t.Z = (e) => {
    let { quest: t, expansionSpring: n, onCtxMenuSelect: s, onCtxMenuOpen: v, onCtxMenuClose: j, useReducedMotion: _, isExpanded: b, isExpansionAnimationComplete: E } = e,
        N = (0, d.aM)(),
        B = r.useCallback(() => {
            (0, f.openDisclosureModal)(t, {
                content: u.jn.QUEST_BAR_V2,
                ctaContent: c.jZ.OPEN_DISCLOSURE
            });
        }, [t]),
        T = r.useCallback(() => {
            (0, p.FE)(t, {
                content: u.jn.QUEST_BAR_V2,
                ctaContent: c.jZ.OPEN_GAME_LINK,
                impressionId: N
            });
        }, [N, t]),
        S = b && E,
        y = (0, o.jsx)(l.Clickable, {
            onClick: T,
            className: a()(C.clickable, { [C.logo]: S }),
            children: (0, o.jsx)(m.ZP, {
                quest: t,
                logotypeClassName: a()(C.rewardHighlightLogotype),
                withGameTile: !1
            })
        });
    return (0, o.jsxs)(i.animated.div, {
        className: a()(C.wrapper, C.rewardHighlightWrapper, { [C.interactable]: S }),
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
                className: C.opaqueExpandedBackground,
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
                isFullyExpanded: S,
                partnerBranding: y,
                useReducedMotion: _
            }),
            (0, o.jsxs)(i.animated.div, {
                className: C.promotedBadgeWrapper,
                style: {
                    opacity: n.to({
                        range: [0, 1],
                        output: [0, 1]
                    })
                },
                children: [
                    (0, o.jsxs)(l.Clickable, {
                        className: C.promotedBadge,
                        onClick: B,
                        children: [
                            (0, o.jsx)(l.Text, {
                                color: 'always-white',
                                variant: 'text-xs/normal',
                                children: h.intl.string(h.t.o6FLcH)
                            }),
                            (0, o.jsx)(l.CircleQuestionIcon, {
                                color: l.tokens.colors.WHITE,
                                className: C.promotedBadgeIcon
                            })
                        ]
                    }),
                    (0, o.jsx)(x.r, {
                        onOpen: v,
                        onClose: j,
                        onSelect: s,
                        questContent: u.jn.QUEST_BAR_V2,
                        quest: t,
                        shouldShowDisclosure: !0,
                        showShareLink: !0,
                        children: (e) =>
                            (0, o.jsx)(l.Clickable, {
                                ...e,
                                className: C.submenuWrapper,
                                'aria-label': h.intl.string(h.t.DEoVWV),
                                children: (0, o.jsx)(l.MoreHorizontalIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: a()(C.submenuIcon, C.white)
                                })
                            })
                    })
                ]
            })
        ]
    });
};
