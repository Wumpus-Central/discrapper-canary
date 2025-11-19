n.d(t, { Z: () => C });
var r = n(54381),
    s = n(473749),
    o = n(120356),
    a = n.n(o),
    i = n(636606),
    l = n(481060),
    c = n(617136),
    d = n(915750),
    u = n(509212),
    p = n(497505),
    m = n(685138),
    g = n(685613),
    f = n(110560),
    h = n(670638),
    x = n(303385),
    b = n(46140),
    _ = n(388032),
    j = n(461579);
let v = (0, i.animated)(g.ZP),
    C = (e) => {
        let {
                quest: t,
                expansionSpring: n,
                onCtxMenuSelect: o,
                onCtxMenuOpen: g,
                onCtxMenuClose: C,
                useReducedMotion: y,
                isExpanded: E,
                isExpansionAnimationComplete: O,
            } = e,
            S = (0, d.aM)(),
            { status: T } = (0, m.n)({
                location: b.dr.QUESTS_BAR,
                questConfig: t.config,
            }),
            w = null == T ? void 0 : T.progressBlur,
            P = s.useCallback(() => {
                (0, f.openDisclosureModal)(t, {
                    content: p.jn.QUEST_BAR_V2,
                    ctaContent: c.jZ.OPEN_DISCLOSURE,
                    sourceQuestContent: p.jn.QUEST_BAR_V2,
                });
            }, [t]),
            N = s.useCallback(() => {
                (0, u.nc)(t, {
                    content: p.jn.QUEST_BAR_V2,
                    ctaContent: c.jZ.OPEN_GAME_LINK,
                    impressionId: S,
                    sourceQuestContent: p.jn.QUEST_BAR_V2,
                });
            }, [S, t]),
            A = E && O,
            R = (0, r.jsx)(l.P3F, {
                onClick: N,
                className: a()(j.clickable, { [j.logo]: A }),
                children: (0, r.jsx)(v, {
                    quest: t,
                    withGameTile: !1,
                    logotypeClassName: j.partnerBranding,
                    logotypeStyle: {
                        height: w ? 32 : 24,
                        maxWidth: w ? 130 : 92,
                        transform: (0, i.to)(
                            [
                                n.to({
                                    range: [0, 1],
                                    output: [1, w ? 0.72 : 1],
                                }),
                            ],
                            (e) => "scale(".concat(e, ")"),
                        ),
                    },
                }),
            });
        return (0, r.jsxs)(i.animated.div, {
            className: a()(j.wrapper, j.rewardHighlightWrapper, { [j.interactable]: A }),
            style: {
                transform: (0, i.to)(
                    [
                        n.to({
                            range: [0, 1],
                            output: [w ? 5 : 6, 0],
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
                    isFullyExpanded: A,
                    partnerBranding: R,
                    useReducedMotion: y,
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
                            onClick: P,
                            children: [
                                (0, r.jsx)(l.Text, {
                                    color: "always-white",
                                    variant: "text-xs/normal",
                                    children: _.intl.string(_.t.o6FLcF),
                                }),
                                (0, r.jsx)(l.idN, {
                                    color: l.TVs.colors.WHITE,
                                    className: j.promotedBadgeIcon,
                                }),
                            ],
                        }),
                        (0, r.jsx)(h.r, {
                            onOpen: g,
                            onClose: C,
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
                                            "aria-label": _.intl.string(_.t.DEoVWZ),
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
