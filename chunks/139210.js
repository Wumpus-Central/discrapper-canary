n.d(t, { A: () => C });
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(687498),
    o = n(397927),
    d = n(341915),
    c = n(590202),
    u = n(971649),
    m = n(901406),
    h = n(270045),
    x = n(57718),
    p = n(398025),
    g = n(545986),
    _ = n(568329),
    f = n(963713),
    v = n(223352);
n(272111);
var b = n(985018),
    j = n(448194);
let A = (0, r.animated)(x.Ay),
    C = () => {
        let e = (0, u.go)(),
            { expansionSpring: t } = i.useContext(_.PW),
            {
                onCtxMenuOpen: n,
                onCtxMenuClose: s,
                onCtxMenuSelect: x,
                isExpanded: C,
                isExpansionAnimationComplete: y,
                quest: S,
            } = i.useContext(f.T),
            E = i.useCallback(() => {
                (0, g.Zc)(S, {
                    content: d.uF.QUEST_BAR_V2,
                    ctaContent: c.Cy.OPEN_DISCLOSURE,
                    sourceQuestContent: d.uF.QUEST_BAR_V2,
                });
            }, [S]),
            T = i.useCallback(() => {
                (0, m.pu)(S, {
                    content: d.uF.QUEST_BAR_V2,
                    ctaContent: c.Cy.OPEN_GAME_LINK,
                    impressionId: e,
                    sourceQuestContent: d.uF.QUEST_BAR_V2,
                });
            }, [e, S]),
            N = C && y,
            I = (0, a.jsx)(o.DUT, {
                onClick: T,
                className: l()(j.vk, { [j.wm]: N }),
                children: (0, a.jsx)(A, {
                    quest: S,
                    withGameTile: !1,
                    logotypeClassName: j.Iu,
                    logotypeStyle: {
                        height: 24,
                        maxWidth: 92,
                        transform: (0, r.to)([t.to({ range: [0, 1], output: [1, 1] })], (e) => `scale(${e})`),
                    },
                }),
            });
        return (0, a.jsxs)(r.animated.div, {
            className: l()(j.iE, j.Ht, { [j.tT]: N }),
            style: { transform: (0, r.to)([t.to({ range: [0, 1], output: [6, 0] })], (e) => `translateY(${e}px)`) },
            children: [
                (0, a.jsx)(r.animated.div, {
                    className: j.Tu,
                    style: { opacity: (0, p.a)(t.to({ range: [0, 1], output: [0, 1] })) },
                }),
                (0, a.jsx)(v.A, { isFullyExpanded: N, partnerBranding: I }),
                (0, a.jsxs)(r.animated.div, {
                    className: j.P0,
                    style: { opacity: (0, p.a)(t.to({ range: [0, 1], output: [0, 1] })) },
                    children: [
                        (0, a.jsxs)(o.DUT, {
                            className: j.y8,
                            onClick: E,
                            children: [
                                (0, a.jsx)(o.Text, {
                                    color: "always-white",
                                    variant: "text-xs/normal",
                                    children: b.intl.string(b.t.o6FLcF),
                                }),
                                (0, a.jsx)(o.cBN, { color: o.LU0.colors.WHITE, className: j.P$ }),
                            ],
                        }),
                        (0, a.jsx)(h.C, {
                            onOpen: n,
                            onClose: s,
                            onSelect: x,
                            questContent: d.uF.QUEST_BAR_V2,
                            quest: S,
                            shouldShowDisclosure: !0,
                            showShareLink: !0,
                            sourceQuestContent: d.uF.QUEST_BAR_V2,
                            children: (e) =>
                                (0, a.jsx)(o.DUT, {
                                    ...e,
                                    className: l()(j.uJ, j.rb),
                                    "aria-label": b.intl.string(b.t.DEoVWZ),
                                    children: (0, a.jsx)(o.jNK, {
                                        size: "md",
                                        color: "currentColor",
                                        className: l()(j.Bx, j.ON),
                                    }),
                                }),
                        }),
                    ],
                }),
            ],
        });
    };
