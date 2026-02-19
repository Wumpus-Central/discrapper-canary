n.d(t, { A: () => T });
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(475539),
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
    b = n(223352),
    v = n(152515);
n(272111);
var j = n(985018),
    C = n(116224);
let A = (0, r.animated)(x.Ay),
    T = (e) => {
        let { withUnfurlTimeout: t, unfurlTimeoutDurationInMilliseconds: n, onUnfurlTimeoutComplete: s } = e,
            x = (0, u.go)(),
            { expansionSpring: T } = i.useContext(_.PW),
            {
                onCtxMenuOpen: y,
                onCtxMenuClose: S,
                onCtxMenuSelect: E,
                isExpanded: N,
                isExpansionAnimationComplete: I,
                quest: k,
            } = i.useContext(f.T),
            R = i.useCallback(() => {
                (0, g.Zc)(k, {
                    content: d.uF.QUEST_BAR_V2,
                    ctaContent: c.Cy.OPEN_DISCLOSURE,
                    sourceQuestContent: d.uF.QUEST_BAR_V2,
                });
            }, [k]),
            O = i.useCallback(() => {
                (0, m.pu)(k, {
                    content: d.uF.QUEST_BAR_V2,
                    ctaContent: c.Cy.OPEN_GAME_LINK,
                    impressionId: x,
                    sourceQuestContent: d.uF.QUEST_BAR_V2,
                });
            }, [x, k]),
            w = N && I,
            D = (0, a.jsx)(o.DUT, {
                onClick: O,
                className: l()(C.vk, { [C.wm]: w }),
                children: (0, a.jsx)(A, {
                    quest: k,
                    withGameTile: !1,
                    logotypeClassName: C.Iu,
                    logotypeStyle: {
                        height: 24,
                        maxWidth: 92,
                        transform: (0, r.to)([T.to({ range: [0, 1], output: [1, 1] })], (e) => `scale(${e})`),
                    },
                }),
            });
        return (0, a.jsxs)(r.animated.div, {
            className: l()(C.iE, C.Ht, { [C.tT]: w }),
            style: { transform: (0, r.to)([T.to({ range: [0, 1], output: [6, 0] })], (e) => `translateY(${e}px)`) },
            children: [
                (0, a.jsx)(r.animated.div, {
                    className: C.Tu,
                    style: { opacity: (0, p.a)(T.to({ range: [0, 1], output: [0, 1] })) },
                }),
                (0, a.jsx)(b.A, { isFullyExpanded: w, partnerBranding: D }),
                (0, a.jsxs)(r.animated.div, {
                    className: C.P0,
                    style: { opacity: (0, p.a)(T.to({ range: [0, 1], output: [0, 1] })) },
                    children: [
                        (0, a.jsxs)(o.DUT, {
                            className: C.y8,
                            onClick: R,
                            children: [
                                (0, a.jsx)(o.Text, {
                                    color: "always-white",
                                    variant: "text-xs/normal",
                                    children: j.intl.string(j.t.o6FLcF),
                                }),
                                (0, a.jsx)(o.cBN, { color: o.LU0.colors.WHITE, className: C.P$ }),
                            ],
                        }),
                        t
                            ? (0, a.jsx)("div", {
                                  className: C.uJ,
                                  children: (0, a.jsx)(v.n, { timeoutDurationInMilliseconds: n, onTimeoutComplete: s }),
                              })
                            : (0, a.jsx)(h.C, {
                                  onOpen: y,
                                  onClose: S,
                                  onSelect: E,
                                  questContent: d.uF.QUEST_BAR_V2,
                                  quest: k,
                                  shouldShowDisclosure: !0,
                                  showShareLink: !0,
                                  sourceQuestContent: d.uF.QUEST_BAR_V2,
                                  children: (e) =>
                                      (0, a.jsx)(o.DUT, {
                                          ...e,
                                          className: l()(C.uJ, C.rb),
                                          "aria-label": j.intl.string(j.t.DEoVWZ),
                                          children: (0, a.jsx)(o.jNK, {
                                              size: "md",
                                              color: "currentColor",
                                              className: l()(C.Bx, C.ON),
                                          }),
                                      }),
                              }),
                    ],
                }),
            ],
        });
    };
