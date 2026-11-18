n.d(t, { A: () => er });
var l = n(477900),
    s = n(582128),
    a = n(503698),
    r = n.n(a),
    i = n(120692),
    o = n(323889),
    u = n(939249),
    c = n(43990),
    d = n(834730),
    m = n(365199),
    p = n(506988),
    x = n(760914),
    f = n(590202),
    h = n(971649),
    C = n(574112),
    v = n(557637),
    N = n(398025),
    g = n(321538),
    y = n(139210),
    j = n(568329),
    A = n(165862),
    E = n(477782),
    _ = n(743368),
    T = n(265872),
    R = n(442433),
    b = n(438457),
    B = n(144779),
    Q = n(494280),
    S = n(845890),
    I = n(963713),
    M = n(818348),
    U = n(792996);
function w(e) {
    let { onSelect: t, onClose: n } = e,
        s = (0, I.o5)(),
        a = (0, I.Q8)(s),
        r = (0, h.wW)(),
        i = (0, Q.Yh)(a);
    return (0, l.jsxs)(A.W, {
        "data-menu-migrated": !0,
        variant: "fixed",
        onSelect: function () {
            null != t ? t() : (0, R.Z_)();
        },
        navId: "quest-bar-bounty",
        "aria-label": U.intl.string(U.t.ogxXGq),
        onClose: n ?? M.tE,
        children: [
            (0, l.jsx)(
                E.rX,
                {
                    children: (0, l.jsx)(E.Dr, {
                        id: "open-game-link",
                        label: s.cta.buttonLabel,
                        action: function () {
                            (0, C._Q)(
                                { adContentId: s.id, adCreativeType: o.p.BOUNTY, cta: s.cta },
                                {
                                    content: p.uF.QUEST_BAR_V2,
                                    ctaContent: f.Cy.CONTEXT_MENU_OPEN_GAME_LINK,
                                    impressionId: r(),
                                    sourceQuestContent: p.uF.QUEST_BAR_V2,
                                },
                            );
                        },
                        icon: _.LinkExternalMediumIcon,
                        leadingAccessory: { type: "icon", icon: _.LinkExternalMediumIcon },
                    }),
                },
                "major-actions",
            ),
            (0, l.jsxs)(
                E.rX,
                {
                    children: [
                        (0, l.jsx)(E.Dr, {
                            id: "display-disclosure",
                            label: U.intl.string(U.t.GcsZKJ),
                            action: function () {
                                (0, g.Zc)(a, {
                                    content: p.uF.QUEST_BAR_V2,
                                    ctaContent: f.Cy.CONTEXT_MENU_OPEN_DISCLOSURE,
                                    impressionId: r(),
                                    sourceQuestContent: p.uF.QUEST_BAR_V2,
                                });
                            },
                        }),
                        (0, l.jsx)(E.Dr, {
                            id: "hide-entrypoint",
                            label: U.intl.string(U.t.NN79E9),
                            action: function () {
                                ((0, b.r)({
                                    type: B.F.CLICK_INTERNAL,
                                    ...i,
                                    questContentCTA: f.Cy.CONTEXT_MENU_HIDE_CONTENT,
                                    surfaceId: p.uF.QUEST_BAR_V2,
                                    sourceQuestContent: p.uF.QUEST_BAR_V2,
                                    impressionId: r(),
                                }),
                                    (0, S.Xo)(i, p.uF.QUEST_BAR_V2));
                            },
                        }),
                    ],
                },
                "minor-actions",
            ),
        ],
    });
}
function P(e) {
    let { children: t, onOpen: n, onClose: a, onSelect: r } = e,
        i = (0, I.o5)(),
        o = (0, I.Q8)(i),
        u = (0, h.wW)(),
        c = s.useRef(null),
        d = s.useCallback(() => {
            ((0, b.r)({
                type: B.F.CLICK_INTERNAL,
                ...(0, Q.Yh)(o),
                questContentCTA: f.Cy.OPEN_CONTEXT_MENU,
                surfaceId: p.uF.QUEST_BAR_V2,
                sourceQuestContent: p.uF.QUEST_BAR_V2,
                impressionId: u(),
            }),
                null != n && n());
        }, [o, u, n]);
    return (0, l.jsx)(T.Y, {
        targetElementRef: c,
        onRequestOpen: d,
        onRequestClose: a,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(w, { onSelect: r, onClose: t });
        },
        animation: T.Y.Animation.NONE,
        children: (e) => (0, l.jsx)("div", { ref: c, children: t(e) }),
    });
}
var F = n(241762);
n(272111);
var O = n(652215),
    k = n(886030);
