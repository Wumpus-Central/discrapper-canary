n.d(t, { A: () => S });
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(563495),
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
    v = n(223352),
    b = n(152515),
    j = n(985018),
    A = n(229170);
let C = (0, r.animated)(x.Ay),
    S = (e) => {
        let { withUnfurlTimeout: t, unfurlTimeoutDurationInMilliseconds: n, onUnfurlTimeoutComplete: s } = e,
            x = (0, u.go)(),
            { expansionSpring: S } = i.useContext(_.PW),
            {
                onCtxMenuOpen: T,
                onCtxMenuClose: y,
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
                className: l()(A.vk, { [A.wm]: w }),
                children: (0, a.jsx)(C, {
                    quest: k,
                    withGameTile: !1,
                    logotypeClassName: A.Iu,
                    logotypeStyle: {
                        height: 24,
                        maxWidth: 92,
                        transform: (0, r.to)([S.to({ range: [0, 1], output: [1, 1] })], (e) => `scale(${e})`),
                    },
                }),
            });
        return (0, a.jsxs)(r.animated.div, {
            className: l()(A.iE, A.Ht, { [A.tT]: w }),
            style: { transform: (0, r.to)([S.to({ range: [0, 1], output: [6, 0] })], (e) => `translateY(${e}px)`) },
            children: [
                (0, a.jsx)(r.animated.div, {
                    className: A.Tu,
                    style: { opacity: (0, p.a)(S.to({ range: [0, 1], output: [0, 1] })) },
                }),
                (0, a.jsx)(v.A, { isFullyExpanded: w, partnerBranding: D }),
                (0, a.jsxs)(r.animated.div, {
                    className: A.P0,
                    style: { opacity: (0, p.a)(S.to({ range: [0, 1], output: [0, 1] })) },
                    children: [
                        (0, a.jsxs)(o.DUT, {
                            className: A.y8,
                            onClick: R,
                            children: [
                                (0, a.jsx)(o.Text, {
                                    color: "always-white",
                                    variant: "text-xs/normal",
                                    children: j.intl.string(j.t.o6FLcF),
                                }),
                                (0, a.jsx)(o.cBN, { color: o.LU0.colors.WHITE, className: A.P$ }),
                            ],
                        }),
                        t
                            ? (0, a.jsx)("div", {
                                  className: A.uJ,
                                  children: (0, a.jsx)(b.n, { timeoutDurationInMilliseconds: n, onTimeoutComplete: s }),
                              })
                            : (0, a.jsx)(h.C, {
                                  onOpen: T,
                                  onClose: y,
                                  onSelect: E,
                                  questContent: d.uF.QUEST_BAR_V2,
                                  quest: k,
                                  shouldShowDisclosure: !0,
                                  showShareLink: !0,
                                  sourceQuestContent: d.uF.QUEST_BAR_V2,
                                  children: (e) =>
                                      (0, a.jsx)(o.DUT, {
                                          ...e,
                                          className: l()(A.uJ, A.rb),
                                          "aria-label": j.intl.string(j.t.DEoVWZ),
                                          children: (0, a.jsx)(o.jNK, {
                                              size: "md",
                                              color: "currentColor",
                                              className: l()(A.Bx, A.ON),
                                          }),
                                      }),
                              }),
                    ],
                }),
            ],
        });
    };
