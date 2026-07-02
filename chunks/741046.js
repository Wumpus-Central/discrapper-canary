t.d(s, { A: () => tE }), t(323874), t(14289), t(35956);
var i,
    n = t(627968),
    a = t(64700),
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
    f = t(688810),
    N = t(277984),
    j = t(86379),
    p = t(160946),
    A = t(545075),
    v = t(949030),
    b = t(611924),
    E = t(532794),
    C = t(976860),
    I = t(351906),
    T = t(287809),
    R = t(295405),
    _ = t(166403),
    S = t(174459),
    M = t(474090),
    y = t(881489),
    P = t(945960),
    D = t(7066),
    k = t(205483),
    O = t(286320),
    G = t(422936),
    w = t(234419),
    L = t(851746),
    B = t(727949),
    U = t(269115),
    H = t(43990),
    z = t(689175),
    F = t(775602),
    K = t(192444),
    V = t(440005),
    W = t(26508),
    Q = t(428262),
    X = t(960851),
    J = t(994763),
    Y = t(949964),
    Z = t(810604),
    q = t(366010),
    $ = t(736653),
    ee = t(303136),
    es = t(676279);
let et = function (e) {
    let s,
        { className: t } = e,
        i = (0, es.TM)(),
        a = (0, q.q)((0, $.Ay)());
    return (
        (s = i
            ? a
                ? "https://cdn.discordapp.com/assets/content/06ad5b3e9274c7e75f135129da3141ef42681698d3c0cf79b8c83e8526c2064f.mov"
                : "https://cdn.discordapp.com/assets/content/e306e75bdcd95e261e8d501c2cc6674bf183ff83e53b8dcae4e7bfa98d15c273.mov"
            : a
              ? "https://cdn.discordapp.com/assets/content/2b403885861e2c1a8268fbdb8ba90a93b72fab9937dd1cdad47e68f814969dac.webm"
              : "https://cdn.discordapp.com/assets/content/5412744d944cb3bf22279ee7741dbdca87bd644fa128adcfd2d50ae56543d7c9.webm"),
        (0, n.jsx)("div", {
            className: t,
            children: (0, n.jsx)(
                ee.A,
                {
                    fallbackImage: a
                        ? "https://cdn.discordapp.com/assets/content/6ddb7f92b6f26f24c70cc7bf84e11bb423378d47cd111866af3980b332bad336.png"
                        : "https://cdn.discordapp.com/assets/content/acbc696c59f02098ff0014edaf0ded799884a3fefed7f20bcdb6cf038bba0542.png",
                    children: (0, n.jsx)("source", { src: s }),
                },
                s,
            ),
        })
    );
};
var ei =
        (((i = {}).HOME = "home"),
        (i.WHATS_NEW = "whatsNew"),
        (i.BEST_OF_NITRO = "bestOfNitro"),
        (i.PLANS = "plans"),
        (i.COMPARE = "compare"),
        i),
    en = t(580929),
    ea = t(717421),
    el = t(65470),
    er = t(792656),
    ec = t(652215),
    eo = t(870408);
let ed = function (e) {
    let { isVisible: s, subscriptionTier: t, isEligibleForBogoPromotion: i } = e,
        a = (0, ea.z)({
            transform: s ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!s,
            config: { tension: 120, friction: 12 },
        }),
        l = { section: ec.JJy.MARKETING_FLOATING_CTA };
    return (0, n.jsx)(en.animated.div, {
        className: eo.i,
        style: a,
        "data-mtctest-ignore": "true",
        children: (0, n.jsxs)("div", {
            className: eo.U,
            children: [
                (0, n.jsx)(er.A, {
                    size: "md",
                    subscriptionTier: t,
                    hasActivePromotion: !!i,
                    isPersistentCTA: !0,
                    premiumModalAnalyticsLocation: l,
                }),
                (0, n.jsx)(el.A, { variant: "secondary", size: "md" }),
            ],
        }),
    });
};
var em = t(534514),
    eu = t(702841),
    ex = t(652533),
    eg = t(20458),
    eh = t(80933),
    ef = t(180894);
let eN = function () {
    let e = (0, eu.bG)([F.Ay], () => F.Ay.useReducedMotion);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", {
                className: eh.BI,
                children: (0, n.jsx)(ex.Ay, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: ex.$G },
                    yAxisAnimationData: { range: 20, duration: ex.Mp, path: ex.aV.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: e,
                    children: (0, n.jsx)("img", { src: ef.A, alt: "", className: eh.Q }),
                }),
            }),
            (0, n.jsx)(eg.A, {
                isMotionReduced: e,
                boltContainerClassName: eh.nJ,
                carContainerClassName: eh.IN,
                hammerContainerClassName: eh.Gj,
                keyContainerClassName: eh.FV,
                starContainerClassName: eh.E1,
                boltAssetClassName: eh.j7,
                carAssetClassName: eh.or,
                hammerAssetClassName: eh.Wv,
                keyAssetClassName: eh.rs,
                starAssetClassName: eh.OY,
            }),
        ],
    });
};
var ej = t(375708),
    ep = t(296725);
let eA = a.forwardRef((e, s) => {
    let { analyticsLocations: t } = (0, f.Ay)(h.A.PREMIUM_MARKETING_FOOTER_CTA);
    return (0, n.jsx)(f.f5, {
        value: t,
        children: (0, n.jsx)("div", {
            ref: s,
            className: ep.kL,
            children: (0, n.jsxs)("div", {
                className: ep.hQ,
                children: [
                    (0, n.jsx)(eN, {}),
                    (0, n.jsx)(em.D, {
                        variant: "display-md",
                        color: "text-strong",
                        className: ep.RH,
                        children: ej.intl.string(ej.t.lEw32m),
                    }),
                ],
            }),
        }),
    });
});
eA.displayName = "PremiumMarketingFooter";
var ev = t(403581),
    eb = t(939249),
    eE = t(834730),
    eC = t(742589),
    eI = t(909536),
    eT = t(400669),
    eR = t(876587),
    e_ = t(503255);
