n.d(t, { A: () => R });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(4208),
    o = n(827734),
    d = n(990078),
    c = n(397927),
    u = n(765671),
    _ = n(770178),
    m = n(765548),
    h = n(341915),
    p = n(714510),
    g = n(890687),
    A = n(18437),
    x = n(590202),
    f = n(918338),
    C = n(270045),
    I = n(57718),
    E = n(847641),
    b = n(646764),
    v = n(398025),
    T = n(433745),
    y = n(654487),
    S = n(818348),
    N = n(985018),
    j = n(798324);
let L = (0, s.animated)(c.abt),
    R = (e) => {
        let {
                isQuestExpired: t,
                quest: n,
                location: r,
                size: R,
                expansionSpring: P,
                isAnimating: w,
                isExpanded: M,
                isInteracting: D,
                contentPosition: k,
                toggleExpanded: O,
                sourceQuestContent: U,
            } = e,
            { ref: B, height: G } = (0, u.Ay)(),
            [F, H] = a.useState(null),
            [V, q] = a.useState(null),
            W = (0, m.A)((e) => {
                let t = e.target;
                H(t.offsetWidth), q(t.scrollWidth);
            }),
            z = (0, _.w)(W),
            Y = (0, T.a3)(r),
            Q = r === h.uF.QUESTS_EMBED,
            K = (0, p.wT)(n, y.rE.QUESTS_CARD, r, U),
            J = n.userStatus?.completedAt != null,
            X = (0, A.Ut)(),
            Z = (0, g.S5)(n.config.expiresAt),
            $ = (0, g.S5)(n.config.rewardsConfig.rewardsExpireAt),
            ee = a.useMemo(() => null != n.config.cosponsorMetadata, [n]),
            et = (e) => {
                e.stopPropagation(),
                    e.currentTarget.blur(),
                    O(),
                    X({
                        questId: n.id,
                        questContent: r,
                        questContentCTA: M ? x.Cy.COLLAPSE : x.Cy.EXPAND,
                        questContentPosition: k,
                        sourceQuestContent: U,
                    });
            },
            en = (0, i.jsx)(I.Ay, {
                className: j.Iu,
                logotypeClassName: ee ? j.qN : void 0,
                gameTileSize: I.LU.MEDIUM,
                quest: n,
                separatorSpacing: I.C8.MEDIUM,
                theme: S.NJ.DARK,
                withGameTile: !Q || null == n.config.cosponsorMetadata,
            });
        return (0, i.jsxs)("div", {
            className: l()(j.nw, { [j.fu]: Y, [j.Gg]: Q, [j.e5]: "xs" === R }),
            "aria-label": N.intl.string(N.t.dcl9MQ),
            style: { height: Y ? G : void 0 },
            children: [
                (0, i.jsx)(f.A, {
                    quest: n,
                    isInteracting: D,
                    containerClassName: j.v7,
                    imageSize: { width: 660, height: 185 },
                    imageClassName: j.Z5,
                }),
                (0, i.jsxs)("div", {
                    className: j.wx,
                    "aria-expanded": M,
                    children: [
                        (0, i.jsxs)(s.animated.div, {
                            className: l()(j.VW, { [j.eX]: Q }),
                            style: { y: Y ? P.to({ range: [0, 1], output: [T.es, 0] }) : void 0 },
                            children: [
                                Y &&
                                    (0, i.jsx)(s.animated.div, {
                                        className: j.gM,
                                        style: {
                                            opacity: (0, v.a)(P.to({ range: [0, 1], output: [1, 0] })),
                                            visibility: w || !M ? "inherit" : "hidden",
                                        },
                                        "aria-hidden": !w && M,
                                        children: (0, i.jsxs)(c.sqX, {
                                            "aria-label": N.intl.string(N.t.dcl9MQ),
                                            onClick: et,
                                            className: j._F,
                                            children: [
                                                (0, i.jsx)("div", {
                                                    className: j.SY,
                                                    children: (0, i.jsx)(b.A, {
                                                        quest: n,
                                                        questContent: r,
                                                        className: j.EK,
                                                        sourceQuestContent: U,
                                                    }),
                                                }),
                                                (0, i.jsxs)("div", {
                                                    className: j.if,
                                                    children: [
                                                        (0, i.jsxs)("div", {
                                                            className: j.dc,
                                                            children: [en, (0, i.jsx)(E.A, { color: "always-white" })],
                                                        }),
                                                        (0, i.jsx)(c.Text, { variant: "text-xs/medium", children: K }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    }),
                                (0, i.jsx)(s.animated.div, {
                                    ref: (e) => {
                                        B.current = e;
                                    },
                                    className: l()(j.Yu, { [j.fu]: Y, [j.Gg]: Q }),
                                    style: {
                                        opacity: (0, v.a)(P.to({ range: [0, 1], output: [0, 1] })),
                                        visibility: w || M ? "inherit" : "hidden",
                                    },
                                    "aria-hidden": !w && !M,
                                    children: (0, i.jsxs)("div", {
                                        className: j.uA,
                                        children: [
                                            (0, i.jsxs)("div", {
                                                className: j._V,
                                                children: [en, Q ? null : (0, i.jsx)(E.A, { color: "always-white" })],
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: j.P9,
                                                children: [
                                                    (0, i.jsx)(d.m, {
                                                        __unsupportedReactNodeAsText: n.config.messages.questName,
                                                        shouldShow: null != F && null != V && F < V,
                                                        children: (0, i.jsx)(c.Heading, {
                                                            ref: z,
                                                            variant:
                                                                "lg" === R
                                                                    ? "heading-xxl/bold"
                                                                    : "sm" === R
                                                                      ? "heading-xl/bold"
                                                                      : "heading-lg/bold",
                                                            className: j.R_,
                                                            color: "always-white",
                                                            children: N.intl.format(N.t.EAYZAr, {
                                                                questName: n.config.messages.questName,
                                                            }),
                                                        }),
                                                    }),
                                                    (0, i.jsx)(c.Text, {
                                                        variant: "text-xs/normal",
                                                        color: "always-white",
                                                        children: J
                                                            ? N.intl.formatToPlainString(N.t.APddvF, {
                                                                  expirationDate: $,
                                                              })
                                                            : t
                                                              ? N.intl.formatToPlainString(N.t.v7xMw7, {
                                                                    expirationDate: Z,
                                                                })
                                                              : N.intl.formatToPlainString(N.t["pX+fmn"], {
                                                                    expirationDate: Z,
                                                                }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                        (0, i.jsxs)(s.animated.div, {
                            className: j._q,
                            style: { top: Y ? P.to({ range: [0, 1], output: [T.es / 2 - T.uR / 2, T.wl] }) : T.wl },
                            children: [
                                (0, i.jsx)(C.C, {
                                    questContent: r,
                                    quest: n,
                                    questContentPosition: k,
                                    shouldShowDisclosure: !0,
                                    hideLearnMore: Y,
                                    showShareLink: !t && Q,
                                    sourceQuestContent: U,
                                    children: (e) =>
                                        (0, i.jsx)(s.animated.div, {
                                            style: { opacity: (0, v.a)(P), visibility: w || M ? "inherit" : "hidden" },
                                            "aria-hidden": !w && !M,
                                            children: (0, i.jsx)(c.DUT, {
                                                ...e,
                                                className: j.P0,
                                                "aria-label": N.intl.string(N.t.DEoVWZ),
                                                children: (0, i.jsx)(c.jNK, { size: "md", color: o.A.colors.WHITE }),
                                            }),
                                        }),
                                }),
                                !(0, T.rW)(r) &&
                                    (0, i.jsx)(c.DUT, {
                                        onClick: et,
                                        className: j.P0,
                                        "aria-label": M ? N.intl.string(N.t.iTcuma) : N.intl.string(N.t.dcl9MQ),
                                        children: (0, i.jsx)(L, {
                                            style: { rotate: P.to({ range: [0, 1], output: [0, 180] }) },
                                            color: o.A.colors.WHITE,
                                        }),
                                    }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    };
