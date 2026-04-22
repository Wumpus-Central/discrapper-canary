n.d(t, { A: () => I });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(517738),
    o = n(939249),
    d = n(834730),
    c = n(290136),
    u = n(827734),
    p = n(365199),
    h = n(341915),
    m = n(590202),
    _ = n(971649),
    A = n(901406),
    f = n(270045),
    g = n(57718),
    x = n(398025),
    E = n(545986),
    C = n(568329),
    T = n(963713),
    v = n(223352);
n(272111);
var S = n(985018),
    b = n(173839);
let j = (0, r.animated)(g.Ay),
    I = () => {
        let e = (0, _.go)(),
            { expansionSpring: t } = s.useContext(C.PW),
            {
                onCtxMenuOpen: n,
                onCtxMenuClose: l,
                onCtxMenuSelect: g,
                isExpanded: I,
                isExpansionAnimationComplete: R,
                quest: N,
            } = s.useContext(T.T),
            y = s.useCallback(() => {
                (0, E.Zc)(N, {
                    content: h.uF.QUEST_BAR_V2,
                    ctaContent: m.Cy.OPEN_DISCLOSURE,
                    sourceQuestContent: h.uF.QUEST_BAR_V2,
                });
            }, [N]),
            O = s.useCallback(() => {
                (0, A.pu)(N, {
                    content: h.uF.QUEST_BAR_V2,
                    ctaContent: m.Cy.OPEN_GAME_LINK,
                    impressionId: e,
                    sourceQuestContent: h.uF.QUEST_BAR_V2,
                });
            }, [e, N]),
            M = I && R,
            U = (0, i.jsx)(o.D, {
                onClick: O,
                className: a()(b.vk, { [b.wm]: M }),
                children: (0, i.jsx)(j, {
                    quest: N,
                    withGameTile: !1,
                    logotypeClassName: b.Iu,
                    logotypeStyle: {
                        height: 24,
                        maxWidth: 92,
                        transform: (0, r.to)([t.to({ range: [0, 1], output: [1, 1] })], (e) => `scale(${e})`),
                    },
                }),
            });
        return (0, i.jsxs)(r.animated.div, {
            className: a()(b.iE, b.Ht, { [b.tT]: M }),
            style: { transform: (0, r.to)([t.to({ range: [0, 1], output: [6, 0] })], (e) => `translateY(${e}px)`) },
            children: [
                (0, i.jsx)(r.animated.div, {
                    className: b.Tu,
                    style: { opacity: (0, x.a)(t.to({ range: [0, 1], output: [0, 1] })) },
                }),
                (0, i.jsx)(v.A, { isFullyExpanded: M, partnerBranding: U }),
                (0, i.jsxs)(r.animated.div, {
                    className: b.P0,
                    style: { opacity: (0, x.a)(t.to({ range: [0, 1], output: [0, 1] })) },
                    children: [
                        (0, i.jsxs)(o.D, {
                            className: b.y8,
                            onClick: y,
                            children: [
                                (0, i.jsx)(d.E, {
                                    color: "always-white",
                                    variant: "text-xs/normal",
                                    children: S.intl.string(S.t.o6FLcF),
                                }),
                                (0, i.jsx)(c.c, { color: u.A.colors.WHITE, className: b.P$ }),
                            ],
                        }),
                        (0, i.jsx)(f.C, {
                            onOpen: n,
                            onClose: l,
                            onSelect: g,
                            questContent: h.uF.QUEST_BAR_V2,
                            quest: N,
                            shouldShowDisclosure: !0,
                            showShareLink: !0,
                            sourceQuestContent: h.uF.QUEST_BAR_V2,
                            children: (e) =>
                                (0, i.jsx)(o.D, {
                                    ...e,
                                    className: a()(b.uJ, b.rb),
                                    "aria-label": S.intl.string(S.t.DEoVWZ),
                                    children: (0, i.jsx)(p.j, {
                                        size: "md",
                                        color: "currentColor",
                                        className: a()(b.Bx, b.ON),
                                    }),
                                }),
                        }),
                    ],
                }),
            ],
        });
    };
