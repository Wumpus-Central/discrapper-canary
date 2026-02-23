n.d(t, { A: () => U }), n(134528), n(947204);
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(475539),
    o = n(417597),
    d = n(990078),
    c = n(582754),
    u = n(397927),
    m = n(765671),
    h = n(736653),
    x = n(496885),
    p = n(859703),
    g = n(341915),
    _ = n(245853),
    f = n(890687),
    b = n(590202),
    v = n(710969),
    j = n(792620),
    C = n(814793),
    A = n(988436),
    T = n(918338),
    S = n(270045),
    y = n(57718),
    E = n(398025),
    N = n(545986),
    I = n(516226),
    k = n(720875),
    R = n(654487),
    O = n(419367),
    w = n(652215),
    D = n(985018),
    M = n(627669);
function P(e) {
    let { children: t, variant: n = "default" } = e;
    return (0, a.jsx)("div", {
        className: l()(M.Io, { [M.tV]: "brand" === n, "theme-light": "default" === n }),
        children: (0, a.jsx)(u.Text, {
            variant: "eyebrow",
            color: "brand" === n ? "always-white" : "text-default",
            className: M.Xi,
            children: t,
        }),
    });
}
function L(e) {
    let { quest: t, errorHints: n, warningHints: s, isDarkTheme: l, sourceQuestContent: o } = e,
        { ref: d, height: c = 0 } = (0, m.Ay)([n]),
        h = t.userStatus?.completedAt != null,
        x = (0, f.Vn)(t),
        { type: p, hints: g } = i.useMemo(
            () =>
                h || x
                    ? { type: 2, hints: [] }
                    : n.length > 0
                      ? { type: 0, hints: n.map((e) => e.message) }
                      : s.length > 0
                        ? { type: 1, hints: s }
                        : { type: 2, hints: [] },
            [n, h, x, s],
        ),
        _ = 2 !== p,
        b = (0, u.zhh)({ opacity: +!!_, height: _ ? c : 0, config: O.N }),
        v = 0 === p ? u.EpV : u.mir,
        j = u.LU0.unsafe_rawColors.RED_345.css,
        C = 0 === p ? j : l ? u.LU0.colors.TEXT_DEFAULT : u.LU0.colors.WHITE;
    return (0, a.jsx)(r.animated.div, {
        style: { height: b.height, opacity: (0, E.a)(b.opacity) },
        children: (0, a.jsxs)("div", {
            ref: d,
            className: M.XZ,
            children: [
                (0, a.jsxs)("div", {
                    className: M.M5,
                    children: [
                        (0, a.jsx)(v, { size: "xs", color: C }),
                        (0, a.jsx)(u.Text, {
                            variant: "text-xs/medium",
                            color: l ? "text-muted" : "always-white",
                            children: g.at(0),
                        }),
                    ],
                }),
                0 === p &&
                    (0, a.jsx)(u.QWc, {
                        text: D.intl.string(D.t["yKJi+/"]),
                        onClick: () => (0, A.i)({ quest: t, errorHints: n, sourceQuestContent: o }),
                        variant: "always-white",
                        textVariant: "text-sm/semibold",
                    }),
            ],
        }),
    });
}
function U(e) {
    let {
            quest: t,
            isHovering: n,
            errorHints: s,
            warningHints: r,
            isVisibleInViewport: m,
            onCtxMenuClose: A,
            onCtxMenuOpen: E,
            onCtxMenuSelect: O,
            sourceQuestContent: U,
        } = e,
        B = (0, j.IO)(t),
        G = (0, h.Ay)(),
        F = ((0, c.Mw)(G) ? w.NJ8.DARK : w.NJ8.LIGHT) === w.NJ8.DARK,
        V = (0, f.LS)(t),
        W = t.userStatus?.claimedAt != null,
        H = (0, f.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" }),
        K = t.userStatus?.enrolledAt != null,
        z = t.userStatus?.completedAt != null,
        { onAssetLoadComplete: $ } = i.useContext(I.M),
        q = F ? "text-muted" : "always-white",
        Q = i.useCallback(() => {
            B &&
                (0, N.d5)({
                    quest: t,
                    questContent: g.uF.QUEST_HOME_DESKTOP,
                    sourceQuestContent: U,
                    sourceQuestContentCTA: b.Cy.QUEST_HOME_TILE_HEADER_WATCH_VIDEO,
                });
        }, [B, t, U]),
        Y = (0, o.bG)([p.A], () => p.A.getQuestHomeHeroConfig()),
        J = i.useMemo(() => null != Y && (0, C.I0)(Y, t.id), [Y, t.id]),
        X = _.wK.useConfig({ location: R.rE.QUESTS_CARD }),
        Z = X.enabled && X.variant === _.dF.NEXT_TO_CONTEXT_MENU_CTA,
        ee = (0, f.do)({
            quest: t,
            content: g.uF.QUEST_HOME_DESKTOP,
            ctaContent: b.Cy.CONTEXT_MENU_OPEN_GAME_LINK_EXP_TREATMENT_TWO,
            sourceQuestContent: U,
        });
    return (0, a.jsxs)("div", {
        className: M.kL,
        children: [
            (0, a.jsx)("div", {
                className: M.IC,
                children: (0, a.jsx)(T.A, {
                    quest: t,
                    isInteracting: n,
                    hideAssets: !m,
                    imageSize: { width: 1320, height: 370 },
                    containerClassName: M.l1,
                }),
            }),
            (0, a.jsx)("div", {
                className: l()(M.Lw, {
                    [M.So]: G === w.NJ8.LIGHT,
                    [M.en]: G === w.NJ8.DARK,
                    [M.FN]: G === w.NJ8.DARKER,
                    [M.QQ]: G === w.NJ8.MIDNIGHT,
                }),
            }),
            (0, a.jsxs)("div", {
                className: M.nX,
                children: [
                    (0, a.jsxs)("div", {
                        className: M.PG,
                        children: [
                            (0, a.jsxs)("div", {
                                className: M.mY,
                                children: [
                                    (J || t.preview) &&
                                        (0, a.jsxs)(u.BJc, {
                                            className: M.Bv,
                                            direction: "horizontal",
                                            fullWidth: !1,
                                            gap: 8,
                                            children: [
                                                J &&
                                                    !(0, v.Ic)(t) &&
                                                    (0, a.jsx)(P, { children: D.intl.string(D.t.Jt6u7B) }),
                                                t.preview &&
                                                    (0, a.jsx)(P, {
                                                        variant: "brand",
                                                        children: D.intl.string(D.t.SKNnqq),
                                                    }),
                                            ],
                                        }),
                                    Z &&
                                        (0, a.jsx)(u.DUT, {
                                            className: M.iI,
                                            onClick: ee,
                                            "aria-label": D.intl.string(D.t.wuRE8M),
                                            children: (0, a.jsx)(u.mir, { color: "currentColor", className: M.WB }),
                                        }),
                                    B &&
                                        !Z &&
                                        (0, a.jsx)(d.m, {
                                            text: z
                                                ? D.intl.string(D.t.YsCuyF)
                                                : K
                                                  ? D.intl.string(D.t["74KqrR"])
                                                  : (0, v.Ic)(t)
                                                    ? D.intl.string(D.t.I6JG46)
                                                    : D.intl.string(D.t.umdNin),
                                            asContainer: !0,
                                            tag: "span",
                                            children: (0, a.jsx)(u.DUT, {
                                                className: M.iI,
                                                "aria-label": D.intl.string(D.t.RscU7I),
                                                onClick: Q,
                                                children: (0, a.jsx)(u.udU, { color: "currentColor", className: M.A9 }),
                                            }),
                                        }),
                                    (0, a.jsx)(S.C, {
                                        onOpen: E,
                                        onClose: A,
                                        onSelect: O,
                                        questContent: g.uF.QUEST_HOME_DESKTOP,
                                        quest: t,
                                        hideLearnMore: !0,
                                        shouldShowDisclosure: !0,
                                        showShareLink: !0,
                                        sourceQuestContent: U,
                                        children: (e) =>
                                            (0, a.jsx)(u.DUT, {
                                                ...e,
                                                className: M.iI,
                                                "aria-label": D.intl.string(D.t.DEoVWZ),
                                                children: (0, a.jsx)(u.jNK, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: M.A9,
                                                }),
                                            }),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(k.A, {
                                showPlaceholder: !m,
                                width: 100,
                                height: 30,
                                className: M.Iu,
                                children: (0, a.jsx)(y.Ay, {
                                    className: M.Iu,
                                    logotypeClassName: M.ND,
                                    quest: t,
                                    separatorSpacing: y.C8.MEDIUM,
                                    withGameTile: !1,
                                    onLoadComplete: $,
                                }),
                            }),
                            (0, a.jsxs)("div", {
                                className: M.E_,
                                children: [
                                    (0, a.jsxs)("span", {
                                        className: M.O,
                                        children: [
                                            (0, a.jsx)(u.Text, {
                                                variant: "text-sm/medium",
                                                color: q,
                                                children: D.intl.string(D.t.VAbKhK),
                                            }),
                                            (0, a.jsx)(x.A, {
                                                className: M.w$,
                                                size: 16,
                                                color: u.LU0.unsafe_rawColors.GREEN_360.css,
                                                allowFullSizedIcon: !0,
                                                children: (0, a.jsx)(u.BNr, {
                                                    color: u.LU0.unsafe_rawColors.WHITE.css,
                                                    size: "custom",
                                                    width: 13,
                                                    height: 13,
                                                }),
                                            }),
                                            (0, a.jsx)(u.Text, {
                                                variant: "text-sm/medium",
                                                color: "always-white",
                                                children:
                                                    t.config.cosponsorMetadata?.name ?? t.config.messages.gamePublisher,
                                            }),
                                        ],
                                    }),
                                    V || W
                                        ? null
                                        : (0, a.jsx)(u.Text, {
                                              variant: "text-sm/medium",
                                              color: q,
                                              children: D.intl.format(D.t["7D8r4F"], { expiryDate: H }),
                                          }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsx)(L, { quest: t, errorHints: s, warningHints: r, isDarkTheme: F, sourceQuestContent: U }),
                ],
            }),
        ],
    });
}
