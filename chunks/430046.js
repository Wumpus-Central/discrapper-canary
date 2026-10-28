n.d(t, { A: () => et });
var l = n(477900),
    r = n(582128),
    s = n(503698),
    a = n.n(s),
    i = n(323889),
    o = n(939249),
    u = n(834730),
    c = n(290136),
    d = n(661531),
    m = n(365199),
    p = n(738822),
    x = n(291749),
    h = n(590202),
    f = n(971649),
    C = n(620954),
    v = n(617986),
    g = n(139210),
    N = n(980707),
    A = n(477782),
    y = n(743368),
    j = n(265872),
    E = n(442433),
    _ = n(507395),
    T = n(144779),
    R = n(494280),
    B = n(845890),
    Q = n(963713),
    b = n(818348),
    S = n(105292);
function I(e) {
    let { onSelect: t, onClose: n } = e,
        r = (0, Q.o5)(),
        s = (0, Q.Q8)(r),
        a = (0, f.wW)(),
        o = (0, R.Yh)(s);
    return (0, l.jsxs)(N.W, {
        "data-menu-migrated": !0,
        variant: "fixed",
        onSelect: function () {
            null != t ? t() : (0, E.Z_)();
        },
        navId: "quest-bar-bounty",
        "aria-label": S.intl.string(S.t.ogxXGq),
        onClose: n ?? b.tE,
        children: [
            (0, l.jsx)(
                A.rX,
                {
                    children: (0, l.jsx)(A.Dr, {
                        id: "open-game-link",
                        label: r.cta.buttonLabel,
                        action: function () {
                            (0, C._Q)(
                                { adContentId: r.id, adCreativeType: i.p.BOUNTY, cta: r.cta },
                                {
                                    content: p.uF.QUEST_BAR_V2,
                                    ctaContent: h.Cy.CONTEXT_MENU_OPEN_GAME_LINK,
                                    impressionId: a(),
                                    sourceQuestContent: p.uF.QUEST_BAR_V2,
                                },
                            );
                        },
                        icon: y.W,
                        leadingAccessory: { type: "icon", icon: y.W },
                    }),
                },
                "major-actions",
            ),
            (0, l.jsxs)(
                A.rX,
                {
                    children: [
                        (0, l.jsx)(A.Dr, {
                            id: "display-disclosure",
                            label: S.intl.string(S.t.GcsZKJ),
                            action: function () {
                                (0, v.Zc)(s, {
                                    content: p.uF.QUEST_BAR_V2,
                                    ctaContent: h.Cy.CONTEXT_MENU_OPEN_DISCLOSURE,
                                    impressionId: a(),
                                    sourceQuestContent: p.uF.QUEST_BAR_V2,
                                });
                            },
                        }),
                        (0, l.jsx)(A.Dr, {
                            id: "hide-entrypoint",
                            label: S.intl.string(S.t.NN79E9),
                            action: function () {
                                ((0, _.r)({
                                    type: T.F.CLICK_INTERNAL,
                                    ...o,
                                    questContentCTA: h.Cy.CONTEXT_MENU_HIDE_CONTENT,
                                    surfaceId: p.uF.QUEST_BAR_V2,
                                    sourceQuestContent: p.uF.QUEST_BAR_V2,
                                    impressionId: a(),
                                }),
                                    (0, B.Xo)(o, p.uF.QUEST_BAR_V2));
                            },
                        }),
                    ],
                },
                "minor-actions",
            ),
        ],
    });
}
function U(e) {
    let { children: t, onOpen: n, onClose: s, onSelect: a } = e,
        i = (0, Q.o5)(),
        o = (0, Q.Q8)(i),
        u = (0, f.wW)(),
        c = r.useRef(null),
        d = r.useCallback(() => {
            ((0, _.r)({
                type: T.F.CLICK_INTERNAL,
                ...(0, R.Yh)(o),
                questContentCTA: h.Cy.OPEN_CONTEXT_MENU,
                surfaceId: p.uF.QUEST_BAR_V2,
                sourceQuestContent: p.uF.QUEST_BAR_V2,
                impressionId: u(),
            }),
                null != n && n());
        }, [o, u, n]);
    return (0, l.jsx)(j.Y, {
        targetElementRef: c,
        onRequestOpen: d,
        onRequestClose: s,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(I, { onSelect: a, onClose: t });
        },
        animation: j.Y.Animation.NONE,
        children: (e) => (0, l.jsx)("div", { ref: c, children: t(e) }),
    });
}
var M = n(241762);
n(272111);
var w = n(886030);
function F() {
    let e = (0, Q.o5)(),
        t = (0, Q.Q8)(e),
        n = (0, f.wW)(),
        {
            onCtxMenuOpen: s,
            onCtxMenuClose: N,
            onCtxMenuSelect: A,
            isExpanded: y,
            isExpansionAnimationComplete: j,
        } = (0, M.H)(),
        { productIcon: E } = e,
        _ = r.useCallback(() => {
            (0, v.Zc)(t, {
                content: p.uF.QUEST_BAR_V2,
                ctaContent: h.Cy.OPEN_DISCLOSURE,
                sourceQuestContent: p.uF.QUEST_BAR_V2,
            });
        }, [t]),
        T = r.useCallback(() => {
            (0, C._Q)(
                { adContentId: e.id, adCreativeType: i.p.BOUNTY, cta: e.cta },
                {
                    content: p.uF.QUEST_BAR_HEADER,
                    ctaContent: h.Cy.OPEN_GAME_LINK,
                    impressionId: n(),
                    sourceQuestContent: p.uF.QUEST_BAR_V2,
                },
            );
        }, [e.cta, e.id, n]);
    return (0, l.jsxs)(g.A, {
        className: w.bU,
        children: [
            (0, l.jsx)(g.h, { className: w.Tu }),
            (0, l.jsxs)(g.h, {
                className: w.W2,
                children: [
                    null != E &&
                        (0, l.jsx)(o.D, {
                            onClick: T,
                            className: a()(w.iY, w.vk, { [w.wm]: y && j }),
                            children: (0, l.jsx)("img", {
                                src: (0, x.lR)({ assetUrl: E, width: 24, height: 24 }),
                                alt: e.advertiserName,
                                width: 24,
                                height: 24,
                                className: w.Q1,
                            }),
                        }),
                    (0, l.jsxs)(o.D, {
                        className: a()(w.y8, w.RK),
                        onClick: _,
                        children: [
                            (0, l.jsx)(u.E, {
                                color: "text-overlay-light",
                                variant: "text-xs/normal",
                                children: S.intl.string(S.t.o6FLcF),
                            }),
                            (0, l.jsx)(c.CircleQuestionIcon, { color: d.A.colors.WHITE, className: w.P$ }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)(g.h, {
                className: w.jd,
                children: (0, l.jsx)(U, {
                    onOpen: s,
                    onClose: N,
                    onSelect: A,
                    children: (e) =>
                        (0, l.jsx)(o.D, {
                            ...e,
                            className: a()(w.oz, w.rb),
                            "aria-label": S.intl.string(S.t.DEoVWZ),
                            children: (0, l.jsx)(m.MoreHorizontalIcon, {
                                size: "md",
                                color: "currentColor",
                                className: a()(w.Bx, w.ON),
                            }),
                        }),
                }),
            }),
        ],
    });
}
var P = n(17928),
    O = n(297264),
    V = n(821609),
    k = n(775602),
    L = n(546121),
    D = n(792620),
    W = n(557637),
    Y = n(192308),
    q = n(415441),
    H = n(783569),
    X = n(333949),
    G = n(53440),
    K = n(427483),
    z = n(337611);
let $ = { url: K.A, mimetype: "video/webm", isAnimated: !0 },
    Z = { url: z.A, mimetype: "image/webp", isAnimated: !1 };
function J() {
    let e = (0, Q.o5)(),
        { imagePreview: t, videoPreview: s, productName: o, videoDurationSeconds: c } = e,
        { isExpanded: d, isExpansionAnimationComplete: m } = (0, M.H)(),
        C = (0, f.wW)(),
        v = (0, P.bG)([k.Ay], () => k.Ay.useReducedMotion),
        [g, N] = r.useState(!1),
        A = r.useMemo(() => (null == s ? null : { url: s, mimetype: (0, x.vm)(s), isAnimated: !0 }), [s]),
        y = !v || g,
        j = r.useMemo(() => {
            let e = c ?? 0;
            return e <= 0 ? S.intl.string(S.t.kfks9Y) : (0, L.AF)((0, D.X3)({ progressSeconds: 0, targetSeconds: e }));
        }, [c]),
        E = r.useCallback(() => {
            ((0, _.r)({
                type: T.F.CLICK_INTERNAL,
                adCreativeType: i.p.BOUNTY,
                adCreativeId: e.id,
                questContentCTA: h.Cy.START_BOUNTY,
                surfaceId: p.uF.QUEST_BAR_V2,
                sourceQuestContent: p.uF.QUEST_BAR_V2,
                impressionId: C(),
            }),
                (function (e) {
                    let { bounty: t, sourceQuestContent: r } = e;
                    (0, Y.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e("974119"),
                                n.e("651585"),
                                n.e("145010"),
                                n.e("955628"),
                                n.e("255563"),
                                n.e("602078"),
                                n.e("258427"),
                                n.e("182045"),
                                n.e("655624"),
                            ]).then(n.bind(n, 361211));
                            return (n) => (0, l.jsx)(e, { ...n, bounty: t, sourceQuestContent: r });
                        },
                        { modalKey: "BOUNTY_VIDEO_MODAL" },
                    );
                })({ bounty: e, sourceQuestContent: p.uF.QUEST_BAR_V2 }));
        }, [e, C]),
        R = !d || m;
    return (0, l.jsxs)("div", {
        className: G.rf,
        onMouseEnter: () => {
            v && !g && N(!0);
        },
        onMouseLeave: () => {
            v && g && N(!1);
        },
        children: [
            (0, l.jsxs)("div", {
                className: G.xX,
                children: [
                    null != t &&
                        (0, l.jsx)(W._M, {
                            id: "QuestBarBounty_previewImage",
                            children: (e) => (0, l.jsx)("img", { ref: e, src: t, alt: "", className: G.$_ }),
                        }),
                    null != A &&
                        (0, l.jsx)(W._M, {
                            id: "QuestBarBounty_previewVideo",
                            children: (e) =>
                                (0, l.jsx)(X.X, {
                                    ref: e,
                                    isHovered: g,
                                    asset: A,
                                    poster: t,
                                    className: a()(G.$_, null != t && G.Ki, { [G.mv]: y || null == t }),
                                }),
                        }),
                ],
            }),
            (0, l.jsx)("div", { className: G.tV }),
            (0, l.jsx)(H.T, {
                children: (0, l.jsxs)("div", {
                    className: G.Qs,
                    children: [
                        (0, l.jsx)("div", {
                            className: G.Qq,
                            children: (0, l.jsx)(q.N, {
                                showVideo: d && m,
                                imageAsset: {
                                    asset: Z,
                                    assetId: "QuestBarBounty_rewardTileStatic",
                                    alt: S.intl.string(S.t.UMclVN),
                                    className: G.Ag,
                                },
                                videoAsset: { asset: $, assetId: "QuestBarBounty_rewardTileAnimated", className: G.Ag },
                                imageSize: { width: 64, height: 64 },
                            }),
                        }),
                        (0, l.jsxs)("div", {
                            className: G.C,
                            children: [
                                (0, l.jsx)(O.D, {
                                    color: "text-strong",
                                    variant: "heading-md/medium",
                                    lineClamp: 2,
                                    children: o ?? "",
                                }),
                                (0, l.jsx)(u.E, { variant: "text-xs/normal", children: S.intl.string(S.t["1uzE2S"]) }),
                            ],
                        }),
                        (0, l.jsx)("div", {
                            className: a()({ [G._o]: !R }),
                            children: (0, l.jsx)(V.$, {
                                variant: "primary",
                                size: "md",
                                fullWidth: !0,
                                text: j,
                                onClick: E,
                            }),
                        }),
                    ],
                }),
            }),
        ],
    });
}
var ee = n(742860);
function et() {
    return (0, l.jsx)(ee.A, { layoutVariant: "inset", header: (0, l.jsx)(F, {}), children: (0, l.jsx)(J, {}) });
}
