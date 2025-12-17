n.d(t, { Z: () => C });
var a = n(54381),
    r = n(473749),
    l = n(120356),
    i = n.n(l),
    s = n(236726),
    o = n(481060),
    c = n(617136),
    d = n(915750),
    u = n(49436),
    m = n(387745),
    p = n(698716),
    h = n(685613),
    f = n(110560),
    x = n(444134),
    b = n(526188),
    g = n(73826),
    v = n(388032),
    j = n(952334);
let y = (0, s.animated)(h.ZP),
    C = () => {
        let e = (0, d.aM)(),
            { expansionSpring: t } = r.useContext(x.xo),
            {
                onCtxMenuOpen: n,
                onCtxMenuClose: l,
                onCtxMenuSelect: h,
                isExpanded: C,
                isExpansionAnimationComplete: _,
                quest: S,
            } = r.useContext(b.A),
            E = r.useCallback(() => {
                (0, f.openDisclosureModal)(S, {
                    content: u.jn.QUEST_BAR_V2,
                    ctaContent: c.jZ.OPEN_DISCLOSURE,
                    sourceQuestContent: u.jn.QUEST_BAR_V2,
                });
            }, [S]),
            T = r.useCallback(() => {
                (0, m.nc)(S, {
                    content: u.jn.QUEST_BAR_V2,
                    ctaContent: c.jZ.OPEN_GAME_LINK,
                    impressionId: e,
                    sourceQuestContent: u.jn.QUEST_BAR_V2,
                });
            }, [e, S]),
            O = C && _,
            N = (0, a.jsx)(o.P3F, {
                onClick: T,
                className: i()(j.clickable, { [j.logo]: O }),
                children: (0, a.jsx)(y, {
                    quest: S,
                    withGameTile: !1,
                    logotypeClassName: j.partnerBranding,
                    logotypeStyle: {
                        height: 24,
                        maxWidth: 92,
                        transform: (0, s.to)(
                            [
                                t.to({
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
            className: i()(j.wrapper, j.rewardHighlightWrapper, { [j.interactable]: O }),
            style: {
                transform: (0, s.to)(
                    [
                        t.to({
                            range: [0, 1],
                            output: [6, 0],
                        }),
                    ],
                    (e) => "translateY(".concat(e, "px)"),
                ),
            },
            children: [
                (0, a.jsx)(s.animated.div, {
                    className: j.opaqueExpandedBackground,
                    style: {
                        opacity: t.to({
                            range: [0, 1],
                            output: [0, 1],
                        }),
                    },
                }),
                (0, a.jsx)(g.Z, {
                    isFullyExpanded: O,
                    partnerBranding: N,
                }),
                (0, a.jsxs)(s.animated.div, {
                    className: j.promotedBadgeWrapper,
                    style: {
                        opacity: t.to({
                            range: [0, 1],
                            output: [0, 1],
                        }),
                    },
                    children: [
                        (0, a.jsxs)(o.P3F, {
                            className: j.promotedBadge,
                            onClick: E,
                            children: [
                                (0, a.jsx)(o.Text, {
                                    color: "always-white",
                                    variant: "text-xs/normal",
                                    children: v.intl.string(v.t.o6FLcF),
                                }),
                                (0, a.jsx)(o.idN, {
                                    color: o.TVs.colors.WHITE,
                                    className: j.promotedBadgeIcon,
                                }),
                            ],
                        }),
                        (0, a.jsx)(p.i, {
                            onOpen: n,
                            onClose: l,
                            onSelect: h,
                            questContent: u.jn.QUEST_BAR_V2,
                            quest: S,
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
                                            className: j.submenuWrapper,
                                            "aria-label": v.intl.string(v.t.DEoVWZ),
                                            children: (0, a.jsx)(o.xhG, {
                                                size: "md",
                                                color: "currentColor",
                                                className: i()(j.submenuIcon, j.white),
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
