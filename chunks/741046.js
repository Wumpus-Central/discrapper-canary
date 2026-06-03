t.d(s, { A: () => tv }), t(323874), t(14289), t(35956);
var i,
    a = t(627968),
    n = t(64700),
    l = t(503698),
    r = t.n(l),
    c = t(873263),
    o = t(17928),
    d = t(289873),
    m = t(228366),
    u = t(73825),
    x = t(974544),
    g = t(107834),
    h = t(793574),
    N = t(688810),
    j = t(753390),
    p = t(86379),
    f = t(160946),
    A = t(545075),
    v = t(949030),
    b = t(611924),
    C = t(532794),
    I = t(976860),
    E = t(351906),
    T = t(287809),
    R = t(295405),
    _ = t(166403),
    S = t(174459),
    M = t(474090),
    P = t(945960),
    y = t(791105),
    D = t(286320),
    k = t(422936),
    O = t(234419),
    G = t(851746),
    w = t(727949),
    L = t(269115),
    U = t(43990),
    H = t(689175),
    B = t(775602),
    F = t(192444),
    z = t(440005),
    K = t(49132),
    W = t(428262),
    V = t(960851),
    Q = t(994763),
    X = t(949964),
    J = t(226830),
    Y = t(366010),
    Z = t(736653),
    q = t(303136),
    $ = t(676279);
let ee = (e) => {
    let s,
        { className: t } = e,
        i = (0, $.TM)(),
        n = (0, Y.q)((0, Z.Ay)());
    return (
        (s = i
            ? n
                ? "https://cdn.discordapp.com/assets/content/06ad5b3e9274c7e75f135129da3141ef42681698d3c0cf79b8c83e8526c2064f.mov"
                : "https://cdn.discordapp.com/assets/content/e306e75bdcd95e261e8d501c2cc6674bf183ff83e53b8dcae4e7bfa98d15c273.mov"
            : n
              ? "https://cdn.discordapp.com/assets/content/2b403885861e2c1a8268fbdb8ba90a93b72fab9937dd1cdad47e68f814969dac.webm"
              : "https://cdn.discordapp.com/assets/content/5412744d944cb3bf22279ee7741dbdca87bd644fa128adcfd2d50ae56543d7c9.webm"),
        (0, a.jsx)("div", {
            className: t,
            children: (0, a.jsx)(
                q.A,
                {
                    fallbackImage: n
                        ? "https://cdn.discordapp.com/assets/content/6ddb7f92b6f26f24c70cc7bf84e11bb423378d47cd111866af3980b332bad336.png"
                        : "https://cdn.discordapp.com/assets/content/acbc696c59f02098ff0014edaf0ded799884a3fefed7f20bcdb6cf038bba0542.png",
                    children: (0, a.jsx)("source", { src: s }),
                },
                s,
            ),
        })
    );
};
var es =
        (((i = {}).HOME = "home"),
        (i.WHATS_NEW = "whatsNew"),
        (i.BEST_OF_NITRO = "bestOfNitro"),
        (i.PLANS = "plans"),
        (i.COMPARE = "compare"),
        i),
    et = t(922139),
    ei = t(717421),
    ea = t(65470),
    en = t(792656),
    el = t(652215),
    er = t(870408);
let ec = function (e) {
    let { isVisible: s, subscriptionTier: t, isEligibleForBogoPromotion: i } = e,
        n = (0, ei.z)({
            transform: s ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!s,
            config: { tension: 120, friction: 12 },
        }),
        l = { section: el.JJy.MARKETING_FLOATING_CTA };
    return (0, a.jsx)(et.animated.div, {
        className: er.i,
        style: n,
        "data-mtctest-ignore": "true",
        children: (0, a.jsxs)("div", {
            className: er.U,
            children: [
                (0, a.jsx)(en.A, {
                    size: "md",
                    subscriptionTier: t,
                    hasActivePromotion: !!i,
                    isPersistentCTA: !0,
                    premiumModalAnalyticsLocation: l,
                }),
                (0, a.jsx)(ea.A, { variant: "secondary", size: "md" }),
            ],
        }),
    });
};
var eo = t(534514),
    ed = t(702841),
    em = t(652533),
    eu = t(20458),
    ex = t(80933),
    eg = t(180894);
let eh = () => {
    let e = (0, ed.bG)([B.A], () => B.A.useReducedMotion);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", {
                className: ex.BI,
                children: (0, a.jsx)(em.Ay, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: em.$G },
                    yAxisAnimationData: { range: 20, duration: em.Mp, path: em.aV.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: e,
                    children: (0, a.jsx)("img", { src: eg.A, alt: "", className: ex.Q }),
                }),
            }),
            (0, a.jsx)(eu.A, {
                isMotionReduced: e,
                boltContainerClassName: ex.nJ,
                carContainerClassName: ex.IN,
                hammerContainerClassName: ex.Gj,
                keyContainerClassName: ex.FV,
                starContainerClassName: ex.E1,
                boltAssetClassName: ex.j7,
                carAssetClassName: ex.or,
                hammerAssetClassName: ex.Wv,
                keyAssetClassName: ex.rs,
                starAssetClassName: ex.OY,
            }),
        ],
    });
};
var eN = t(375708),
    ej = t(296725);
let ep = n.forwardRef((e, s) => {
    let { analyticsLocations: t } = (0, N.Ay)(h.A.PREMIUM_MARKETING_FOOTER_CTA);
    return (0, a.jsx)(N.f5, {
        value: t,
        children: (0, a.jsx)("div", {
            ref: s,
            className: ej.kL,
            children: (0, a.jsxs)("div", {
                className: ej.hQ,
                children: [
                    (0, a.jsx)(eh, {}),
                    (0, a.jsx)(eo.D, {
                        variant: "display-md",
                        color: "text-strong",
                        className: ej.RH,
                        children: eN.intl.string(eN.t.lEw32m),
                    }),
                ],
            }),
        }),
    });
});
ep.displayName = "PremiumMarketingFooter";
var ef = t(403581),
    eA = t(939249),
    ev = t(834730),
    eb = t(742589),
    eC = t(909536),
    eI = t(400669),
    eE = t(876587),
    eT = t(503255);
