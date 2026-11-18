n.d(t, { A: () => eo });
var l = n(477900),
    s = n(582128),
    a = n(503698),
    i = n.n(a),
    r = n(120692),
    o = n(323889),
    u = n(939249),
    c = n(43990),
    d = n(834730),
    p = n(365199),
    m = n(506988),
    x = n(760914),
    f = n(590202),
    h = n(971649),
    C = n(574112),
    v = n(557637),
    N = n(398025),
    A = n(321538),
    g = n(139210),
    y = n(568329),
    j = n(165862),
    R = n(477782),
    E = n(743368),
    T = n(265872),
    _ = n(442433),
    b = n(438457),
    I = n(144779),
    P = n(494280),
    B = n(845890),
    Q = n(963713),
    S = n(818348),
    M = n(792996);
function U(e) {
    let { onSelect: t, onClose: n } = e,
        s = (0, Q.o5)(),
        a = (0, Q.Q8)(s),
        i = (0, h.wW)(),
        r = (0, P.Yh)(a);
    return (0, l.jsxs)(j.W, {
        "data-menu-migrated": !0,
        variant: "fixed",
        onSelect: function () {
            null != t ? t() : (0, _.Z_)();
        },
        navId: "quest-bar-bounty",
        "aria-label": M.intl.string(M.t.ogxXGq),
        onClose: n ?? S.tE,
        children: [
            (0, l.jsx)(
                R.rX,
                {
                    children: (0, l.jsx)(R.Dr, {
                        id: "open-game-link",
                        label: s.cta.buttonLabel,
                        action: function () {
                            (0, C._Q)(
                                { adContentId: s.id, adCreativeType: o.p.BOUNTY, cta: s.cta },
                                {
                                    content: m.uF.QUEST_BAR_V2,
                                    ctaContent: f.Cy.CONTEXT_MENU_OPEN_GAME_LINK,
                                    impressionId: i(),
                                    sourceQuestContent: m.uF.QUEST_BAR_V2,
                                },
                            );
                        },
                        icon: E.LinkExternalMediumIcon,
                        leadingAccessory: { type: "icon", icon: E.LinkExternalMediumIcon },
                    }),
                },
                "major-actions",
            ),
            (0, l.jsxs)(
                R.rX,
                {
                    children: [
                        (0, l.jsx)(R.Dr, {
                            id: "display-disclosure",
                            label: M.intl.string(M.t.GcsZKJ),
                            action: function () {
                                (0, A.Zc)(a, {
                                    content: m.uF.QUEST_BAR_V2,
                                    ctaContent: f.Cy.CONTEXT_MENU_OPEN_DISCLOSURE,
                                    impressionId: i(),
                                    sourceQuestContent: m.uF.QUEST_BAR_V2,
                                });
                            },
                        }),
                        (0, l.jsx)(R.Dr, {
                            id: "hide-entrypoint",
                            label: M.intl.string(M.t.NN79E9),
                            action: function () {
                                ((0, b.r)({
                                    type: I.F.CLICK_INTERNAL,
                                    ...r,
                                    questContentCTA: f.Cy.CONTEXT_MENU_HIDE_CONTENT,
                                    surfaceId: m.uF.QUEST_BAR_V2,
                                    sourceQuestContent: m.uF.QUEST_BAR_V2,
                                    impressionId: i(),
                                }),
                                    (0, B.Xo)(r, m.uF.QUEST_BAR_V2));
                            },
                        }),
                    ],
                },
                "minor-actions",
            ),
        ],
    });
}
function w(e) {
    let { children: t, onOpen: n, onClose: a, onSelect: i } = e,
        r = (0, Q.o5)(),
        o = (0, Q.Q8)(r),
        u = (0, h.wW)(),
        c = s.useRef(null),
        d = s.useCallback(() => {
            ((0, b.r)({
                type: I.F.CLICK_INTERNAL,
                ...(0, P.Yh)(o),
                questContentCTA: f.Cy.OPEN_CONTEXT_MENU,
                surfaceId: m.uF.QUEST_BAR_V2,
                sourceQuestContent: m.uF.QUEST_BAR_V2,
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
            return (0, l.jsx)(U, { onSelect: i, onClose: t });
        },
        animation: T.Y.Animation.NONE,
        children: (e) => (0, l.jsx)("div", { ref: c, children: t(e) }),
    });
}
var O = n(241762);
n(272111);
var F = n(652215),
    k = n(886030);
function L() {
    let e = (0, Q.o5)(),
        t = (0, Q.Q8)(e),
        n = (0, h.wW)(),
        { expansionSpring: a } = s.useContext(y.PW),
        {
            onCtxMenuOpen: j,
            onCtxMenuClose: R,
            onCtxMenuSelect: E,
            isExpanded: T,
            isExpansionAnimationComplete: _,
            collapsedHeight: b,
        } = (0, O.H)(),
        { productIcon: I } = e,
        P = s.useCallback(() => {
            (0, A.Zc)(t, {
                content: m.uF.QUEST_BAR_V2,
                ctaContent: f.Cy.OPEN_DISCLOSURE,
                sourceQuestContent: m.uF.QUEST_BAR_V2,
            });
        }, [t]),
        B = s.useCallback(() => {
            (0, C._Q)(
                { adContentId: e.id, adCreativeType: o.p.BOUNTY, cta: e.cta },
                {
                    content: m.uF.QUEST_BAR_HEADER,
                    ctaContent: f.Cy.OPEN_GAME_LINK,
                    impressionId: n(),
                    sourceQuestContent: m.uF.QUEST_BAR_V2,
                },
            );
        }, [e.cta, e.id, n]);
    return (0, l.jsxs)(g.A, {
        className: k.bU,
        children: [
            (0, l.jsx)(g.h, { className: k.Tu }),
            (0, l.jsxs)(r.animated.div, {
                className: k.W2,
                style: {
                    marginInlineStart: a.to({ range: [0, 1], output: [4, 0] }).to((e) => `${e}px`),
                    transform: a.to({ range: [0, 1], output: [b / 2 - 24 - 6, 0] }).to((e) => `translateY(${e}px)`),
                },
                children: [
                    null != I &&
                        (0, l.jsx)(u.D, {
                            onClick: B,
                            className: i()(k.iY, k.vk, { [k.wm]: T && _ }),
                            children: (0, l.jsx)(r.animated.div, {
                                className: k.U$,
                                style: {
                                    transform: a.to({ range: [0, 1], output: [1, 0.75] }).to((e) => `scale(${e})`),
                                },
                                children: (0, l.jsx)(v._M, {
                                    id: "QuestBarBounty_productIcon",
                                    children: (t) =>
                                        (0, l.jsx)("img", {
                                            ref: t,
                                            src: (0, x.lR)({ assetUrl: I, width: 32, height: 32 }),
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
                                theme: F.NJ8.DARK,
                                disableAdaptiveTheme: !0,
                                children: (t) =>
                                    (0, l.jsx)(r.animated.div, {
                                        "aria-hidden": !0,
                                        className: i()(t, k.it),
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
                            (0, l.jsx)(g.h, {
                                className: k.OO,
                                children: (0, l.jsx)(u.D, {
                                    className: i()(k.y8, k.RK),
                                    onClick: P,
                                    children: (0, l.jsx)(d.E, {
                                        color: "text-overlay-light",
                                        variant: "body-xs/normal",
                                        lineClamp: 1,
                                        children: M.intl.string(M.t.o6FLcF),
                                    }),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)(g.h, {
                className: k.jd,
                children: (0, l.jsx)(w, {
                    onOpen: j,
                    onClose: R,
                    onSelect: E,
                    children: (e) =>
                        (0, l.jsx)(u.D, {
                            ...e,
                            className: i()(k.oz, k.rb),
                            "aria-label": M.intl.string(M.t.DEoVWZ),
                            children: (0, l.jsx)(p.MoreHorizontalIcon, {
                                size: "md",
                                color: "currentColor",
                                className: i()(k.Bx, k.ON),
                            }),
                        }),
                }),
            }),
        ],
    });
}
var D = n(984827),
    V = n(855986),
    W = n(534514),
    Y = n(821609),
    q = n(775602),
    X = n(486470),
    H = n(500180),
    K = n(792620),
    G = n(192308),
    $ = n(415441),
    z = n(419403);
function Z(e) {
    let { isAnimated: t, className: n } = e,
        s = (0, V.bG)([q.Ay], () => q.Ay.useReducedMotion);
    return (0, l.jsx)("img", {
        className: i()(z.Q, n),
        src:
            t && !s
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
    el = n(970908);
let es =
        "https://cdn.discordapp.com/assets/content/305f47e78a81697b98faffc80e5b7c0dfdc1829144937eec1665324417d146f2.png",
    ea = { url: el.A, mimetype: "video/webm", isAnimated: !0 };
function ei() {
    let e = (0, Q.o5)(),
        { imagePreview: t, productName: a, videoDurationSeconds: u } = e,
        p = (0, X.IW)(e, D.x.LANDSCAPE),
        { isExpanded: C, isExpansionAnimationComplete: A, collapsedHeight: g } = (0, O.H)(),
        { expansionSpring: j } = s.useContext(y.PW),
        R = (0, h.wW)(),
        E = (0, V.bG)([q.Ay], () => q.Ay.useReducedMotion),
        [T, _] = s.useState(!1),
        P = s.useMemo(() => (null == p ? null : { url: p, mimetype: (0, x.vm)(p), isAnimated: !0 }), [p]),
        B = !E || T,
        S = s.useMemo(() => {
            let e = u ?? 0;
            return e <= 0 ? M.intl.string(M.t.kfks9Y) : (0, H.AF)((0, K.X3)({ progressSeconds: 0, targetSeconds: e }));
        }, [u]),
        U = s.useCallback(() => {
            ((0, b.r)({
                type: I.F.CLICK_INTERNAL,
                adCreativeType: o.p.BOUNTY,
                adCreativeId: e.id,
                questContentCTA: f.Cy.START_BOUNTY,
                surfaceId: m.uF.QUEST_BAR_V2,
                sourceQuestContent: m.uF.QUEST_BAR_V2,
                impressionId: R(),
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
                                n.e(361233),
                            ]).then(n.bind(n, 166376));
                            return (n) => (0, l.jsx)(e, { ...n, bounty: t, sourceQuestContent: s, openedAtMs: a });
                        },
                        { modalKey: "BOUNTY_VIDEO_MODAL" },
                    );
                })({ bounty: e, sourceQuestContent: m.uF.QUEST_BAR_V2 }));
        }, [e, R]),
        w = C && A,
        k = !C || A,
        L = w || E ? (0, x.UX)(es, { format: "webp" }) : es;
    return (0, l.jsxs)("div", {
        className: en.rf,
        onMouseEnter: () => {
            E && !T && _(!0);
        },
        onMouseLeave: () => {
            E && T && _(!1);
        },
        children: [
            (0, l.jsxs)("div", {
                className: en.xX,
                children: [
                    (0, l.jsxs)(r.animated.div, {
                        className: en.Tj,
                        style: { opacity: (0, N.a)(j.to({ range: [0, 1], output: [0, 1] })) },
                        children: [
                            null != t &&
                                (0, l.jsx)(v._M, {
                                    id: "QuestBarBounty_previewImage",
                                    children: (e) => (0, l.jsx)("img", { ref: e, src: t, alt: "", className: en.$_ }),
                                }),
                            null != P &&
                                (0, l.jsx)(v._M, {
                                    id: "QuestBarBounty_previewVideo",
                                    children: (e) =>
                                        (0, l.jsx)(ee.X, {
                                            ref: e,
                                            isHovered: T,
                                            asset: P,
                                            poster: t,
                                            className: i()(en.$_, null != t && en.Ki, { [en.mv]: B || null == t }),
                                        }),
                                }),
                        ],
                    }),
                    (0, l.jsx)(r.animated.div, {
                        className: en.PY,
                        style: { top: g, opacity: (0, N.a)(j.to({ range: [0, 1], output: [1, 0] })) },
                        children: (0, l.jsx)(Z, { isAnimated: !w }),
                    }),
                    (0, l.jsx)(r.animated.div, {
                        className: en.ch,
                        style: { opacity: (0, N.a)(j.to({ range: [0, 1], output: [1, 0] })) },
                        children: (0, l.jsx)("img", { src: L, alt: "", className: en.QF }),
                    }),
                ],
            }),
            (0, l.jsx)("div", { className: en.tV }),
            (C || !A) && (0, l.jsx)(Z, { className: en.dq, isAnimated: !0 }),
            (0, l.jsx)(J.T, {
                children: (0, l.jsx)(c.N, {
                    theme: F.NJ8.DARK,
                    disableAdaptiveTheme: !0,
                    children: (e) =>
                        (0, l.jsxs)("div", {
                            className: i()(e, en.Qs),
                            children: [
                                (0, l.jsx)("div", {
                                    className: i()(et.al, et.Yi, en.Qq),
                                    children: (0, l.jsx)($.N, {
                                        showVideo: w,
                                        imageAsset: {
                                            asset: ea,
                                            assetId: "QuestBarBounty_rewardTileStatic",
                                            alt: M.intl.string(M.t.UMclVN),
                                            className: et.XM,
                                        },
                                        videoAsset: {
                                            asset: ea,
                                            assetId: "QuestBarBounty_rewardTileAnimated",
                                            className: i()(et.eB, et.WY),
                                        },
                                        imageSize: { width: 64, height: 64 },
                                    }),
                                }),
                                (0, l.jsxs)("div", {
                                    className: en.C,
                                    children: [
                                        (0, l.jsx)(W.D, {
                                            color: "text-strong",
                                            variant: "heading-sm/medium",
                                            lineClamp: 2,
                                            className: en.YW,
                                            children: a,
                                        }),
                                        (0, l.jsx)(d.E, {
                                            variant: "body-xs/normal",
                                            lineClamp: 3,
                                            className: en.YW,
                                            children: M.intl.string(M.t["1uzE2S"]),
                                        }),
                                    ],
                                }),
                                (0, l.jsx)("div", {
                                    className: i()({ [en._o]: !k }),
                                    children: (0, l.jsx)(Y.$, {
                                        variant: "primary",
                                        size: "md",
                                        fullWidth: !0,
                                        text: S,
                                        onClick: U,
                                    }),
                                }),
                            ],
                        }),
                }),
            }),
        ],
    });
}
var er = n(742860);
function eo() {
    return (0, l.jsx)(er.A, { layoutVariant: "inset", header: (0, l.jsx)(L, {}), children: (0, l.jsx)(ei, {}) });
}
