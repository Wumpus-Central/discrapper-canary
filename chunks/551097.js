n.d(t, { Z: () => j });
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(467721),
    o = n(481060),
    c = n(617136),
    d = n(915750),
    u = n(49436),
    m = n(387745),
    p = n(698716),
    h = n(685613),
    x = n(110560),
    f = n(73826),
    g = n(388032),
    b = n(765486);
let v = (0, s.animated)(h.ZP),
    j = (e) => {
        let {
                quest: t,
                expansionSpring: n,
                onCtxMenuSelect: i,
                onCtxMenuOpen: h,
                onCtxMenuClose: j,
                useReducedMotion: _,
                isExpanded: y,
                isExpansionAnimationComplete: C,
            } = e,
            S = (0, d.aM)(),
            E = r.useCallback(() => {
                (0, x.openDisclosureModal)(t, {
                    content: u.jn.QUEST_BAR_V2,
                    ctaContent: c.jZ.OPEN_DISCLOSURE,
                    sourceQuestContent: u.jn.QUEST_BAR_V2,
                });
            }, [t]),
            O = r.useCallback(() => {
                (0, m.nc)(t, {
                    content: u.jn.QUEST_BAR_V2,
                    ctaContent: c.jZ.OPEN_GAME_LINK,
                    impressionId: S,
                    sourceQuestContent: u.jn.QUEST_BAR_V2,
                });
            }, [S, t]),
            T = y && C,
            N = (0, a.jsx)(o.P3F, {
                onClick: O,
                className: l()(b.clickable, { [b.logo]: T }),
                children: (0, a.jsx)(v, {
                    quest: t,
                    withGameTile: !1,
                    logotypeClassName: b.partnerBranding,
                    logotypeStyle: {
                        height: 24,
                        maxWidth: 92,
                        transform: (0, s.to)(
                            [
                                n.to({
                                    range: [0, 1],
                                    output: [1, 1],
                                }),
                            ],
                            (e) => "scale(".concat(e, ")"),
                        ),
                    },
                }),
            });
        return (0, a.jsxs)(s.animated.div, {
            className: l()(b.wrapper, b.rewardHighlightWrapper, { [b.interactable]: T }),
            style: {
                transform: (0, s.to)(
                    [
                        n.to({
                            range: [0, 1],
                            output: [6, 0],
                        }),
                    ],
                    (e) => "translateY(".concat(e, "px)"),
                ),
            },
            children: [
                (0, a.jsx)(s.animated.div, {
                    className: b.opaqueExpandedBackground,
                    style: {
                        opacity: n.to({
                            range: [0, 1],
                            output: [0, 1],
                        }),
                    },
                }),
                (0, a.jsx)(f.Z, {
                    quest: t,
                    expansionSpring: n,
                    isFullyExpanded: T,
                    partnerBranding: N,
                    useReducedMotion: _,
                }),
                (0, a.jsxs)(s.animated.div, {
                    className: b.promotedBadgeWrapper,
                    style: {
                        opacity: n.to({
                            range: [0, 1],
                            output: [0, 1],
                        }),
                    },
                    children: [
                        (0, a.jsxs)(o.P3F, {
                            className: b.promotedBadge,
                            onClick: E,
                            children: [
                                (0, a.jsx)(o.Text, {
                                    color: "always-white",
                                    variant: "text-xs/normal",
                                    children: g.intl.string(g.t.o6FLcF),
                                }),
                                (0, a.jsx)(o.idN, {
                                    color: o.TVs.colors.WHITE,
                                    className: b.promotedBadgeIcon,
                                }),
                            ],
                        }),
                        (0, a.jsx)(p.i, {
                            onOpen: h,
                            onClose: j,
                            onSelect: i,
                            questContent: u.jn.QUEST_BAR_V2,
                            quest: t,
                            shouldShowDisclosure: !0,
                            showShareLink: !0,
                            sourceQuestContent: u.jn.QUEST_BAR_V2,
                            children: (e) => {
                                var t, n;
                                return (0, a.jsx)(
                                    o.P3F,
                                    ((t = (function (e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                a = Object.keys(n);
                                            "function" == typeof Object.getOwnPropertySymbols &&
                                                (a = a.concat(
                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                    }),
                                                )),
                                                a.forEach(function (t) {
                                                    var a;
                                                    (a = n[t]),
                                                        t in e
                                                            ? Object.defineProperty(e, t, {
                                                                  value: a,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0,
                                                              })
                                                            : (e[t] = a);
                                                });
                                        }
                                        return e;
                                    })({}, e)),
                                    (n = n =
                                        {
                                            className: b.submenuWrapper,
                                            "aria-label": g.intl.string(g.t.DEoVWZ),
                                            children: (0, a.jsx)(o.xhG, {
                                                size: "md",
                                                color: "currentColor",
                                                className: l()(b.submenuIcon, b.white),
                                            }),
                                        }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                        : (function (e, t) {
                                              var n = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var a = Object.getOwnPropertySymbols(e);
                                                  n.push.apply(n, a);
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