let eS = function (e) {
    let { navBarSections: s, activeSectionId: t, isAnimationComplete: i } = e,
        l = {
            [ei.HOME]: ej.intl.string(ej.t.uGRXjS),
            [ei.WHATS_NEW]: ej.intl.string(ej.t["mfcR/v"]),
            [ei.BEST_OF_NITRO]: ej.intl.string(ej.t.xQKkE8),
            [ei.PLANS]: ej.intl.string(ej.t.wyNMnm),
            [ei.COMPARE]: ej.intl.string(ej.t.pwD7If),
        },
        r = (0, o.bG)([T.default], () => T.default.getCurrentUser()),
        c = (0, eI.Gh)("premium_marketing_nav_bar") && null != r,
        d = a.useRef(null),
        m = Object.values(s).sort((e, s) => e.order - s.order);
    return (0, n.jsxs)(eC.A, {
        className: e_.TQ,
        transparent: !0,
        children: [
            (0, n.jsxs)("div", {
                className: e_.Wc,
                children: [
                    (0, n.jsxs)("div", {
                        className: e_.wG,
                        children: [
                            (0, n.jsx)(ev.t, { className: e_.nE, colorClass: e_.oG }),
                            (0, n.jsx)("div", {
                                className: e_.zc,
                                role: "tablist",
                                "aria-label": ej.intl.string(ej.t.O9MiXY),
                                children: m.map((e) => {
                                    let s = t === e.id,
                                        i = l[e.id];
                                    return (0, n.jsxs)(
                                        eb.D,
                                        {
                                            role: "tab",
                                            "aria-selected": s,
                                            className: e_.S0,
                                            onClick: e.scrollToSection,
                                            children: [
                                                (0, n.jsx)(eE.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-strong",
                                                    children: i,
                                                }),
                                                s && (0, n.jsx)("div", { className: e_.W0 }),
                                            ],
                                        },
                                        i,
                                    );
                                }),
                            }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: e_.MQ,
                        children: [
                            c &&
                                (0, n.jsx)(eT.l, { ref: d, size: "sm", location: h.A.PREMIUM_WISHLIST_MARKETING_PAGE }),
                            (0, n.jsx)(el.A, { size: "sm", variant: "overlay-secondary" }),
                        ],
                    }),
                ],
            }),
            c && i && (0, n.jsx)(eR.O, { targetElementRef: d }),
        ],
    });
};
var eM = t(31502),
    ey = t(990078),
    eP = t(704333),
    eD = t(414499),
    ek = t(597770),
    eO = t(500060),
    eG = t(885574),
    ew = t(406860),
    eL = t(985603),
    eB = t(983060),
    eU = t(202541),
    eH = t(237146),
    ez = t(56598);
function eF() {
    let { sectionRef: e, handleVisibilityChange: s } = (0, ew.A)({ boxType: eL.X, thirdPartyPartner: "xbox" }),
        t = [
            { icon: eP.B, text: ej.intl.string(eH.default.MUypiB) },
            { icon: eD.h, text: ej.intl.string(eH.default.ec5Rdd) },
            { icon: ek.o, text: ej.intl.string(eH.default["9t2CzW"]), tooltip: eH.default.AyECej },
            { icon: eO.o, text: ej.intl.string(eH.default.R7YJAY) },
        ];
    return (0, n.jsx)(U.L, {
        innerRef: e,
        onChange: s,
        threshold: 0.5,
        children: (0, n.jsx)("div", {
            ref: e,
            className: ez.iE,
            children: (0, n.jsxs)("div", {
                className: ez.Nr,
                children: [
                    (0, n.jsxs)("div", {
                        className: ez.j,
                        children: [
                            (0, n.jsx)("div", { className: ez._g }),
                            (0, n.jsx)("div", { className: ez.$h }),
                            (0, n.jsx)("div", { className: ez.Rv }),
                            (0, n.jsx)("div", { className: ez.Lw }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: ez.CT,
                        children: [
                            (0, n.jsxs)("div", {
                                className: ez.Qs,
                                children: [
                                    (0, n.jsxs)("div", {
                                        children: [
                                            (0, n.jsx)(em.D, {
                                                variant: "heading-xxl/bold",
                                                color: "text-strong",
                                                className: ez.R_,
                                                children: ej.intl.string(eH.default.rkt1aw),
                                            }),
                                            (0, n.jsxs)("div", {
                                                children: [
                                                    t.map((e) => {
                                                        let { icon: s, text: t, tooltip: i } = e;
                                                        return (0, n.jsxs)(
                                                            "div",
                                                            {
                                                                className: ez.yf,
                                                                children: [
                                                                    (0, n.jsx)(s, {
                                                                        size: "sm",
                                                                        color: "var(--icon-strong)",
                                                                    }),
                                                                    (0, n.jsx)(eE.E, {
                                                                        variant: "text-md/medium",
                                                                        color: "text-strong",
                                                                        children: t,
                                                                    }),
                                                                    null != i &&
                                                                        (0, n.jsx)("div", {
                                                                            className: ez.Jn,
                                                                            children: (0, n.jsx)(ey.m, {
                                                                                text: ej.intl.string(i),
                                                                                position: "top",
                                                                                children: (0, n.jsx)(eG.m, {
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
                                                    (0, n.jsx)("div", {
                                                        className: ez.xF,
                                                        children: (0, n.jsx)(er.A, {
                                                            variantOverride: "secondary",
                                                            size: "md",
                                                            subscriptionTier: eU.pe.TIER_2,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, n.jsx)("div", {
                                        className: ez.WE,
                                        children: (0, n.jsx)(eE.E, {
                                            variant: "text-xs/medium",
                                            color: "text-link",
                                            children: ej.intl.format(eH.default.KDKdWi, { termsLink: (0, eB.xA)() }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, n.jsx)("div", {
                                className: ez.r1,
                                children: (0, n.jsx)("img", {
                                    className: ez.wm,
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
var eK = t(750338),
    eV = t(280041),
    eW = t(856556);
function eQ(e) {
    let {
        className: s,
        boxLayout: t,
        title: i,
        shouldLoadVideo: a,
        isReducedMotion: l,
        startLeftAligned: c = !1,
        highlightBento: o,
    } = e;
    return (0, n.jsxs)("div", {
        className: r()(eW.boxBackdrop, s),
        children: [
            (0, n.jsx)(em.D, {
                className: eW.bentoSectionHeader,
                variant: "display-md",
                color: "text-strong",
                children: i,
            }),
            null != o && (0, n.jsx)("div", { className: eW.highlightBento, children: o }),
            (0, n.jsx)("div", {
                className: eW.bentoBoxesGrid,
                children: t.map((e, s) => {
                    let t;
                    switch (e.length) {
                        case 3:
                            t = eV.A0.SMALL;
                            break;
                        case 2:
                            t = eV.A0.MEDIUM;
                            break;
                        default:
                            t = eV.A0.LARGE;
                    }
                    return (0, n.jsx)(n.Fragment, {
                        children: e.map((e) =>
                            (0, n.jsx)(
                                eK.A,
                                { index: s + +!!c, ...e, size: t, shouldLoadVideo: a, isReducedMotion: l },
                                e.name,
                            ),
                        ),
                    });
                }),
            }),
        ],
    });
}
let eX = a.memo(function (e) {
        let s = (0, eM.l)("premium_marketing_bento"),
            { whatsNewBoxes: t } = (0, eV.Ay)(s);
        return (0, n.jsx)(eQ, {
            boxLayout: t,
            title: ej.intl.string(ej.t.LRmNAl),
            startLeftAligned: !0,
            highlightBento: s ? (0, n.jsx)(eF, {}) : null,
            ...e,
        });
    }),
    eJ = a.memo(function (e) {
        let { bestOfBoxes: s } = (0, eV.Ay)();
        return (0, n.jsx)(eQ, { boxLayout: s, title: ej.intl.string(ej.t.EnzW2H), startLeftAligned: !0, ...e });
    });
var eY = t(877624),
    eZ = t(707554),
    eq = t(526292),
    e$ = t(236834),
    e0 = t(549996),
    e2 = t(810660),
    e1 = t(371764),
    e6 = t(97808),
    e8 = t(854627),
    e5 = t(778712),
    e4 = t(45861);
function e7(e) {
    let { referrer: s } = e,
        { avatarSrc: t, eventHandlers: i } = (0, e8.A)({ userId: s?.id, size: e5._3.SIZE_24, animateOnHover: !0 });
    return (0, n.jsx)("div", {
        className: e4.$6,
        children: (0, n.jsxs)("div", {
            className: e4.sc,
            children: [
                (0, n.jsx)("div", {
                    className: e4.kR,
                    children: (0, n.jsx)(e6.eu, { src: t, "aria-label": s.username, size: e5._3.SIZE_32, ...i }),
                }),
                (0, n.jsx)(em.D, {
                    variant: "heading-sm/normal",
                    className: e4.FS,
                    color: "text-strong",
                    children: ej.intl.format(ej.t.IqxblS, {
                        username: null != s.globalName ? s.globalName : s.username,
                    }),
                }),
            ],
        }),
    });
}
var e9 = t(579245),
    e3 = t(175569),
    se = t(369805);
let ss = function () {
    let e = (0, se.A)(void 0, { includesPremiumGroup: !0 });
    return null == e ? null : (0, n.jsx)(e3.A, { text: e });
};
var st = t(97352);
function si() {
    let e = (0, o.bG)([st.A], () => st.A.getForSkuAndInterval((0, Q.mH)(eU.pe.TIER_0), eU.WT.MONTH));
    return null != e ? (0, Q.sS)(e) : "\u2026";
}
var sn = t(141502),
    sa = t(188393);
let sl = function (e) {
    let { containerVisibilityPercentage: s } = e,
        t = (0, eu.bG)([F.Ay], () => F.Ay.useReducedMotion),
        i = (0, es.TM)();
    return (0, n.jsxs)("div", {
        "aria-hidden": !0,
        className: sa.YU,
        children: [
            (0, n.jsx)(sn.A, {
                supportHEVCAlpha: i,
                isMotionReduced: t,
                containerVisibilityPercentage: s,
                containerClassName: sa.wG,
                assetClassName: sa.lu,
            }),
            (0, n.jsx)(eg.A, {
                isMotionReduced: t,
                containerVisibilityPercentage: s,
                boltContainerClassName: sa.nJ,
                carContainerClassName: sa.IN,
                hammerContainerClassName: sa.Gj,
                keyContainerClassName: sa.FV,
                starContainerClassName: sa.E1,
                boltAssetClassName: sa.j7,
                carAssetClassName: sa.or,
                hammerAssetClassName: sa.Wv,
                keyAssetClassName: sa.rs,
                starAssetClassName: sa.OY,
            }),
        ],
    });
};
var sr = t(469408);
let sc = a.memo(
    a.forwardRef(function (e, s) {
        let { className: t, subscriptionTier: i, isEligibleForBogoPromotion: a } = e,
            { analyticsLocations: l } = (0, f.Ay)(h.A.PREMIUM_MARKETING_HERO_CTA),
            c = si(),
            d = (0, e$.A)(),
            m = null != d,
            u = (0, o.bG)([F.Ay], () => F.Ay.useReducedMotion),
            { visibilityPercentageRef: x, visibilityPercentage: g } = (0, e2.U)(!u),
            N = (0, O.b)(),
            j = !m && N.length > 0,
            p = (0, e0.c)(eY.C.MARKETING_PAGE_BANNER),
            A = null != p && "marketingPageBanner" === p.properties.properties.oneofKind,
            v = (0, eq.ar)() && !A,
            b = (0, G.O)(),
            E = (null != b && eU.U4.includes(b.discountId)) || A;
        return (0, n.jsx)(f.f5, {
            value: l,
            children: (0, n.jsx)("div", {
                ref: s,
                className: r()(sr.kL, t),
                "data-testid": "marketing-page-hero-header",
                children: (0, n.jsx)("div", {
                    ref: x,
                    children: (0, n.jsxs)("div", {
                        className: sr.hQ,
                        children: [
                            (0, n.jsx)(sl, { containerVisibilityPercentage: g }),
                            v && (0, n.jsx)(ss, {}),
                            (0, n.jsx)("div", {
                                className: sr.s8,
                                children: (0, n.jsx)(eZ.F, {
                                    forceLevel: 1,
                                    children: (0, n.jsx)(em.D, {
                                        variant: "display-md",
                                        color: "text-strong",
                                        className: sr.wx,
                                        children: ej.intl.string(ej.t.YCZldK),
                                    }),
                                }),
                            }),
                            (0, n.jsxs)("div", {
                                className: sr.rf,
                                children: [
                                    m &&
                                        (0, n.jsx)("div", {
                                            className: sr.eZ,
                                            children: (0, n.jsx)(e7, { referrer: d }),
                                        }),
                                    j &&
                                        (0, n.jsx)("div", {
                                            className: sr.Qn,
                                            children: (0, n.jsx)(e9.A, {
                                                textColor: "text-strong",
                                                smallerText: !1,
                                                isApplicationHome: !0,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    (0, n.jsxs)("div", {
                                        className: v ? sr.es : sr.UJ,
                                        children: [
                                            (0, n.jsx)(er.A, {
                                                size: "md",
                                                fullWidth: v,
                                                hasActivePromotion: !!a,
                                                subscriptionTier: E && null == i ? eU.pe.NONE : i,
                                                buttonTextOverride: E ? ej.intl.string(ej.t["2pG5Ga"]) : void 0,
                                            }),
                                            !v && (0, n.jsx)(el.A, { variant: "secondary", size: "md" }),
                                        ],
                                    }),
                                    (0, n.jsx)("div", {
                                        className: sr.iQ,
                                        children: (0, n.jsx)(eE.E, {
                                            color: "text-muted",
                                            variant: "text-xs/medium",
                                            children: ej.intl.format(ej.t.kt9wxs, { cheapestMonthlyPrice: c }),
                                        }),
                                    }),
                                    null != p &&
                                        "marketingPageBanner" === p.properties.properties.oneofKind &&
                                        (0, n.jsx)(e1.x, {
                                            componentId: p.id,
                                            promotionBannerMarketingComponentFields:
                                                p.properties.properties.marketingPageBanner,
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
var so = t(661531),
    sd = t(820081),
    sm = t(140735),
    su = t(401432),
    sx = t(580630),
    sg = t(410516),
    sh = t(795269);
t(321073);
var sf = t(773669),
    sN = t(975571),
    sj = t(398523),
    sp = t(881373),
    sA = t(84483),
    sv = t(190107),
    sb = t(962995),
    sE = t(490285),
    sC = t(864386),
    sI = t(799642),
    sT = t(202600);
function sR(e) {
    let { includes: s } = e;
    return s
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(sd.B, { size: "sm", color: so.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                  (0, n.jsx)(sm.A, { children: ej.intl.string(ej.t["tq+6t/"]) }),
              ],
          })
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(su.a, { size: "xs", color: so.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                  (0, n.jsx)(sm.A, { children: ej.intl.string(ej.t.l4qZrp) }),
              ],
          });
}
function s_(e) {
    let { label: s, tier0ColumnData: t, tier2ColumnData: i } = e;
    return (0, n.jsxs)("tr", {
        className: r()(sI.nM, sI.WQ),
        children: [
            (0, n.jsx)("th", {
                scope: "row",
                className: sI.nx,
                children: (0, n.jsx)(eE.E, { variant: "text-md/medium", children: s }),
            }),
            (0, n.jsx)("td", {
                className: sI.Hn,
                children:
                    null != t.text
                        ? (0, n.jsx)(eE.E, { variant: "text-md/medium", children: t.text })
                        : (0, n.jsx)(sR, { includes: !!t.includes }),
            }),
            (0, n.jsx)("td", {
                className: sI.Hn,
                children:
                    null != i.text
                        ? (0, n.jsx)(eE.E, { variant: "text-md/medium", children: i.text })
                        : (0, n.jsx)(sR, { includes: !!i.includes }),
            }),
        ],
    });
}
function sS(e) {
    let { title: s, subtitle: t, rows: i } = e;
    return (0, n.jsxs)("tbody", {
        children: [
            (0, n.jsx)("tr", {
                className: r()(sI.nM, sI.Gf),
                children: (0, n.jsxs)("td", {
                    className: sI.nx,
                    colSpan: 3,
                    children: [
                        (0, n.jsx)(em.D, { variant: "heading-lg/bold", children: s }),
                        null != t && (0, n.jsx)(eE.E, { variant: "text-xs/medium", children: t }),
                    ],
                }),
            }),
            i.map((e) => (0, n.jsx)(s_, { ...e }, e.id)),
        ],
    });
}
function sM(e) {
    let { premiumType: s, priceString: t } = e,
        i = s === eU.PremiumTypes.TIER_0 ? ej.intl.string(ej.t.tUbSDK) : ej.intl.string(ej.t.Ipxkog);
    return (0, n.jsxs)("div", {
        className: sI.nn,
        children: [
            (0, n.jsxs)("div", {
                className: sI.KS,
                children: [
                    (0, n.jsx)(ev.t, { colorClass: sI.oG }),
                    (0, n.jsx)(em.D, { variant: "heading-sm/semibold", children: i }),
                ],
            }),
            (0, n.jsx)(em.D, { variant: "heading-sm/semibold", children: t }),
        ],
    });
}
function sy(e) {
    let { tier0Price: s, tier2Price: t, shouldUseDiscountPrice: i, tier2DiscountedPriceString: a } = e,
        l = i ? a : (0, sx.$g)(t.amount, t.currency);
    return (0, n.jsx)("thead", {
        children: (0, n.jsxs)("tr", {
            className: sI.U1,
            children: [
                (0, n.jsx)("th", {
                    scope: "col",
                    className: sI.Cr,
                    children: (0, n.jsx)(em.D, { variant: "heading-xl/bold", children: ej.intl.string(ej.t.ED4UVD) }),
                }),
                (0, n.jsx)("th", {
                    scope: "col",
                    className: sI.Hn,
                    children: (0, n.jsx)(sM, {
                        premiumType: eU.PremiumTypes.TIER_0,
                        priceString: (0, sx.$g)(s.amount, s.currency),
                    }),
                }),
                (0, n.jsx)("th", {
                    scope: "col",
                    className: sI.Hn,
                    children: (0, n.jsx)(sM, { premiumType: eU.PremiumTypes.TIER_2, priceString: l }),
                }),
            ],
        }),
    });
}
let sP = function (e) {
        let s,
            { className: t, hidePill: i = !1, selectedPlanTier: l = eU.PremiumTypes.TIER_2 } = e,
            { analyticsLocations: c } = (0, f.Ay)(h.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            o = (0, w.V)(),
            d = o?.subscription_trial?.sku_id,
            m = (0, G.O)(),
            u = (0, sg.YJ)(m),
            x = null != m && (0, sg.U9)(m, eU.pe.TIER_2) && u === eU.gD.PREMIUM_MONTH_TIER_2,
            g = (0, sg.N1)(u),
            N = null != g ? `${g}/${(0, Q.FJ)(eU.WT.MONTH)}` : "",
            j = (0, Q.JM)(eU.gD.PREMIUM_MONTH_TIER_0),
            p = (0, Q.JM)(eU.gD.PREMIUM_MONTH_TIER_2),
            A = (function () {
                let e = (0, eM.l)("premium_marketing_comparison"),
                    s = [
                        {
                            id: 10,
                            label: ej.intl.string(ej.t["svn/YX"]),
                            tier0ColumnData: { includes: !0 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 7,
                            label: ej.intl.string(ej.t.ID5B6Z),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 13,
                            label: ej.intl.string(ej.t["PBUrx/"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 22,
                            label: ej.intl.string(sC.default["86GtGH"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                    ],
                    t = null,
                    i = [],
                    { shouldShowBonusOrbsUX: n, multiplier: a } = (0, K.lk)(sv.rE.NITRO_HOME_MARKETING),
                    { enabled: l } = sj.Ay.useConfig({ location: "useGetV2PlanComparisonTableRowsApplicationHome" }),
                    { functionalityEnabled: r } = (0, sp.YS)({
                        location: "useGetV2PlanComparisonTableRowsApplicationHome",
                    }),
                    { isInTreatment: c } = (0, sA.uX)("premium_marketing_comparison");
                return (
                    e &&
                        ((t = {
                            id: 23,
                            title: ej.intl.string(ej.t.NG1e6l),
                            subtitle: ej.intl.format(eH.default.uJcbMv, {
                                termsLink: sN.A.getArticleURL(ec.MVz.NITRO_2_POINT_0),
                            }),
                            rows: [
                                {
                                    id: 24,
                                    label: ej.intl.string(eH.default.OpOEmk),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                            ],
                        }),
                        l &&
                            t.rows.push({
                                id: 25,
                                label: ej.intl.string(eH.default.Q0A42h),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        r &&
                            t.rows.push({
                                id: 26,
                                label: ej.intl.string(sb.default["gc2sa/"]),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        n &&
                            i.push({
                                id: 27,
                                label: ej.intl.formatToPlainString(ej.t.Uhemob, { bonusOrbMultiplier: a }),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        c &&
                            i.push({
                                id: 28,
                                label: ej.intl.string(sE.default["20tmSN"]),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            })),
                    [
                        ...(null != t ? [t] : []),
                        { id: 17, title: ej.intl.string(ej.t.Ij3Zmv), rows: s },
                        {
                            id: 18,
                            title: ej.intl.string(ej.t.Wme3nX),
                            rows: [
                                {
                                    id: 0,
                                    label: ej.intl.string(ej.t.LrUABv),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 1,
                                    label: ej.intl.string(ej.t.DmfiwT),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 2,
                                    label: ej.intl.string(ej.t.Uukj4o),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 12,
                                    label: ej.intl.string(ej.t.NIKDqG),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 9,
                                    label: ej.intl.string(ej.t["5OAKhw"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                            ],
                        },
                        {
                            id: 19,
                            title: ej.intl.string(ej.t["6b3ydG"]),
                            rows: [
                                {
                                    id: 4,
                                    label: ej.intl.string(ej.t["ufhQC+"]),
                                    tier0ColumnData: { text: (0, Q.EJ)(eU.PremiumTypes.TIER_0) },
                                    tier2ColumnData: { text: (0, Q.EJ)(eU.PremiumTypes.TIER_2) },
                                },
                                {
                                    id: 11,
                                    label: ej.intl.string(ej.t.qQxxVc),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 3,
                                    label: ej.intl.string(ej.t["9kRJS8"]),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 21,
                                    label: ej.intl.string(ej.t["5BJqNF"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 5,
                                    label: ej.intl.string(ej.t.VwxlMw),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 6,
                                    label: ej.intl.formatToPlainString(ej.t.nyhDpw, {
                                        numBoosts: eU.M4,
                                        percentageOff: (0, sx.l9)(sf.default.locale, eU.oX / 100),
                                    }),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 16,
                                    label: ej.intl.string(ej.t["93xPy3"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 8,
                                    label: ej.intl.string(ej.t.IzrZHz),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 20,
                                    label: ej.intl.string(ej.t.Rj1Qys),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                ...i,
                                {
                                    id: 15,
                                    label: ej.intl.formatToPlainString(ej.t["8crdzJ"], { maxChars: ec.CS1 }),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 14,
                                    label: ej.intl.string(ej.t["il8+nC"]),
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
            let e = null != o ? ej.intl.string(ej.t.IBYG5U) : ej.intl.string(ej.t.TR2B4T);
            s = (0, n.jsx)(sh.R, { className: r()(sI.Io, sI.SP), text: e });
        }
        let v = d === eU.pe.TIER_0 || l === eU.PremiumTypes.TIER_0;
        return (0, n.jsx)(f.f5, {
            value: c,
            children: (0, n.jsxs)("div", {
                className: r()(sI.zr, t),
                children: [
                    (0, n.jsx)(em.D, {
                        className: sI.Qw,
                        variant: "display-md",
                        color: "text-strong",
                        children: ej.intl.string(ej.t.DbPgAd),
                    }),
                    (0, n.jsxs)("div", {
                        className: sI.wY,
                        children: [
                            (0, n.jsxs)("div", {
                                className: r()(sI.fO, { [sI.Vd]: v, [sI.hA]: !v }),
                                children: [
                                    !v && s,
                                    (0, n.jsx)("div", { className: sI.xQ }),
                                    (0, n.jsxs)("div", {
                                        className: sI.wN,
                                        children: [
                                            (0, n.jsx)("img", { src: sT, alt: "", className: sI.kQ }),
                                            (0, n.jsx)("img", {
                                                src: "/assets/6162a665edda48d4.svg",
                                                alt: "",
                                                className: sI.kQ,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, n.jsxs)("table", {
                                className: sI.tp,
                                children: [
                                    (0, n.jsx)(sy, {
                                        tier0Price: j,
                                        tier2Price: p,
                                        shouldUseDiscountPrice: x,
                                        tier2DiscountedPriceString: N,
                                    }),
                                    A.map((e) => (0, a.createElement)(sS, { ...e, key: e.id })),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    },
    sD = function (e) {
        let { scrollOffset: s } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { scrollOffset: 60 },
            t = (0, a.useCallback)(
                (e) => {
                    let t = c.current[e];
                    null != t &&
                        ((t.style.scrollMarginTop = `${s}px`),
                        t.scrollIntoView({ behavior: "smooth", block: "start" }));
                },
                [s],
            ),
            [i, n] = (0, a.useState)(Object.fromEntries(e.map((e) => [e, !1]))),
            [l, r] = (0, a.useState)(e[0]);
        (0, a.useEffect)(() => {
            let e = Object.keys(i).filter((e) => i[e]);
            e.length > 0 && r(e[0]);
        }, [i]);
        let c = (0, a.useRef)({});
        return (
            (0, a.useEffect)(() => {
                let e = new IntersectionObserver((e) => {
                    e.forEach((e) => {
                        n((s) => ({ ...s, [e.target.id]: e.isIntersecting }));
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
                navBarSections: (0, a.useMemo)(
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
var sk = t(818348),
    sO = t(808557);
let sG = () => {
    let e = (0, c.zy)();
    (0, b.P)(v.b);
    let s = a.useRef(null),
        t = a.useRef(null),
        i = a.useRef(null),
        l = a.useRef(null),
        d = a.useRef(null),
        m = a.useRef(null),
        u = (0, o.bG)([F.Ay], () => F.Ay.useReducedMotion),
        [x, g] = a.useState(u);
    a.useEffect(() => {
        if (u) return void g(!0);
        let e = t.current;
        if (null == e) return;
        let s = (s) => {
            s.target === e && g(!0);
        };
        return e.addEventListener("animationend", s), () => e.removeEventListener("animationend", s);
    }, [u]);
    let [N, j] = a.useState(!1),
        [p, A] = a.useState(!1),
        [E, C] = a.useState(!1),
        [I, T] = a.useState(!1),
        R = (0, o.bG)([_.A], () => _.A.getPremiumTypeSubscription()),
        M = null != R ? (0, Q.EL)(R) : null,
        y = null != M ? Q.Ay.getSkuIdForPlan(M.planId) : null,
        P = null !== y && y !== eU.pe.TIER_2 ? eU.pe.TIER_2 : null,
        D = (0, X.cg)(),
        { analyticsLocations: k } = (0, f.Ay)(h.A.PREMIUM_MARKETING);
    a.useEffect(() => {
        T(!0);
    }, []);
    let O = (0, W.DK)(V.W.NITRO, "PremiumMarketingHome"),
        { shouldShowBonusOrbsUX: G } = (0, K.lk)(sv.rE.NITRO_HOME_MARKETING),
        w = O && G ? eV.NI.COMBINED_ORBS : G ? eV.NI.ORB_MULTIPLIER : O ? eV.NI.ORB_REWARDS : null,
        L = a.useMemo(() => {
            let s = new URLSearchParams(e.search).get("section");
            return "orbs" === s ? w : s === eV.NI.THREE_P_PROMOTIONS ? eV.NI.THREE_P_PROMOTIONS : null;
        }, [e.search, w]);
    (0, J.z)(L ?? "", null != L);
    let { navBarSections: B, activeSectionId: q } = sD([ei.HOME, ei.WHATS_NEW, ei.BEST_OF_NITRO, ei.PLANS, ei.COMPARE]),
        { home: $, whatsNew: ee, bestOfNitro: es, plans: en, compare: ea } = B,
        el = (0, n.jsxs)("div", {
            ref: t,
            className: r()(sO.kL, sO.Gd, sO.iI, { [sO.Hq]: !u }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, n.jsx)(et, { className: sO.yH }),
                (0, n.jsx)(eS, { navBarSections: B, activeSectionId: q, isAnimationComplete: x }),
                (0, n.jsxs)("div", {
                    className: sO.Qr,
                    children: [
                        (0, n.jsx)("div", {
                            className: sO.qY,
                            ref: $.ref,
                            children: (0, n.jsx)(U.L, {
                                innerRef: l,
                                onChange: (e) => j(e),
                                threshold: 0,
                                active: !0,
                                children: (0, n.jsx)(sc, {
                                    ref: l,
                                    subscriptionTier: P,
                                    isEligibleForBogoPromotion: D,
                                }),
                            }),
                        }),
                        D &&
                            (0, n.jsx)("div", {
                                className: sO.Hz,
                                children: (0, n.jsx)(Y.A, { variant: Y.c.APPLICATION_NITRO_HOME }),
                            }),
                        (0, n.jsx)("div", {
                            className: sO.So,
                            ref: ee.ref,
                            children: (0, n.jsx)(eX, { shouldLoadVideo: I, isReducedMotion: u }),
                        }),
                        (0, n.jsx)("div", {
                            className: sO.KQ,
                            ref: es.ref,
                            children: (0, n.jsx)(eJ, { shouldLoadVideo: I, isReducedMotion: u }),
                        }),
                        (0, n.jsx)("div", {
                            className: sO.s5,
                            ref: en.ref,
                            children: (0, n.jsx)(U.L, {
                                innerRef: i,
                                onChange: (e) => A(e),
                                threshold: 0.1,
                                active: !0,
                                children: (0, n.jsx)(Z.jP, { innerRef: i }),
                            }),
                        }),
                        (0, n.jsx)("div", { className: sO.aC, ref: ea.ref, children: (0, n.jsx)(sP, {}) }),
                    ],
                }),
                (0, n.jsx)(U.L, {
                    innerRef: d,
                    onChange: (e) => {
                        e &&
                            !E &&
                            (S.default.track(ec.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: k }),
                            C(!0));
                    },
                    children: (0, n.jsx)("div", { ref: d, className: sO._Z }),
                }),
                (0, n.jsx)(eA, { ref: m }),
                (0, n.jsx)(ed, { isVisible: !N && !p && I, subscriptionTier: P, isEligibleForBogoPromotion: D }),
                (0, n.jsx)(et, { className: sO.MF }),
            ],
        });
    return (0, n.jsx)(H.N, {
        theme: sk.NJ.DARKER,
        children: (e) => (0, n.jsx)(z.Gt, { className: r()(sO.XG, e), ref: s, children: el }),
    });
};
var sw = t(462887),
    sL = t(862482),
    sB = t(374200),
    sU = t(396375),
    sH = t(815846),
    sz = t(860839),
    sF = t(993077),
    sK = t(695366),
    sV = t(780964),
    sW = t(766075),
    sQ = t(835968);
let sX = function (e) {
    let s,
        t,
        { premiumSubscription: i, className: a, textColor: l } = e,
        c = (0, eq.ar)();
    if (null == i) return null;
    let o = null != i ? Q.Ay.getPremiumPlanItem(i) : null;
    if (
        (Q.Ay.isBoostOnlySubscription(i)
            ? (s = ej.intl.string(ej.t.Uj0md3))
            : null != o && (s = Q.Ay.getTierDisplayNameByPlanId(o.planId)),
        null == s)
    )
        return null;
    function d() {
        return (0, sW.openUserSettings)(sV.X.SUBSCRIPTIONS_PANEL);
    }
    let m = (null != o ? Q.Ay.getSkuIdForPlan(o.planId) : null) === eU.pe.TIER_1;
    return (
        (t = null != l ? l : c ? "always-white" : "text-default"),
        (0, n.jsxs)(sF.Z, {
            className: r()(sQ.kL, a, { [sQ.He]: c }),
            type: sF.Z.Types.CUSTOM,
            children: [
                (0, n.jsx)(sK.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: r()(sQ.Kk, { [sQ.Pt]: c }),
                }),
                (0, n.jsx)(eE.E, {
                    variant: "text-sm/medium",
                    color: t,
                    children: m
                        ? ej.intl.format(ej.t["tYuv+T"], {
                              helpdeskArticle: sN.A.getArticleURL(ec.MVz.PREMIUM_DETAILS),
                              onSubscriptionsClick: d,
                          })
                        : ej.intl.format(ej.t.xHRgU2, { subscriptionName: s, onSubscriptionsClick: d }),
                }),
            ],
        })
    );
};
var sJ = t(147935);
let sY = function (e) {
    let { lifted: s = !1 } = e;
    return (0, n.jsxs)("svg", {
        width: "100%",
        height: "793px",
        viewBox: "0 0 2338 793",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "none",
        className: r()(sJ.zr, { [sJ.N]: s }),
        children: [
            (0, n.jsx)("path", {
                d: "M1175.02 650.847C567.943 650.847 449.538 793 0 793V0H2338V529.841C1912.54 529.841 1705.84 650.847 1175.02 650.847Z",
                fill: "url(#paint0_linear_2548_770)",
            }),
            (0, n.jsx)("defs", {
                children: (0, n.jsxs)("linearGradient", {
                    id: "paint0_linear_2548_770",
                    x1: "2338",
                    y1: "-1.20115e-05",
                    x2: "2262.17",
                    y2: "975.136",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        (0, n.jsx)("stop", { className: sJ.eq }),
                        (0, n.jsx)("stop", { offset: "0.339235", className: sJ.l_ }),
                        (0, n.jsx)("stop", { offset: "0.492065", className: sJ.sM }),
                        (0, n.jsx)("stop", { offset: "0.823236", className: sJ.zi }),
                        (0, n.jsx)("stop", { offset: "0.899558", className: sJ.s1 }),
                    ],
                }),
            }),
        ],
    });
};
var sZ = t(900797),
    sq = t(847374),
    s$ = t(812993),
    s0 = t(464769);
function s2(e) {
    let { className: s } = e;
    return (0, n.jsx)(s$.Lp, { className: r()(s0.T, s), text: ej.intl.string(ej.t.EYxi0o) });
}
var s1 = t(904788),
    s6 = t(507553),
    s8 = t(591179),
    s5 = t(255438),
    s4 = t(355097);
let s7 = "/assets/5b4fec8511c3676a.svg",
    s9 = "/assets/0838bda6ecd20d91.svg";
var s3 = t(64514),
    te = t(121818);
function ts(e, s, t) {
    return (0, sw.M)(e) ? s : t;
}
var tt = t(446278);
function ti(e) {
    let { isShowingAll: s, onClick: t } = e;
    return (0, n.jsxs)(eb.D, {
        onClick: t,
        className: tt.customButton,
        children: [
            s ? ej.intl.string(ej.t.maZaN3) : ej.intl.string(ej.t["37C26f"]),
            s
                ? (0, n.jsx)(sZ.t, { size: "md", color: "currentColor", className: tt.arrow })
                : (0, n.jsx)(sq.a, { size: "md", color: "currentColor", className: tt.arrow }),
        ],
    });
}
function tn(e) {
    let {
            title: s,
            description: t,
            className: i,
            imageSource: a,
            imageClassName: l,
            titleBadge: c,
            isNew: o = !1,
            isEarlyAccess: d = !1,
        } = e,
        { analyticsLocations: m } = (0, f.Ay)(h.A.PREMIUM_MARKETING_PERK_CARD);
    return (0, n.jsx)(f.f5, {
        value: m,
        children: (0, n.jsxs)("div", {
            className: r()(tt.perkCard, i),
            children: [
                o
                    ? (0, n.jsx)(s1.A, {
                          className: tt.perkCardNewBadge,
                          shouldInheritBackgroundColor: !0,
                          shouldInheritTextColor: !0,
                      })
                    : null,
                d ? (0, n.jsx)(s2, { className: tt.perkCardEarlyAccessBadge }) : null,
                (0, n.jsx)("img", { src: a, alt: "", className: r()(l, tt.perksCardArt) }),
                (0, n.jsxs)("div", {
                    children: [
                        (0, n.jsxs)(em.D, {
                            variant: "heading-lg/extrabold",
                            className: tt.perkCardHeading,
                            children: [s, " ", c],
                        }),
                        (0, n.jsx)(eE.E, {
                            variant: "text-sm/normal",
                            className: tt.perkCardDescription,
                            children: "function" == typeof t ? t(m) : t,
                        }),
                    ],
                }),
            ],
        }),
    });
}
let ta = function (e) {
    let { className: s, isSubscriberNitroHome: i = !1 } = e,
        [l, c] = a.useState(!1),
        o = (function (e) {
            let { styles: s } = e,
                i = (0, $.Ay)(),
                n = (0, s8.X)("usePerkCards"),
                a = (0, eu.bG)([T.default], () => {
                    let e = T.default.getCurrentUser();
                    return Q.Ay.canUsePremiumProfileCustomization(e);
                }),
                l = (0, s5.Xq)(eU.f3 / 1024, { useKibibytes: !0 });
            return {
                badge: {
                    title: ej.intl.string(ej.t.SS87rQ),
                    description: ej.intl.string(ej.t.oD6CRr),
                    imageSource: "/assets/70e295f6158d848f.png",
                    imageClassName: s.badgeImage,
                },
                badgeAlt: {
                    title: ej.intl.string(ej.t["5cYMu0"]),
                    description: ej.intl.string(ej.t.vxk9va),
                    imageSource: ts(i, "/assets/42e77ef3b6c4c1bb.svg", "/assets/ab48ff2bd2dce6a1.svg"),
                    imageClassName: s.badgeNewImage,
                },
                clientThemes: {
                    title: ej.intl.string(ej.t["/xvEMy"]),
                    description: ej.intl.string(ej.t.HKWdjj),
                    className: s.clientThemesCard,
                    imageSource: "/assets/37e0853800afb796.svg",
                    imageClassName: s.clientThemesImage,
                },
                customAppIcons: {
                    title: ej.intl.string(ej.t.OuItFi),
                    description: ej.intl.string(ej.t.mPyrE6),
                    imageSource:
                        "https://cdn.discordapp.com/assets/content/bca160c31fc5390dd2b41d90060edcc912a45f6ab3beab44ea79e16bf1f6530f.png",
                    imageClassName: s.customAppIconImage,
                },
                emoji: {
                    title: ej.intl.string(ej.t["R2IV/Q"]),
                    description: ej.intl.string(ej.t.R5Xag2),
                    imageSource: "/assets/d8edaaf5cb32248f.svg",
                    imageClassName: s.emojiImage,
                },
                guildProfile: {
                    title: ej.intl.string(ej.t.lKDhhJ),
                    description: (e) => {
                        if (n)
                            return a
                                ? ej.intl.formatToPlainString(ej.t.aj1pfZ, { onCheckItOutClick: () => {} })
                                : ej.intl.formatToPlainString(ej.t.d2oYS8, { onTryItOutClick: () => {} });
                        function s() {
                            {
                                let { openUserSettings: s } = t(766075);
                                s6.A.setState({ scrollPosition: s4._F.TRY_IT_OUT }),
                                    s(sV.X.PROFILE_PANEL, { analyticsLocations: e });
                            }
                        }
                        return a
                            ? ej.intl.format(ej.t.aj1pfZ, { onCheckItOutClick: s })
                            : ej.intl.format(ej.t.d2oYS8, { onTryItOutClick: s });
                    },
                    imageSource: "/assets/e1b6b45be1ce4b03.png",
                    imageClassName: s.perGuildProfilesImage,
                },
                longerMessages: {
                    title: ej.intl.string(ej.t.BUScid),
                    description: ej.intl.string(ej.t.vN6XpQ),
                    imageSource: ts(i, "/assets/dd2088e61de76ba7.svg", "/assets/62b63638a6645137.svg"),
                    imageClassName: s.longerMessagesImage,
                },
                moreGuilds: {
                    title: ej.intl.string(ej.t.Bv8Pfk),
                    description: ej.intl.string(ej.t.JMfaTU),
                    imageSource: ts(i, "/assets/587c08f512a71514.png", "/assets/3308a5a697922299.svg"),
                    imageClassName: s.moreGuildsImage,
                },
                moreGuildsAlt: {
                    title: ej.intl.string(ej.t.Bv8Pfk),
                    description: ej.intl.string(ej.t.JMfaTU),
                    imageSource: ts(i, "/assets/f1d357c6741d62c3.svg", "/assets/8568e72f2b535d2f.svg"),
                    imageClassName: s.moreGuildsAltImage,
                },
                soundboard: {
                    title: ej.intl.string(ej.t["lGcW+c"]),
                    description: ej.intl.string(ej.t["/fDyO+"]),
                    imageSource: ts(i, "/assets/bd6751720573fb38.svg", "/assets/c292e42489e70696.svg"),
                    imageClassName: s.soundboardImage,
                },
                stickers: {
                    title: ej.intl.string(ej.t["1c+xwT"]),
                    description: ej.intl.string(ej.t.hJG8ZN),
                    imageSource: ts(i, s9, s7),
                    imageClassName: s.stickersImage,
                },
                stickersBurst: {
                    title: ej.intl.string(ej.t.tzdIwI),
                    description: ej.intl.string(ej.t.hJG8ZN),
                    imageSource: ts(i, s9, s7),
                    imageClassName: s.stickersImage,
                },
                stickersPremiumPerk: {
                    title: ej.intl.string(ej.t.tzdIwI),
                    description: ej.intl.string(ej.t.hJG8ZN),
                    imageSource: ts(i, s9, s7),
                    imageClassName: s.stickersImage,
                },
                streaming: {
                    title: ej.intl.string(ej.t.RSXQYO),
                    description: ej.intl.string(ej.t.ymCPxp),
                    imageSource: "/assets/3bcdc01b26c7f691.svg",
                    imageClassName: s.streamingImage,
                },
                superReactions: {
                    title: ej.intl.string(ej.t["uZt5q/"]),
                    description: ej.intl.string(ej.t.ZK3ZoX),
                    imageSource: ts(i, "/assets/99b308eabe7fcfd2.svg", "/assets/fa48f6b36050a179.svg"),
                    imageClassName: s.superReactionsImage,
                },
                upload: {
                    title: ej.intl.formatToPlainString(ej.t.jqhAdL, { premiumMaxSize: l }),
                    description: ej.intl.formatToPlainString(ej.t["HI+cfm"], { premiumMaxSize: l }),
                    imageSource: "/assets/010eae6a6dbacc63.svg",
                    imageClassName: s.uploadImage,
                },
                videoBackground: {
                    title: ej.intl.string(ej.t.NaGpTf),
                    description: ej.intl.string(ej.t["A8O/Qw"]),
                    imageSource: ts(i, s3, te),
                    imageClassName: s.videoBackgroundImage,
                },
            };
        })({ styles: tt }),
        d = (0, eu.bG)([F.Ay], () => F.Ay.useReducedMotion),
        { analyticsLocations: m } = (0, f.Ay)(),
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
    return (0, n.jsxs)("div", {
        className: r()(tt.perksContainer, s, {
            [tt.partiallyHidden]: i && !l,
            [tt.subscriberNitroHome]: i,
            [tt.reducedMotion]: d,
        }),
        children: [
            (0, n.jsx)(em.D, {
                variant: "heading-xxl/extrabold",
                className: tt.perksTitle,
                children: i ? ej.intl.string(ej.t.QX14gI) : ej.intl.string(ej.t.RGadQR),
            }),
            (0, n.jsx)("div", {
                className: r()(tt.perkCardContainer, { [tt.perkCardContainerExpanded]: l }),
                children: u.map((e) => null != e && (0, n.jsx)(tn, { ...e }, e.title)),
            }),
            i &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)("div", {
                            className: r()({ [tt.sizeGizmo]: !l, [tt.sizeGizmoExpanded]: l }),
                            children: (0, n.jsx)(ti, {
                                onClick: function () {
                                    S.default.track(ec.HAw.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
                                        location_stack: m,
                                        was_expanded: l,
                                    }),
                                        c(!l);
                                },
                                isShowingAll: l,
                            }),
                        }),
                        (0, n.jsx)("div", { className: r()(tt.cover, { [tt.hidden]: l }) }),
                    ],
                }),
        ],
    });
};
var tl = t(194509),
    tr = t(14238);
let tc = function (e) {
    let { isVisible: s, subscriptionTier: t, isApplicationHome: i, isEligibleForBogoPromotion: a } = e,
        l = (0, ea.z)({
            transform: s ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!s,
            config: { tension: 120, friction: 12 },
        }),
        c = { section: ec.JJy.MARKETING_FLOATING_CTA },
        o = (0, $.Ay)(),
        d = (0, q.M)(o);
    return (0, n.jsx)(en.animated.div, {
        className: r()(tr.iE, { [tr.H8]: i, [tr.q4]: !s }),
        style: l,
        children: (0, n.jsxs)("div", {
            className: i ? tr.zW : tr.iJ,
            children: [
                (0, n.jsx)(sU.A, {
                    color: d ? sL.XD.BRAND_INVERTED : void 0,
                    className: r()(tr.x6, { [tr.Ph]: d }),
                    subscriptionTier: t,
                    premiumModalAnalyticsLocation: c,
                    isPersistentCTA: !0,
                    hasActivePromotion: a,
                    shinyButtonClassName: d ? void 0 : tr.PJ,
                }),
                (0, n.jsx)(tl.A, { className: tr.x6, premiumModalAnalyticsLocation: c }),
            ],
        }),
    });
};
var to = t(89366),
    td = t(360101);
function tm(e) {
    let {
            inOfferExperience: s,
            subscriptionTier: t,
            containerClassName: i,
            buttonClassName: a,
            isApplicationHome: l,
            isDarkMode: c,
            isEligibleForBogoPromotion: o,
        } = e,
        d = o
            ? (0, n.jsx)(sU.A, {
                  color: c ? sL.XD.BRAND_INVERTED : void 0,
                  className: r()(td.x6, td.Ph, a, { [td.Sq]: s && l, [td.MF]: l && !c }),
                  shinyButtonClassName: c ? void 0 : td.PJ,
                  subscriptionTier: t,
                  hasActivePromotion: !0,
              })
            : (0, n.jsx)(sU.A, {
                  color: c || !l ? sL.XD.BRAND_INVERTED : void 0,
                  className: r()(td.x6, td.Ph, a, { [td.Sq]: s && l, [td.MF]: l && !c }),
                  subscriptionTier: t,
              }),
        m = s && l ? null : (0, n.jsx)(tl.A, { className: r()(td.x6, a), color: l ? void 0 : sL.XD.WHITE });
    return (0, n.jsxs)("div", { className: r()(td.UD, i), children: [d, " ", m] });
}
function tu() {
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(s1.p, { className: td.zd }),
            (0, n.jsx)(s1.p, { className: td.G }),
            (0, n.jsx)(s1.p, { className: td.zy }),
            (0, n.jsx)(s1.p, { className: td.GX }),
        ],
    });
}
function tx(e) {
    let { variant: s = "text-lg/normal", withBottomMargin: t = !0, isApplicationHome: i } = e,
        a = si();
    return (0, n.jsx)(eE.E, {
        variant: s,
        color: i ? "text-subtle" : "always-white",
        className: r()(td.h_, { [td.If]: t, [td.jn]: i }),
        children: ej.intl.format(ej.t.kt9wxs, { cheapestMonthlyPrice: a }),
    });
}
let tg = a.forwardRef(function (e, s) {
    let { className: t, buttonClassName: i, subscriptionTier: a, isDarkMode: l } = e,
        { analyticsLocations: c } = (0, f.Ay)(h.A.PREMIUM_MARKETING_HERO_CTA),
        o = (0, to.QQ)(),
        d = (0, eq.ar)(),
        m = (0, X.cg)(),
        u = (0, O.b)().length > 0,
        x = ej.intl.string(ej.t.YCZldK);
    return (0, n.jsx)(f.f5, {
        value: c,
        children: (0, n.jsxs)("div", {
            ref: s,
            className: r()(td.kL, t, { [td.V1]: !d, [td.Q4]: !d && u }),
            "data-testid": "v2-marketing-page-hero-header",
            children: [
                (0, n.jsxs)("div", {
                    className: d ? td.I6 : td.G1,
                    children: [
                        (0, n.jsx)(eZ.F, {
                            forceLevel: 1,
                            children: (0, n.jsx)(em.D, {
                                variant: d ? "display-lg" : "display-md",
                                color: "always-white",
                                children: x,
                            }),
                        }),
                        u
                            ? (0, n.jsx)("div", {
                                  className: td.DF,
                                  children: (0, n.jsx)(e9.A, { textColor: "always-white", smallerText: !d }),
                              })
                            : (0, n.jsx)(tx, {}),
                        m || o
                            ? (0, n.jsx)("div", {
                                  className: td.UD,
                                  children: (0, n.jsx)(tl.A, { className: r()(td.x6, i), color: sL.XD.WHITE }),
                              })
                            : (0, n.jsx)(tm, {
                                  subscriptionTier: a,
                                  inOfferExperience: d,
                                  buttonClassName: i,
                                  isDarkMode: l,
                              }),
                        u && (0, n.jsx)(tx, { variant: "text-md/normal", withBottomMargin: !1 }),
                    ],
                }),
                !d && (0, n.jsx)(tu, {}),
            ],
        }),
    });
});
var th = t(22118),
    tf = t(111932),
    tN = t(16939),
    tj = t(79119);
function tp(e) {
    let { inOfferExperience: s } = e;
    return s ? (0, n.jsx)(sY, { lifted: s }) : null;
}
let tA = () => {
        (0, b.P)(v.b);
        let e = a.useRef(null),
            s = a.useRef(null),
            t = a.useRef(null),
            i = (0, $.Ay)(),
            l = (0, sw.M)(i),
            [c, d] = a.useState(!1),
            [m, u] = a.useState(!1),
            [x, g] = a.useState(!1),
            [N, j] = a.useState(!1),
            p = (0, o.bG)([_.A], () => _.A.getPremiumTypeSubscription()),
            A = null != p ? (0, Q.EL)(p) : null,
            E = null != A ? Q.Ay.getSkuIdForPlan(A.planId) : null,
            C = null !== E && E !== eU.pe.TIER_2 ? eU.pe.TIER_2 : null,
            I = (0, w.V)(),
            T = I?.subscription_trial?.sku_id,
            R = (0, eq.ar)(),
            M = (0, X.cg)(),
            y = (0, eI.Gh)("premium-marketing-settings-page"),
            P = M ?? !1,
            D = (0, o.bG)([sB.A], () => {
                let e = sB.A.getMarketingComponentByType(eY.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.billingSettingsNitroGiftBanner;
            }),
            { analyticsLocations: k } = (0, f.Ay)(h.A.PREMIUM_MARKETING);
        a.useEffect(() => {
            j(!0);
        }, []);
        let O = (0, n.jsx)("div", {
            className: tN.dY,
            children: (0, n.jsx)(U.L, {
                innerRef: e,
                onChange: (e) => u(e),
                threshold: 0.1,
                active: !0,
                children: (0, n.jsx)(sz.qu, {
                    innerRef: e,
                    tier0CTAButton: (0, n.jsx)(sU.A, {
                        showIcon: !1,
                        subscriptionTier: eU.pe.TIER_0,
                        className: tf.Ph,
                        look: sL.pR.OUTLINED,
                        color: sL.XD.WHITE,
                        buttonShineClassName: tf.Qr,
                    }),
                    tier2CTAButton:
                        T === eU.pe.TIER_0
                            ? (0, n.jsx)(sU.A, {
                                  showIcon: !1,
                                  subscriptionTier: eU.pe.TIER_2,
                                  className: tf.Ph,
                                  look: sL.pR.OUTLINED,
                                  color: sL.XD.WHITE,
                                  buttonShineClassName: tf.Qr,
                              })
                            : (0, n.jsx)(sU.A, {
                                  color: sL.XD.BRAND_INVERTED,
                                  showIcon: !1,
                                  subscriptionTier: eU.pe.TIER_2,
                                  className: tf.Ph,
                                  hasActivePromotion: P,
                                  textOptions: { textClassName: tf.Ac },
                                  buttonShineClassName: tf.Qr,
                              }),
                }),
            }),
        });
        return (0, n.jsxs)("div", {
            className: tN.kL,
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, n.jsx)(sX, { premiumSubscription: p, className: r()(tN.R3, { [tN.aZ]: R }) }),
                R &&
                    (0, n.jsxs)("div", {
                        className: tN.n1,
                        children: [
                            (0, n.jsx)(tp, { inOfferExperience: R }),
                            y &&
                                (0, n.jsx)(eT.l, {
                                    className: tN.ij,
                                    size: "md",
                                    location: h.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                    forceDarkTheme: !0,
                                }),
                        ],
                    }),
                (0, n.jsxs)("div", {
                    className: r()({ [tN.V1]: !R }),
                    children: [
                        null != D && (0, n.jsx)(sH.c, { className: tN.w$, config: D }),
                        (0, n.jsxs)("div", {
                            className: tN.iS,
                            children: [
                                y &&
                                    !R &&
                                    (0, n.jsx)(eT.l, {
                                        className: tN.ij,
                                        size: "md",
                                        location: h.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                        forceDarkTheme: !0,
                                    }),
                                (0, n.jsx)(U.L, {
                                    innerRef: s,
                                    onChange: (e) => d(e),
                                    threshold: 0,
                                    active: !0,
                                    children: (0, n.jsx)(tg, {
                                        ref: s,
                                        subscriptionTier: C,
                                        className: r()({ [tN.p7]: R, [tN.Pw]: R, [tN.AG]: M, [tN.Cv]: null != p }),
                                        isDarkMode: l,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                O,
                (0, n.jsx)(ta, { className: tN.B_ }),
                (0, n.jsx)("div", { className: tN.aC, children: (0, n.jsx)(th.A, { className: tN.JQ, hideCTAs: !0 }) }),
                (0, n.jsx)("div", { className: tN.hz }),
                (0, n.jsx)(tc, {
                    isVisible: !c && !m && N,
                    subscriptionTier: C,
                    isApplicationHome: !1,
                    isEligibleForBogoPromotion: M,
                }),
                (0, n.jsx)(U.L, {
                    innerRef: t,
                    onChange: (e) => {
                        e &&
                            !x &&
                            (S.default.track(ec.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: k }),
                            g(!0));
                    },
                    children: (0, n.jsx)("div", { ref: t, className: tN._Z }),
                }),
                (0, n.jsx)("img", {
                    src: tj,
                    className: tN.Kw,
                    width: 112,
                    height: 85,
                    alt: ej.intl.string(ej.t.X4IxWL),
                }),
            ],
        });
    },
    tv = function (e) {
        let { entrypoint: s } = e,
            t = (0, w.V)(),
            i = (0, G.O)({ includePremiumGroupDiscount: !0 }),
            l = (0, B.NF)({ trialOffer: t }),
            r = (0, B.Tp)(),
            c = (0, o.bG)([L.A], () => L.A.getReminderStateId());
        switch (
            (a.useEffect(() => {
                !0 === l && (0, B.QG)(), !0 === r && (0, B.ne)(c), (null != t || null != i) && (0, P.u1)(t, i);
            }, [t, i, l, r, c]),
            s)
        ) {
            case eU.Mf.UserSettings:
                return (0, n.jsx)(tA, {});
            case eU.Mf.ApplicationStoreHome:
                return (0, n.jsx)(sG, {});
            default:
                return null;
        }
    };
var tb = t(972119);
let tE = function (e) {
    let { entrypoint: s = eU.Mf.UserSettings } = e;
    (0, b.P)(v.b);
    let t = (0, j.Hp)(),
        { isInNitroHomeHeaderTreatment: i } = (0, D.jy)("nitro_member_hub_header"),
        l = (0, y.ds)(),
        { sourceAnalyticsLocations: L, analyticsLocations: B } = (0, f.Ay)(h.A.PREMIUM_MARKETING),
        U = (0, o.bG)([_.A], () => _.A.hasFetchedSubscriptions()),
        H = (0, o.bG)([R.A], () => R.A.hasFetchedPaymentSources),
        z = (0, o.bG)([T.default], () => T.default.getCurrentUser()),
        F = z?.id,
        K = (0, w.V)(),
        V = (0, G.O)({ includePremiumGroupDiscount: !0 }),
        W = (0, p.Y)(eU.T7),
        [Q, X] = a.useState(!0),
        J = a.useRef(0),
        Y = (0, M.YE)(z, eU.PremiumTypes.TIER_2),
        Z = (0, o.bG)([_.A], () => _.A.getPremiumTypeSubscription()),
        q = null != Z && Z.status === ec.Dmq.CANCELED;
    (0, O.b)(),
        a.useEffect(() => {
            m.h.wait(async () => {
                let e = Date.now();
                await Promise.all([N.hP(), N.$o(), (0, u.zS)(null, null, ec.tF5.DISCOVERY)]),
                    (J.current = Date.now() - e),
                    X(!1);
            });
        }, []),
        a.useEffect(() => {
            Q ||
                S.default.track(ec.HAw.PREMIUM_MARKETING_PAGE_VIEWED, {
                    location_stack: L,
                    load_duration_ms: J.current,
                });
        }, [L, Q]),
        a.useEffect(() => {
            t && (null != K || null != V) && (0, P.u1)(K, V);
        }, [t, K, V]);
    let $ = (0, c.zy)(),
        ee = a.useRef(!1),
        es = U && H && W,
        [et, ei] = a.useState(es);
    es && !et && ei(!0),
        a.useEffect(() => {
            if (ee.current || !es) return;
            let e = new URLSearchParams($.search).get("checkout");
            if (null == e) return;
            let s = { nitro_basic: eU.pe.TIER_0, nitro: eU.pe.TIER_2 }[e];
            null != s &&
                ((ee.current = !0),
                (0, C.bG)(ec.BVt.APPLICATION_STORE),
                (0, E.A)({ subscriptionTier: s, analyticsLocations: B }));
        }, [es, $.search, B]);
    let en = (0, o.bG)([I.A], () => I.A.enabled),
        ea = s === eU.Mf.ApplicationStoreHome,
        el = en
            ? (0, n.jsx)(x.A, {})
            : t
              ? (0, n.jsx)(A.uK, {})
              : ea && Y
                ? (0, n.jsx)(f.f5, { value: B, children: (0, n.jsx)(k.Ay, { userId: F }) })
                : et
                  ? null
                  : (0, n.jsx)("div", { className: r()(tb.kL, tb.Lq), children: (0, n.jsx)(d.y, {}) });
    if (null != el) {
        let e = !en && !t && ea && Y;
        return i && e && !l && !q ? el : (0, n.jsxs)(n.Fragment, { children: [ea && (0, n.jsx)(g.A, {}), el] });
    }
    return (0, n.jsx)(f.f5, { value: B, children: (0, n.jsx)(tv, { entrypoint: s }) });
};
