n.d(t, { A: () => ei });
var l = n(477900),
    s = n(582128),
    a = n(503698),
    r = n.n(a),
    i = n(941143),
    o = n(323889),
    u = n(939249),
    c = n(43990),
    d = n(834730),
    m = n(290136),
    p = n(661531),
    x = n(365199),
    h = n(738822),
    f = n(291749),
    C = n(590202),
    v = n(971649),
    N = n(620954),
    g = n(557637),
    y = n(398025),
    j = n(617986),
    A = n(139210),
    E = n(568329),
    _ = n(980707),
    T = n(477782),
    R = n(743368),
    Q = n(265872),
    B = n(442433),
    b = n(507395),
    S = n(144779),
    I = n(494280),
    M = n(845890),
    U = n(963713),
    w = n(818348),
    F = n(105292);
function P(e) {
    let { onSelect: t, onClose: n } = e,
        s = (0, U.o5)(),
        a = (0, U.Q8)(s),
        r = (0, v.wW)(),
        i = (0, I.Yh)(a);
    return (0, l.jsxs)(_.W, {
        "data-menu-migrated": !0,
        variant: "fixed",
        onSelect: function () {
            null != t ? t() : (0, B.Z_)();
        },
        navId: "quest-bar-bounty",
        "aria-label": F.intl.string(F.t.ogxXGq),
        onClose: n ?? w.tE,
        children: [
            (0, l.jsx)(
                T.rX,
                {
                    children: (0, l.jsx)(T.Dr, {
                        id: "open-game-link",
                        label: s.cta.buttonLabel,
                        action: function () {
                            (0, N._Q)(
                                { adContentId: s.id, adCreativeType: o.p.BOUNTY, cta: s.cta },
                                {
                                    content: h.uF.QUEST_BAR_V2,
                                    ctaContent: C.Cy.CONTEXT_MENU_OPEN_GAME_LINK,
                                    impressionId: r(),
                                    sourceQuestContent: h.uF.QUEST_BAR_V2,
                                },
                            );
                        },
                        icon: R.W,
                        leadingAccessory: { type: "icon", icon: R.W },
                    }),
                },
                "major-actions",
            ),
            (0, l.jsxs)(
                T.rX,
                {
                    children: [
                        (0, l.jsx)(T.Dr, {
                            id: "display-disclosure",
                            label: F.intl.string(F.t.GcsZKJ),
                            action: function () {
                                (0, j.Zc)(a, {
                                    content: h.uF.QUEST_BAR_V2,
                                    ctaContent: C.Cy.CONTEXT_MENU_OPEN_DISCLOSURE,
                                    impressionId: r(),
                                    sourceQuestContent: h.uF.QUEST_BAR_V2,
                                });
                            },
                        }),
                        (0, l.jsx)(T.Dr, {
                            id: "hide-entrypoint",
                            label: F.intl.string(F.t.NN79E9),
                            action: function () {
                                ((0, b.r)({
                                    type: S.F.CLICK_INTERNAL,
                                    ...i,
                                    questContentCTA: C.Cy.CONTEXT_MENU_HIDE_CONTENT,
                                    surfaceId: h.uF.QUEST_BAR_V2,
                                    sourceQuestContent: h.uF.QUEST_BAR_V2,
                                    impressionId: r(),
                                }),
                                    (0, M.Xo)(i, h.uF.QUEST_BAR_V2));
                            },
                        }),
                    ],
                },
                "minor-actions",
            ),
        ],
    });
}
function O(e) {
    let { children: t, onOpen: n, onClose: a, onSelect: r } = e,
        i = (0, U.o5)(),
        o = (0, U.Q8)(i),
        u = (0, v.wW)(),
        c = s.useRef(null),
        d = s.useCallback(() => {
            ((0, b.r)({
                type: S.F.CLICK_INTERNAL,
                ...(0, I.Yh)(o),
                questContentCTA: C.Cy.OPEN_CONTEXT_MENU,
                surfaceId: h.uF.QUEST_BAR_V2,
                sourceQuestContent: h.uF.QUEST_BAR_V2,
                impressionId: u(),
            }),
                null != n && n());
        }, [o, u, n]);
    return (0, l.jsx)(Q.Y, {
        targetElementRef: c,
        onRequestOpen: d,
        onRequestClose: a,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(P, { onSelect: r, onClose: t });
        },
        animation: Q.Y.Animation.NONE,
        children: (e) => (0, l.jsx)("div", { ref: c, children: t(e) }),
    });
}
var V = n(241762);
n(272111);
var k = n(652215),
    L = n(886030);
