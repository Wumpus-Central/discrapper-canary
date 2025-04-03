n.d(t, { Z: () => j });
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
    f = n(670638),
    g = n(341907),
    x = n(303385),
    h = n(388032),
    b = n(74783);
let j = (e) => {
    let { quest: t, expansionSpring: n, onCtxMenuSelect: s, onCtxMenuOpen: j, onCtxMenuClose: v, useReducedMotion: y, isExpanded: _, isExpansionAnimationComplete: C } = e,
        O = (0, d.aM)(),
        w = o.useCallback(() => {
            (0, g.openDisclosureModal)(t, {
                content: u.jn.QUEST_BAR_V2,
                ctaContent: c.jZ.OPEN_DISCLOSURE
            });
        }, [t]),
        S = o.useCallback(() => {
            (0, p.FE)(t, {
                content: u.jn.QUEST_BAR_V2,
                ctaContent: c.jZ.OPEN_GAME_LINK,
                impressionId: O
            });
        }, [O, t]),
        P = _ && C,
        N = (0, r.jsx)(l.P3F, {
            onClick: S,
            className: a()(b.clickable, { [b.logo]: P }),
            children: (0, r.jsx)(m.ZP, {
                quest: t,
                logotypeClassName: b.rewardHighlightLogotype,
                withGameTile: !1
            })
        });
    return (0, r.jsxs)(i.animated.div, {
        className: a()(b.wrapper, b.rewardHighlightWrapper, { [b.interactable]: P }),
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
                className: b.opaqueExpandedBackground,
                style: {
                    opacity: n.to({
                        range: [0, 1],
                        output: [0, 1]
                    }),
                    backdropFilter: n.to([0, 1], [0, 1]).to((e) => 'blur('.concat(10 * e, 'px) brightness(').concat(1 - e / 4, ')'))
                }
            }),
            (0, r.jsx)(x.Z, {
                quest: t,
                expansionSpring: n,
                isFullyExpanded: P,
                partnerBranding: N,
                useReducedMotion: y
            }),
            (0, r.jsxs)(i.animated.div, {
                className: b.promotedBadgeWrapper,
                style: {
                    opacity: n.to({
                        range: [0, 1],
                        output: [0, 1]
                    })
                },
                children: [
                    (0, r.jsxs)(l.P3F, {
                        className: b.promotedBadge,
                        onClick: w,
                        children: [
                            (0, r.jsx)(l.Text, {
                                color: 'always-white',
                                variant: 'text-xs/normal',
                                children: h.NW.string(h.t.o6FLcH)
                            }),
                            (0, r.jsx)(l.idN, {
                                color: l.TVs.colors.WHITE,
                                className: b.promotedBadgeIcon
                            })
                        ]
                    }),
                    (0, r.jsx)(f.r, {
                        onOpen: j,
                        onClose: v,
                        onSelect: s,
                        questContent: u.jn.QUEST_BAR_V2,
                        quest: t,
                        shouldShowDisclosure: !0,
                        showShareLink: !0,
                        children: (e) => {
                            var t, n;
                            return (0, r.jsx)(
                                l.P3F,
                                ((t = (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            r = Object.keys(n);
                                        'function' == typeof Object.getOwnPropertySymbols &&
                                            (r = r.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                })
                                            )),
                                            r.forEach(function (t) {
                                                var r;
                                                (r = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: r,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0
                                                          })
                                                        : (e[t] = r);
                                            });
                                    }
                                    return e;
                                })({}, e)),
                                (n = n =
                                    {
                                        className: b.submenuWrapper,
                                        'aria-label': h.NW.string(h.t.DEoVWV),
                                        children: (0, r.jsx)(l.xhG, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: a()(b.submenuIcon, b.white)
                                        })
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(n)).forEach(function (e) {
                                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                      }),
                                t)
                            );
                        }
                    })
                ]
            })
        ]
    });
};
