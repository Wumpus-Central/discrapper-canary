n.d(t, { A: () => L }), n(134528), n(947204);
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(687498),
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
    _ = n(890687),
    v = n(590202),
    b = n(710969),
    j = n(792620),
    A = n(814793),
    C = n(988436),
    y = n(918338),
    S = n(270045),
    T = n(57718),
    E = n(398025),
    N = n(545986),
    I = n(516226),
    k = n(720875),
    O = n(419367),
    R = n(652215),
    w = n(985018),
    D = n(389846);
function M(e) {
    let { children: t, variant: n = "default" } = e;
    return (0, a.jsx)("div", {
        className: l()(D.Io, { [D.tV]: "brand" === n, "theme-light": "default" === n }),
        children: (0, a.jsx)(u.Text, {
            variant: "eyebrow",
            color: "brand" === n ? "always-white" : "text-default",
            className: D.Xi,
            children: t,
        }),
    });
}
function P(e) {
    let { quest: t, errorHints: n, warningHints: s, isDarkTheme: l, sourceQuestContent: o } = e,
        { ref: d, height: c = 0 } = (0, m.Ay)([n]),
        h = t.userStatus?.completedAt != null,
        x = (0, _.Vn)(t),
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
        v = (0, u.zhh)({ opacity: +!!f, height: f ? c : 0, config: O.N }),
        b = 0 === p ? u.EpV : u.mir,
        j = u.LU0.unsafe_rawColors.RED_345.css,
        A = 0 === p ? j : l ? u.LU0.colors.TEXT_DEFAULT : u.LU0.colors.WHITE;
    return (0, a.jsx)(r.animated.div, {
        style: { height: v.height, opacity: (0, E.a)(v.opacity) },
        children: (0, a.jsxs)("div", {
            ref: d,
            className: D.XZ,
            children: [
                (0, a.jsxs)("div", {
                    className: D.M5,
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
                        text: w.intl.string(w.t["yKJi+/"]),
                        onClick: () => (0, C.i)({ quest: t, errorHints: n, sourceQuestContent: o }),
                        variant: "always-white",
                        textVariant: "text-sm/semibold",
                    }),
            ],
        }),
    });
}
function L(e) {
    let {
            quest: t,
            isHovering: n,
            errorHints: s,
            warningHints: l,
            isVisibleInViewport: r,
            onCtxMenuClose: m,
            onCtxMenuOpen: C,
            onCtxMenuSelect: E,
            sourceQuestContent: O,
        } = e,
        L = (0, p.O)((e) => e.getErrorHints(t.id)),
        U = L.length > 0 ? L : s,
        B = (0, j.IO)(t),
        G = (0, h.Ay)(),
        F = ((0, c.Mw)(G) ? R.NJ8.DARK : R.NJ8.LIGHT) === R.NJ8.DARK,
        V = (0, _.LS)(t),
        W = t.userStatus?.claimedAt != null,
        H = (0, _.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" }),
        K = t.userStatus?.enrolledAt != null,
        z = t.userStatus?.completedAt != null,
        { onAssetLoadComplete: $ } = i.useContext(I.M),
        q = F ? "text-muted" : "always-white",
        Y = i.useCallback(() => {
            B &&
                (0, N.d5)({
                    quest: t,
                    questContent: f.uF.QUEST_HOME_DESKTOP,
                    sourceQuestContent: O,
                    sourceQuestContentCTA: v.Cy.QUEST_HOME_TILE_HEADER_WATCH_VIDEO,
                });
        }, [B, t, O]),
        Q = (0, o.bG)([g.A], () => g.A.getQuestHomeHeroConfig()),
        J = i.useMemo(() => null != Q && (0, A.I0)(Q, t.id), [Q, t.id]);
    return (0, a.jsxs)("div", {
        className: D.kL,
        children: [
            (0, a.jsx)("div", {
                className: D.IC,
                children: (0, a.jsx)(y.A, {
                    quest: t,
                    isInteracting: n,
                    hideAssets: !r,
                    imageSize: { width: 1320, height: 370 },
                    containerClassName: D.l1,
                    imageClassName: D.c8,
                }),
            }),
            (0, a.jsx)("div", { className: D.Lw }),
            (0, a.jsxs)("div", {
                className: D.nX,
                children: [
                    (0, a.jsxs)("div", {
                        className: D.PG,
                        children: [
                            (0, a.jsxs)("div", {
                                className: D.mY,
                                children: [
                                    (J || t.preview) &&
                                        (0, a.jsxs)(u.BJc, {
                                            className: D.Bv,
                                            direction: "horizontal",
                                            fullWidth: !1,
                                            gap: 8,
                                            children: [
                                                J &&
                                                    !(0, b.Ic)(t) &&
                                                    (0, a.jsx)(M, { children: w.intl.string(w.t.Jt6u7B) }),
                                                t.preview &&
                                                    (0, a.jsx)(M, {
                                                        variant: "brand",
                                                        children: w.intl.string(w.t.SKNnqq),
                                                    }),
                                            ],
                                        }),
                                    B &&
                                        (0, a.jsx)(d.m, {
                                            text: z
                                                ? w.intl.string(w.t.YsCuyF)
                                                : K
                                                  ? w.intl.string(w.t["74KqrR"])
                                                  : (0, b.Ic)(t)
                                                    ? w.intl.string(w.t.I6JG46)
                                                    : w.intl.string(w.t.umdNin),
                                            asContainer: !0,
                                            tag: "span",
                                            children: (0, a.jsx)(u.DUT, {
                                                className: D.iI,
                                                "aria-label": w.intl.string(w.t.RscU7I),
                                                onClick: Y,
                                                children: (0, a.jsx)(u.udU, { color: "currentColor", className: D.A9 }),
                                            }),
                                        }),
                                    (0, a.jsx)(S.C, {
                                        onOpen: C,
                                        onClose: m,
                                        onSelect: E,
                                        questContent: f.uF.QUEST_HOME_DESKTOP,
                                        quest: t,
                                        hideLearnMore: !0,
                                        shouldShowDisclosure: !0,
                                        showShareLink: !0,
                                        sourceQuestContent: O,
                                        children: (e) =>
                                            (0, a.jsx)(u.DUT, {
                                                ...e,
                                                className: D.iI,
                                                "aria-label": w.intl.string(w.t.DEoVWZ),
                                                children: (0, a.jsx)(u.jNK, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: D.A9,
                                                }),
                                            }),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(k.A, {
                                showPlaceholder: !r,
                                width: 100,
                                height: 30,
                                className: D.Iu,
                                children: (0, a.jsx)(T.Ay, {
                                    className: D.Iu,
                                    logotypeClassName: D.ND,
                                    quest: t,
                                    separatorSpacing: T.C8.MEDIUM,
                                    withGameTile: !1,
                                    onLoadComplete: $,
                                }),
                            }),
                            (0, a.jsxs)("div", {
                                className: D.E_,
                                children: [
                                    (0, a.jsxs)("span", {
                                        className: D.O,
                                        children: [
                                            (0, a.jsx)(u.Text, {
                                                variant: "text-sm/medium",
                                                color: q,
                                                children: w.intl.string(w.t.VAbKhK),
                                            }),
                                            (0, a.jsx)(x.A, {
                                                className: D.w$,
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
                                              children: w.intl.format(w.t["7D8r4F"], { expiryDate: H }),
                                          }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsx)(P, { quest: t, errorHints: U, warningHints: l, isDarkTheme: F, sourceQuestContent: O }),
                ],
            }),
        ],
    });
}
