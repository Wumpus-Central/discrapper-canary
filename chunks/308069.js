n.d(t, { Z: () => b });
var r = n(255367),
    s = n(73800),
    o = n(120356),
    a = n.n(o),
    i = n(717976),
    l = n(481060),
    c = n(617136),
    u = n(915750),
    d = n(509212),
    p = n(497505),
    m = n(685613),
    g = n(110560),
    f = n(670638),
    x = n(303385),
    h = n(388032),
    j = n(344837);
let b = (e) => {
    let {
            quest: t,
            expansionSpring: n,
            onCtxMenuSelect: o,
            onCtxMenuOpen: b,
            onCtxMenuClose: _,
            useReducedMotion: v,
            isExpanded: C,
            isExpansionAnimationComplete: y,
        } = e,
        O = (0, u.aM)(),
        E = s.useCallback(() => {
            (0, g.openDisclosureModal)(t, {
                content: p.jn.QUEST_BAR_V2,
                ctaContent: c.jZ.OPEN_DISCLOSURE,
                sourceQuestContent: p.jn.QUEST_BAR_V2,
            });
        }, [t]),
        S = s.useCallback(() => {
            (0, d.nc)(t, {
                content: p.jn.QUEST_BAR_V2,
                ctaContent: c.jZ.OPEN_GAME_LINK,
                impressionId: O,
                sourceQuestContent: p.jn.QUEST_BAR_V2,
            });
        }, [O, t]),
        T = C && y,
        w = (0, r.jsx)(l.P3F, {
            onClick: S,
            className: a()(j.clickable, { [j.logo]: T }),
            children: (0, r.jsx)(m.ZP, {
                quest: t,
                logotypeClassName: j.rewardHighlightLogotype,
                withGameTile: !1,
            }),
        });
    return (0, r.jsxs)(i.animated.div, {
        className: a()(j.wrapper, j.rewardHighlightWrapper, { [j.interactable]: T }),
        style: {
            transform: (0, i.to)(
                [
                    n.to({
                        range: [0, 1],
                        output: [8, 0],
                    }),
                ],
                (e) => "translateY(".concat(e, "px"),
            ),
        },
        children: [
            (0, r.jsx)(i.animated.div, {
                className: j.opaqueExpandedBackground,
                style: {
                    opacity: n.to({
                        range: [0, 1],
                        output: [0, 1],
                    }),
                },
            }),
            (0, r.jsx)(x.Z, {
                quest: t,
                expansionSpring: n,
                isFullyExpanded: T,
                partnerBranding: w,
                useReducedMotion: v,
            }),
            (0, r.jsxs)(i.animated.div, {
                className: j.promotedBadgeWrapper,
                style: {
                    opacity: n.to({
                        range: [0, 1],
                        output: [0, 1],
                    }),
                },
                children: [
                    (0, r.jsxs)(l.P3F, {
                        className: j.promotedBadge,
                        onClick: E,
                        children: [
                            (0, r.jsx)(l.Text, {
                                color: "always-white",
                                variant: "text-xs/normal",
                                children: h.intl.string(h.t.o6FLcH),
                            }),
                            (0, r.jsx)(l.idN, {
                                color: l.TVs.colors.WHITE,
                                className: j.promotedBadgeIcon,
                            }),
                        ],
                    }),
                    (0, r.jsx)(f.r, {
                        onOpen: b,
                        onClose: _,
                        onSelect: o,
                        questContent: p.jn.QUEST_BAR_V2,
                        quest: t,
                        shouldShowDisclosure: !0,
                        showShareLink: !0,
                        sourceQuestContent: p.jn.QUEST_BAR_V2,
                        children: (e) => {
                            var t, n;
                            return (0, r.jsx)(
                                l.P3F,
                                ((t = (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            r = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (r = r.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                }),
                                            )),
                                            r.forEach(function (t) {
                                                var r;
                                                (r = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: r,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[t] = r);
                                            });
                                    }
                                    return e;
                                })({}, e)),
                                (n = n =
                                    {
                                        className: j.submenuWrapper,
                                        "aria-label": h.intl.string(h.t.DEoVWV),
                                        children: (0, r.jsx)(l.xhG, {
                                            size: "md",
                                            color: "currentColor",
                                            className: a()(j.submenuIcon, j.white),
                                        }),
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
                                t),
                            );
                        },
                    }),
                ],
            }),
        ],
    });
};
