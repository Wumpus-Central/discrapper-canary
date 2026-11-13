n.d(t, { A: () => eo });
var s = n(477900),
    l = n(582128),
    a = n(503698),
    r = n.n(a),
    i = n(120692),
    o = n(323889),
    u = n(939249),
    c = n(43990),
    d = n(834730),
    m = n(290136),
    p = n(646514),
    x = n(365199),
    f = n(506988),
    h = n(760914),
    C = n(590202),
    v = n(971649),
    N = n(574112),
    y = n(557637),
    g = n(398025),
    j = n(321538),
    A = n(139210),
    E = n(568329),
    _ = n(165862),
    T = n(477782),
    R = n(743368),
    b = n(265872),
    Q = n(442433),
    B = n(438457),
    I = n(144779),
    M = n(494280),
    S = n(845890),
    U = n(963713),
    w = n(818348),
    P = n(792996);
function F(e) {
    let { onSelect: t, onClose: n } = e,
        l = (0, U.o5)(),
        a = (0, U.Q8)(l),
        r = (0, v.wW)(),
        i = (0, M.Yh)(a);
    return (0, s.jsxs)(_.W, {
        "data-menu-migrated": !0,
        variant: "fixed",
        onSelect: function () {
            null != t ? t() : (0, Q.Z_)();
        },
        navId: "quest-bar-bounty",
        "aria-label": P.intl.string(P.t.ogxXGq),
        onClose: n ?? w.tE,
        children: [
            (0, s.jsx)(
                T.rX,
                {
                    children: (0, s.jsx)(T.Dr, {
                        id: "open-game-link",
                        label: l.cta.buttonLabel,
                        action: function () {
                            (0, N._Q)(
                                { adContentId: l.id, adCreativeType: o.p.BOUNTY, cta: l.cta },
                                {
                                    content: f.uF.QUEST_BAR_V2,
                                    ctaContent: C.Cy.CONTEXT_MENU_OPEN_GAME_LINK,
                                    impressionId: r(),
                                    sourceQuestContent: f.uF.QUEST_BAR_V2,
                                },
                            );
                        },
                        icon: R.LinkExternalMediumIcon,
                        leadingAccessory: { type: "icon", icon: R.LinkExternalMediumIcon },
                    }),
                },
                "major-actions",
            ),
            (0, s.jsxs)(
                T.rX,
                {
                    children: [
                        (0, s.jsx)(T.Dr, {
                            id: "display-disclosure",
                            label: P.intl.string(P.t.GcsZKJ),
                            action: function () {
                                (0, j.Zc)(a, {
                                    content: f.uF.QUEST_BAR_V2,
                                    ctaContent: C.Cy.CONTEXT_MENU_OPEN_DISCLOSURE,
                                    impressionId: r(),
                                    sourceQuestContent: f.uF.QUEST_BAR_V2,
                                });
                            },
                        }),
                        (0, s.jsx)(T.Dr, {
                            id: "hide-entrypoint",
                            label: P.intl.string(P.t.NN79E9),
                            action: function () {
                                ((0, B.r)({
                                    type: I.F.CLICK_INTERNAL,
                                    ...i,
                                    questContentCTA: C.Cy.CONTEXT_MENU_HIDE_CONTENT,
                                    surfaceId: f.uF.QUEST_BAR_V2,
                                    sourceQuestContent: f.uF.QUEST_BAR_V2,
                                    impressionId: r(),
                                }),
                                    (0, S.Xo)(i, f.uF.QUEST_BAR_V2));
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
        c = l.useRef(null),
        d = l.useCallback(() => {
            ((0, B.r)({
                type: I.F.CLICK_INTERNAL,
                ...(0, M.Yh)(o),
                questContentCTA: C.Cy.OPEN_CONTEXT_MENU,
                surfaceId: f.uF.QUEST_BAR_V2,
                sourceQuestContent: f.uF.QUEST_BAR_V2,
                impressionId: u(),
            }),
                null != n && n());
        }, [o, u, n]);
    return (0, s.jsx)(b.Y, {
        targetElementRef: c,
        onRequestOpen: d,
        onRequestClose: a,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, s.jsx)(F, { onSelect: r, onClose: t });
        },
        animation: b.Y.Animation.NONE,
        children: (e) => (0, s.jsx)("div", { ref: c, children: t(e) }),
    });
}
var k = n(241762);
n(272111);
var V = n(652215),
    L = n(886030);
function D() {
    let e = (0, U.o5)(),
        t = (0, U.Q8)(e),
        n = (0, v.wW)(),
        { expansionSpring: a } = l.useContext(E.PW),
        {
            onCtxMenuOpen: _,
            onCtxMenuClose: T,
            onCtxMenuSelect: R,
            isExpanded: b,
            isExpansionAnimationComplete: Q,
            collapsedHeight: B,
        } = (0, k.H)(),
        { productIcon: I } = e,
        M = l.useCallback(() => {
            (0, j.Zc)(t, {
                content: f.uF.QUEST_BAR_V2,
                ctaContent: C.Cy.OPEN_DISCLOSURE,
                sourceQuestContent: f.uF.QUEST_BAR_V2,
            });
        }, [t]),
        S = l.useCallback(() => {
            (0, N._Q)(
                { adContentId: e.id, adCreativeType: o.p.BOUNTY, cta: e.cta },
                {
                    content: f.uF.QUEST_BAR_HEADER,
                    ctaContent: C.Cy.OPEN_GAME_LINK,
                    impressionId: n(),
                    sourceQuestContent: f.uF.QUEST_BAR_V2,
                },
            );
        }, [e.cta, e.id, n]);
    return (0, s.jsxs)(A.A, {
        className: L.bU,
        children: [
            (0, s.jsx)(A.h, { className: L.Tu }),
            (0, s.jsxs)(i.animated.div, {
                className: L.W2,
                style: {
                    transform: a.to({ range: [0, 1], output: [B / 2 - 24 - 6, 0] }).to((e) => `translateY(${e}px)`),
                },
                children: [
                    null != I &&
                        (0, s.jsx)(u.D, {
                            onClick: S,
                            className: r()(L.iY, L.vk, { [L.wm]: b && Q }),
                            children: (0, s.jsx)(i.animated.div, {
                                className: L.U$,
                                style: {
                                    transform: a.to({ range: [0, 1], output: [1, 0.75] }).to((e) => `scale(${e})`),
                                },
                                children: (0, s.jsx)(y._M, {
                                    id: "QuestBarBounty_productIcon",
                                    children: (t) =>
                                        (0, s.jsx)("img", {
                                            ref: t,
                                            src: (0, h.lR)({ assetUrl: I, width: 32, height: 32 }),
                                            alt: e.advertiserName,
                                            width: 32,
                                            height: 32,
                                            className: L.Q1,
                                        }),
                                }),
                            }),
                        }),
                    (0, s.jsxs)("div", {
                        className: L.cA,
                        children: [
                            (0, s.jsx)(c.N, {
                                theme: V.NJ8.DARK,
                                disableAdaptiveTheme: !0,
                                children: (t) =>
                                    (0, s.jsx)(i.animated.div, {
                                        "aria-hidden": !0,
                                        className: r()(t, L.it),
                                        style: { opacity: (0, g.a)(a.to({ range: [0, 1], output: [1, 0] })) },
                                        children: (0, s.jsx)(d.E, {
                                            variant: "body-sm/medium",
                                            color: "text-strong",
                                            lineClamp: 2,
                                            children: e.productName,
                                        }),
                                    }),
                            }),
                            (0, s.jsx)(A.h, {
                                className: L.OO,
                                children: (0, s.jsxs)(u.D, {
                                    className: r()(L.y8, L.RK),
                                    onClick: M,
                                    children: [
                                        (0, s.jsx)(d.E, {
                                            color: "text-overlay-light",
                                            variant: "body-xs/normal",
                                            children: P.intl.string(P.t.o6FLcF),
                                        }),
                                        (0, s.jsx)(m.CircleQuestionIcon, { color: p.A.colors.WHITE, className: L.P$ }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, s.jsx)(A.h, {
                className: L.jd,
                children: (0, s.jsx)(O, {
                    onOpen: _,
                    onClose: T,
                    onSelect: R,
                    children: (e) =>
                        (0, s.jsx)(u.D, {
                            ...e,
                            className: r()(L.oz, L.rb),
                            "aria-label": P.intl.string(P.t.DEoVWZ),
                            children: (0, s.jsx)(x.MoreHorizontalIcon, {
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
var Y = n(855986),
    W = n(534514),
    q = n(821609),
    X = n(775602),
    H = n(500180),
    G = n(792620),
    K = n(192308),
    $ = n(415441),
    z = n(419403);
function Z(e) {
    let { isAnimated: t, className: n } = e,
        l = (0, Y.bG)([X.Ay], () => X.Ay.useReducedMotion);
    return (0, s.jsx)("img", {
        className: r()(z.Q, n),
        src:
            t && !l
                ? "https://cdn.discordapp.com/assets/content/64e328defbecc228c5ed250346b964b80c3fcdc293982496962fc482f917864c.webp"
                : "https://cdn.discordapp.com/assets/content/25e4c0e14022dd904f8f6d86d209f40ed0ca5d8df56f01b81296f40871336fdc.png",
        alt: "",
        "aria-hidden": !0,
    });
}
var J = n(783569),
    ee = n(333949),
    et = n(632036),
    en = n(53440),
    es = n(970908);
let el =
        "https://cdn.discordapp.com/assets/content/305f47e78a81697b98faffc80e5b7c0dfdc1829144937eec1665324417d146f2.png",
    ea = { url: es.A, mimetype: "video/webm", isAnimated: !0 };
function er() {
    let e = (0, U.o5)(),
        { imagePreview: t, videoPreview: a, productName: u, videoDurationSeconds: m } = e,
        { isExpanded: p, isExpansionAnimationComplete: x, collapsedHeight: N } = (0, k.H)(),
        { expansionSpring: j } = l.useContext(E.PW),
        A = (0, v.wW)(),
        _ = (0, Y.bG)([X.Ay], () => X.Ay.useReducedMotion),
        [T, R] = l.useState(!1),
        b = l.useMemo(() => (null == a ? null : { url: a, mimetype: (0, h.vm)(a), isAnimated: !0 }), [a]),
        Q = !_ || T,
        M = l.useMemo(() => {
            let e = m ?? 0;
            return e <= 0 ? P.intl.string(P.t.kfks9Y) : (0, H.AF)((0, G.X3)({ progressSeconds: 0, targetSeconds: e }));
        }, [m]),
        S = l.useCallback(() => {
            ((0, B.r)({
                type: I.F.CLICK_INTERNAL,
                adCreativeType: o.p.BOUNTY,
                adCreativeId: e.id,
                questContentCTA: C.Cy.START_BOUNTY,
                surfaceId: f.uF.QUEST_BAR_V2,
                sourceQuestContent: f.uF.QUEST_BAR_V2,
                impressionId: A(),
            }),
                (function (e) {
                    let { bounty: t, sourceQuestContent: l } = e,
                        a = performance.now();
                    (0, K.mM)(
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
                                n.e(77320),
                            ]).then(n.bind(n, 102075));
                            return (n) => (0, s.jsx)(e, { ...n, bounty: t, sourceQuestContent: l, openedAtMs: a });
                        },
                        { modalKey: "BOUNTY_VIDEO_MODAL" },
                    );
                })({ bounty: e, sourceQuestContent: f.uF.QUEST_BAR_V2 }));
        }, [e, A]),
        w = p && x,
        F = !p || x,
        O = w || _ ? (0, h.UX)(el, { format: "webp" }) : el;
    return (0, s.jsxs)("div", {
        className: en.rf,
        onMouseEnter: () => {
            _ && !T && R(!0);
        },
        onMouseLeave: () => {
            _ && T && R(!1);
        },
        children: [
            (0, s.jsxs)("div", {
                className: en.xX,
                children: [
                    (0, s.jsxs)(i.animated.div, {
                        className: en.Tj,
                        style: { opacity: (0, g.a)(j.to({ range: [0, 1], output: [0, 1] })) },
                        children: [
                            null != t &&
                                (0, s.jsx)(y._M, {
                                    id: "QuestBarBounty_previewImage",
                                    children: (e) => (0, s.jsx)("img", { ref: e, src: t, alt: "", className: en.$_ }),
                                }),
                            null != b &&
                                (0, s.jsx)(y._M, {
                                    id: "QuestBarBounty_previewVideo",
                                    children: (e) =>
                                        (0, s.jsx)(ee.X, {
                                            ref: e,
                                            isHovered: T,
                                            asset: b,
                                            poster: t,
                                            className: r()(en.$_, null != t && en.Ki, { [en.mv]: Q || null == t }),
                                        }),
                                }),
                        ],
                    }),
                    (0, s.jsx)(i.animated.div, {
                        className: en.PY,
                        style: { top: N, opacity: (0, g.a)(j.to({ range: [0, 1], output: [1, 0] })) },
                        children: (0, s.jsx)(Z, { isAnimated: !w }),
                    }),
                    (0, s.jsx)(i.animated.div, {
                        className: en.ch,
                        style: { opacity: (0, g.a)(j.to({ range: [0, 1], output: [1, 0] })) },
                        children: (0, s.jsx)("img", { src: O, alt: "", className: en.QF }),
                    }),
                ],
            }),
            (0, s.jsx)("div", { className: en.tV }),
            (p || !x) && (0, s.jsx)(Z, { className: en.dq, isAnimated: !0 }),
            (0, s.jsx)(J.T, {
                children: (0, s.jsx)(c.N, {
                    theme: V.NJ8.DARK,
                    disableAdaptiveTheme: !0,
                    children: (e) =>
                        (0, s.jsxs)("div", {
                            className: r()(e, en.Qs),
                            children: [
                                (0, s.jsx)("div", {
                                    className: r()(et.al, et.Yi, en.Qq),
                                    children: (0, s.jsx)($.N, {
                                        showVideo: w,
                                        imageAsset: {
                                            asset: ea,
                                            assetId: "QuestBarBounty_rewardTileStatic",
                                            alt: P.intl.string(P.t.UMclVN),
                                            className: et.XM,
                                        },
                                        videoAsset: {
                                            asset: ea,
                                            assetId: "QuestBarBounty_rewardTileAnimated",
                                            className: r()(et.eB, et.WY),
                                        },
                                        imageSize: { width: 64, height: 64 },
                                    }),
                                }),
                                (0, s.jsxs)("div", {
                                    className: en.C,
                                    children: [
                                        (0, s.jsx)(W.D, {
                                            color: "text-strong",
                                            variant: "heading-sm/medium",
                                            lineClamp: 2,
                                            children: u,
                                        }),
                                        (0, s.jsx)(d.E, {
                                            variant: "body-xs/normal",
                                            children: P.intl.string(P.t["1uzE2S"]),
                                        }),
                                    ],
                                }),
                                (0, s.jsx)("div", {
                                    className: r()({ [en._o]: !F }),
                                    children: (0, s.jsx)(q.$, {
                                        variant: "primary",
                                        size: "md",
                                        fullWidth: !0,
                                        text: M,
                                        onClick: S,
                                    }),
                                }),
                            ],
                        }),
                }),
            }),
        ],
    });
}
var ei = n(742860);
function eo() {
    return (0, s.jsx)(ei.A, { layoutVariant: "inset", header: (0, s.jsx)(D, {}), children: (0, s.jsx)(er, {}) });
}