function D() {
    let e = (0, U.o5)(),
        t = (0, U.Q8)(e),
        n = (0, v.wW)(),
        { expansionSpring: a } = s.useContext(E.PW),
        {
            onCtxMenuOpen: _,
            onCtxMenuClose: T,
            onCtxMenuSelect: R,
            isExpanded: Q,
            isExpansionAnimationComplete: B,
            collapsedHeight: b,
        } = (0, V.H)(),
        { productIcon: S } = e,
        I = s.useCallback(() => {
            (0, j.Zc)(t, {
                content: h.uF.QUEST_BAR_V2,
                ctaContent: C.Cy.OPEN_DISCLOSURE,
                sourceQuestContent: h.uF.QUEST_BAR_V2,
            });
        }, [t]),
        M = s.useCallback(() => {
            (0, N._Q)(
                { adContentId: e.id, adCreativeType: o.p.BOUNTY, cta: e.cta },
                {
                    content: h.uF.QUEST_BAR_HEADER,
                    ctaContent: C.Cy.OPEN_GAME_LINK,
                    impressionId: n(),
                    sourceQuestContent: h.uF.QUEST_BAR_V2,
                },
            );
        }, [e.cta, e.id, n]);
    return (0, l.jsxs)(A.A, {
        className: L.bU,
        children: [
            (0, l.jsx)(A.h, { className: L.Tu }),
            (0, l.jsxs)(i.animated.div, {
                className: L.W2,
                style: {
                    transform: a.to({ range: [0, 1], output: [b / 2 - 24 - 6, 0] }).to((e) => `translateY(${e}px)`),
                },
                children: [
                    null != S &&
                        (0, l.jsx)(u.D, {
                            onClick: M,
                            className: r()(L.iY, L.vk, { [L.wm]: Q && B }),
                            children: (0, l.jsx)(i.animated.div, {
                                className: L.U$,
                                style: {
                                    transform: a.to({ range: [0, 1], output: [1, 0.75] }).to((e) => `scale(${e})`),
                                },
                                children: (0, l.jsx)(g._M, {
                                    id: "QuestBarBounty_productIcon",
                                    children: (t) =>
                                        (0, l.jsx)("img", {
                                            ref: t,
                                            src: (0, f.lR)({ assetUrl: S, width: 32, height: 32 }),
                                            alt: e.advertiserName,
                                            width: 32,
                                            height: 32,
                                            className: L.Q1,
                                        }),
                                }),
                            }),
                        }),
                    (0, l.jsxs)("div", {
                        className: L.cA,
                        children: [
                            (0, l.jsx)(c.N, {
                                theme: k.NJ8.DARK,
                                disableAdaptiveTheme: !0,
                                children: (t) =>
                                    (0, l.jsx)(i.animated.div, {
                                        "aria-hidden": !0,
                                        className: r()(t, L.it),
                                        style: { opacity: (0, y.a)(a.to({ range: [0, 1], output: [1, 0] })) },
                                        children: (0, l.jsx)(d.E, {
                                            variant: "text-sm/medium",
                                            color: "text-strong",
                                            lineClamp: 2,
                                            children: e.productName ?? "",
                                        }),
                                    }),
                            }),
                            (0, l.jsx)(A.h, {
                                className: L.OO,
                                children: (0, l.jsxs)(u.D, {
                                    className: r()(L.y8, L.RK),
                                    onClick: I,
                                    children: [
                                        (0, l.jsx)(d.E, {
                                            color: "text-overlay-light",
                                            variant: "text-xs/normal",
                                            children: F.intl.string(F.t.o6FLcF),
                                        }),
                                        (0, l.jsx)(m.CircleQuestionIcon, { color: p.A.colors.WHITE, className: L.P$ }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)(A.h, {
                className: L.jd,
                children: (0, l.jsx)(O, {
                    onOpen: _,
                    onClose: T,
                    onSelect: R,
                    children: (e) =>
                        (0, l.jsx)(u.D, {
                            ...e,
                            className: r()(L.oz, L.rb),
                            "aria-label": F.intl.string(F.t.DEoVWZ),
                            children: (0, l.jsx)(x.MoreHorizontalIcon, {
                                size: "md",
                                color: "currentColor",
                                className: r()(L.Bx, L.ON),
                            }),
                        }),
                }),
            }),
        ],
    });
}
var W = n(17928),
    Y = n(133825),
    q = n(297264),
    H = n(821609),
    X = n(775602),
    G = n(546121),
    K = n(792620),
    $ = n(192308),
    z = n(415441),
    Z = n(783569),
    J = n(333949),
    ee = n(53440),
    et = n(427483),
    en = n(337611);
let el = { url: et.A, mimetype: "video/webm", isAnimated: !0 },
    es = { url: en.A, mimetype: "image/webp", isAnimated: !1 };
function ea() {
    let e = (0, U.o5)(),
        { imagePreview: t, videoPreview: a, productName: u, videoDurationSeconds: c } = e,
        { isExpanded: m, isExpansionAnimationComplete: p } = (0, V.H)(),
        { expansionSpring: x } = s.useContext(E.PW),
        N = (0, v.wW)(),
        j = (0, W.bG)([X.Ay], () => X.Ay.useReducedMotion),
        [A, _] = s.useState(!1),
        T = s.useRef(null);
    s.useEffect(() => {
        m && T.current?.pause();
    }, [m]);
    let R = s.useMemo(() => (null == a ? null : { url: a, mimetype: (0, f.vm)(a), isAnimated: !0 }), [a]),
        Q = !j || A,
        B = s.useMemo(() => {
            let e = c ?? 0;
            return e <= 0 ? F.intl.string(F.t.kfks9Y) : (0, G.AF)((0, K.X3)({ progressSeconds: 0, targetSeconds: e }));
        }, [c]),
        I = s.useCallback(() => {
            ((0, b.r)({
                type: S.F.CLICK_INTERNAL,
                adCreativeType: o.p.BOUNTY,
                adCreativeId: e.id,
                questContentCTA: C.Cy.START_BOUNTY,
                surfaceId: h.uF.QUEST_BAR_V2,
                sourceQuestContent: h.uF.QUEST_BAR_V2,
                impressionId: N(),
            }),
                (function (e) {
                    let { bounty: t, sourceQuestContent: s } = e;
                    (0, $.openModalLazy)(
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
                            return (n) => (0, l.jsx)(e, { ...n, bounty: t, sourceQuestContent: s });
                        },
                        { modalKey: "BOUNTY_VIDEO_MODAL" },
                    );
                })({ bounty: e, sourceQuestContent: h.uF.QUEST_BAR_V2 }));
        }, [e, N]),
        M = m && p,
        w = !m || p;
    return (0, l.jsxs)("div", {
        className: ee.rf,
        onMouseEnter: () => {
            j && !A && _(!0);
        },
        onMouseLeave: () => {
            j && A && _(!1);
        },
        children: [
            (0, l.jsxs)("div", {
                className: ee.xX,
                children: [
                    (0, l.jsxs)(i.animated.div, {
                        className: ee.Tj,
                        style: { opacity: (0, y.a)(x.to({ range: [0, 1], output: [0, 1] })) },
                        children: [
                            null != t &&
                                (0, l.jsx)(g._M, {
                                    id: "QuestBarBounty_previewImage",
                                    children: (e) => (0, l.jsx)("img", { ref: e, src: t, alt: "", className: ee.$_ }),
                                }),
                            null != R &&
                                (0, l.jsx)(g._M, {
                                    id: "QuestBarBounty_previewVideo",
                                    children: (e) =>
                                        (0, l.jsx)(J.X, {
                                            ref: e,
                                            isHovered: A,
                                            asset: R,
                                            poster: t,
                                            className: r()(ee.$_, null != t && ee.Ki, { [ee.mv]: Q || null == t }),
                                        }),
                                }),
                        ],
                    }),
                    (0, l.jsx)(i.animated.div, {
                        className: ee.ch,
                        style: { opacity: (0, y.a)(x.to({ range: [0, 1], output: [1, 0] })) },
                        children: (0, l.jsx)(Y.a, {
                            ref: T,
                            autoplay: !m,
                            stateMachine: "State Machine 1",
                            fit: "contain",
                            className: ee.QF,
                        }),
                    }),
                ],
            }),
            (0, l.jsx)("div", { className: ee.tV }),
            (0, l.jsx)(Z.T, {
                children: (0, l.jsxs)("div", {
                    className: ee.Qs,
                    children: [
                        (0, l.jsx)("div", {
                            className: ee.Qq,
                            children: (0, l.jsx)(z.N, {
                                showVideo: M,
                                imageAsset: {
                                    asset: es,
                                    assetId: "QuestBarBounty_rewardTileStatic",
                                    alt: F.intl.string(F.t.UMclVN),
                                    className: ee.Ag,
                                },
                                videoAsset: {
                                    asset: el,
                                    assetId: "QuestBarBounty_rewardTileAnimated",
                                    className: ee.Ag,
                                },
                                imageSize: { width: 64, height: 64 },
                            }),
                        }),
                        (0, l.jsxs)("div", {
                            className: ee.C,
                            children: [
                                (0, l.jsx)(q.D, {
                                    color: "text-strong",
                                    variant: "heading-md/medium",
                                    lineClamp: 2,
                                    children: u ?? "",
                                }),
                                (0, l.jsx)(d.E, { variant: "text-xs/normal", children: F.intl.string(F.t["1uzE2S"]) }),
                            ],
                        }),
                        (0, l.jsx)("div", {
                            className: r()({ [ee._o]: !w }),
                            children: (0, l.jsx)(H.$, {
                                variant: "primary",
                                size: "md",
                                fullWidth: !0,
                                text: B,
                                onClick: I,
                            }),
                        }),
                    ],
                }),
            }),
        ],
    });
}
var er = n(742860);
function ei() {
    return (0, l.jsx)(er.A, { layoutVariant: "inset", header: (0, l.jsx)(D, {}), children: (0, l.jsx)(ea, {}) });
}