let eR = (e) => {
    let { navBarSections: s, activeSectionId: t, isAnimationComplete: i } = e,
        l = {
            [es.HOME]: eN.intl.string(eN.t.uGRXjS),
            [es.WHATS_NEW]: eN.intl.string(eN.t["mfcR/v"]),
            [es.BEST_OF_NITRO]: eN.intl.string(eN.t.xQKkE8),
            [es.PLANS]: eN.intl.string(eN.t.wyNMnm),
            [es.COMPARE]: eN.intl.string(eN.t.pwD7If),
        },
        r = (0, o.bG)([T.default], () => T.default.getCurrentUser()),
        c = (0, eC.Gh)("premium_marketing_nav_bar") && null != r,
        d = n.useRef(null),
        m = Object.values(s).sort((e, s) => e.order - s.order);
    return (0, a.jsxs)(eb.A, {
        className: eT.TQ,
        transparent: !0,
        children: [
            (0, a.jsxs)("div", {
                className: eT.Wc,
                children: [
                    (0, a.jsxs)("div", {
                        className: eT.wG,
                        children: [
                            (0, a.jsx)(ef.t, { className: eT.nE, colorClass: eT.oG }),
                            (0, a.jsx)("div", {
                                className: eT.zc,
                                role: "tablist",
                                "aria-label": eN.intl.string(eN.t.O9MiXY),
                                children: m.map((e) => {
                                    let s = t === e.id,
                                        i = l[e.id];
                                    return (0, a.jsxs)(
                                        eA.D,
                                        {
                                            role: "tab",
                                            "aria-selected": s,
                                            className: eT.S0,
                                            onClick: e.scrollToSection,
                                            children: [
                                                (0, a.jsx)(ev.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-strong",
                                                    children: i,
                                                }),
                                                s && (0, a.jsx)("div", { className: eT.W0 }),
                                            ],
                                        },
                                        i,
                                    );
                                }),
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: eT.MQ,
                        children: [
                            c &&
                                (0, a.jsx)(eI.l, { ref: d, size: "sm", location: h.A.PREMIUM_WISHLIST_MARKETING_PAGE }),
                            (0, a.jsx)(ea.A, { size: "sm", variant: "overlay-secondary" }),
                        ],
                    }),
                ],
            }),
            c && i && (0, a.jsx)(eE.O, { targetElementRef: d }),
        ],
    });
};
var e_ = t(31502),
    eS = t(990078),
    eM = t(704333),
    eP = t(414499),
    ey = t(597770),
    eD = t(500060),
    ek = t(885574),
    eO = t(406860),
    eG = t(985603),
    ew = t(983060),
    eL = t(788868),
    eU = t(237146),
    eH = t(56598);
function eB() {
    let { sectionRef: e, handleVisibilityChange: s } = (0, eO.A)({ boxType: eG.XQ, thirdPartyPartner: eG.FZ }),
        t = [
            { icon: eM.B, text: eN.intl.string(eU.default.MUypiB) },
            { icon: eP.h, text: eN.intl.string(eU.default.ec5Rdd) },
            { icon: ey.o, text: eN.intl.string(eU.default["9t2CzW"]), tooltip: eU.default.AyECej },
            { icon: eD.o, text: eN.intl.string(eU.default.R7YJAY) },
        ];
    return (0, a.jsx)(L.L, {
        innerRef: e,
        onChange: s,
        threshold: 0.5,
        children: (0, a.jsx)("div", {
            ref: e,
            className: eH.iE,
            children: (0, a.jsxs)("div", {
                className: eH.Nr,
                children: [
                    (0, a.jsxs)("div", {
                        className: eH.j,
                        children: [
                            (0, a.jsx)("div", { className: eH._g }),
                            (0, a.jsx)("div", { className: eH.$h }),
                            (0, a.jsx)("div", { className: eH.Rv }),
                            (0, a.jsx)("div", { className: eH.Lw }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: eH.CT,
                        children: [
                            (0, a.jsxs)("div", {
                                className: eH.Qs,
                                children: [
                                    (0, a.jsxs)("div", {
                                        children: [
                                            (0, a.jsx)(eo.D, {
                                                variant: "heading-xxl/bold",
                                                color: "text-strong",
                                                className: eH.R_,
                                                children: eN.intl.string(eU.default.rkt1aw),
                                            }),
                                            (0, a.jsxs)("div", {
                                                children: [
                                                    t.map((e) => {
                                                        let { icon: s, text: t, tooltip: i } = e;
                                                        return (0, a.jsxs)(
                                                            "div",
                                                            {
                                                                className: eH.yf,
                                                                children: [
                                                                    (0, a.jsx)(s, {
                                                                        size: "sm",
                                                                        color: "var(--icon-strong)",
                                                                    }),
                                                                    (0, a.jsx)(ev.E, {
                                                                        variant: "text-md/medium",
                                                                        color: "text-strong",
                                                                        children: t,
                                                                    }),
                                                                    null != i &&
                                                                        (0, a.jsx)("div", {
                                                                            className: eH.Jn,
                                                                            children: (0, a.jsx)(eS.m, {
                                                                                text: eN.intl.string(i),
                                                                                position: "top",
                                                                                children: (0, a.jsx)(ek.m, {
                                                                                    size: "xxs",
                                                                                    color: "var(--icon-default)",
                                                                                }),
                                                                            }),
                                                                        }),
                                                                ],
                                                            },
                                                            t,
                                                        );
                                                    }),
                                                    (0, a.jsx)("div", {
                                                        className: eH.xF,
                                                        children: (0, a.jsx)(en.A, {
                                                            variantOverride: "secondary",
                                                            size: "md",
                                                            subscriptionTier: eL.pe.TIER_2,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, a.jsx)("div", {
                                        className: eH.WE,
                                        children: (0, a.jsx)(ev.E, {
                                            variant: "text-xs/medium",
                                            color: "text-link",
                                            children: eN.intl.format(eU.default.KDKdWi, { termsLink: (0, ew.xA)() }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, a.jsx)("div", {
                                className: eH.r1,
                                children: (0, a.jsx)("img", {
                                    className: eH.wm,
                                    src: "https://cdn.discordapp.com/assets/content/183a222feae2555e7a057002bbcae445e70efa78fb204d353c9c93b4a1f210d4.png",
                                    alt: "Xbox Game Pass",
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var eF = t(750338),
    ez = t(280041),
    eK = t(856556);
function eW(e) {
    let {
        className: s,
        boxLayout: t,
        title: i,
        shouldLoadVideo: n,
        isReducedMotion: l,
        startLeftAligned: c = !1,
        highlightBento: o,
    } = e;
    return (0, a.jsxs)("div", {
        className: r()(eK.boxBackdrop, s),
        children: [
            (0, a.jsx)(eo.D, {
                className: eK.bentoSectionHeader,
                variant: "display-md",
                color: "text-strong",
                children: i,
            }),
            null != o && (0, a.jsx)("div", { className: eK.highlightBento, children: o }),
            (0, a.jsx)("div", {
                className: eK.bentoBoxesGrid,
                children: t.map((e, s) => {
                    let t;
                    switch (e.length) {
                        case 3:
                            t = ez.A0.SMALL;
                            break;
                        case 2:
                            t = ez.A0.MEDIUM;
                            break;
                        default:
                            t = ez.A0.LARGE;
                    }
                    return (0, a.jsx)(a.Fragment, {
                        children: e.map((e) =>
                            (0, a.jsx)(
                                eF.A,
                                { index: s + +!!c, ...e, size: t, shouldLoadVideo: n, isReducedMotion: l },
                                e.name,
                            ),
                        ),
                    });
                }),
            }),
        ],
    });
}
let eV = n.memo(function (e) {
        let s = (0, e_.l)("premium_marketing_bento"),
            { whatsNewBoxes: t } = (0, ez.Ay)(s);
        return (0, a.jsx)(eW, {
            boxLayout: t,
            title: eN.intl.string(eN.t.LRmNAl),
            startLeftAligned: !0,
            highlightBento: s ? (0, a.jsx)(eB, {}) : null,
            ...e,
        });
    }),
    eQ = n.memo(function (e) {
        let { bestOfBoxes: s } = (0, ez.Ay)();
        return (0, a.jsx)(eW, { boxLayout: s, title: eN.intl.string(eN.t.EnzW2H), startLeftAligned: !0, ...e });
    });
var eX = t(877624),
    eJ = t(707554),
    eY = t(526292),
    eZ = t(236834),
    eq = t(549996),
    e$ = t(810660),
    e0 = t(371764),
    e2 = t(97808),
    e1 = t(854627),
    e8 = t(778712),
    e6 = t(45861);
function e7(e) {
    let { referrer: s } = e,
        { avatarSrc: t, eventHandlers: i } = (0, e1.A)({ userId: s?.id, size: e8._3.SIZE_24, animateOnHover: !0 });
    return (0, a.jsx)("div", {
        className: e6.$6,
        children: (0, a.jsxs)("div", {
            className: e6.sc,
            children: [
                (0, a.jsx)("div", {
                    className: e6.kR,
                    children: (0, a.jsx)(e2.eu, { src: t, "aria-label": s.username, size: e8._3.SIZE_32, ...i }),
                }),
                (0, a.jsx)(eo.D, {
                    variant: "heading-sm/normal",
                    className: e6.FS,
                    color: "text-strong",
                    children: eN.intl.format(eN.t.IqxblS, {
                        username: null != s.globalName ? s.globalName : s.username,
                    }),
                }),
            ],
        }),
    });
}
var e5 = t(579245),
    e4 = t(175569),
    e9 = t(369805);
let e3 = () => {
    let e = (0, e9.A)();
    return null == e ? null : (0, a.jsx)(e4.A, { text: e });
};
var se = t(97352);
function ss() {
    let e = (0, o.bG)([se.A], () => se.A.getForSkuAndInterval((0, W.mH)(eL.pe.TIER_0), eL.WT.MONTH));
    return null != e ? (0, W.sS)(e) : "\u2026";
}
var st = t(141502),
    si = t(188393);
let sa = (e) => {
    let { containerVisibilityPercentage: s } = e,
        t = (0, ed.bG)([B.A], () => B.A.useReducedMotion),
        i = (0, $.TM)();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(st.A, {
                supportHEVCAlpha: i,
                isMotionReduced: t,
                containerVisibilityPercentage: s,
                containerClassName: si.wG,
                assetClassName: si.lu,
            }),
            (0, a.jsx)(eu.A, {
                isMotionReduced: t,
                containerVisibilityPercentage: s,
                boltContainerClassName: si.nJ,
                carContainerClassName: si.IN,
                hammerContainerClassName: si.Gj,
                keyContainerClassName: si.FV,
                starContainerClassName: si.E1,
                boltAssetClassName: si.j7,
                carAssetClassName: si.or,
                hammerAssetClassName: si.Wv,
                keyAssetClassName: si.rs,
                starAssetClassName: si.OY,
            }),
        ],
    });
};
var sn = t(469408);
let sl = n.memo(
    n.forwardRef((e, s) => {
        let { className: t, subscriptionTier: i, isEligibleForBogoPromotion: n } = e,
            { analyticsLocations: l } = (0, N.Ay)(h.A.PREMIUM_MARKETING_HERO_CTA),
            c = ss(),
            d = (0, eZ.A)(),
            m = null != d,
            u = (0, o.bG)([B.A], () => B.A.useReducedMotion),
            { visibilityPercentageRef: x, visibilityPercentage: g } = (0, e$.U)(!u),
            j = (0, D.b)(),
            p = !m && j.length > 0,
            f = (0, eq.c)(eX.C.MARKETING_PAGE_BANNER),
            A = null != f && "marketingPageBanner" === f.properties.properties.oneofKind,
            v = (0, eY.ar)() && !A,
            b = (0, k.O)(),
            C = (null != b && eL.U4.includes(b.discountId)) || A;
        return (0, a.jsx)(N.f5, {
            value: l,
            children: (0, a.jsx)("div", {
                ref: s,
                className: r()(sn.kL, t),
                "data-testid": "marketing-page-hero-header",
                children: (0, a.jsx)("div", {
                    ref: x,
                    children: (0, a.jsxs)("div", {
                        className: sn.hQ,
                        children: [
                            (0, a.jsx)(sa, { containerVisibilityPercentage: g }),
                            v && (0, a.jsx)("div", { className: sn.XN, children: (0, a.jsx)(e3, {}) }),
                            (0, a.jsx)("div", {
                                className: sn.s8,
                                children: (0, a.jsx)(eJ.F, {
                                    forceLevel: 1,
                                    children: (0, a.jsx)(eo.D, {
                                        variant: "display-md",
                                        color: "text-strong",
                                        className: sn.wx,
                                        children: eN.intl.string(eN.t.YCZldK),
                                    }),
                                }),
                            }),
                            (0, a.jsxs)("div", {
                                className: sn.rf,
                                children: [
                                    m &&
                                        (0, a.jsx)("div", {
                                            className: sn.eZ,
                                            children: (0, a.jsx)(e7, { referrer: d }),
                                        }),
                                    p &&
                                        (0, a.jsx)("div", {
                                            className: sn.Qn,
                                            children: (0, a.jsx)(e5.A, {
                                                textColor: "text-strong",
                                                smallerText: !1,
                                                isApplicationHome: !0,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    (0, a.jsxs)("div", {
                                        className: v ? sn.es : sn.UJ,
                                        children: [
                                            (0, a.jsx)(en.A, {
                                                size: "md",
                                                fullWidth: v,
                                                hasActivePromotion: !!n,
                                                subscriptionTier: C && null == i ? eL.pe.NONE : i,
                                                buttonTextOverride: C ? eN.intl.string(eN.t["2pG5Ga"]) : void 0,
                                            }),
                                            !v && (0, a.jsx)(ea.A, { variant: "secondary", size: "md" }),
                                        ],
                                    }),
                                    (0, a.jsx)("div", {
                                        className: sn.iQ,
                                        children: (0, a.jsx)(ev.E, {
                                            color: "text-muted",
                                            variant: "text-xs/medium",
                                            children: eN.intl.format(eN.t.kt9wxs, { cheapestMonthlyPrice: c }),
                                        }),
                                    }),
                                    null != f &&
                                        "marketingPageBanner" === f.properties.properties.oneofKind &&
                                        (0, a.jsx)(e0.x, {
                                            componentId: f.id,
                                            promotionBannerMarketingComponentFields:
                                                f.properties.properties.marketingPageBanner,
                                        }),
                                ],
                            }),
                        ],
                    }),
                }),
            }),
        });
    }),
);
var sr = t(661531),
    sc = t(820081),
    so = t(140735),
    sd = t(401432),
    sm = t(580630),
    su = t(410516),
    sx = t(795269);
t(321073);
var sg = t(773669),
    sh = t(975571),
    sN = t(398523),
    sj = t(881373),
    sp = t(84483),
    sf = t(190107),
    sA = t(962995),
    sv = t(490285),
    sb = t(864386),
    sC = t(799642),
    sI = t(202600);
let sE = (e) => {
        let { includes: s } = e;
        return s
            ? (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(sc.B, { size: "sm", color: sr.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                      (0, a.jsx)(so.A, { children: eN.intl.string(eN.t["tq+6t/"]) }),
                  ],
              })
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(sd.a, { size: "xs", color: sr.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                      (0, a.jsx)(so.A, { children: eN.intl.string(eN.t.l4qZrp) }),
                  ],
              });
    },
    sT = (e) => {
        let { label: s, tier0ColumnData: t, tier2ColumnData: i } = e;
        return (0, a.jsxs)("tr", {
            className: r()(sC.nM, sC.WQ),
            children: [
                (0, a.jsx)("th", {
                    scope: "row",
                    className: sC.nx,
                    children: (0, a.jsx)(ev.E, { variant: "text-md/medium", children: s }),
                }),
                (0, a.jsx)("td", {
                    className: sC.Hn,
                    children:
                        null != t.text
                            ? (0, a.jsx)(ev.E, { variant: "text-md/medium", children: t.text })
                            : (0, a.jsx)(sE, { includes: !!t.includes }),
                }),
                (0, a.jsx)("td", {
                    className: sC.Hn,
                    children:
                        null != i.text
                            ? (0, a.jsx)(ev.E, { variant: "text-md/medium", children: i.text })
                            : (0, a.jsx)(sE, { includes: !!i.includes }),
                }),
            ],
        });
    },
    sR = (e) => {
        let { title: s, subtitle: t, rows: i } = e;
        return (0, a.jsxs)("tbody", {
            children: [
                (0, a.jsx)("tr", {
                    className: r()(sC.nM, sC.Gf),
                    children: (0, a.jsxs)("td", {
                        className: sC.nx,
                        colSpan: 3,
                        children: [
                            (0, a.jsx)(eo.D, { variant: "heading-lg/bold", children: s }),
                            null != t && (0, a.jsx)(ev.E, { variant: "text-xs/medium", children: t }),
                        ],
                    }),
                }),
                i.map((e) => (0, a.jsx)(sT, { ...e }, e.id)),
            ],
        });
    },
    s_ = (e) => {
        let { premiumType: s, priceString: t } = e,
            i = s === eL.PremiumTypes.TIER_0 ? eN.intl.string(eN.t.tUbSDK) : eN.intl.string(eN.t.Ipxkog);
        return (0, a.jsxs)("div", {
            className: sC.nn,
            children: [
                (0, a.jsxs)("div", {
                    className: sC.KS,
                    children: [
                        (0, a.jsx)(ef.t, { colorClass: sC.oG }),
                        (0, a.jsx)(eo.D, { variant: "heading-sm/semibold", children: i }),
                    ],
                }),
                (0, a.jsx)(eo.D, { variant: "heading-sm/semibold", children: t }),
            ],
        });
    },
    sS = (e) => {
        let { tier0Price: s, tier2Price: t, shouldUseDiscountPrice: i, tier2DiscountedPriceString: n } = e,
            l = i ? n : (0, sm.$g)(t.amount, t.currency);
        return (0, a.jsx)("thead", {
            children: (0, a.jsxs)("tr", {
                className: sC.U1,
                children: [
                    (0, a.jsx)("th", {
                        scope: "col",
                        className: sC.Cr,
                        children: (0, a.jsx)(eo.D, {
                            variant: "heading-xl/bold",
                            children: eN.intl.string(eN.t.ED4UVD),
                        }),
                    }),
                    (0, a.jsx)("th", {
                        scope: "col",
                        className: sC.Hn,
                        children: (0, a.jsx)(s_, {
                            premiumType: eL.PremiumTypes.TIER_0,
                            priceString: (0, sm.$g)(s.amount, s.currency),
                        }),
                    }),
                    (0, a.jsx)("th", {
                        scope: "col",
                        className: sC.Hn,
                        children: (0, a.jsx)(s_, { premiumType: eL.PremiumTypes.TIER_2, priceString: l }),
                    }),
                ],
            }),
        });
    },
    sM = (e) => {
        let s,
            { className: t, hidePill: i = !1, selectedPlanTier: l = eL.PremiumTypes.TIER_2 } = e,
            { analyticsLocations: c } = (0, N.Ay)(h.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            o = (0, O.V)(),
            d = o?.subscription_trial?.sku_id,
            m = (0, k.O)(),
            u = (0, su.YJ)(m),
            x = null != m && (0, su.U9)(m, eL.pe.TIER_2) && u === eL.gD.PREMIUM_MONTH_TIER_2,
            g = (0, su.N1)(u),
            j = null != g ? `${g}/${(0, W.FJ)(eL.WT.MONTH)}` : "",
            p = (0, W.JM)(eL.gD.PREMIUM_MONTH_TIER_0),
            f = (0, W.JM)(eL.gD.PREMIUM_MONTH_TIER_2),
            A = (() => {
                let e = (0, e_.l)("premium_marketing_comparison"),
                    s = [
                        {
                            id: 10,
                            label: eN.intl.string(eN.t["svn/YX"]),
                            tier0ColumnData: { includes: !0 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 7,
                            label: eN.intl.string(eN.t.ID5B6Z),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 13,
                            label: eN.intl.string(eN.t["PBUrx/"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 22,
                            label: eN.intl.string(sb.default["86GtGH"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                    ],
                    t = null,
                    i = [],
                    { shouldShowBonusOrbsUX: a, multiplier: n } = (0, F.lk)(sf.rE.NITRO_HOME_MARKETING),
                    { enabled: l } = sN.Ay.useConfig({ location: "useGetV2PlanComparisonTableRowsApplicationHome" }),
                    { functionalityEnabled: r } = (0, sj.YS)({
                        location: "useGetV2PlanComparisonTableRowsApplicationHome",
                    }),
                    { isInTreatment: c } = (0, sp.uX)("premium_marketing_comparison");
                return (
                    e &&
                        ((t = {
                            id: 23,
                            title: eN.intl.string(eN.t.NG1e6l),
                            subtitle: eN.intl.format(eU.default.uJcbMv, {
                                termsLink: sh.A.getArticleURL(el.MVz.NITRO_2_POINT_0),
                            }),
                            rows: [
                                {
                                    id: 24,
                                    label: eN.intl.string(eU.default.OpOEmk),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                            ],
                        }),
                        l &&
                            t.rows.push({
                                id: 25,
                                label: eN.intl.string(eU.default.Q0A42h),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        r &&
                            t.rows.push({
                                id: 26,
                                label: eN.intl.string(sA.default["gc2sa/"]),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        a &&
                            i.push({
                                id: 27,
                                label: eN.intl.formatToPlainString(eN.t.Uhemob, { bonusOrbMultiplier: n }),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        c &&
                            i.push({
                                id: 28,
                                label: eN.intl.string(sv.default["20tmSN"]),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            })),
                    [
                        ...(null != t ? [t] : []),
                        { id: 17, title: eN.intl.string(eN.t.Ij3Zmv), rows: s },
                        {
                            id: 18,
                            title: eN.intl.string(eN.t.Wme3nX),
                            rows: [
                                {
                                    id: 0,
                                    label: eN.intl.string(eN.t.LrUABv),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 1,
                                    label: eN.intl.string(eN.t.DmfiwT),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 2,
                                    label: eN.intl.string(eN.t.Uukj4o),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 12,
                                    label: eN.intl.string(eN.t.NIKDqG),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 9,
                                    label: eN.intl.string(eN.t["5OAKhw"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                            ],
                        },
                        {
                            id: 19,
                            title: eN.intl.string(eN.t["6b3ydG"]),
                            rows: [
                                {
                                    id: 4,
                                    label: eN.intl.string(eN.t["ufhQC+"]),
                                    tier0ColumnData: { text: (0, W.EJ)(eL.PremiumTypes.TIER_0) },
                                    tier2ColumnData: { text: (0, W.EJ)(eL.PremiumTypes.TIER_2) },
                                },
                                {
                                    id: 11,
                                    label: eN.intl.string(eN.t.qQxxVc),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 3,
                                    label: eN.intl.string(eN.t["9kRJS8"]),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 21,
                                    label: eN.intl.string(eN.t["5BJqNF"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 5,
                                    label: eN.intl.string(eN.t.VwxlMw),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 6,
                                    label: eN.intl.formatToPlainString(eN.t.nyhDpw, {
                                        numBoosts: eL.M4,
                                        percentageOff: (0, sm.l9)(sg.default.locale, eL.oX / 100),
                                    }),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 16,
                                    label: eN.intl.string(eN.t["93xPy3"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 8,
                                    label: eN.intl.string(eN.t.IzrZHz),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 20,
                                    label: eN.intl.string(eN.t.Rj1Qys),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                ...i,
                                {
                                    id: 15,
                                    label: eN.intl.formatToPlainString(eN.t["8crdzJ"], { maxChars: el.CS1 }),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 14,
                                    label: eN.intl.string(eN.t["il8+nC"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                            ],
                        },
                    ]
                );
            })();
        if (i) s = null;
        else {
            let e = null != o ? eN.intl.string(eN.t.IBYG5U) : eN.intl.string(eN.t.TR2B4T);
            s = (0, a.jsx)(sx.R, { className: r()(sC.Io, sC.SP), text: e });
        }
        let v = d === eL.pe.TIER_0 || l === eL.PremiumTypes.TIER_0;
        return (0, a.jsx)(N.f5, {
            value: c,
            children: (0, a.jsxs)("div", {
                className: r()(sC.zr, t),
                children: [
                    (0, a.jsx)(eo.D, {
                        className: sC.Qw,
                        variant: "display-md",
                        color: "text-strong",
                        children: eN.intl.string(eN.t.DbPgAd),
                    }),
                    (0, a.jsxs)("div", {
                        className: sC.wY,
                        children: [
                            (0, a.jsxs)("div", {
                                className: r()(sC.fO, { [sC.Vd]: v, [sC.hA]: !v }),
                                children: [
                                    !v && s,
                                    (0, a.jsx)("div", { className: sC.xQ }),
                                    (0, a.jsxs)("div", {
                                        className: sC.wN,
                                        children: [
                                            (0, a.jsx)("img", { src: sI, alt: "", className: sC.kQ }),
                                            (0, a.jsx)("img", {
                                                src: "/assets/6162a665edda48d4.svg",
                                                alt: "",
                                                className: sC.kQ,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, a.jsxs)("table", {
                                className: sC.tp,
                                children: [
                                    (0, a.jsx)(sS, {
                                        tier0Price: p,
                                        tier2Price: f,
                                        shouldUseDiscountPrice: x,
                                        tier2DiscountedPriceString: j,
                                    }),
                                    A.map((e) => (0, n.createElement)(sR, { ...e, key: e.id })),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    },
    sP = function (e) {
        let { scrollOffset: s } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { scrollOffset: 60 },
            t = (0, n.useCallback)(
                (e) => {
                    let t = c.current[e];
                    null != t &&
                        ((t.style.scrollMarginTop = `${s}px`),
                        t.scrollIntoView({ behavior: "smooth", block: "start" }));
                },
                [s],
            ),
            [i, a] = (0, n.useState)(Object.fromEntries(e.map((e) => [e, !1]))),
            [l, r] = (0, n.useState)(e[0]);
        (0, n.useEffect)(() => {
            let e = Object.keys(i).filter((e) => i[e]);
            e.length > 0 && r(e[0]);
        }, [i]);
        let c = (0, n.useRef)({});
        return (
            (0, n.useEffect)(() => {
                let e = new IntersectionObserver((e) => {
                    e.forEach((e) => {
                        a((s) => ({ ...s, [e.target.id]: e.isIntersecting }));
                    });
                });
                return (
                    Object.values(c.current).forEach((s) => {
                        null != s && e.observe(s);
                    }),
                    () => e.disconnect()
                );
            }, []),
            {
                navBarSections: (0, n.useMemo)(
                    () =>
                        e.reduce(
                            (e, s, i) => (
                                (e[s] = {
                                    id: s,
                                    ref: (e) => {
                                        (c.current[s] = e), null != e && (e.id = s);
                                    },
                                    scrollToSection: () => t(s),
                                    order: i,
                                }),
                                e
                            ),
                            {},
                        ),
                    [e, t],
                ),
                activeSectionId: l,
                setActiveSectionId: r,
            }
        );
    };
var sy = t(818348),
    sD = t(808557);
let sk = () => {
    let e = (0, c.zy)();
    (0, b.P)(v.b);
    let s = n.useRef(null),
        t = n.useRef(null),
        i = n.useRef(null),
        l = n.useRef(null),
        d = n.useRef(null),
        m = n.useRef(null),
        u = (0, o.bG)([B.A], () => B.A.useReducedMotion),
        [x, g] = n.useState(u);
    n.useEffect(() => {
        if (u) return void g(!0);
        let e = t.current;
        if (null == e) return;
        let s = (s) => {
            s.target === e && g(!0);
        };
        return e.addEventListener("animationend", s), () => e.removeEventListener("animationend", s);
    }, [u]);
    let [j, p] = n.useState(!1),
        [f, A] = n.useState(!1),
        [C, I] = n.useState(!1),
        [E, T] = n.useState(!1),
        R = (0, o.bG)([_.A], () => _.A.getPremiumTypeSubscription()),
        M = null != R ? (0, W.EL)(R) : null,
        P = null != M ? W.Ay.getSkuIdForPlan(M.planId) : null,
        y = null !== P && P !== eL.pe.TIER_2 ? eL.pe.TIER_2 : null,
        D = (0, V.cg)(),
        { analyticsLocations: k } = (0, N.Ay)(h.A.PREMIUM_MARKETING);
    n.useEffect(() => {
        T(!0);
    }, []);
    let O = (0, K.DK)(z.W.NITRO, "PremiumMarketingHome"),
        { shouldShowBonusOrbsUX: G } = (0, F.lk)(sf.rE.NITRO_HOME_MARKETING),
        w = O && G ? ez.NI.COMBINED_ORBS : G ? ez.NI.ORB_MULTIPLIER : O ? ez.NI.ORB_REWARDS : null,
        Y = n.useMemo(() => {
            let s = new URLSearchParams(e.search).get("section");
            return "orbs" === s ? w : s === ez.NI.THREE_P_PROMOTIONS ? ez.NI.THREE_P_PROMOTIONS : null;
        }, [e.search, w]);
    (0, Q.z)(Y ?? "", null != Y);
    let { navBarSections: Z, activeSectionId: q } = sP([es.HOME, es.WHATS_NEW, es.BEST_OF_NITRO, es.PLANS, es.COMPARE]),
        { home: $, whatsNew: et, bestOfNitro: ei, plans: ea, compare: en } = Z,
        er = (0, a.jsxs)("div", {
            ref: t,
            className: r()(sD.kL, sD.Gd, sD.iI, { [sD.Hq]: !u }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, a.jsx)(ee, { className: sD.yH }),
                (0, a.jsx)(eR, { navBarSections: Z, activeSectionId: q, isAnimationComplete: x }),
                (0, a.jsxs)("div", {
                    className: sD.Qr,
                    children: [
                        (0, a.jsx)("div", {
                            className: sD.qY,
                            ref: $.ref,
                            children: (0, a.jsx)(L.L, {
                                innerRef: l,
                                onChange: (e) => p(e),
                                threshold: 0,
                                active: !0,
                                children: (0, a.jsx)(sl, {
                                    ref: l,
                                    subscriptionTier: y,
                                    isEligibleForBogoPromotion: D,
                                }),
                            }),
                        }),
                        D &&
                            (0, a.jsx)("div", {
                                className: sD.Hz,
                                children: (0, a.jsx)(X.A, { variant: X.c.APPLICATION_NITRO_HOME }),
                            }),
                        (0, a.jsx)("div", {
                            className: sD.So,
                            ref: et.ref,
                            children: (0, a.jsx)(eV, { shouldLoadVideo: E, isReducedMotion: u }),
                        }),
                        (0, a.jsx)("div", {
                            className: sD.KQ,
                            ref: ei.ref,
                            children: (0, a.jsx)(eQ, { shouldLoadVideo: E, isReducedMotion: u }),
                        }),
                        (0, a.jsx)("div", {
                            className: sD.s5,
                            ref: ea.ref,
                            children: (0, a.jsx)(L.L, {
                                innerRef: i,
                                onChange: (e) => A(e),
                                threshold: 0.1,
                                active: !0,
                                children: (0, a.jsx)(J.jP, { innerRef: i }),
                            }),
                        }),
                        (0, a.jsx)("div", { className: sD.aC, ref: en.ref, children: (0, a.jsx)(sM, {}) }),
                    ],
                }),
                (0, a.jsx)(L.L, {
                    innerRef: d,
                    onChange: (e) => {
                        e &&
                            !C &&
                            (S.default.track(el.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: k }),
                            I(!0));
                    },
                    children: (0, a.jsx)("div", { ref: d, className: sD._Z }),
                }),
                (0, a.jsx)(ep, { ref: m }),
                (0, a.jsx)(ec, { isVisible: !j && !f && E, subscriptionTier: y, isEligibleForBogoPromotion: D }),
                (0, a.jsx)(ee, { className: sD.MF }),
            ],
        });
    return (0, a.jsx)(U.N, {
        theme: sy.NJ.DARKER,
        children: (e) => (0, a.jsx)(H.Gt, { className: r()(sD.XG, e), ref: s, children: er }),
    });
};
var sO = t(462887),
    sG = t(862482),
    sw = t(374200),
    sL = t(396375),
    sU = t(815846),
    sH = t(860839),
    sB = t(359778),
    sF = t(695366),
    sz = t(780964),
    sK = t(766075),
    sW = t(835968);
let sV = (e) => {
    let s,
        t,
        { premiumSubscription: i, className: n, textColor: l } = e,
        c = (0, eY.ar)();
    if (null == i) return null;
    let o = null != i ? W.Ay.getPremiumPlanItem(i) : null;
    if (
        (W.Ay.isBoostOnlySubscription(i)
            ? (s = eN.intl.string(eN.t.Uj0md3))
            : null != o && (s = W.Ay.getTierDisplayNameByPlanId(o.planId)),
        null == s)
    )
        return null;
    let d = () => (0, sK.openUserSettings)(sz.X.SUBSCRIPTIONS_PANEL),
        m = (null != o ? W.Ay.getSkuIdForPlan(o.planId) : null) === eL.pe.TIER_1;
    return (
        (t = null != l ? l : c ? "always-white" : "text-default"),
        (0, a.jsxs)(sB.Z, {
            className: r()(sW.kL, n, { [sW.He]: c }),
            type: sB.Z.Types.CUSTOM,
            children: [
                (0, a.jsx)(sF.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: r()(sW.Kk, { [sW.Pt]: c }),
                }),
                (0, a.jsx)(ev.E, {
                    variant: "text-sm/medium",
                    color: t,
                    children: m
                        ? eN.intl.format(eN.t["tYuv+T"], {
                              helpdeskArticle: sh.A.getArticleURL(el.MVz.PREMIUM_DETAILS),
                              onSubscriptionsClick: d,
                          })
                        : eN.intl.format(eN.t.xHRgU2, { subscriptionName: s, onSubscriptionsClick: d }),
                }),
            ],
        })
    );
};
var sQ = t(147935);
let sX = (e) => {
    let { lifted: s = !1 } = e;
    return (0, a.jsxs)("svg", {
        width: "100%",
        height: "793px",
        viewBox: "0 0 2338 793",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "none",
        className: r()(sQ.zr, { [sQ.N]: s }),
        children: [
            (0, a.jsx)("path", {
                d: "M1175.02 650.847C567.943 650.847 449.538 793 0 793V0H2338V529.841C1912.54 529.841 1705.84 650.847 1175.02 650.847Z",
                fill: "url(#paint0_linear_2548_770)",
            }),
            (0, a.jsx)("defs", {
                children: (0, a.jsxs)("linearGradient", {
                    id: "paint0_linear_2548_770",
                    x1: "2338",
                    y1: "-1.20115e-05",
                    x2: "2262.17",
                    y2: "975.136",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        (0, a.jsx)("stop", { className: sQ.eq }),
                        (0, a.jsx)("stop", { offset: "0.339235", className: sQ.l_ }),
                        (0, a.jsx)("stop", { offset: "0.492065", className: sQ.sM }),
                        (0, a.jsx)("stop", { offset: "0.823236", className: sQ.zi }),
                        (0, a.jsx)("stop", { offset: "0.899558", className: sQ.s1 }),
                    ],
                }),
            }),
        ],
    });
};
var sJ = t(900797),
    sY = t(847374),
    sZ = t(777666),
    sq = t(464769);
function s$(e) {
    let { className: s } = e;
    return (0, a.jsx)(sZ.Lp, { className: r()(sq.T, s), text: eN.intl.string(eN.t.EYxi0o) });
}
var s0 = t(904788),
    s2 = t(507553),
    s1 = t(591179),
    s8 = t(255438),
    s6 = t(355097);
let s7 = "/assets/5b4fec8511c3676a.svg",
    s5 = "/assets/0838bda6ecd20d91.svg";
var s4 = t(64514),
    s9 = t(121818);
let s3 = (e, s, t) => ((0, sO.M)(e) ? s : t);
var te = t(446278);
let ts = (e) => {
        let { isShowingAll: s, onClick: t } = e;
        return (0, a.jsxs)(eA.D, {
            onClick: t,
            className: te.customButton,
            children: [
                s ? eN.intl.string(eN.t.maZaN3) : eN.intl.string(eN.t["37C26f"]),
                s
                    ? (0, a.jsx)(sJ.t, { size: "md", color: "currentColor", className: te.arrow })
                    : (0, a.jsx)(sY.a, { size: "md", color: "currentColor", className: te.arrow }),
            ],
        });
    },
    tt = (e) => {
        let {
                title: s,
                description: t,
                className: i,
                imageSource: n,
                imageClassName: l,
                titleBadge: c,
                isNew: o = !1,
                isEarlyAccess: d = !1,
            } = e,
            { analyticsLocations: m } = (0, N.Ay)(h.A.PREMIUM_MARKETING_PERK_CARD);
        return (0, a.jsx)(N.f5, {
            value: m,
            children: (0, a.jsxs)("div", {
                className: r()(te.perkCard, i),
                children: [
                    o
                        ? (0, a.jsx)(s0.A, {
                              className: te.perkCardNewBadge,
                              shouldInheritBackgroundColor: !0,
                              shouldInheritTextColor: !0,
                          })
                        : null,
                    d ? (0, a.jsx)(s$, { className: te.perkCardEarlyAccessBadge }) : null,
                    (0, a.jsx)("img", { src: n, alt: "", className: r()(l, te.perksCardArt) }),
                    (0, a.jsxs)("div", {
                        children: [
                            (0, a.jsxs)(eo.D, {
                                variant: "heading-lg/extrabold",
                                className: te.perkCardHeading,
                                children: [s, " ", c],
                            }),
                            (0, a.jsx)(ev.E, {
                                variant: "text-sm/normal",
                                className: te.perkCardDescription,
                                children: "function" == typeof t ? t(m) : t,
                            }),
                        ],
                    }),
                ],
            }),
        });
    },
    ti = (e) => {
        let { className: s, isSubscriberNitroHome: i = !1 } = e,
            [l, c] = n.useState(!1),
            o = ((e) => {
                let { styles: s } = e,
                    i = (0, Z.Ay)(),
                    a = (0, s1.X)("usePerkCards"),
                    n = (0, ed.bG)([T.default], () => {
                        let e = T.default.getCurrentUser();
                        return W.Ay.canUsePremiumProfileCustomization(e);
                    }),
                    l = (0, s8.Xq)(eL.f3 / 1024, { useKibibytes: !0 });
                return {
                    badge: {
                        title: eN.intl.string(eN.t.SS87rQ),
                        description: eN.intl.string(eN.t.oD6CRr),
                        imageSource: "/assets/70e295f6158d848f.png",
                        imageClassName: s.badgeImage,
                    },
                    badgeAlt: {
                        title: eN.intl.string(eN.t["5cYMu0"]),
                        description: eN.intl.string(eN.t.vxk9va),
                        imageSource: s3(i, "/assets/42e77ef3b6c4c1bb.svg", "/assets/ab48ff2bd2dce6a1.svg"),
                        imageClassName: s.badgeNewImage,
                    },
                    clientThemes: {
                        title: eN.intl.string(eN.t["/xvEMy"]),
                        description: eN.intl.string(eN.t.HKWdjj),
                        className: s.clientThemesCard,
                        imageSource: "/assets/37e0853800afb796.svg",
                        imageClassName: s.clientThemesImage,
                    },
                    customAppIcons: {
                        title: eN.intl.string(eN.t.OuItFi),
                        description: eN.intl.string(eN.t.mPyrE6),
                        imageSource:
                            "https://cdn.discordapp.com/assets/content/bca160c31fc5390dd2b41d90060edcc912a45f6ab3beab44ea79e16bf1f6530f.png",
                        imageClassName: s.customAppIconImage,
                    },
                    emoji: {
                        title: eN.intl.string(eN.t["R2IV/Q"]),
                        description: eN.intl.string(eN.t.R5Xag2),
                        imageSource: "/assets/d8edaaf5cb32248f.svg",
                        imageClassName: s.emojiImage,
                    },
                    guildProfile: {
                        title: eN.intl.string(eN.t.lKDhhJ),
                        description: (e) => {
                            if (a)
                                return n
                                    ? eN.intl.formatToPlainString(eN.t.aj1pfZ, { onCheckItOutClick: () => {} })
                                    : eN.intl.formatToPlainString(eN.t.d2oYS8, { onTryItOutClick: () => {} });
                            let s = () => {
                                {
                                    let { openUserSettings: s } = t(766075);
                                    s2.A.setState({ scrollPosition: s6._F.TRY_IT_OUT }),
                                        s(sz.X.PROFILE_PANEL, { analyticsLocations: e });
                                }
                            };
                            return n
                                ? eN.intl.format(eN.t.aj1pfZ, { onCheckItOutClick: s })
                                : eN.intl.format(eN.t.d2oYS8, { onTryItOutClick: s });
                        },
                        imageSource: "/assets/e1b6b45be1ce4b03.png",
                        imageClassName: s.perGuildProfilesImage,
                    },
                    longerMessages: {
                        title: eN.intl.string(eN.t.BUScid),
                        description: eN.intl.string(eN.t.vN6XpQ),
                        imageSource: s3(i, "/assets/dd2088e61de76ba7.svg", "/assets/62b63638a6645137.svg"),
                        imageClassName: s.longerMessagesImage,
                    },
                    moreGuilds: {
                        title: eN.intl.string(eN.t.Bv8Pfk),
                        description: eN.intl.string(eN.t.JMfaTU),
                        imageSource: s3(i, "/assets/587c08f512a71514.png", "/assets/3308a5a697922299.svg"),
                        imageClassName: s.moreGuildsImage,
                    },
                    moreGuildsAlt: {
                        title: eN.intl.string(eN.t.Bv8Pfk),
                        description: eN.intl.string(eN.t.JMfaTU),
                        imageSource: s3(i, "/assets/f1d357c6741d62c3.svg", "/assets/8568e72f2b535d2f.svg"),
                        imageClassName: s.moreGuildsAltImage,
                    },
                    soundboard: {
                        title: eN.intl.string(eN.t["lGcW+c"]),
                        description: eN.intl.string(eN.t["/fDyO+"]),
                        imageSource: s3(i, "/assets/bd6751720573fb38.svg", "/assets/c292e42489e70696.svg"),
                        imageClassName: s.soundboardImage,
                    },
                    stickers: {
                        title: eN.intl.string(eN.t["1c+xwT"]),
                        description: eN.intl.string(eN.t.hJG8ZN),
                        imageSource: s3(i, s5, s7),
                        imageClassName: s.stickersImage,
                    },
                    stickersBurst: {
                        title: eN.intl.string(eN.t.tzdIwI),
                        description: eN.intl.string(eN.t.hJG8ZN),
                        imageSource: s3(i, s5, s7),
                        imageClassName: s.stickersImage,
                    },
                    stickersPremiumPerk: {
                        title: eN.intl.string(eN.t.tzdIwI),
                        description: eN.intl.string(eN.t.hJG8ZN),
                        imageSource: s3(i, s5, s7),
                        imageClassName: s.stickersImage,
                    },
                    streaming: {
                        title: eN.intl.string(eN.t.RSXQYO),
                        description: eN.intl.string(eN.t.ymCPxp),
                        imageSource: "/assets/3bcdc01b26c7f691.svg",
                        imageClassName: s.streamingImage,
                    },
                    superReactions: {
                        title: eN.intl.string(eN.t["uZt5q/"]),
                        description: eN.intl.string(eN.t.ZK3ZoX),
                        imageSource: s3(i, "/assets/99b308eabe7fcfd2.svg", "/assets/fa48f6b36050a179.svg"),
                        imageClassName: s.superReactionsImage,
                    },
                    upload: {
                        title: eN.intl.formatToPlainString(eN.t.jqhAdL, { premiumMaxSize: l }),
                        description: eN.intl.formatToPlainString(eN.t["HI+cfm"], { premiumMaxSize: l }),
                        imageSource: "/assets/010eae6a6dbacc63.svg",
                        imageClassName: s.uploadImage,
                    },
                    videoBackground: {
                        title: eN.intl.string(eN.t.NaGpTf),
                        description: eN.intl.string(eN.t["A8O/Qw"]),
                        imageSource: s3(i, s4, s9),
                        imageClassName: s.videoBackgroundImage,
                    },
                };
            })({ styles: te }),
            d = (0, ed.bG)([B.A], () => B.A.useReducedMotion),
            { analyticsLocations: m } = (0, N.Ay)(),
            u = [
                o.emoji,
                o.streaming,
                o.upload,
                o.customAppIcons,
                o.soundboard,
                o.videoBackground,
                o.superReactions,
                o.stickersPremiumPerk,
                o.badgeAlt,
            ];
        return (0, a.jsxs)("div", {
            className: r()(te.perksContainer, s, {
                [te.partiallyHidden]: i && !l,
                [te.subscriberNitroHome]: i,
                [te.reducedMotion]: d,
            }),
            children: [
                (0, a.jsx)(eo.D, {
                    variant: "heading-xxl/extrabold",
                    className: te.perksTitle,
                    children: i ? eN.intl.string(eN.t.QX14gI) : eN.intl.string(eN.t.RGadQR),
                }),
                (0, a.jsx)("div", {
                    className: r()(te.perkCardContainer, { [te.perkCardContainerExpanded]: l }),
                    children: u.map((e) => null != e && (0, a.jsx)(tt, { ...e }, e.title)),
                }),
                i &&
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)("div", {
                                className: r()({ [te.sizeGizmo]: !l, [te.sizeGizmoExpanded]: l }),
                                children: (0, a.jsx)(ts, {
                                    onClick: () => {
                                        S.default.track(el.HAw.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
                                            location_stack: m,
                                            was_expanded: l,
                                        }),
                                            c(!l);
                                    },
                                    isShowingAll: l,
                                }),
                            }),
                            (0, a.jsx)("div", { className: r()(te.cover, { [te.hidden]: l }) }),
                        ],
                    }),
            ],
        });
    };
var ta = t(194509),
    tn = t(14238);
let tl = function (e) {
    let { isVisible: s, subscriptionTier: t, isApplicationHome: i, isEligibleForBogoPromotion: n } = e,
        l = (0, ei.z)({
            transform: s ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!s,
            config: { tension: 120, friction: 12 },
        }),
        c = { section: el.JJy.MARKETING_FLOATING_CTA },
        o = (0, Z.Ay)(),
        d = (0, Y.M)(o);
    return (0, a.jsx)(et.animated.div, {
        className: r()(tn.iE, { [tn.H8]: i, [tn.q4]: !s }),
        style: l,
        children: (0, a.jsxs)("div", {
            className: i ? tn.zW : tn.iJ,
            children: [
                (0, a.jsx)(sL.A, {
                    color: d ? sG.XD.BRAND_INVERTED : void 0,
                    className: r()(tn.x6, { [tn.Ph]: d }),
                    subscriptionTier: t,
                    premiumModalAnalyticsLocation: c,
                    isPersistentCTA: !0,
                    hasActivePromotion: n,
                    shinyButtonClassName: d ? void 0 : tn.PJ,
                }),
                (0, a.jsx)(ta.A, { className: tn.x6, premiumModalAnalyticsLocation: c }),
            ],
        }),
    });
};
var tr = t(89366),
    tc = t(360101);
let to = (e) => {
        let {
                inOfferExperience: s,
                subscriptionTier: t,
                containerClassName: i,
                buttonClassName: n,
                isApplicationHome: l,
                isDarkMode: c,
                isEligibleForBogoPromotion: o,
            } = e,
            d = o
                ? (0, a.jsx)(sL.A, {
                      color: c ? sG.XD.BRAND_INVERTED : void 0,
                      className: r()(tc.x6, tc.Ph, n, { [tc.Sq]: s && l, [tc.MF]: l && !c }),
                      shinyButtonClassName: c ? void 0 : tc.PJ,
                      subscriptionTier: t,
                      hasActivePromotion: !0,
                  })
                : (0, a.jsx)(sL.A, {
                      color: c || !l ? sG.XD.BRAND_INVERTED : void 0,
                      className: r()(tc.x6, tc.Ph, n, { [tc.Sq]: s && l, [tc.MF]: l && !c }),
                      subscriptionTier: t,
                  }),
            m = s && l ? null : (0, a.jsx)(ta.A, { className: r()(tc.x6, n), color: l ? void 0 : sG.XD.WHITE });
        return (0, a.jsxs)("div", { className: r()(tc.UD, i), children: [d, " ", m] });
    },
    td = () =>
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(s0.p, { className: tc.zd }),
                (0, a.jsx)(s0.p, { className: tc.G }),
                (0, a.jsx)(s0.p, { className: tc.zy }),
                (0, a.jsx)(s0.p, { className: tc.GX }),
            ],
        });
function tm(e) {
    let { variant: s = "text-lg/normal", withBottomMargin: t = !0, isApplicationHome: i } = e,
        n = ss();
    return (0, a.jsx)(ev.E, {
        variant: s,
        color: i ? "text-subtle" : "always-white",
        className: r()(tc.h_, { [tc.If]: t, [tc.jn]: i }),
        children: eN.intl.format(eN.t.kt9wxs, { cheapestMonthlyPrice: n }),
    });
}
let tu = n.forwardRef((e, s) => {
    let { className: t, buttonClassName: i, subscriptionTier: n, isDarkMode: l } = e,
        { analyticsLocations: c } = (0, N.Ay)(h.A.PREMIUM_MARKETING_HERO_CTA),
        o = (0, tr.QQ)(),
        d = (0, eY.ar)(),
        m = (0, V.cg)(),
        u = (0, D.b)().length > 0,
        x = eN.intl.string(eN.t.YCZldK);
    return (0, a.jsx)(N.f5, {
        value: c,
        children: (0, a.jsxs)("div", {
            ref: s,
            className: r()(tc.kL, t, { [tc.V1]: !d, [tc.Q4]: !d && u }),
            "data-testid": "v2-marketing-page-hero-header",
            children: [
                (0, a.jsxs)("div", {
                    className: d ? tc.I6 : tc.G1,
                    children: [
                        (0, a.jsx)(eJ.F, {
                            forceLevel: 1,
                            children: (0, a.jsx)(eo.D, {
                                variant: d ? "display-lg" : "display-md",
                                color: "always-white",
                                children: x,
                            }),
                        }),
                        u
                            ? (0, a.jsx)("div", {
                                  className: tc.DF,
                                  children: (0, a.jsx)(e5.A, { textColor: "always-white", smallerText: !d }),
                              })
                            : (0, a.jsx)(tm, {}),
                        m || o
                            ? (0, a.jsx)("div", {
                                  className: tc.UD,
                                  children: (0, a.jsx)(ta.A, { className: r()(tc.x6, i), color: sG.XD.WHITE }),
                              })
                            : (0, a.jsx)(to, {
                                  subscriptionTier: n,
                                  inOfferExperience: d,
                                  buttonClassName: i,
                                  isDarkMode: l,
                              }),
                        u && (0, a.jsx)(tm, { variant: "text-md/normal", withBottomMargin: !1 }),
                    ],
                }),
                !d && (0, a.jsx)(td, {}),
            ],
        }),
    });
});
var tx = t(22118),
    tg = t(111932),
    th = t(16939),
    tN = t(79119);
let tj = (e) => {
        let { inOfferExperience: s } = e;
        return s ? (0, a.jsx)(sX, { lifted: s }) : null;
    },
    tp = () => {
        (0, b.P)(v.b);
        let e = n.useRef(null),
            s = n.useRef(null),
            t = n.useRef(null),
            i = (0, Z.Ay)(),
            l = (0, sO.M)(i),
            [c, d] = n.useState(!1),
            [m, u] = n.useState(!1),
            [x, g] = n.useState(!1),
            [j, p] = n.useState(!1),
            f = (0, o.bG)([_.A], () => _.A.getPremiumTypeSubscription()),
            A = null != f ? (0, W.EL)(f) : null,
            C = null != A ? W.Ay.getSkuIdForPlan(A.planId) : null,
            I = null !== C && C !== eL.pe.TIER_2 ? eL.pe.TIER_2 : null,
            E = (0, O.V)(),
            T = E?.subscription_trial?.sku_id,
            R = (0, eY.ar)(),
            M = (0, V.cg)(),
            P = (0, eC.Gh)("premium-marketing-settings-page"),
            y = M ?? !1,
            D = (0, o.bG)([sw.A], () => {
                let e = sw.A.getMarketingComponentByType(eX.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.billingSettingsNitroGiftBanner;
            }),
            { analyticsLocations: k } = (0, N.Ay)(h.A.PREMIUM_MARKETING);
        n.useEffect(() => {
            p(!0);
        }, []);
        let G = (0, a.jsx)("div", {
            className: th.dY,
            children: (0, a.jsx)(L.L, {
                innerRef: e,
                onChange: (e) => u(e),
                threshold: 0.1,
                active: !0,
                children: (0, a.jsx)(sH.qu, {
                    innerRef: e,
                    tier0CTAButton: (0, a.jsx)(sL.A, {
                        showIcon: !1,
                        subscriptionTier: eL.pe.TIER_0,
                        className: tg.Ph,
                        look: sG.pR.OUTLINED,
                        color: sG.XD.WHITE,
                        buttonShineClassName: tg.Qr,
                    }),
                    tier2CTAButton:
                        T === eL.pe.TIER_0
                            ? (0, a.jsx)(sL.A, {
                                  showIcon: !1,
                                  subscriptionTier: eL.pe.TIER_2,
                                  className: tg.Ph,
                                  look: sG.pR.OUTLINED,
                                  color: sG.XD.WHITE,
                                  buttonShineClassName: tg.Qr,
                              })
                            : (0, a.jsx)(sL.A, {
                                  color: sG.XD.BRAND_INVERTED,
                                  showIcon: !1,
                                  subscriptionTier: eL.pe.TIER_2,
                                  className: tg.Ph,
                                  hasActivePromotion: y,
                                  textOptions: { textClassName: tg.Ac },
                                  buttonShineClassName: tg.Qr,
                              }),
                }),
            }),
        });
        return (0, a.jsxs)("div", {
            className: th.kL,
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, a.jsx)(sV, { premiumSubscription: f, className: r()(th.R3, { [th.aZ]: R }) }),
                R &&
                    (0, a.jsxs)("div", {
                        className: th.n1,
                        children: [
                            (0, a.jsx)(tj, { inOfferExperience: R }),
                            P &&
                                (0, a.jsx)(eI.l, {
                                    className: th.ij,
                                    size: "md",
                                    location: h.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                    forceDarkTheme: !0,
                                }),
                        ],
                    }),
                (0, a.jsxs)("div", {
                    className: r()({ [th.V1]: !R }),
                    children: [
                        null != D && (0, a.jsx)(sU.c, { className: th.w$, config: D }),
                        (0, a.jsxs)("div", {
                            className: th.iS,
                            children: [
                                P &&
                                    !R &&
                                    (0, a.jsx)(eI.l, {
                                        className: th.ij,
                                        size: "md",
                                        location: h.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                        forceDarkTheme: !0,
                                    }),
                                (0, a.jsx)(L.L, {
                                    innerRef: s,
                                    onChange: (e) => d(e),
                                    threshold: 0,
                                    active: !0,
                                    children: (0, a.jsx)(tu, {
                                        ref: s,
                                        subscriptionTier: I,
                                        className: r()({ [th.p7]: R, [th.Pw]: R, [th.AG]: M, [th.Cv]: null != f }),
                                        isDarkMode: l,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                G,
                (0, a.jsx)(ti, { className: th.B_ }),
                (0, a.jsx)("div", { className: th.aC, children: (0, a.jsx)(tx.A, { className: th.JQ, hideCTAs: !0 }) }),
                (0, a.jsx)("div", { className: th.hz }),
                (0, a.jsx)(tl, {
                    isVisible: !c && !m && j,
                    subscriptionTier: I,
                    isApplicationHome: !1,
                    isEligibleForBogoPromotion: M,
                }),
                (0, a.jsx)(L.L, {
                    innerRef: t,
                    onChange: (e) => {
                        e &&
                            !x &&
                            (S.default.track(el.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: k }),
                            g(!0));
                    },
                    children: (0, a.jsx)("div", { ref: t, className: th._Z }),
                }),
                (0, a.jsx)("img", {
                    src: tN,
                    className: th.Kw,
                    width: 112,
                    height: 85,
                    alt: eN.intl.string(eN.t.X4IxWL),
                }),
            ],
        });
    },
    tf = (e) => {
        let { entrypoint: s } = e,
            t = (0, O.V)(),
            i = (0, k.O)({ includePremiumGroupDiscount: !0 }),
            l = (0, w.NF)({ trialOffer: t }),
            r = (0, w.Tp)(),
            c = (0, o.bG)([G.A], () => G.A.getReminderStateId());
        return (n.useEffect(() => {
            !0 === l && (0, w.QG)(), !0 === r && (0, w.ne)(c), (null != t || null != i) && (0, P.u1)(t, i);
        }, [t, i, l, r, c]),
        s === eL.Mf.UserSettings)
            ? (0, a.jsx)(tp, {})
            : s === eL.Mf.ApplicationStoreHome
              ? (0, a.jsx)(sk, {})
              : null;
    };
var tA = t(972119);
let tv = function (e) {
    let { entrypoint: s = eL.Mf.UserSettings } = e;
    (0, b.P)(v.b);
    let t = (0, p.Hp)(),
        { sourceAnalyticsLocations: i, analyticsLocations: l } = (0, N.Ay)(h.A.PREMIUM_MARKETING),
        G = (0, o.bG)([_.A], () => _.A.hasFetchedSubscriptions()),
        w = (0, o.bG)([R.A], () => R.A.hasFetchedPaymentSources),
        L = (0, o.bG)([T.default], () => T.default.getCurrentUser()),
        U = L?.id,
        H = (0, O.V)(),
        B = (0, k.O)({ includePremiumGroupDiscount: !0 }),
        F = (0, f.Y)(eL.T7),
        [z, K] = n.useState(!0),
        W = n.useRef(0),
        V = (0, M.YE)(L, eL.PremiumTypes.TIER_2);
    (0, D.b)(),
        n.useEffect(() => {
            m.h.wait(async () => {
                let e = Date.now();
                await Promise.all([j.hP(), j.$o(), (0, u.zS)(null, null, el.tF5.DISCOVERY)]),
                    (W.current = Date.now() - e),
                    K(!1);
            });
        }, []),
        n.useEffect(() => {
            z ||
                S.default.track(el.HAw.PREMIUM_MARKETING_PAGE_VIEWED, {
                    location_stack: i,
                    load_duration_ms: W.current,
                });
        }, [i, z]),
        n.useEffect(() => {
            t && (null != H || null != B) && (0, P.u1)(H, B);
        }, [t, H, B]);
    let Q = (0, c.zy)(),
        X = n.useRef(!1),
        J = G && w && F,
        [Y, Z] = n.useState(J);
    J && !Y && Z(!0),
        n.useEffect(() => {
            if (X.current || !J) return;
            let e = new URLSearchParams(Q.search).get("checkout");
            if (null == e) return;
            let s = { nitro_basic: eL.pe.TIER_0, nitro: eL.pe.TIER_2 }[e];
            null != s &&
                ((X.current = !0),
                (0, I.bG)(el.BVt.APPLICATION_STORE),
                (0, C.A)({ subscriptionTier: s, analyticsLocations: l }));
        }, [J, Q.search, l]);
    let q = (0, o.bG)([E.A], () => E.A.enabled),
        $ = s === eL.Mf.ApplicationStoreHome,
        ee = q
            ? (0, a.jsx)(x.A, {})
            : t
              ? (0, a.jsx)(A.uK, {})
              : $ && V
                ? (0, a.jsx)(N.f5, { value: l, children: (0, a.jsx)(y.Ay, { userId: U }) })
                : Y
                  ? null
                  : (0, a.jsx)("div", { className: r()(tA.kL, tA.Lq), children: (0, a.jsx)(d.y, {}) });
    return null != ee
        ? (0, a.jsxs)(a.Fragment, { children: [$ && (0, a.jsx)(g.A, {}), ee] })
        : (0, a.jsx)(N.f5, { value: l, children: (0, a.jsx)(tf, { entrypoint: s }) });
};
