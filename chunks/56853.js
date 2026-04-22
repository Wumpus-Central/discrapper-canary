s.d(t, { A: () => $ }), s(134528), s(947204);
var n = s(627968),
    i = s(64700),
    a = s(503698),
    l = s.n(a),
    r = s(517738),
    o = s(417597),
    c = s(990078),
    u = s(462887),
    d = s(834730),
    x = s(717421),
    m = s(695366),
    h = s(885574),
    C = s(827734),
    j = s(123292),
    E = s(331322),
    f = s(939249),
    v = s(782134),
    N = s(365199),
    g = s(820081),
    A = s(765671),
    O = s(736653),
    p = s(496885),
    y = s(178540),
    S = s(859703),
    T = s(341915),
    I = s(890687),
    _ = s(590202),
    w = s(710969),
    Q = s(792620),
    q = s(814793),
    L = s(988436),
    b = s(918338),
    k = s(270045),
    R = s(57718),
    D = s(398025),
    M = s(545986),
    z = s(516226),
    P = s(720875),
    U = s(419367),
    H = s(652215),
    W = s(985018),
    F = s(368774);
function V(e) {
    let { children: t, variant: s = "default" } = e;
    return (0, n.jsx)("div", {
        className: l()(F.Io, { [F.tV]: "brand" === s, "theme-light": "default" === s }),
        children: (0, n.jsx)(d.E, {
            variant: "eyebrow",
            color: "brand" === s ? "always-white" : "text-default",
            className: F.Xi,
            children: t,
        }),
    });
}
function K(e) {
    let { quest: t, errorHints: s, warningHints: a, isDarkTheme: l, sourceQuestContent: o } = e,
        { ref: c, height: u = 0 } = (0, A.Ay)([s]),
        E = t.userStatus?.completedAt != null,
        f = (0, I.Vn)(t),
        { type: v, hints: N } = i.useMemo(
            () =>
                E || f
                    ? { type: 2, hints: [] }
                    : s.length > 0
                      ? { type: 0, hints: s.map((e) => e.message) }
                      : a.length > 0
                        ? { type: 1, hints: a }
                        : { type: 2, hints: [] },
            [s, E, f, a],
        ),
        g = 2 !== v,
        O = (0, x.z)({ opacity: +!!g, height: g ? u : 0, config: U.N }),
        p = 0 === v ? m.E : h.m,
        y = C.A.unsafe_rawColors.RED_345.css,
        S = 0 === v ? y : l ? C.A.colors.TEXT_DEFAULT : C.A.colors.WHITE;
    return (0, n.jsx)(r.animated.div, {
        style: { height: O.height, opacity: (0, D.a)(O.opacity) },
        children: (0, n.jsxs)("div", {
            ref: c,
            className: F.XZ,
            children: [
                (0, n.jsxs)("div", {
                    className: F.M5,
                    children: [
                        (0, n.jsx)(p, { size: "xs", color: S }),
                        (0, n.jsx)(d.E, {
                            variant: "text-xs/medium",
                            color: l ? "text-muted" : "always-white",
                            children: N.at(0),
                        }),
                    ],
                }),
                0 === v &&
                    (0, n.jsx)(j.Q, {
                        text: W.intl.string(W.t["yKJi+/"]),
                        onClick: () => (0, L.i)({ quest: t, errorHints: s, sourceQuestContent: o }),
                        variant: "always-white",
                        textVariant: "text-sm/semibold",
                    }),
            ],
        }),
    });
}
function $(e) {
    let {
            quest: t,
            isHovering: s,
            errorHints: a,
            warningHints: l,
            isVisibleInViewport: r,
            onCtxMenuClose: x,
            onCtxMenuOpen: m,
            onCtxMenuSelect: h,
            sourceQuestContent: j,
        } = e,
        A = (0, y.O)((e) => e.getErrorHints(t.id)),
        L = A.length > 0 ? A : a,
        D = (0, Q.IO)(t),
        U = (0, O.Ay)(),
        $ = ((0, u.M)(U) ? H.NJ8.DARK : H.NJ8.LIGHT) === H.NJ8.DARK,
        B = (0, I.LS)(t),
        G = t.userStatus?.claimedAt != null,
        X = (0, I.S5)(t.config.expiresAt, { month: "numeric", day: "numeric" }),
        Y = t.userStatus?.enrolledAt != null,
        J = t.userStatus?.completedAt != null,
        { onAssetLoadComplete: Z } = i.useContext(z.M),
        ee = $ ? "text-muted" : "always-white",
        et = i.useCallback(() => {
            D &&
                (0, M.d5)({
                    quest: t,
                    questContent: T.uF.QUEST_HOME_DESKTOP,
                    sourceQuestContent: j,
                    sourceQuestContentCTA: _.Cy.QUEST_HOME_TILE_HEADER_WATCH_VIDEO,
                });
        }, [D, t, j]),
        es = (0, o.bG)([S.A], () => S.A.getQuestHomeHero()),
        en = i.useMemo(() => null != es && (0, q.I0)(es, t.id), [es, t.id]);
    return (0, n.jsxs)("div", {
        className: F.kL,
        children: [
            (0, n.jsx)("div", {
                className: F.IC,
                children: (0, n.jsx)(b.A, {
                    quest: t,
                    isInteracting: s,
                    hideAssets: !r,
                    imageSize: { width: 1320, height: 370 },
                    containerClassName: F.l1,
                    imageClassName: F.c8,
                }),
            }),
            (0, n.jsx)("div", { className: F.Lw }),
            (0, n.jsxs)("div", {
                className: F.nX,
                children: [
                    (0, n.jsxs)("div", {
                        className: F.PG,
                        children: [
                            (0, n.jsxs)("div", {
                                className: F.mY,
                                children: [
                                    (en || t.preview) &&
                                        (0, n.jsxs)(E.B, {
                                            className: F.Bv,
                                            direction: "horizontal",
                                            fullWidth: !1,
                                            gap: 8,
                                            children: [
                                                en &&
                                                    !(0, w.Ic)(t) &&
                                                    (0, n.jsx)(V, { children: W.intl.string(W.t.Jt6u7B) }),
                                                t.preview &&
                                                    (0, n.jsx)(V, {
                                                        variant: "brand",
                                                        children: W.intl.string(W.t.SKNnqq),
                                                    }),
                                            ],
                                        }),
                                    D &&
                                        (0, n.jsx)(c.m, {
                                            text: J
                                                ? W.intl.string(W.t.YsCuyF)
                                                : Y
                                                  ? W.intl.string(W.t["74KqrR"])
                                                  : (0, w.Ic)(t)
                                                    ? W.intl.string(W.t.I6JG46)
                                                    : W.intl.string(W.t.umdNin),
                                            asContainer: !0,
                                            tag: "span",
                                            children: (0, n.jsx)(f.D, {
                                                className: F.iI,
                                                "aria-label": W.intl.string(W.t.RscU7I),
                                                onClick: et,
                                                children: (0, n.jsx)(v.u, { color: "currentColor", className: F.A9 }),
                                            }),
                                        }),
                                    (0, n.jsx)(k.C, {
                                        onOpen: m,
                                        onClose: x,
                                        onSelect: h,
                                        questContent: T.uF.QUEST_HOME_DESKTOP,
                                        quest: t,
                                        hideLearnMore: !0,
                                        shouldShowDisclosure: !0,
                                        showShareLink: !0,
                                        sourceQuestContent: j,
                                        children: (e) =>
                                            (0, n.jsx)(f.D, {
                                                ...e,
                                                className: F.iI,
                                                "aria-label": W.intl.string(W.t.DEoVWZ),
                                                children: (0, n.jsx)(N.j, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: F.A9,
                                                }),
                                            }),
                                    }),
                                ],
                            }),
                            (0, n.jsx)(P.A, {
                                showPlaceholder: !r,
                                width: 100,
                                height: 30,
                                className: F.Iu,
                                children: (0, n.jsx)(R.Ay, {
                                    className: F.Iu,
                                    logotypeClassName: F.ND,
                                    quest: t,
                                    separatorSpacing: R.C8.MEDIUM,
                                    withGameTile: !1,
                                    onLoadComplete: Z,
                                }),
                            }),
                            (0, n.jsxs)("div", {
                                className: F.E_,
                                children: [
                                    (0, n.jsxs)("span", {
                                        className: F.O,
                                        children: [
                                            (0, n.jsx)(d.E, {
                                                variant: "text-sm/medium",
                                                color: ee,
                                                children: W.intl.string(W.t.VAbKhK),
                                            }),
                                            (0, n.jsx)(p.A, {
                                                className: F.w$,
                                                size: 16,
                                                color: C.A.unsafe_rawColors.GREEN_360.css,
                                                allowFullSizedIcon: !0,
                                                children: (0, n.jsx)(g.B, {
                                                    color: C.A.unsafe_rawColors.WHITE.css,
                                                    size: "custom",
                                                    width: 13,
                                                    height: 13,
                                                }),
                                            }),
                                            (0, n.jsx)(d.E, {
                                                variant: "text-sm/medium",
                                                color: "always-white",
                                                children:
                                                    t.config.cosponsorMetadata?.name ?? t.config.messages.gamePublisher,
                                            }),
                                        ],
                                    }),
                                    B || G
                                        ? null
                                        : (0, n.jsx)(d.E, {
                                              variant: "text-sm/medium",
                                              color: ee,
                                              children: W.intl.format(W.t["7D8r4F"], { expiryDate: X }),
                                          }),
                                ],
                            }),
                        ],
                    }),
                    (0, n.jsx)(K, { quest: t, errorHints: L, warningHints: l, isDarkTheme: $, sourceQuestContent: j }),
                ],
            }),
        ],
    });
}
