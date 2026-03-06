n.d(t, { A: () => B }), n(134528), n(947204);
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(380278),
    o = n(417597),
    d = n(990078),
    c = n(582754),
    u = n(397927),
    m = n(765671),
    h = n(736653),
    x = n(496885),
    p = n(178540),
    g = n(859703),
    _ = n(341915),
    f = n(245853),
    v = n(890687),
    b = n(590202),
    j = n(710969),
    A = n(792620),
    C = n(814793),
    y = n(988436),
    T = n(918338),
    S = n(270045),
    E = n(57718),
    N = n(398025),
    I = n(545986),
    k = n(516226),
    R = n(720875),
    O = n(654487),
    w = n(419367),
    D = n(652215),
    M = n(985018),
    P = n(679643);
function U(e) {
    let { children: t, variant: n = "default" } = e;
    return (0, a.jsx)("div", {
        className: l()(P.Io, { [P.tV]: "brand" === n, "theme-light": "default" === n }),
        children: (0, a.jsx)(u.Text, {
            variant: "eyebrow",
            color: "brand" === n ? "always-white" : "text-default",
            className: P.Xi,
            children: t,
        }),
    });
}
function L(e) {
    let { quest: t, errorHints: n, warningHints: s, isDarkTheme: l, sourceQuestContent: o } = e,
        { ref: d, height: c = 0 } = (0, m.Ay)([n]),
        h = t.userStatus?.completedAt != null,
        x = (0, v.Vn)(t),
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
        f = (0, u.zhh)({ opacity: +!!_, height: _ ? c : 0, config: w.N }),
        b = 0 === p ? u.EpV : u.mir,
        j = u.LU0.unsafe_rawColors.RED_345.css,
        A = 0 === p ? j : l ? u.LU0.colors.TEXT_DEFAULT : u.LU0.colors.WHITE;
    return (0, a.jsx)(r.animated.div, {
        style: { height: f.height, opacity: (0, N.a)(f.opacity) },
        children: (0, a.jsxs)("div", {
            ref: d,
            className: P.XZ,
            children: [
                (0, a.jsxs)("div", {
                    className: P.M5,
                    children: [
                        (0, a.jsx)(b, { size: "xs", color: A }),
                        (0, a.jsx)(u.Text, {
                            variant: "text-xs/medium",
                            color: l ? "text-muted" : "always-white",
                            children: g.at(0),
                        }),
                    ],
                }),
                0 === p &&
                    (0, a.jsx)(u.QWc, {
                        text: M.intl.string(M.t["yKJi+/"]),
                        onClick: () => (0, y.i)({ quest: t, errorHints: n, sourceQuestContent: o }),
                        variant: "always-white",
                        textVariant: "text-sm/semibold",
                    }),
            ],
        }),
    });
}
function B(e) {
    let {
            quest: t,
            isHovering: n,
            errorHints: s,
            warningHints: r,
            isVisibleInViewport: m,
            onCtxMenuClose: y,
            onCtxMenuOpen: N,
            onCtxMenuSelect: w,
            sourceQuestContent: B,
        } = e,
        G = (0, p.O)((e) => e.getErrorHints(t.id)),
        F = G.length > 0 ? G : s,
        V = (0, A.IO)(t),
        W = (0, h.Ay)(),
        H = ((0, c.Mw)(W) ? D.NJ8.DARK : D.NJ8.LIGHT) === D.NJ8.DARK,
        K = (0, v.LS)(t),
        z = t.userStatus?.claimedAt != null,
        $ = (0, v.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" }),
        q = t.userStatus?.enrolledAt != null,
        Q = t.userStatus?.completedAt != null,
        { onAssetLoadComplete: Y } = i.useContext(k.M),
        J = H ? "text-muted" : "always-white",
        X = i.useCallback(() => {
            V &&
                (0, I.d5)({
                    quest: t,
                    questContent: _.uF.QUEST_HOME_DESKTOP,
                    sourceQuestContent: B,
                    sourceQuestContentCTA: b.Cy.QUEST_HOME_TILE_HEADER_WATCH_VIDEO,
                });
        }, [V, t, B]),
        Z = (0, o.bG)([g.A], () => g.A.getQuestHomeHeroConfig()),
        ee = i.useMemo(() => null != Z && (0, C.I0)(Z, t.id), [Z, t.id]),
        et = f.wK.useConfig({ location: O.rE.QUESTS_CARD }),
        en = et.enabled && et.variant === f.dF.NEXT_TO_CONTEXT_MENU_CTA,
        ea = (0, v.do)({
            quest: t,
            content: _.uF.QUEST_HOME_DESKTOP,
            ctaContent: b.Cy.CONTEXT_MENU_OPEN_GAME_LINK_EXP_TREATMENT_TWO,
            sourceQuestContent: B,
        });
    return (0, a.jsxs)("div", {
        className: P.kL,
        children: [
            (0, a.jsx)("div", {
                className: P.IC,
                children: (0, a.jsx)(T.A, {
                    quest: t,
                    isInteracting: n,
                    hideAssets: !m,
                    imageSize: { width: 1320, height: 370 },
                    containerClassName: P.l1,
                }),
            }),
            (0, a.jsx)("div", {
                className: l()(P.Lw, {
                    [P.So]: W === D.NJ8.LIGHT,
                    [P.en]: W === D.NJ8.DARK,
                    [P.FN]: W === D.NJ8.DARKER,
                    [P.QQ]: W === D.NJ8.MIDNIGHT,
                }),
            }),
            (0, a.jsxs)("div", {
                className: P.nX,
                children: [
                    (0, a.jsxs)("div", {
                        className: P.PG,
                        children: [
                            (0, a.jsxs)("div", {
                                className: P.mY,
                                children: [
                                    (ee || t.preview) &&
                                        (0, a.jsxs)(u.BJc, {
                                            className: P.Bv,
                                            direction: "horizontal",
                                            fullWidth: !1,
                                            gap: 8,
                                            children: [
                                                ee &&
                                                    !(0, j.Ic)(t) &&
                                                    (0, a.jsx)(U, { children: M.intl.string(M.t.Jt6u7B) }),
                                                t.preview &&
                                                    (0, a.jsx)(U, {
                                                        variant: "brand",
                                                        children: M.intl.string(M.t.SKNnqq),
                                                    }),
                                            ],
                                        }),
                                    en &&
                                        (0, a.jsx)(u.DUT, {
                                            className: P.iI,
                                            onClick: ea,
                                            "aria-label": M.intl.string(M.t.wuRE8M),
                                            children: (0, a.jsx)(u.mir, { color: "currentColor", className: P.WB }),
                                        }),
                                    V &&
                                        !en &&
                                        (0, a.jsx)(d.m, {
                                            text: Q
                                                ? M.intl.string(M.t.YsCuyF)
                                                : q
                                                  ? M.intl.string(M.t["74KqrR"])
                                                  : (0, j.Ic)(t)
                                                    ? M.intl.string(M.t.I6JG46)
                                                    : M.intl.string(M.t.umdNin),
                                            asContainer: !0,
                                            tag: "span",
                                            children: (0, a.jsx)(u.DUT, {
                                                className: P.iI,
                                                "aria-label": M.intl.string(M.t.RscU7I),
                                                onClick: X,
                                                children: (0, a.jsx)(u.udU, { color: "currentColor", className: P.A9 }),
                                            }),
                                        }),
                                    (0, a.jsx)(S.C, {
                                        onOpen: N,
                                        onClose: y,
                                        onSelect: w,
                                        questContent: _.uF.QUEST_HOME_DESKTOP,
                                        quest: t,
                                        hideLearnMore: !0,
                                        shouldShowDisclosure: !0,
                                        showShareLink: !0,
                                        sourceQuestContent: B,
                                        children: (e) =>
                                            (0, a.jsx)(u.DUT, {
                                                ...e,
                                                className: P.iI,
                                                "aria-label": M.intl.string(M.t.DEoVWZ),
                                                children: (0, a.jsx)(u.jNK, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: P.A9,
                                                }),
                                            }),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(R.A, {
                                showPlaceholder: !m,
                                width: 100,
                                height: 30,
                                className: P.Iu,
                                children: (0, a.jsx)(E.Ay, {
                                    className: P.Iu,
                                    logotypeClassName: P.ND,
                                    quest: t,
                                    separatorSpacing: E.C8.MEDIUM,
                                    withGameTile: !1,
                                    onLoadComplete: Y,
                                }),
                            }),
                            (0, a.jsxs)("div", {
                                className: P.E_,
                                children: [
                                    (0, a.jsxs)("span", {
                                        className: P.O,
                                        children: [
                                            (0, a.jsx)(u.Text, {
                                                variant: "text-sm/medium",
                                                color: J,
                                                children: M.intl.string(M.t.VAbKhK),
                                            }),
                                            (0, a.jsx)(x.A, {
                                                className: P.w$,
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
                                    K || z
                                        ? null
                                        : (0, a.jsx)(u.Text, {
                                              variant: "text-sm/medium",
                                              color: J,
                                              children: M.intl.format(M.t["7D8r4F"], { expiryDate: $ }),
                                          }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsx)(L, { quest: t, errorHints: F, warningHints: r, isDarkTheme: H, sourceQuestContent: B }),
                ],
            }),
        ],
    });
}
