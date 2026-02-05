n.d(t, { A: () => L });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(563495),
    o = n(827734),
    d = n(990078),
    c = n(397927),
    u = n(765671),
    m = n(770178),
    _ = n(765548),
    h = n(341915),
    p = n(714510),
    g = n(890687),
    A = n(18437),
    f = n(590202),
    x = n(918338),
    E = n(270045),
    C = n(57718),
    I = n(847641),
    T = n(646764),
    v = n(398025),
    N = n(433745),
    S = n(654487),
    b = n(818348),
    y = n(985018),
    j = n(806449);
let R = (0, s.animated)(c.abt),
    L = (e) => {
        let {
                isQuestExpired: t,
                quest: n,
                location: a,
                size: L,
                expansionSpring: M,
                isAnimating: O,
                isExpanded: P,
                isInteracting: D,
                contentPosition: k,
                toggleExpanded: U,
                sourceQuestContent: w,
            } = e,
            { ref: G, height: B } = (0, u.Ay)(),
            [F, H] = l.useState(null),
            [V, z] = l.useState(null),
            W = (0, _.A)((e) => {
                let t = e.target;
                H(t.offsetWidth), z(t.scrollWidth);
            }),
            Y = (0, m.w)(W),
            q = (0, N.a3)(a),
            K = a === h.uF.QUESTS_EMBED,
            Q = (0, p.wT)(n, S.rE.QUESTS_CARD, a, w),
            J = n.userStatus?.completedAt != null,
            X = (0, A.Ut)(),
            Z = (0, g.S5)(n.config.expiresAt),
            $ = (0, g.S5)(n.config.rewardsConfig.rewardsExpireAt),
            ee = l.useMemo(() => null != n.config.cosponsorMetadata, [n]),
            et = (e) => {
                e.stopPropagation(),
                    e.currentTarget.blur(),
                    U(),
                    X({
                        questId: n.id,
                        questContent: a,
                        questContentCTA: P ? f.Cy.COLLAPSE : f.Cy.EXPAND,
                        questContentPosition: k,
                        sourceQuestContent: w,
                    });
            },
            en = (0, i.jsx)(C.Ay, {
                className: j.Iu,
                logotypeClassName: ee ? j.qN : void 0,
                gameTileSize: C.LU.MEDIUM,
                quest: n,
                separatorSpacing: C.C8.MEDIUM,
                theme: b.NJ.DARK,
                withGameTile: !K || null == n.config.cosponsorMetadata,
            });
        return (0, i.jsxs)("div", {
            className: r()(j.nw, { [j.fu]: q, [j.Gg]: K, [j.e5]: "xs" === L }),
            "aria-label": y.intl.string(y.t.dcl9MQ),
            style: { height: q ? B : void 0 },
            children: [
                (0, i.jsx)(x.A, {
                    quest: n,
                    isInteracting: D,
                    containerClassName: j.v7,
                    imageSize: { width: 660, height: 185 },
                    imageClassName: j.Z5,
                }),
                (0, i.jsxs)("div", {
                    className: j.wx,
                    "aria-expanded": P,
                    children: [
                        (0, i.jsxs)(s.animated.div, {
                            className: r()(j.VW, { [j.eX]: K }),
                            style: { y: q ? M.to({ range: [0, 1], output: [N.es, 0] }) : void 0 },
                            children: [
                                q &&
                                    (0, i.jsx)(s.animated.div, {
                                        className: j.gM,
                                        style: {
                                            opacity: (0, v.a)(M.to({ range: [0, 1], output: [1, 0] })),
                                            visibility: O || !P ? "inherit" : "hidden",
                                        },
                                        "aria-hidden": !O && P,
                                        children: (0, i.jsxs)(c.sqX, {
                                            "aria-label": y.intl.string(y.t.dcl9MQ),
                                            onClick: et,
                                            className: j._F,
                                            children: [
                                                (0, i.jsx)("div", {
                                                    className: j.SY,
                                                    children: (0, i.jsx)(T.A, {
                                                        quest: n,
                                                        questContent: a,
                                                        className: j.EK,
                                                        sourceQuestContent: w,
                                                    }),
                                                }),
                                                (0, i.jsxs)("div", {
                                                    className: j.if,
                                                    children: [
                                                        (0, i.jsxs)("div", {
                                                            className: j.dc,
                                                            children: [en, (0, i.jsx)(I.A, { color: "always-white" })],
                                                        }),
                                                        (0, i.jsx)(c.Text, { variant: "text-xs/medium", children: Q }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    }),
                                (0, i.jsx)(s.animated.div, {
                                    ref: (e) => {
                                        G.current = e;
                                    },
                                    className: r()(j.Yu, { [j.fu]: q, [j.Gg]: K }),
                                    style: {
                                        opacity: (0, v.a)(M.to({ range: [0, 1], output: [0, 1] })),
                                        visibility: O || P ? "inherit" : "hidden",
                                    },
                                    "aria-hidden": !O && !P,
                                    children: (0, i.jsxs)("div", {
                                        className: j.uA,
                                        children: [
                                            (0, i.jsxs)("div", {
                                                className: j._V,
                                                children: [en, K ? null : (0, i.jsx)(I.A, { color: "always-white" })],
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: j.P9,
                                                children: [
                                                    (0, i.jsx)(d.m, {
                                                        __unsupportedReactNodeAsText: n.config.messages.questName,
                                                        shouldShow: null != F && null != V && F < V,
                                                        children: (0, i.jsx)(c.Heading, {
                                                            ref: Y,
                                                            variant:
                                                                "lg" === L
                                                                    ? "heading-xxl/bold"
                                                                    : "sm" === L
                                                                      ? "heading-xl/bold"
                                                                      : "heading-lg/bold",
                                                            className: j.R_,
                                                            color: "always-white",
                                                            children: y.intl.format(y.t.EAYZAr, {
                                                                questName: n.config.messages.questName,
                                                            }),
                                                        }),
                                                    }),
                                                    (0, i.jsx)(c.Text, {
                                                        variant: "text-xs/normal",
                                                        color: "always-white",
                                                        children: J
                                                            ? y.intl.formatToPlainString(y.t.APddvF, {
                                                                  expirationDate: $,
                                                              })
                                                            : t
                                                              ? y.intl.formatToPlainString(y.t.v7xMw7, {
                                                                    expirationDate: Z,
                                                                })
                                                              : y.intl.formatToPlainString(y.t["pX+fmn"], {
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
                            style: { top: q ? M.to({ range: [0, 1], output: [N.es / 2 - N.uR / 2, N.wl] }) : N.wl },
                            children: [
                                (0, i.jsx)(E.C, {
                                    questContent: a,
                                    quest: n,
                                    questContentPosition: k,
                                    shouldShowDisclosure: !0,
                                    hideLearnMore: q,
                                    showShareLink: !t && K,
                                    sourceQuestContent: w,
                                    children: (e) =>
                                        (0, i.jsx)(s.animated.div, {
                                            style: { opacity: (0, v.a)(M), visibility: O || P ? "inherit" : "hidden" },
                                            "aria-hidden": !O && !P,
                                            children: (0, i.jsx)(c.DUT, {
                                                ...e,
                                                className: j.P0,
                                                "aria-label": y.intl.string(y.t.DEoVWZ),
                                                children: (0, i.jsx)(c.jNK, { size: "md", color: o.A.colors.WHITE }),
                                            }),
                                        }),
                                }),
                                !(0, N.rW)(a) &&
                                    (0, i.jsx)(c.DUT, {
                                        onClick: et,
                                        className: j.P0,
                                        "aria-label": P ? y.intl.string(y.t.iTcuma) : y.intl.string(y.t.dcl9MQ),
                                        children: (0, i.jsx)(R, {
                                            style: { rotate: M.to({ range: [0, 1], output: [0, 180] }) },
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
