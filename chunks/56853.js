n.d(t, { A: () => B }), n(134528), n(947204);
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(4208),
    o = n(417597),
    d = n(990078),
    c = n(582754),
    u = n(397927),
    m = n(765671),
    h = n(736653),
    x = n(496885),
    p = n(178540),
    g = n(859703),
    f = n(341915),
    _ = n(12251),
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
    O = n(720875),
    R = n(654487),
    w = n(419367),
    D = n(652215),
    P = n(985018),
    M = n(389846);
function L(e) {
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
function U(e) {
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
        f = 2 !== p,
        _ = (0, u.zhh)({ opacity: +!!f, height: f ? c : 0, config: w.N }),
        b = 0 === p ? u.EpV : u.mir,
        j = u.LU0.unsafe_rawColors.RED_345.css,
        A = 0 === p ? j : l ? u.LU0.colors.TEXT_DEFAULT : u.LU0.colors.WHITE;
    return (0, a.jsx)(r.animated.div, {
        style: { height: _.height, opacity: (0, N.a)(_.opacity) },
        children: (0, a.jsxs)("div", {
            ref: d,
            className: M.XZ,
            children: [
                (0, a.jsxs)("div", {
                    className: M.M5,
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
                        text: P.intl.string(P.t["yKJi+/"]),
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
            warningHints: l,
            isVisibleInViewport: r,
            onCtxMenuClose: m,
            onCtxMenuOpen: y,
            onCtxMenuSelect: N,
            sourceQuestContent: w,
        } = e,
        B = (0, p.O)((e) => e.getErrorHints(t.id)),
        G = B.length > 0 ? B : s,
        F = (0, A.IO)(t),
        V = (0, h.Ay)(),
        W = ((0, c.Mw)(V) ? D.NJ8.DARK : D.NJ8.LIGHT) === D.NJ8.DARK,
        H = (0, v.LS)(t),
        K = t.userStatus?.claimedAt != null,
        z = (0, v.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" }),
        $ = t.userStatus?.enrolledAt != null,
        q = t.userStatus?.completedAt != null,
        { onAssetLoadComplete: Q } = i.useContext(k.M),
        Y = W ? "text-muted" : "always-white",
        J = i.useCallback(() => {
            F &&
                (0, I.d5)({
                    quest: t,
                    questContent: f.uF.QUEST_HOME_DESKTOP,
                    sourceQuestContent: w,
                    sourceQuestContentCTA: b.Cy.QUEST_HOME_TILE_HEADER_WATCH_VIDEO,
                });
        }, [F, t, w]),
        X = (0, o.bG)([g.A], () => g.A.getQuestHomeHeroConfig()),
        Z = i.useMemo(() => null != X && (0, C.I0)(X, t.id), [X, t.id]),
        ee = _.s5.useConfig({ location: R.rE.QUESTS_CARD }),
        et = ee.enabled && ee.variant === _.tL.INFO_ICON,
        en = (0, v.do)({
            quest: t,
            content: f.uF.QUEST_HOME_DESKTOP,
            ctaContent: b.Cy.LEARN_MORE_CTA_AND_EXPRESSIVE_BUTTON_TREATMENT_FOUR_OPEN_GAME_LINK,
            sourceQuestContent: w,
        });
    return (0, a.jsxs)("div", {
        className: M.kL,
        children: [
            (0, a.jsx)("div", {
                className: M.IC,
                children: (0, a.jsx)(T.A, {
                    quest: t,
                    isInteracting: n,
                    hideAssets: !r,
                    imageSize: { width: 1320, height: 370 },
                    containerClassName: M.l1,
                    imageClassName: M.c8,
                }),
            }),
            (0, a.jsx)("div", { className: M.Lw }),
            (0, a.jsxs)("div", {
                className: M.nX,
                children: [
                    (0, a.jsxs)("div", {
                        className: M.PG,
                        children: [
                            (0, a.jsxs)("div", {
                                className: M.mY,
                                children: [
                                    (Z || t.preview) &&
                                        (0, a.jsxs)(u.BJc, {
                                            className: M.Bv,
                                            direction: "horizontal",
                                            fullWidth: !1,
                                            gap: 8,
                                            children: [
                                                Z &&
                                                    !(0, j.Ic)(t) &&
                                                    (0, a.jsx)(L, { children: P.intl.string(P.t.Jt6u7B) }),
                                                t.preview &&
                                                    (0, a.jsx)(L, {
                                                        variant: "brand",
                                                        children: P.intl.string(P.t.SKNnqq),
                                                    }),
                                            ],
                                        }),
                                    et &&
                                        (0, a.jsx)(u.DUT, {
                                            className: M.iI,
                                            onClick: en,
                                            "aria-label": P.intl.string(P.t.wuRE8M),
                                            children: (0, a.jsx)(u.mir, { color: "currentColor", className: M.WB }),
                                        }),
                                    F &&
                                        !et &&
                                        (0, a.jsx)(d.m, {
                                            text: q
                                                ? P.intl.string(P.t.YsCuyF)
                                                : $
                                                  ? P.intl.string(P.t["74KqrR"])
                                                  : (0, j.Ic)(t)
                                                    ? P.intl.string(P.t.I6JG46)
                                                    : P.intl.string(P.t.umdNin),
                                            asContainer: !0,
                                            tag: "span",
                                            children: (0, a.jsx)(u.DUT, {
                                                className: M.iI,
                                                "aria-label": P.intl.string(P.t.RscU7I),
                                                onClick: J,
                                                children: (0, a.jsx)(u.udU, { color: "currentColor", className: M.A9 }),
                                            }),
                                        }),
                                    (0, a.jsx)(S.C, {
                                        onOpen: y,
                                        onClose: m,
                                        onSelect: N,
                                        questContent: f.uF.QUEST_HOME_DESKTOP,
                                        quest: t,
                                        hideLearnMore: !0,
                                        shouldShowDisclosure: !0,
                                        showShareLink: !0,
                                        sourceQuestContent: w,
                                        children: (e) =>
                                            (0, a.jsx)(u.DUT, {
                                                ...e,
                                                className: M.iI,
                                                "aria-label": P.intl.string(P.t.DEoVWZ),
                                                children: (0, a.jsx)(u.jNK, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: M.A9,
                                                }),
                                            }),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(O.A, {
                                showPlaceholder: !r,
                                width: 100,
                                height: 30,
                                className: M.Iu,
                                children: (0, a.jsx)(E.Ay, {
                                    className: M.Iu,
                                    logotypeClassName: M.ND,
                                    quest: t,
                                    separatorSpacing: E.C8.MEDIUM,
                                    withGameTile: !1,
                                    onLoadComplete: Q,
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
                                                color: Y,
                                                children: P.intl.string(P.t.VAbKhK),
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
                                    H || K
                                        ? null
                                        : (0, a.jsx)(u.Text, {
                                              variant: "text-sm/medium",
                                              color: Y,
                                              children: P.intl.format(P.t["7D8r4F"], { expiryDate: z }),
                                          }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsx)(U, { quest: t, errorHints: G, warningHints: l, isDarkTheme: W, sourceQuestContent: w }),
                ],
            }),
        ],
    });
}
