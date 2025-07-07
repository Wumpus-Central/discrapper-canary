n.d(t, { Z: () => j });
var r = n(255367),
    o = n(73800),
    s = n(120356),
    a = n.n(s),
    i = n(451463),
    l = n(481060),
    c = n(617136),
    u = n(915750),
    d = n(497505),
    p = n(918701),
    m = n(685613),
    f = n(670638),
    g = n(341907),
    x = n(303385),
    h = n(388032),
    b = n(74783);
let j = (e) => {
    let { quest: t, expansionSpring: n, onCtxMenuSelect: s, onCtxMenuOpen: j, onCtxMenuClose: _, useReducedMotion: v, isExpanded: y, isExpansionAnimationComplete: C } = e,
        O = (0, u.aM)(),
        E = o.useCallback(() => {
            (0, g.openDisclosureModal)(t, {
                content: d.jn.QUEST_BAR_V2,
                ctaContent: c.jZ.OPEN_DISCLOSURE,
                sourceQuestContent: d.jn.QUEST_BAR_V2
            });
        }, [t]),
        S = o.useCallback(() => {
            (0, p.nc)(t, {
                content: d.jn.QUEST_BAR_V2,
                ctaContent: c.jZ.OPEN_GAME_LINK,
                impressionId: O,
                sourceQuestContent: d.jn.QUEST_BAR_V2
            });
        }, [O, t]),
        w = y && C,
        P = (0, r.jsx)(l.P3F, {
            onClick: S,
            className: a()(b.clickable, { [b.logo]: w }),
            children: (0, r.jsx)(m.ZP, {
                quest: t,
                logotypeClassName: b.rewardHighlightLogotype,
                withGameTile: !1
            })
        });
    return (0, r.jsxs)(i.animated.div, {
        className: a()(b.wrapper, b.rewardHighlightWrapper, { [b.interactable]: w }),
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
                    })
                }
            }),
            (0, r.jsx)(x.Z, {
                quest: t,
                expansionSpring: n,
                isFullyExpanded: w,
                partnerBranding: P,
                useReducedMotion: v
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
                        onClick: E,
                        children: [
                            (0, r.jsx)(l.Text, {
                                color: 'always-white',
                                variant: 'text-xs/normal',
                                children: h.intl.string(h.t.o6FLcH)
                            }),
                            (0, r.jsx)(l.idN, {
                                color: l.TVs.colors.WHITE,
                                className: b.promotedBadgeIcon
                            })
                        ]
                    }),
                    (0, r.jsx)(f.r, {
                        onOpen: j,
                        onClose: _,
                        onSelect: s,
                        questContent: d.jn.QUEST_BAR_V2,
                        quest: t,
                        shouldShowDisclosure: !0,
                        showShareLink: !0,
                        sourceQuestContent: d.jn.QUEST_BAR_V2,
                        children: (e) => {
                            var t, n;
                            return (0, r.jsx)(
                                l.P3F,
                                ((t = (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            r = Object.keys(n);
                                        ('function' == typeof Object.getOwnPropertySymbols &&
                                            (r = r.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                })
                                            )),
                                            r.forEach(function (t) {
                                                var r;
                                                ((r = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: r,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0
                                                          })
                                                        : (e[t] = r));
                                            }));
                                    }
                                    return e;
                                })({}, e)),
                                (n = n =
                                    {
                                        className: b.submenuWrapper,
                                        'aria-label': h.intl.string(h.t.DEoVWV),
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
