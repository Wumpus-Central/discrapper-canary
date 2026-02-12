n.d(t, { A: () => P }), n(134528), n(947204);
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(40153),
    o = n(417597),
    d = n(990078),
    c = n(582754),
    u = n(397927),
    m = n(765671),
    h = n(736653),
    x = n(496885),
    p = n(859703),
    g = n(341915),
    _ = n(890687),
    f = n(590202),
    v = n(710969),
    b = n(792620),
    j = n(814793),
    A = n(988436),
    C = n(918338),
    S = n(270045),
    T = n(57718),
    y = n(398025),
    E = n(545986),
    N = n(516226),
    I = n(720875),
    k = n(419367),
    R = n(652215),
    O = n(985018),
    w = n(627669);
function D(e) {
    let { children: t, variant: n = "default" } = e;
    return (0, a.jsx)("div", {
        className: l()(w.Io, { [w.tV]: "brand" === n, "theme-light": "default" === n }),
        children: (0, a.jsx)(u.Text, {
            variant: "eyebrow",
            color: "brand" === n ? "always-white" : "text-default",
            className: w.Xi,
            children: t,
        }),
    });
}
function M(e) {
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
        v = (0, u.zhh)({ opacity: +!!f, height: f ? c : 0, config: k.N }),
        b = 0 === p ? u.EpV : u.mir,
        j = u.LU0.unsafe_rawColors.RED_345.css,
        C = 0 === p ? j : l ? u.LU0.colors.TEXT_DEFAULT : u.LU0.colors.WHITE;
    return (0, a.jsx)(r.animated.div, {
        style: { height: v.height, opacity: (0, y.a)(v.opacity) },
        children: (0, a.jsxs)("div", {
            ref: d,
            className: w.XZ,
            children: [
                (0, a.jsxs)("div", {
                    className: w.M5,
                    children: [
                        (0, a.jsx)(b, { size: "xs", color: C }),
                        (0, a.jsx)(u.Text, {
                            variant: "text-xs/medium",
                            color: l ? "text-muted" : "always-white",
                            children: g.at(0),
                        }),
                    ],
                }),
                0 === p &&
                    (0, a.jsx)(u.QWc, {
                        text: O.intl.string(O.t["yKJi+/"]),
                        onClick: () => (0, A.i)({ quest: t, errorHints: n, sourceQuestContent: o }),
                        variant: "always-white",
                        textVariant: "text-sm/semibold",
                    }),
            ],
        }),
    });
}
function P(e) {
    let {
            quest: t,
            isHovering: n,
            errorHints: s,
            warningHints: r,
            isVisibleInViewport: m,
            onCtxMenuClose: A,
            onCtxMenuOpen: y,
            onCtxMenuSelect: k,
            sourceQuestContent: P,
        } = e,
        L = (0, b.IO)(t),
        U = (0, h.Ay)(),
        B = ((0, c.Mw)(U) ? R.NJ8.DARK : R.NJ8.LIGHT) === R.NJ8.DARK,
        G = (0, _.LS)(t),
        F = t.userStatus?.claimedAt != null,
        V = (0, _.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" }),
        W = t.userStatus?.enrolledAt != null,
        H = t.userStatus?.completedAt != null,
        { onAssetLoadComplete: K } = i.useContext(N.M),
        z = B ? "text-muted" : "always-white",
        $ = i.useCallback(() => {
            L &&
                (0, E.d5)({
                    quest: t,
                    questContent: g.uF.QUEST_HOME_DESKTOP,
                    sourceQuestContent: P,
                    sourceQuestContentCTA: f.Cy.QUEST_HOME_TILE_HEADER_WATCH_VIDEO,
                });
        }, [L, t, P]),
        q = (0, o.bG)([p.A], () => p.A.getQuestHomeTakeoverConfig()),
        Q = i.useMemo(() => null != q && (0, j.f0)(q, t.id), [q, t.id]);
    return (0, a.jsxs)("div", {
        className: w.kL,
        children: [
            (0, a.jsx)("div", {
                className: w.IC,
                children: (0, a.jsx)(C.A, {
                    quest: t,
                    isInteracting: n,
                    hideAssets: !m,
                    imageSize: { width: 1320, height: 370 },
                    containerClassName: w.l1,
                }),
            }),
            (0, a.jsx)("div", {
                className: l()(w.Lw, {
                    [w.So]: U === R.NJ8.LIGHT,
                    [w.en]: U === R.NJ8.DARK,
                    [w.FN]: U === R.NJ8.DARKER,
                    [w.QQ]: U === R.NJ8.MIDNIGHT,
                }),
            }),
            (0, a.jsxs)("div", {
                className: w.nX,
                children: [
                    (0, a.jsxs)("div", {
                        className: w.PG,
                        children: [
                            (0, a.jsxs)("div", {
                                className: w.mY,
                                children: [
                                    (Q || t.preview) &&
                                        (0, a.jsxs)(u.BJc, {
                                            className: w.Bv,
                                            direction: "horizontal",
                                            fullWidth: !1,
                                            gap: 8,
                                            children: [
                                                Q &&
                                                    !(0, v.Ic)(t) &&
                                                    (0, a.jsx)(D, { children: O.intl.string(O.t.Jt6u7B) }),
                                                t.preview &&
                                                    (0, a.jsx)(D, {
                                                        variant: "brand",
                                                        children: O.intl.string(O.t.SKNnqq),
                                                    }),
                                            ],
                                        }),
                                    L &&
                                        (0, a.jsx)(d.m, {
                                            text: H
                                                ? O.intl.string(O.t.YsCuyF)
                                                : W
                                                  ? O.intl.string(O.t["74KqrR"])
                                                  : (0, v.Ic)(t)
                                                    ? O.intl.string(O.t.I6JG46)
                                                    : O.intl.string(O.t.umdNin),
                                            asContainer: !0,
                                            tag: "span",
                                            children: (0, a.jsx)(u.DUT, {
                                                className: w.iI,
                                                "aria-label": O.intl.string(O.t.RscU7I),
                                                onClick: $,
                                                children: (0, a.jsx)(u.udU, { color: "currentColor", className: w.A9 }),
                                            }),
                                        }),
                                    (0, a.jsx)(S.C, {
                                        onOpen: y,
                                        onClose: A,
                                        onSelect: k,
                                        questContent: g.uF.QUEST_HOME_DESKTOP,
                                        quest: t,
                                        hideLearnMore: !0,
                                        shouldShowDisclosure: !0,
                                        showShareLink: !0,
                                        sourceQuestContent: P,
                                        children: (e) =>
                                            (0, a.jsx)(u.DUT, {
                                                ...e,
                                                className: w.iI,
                                                "aria-label": O.intl.string(O.t.DEoVWZ),
                                                children: (0, a.jsx)(u.jNK, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: w.A9,
                                                }),
                                            }),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(I.A, {
                                showPlaceholder: !m,
                                width: 100,
                                height: 30,
                                className: w.Iu,
                                children: (0, a.jsx)(T.Ay, {
                                    className: w.Iu,
                                    logotypeClassName: w.ND,
                                    quest: t,
                                    separatorSpacing: T.C8.MEDIUM,
                                    withGameTile: !1,
                                    onLoadComplete: K,
                                }),
                            }),
                            (0, a.jsxs)("div", {
                                className: w.E_,
                                children: [
                                    (0, a.jsxs)("span", {
                                        className: w.O,
                                        children: [
                                            (0, a.jsx)(u.Text, {
                                                variant: "text-sm/medium",
                                                color: z,
                                                children: O.intl.string(O.t.VAbKhK),
                                            }),
                                            (0, a.jsx)(x.A, {
                                                className: w.w$,
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
                                    G || F
                                        ? null
                                        : (0, a.jsx)(u.Text, {
                                              variant: "text-sm/medium",
                                              color: z,
                                              children: O.intl.format(O.t["7D8r4F"], { expiryDate: V }),
                                          }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsx)(M, { quest: t, errorHints: s, warningHints: r, isDarkTheme: B, sourceQuestContent: P }),
                ],
            }),
        ],
    });
}