function V() {
    let e = (0, I.o5)(),
        t = (0, I.Q8)(e),
        n = (0, h.wW)(),
        { expansionSpring: a } = s.useContext(j.PW),
        {
            onCtxMenuOpen: A,
            onCtxMenuClose: E,
            onCtxMenuSelect: _,
            isExpanded: T,
            isExpansionAnimationComplete: R,
            collapsedHeight: b,
        } = (0, F.H)(),
        { productIcon: B } = e,
        Q = s.useCallback(() => {
            (0, g.Zc)(t, {
                content: p.uF.QUEST_BAR_V2,
                ctaContent: f.Cy.OPEN_DISCLOSURE,
                sourceQuestContent: p.uF.QUEST_BAR_V2,
            });
        }, [t]),
        S = s.useCallback(() => {
            (0, C._Q)(
                { adContentId: e.id, adCreativeType: o.p.BOUNTY, cta: e.cta },
                {
                    content: p.uF.QUEST_BAR_HEADER,
                    ctaContent: f.Cy.OPEN_GAME_LINK,
                    impressionId: n(),
                    sourceQuestContent: p.uF.QUEST_BAR_V2,
                },
            );
        }, [e.cta, e.id, n]);
    return (0, l.jsxs)(y.A, {
        className: k.bU,
        children: [
            (0, l.jsx)(y.h, { className: k.Tu }),
            (0, l.jsxs)(i.animated.div, {
                className: k.W2,
                style: {
                    marginInlineStart: a.to({ range: [0, 1], output: [4, 0] }).to((e) => `${e}px`),
                    transform: a.to({ range: [0, 1], output: [b / 2 - 24 - 6, 0] }).to((e) => `translateY(${e}px)`),
                },
                children: [
                    null != B &&
                        (0, l.jsx)(u.D, {
                            onClick: S,
                            className: r()(k.iY, k.vk, { [k.wm]: T && R }),
                            children: (0, l.jsx)(i.animated.div, {
                                className: k.U$,
                                style: {
                                    transform: a.to({ range: [0, 1], output: [1, 0.75] }).to((e) => `scale(${e})`),
                                },
                                children: (0, l.jsx)(v._M, {
                                    id: "QuestBarBounty_productIcon",
                                    children: (t) =>
                                        (0, l.jsx)("img", {
                                            ref: t,
                                            src: (0, x.lR)({ assetUrl: B, width: 32, height: 32 }),
                                            alt: e.advertiserName,
                                            width: 32,
                                            height: 32,
                                            className: k.Q1,
                                        }),
                                }),
                            }),
                        }),
                    (0, l.jsxs)("div", {
                        className: k.cA,
                        children: [
                            (0, l.jsx)(c.N, {
                                theme: O.NJ8.DARK,
                                disableAdaptiveTheme: !0,
                                children: (t) =>
                                    (0, l.jsx)(i.animated.div, {
                                        "aria-hidden": !0,
                                        className: r()(t, k.it),
                                        style: { opacity: (0, N.a)(a.to({ range: [0, 1], output: [1, 0] })) },
                                        children: (0, l.jsx)(d.E, {
                                            variant: "body-sm/medium",
                                            color: "text-strong",
                                            lineClamp: 2,
                                            className: k.Pq,
                                            children: e.productName,
                                        }),
                                    }),
                            }),
                            (0, l.jsx)(y.h, {
                                className: k.OO,
                                children: (0, l.jsx)(u.D, {
                                    className: r()(k.y8, k.RK),
                                    onClick: Q,
                                    children: (0, l.jsx)(d.E, {
                                        color: "text-overlay-light",
                                        variant: "body-xs/normal",
                                        lineClamp: 1,
                                        children: U.intl.string(U.t.o6FLcF),
                                    }),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)(y.h, {
                className: k.jd,
                children: (0, l.jsx)(P, {
                    onOpen: A,
                    onClose: E,
                    onSelect: _,
                    children: (e) =>
                        (0, l.jsx)(u.D, {
                            ...e,
                            className: r()(k.oz, k.rb),
                            "aria-label": U.intl.string(U.t.DEoVWZ),
                            children: (0, l.jsx)(m.MoreHorizontalIcon, {
                                size: "md",
                                color: "currentColor",
                                className: r()(k.Bx, k.ON),
                            }),
                        }),
                }),
            }),
        ],
    });
}
var L = n(855986),
    D = n(534514),
    Y = n(821609),
    W = n(775602),
    q = n(500180),
    X = n(792620),
    G = n(192308),
    H = n(415441),
    K = n(419403);
function $(e) {
    let { isAnimated: t, className: n } = e,
        s = (0, L.bG)([W.Ay], () => W.Ay.useReducedMotion);
    return (0, l.jsx)("img", {
        className: r()(K.Q, n),
        src:
            t && !s
                ? "https://cdn.discordapp.com/assets/content/64e328defbecc228c5ed250346b964b80c3fcdc293982496962fc482f917864c.webp"
                : "https://cdn.discordapp.com/assets/content/25e4c0e14022dd904f8f6d86d209f40ed0ca5d8df56f01b81296f40871336fdc.png",
        alt: "",
        "aria-hidden": !0,
    });
}
var z = n(783569),
    Z = n(333949),
    J = n(632036),
    ee = n(53440),
    et = n(970908);
let en =
        "https://cdn.discordapp.com/assets/content/305f47e78a81697b98faffc80e5b7c0dfdc1829144937eec1665324417d146f2.png",
    el = { url: et.A, mimetype: "video/webm", isAnimated: !0 };
function es() {
    let e = (0, I.o5)(),
        { imagePreview: t, videoPreview: a, productName: u, videoDurationSeconds: m } = e,
        { isExpanded: C, isExpansionAnimationComplete: g, collapsedHeight: y } = (0, F.H)(),
        { expansionSpring: A } = s.useContext(j.PW),
        E = (0, h.wW)(),
        _ = (0, L.bG)([W.Ay], () => W.Ay.useReducedMotion),
        [T, R] = s.useState(!1),
        Q = s.useMemo(() => (null == a ? null : { url: a, mimetype: (0, x.vm)(a), isAnimated: !0 }), [a]),
        S = !_ || T,
        M = s.useMemo(() => {
            let e = m ?? 0;
            return e <= 0 ? U.intl.string(U.t.kfks9Y) : (0, q.AF)((0, X.X3)({ progressSeconds: 0, targetSeconds: e }));
        }, [m]),
        w = s.useCallback(() => {
            ((0, b.r)({
                type: B.F.CLICK_INTERNAL,
                adCreativeType: o.p.BOUNTY,
                adCreativeId: e.id,
                questContentCTA: f.Cy.START_BOUNTY,
                surfaceId: p.uF.QUEST_BAR_V2,
                sourceQuestContent: p.uF.QUEST_BAR_V2,
                impressionId: E(),
            }),
                (function (e) {
                    let { bounty: t, sourceQuestContent: s } = e,
                        a = performance.now();
                    (0, G.mM)(
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e(974119),
                                n.e(651585),
                                n.e(145010),
                                n.e(955628),
                                n.e(747265),
                                n.e(941394),
                                n.e(852701),
                                n.e(182045),
                                n.e(701387),
                            ]).then(n.bind(n, 123974));
                            return (n) => (0, l.jsx)(e, { ...n, bounty: t, sourceQuestContent: s, openedAtMs: a });
                        },
                        { modalKey: "BOUNTY_VIDEO_MODAL" },
                    );
                })({ bounty: e, sourceQuestContent: p.uF.QUEST_BAR_V2 }));
        }, [e, E]),
        P = C && g,
        k = !C || g,
        V = P || _ ? (0, x.UX)(en, { format: "webp" }) : en;
    return (0, l.jsxs)("div", {
        className: ee.rf,
        onMouseEnter: () => {
            _ && !T && R(!0);
        },
        onMouseLeave: () => {
            _ && T && R(!1);
        },
        children: [
            (0, l.jsxs)("div", {
                className: ee.xX,
                children: [
                    (0, l.jsxs)(i.animated.div, {
                        className: ee.Tj,
                        style: { opacity: (0, N.a)(A.to({ range: [0, 1], output: [0, 1] })) },
                        children: [
                            null != t &&
                                (0, l.jsx)(v._M, {
                                    id: "QuestBarBounty_previewImage",
                                    children: (e) => (0, l.jsx)("img", { ref: e, src: t, alt: "", className: ee.$_ }),
                                }),
                            null != Q &&
                                (0, l.jsx)(v._M, {
                                    id: "QuestBarBounty_previewVideo",
                                    children: (e) =>
                                        (0, l.jsx)(Z.X, {
                                            ref: e,
                                            isHovered: T,
                                            asset: Q,
                                            poster: t,
                                            className: r()(ee.$_, null != t && ee.Ki, { [ee.mv]: S || null == t }),
                                        }),
                                }),
                        ],
                    }),
                    (0, l.jsx)(i.animated.div, {
                        className: ee.PY,
                        style: { top: y, opacity: (0, N.a)(A.to({ range: [0, 1], output: [1, 0] })) },
                        children: (0, l.jsx)($, { isAnimated: !P }),
                    }),
                    (0, l.jsx)(i.animated.div, {
                        className: ee.ch,
                        style: { opacity: (0, N.a)(A.to({ range: [0, 1], output: [1, 0] })) },
                        children: (0, l.jsx)("img", { src: V, alt: "", className: ee.QF }),
                    }),
                ],
            }),
            (0, l.jsx)("div", { className: ee.tV }),
            (C || !g) && (0, l.jsx)($, { className: ee.dq, isAnimated: !0 }),
            (0, l.jsx)(z.T, {
                children: (0, l.jsx)(c.N, {
                    theme: O.NJ8.DARK,
                    disableAdaptiveTheme: !0,
                    children: (e) =>
                        (0, l.jsxs)("div", {
                            className: r()(e, ee.Qs),
                            children: [
                                (0, l.jsx)("div", {
                                    className: r()(J.al, J.Yi, ee.Qq),
                                    children: (0, l.jsx)(H.N, {
                                        showVideo: P,
                                        imageAsset: {
                                            asset: el,
                                            assetId: "QuestBarBounty_rewardTileStatic",
                                            alt: U.intl.string(U.t.UMclVN),
                                            className: J.XM,
                                        },
                                        videoAsset: {
                                            asset: el,
                                            assetId: "QuestBarBounty_rewardTileAnimated",
                                            className: r()(J.eB, J.WY),
                                        },
                                        imageSize: { width: 64, height: 64 },
                                    }),
                                }),
                                (0, l.jsxs)("div", {
                                    className: ee.C,
                                    children: [
                                        (0, l.jsx)(D.D, {
                                            color: "text-strong",
                                            variant: "heading-sm/medium",
                                            lineClamp: 2,
                                            className: ee.YW,
                                            children: u,
                                        }),
                                        (0, l.jsx)(d.E, {
                                            variant: "body-xs/normal",
                                            lineClamp: 3,
                                            className: ee.YW,
                                            children: U.intl.string(U.t["1uzE2S"]),
                                        }),
                                    ],
                                }),
                                (0, l.jsx)("div", {
                                    className: r()({ [ee._o]: !k }),
                                    children: (0, l.jsx)(Y.$, {
                                        variant: "primary",
                                        size: "md",
                                        fullWidth: !0,
                                        text: M,
                                        onClick: w,
                                    }),
                                }),
                            ],
                        }),
                }),
            }),
        ],
    });
}
var ea = n(742860);
function er() {
    return (0, l.jsx)(ea.A, { layoutVariant: "inset", header: (0, l.jsx)(V, {}), children: (0, l.jsx)(es, {}) });
}
