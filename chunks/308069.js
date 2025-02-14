n.d(t, { Z: () => _ });
var s = n(200651),
    r = n(192379),
    a = n(120356),
    o = n.n(a),
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
    v = n(145700);
let _ = (e) => {
    let { quest: t, expansionSpring: n, onCtxMenuSelect: a, onCtxMenuOpen: _, onCtxMenuClose: C, useReducedMotion: j, isExpanded: b, isExpansionAnimationComplete: T } = e,
        E = (0, d.aM)(),
        S = r.useCallback(() => {
            (0, h.openDisclosureModal)(t, {
                content: u.jn.QUEST_BAR_V2,
                ctaContent: c.jZ.OPEN_DISCLOSURE
            });
        }, [t]),
        N = r.useCallback(() => {
            (0, p.FE)(t, {
                content: u.jn.QUEST_BAR_V2,
                ctaContent: c.jZ.OPEN_GAME_LINK,
                impressionId: E
            });
        }, [E, t]),
        y = b && T,
        w = (0, s.jsx)(l.P3F, {
            onClick: N,
            className: o()(v.clickable, { [v.logo]: y }),
            children: (0, s.jsx)(m.ZP, {
                quest: t,
                logotypeClassName: o()(v.rewardHighlightLogotype),
                withGameTile: !1
            })
        });
    return (0, s.jsxs)(i.animated.div, {
        className: o()(v.wrapper, v.rewardHighlightWrapper, { [v.interactable]: y }),
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
            (0, s.jsx)(i.animated.div, {
                className: v.opaqueExpandedBackground,
                style: {
                    opacity: n.to({
                        range: [0, 1],
                        output: [0, 1]
                    }),
                    backdropFilter: n.to([0, 1], [0, 1]).to((e) => 'blur('.concat(10 * e, 'px) brightness(').concat(1 - e / 4, ')'))
                }
            }),
            (0, s.jsx)(g.Z, {
                quest: t,
                expansionSpring: n,
                isFullyExpanded: y,
                partnerBranding: w,
                useReducedMotion: j
            }),
            (0, s.jsxs)(i.animated.div, {
                className: v.promotedBadgeWrapper,
                style: {
                    opacity: n.to({
                        range: [0, 1],
                        output: [0, 1]
                    })
                },
                children: [
                    (0, s.jsxs)(l.P3F, {
                        className: v.promotedBadge,
                        onClick: S,
                        children: [
                            (0, s.jsx)(l.Text, {
                                color: 'always-white',
                                variant: 'text-xs/normal',
                                children: f.intl.string(f.t.o6FLcH)
                            }),
                            (0, s.jsx)(l.idN, {
                                color: l.TVs.colors.WHITE,
                                className: v.promotedBadgeIcon
                            })
                        ]
                    }),
                    (0, s.jsx)(x.r, {
                        onOpen: _,
                        onClose: C,
                        onSelect: a,
                        questContent: u.jn.QUEST_BAR_V2,
                        quest: t,
                        shouldShowDisclosure: !0,
                        showShareLink: !0,
                        children: (e) =>
                            (0, s.jsx)(l.P3F, {
                                ...e,
                                className: v.submenuWrapper,
                                'aria-label': f.intl.string(f.t.DEoVWV),
                                children: (0, s.jsx)(l.xhG, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: o()(v.submenuIcon, v.white)
                                })
                            })
                    })
                ]
            })
        ]
    });
};
