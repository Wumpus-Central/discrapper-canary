s.d(t, { A: () => sE }), s(323874), s(14289), s(35956);
var i,
    l = s(627968),
    n = s(64700),
    a = s(503698),
    r = s.n(a),
    c = s(873263),
    o = s(17928),
    d = s(289873),
    u = s(228366),
    m = s(73825),
    x = s(974544),
    p = s(107834),
    h = s(793574),
    g = s(688810),
    j = s(753390),
    f = s(86379),
    N = s(160946),
    A = s(545075),
    _ = s(949030),
    C = s(611924),
    E = s(532794),
    v = s(976860),
    I = s(351906),
    R = s(287809),
    T = s(295405),
    b = s(166403),
    M = s(174459),
    y = s(474090),
    S = s(694080),
    P = s(287790),
    D = s(286320),
    O = s(422936),
    G = s(234419),
    L = s(851746),
    w = s(727949),
    k = s(269115),
    U = s(43990),
    B = s(689175),
    F = s(775602),
    H = s(192444),
    z = s(636592),
    V = s(26508),
    W = s(927578),
    K = s(960851),
    Y = s(994763),
    Z = s(949964),
    Q = s(226830),
    X = s(366010),
    J = s(736653),
    q = s(303136),
    $ = s(676279);
let ee = (e) => {
    let t,
        { className: s } = e,
        i = (0, $.TM)(),
        n = (0, X.q)((0, J.Ay)());
    return (
        (t = i
            ? n
                ? "https://cdn.discordapp.com/assets/content/06ad5b3e9274c7e75f135129da3141ef42681698d3c0cf79b8c83e8526c2064f.mov"
                : "https://cdn.discordapp.com/assets/content/e306e75bdcd95e261e8d501c2cc6674bf183ff83e53b8dcae4e7bfa98d15c273.mov"
            : n
              ? "https://cdn.discordapp.com/assets/content/2b403885861e2c1a8268fbdb8ba90a93b72fab9937dd1cdad47e68f814969dac.webm"
              : "https://cdn.discordapp.com/assets/content/5412744d944cb3bf22279ee7741dbdca87bd644fa128adcfd2d50ae56543d7c9.webm"),
        (0, l.jsx)("div", {
            className: s,
            children: (0, l.jsx)(
                q.A,
                {
                    fallbackImage: n
                        ? "https://cdn.discordapp.com/assets/content/6ddb7f92b6f26f24c70cc7bf84e11bb423378d47cd111866af3980b332bad336.png"
                        : "https://cdn.discordapp.com/assets/content/acbc696c59f02098ff0014edaf0ded799884a3fefed7f20bcdb6cf038bba0542.png",
                    children: (0, l.jsx)("source", { src: t }),
                },
                t,
            ),
        })
    );
};
var et =
        (((i = {}).HOME = "home"),
        (i.WHATS_NEW = "whatsNew"),
        (i.BEST_OF_NITRO = "bestOfNitro"),
        (i.PLANS = "plans"),
        (i.COMPARE = "compare"),
        i),
    es = s(873174),
    ei = s(717421),
    el = s(65470),
    en = s(792656),
    ea = s(652215),
    er = s(870408);
let ec = function (e) {
    let { isVisible: t, subscriptionTier: s, isEligibleForBogoPromotion: i } = e,
        n = (0, ei.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        a = { section: ea.JJy.MARKETING_FLOATING_CTA };
    return (0, l.jsx)(es.animated.div, {
        className: er.i,
        style: n,
        "data-mtctest-ignore": "true",
        children: (0, l.jsxs)("div", {
            className: er.U,
            children: [
                (0, l.jsx)(en.A, {
                    size: "md",
                    subscriptionTier: s,
                    hasActivePromotion: !!i,
                    isPersistentCTA: !0,
                    premiumModalAnalyticsLocation: a,
                }),
                (0, l.jsx)(el.A, { variant: "secondary", size: "md" }),
            ],
        }),
    });
};
var eo = s(534514),
    ed = s(702841),
    eu = s(652533),
    em = s(20458),
    ex = s(80933),
    ep = s(180894);
let eh = () => {
    let e = (0, ed.bG)([F.A], () => F.A.useReducedMotion);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                className: ex.BI,
                children: (0, l.jsx)(eu.Ay, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: eu.$G },
                    yAxisAnimationData: { range: 20, duration: eu.Mp, path: eu.aV.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: e,
                    children: (0, l.jsx)("img", { src: ep.A, alt: "", className: ex.Q }),
                }),
            }),
            (0, l.jsx)(em.A, {
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
var eg = s(375708),
    ej = s(296725);
let ef = n.forwardRef((e, t) => {
    let { analyticsLocations: s } = (0, g.Ay)(h.A.PREMIUM_MARKETING_FOOTER_CTA);
    return (0, l.jsx)(g.f5, {
        value: s,
        children: (0, l.jsx)("div", {
            ref: t,
            className: ej.kL,
            children: (0, l.jsxs)("div", {
                className: ej.hQ,
                children: [
                    (0, l.jsx)(eh, {}),
                    (0, l.jsx)(eo.D, {
                        variant: "display-md",
                        color: "text-strong",
                        className: ej.RH,
                        children: eg.intl.string(eg.t.lEw32m),
                    }),
                ],
            }),
        }),
    });
});
ef.displayName = "PremiumMarketingFooter";
var eN = s(403581),
    eA = s(939249),
    e_ = s(834730),
    eC = s(742589),
    eE = s(909536),
    ev = s(400669),
    eI = s(876587),
    eR = s(503255);
let eT = (e) => {
    let { navBarSections: t, activeSectionId: s, isAnimationComplete: i } = e,
        a = {
            [et.HOME]: eg.intl.string(eg.t.uGRXjS),
            [et.WHATS_NEW]: eg.intl.string(eg.t["mfcR/v"]),
            [et.BEST_OF_NITRO]: eg.intl.string(eg.t.xQKkE8),
            [et.PLANS]: eg.intl.string(eg.t.wyNMnm),
            [et.COMPARE]: eg.intl.string(eg.t.pwD7If),
        },
        r = (0, o.bG)([R.default], () => R.default.getCurrentUser()),
        c = (0, eE.Gh)("premium_marketing_nav_bar") && null != r,
        d = n.useRef(null),
        u = Object.values(t).sort((e, t) => e.order - t.order);
    return (0, l.jsxs)(eC.A, {
        className: eR.TQ,
        transparent: !0,
        children: [
            (0, l.jsxs)("div", {
                className: eR.Wc,
                children: [
                    (0, l.jsxs)("div", {
                        className: eR.wG,
                        children: [
                            (0, l.jsx)(eN.t, { className: eR.nE, colorClass: eR.oG }),
                            (0, l.jsx)("div", {
                                className: eR.zc,
                                children: u.map((e) => {
                                    let t = s === e.id,
                                        i = a[e.id];
                                    return (0, l.jsxs)(
                                        eA.D,
                                        {
                                            className: eR.S0,
                                            onClick: e.scrollToSection,
                                            children: [
                                                (0, l.jsx)(e_.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-strong",
                                                    children: i,
                                                }),
                                                t && (0, l.jsx)("div", { className: eR.W0 }),
                                            ],
                                        },
                                        i,
                                    );
                                }),
                            }),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: eR.MQ,
                        children: [
                            c &&
                                (0, l.jsx)(ev.l, { ref: d, size: "sm", location: h.A.PREMIUM_WISHLIST_MARKETING_PAGE }),
                            (0, l.jsx)(el.A, { size: "sm", variant: "overlay-secondary" }),
                        ],
                    }),
                ],
            }),
            c && i && (0, l.jsx)(eI.O, { targetElementRef: d }),
        ],
    });
};
var eb = s(31502),
    eM = s(990078),
    ey = s(704333),
    eS = s(414499),
    eP = s(597770),
    eD = s(500060),
    eO = s(885574),
    eG = s(406860),
    eL = s(985603),
    ew = s(983060),
    ek = s(788868),
    eU = s(237146),
    eB = s(56598);
function eF() {
    let { sectionRef: e, handleVisibilityChange: t } = (0, eG.A)({ boxType: eL.XQ, thirdPartyPartner: eL.FZ }),
        s = [
            { icon: ey.B, text: eg.intl.string(eU.default.MUypiB) },
            { icon: eS.h, text: eg.intl.string(eU.default.ec5Rdd) },
            { icon: eP.o, text: eg.intl.string(eU.default["9t2CzW"]), tooltip: eU.default.AyECej },
            { icon: eD.o, text: eg.intl.string(eU.default.R7YJAY) },
        ];
    return (0, l.jsx)(k.L, {
        innerRef: e,
        onChange: t,
        threshold: 0.5,
        children: (0, l.jsx)("div", {
            ref: e,
            className: eB.iE,
            children: (0, l.jsxs)("div", {
                className: eB.Nr,
                children: [
                    (0, l.jsxs)("div", {
                        className: eB.j,
                        children: [
                            (0, l.jsx)("div", { className: eB._g }),
                            (0, l.jsx)("div", { className: eB.$h }),
                            (0, l.jsx)("div", { className: eB.Rv }),
                            (0, l.jsx)("div", { className: eB.Lw }),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: eB.CT,
                        children: [
                            (0, l.jsxs)("div", {
                                className: eB.Qs,
                                children: [
                                    (0, l.jsxs)("div", {
                                        children: [
                                            (0, l.jsx)(eo.D, {
                                                variant: "heading-xxl/bold",
                                                color: "text-strong",
                                                className: eB.R_,
                                                children: eg.intl.string(eU.default.rkt1aw),
                                            }),
                                            (0, l.jsxs)("div", {
                                                children: [
                                                    s.map((e) => {
                                                        let { icon: t, text: s, tooltip: i } = e;
                                                        return (0, l.jsxs)(
                                                            "div",
                                                            {
                                                                className: eB.yf,
                                                                children: [
                                                                    (0, l.jsx)(t, {
                                                                        size: "sm",
                                                                        color: "var(--icon-strong)",
                                                                    }),
                                                                    (0, l.jsx)(e_.E, {
                                                                        variant: "text-md/medium",
                                                                        color: "text-strong",
                                                                        children: s,
                                                                    }),
                                                                    null != i &&
                                                                        (0, l.jsx)("div", {
                                                                            className: eB.Jn,
                                                                            children: (0, l.jsx)(eM.m, {
                                                                                text: eg.intl.string(i),
                                                                                position: "top",
                                                                                children: (0, l.jsx)(eO.m, {
                                                                                    size: "xxs",
                                                                                    color: "var(--icon-default)",
                                                                                }),
                                                                            }),
                                                                        }),
                                                                ],
                                                            },
                                                            s,
                                                        );
                                                    }),
                                                    (0, l.jsx)("div", {
                                                        className: eB.xF,
                                                        children: (0, l.jsx)(en.A, {
                                                            variantOverride: "secondary",
                                                            size: "md",
                                                            subscriptionTier: ek.pe.TIER_2,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)("div", {
                                        className: eB.WE,
                                        children: (0, l.jsx)(e_.E, {
                                            variant: "text-xs/medium",
                                            color: "text-link",
                                            children: eg.intl.format(eU.default.KDKdWi, { termsLink: (0, ew.xA)() }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, l.jsx)("div", {
                                className: eB.r1,
                                children: (0, l.jsx)("img", {
                                    className: eB.wm,
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
var eH = s(750338),
    ez = s(280041),
    eV = s(856556);
function eW(e) {
    let {
        className: t,
        boxLayout: s,
        title: i,
        shouldLoadVideo: n,
        isReducedMotion: a,
        startLeftAligned: c = !1,
        highlightBento: o,
    } = e;
    return (0, l.jsxs)("div", {
        className: r()(eV.boxBackdrop, t),
        children: [
            (0, l.jsx)(eo.D, {
                className: eV.bentoSectionHeader,
                variant: "display-md",
                color: "text-strong",
                children: i,
            }),
            null != o && (0, l.jsx)("div", { className: eV.highlightBento, children: o }),
            (0, l.jsx)("div", {
                className: eV.bentoBoxesGrid,
                children: s.map((e, t) => {
                    let s;
                    switch (e.length) {
                        case 3:
                            s = ez.A0.SMALL;
                            break;
                        case 2:
                            s = ez.A0.MEDIUM;
                            break;
                        default:
                            s = ez.A0.LARGE;
                    }
                    return (0, l.jsx)(l.Fragment, {
                        children: e.map((e) =>
                            (0, l.jsx)(
                                eH.A,
                                { index: t + +!!c, ...e, size: s, shouldLoadVideo: n, isReducedMotion: a },
                                e.name,
                            ),
                        ),
                    });
                }),
            }),
        ],
    });
}
let eK = n.memo(function (e) {
        let t = (0, eb.l)("premium_marketing_bento"),
            { whatsNewBoxes: s } = (0, ez.Ay)(t);
        return (0, l.jsx)(eW, {
            boxLayout: s,
            title: eg.intl.string(eg.t.LRmNAl),
            startLeftAligned: !0,
            highlightBento: t ? (0, l.jsx)(eF, {}) : null,
            ...e,
        });
    }),
    eY = n.memo(function (e) {
        let { bestOfBoxes: t } = (0, ez.Ay)();
        return (0, l.jsx)(eW, { boxLayout: t, title: eg.intl.string(eg.t.EnzW2H), startLeftAligned: !0, ...e });
    });
var eZ = s(877624),
    eQ = s(707554),
    eX = s(526292),
    eJ = s(236834),
    eq = s(549996),
    e$ = s(810660),
    e0 = s(371764),
    e1 = s(97808),
    e2 = s(854627),
    e3 = s(778712),
    e5 = s(45861);
function e8(e) {
    let { referrer: t } = e,
        { avatarSrc: s, eventHandlers: i } = (0, e2.A)({ userId: t?.id, size: e3._3.SIZE_24, animateOnHover: !0 });
    return (0, l.jsx)("div", {
        className: e5.$6,
        children: (0, l.jsxs)("div", {
            className: e5.sc,
            children: [
                (0, l.jsx)("div", {
                    className: e5.kR,
                    children: (0, l.jsx)(e1.eu, { src: s, "aria-label": t.username, size: e3._3.SIZE_32, ...i }),
                }),
                (0, l.jsx)(eo.D, {
                    variant: "heading-sm/normal",
                    className: e5.FS,
                    color: "text-strong",
                    children: eg.intl.format(eg.t.IqxblS, {
                        username: null != t.globalName ? t.globalName : t.username,
                    }),
                }),
            ],
        }),
    });
}
var e6 = s(579245),
    e7 = s(175569),
    e4 = s(369805);
let e9 = () => {
    let e = (0, e4.A)();
    return null == e ? null : (0, l.jsx)(e7.A, { text: e });
};
var te = s(97352);
function tt() {
    let e = (0, o.bG)([te.A], () => te.A.getForSkuAndInterval((0, W.mH)(ek.pe.TIER_0), ek.WT.MONTH));
    return null != e ? (0, W.sS)(e) : "\u2026";
}
var ts = s(607470);
let ti =
        "https://cdn.discordapp.com/assets/content/a3e8e17987398023e2afd61ec5078a9bce18b2832f2f1775a1ba3c033ce13270.webm",
    tl = (e) => {
        let {
            supportHEVCAlpha: t,
            isMotionReduced: s,
            containerVisibilityPercentage: i,
            containerClassName: n,
            assetClassName: a,
        } = e;
        return s
            ? (0, l.jsx)("div", {
                  className: n,
                  children: (0, l.jsx)("img", {
                      src: "https://cdn.discordapp.com/assets/content/46e72137fc3631c8024b00c33dbab5cf45740d4ab35f77bd96517830e727d0c5.png",
                      alt: "",
                      className: a,
                  }),
              })
            : (0, l.jsx)("div", {
                  className: n,
                  children: (0, l.jsx)(eu.Ay, {
                      scaleAnimationData: { startScale: 0.9, endScale: 1, duration: eu.$G },
                      yAxisAnimationData: { range: 20, duration: eu.Mp, path: eu.aV.SINE },
                      parallaxAnimationData: {
                          pathDirection: eu.MN.UP,
                          range: 200,
                          containerVisibilityPercentage: i,
                          changeOpacity: !1,
                      },
                      animateXAxisWiggle: !0,
                      children: t
                          ? (0, l.jsx)("img", {
                                src: "https://cdn.discordapp.com/assets/content/082012af2fe8bfa66ce6630e1549a146738936af43a8e60c780f9976fa333d93.png",
                                alt: "",
                                className: a,
                            })
                          : (0, l.jsx)(
                                ts.A,
                                {
                                    muted: !0,
                                    autoPlay: !0,
                                    playsInline: !0,
                                    loop: !0,
                                    className: a,
                                    children: (0, l.jsx)("source", { src: ti }),
                                },
                                ti,
                            ),
                  }),
              });
    };
var tn = s(188393);
let ta = (e) => {
    let { containerVisibilityPercentage: t } = e,
        s = (0, ed.bG)([F.A], () => F.A.useReducedMotion),
        i = (0, $.TM)();
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(tl, {
                supportHEVCAlpha: i,
                isMotionReduced: s,
                containerVisibilityPercentage: t,
                containerClassName: tn.wG,
                assetClassName: tn.lu,
            }),
            (0, l.jsx)(em.A, {
                isMotionReduced: s,
                containerVisibilityPercentage: t,
                boltContainerClassName: tn.nJ,
                carContainerClassName: tn.IN,
                hammerContainerClassName: tn.Gj,
                keyContainerClassName: tn.FV,
                starContainerClassName: tn.E1,
                boltAssetClassName: tn.j7,
                carAssetClassName: tn.or,
                hammerAssetClassName: tn.Wv,
                keyAssetClassName: tn.rs,
                starAssetClassName: tn.OY,
            }),
        ],
    });
};
var tr = s(469408);
let tc = n.memo(
    n.forwardRef((e, t) => {
        let { className: s, subscriptionTier: i, isEligibleForBogoPromotion: n } = e,
            { analyticsLocations: a } = (0, g.Ay)(h.A.PREMIUM_MARKETING_HERO_CTA),
            c = tt(),
            d = (0, eJ.A)(),
            u = null != d,
            m = (0, o.bG)([F.A], () => F.A.useReducedMotion),
            { visibilityPercentageRef: x, visibilityPercentage: p } = (0, e$.U)(!m),
            j = (0, D.b)(),
            f = !u && j.length > 0,
            N = (0, eq.c)(eZ.C.MARKETING_PAGE_BANNER),
            A = null != N && "marketingPageBanner" === N.properties.properties.oneofKind,
            _ = (0, eX.ar)() && !A;
        return (0, l.jsx)(g.f5, {
            value: a,
            children: (0, l.jsx)("div", {
                ref: t,
                className: r()(tr.kL, s),
                "data-testid": "marketing-page-hero-header",
                children: (0, l.jsx)("div", {
                    ref: x,
                    children: (0, l.jsxs)("div", {
                        className: tr.hQ,
                        children: [
                            (0, l.jsx)(ta, { containerVisibilityPercentage: p }),
                            _ && (0, l.jsx)("div", { className: tr.XN, children: (0, l.jsx)(e9, {}) }),
                            (0, l.jsx)("div", {
                                className: tr.s8,
                                children: (0, l.jsx)(eQ.F, {
                                    forceLevel: 1,
                                    children: (0, l.jsx)(eo.D, {
                                        variant: "display-md",
                                        color: "text-strong",
                                        className: tr.wx,
                                        children: eg.intl.string(eg.t.YCZldK),
                                    }),
                                }),
                            }),
                            (0, l.jsxs)("div", {
                                className: tr.rf,
                                children: [
                                    u &&
                                        (0, l.jsx)("div", {
                                            className: tr.eZ,
                                            children: (0, l.jsx)(e8, { referrer: d }),
                                        }),
                                    f &&
                                        (0, l.jsx)("div", {
                                            className: tr.Qn,
                                            children: (0, l.jsx)(e6.A, {
                                                textColor: "text-strong",
                                                smallerText: !1,
                                                isApplicationHome: !0,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    (0, l.jsxs)("div", {
                                        className: _ ? tr.es : tr.UJ,
                                        children: [
                                            (0, l.jsx)(en.A, {
                                                size: "md",
                                                fullWidth: _,
                                                hasActivePromotion: !!n,
                                                subscriptionTier: A && null == i ? ek.pe.NONE : i,
                                                buttonTextOverride: A ? eg.intl.string(eg.t["2pG5Ga"]) : void 0,
                                            }),
                                            !_ && (0, l.jsx)(el.A, { variant: "secondary", size: "md" }),
                                        ],
                                    }),
                                    (0, l.jsx)("div", {
                                        className: tr.iQ,
                                        children: (0, l.jsx)(e_.E, {
                                            color: "text-muted",
                                            variant: "text-xs/medium",
                                            children: eg.intl.format(eg.t.kt9wxs, { cheapestMonthlyPrice: c }),
                                        }),
                                    }),
                                    null != N &&
                                        "marketingPageBanner" === N.properties.properties.oneofKind &&
                                        (0, l.jsx)(e0.x, {
                                            componentId: N.id,
                                            promotionBannerMarketingComponentFields:
                                                N.properties.properties.marketingPageBanner,
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
var to = s(661531),
    td = s(820081),
    tu = s(140735),
    tm = s(401432),
    tx = s(580630),
    tp = s(511484),
    th = s(795269);
s(321073);
var tg = s(773669),
    tj = s(975571),
    tf = s(398523),
    tN = s(881373),
    tA = s(84483),
    t_ = s(190107),
    tC = s(962995),
    tE = s(490285),
    tv = s(864386),
    tI = s(799642),
    tR = s(202600);
let tT = (e) => {
        let { includes: t } = e;
        return t
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)(td.B, { size: "sm", color: to.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                      (0, l.jsx)(tu.A, { children: eg.intl.string(eg.t["tq+6t/"]) }),
                  ],
              })
            : (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)(tm.a, { size: "xs", color: to.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                      (0, l.jsx)(tu.A, { children: eg.intl.string(eg.t.l4qZrp) }),
                  ],
              });
    },
    tb = (e) => {
        let { label: t, tier0ColumnData: s, tier2ColumnData: i } = e;
        return (0, l.jsxs)("tr", {
            className: r()(tI.nM, tI.WQ),
            children: [
                (0, l.jsx)("th", {
                    scope: "row",
                    className: tI.nx,
                    children: (0, l.jsx)(e_.E, { variant: "text-md/medium", children: t }),
                }),
                (0, l.jsx)("td", {
                    className: tI.Hn,
                    children:
                        null != s.text
                            ? (0, l.jsx)(e_.E, { variant: "text-md/medium", children: s.text })
                            : (0, l.jsx)(tT, { includes: !!s.includes }),
                }),
                (0, l.jsx)("td", {
                    className: tI.Hn,
                    children:
                        null != i.text
                            ? (0, l.jsx)(e_.E, { variant: "text-md/medium", children: i.text })
                            : (0, l.jsx)(tT, { includes: !!i.includes }),
                }),
            ],
        });
    },
    tM = (e) => {
        let { title: t, subtitle: s, rows: i } = e;
        return (0, l.jsxs)("tbody", {
            children: [
                (0, l.jsx)("tr", {
                    className: r()(tI.nM, tI.Gf),
                    children: (0, l.jsxs)("td", {
                        className: tI.nx,
                        colSpan: 3,
                        children: [
                            (0, l.jsx)(eo.D, { variant: "heading-lg/bold", children: t }),
                            null != s && (0, l.jsx)(e_.E, { variant: "text-xs/medium", children: s }),
                        ],
                    }),
                }),
                i.map((e) => (0, l.jsx)(tb, { ...e }, e.id)),
            ],
        });
    },
    ty = (e) => {
        let { premiumType: t, priceString: s } = e,
            i = t === ek.PremiumTypes.TIER_0 ? eg.intl.string(eg.t.tUbSDK) : eg.intl.string(eg.t.Ipxkog);
        return (0, l.jsxs)("div", {
            className: tI.nn,
            children: [
                (0, l.jsxs)("div", {
                    className: tI.KS,
                    children: [
                        (0, l.jsx)(eN.t, { colorClass: tI.oG }),
                        (0, l.jsx)(eo.D, { variant: "heading-sm/semibold", children: i }),
                    ],
                }),
                (0, l.jsx)(eo.D, { variant: "heading-sm/semibold", children: s }),
            ],
        });
    },
    tS = (e) => {
        let { tier0Price: t, tier2Price: s, shouldUseDiscountPrice: i, tier2DiscountedPriceString: n } = e,
            a = i ? n : (0, tx.$g)(s.amount, s.currency);
        return (0, l.jsx)("thead", {
            children: (0, l.jsxs)("tr", {
                className: tI.U1,
                children: [
                    (0, l.jsx)("th", {
                        scope: "col",
                        className: tI.Cr,
                        children: (0, l.jsx)(eo.D, {
                            variant: "heading-xl/bold",
                            children: eg.intl.string(eg.t.ED4UVD),
                        }),
                    }),
                    (0, l.jsx)("th", {
                        scope: "col",
                        className: tI.Hn,
                        children: (0, l.jsx)(ty, {
                            premiumType: ek.PremiumTypes.TIER_0,
                            priceString: (0, tx.$g)(t.amount, t.currency),
                        }),
                    }),
                    (0, l.jsx)("th", {
                        scope: "col",
                        className: tI.Hn,
                        children: (0, l.jsx)(ty, { premiumType: ek.PremiumTypes.TIER_2, priceString: a }),
                    }),
                ],
            }),
        });
    },
    tP = (e) => {
        let t,
            { className: s, hidePill: i = !1, selectedPlanTier: a = ek.PremiumTypes.TIER_2 } = e,
            { analyticsLocations: c } = (0, g.Ay)(h.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            o = (0, G.V)(),
            d = o?.subscription_trial?.sku_id,
            u = (0, O.O)(),
            m = null != u && (0, tp.U9)(u, ek.pe.TIER_2),
            x = (0, tp.N1)(ek.gD.PREMIUM_MONTH_TIER_2),
            p = `${x}/${(0, W.FJ)(ek.WT.MONTH)}`,
            j = (0, W.JM)(ek.gD.PREMIUM_MONTH_TIER_0),
            f = (0, W.JM)(ek.gD.PREMIUM_MONTH_TIER_2),
            N = (() => {
                let e = (0, eb.l)("premium_marketing_comparison"),
                    t = [
                        {
                            id: 10,
                            label: eg.intl.string(eg.t["svn/YX"]),
                            tier0ColumnData: { includes: !0 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 7,
                            label: eg.intl.string(eg.t.ID5B6Z),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 13,
                            label: eg.intl.string(eg.t["PBUrx/"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 22,
                            label: eg.intl.string(tv.default["86GtGH"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                    ],
                    s = null,
                    i = [],
                    { shouldShowBonusOrbsUX: l, multiplier: n } = (0, H.lk)(t_.rE.NITRO_HOME_MARKETING),
                    { enabled: a } = tf.Ay.useConfig({ location: "useGetV2PlanComparisonTableRowsApplicationHome" }),
                    { functionalityEnabled: r } = (0, tN.YS)({
                        location: "useGetV2PlanComparisonTableRowsApplicationHome",
                    }),
                    { isInTreatment: c } = (0, tA.uX)("premium_marketing_comparison");
                return (
                    e &&
                        ((s = {
                            id: 23,
                            title: eg.intl.string(eg.t.NG1e6l),
                            subtitle: eg.intl.format(eU.default.uJcbMv, {
                                termsLink: tj.A.getArticleURL(ea.MVz.NITRO_2_POINT_0),
                            }),
                            rows: [
                                {
                                    id: 24,
                                    label: eg.intl.string(eU.default.OpOEmk),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                            ],
                        }),
                        a &&
                            s.rows.push({
                                id: 25,
                                label: eg.intl.string(eU.default.Q0A42h),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        r &&
                            s.rows.push({
                                id: 26,
                                label: eg.intl.string(tC.default["gc2sa/"]),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        l &&
                            i.push({
                                id: 27,
                                label: eg.intl.formatToPlainString(eg.t.Uhemob, { bonusOrbMultiplier: n }),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        c &&
                            i.push({
                                id: 28,
                                label: eg.intl.string(tE.default["20tmSN"]),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            })),
                    [
                        ...(null != s ? [s] : []),
                        { id: 17, title: eg.intl.string(eg.t.Ij3Zmv), rows: t },
                        {
                            id: 18,
                            title: eg.intl.string(eg.t.Wme3nX),
                            rows: [
                                {
                                    id: 0,
                                    label: eg.intl.string(eg.t.LrUABv),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 1,
                                    label: eg.intl.string(eg.t.DmfiwT),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 2,
                                    label: eg.intl.string(eg.t.Uukj4o),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 12,
                                    label: eg.intl.string(eg.t.NIKDqG),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 9,
                                    label: eg.intl.string(eg.t["5OAKhw"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                            ],
                        },
                        {
                            id: 19,
                            title: eg.intl.string(eg.t["6b3ydG"]),
                            rows: [
                                {
                                    id: 4,
                                    label: eg.intl.string(eg.t["ufhQC+"]),
                                    tier0ColumnData: { text: (0, W.EJ)(ek.PremiumTypes.TIER_0) },
                                    tier2ColumnData: { text: (0, W.EJ)(ek.PremiumTypes.TIER_2) },
                                },
                                {
                                    id: 11,
                                    label: eg.intl.string(eg.t.qQxxVc),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 3,
                                    label: eg.intl.string(eg.t["9kRJS8"]),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 21,
                                    label: eg.intl.string(eg.t["5BJqNF"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 5,
                                    label: eg.intl.string(eg.t.VwxlMw),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 6,
                                    label: eg.intl.formatToPlainString(eg.t.nyhDpw, {
                                        numBoosts: ek.M4,
                                        percentageOff: (0, tx.l9)(tg.default.locale, ek.oX / 100),
                                    }),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 16,
                                    label: eg.intl.string(eg.t["93xPy3"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 8,
                                    label: eg.intl.string(eg.t.IzrZHz),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 20,
                                    label: eg.intl.string(eg.t.Rj1Qys),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                ...i,
                                {
                                    id: 15,
                                    label: eg.intl.formatToPlainString(eg.t["8crdzJ"], { maxChars: ea.CS1 }),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 14,
                                    label: eg.intl.string(eg.t["il8+nC"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                            ],
                        },
                    ]
                );
            })();
        if (i) t = null;
        else {
            let e = null != o ? eg.intl.string(eg.t.IBYG5U) : eg.intl.string(eg.t.TR2B4T);
            t = (0, l.jsx)(th.R, { className: r()(tI.Io, tI.SP), text: e });
        }
        let A = d === ek.pe.TIER_0 || a === ek.PremiumTypes.TIER_0;
        return (0, l.jsx)(g.f5, {
            value: c,
            children: (0, l.jsxs)("div", {
                className: r()(tI.zr, s),
                children: [
                    (0, l.jsx)(eo.D, {
                        className: tI.Qw,
                        variant: "display-md",
                        color: "text-strong",
                        children: eg.intl.string(eg.t.DbPgAd),
                    }),
                    (0, l.jsxs)("div", {
                        className: tI.wY,
                        children: [
                            (0, l.jsxs)("div", {
                                className: r()(tI.fO, { [tI.Vd]: A, [tI.hA]: !A }),
                                children: [
                                    !A && t,
                                    (0, l.jsx)("div", { className: tI.xQ }),
                                    (0, l.jsxs)("div", {
                                        className: tI.wN,
                                        children: [
                                            (0, l.jsx)("img", { src: tR, alt: "", className: tI.kQ }),
                                            (0, l.jsx)("img", {
                                                src: "/assets/6162a665edda48d4.svg",
                                                alt: "",
                                                className: tI.kQ,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, l.jsxs)("table", {
                                className: tI.tp,
                                children: [
                                    (0, l.jsx)(tS, {
                                        tier0Price: j,
                                        tier2Price: f,
                                        shouldUseDiscountPrice: m,
                                        tier2DiscountedPriceString: p,
                                    }),
                                    N.map((e) => (0, n.createElement)(tM, { ...e, key: e.id })),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    },
    tD = function (e) {
        let { scrollOffset: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { scrollOffset: 60 },
            s = (0, n.useCallback)(
                (e) => {
                    let s = c.current[e];
                    null != s &&
                        ((s.style.scrollMarginTop = `${t}px`),
                        s.scrollIntoView({ behavior: "smooth", block: "start" }));
                },
                [t],
            ),
            [i, l] = (0, n.useState)(Object.fromEntries(e.map((e) => [e, !1]))),
            [a, r] = (0, n.useState)(e[0]);
        (0, n.useEffect)(() => {
            let e = Object.keys(i).filter((e) => i[e]);
            e.length > 0 && r(e[0]);
        }, [i]);
        let c = (0, n.useRef)({});
        return (
            (0, n.useEffect)(() => {
                let e = new IntersectionObserver((e) => {
                    e.forEach((e) => {
                        l((t) => ({ ...t, [e.target.id]: e.isIntersecting }));
                    });
                });
                return (
                    Object.values(c.current).forEach((t) => {
                        null != t && e.observe(t);
                    }),
                    () => e.disconnect()
                );
            }, []),
            {
                navBarSections: (0, n.useMemo)(
                    () =>
                        e.reduce(
                            (e, t, i) => (
                                (e[t] = {
                                    id: t,
                                    ref: (e) => {
                                        (c.current[t] = e), null != e && (e.id = t);
                                    },
                                    scrollToSection: () => s(t),
                                    order: i,
                                }),
                                e
                            ),
                            {},
                        ),
                    [e, s],
                ),
                activeSectionId: a,
                setActiveSectionId: r,
            }
        );
    };
var tO = s(818348),
    tG = s(808557);
let tL = () => {
    let e = (0, c.zy)();
    (0, C.P)(_.b);
    let t = n.useRef(null),
        s = n.useRef(null),
        i = n.useRef(null),
        a = n.useRef(null),
        d = n.useRef(null),
        u = n.useRef(null),
        m = (0, o.bG)([F.A], () => F.A.useReducedMotion),
        [x, p] = n.useState(m);
    n.useEffect(() => {
        if (m) return void p(!0);
        let e = s.current;
        if (null == e) return;
        let t = (t) => {
            t.target === e && p(!0);
        };
        return e.addEventListener("animationend", t), () => e.removeEventListener("animationend", t);
    }, [m]);
    let [j, f] = n.useState(!1),
        [N, A] = n.useState(!1),
        [E, v] = n.useState(!1),
        [I, R] = n.useState(!1),
        T = (0, o.bG)([b.A], () => b.A.getPremiumTypeSubscription()),
        y = null != T ? (0, W.EL)(T) : null,
        S = null != y ? W.Ay.getSkuIdForPlan(y.planId) : null,
        P = null !== S && S !== ek.pe.TIER_2 ? ek.pe.TIER_2 : null,
        D = (0, K.cg)(),
        { analyticsLocations: O } = (0, g.Ay)(h.A.PREMIUM_MARKETING);
    n.useEffect(() => {
        R(!0);
    }, []);
    let G = (0, V.DK)(z.W.NITRO, "PremiumMarketingHome"),
        { shouldShowBonusOrbsUX: L } = (0, H.lk)(t_.rE.NITRO_HOME_MARKETING),
        w = G && L ? ez.NI.COMBINED_ORBS : L ? ez.NI.ORB_MULTIPLIER : G ? ez.NI.ORB_REWARDS : null,
        X = n.useMemo(() => null != w && "orbs" === new URLSearchParams(e.search).get("section"), [e.search, w]);
    (0, Y.z)(w ?? ez.NI.COMBINED_ORBS, X);
    let { navBarSections: J, activeSectionId: q } = tD([et.HOME, et.WHATS_NEW, et.BEST_OF_NITRO, et.PLANS, et.COMPARE]),
        { home: $, whatsNew: es, bestOfNitro: ei, plans: el, compare: en } = J,
        er = (0, l.jsxs)("div", {
            ref: s,
            className: r()(tG.kL, tG.Gd, tG.iI, { [tG.Hq]: !m }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, l.jsx)(ee, { className: tG.yH }),
                (0, l.jsx)(eT, { navBarSections: J, activeSectionId: q, isAnimationComplete: x }),
                (0, l.jsxs)("div", {
                    className: tG.Qr,
                    children: [
                        (0, l.jsx)("div", {
                            className: tG.qY,
                            ref: $.ref,
                            children: (0, l.jsx)(k.L, {
                                innerRef: a,
                                onChange: (e) => f(e),
                                threshold: 0,
                                active: !0,
                                children: (0, l.jsx)(tc, {
                                    ref: a,
                                    subscriptionTier: P,
                                    isEligibleForBogoPromotion: D,
                                }),
                            }),
                        }),
                        D &&
                            (0, l.jsx)("div", {
                                className: tG.Hz,
                                children: (0, l.jsx)(Z.A, { variant: Z.c.APPLICATION_NITRO_HOME }),
                            }),
                        (0, l.jsx)("div", {
                            className: tG.So,
                            ref: es.ref,
                            children: (0, l.jsx)(eK, { shouldLoadVideo: I, isReducedMotion: m }),
                        }),
                        (0, l.jsx)("div", {
                            className: tG.KQ,
                            ref: ei.ref,
                            children: (0, l.jsx)(eY, { shouldLoadVideo: I, isReducedMotion: m }),
                        }),
                        (0, l.jsx)("div", {
                            className: tG.s5,
                            ref: el.ref,
                            children: (0, l.jsx)(k.L, {
                                innerRef: i,
                                onChange: (e) => A(e),
                                threshold: 0.1,
                                active: !0,
                                children: (0, l.jsx)(Q.jP, { innerRef: i }),
                            }),
                        }),
                        (0, l.jsx)("div", { className: tG.aC, ref: en.ref, children: (0, l.jsx)(tP, {}) }),
                    ],
                }),
                (0, l.jsx)(k.L, {
                    innerRef: d,
                    onChange: (e) => {
                        e &&
                            !E &&
                            (M.default.track(ea.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: O }),
                            v(!0));
                    },
                    children: (0, l.jsx)("div", { ref: d, className: tG._Z }),
                }),
                (0, l.jsx)(ef, { ref: u }),
                (0, l.jsx)(ec, { isVisible: !j && !N && I, subscriptionTier: P, isEligibleForBogoPromotion: D }),
                (0, l.jsx)(ee, { className: tG.MF }),
            ],
        });
    return (0, l.jsx)(U.N, {
        theme: tO.NJ.DARKER,
        children: (e) => (0, l.jsx)(B.Gt, { className: r()(tG.XG, e), ref: t, children: er }),
    });
};
var tw = s(462887),
    tk = s(862482),
    tU = s(374200),
    tB = s(396375),
    tF = s(815846),
    tH = s(860839),
    tz = s(359778),
    tV = s(695366),
    tW = s(780964),
    tK = s(766075),
    tY = s(835968);
let tZ = (e) => {
    let t,
        s,
        { premiumSubscription: i, className: n, textColor: a } = e,
        c = (0, eX.ar)();
    if (null == i) return null;
    let o = null != i ? W.Ay.getPremiumPlanItem(i) : null;
    if (
        (W.Ay.isBoostOnlySubscription(i)
            ? (t = eg.intl.string(eg.t.Uj0md3))
            : null != o && (t = W.Ay.getTierDisplayNameByPlanId(o.planId)),
        null == t)
    )
        return null;
    let d = () => (0, tK.openUserSettings)(tW.X.SUBSCRIPTIONS_PANEL),
        u = (null != o ? W.Ay.getSkuIdForPlan(o.planId) : null) === ek.pe.TIER_1;
    return (
        (s = null != a ? a : c ? "always-white" : "text-default"),
        (0, l.jsxs)(tz.Z, {
            className: r()(tY.kL, n, { [tY.He]: c }),
            type: tz.Z.Types.CUSTOM,
            children: [
                (0, l.jsx)(tV.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: r()(tY.Kk, { [tY.Pt]: c }),
                }),
                (0, l.jsx)(e_.E, {
                    variant: "text-sm/medium",
                    color: s,
                    children: u
                        ? eg.intl.format(eg.t["tYuv+T"], {
                              helpdeskArticle: tj.A.getArticleURL(ea.MVz.PREMIUM_DETAILS),
                              onSubscriptionsClick: d,
                          })
                        : eg.intl.format(eg.t.xHRgU2, { subscriptionName: t, onSubscriptionsClick: d }),
                }),
            ],
        })
    );
};
var tQ = s(147935);
let tX = (e) => {
    let { lifted: t = !1 } = e;
    return (0, l.jsxs)("svg", {
        width: "100%",
        height: "793px",
        viewBox: "0 0 2338 793",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "none",
        className: r()(tQ.zr, { [tQ.N]: t }),
        children: [
            (0, l.jsx)("path", {
                d: "M1175.02 650.847C567.943 650.847 449.538 793 0 793V0H2338V529.841C1912.54 529.841 1705.84 650.847 1175.02 650.847Z",
                fill: "url(#paint0_linear_2548_770)",
            }),
            (0, l.jsx)("defs", {
                children: (0, l.jsxs)("linearGradient", {
                    id: "paint0_linear_2548_770",
                    x1: "2338",
                    y1: "-1.20115e-05",
                    x2: "2262.17",
                    y2: "975.136",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        (0, l.jsx)("stop", { className: tQ.eq }),
                        (0, l.jsx)("stop", { offset: "0.339235", className: tQ.l_ }),
                        (0, l.jsx)("stop", { offset: "0.492065", className: tQ.sM }),
                        (0, l.jsx)("stop", { offset: "0.823236", className: tQ.zi }),
                        (0, l.jsx)("stop", { offset: "0.899558", className: tQ.s1 }),
                    ],
                }),
            }),
        ],
    });
};
var tJ = s(900797),
    tq = s(847374),
    t$ = s(777666),
    t0 = s(464769);
function t1(e) {
    let { className: t } = e;
    return (0, l.jsx)(t$.Lp, { className: r()(t0.T, t), text: eg.intl.string(eg.t.EYxi0o) });
}
var t2 = s(904788),
    t3 = s(507553),
    t5 = s(591179),
    t8 = s(255438),
    t6 = s(355097);
let t7 = "/assets/5b4fec8511c3676a.svg",
    t4 = "/assets/0838bda6ecd20d91.svg";
var t9 = s(64514),
    se = s(121818);
let st = (e, t, s) => ((0, tw.M)(e) ? t : s);
var ss = s(446278);
let si = (e) => {
        let { isShowingAll: t, onClick: s } = e;
        return (0, l.jsxs)(eA.D, {
            onClick: s,
            className: ss.customButton,
            children: [
                t ? eg.intl.string(eg.t.maZaN3) : eg.intl.string(eg.t["37C26f"]),
                t
                    ? (0, l.jsx)(tJ.t, { size: "md", color: "currentColor", className: ss.arrow })
                    : (0, l.jsx)(tq.a, { size: "md", color: "currentColor", className: ss.arrow }),
            ],
        });
    },
    sl = (e) => {
        let {
                title: t,
                description: s,
                className: i,
                imageSource: n,
                imageClassName: a,
                titleBadge: c,
                isNew: o = !1,
                isEarlyAccess: d = !1,
            } = e,
            { analyticsLocations: u } = (0, g.Ay)(h.A.PREMIUM_MARKETING_PERK_CARD);
        return (0, l.jsx)(g.f5, {
            value: u,
            children: (0, l.jsxs)("div", {
                className: r()(ss.perkCard, i),
                children: [
                    o
                        ? (0, l.jsx)(t2.A, {
                              className: ss.perkCardNewBadge,
                              shouldInheritBackgroundColor: !0,
                              shouldInheritTextColor: !0,
                          })
                        : null,
                    d ? (0, l.jsx)(t1, { className: ss.perkCardEarlyAccessBadge }) : null,
                    (0, l.jsx)("img", { src: n, alt: "", className: r()(a, ss.perksCardArt) }),
                    (0, l.jsxs)("div", {
                        children: [
                            (0, l.jsxs)(eo.D, {
                                variant: "heading-lg/extrabold",
                                className: ss.perkCardHeading,
                                children: [t, " ", c],
                            }),
                            (0, l.jsx)(e_.E, {
                                variant: "text-sm/normal",
                                className: ss.perkCardDescription,
                                children: "function" == typeof s ? s(u) : s,
                            }),
                        ],
                    }),
                ],
            }),
        });
    },
    sn = (e) => {
        let { className: t, isSubscriberNitroHome: i = !1 } = e,
            [a, c] = n.useState(!1),
            o = ((e) => {
                let { styles: t } = e,
                    i = (0, J.Ay)(),
                    l = (0, t5.X)("usePerkCards"),
                    n = (0, ed.bG)([R.default], () => {
                        let e = R.default.getCurrentUser();
                        return W.Ay.canUsePremiumProfileCustomization(e);
                    }),
                    a = (0, t8.Xq)(ek.f3 / 1024, { useKibibytes: !0 });
                return {
                    badge: {
                        title: eg.intl.string(eg.t.SS87rQ),
                        description: eg.intl.string(eg.t.oD6CRr),
                        imageSource: "/assets/70e295f6158d848f.png",
                        imageClassName: t.badgeImage,
                    },
                    badgeAlt: {
                        title: eg.intl.string(eg.t["5cYMu0"]),
                        description: eg.intl.string(eg.t.vxk9va),
                        imageSource: st(i, "/assets/42e77ef3b6c4c1bb.svg", "/assets/ab48ff2bd2dce6a1.svg"),
                        imageClassName: t.badgeNewImage,
                    },
                    clientThemes: {
                        title: eg.intl.string(eg.t["/xvEMy"]),
                        description: eg.intl.string(eg.t.HKWdjj),
                        className: t.clientThemesCard,
                        imageSource: "/assets/37e0853800afb796.svg",
                        imageClassName: t.clientThemesImage,
                    },
                    customAppIcons: {
                        title: eg.intl.string(eg.t.OuItFi),
                        description: eg.intl.string(eg.t.mPyrE6),
                        imageSource:
                            "https://cdn.discordapp.com/assets/content/bca160c31fc5390dd2b41d90060edcc912a45f6ab3beab44ea79e16bf1f6530f.png",
                        imageClassName: t.customAppIconImage,
                    },
                    emoji: {
                        title: eg.intl.string(eg.t["R2IV/Q"]),
                        description: eg.intl.string(eg.t.R5Xag2),
                        imageSource: "/assets/d8edaaf5cb32248f.svg",
                        imageClassName: t.emojiImage,
                    },
                    guildProfile: {
                        title: eg.intl.string(eg.t.lKDhhJ),
                        description: (e) => {
                            if (l)
                                return n
                                    ? eg.intl.formatToPlainString(eg.t.aj1pfZ, { onCheckItOutClick: () => {} })
                                    : eg.intl.formatToPlainString(eg.t.d2oYS8, { onTryItOutClick: () => {} });
                            let t = () => {
                                {
                                    let { openUserSettings: t } = s(766075);
                                    t3.A.setState({ scrollPosition: t6._F.TRY_IT_OUT }),
                                        t(tW.X.PROFILE_PANEL, { analyticsLocations: e });
                                }
                            };
                            return n
                                ? eg.intl.format(eg.t.aj1pfZ, { onCheckItOutClick: t })
                                : eg.intl.format(eg.t.d2oYS8, { onTryItOutClick: t });
                        },
                        imageSource: "/assets/e1b6b45be1ce4b03.png",
                        imageClassName: t.perGuildProfilesImage,
                    },
                    longerMessages: {
                        title: eg.intl.string(eg.t.BUScid),
                        description: eg.intl.string(eg.t.vN6XpQ),
                        imageSource: st(i, "/assets/dd2088e61de76ba7.svg", "/assets/62b63638a6645137.svg"),
                        imageClassName: t.longerMessagesImage,
                    },
                    moreGuilds: {
                        title: eg.intl.string(eg.t.Bv8Pfk),
                        description: eg.intl.string(eg.t.JMfaTU),
                        imageSource: st(i, "/assets/587c08f512a71514.png", "/assets/3308a5a697922299.svg"),
                        imageClassName: t.moreGuildsImage,
                    },
                    moreGuildsAlt: {
                        title: eg.intl.string(eg.t.Bv8Pfk),
                        description: eg.intl.string(eg.t.JMfaTU),
                        imageSource: st(i, "/assets/f1d357c6741d62c3.svg", "/assets/8568e72f2b535d2f.svg"),
                        imageClassName: t.moreGuildsAltImage,
                    },
                    soundboard: {
                        title: eg.intl.string(eg.t["lGcW+c"]),
                        description: eg.intl.string(eg.t["/fDyO+"]),
                        imageSource: st(i, "/assets/bd6751720573fb38.svg", "/assets/c292e42489e70696.svg"),
                        imageClassName: t.soundboardImage,
                    },
                    stickers: {
                        title: eg.intl.string(eg.t["1c+xwT"]),
                        description: eg.intl.string(eg.t.hJG8ZN),
                        imageSource: st(i, t4, t7),
                        imageClassName: t.stickersImage,
                    },
                    stickersBurst: {
                        title: eg.intl.string(eg.t.tzdIwI),
                        description: eg.intl.string(eg.t.hJG8ZN),
                        imageSource: st(i, t4, t7),
                        imageClassName: t.stickersImage,
                    },
                    stickersPremiumPerk: {
                        title: eg.intl.string(eg.t.tzdIwI),
                        description: eg.intl.string(eg.t.hJG8ZN),
                        imageSource: st(i, t4, t7),
                        imageClassName: t.stickersImage,
                    },
                    streaming: {
                        title: eg.intl.string(eg.t.RSXQYO),
                        description: eg.intl.string(eg.t.ymCPxp),
                        imageSource: "/assets/3bcdc01b26c7f691.svg",
                        imageClassName: t.streamingImage,
                    },
                    superReactions: {
                        title: eg.intl.string(eg.t["uZt5q/"]),
                        description: eg.intl.string(eg.t.ZK3ZoX),
                        imageSource: st(i, "/assets/99b308eabe7fcfd2.svg", "/assets/fa48f6b36050a179.svg"),
                        imageClassName: t.superReactionsImage,
                    },
                    upload: {
                        title: eg.intl.formatToPlainString(eg.t.jqhAdL, { premiumMaxSize: a }),
                        description: eg.intl.formatToPlainString(eg.t["HI+cfm"], { premiumMaxSize: a }),
                        imageSource: "/assets/010eae6a6dbacc63.svg",
                        imageClassName: t.uploadImage,
                    },
                    videoBackground: {
                        title: eg.intl.string(eg.t.NaGpTf),
                        description: eg.intl.string(eg.t["A8O/Qw"]),
                        imageSource: st(i, t9, se),
                        imageClassName: t.videoBackgroundImage,
                    },
                };
            })({ styles: ss }),
            d = (0, ed.bG)([F.A], () => F.A.useReducedMotion),
            { analyticsLocations: u } = (0, g.Ay)(),
            m = [
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
        return (0, l.jsxs)("div", {
            className: r()(ss.perksContainer, t, {
                [ss.partiallyHidden]: i && !a,
                [ss.subscriberNitroHome]: i,
                [ss.reducedMotion]: d,
            }),
            children: [
                (0, l.jsx)(eo.D, {
                    variant: "heading-xxl/extrabold",
                    className: ss.perksTitle,
                    children: i ? eg.intl.string(eg.t.QX14gI) : eg.intl.string(eg.t.RGadQR),
                }),
                (0, l.jsx)("div", {
                    className: r()(ss.perkCardContainer, { [ss.perkCardContainerExpanded]: a }),
                    children: m.map((e) => null != e && (0, l.jsx)(sl, { ...e }, e.title)),
                }),
                i &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)("div", {
                                className: r()({ [ss.sizeGizmo]: !a, [ss.sizeGizmoExpanded]: a }),
                                children: (0, l.jsx)(si, {
                                    onClick: () => {
                                        M.default.track(ea.HAw.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
                                            location_stack: u,
                                            was_expanded: a,
                                        }),
                                            c(!a);
                                    },
                                    isShowingAll: a,
                                }),
                            }),
                            (0, l.jsx)("div", { className: r()(ss.cover, { [ss.hidden]: a }) }),
                        ],
                    }),
            ],
        });
    };
var sa = s(194509),
    sr = s(14238);
let sc = function (e) {
    let { isVisible: t, subscriptionTier: s, isApplicationHome: i, isEligibleForBogoPromotion: n } = e,
        a = (0, ei.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        c = { section: ea.JJy.MARKETING_FLOATING_CTA },
        o = (0, J.Ay)(),
        d = (0, X.M)(o);
    return (0, l.jsx)(es.animated.div, {
        className: r()(sr.iE, { [sr.H8]: i, [sr.q4]: !t }),
        style: a,
        children: (0, l.jsxs)("div", {
            className: i ? sr.zW : sr.iJ,
            children: [
                (0, l.jsx)(tB.A, {
                    color: d ? tk.XD.BRAND_INVERTED : void 0,
                    className: r()(sr.x6, { [sr.Ph]: d }),
                    subscriptionTier: s,
                    premiumModalAnalyticsLocation: c,
                    isPersistentCTA: !0,
                    hasActivePromotion: n,
                    shinyButtonClassName: d ? void 0 : sr.PJ,
                }),
                (0, l.jsx)(sa.A, { className: sr.x6, premiumModalAnalyticsLocation: c }),
            ],
        }),
    });
};
var so = s(89366),
    sd = s(360101);
let su = (e) => {
        let {
                inOfferExperience: t,
                subscriptionTier: s,
                containerClassName: i,
                buttonClassName: n,
                isApplicationHome: a,
                isDarkMode: c,
                isEligibleForBogoPromotion: o,
            } = e,
            d = o
                ? (0, l.jsx)(tB.A, {
                      color: c ? tk.XD.BRAND_INVERTED : void 0,
                      className: r()(sd.x6, sd.Ph, n, { [sd.Sq]: t && a, [sd.MF]: a && !c }),
                      shinyButtonClassName: c ? void 0 : sd.PJ,
                      subscriptionTier: s,
                      hasActivePromotion: !0,
                  })
                : (0, l.jsx)(tB.A, {
                      color: c || !a ? tk.XD.BRAND_INVERTED : void 0,
                      className: r()(sd.x6, sd.Ph, n, { [sd.Sq]: t && a, [sd.MF]: a && !c }),
                      subscriptionTier: s,
                  }),
            u = t && a ? null : (0, l.jsx)(sa.A, { className: r()(sd.x6, n), color: a ? void 0 : tk.XD.WHITE });
        return (0, l.jsxs)("div", { className: r()(sd.UD, i), children: [d, " ", u] });
    },
    sm = () =>
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(t2.p, { className: sd.zd }),
                (0, l.jsx)(t2.p, { className: sd.G }),
                (0, l.jsx)(t2.p, { className: sd.zy }),
                (0, l.jsx)(t2.p, { className: sd.GX }),
            ],
        });
function sx(e) {
    let { variant: t = "text-lg/normal", withBottomMargin: s = !0, isApplicationHome: i } = e,
        n = tt();
    return (0, l.jsx)(e_.E, {
        variant: t,
        color: i ? "text-subtle" : "always-white",
        className: r()(sd.h_, { [sd.If]: s, [sd.jn]: i }),
        children: eg.intl.format(eg.t.kt9wxs, { cheapestMonthlyPrice: n }),
    });
}
let sp = n.forwardRef((e, t) => {
    let { className: s, buttonClassName: i, subscriptionTier: n, isDarkMode: a } = e,
        { analyticsLocations: c } = (0, g.Ay)(h.A.PREMIUM_MARKETING_HERO_CTA),
        o = (0, so.QQ)(),
        d = (0, eX.ar)(),
        u = (0, K.cg)(),
        m = (0, D.b)().length > 0,
        x = eg.intl.string(eg.t.YCZldK);
    return (0, l.jsx)(g.f5, {
        value: c,
        children: (0, l.jsxs)("div", {
            ref: t,
            className: r()(sd.kL, s, { [sd.V1]: !d, [sd.Q4]: !d && m }),
            "data-testid": "v2-marketing-page-hero-header",
            children: [
                (0, l.jsxs)("div", {
                    className: d ? sd.I6 : sd.G1,
                    children: [
                        (0, l.jsx)(eQ.F, {
                            forceLevel: 1,
                            children: (0, l.jsx)(eo.D, {
                                variant: d ? "display-lg" : "display-md",
                                color: "always-white",
                                children: x,
                            }),
                        }),
                        m
                            ? (0, l.jsx)("div", {
                                  className: sd.DF,
                                  children: (0, l.jsx)(e6.A, { textColor: "always-white", smallerText: !d }),
                              })
                            : (0, l.jsx)(sx, {}),
                        u || o
                            ? (0, l.jsx)("div", {
                                  className: sd.UD,
                                  children: (0, l.jsx)(sa.A, { className: r()(sd.x6, i), color: tk.XD.WHITE }),
                              })
                            : (0, l.jsx)(su, {
                                  subscriptionTier: n,
                                  inOfferExperience: d,
                                  buttonClassName: i,
                                  isDarkMode: a,
                              }),
                        m && (0, l.jsx)(sx, { variant: "text-md/normal", withBottomMargin: !1 }),
                    ],
                }),
                !d && (0, l.jsx)(sm, {}),
            ],
        }),
    });
});
var sh = s(22118),
    sg = s(111932),
    sj = s(16939),
    sf = s(79119);
let sN = (e) => {
        let { inOfferExperience: t } = e;
        return t ? (0, l.jsx)(tX, { lifted: t }) : null;
    },
    sA = () => {
        (0, C.P)(_.b);
        let e = n.useRef(null),
            t = n.useRef(null),
            s = n.useRef(null),
            i = (0, J.Ay)(),
            a = (0, tw.M)(i),
            [c, d] = n.useState(!1),
            [u, m] = n.useState(!1),
            [x, p] = n.useState(!1),
            [j, f] = n.useState(!1),
            N = (0, o.bG)([b.A], () => b.A.getPremiumTypeSubscription()),
            A = null != N ? (0, W.EL)(N) : null,
            E = null != A ? W.Ay.getSkuIdForPlan(A.planId) : null,
            v = null !== E && E !== ek.pe.TIER_2 ? ek.pe.TIER_2 : null,
            I = (0, G.V)(),
            R = I?.subscription_trial?.sku_id,
            T = (0, eX.ar)(),
            y = (0, K.cg)(),
            S = (0, eE.Gh)("premium-marketing-settings-page"),
            P = y ?? !1,
            D = (0, o.bG)([tU.A], () => {
                let e = tU.A.getMarketingComponentByType(eZ.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.billingSettingsNitroGiftBanner;
            }),
            { analyticsLocations: O } = (0, g.Ay)(h.A.PREMIUM_MARKETING);
        n.useEffect(() => {
            f(!0);
        }, []);
        let L = (0, l.jsx)("div", {
            className: sj.dY,
            children: (0, l.jsx)(k.L, {
                innerRef: e,
                onChange: (e) => m(e),
                threshold: 0.1,
                active: !0,
                children: (0, l.jsx)(tH.qu, {
                    innerRef: e,
                    tier0CTAButton: (0, l.jsx)(tB.A, {
                        showIcon: !1,
                        subscriptionTier: ek.pe.TIER_0,
                        className: sg.Ph,
                        look: tk.pR.OUTLINED,
                        color: tk.XD.WHITE,
                        buttonShineClassName: sg.Qr,
                    }),
                    tier2CTAButton:
                        R === ek.pe.TIER_0
                            ? (0, l.jsx)(tB.A, {
                                  showIcon: !1,
                                  subscriptionTier: ek.pe.TIER_2,
                                  className: sg.Ph,
                                  look: tk.pR.OUTLINED,
                                  color: tk.XD.WHITE,
                                  buttonShineClassName: sg.Qr,
                              })
                            : (0, l.jsx)(tB.A, {
                                  color: tk.XD.BRAND_INVERTED,
                                  showIcon: !1,
                                  subscriptionTier: ek.pe.TIER_2,
                                  className: sg.Ph,
                                  hasActivePromotion: P,
                                  textOptions: { textClassName: sg.Ac },
                                  buttonShineClassName: sg.Qr,
                              }),
                }),
            }),
        });
        return (0, l.jsxs)("div", {
            className: sj.kL,
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, l.jsx)(tZ, { premiumSubscription: N, className: r()(sj.R3, { [sj.aZ]: T }) }),
                T &&
                    (0, l.jsxs)("div", {
                        className: sj.n1,
                        children: [
                            (0, l.jsx)(sN, { inOfferExperience: T }),
                            S &&
                                (0, l.jsx)(ev.l, {
                                    className: sj.ij,
                                    size: "md",
                                    location: h.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                    forceDarkTheme: !0,
                                }),
                        ],
                    }),
                (0, l.jsxs)("div", {
                    className: r()({ [sj.V1]: !T }),
                    children: [
                        null != D && (0, l.jsx)(tF.c, { className: sj.w$, config: D }),
                        (0, l.jsxs)("div", {
                            className: sj.iS,
                            children: [
                                S &&
                                    !T &&
                                    (0, l.jsx)(ev.l, {
                                        className: sj.ij,
                                        size: "md",
                                        location: h.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                        forceDarkTheme: !0,
                                    }),
                                (0, l.jsx)(k.L, {
                                    innerRef: t,
                                    onChange: (e) => d(e),
                                    threshold: 0,
                                    active: !0,
                                    children: (0, l.jsx)(sp, {
                                        ref: t,
                                        subscriptionTier: v,
                                        className: r()({ [sj.p7]: T, [sj.Pw]: T, [sj.AG]: y, [sj.Cv]: null != N }),
                                        isDarkMode: a,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                L,
                (0, l.jsx)(sn, { className: sj.B_ }),
                (0, l.jsx)("div", { className: sj.aC, children: (0, l.jsx)(sh.A, { className: sj.JQ, hideCTAs: !0 }) }),
                (0, l.jsx)("div", { className: sj.hz }),
                (0, l.jsx)(sc, {
                    isVisible: !c && !u && j,
                    subscriptionTier: v,
                    isApplicationHome: !1,
                    isEligibleForBogoPromotion: y,
                }),
                (0, l.jsx)(k.L, {
                    innerRef: s,
                    onChange: (e) => {
                        e &&
                            !x &&
                            (M.default.track(ea.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: O }),
                            p(!0));
                    },
                    children: (0, l.jsx)("div", { ref: s, className: sj._Z }),
                }),
                (0, l.jsx)("img", {
                    src: sf,
                    className: sj.Kw,
                    width: 112,
                    height: 85,
                    alt: eg.intl.string(eg.t.X4IxWL),
                }),
            ],
        });
    },
    s_ = (e) => {
        let { entrypoint: t } = e,
            s = (0, G.V)(),
            i = (0, O.O)(),
            a = (0, w.NF)({ trialOffer: s }),
            r = (0, w.Tp)(),
            c = (0, o.bG)([L.A], () => L.A.getReminderStateId());
        return (n.useEffect(() => {
            !0 === a && (0, w.QG)(), !0 === r && (0, w.ne)(c), (null != s || null != i) && (0, S.u1)(s, i);
        }, [s, i, a, r, c]),
        t === ek.Mf.UserSettings)
            ? (0, l.jsx)(sA, {})
            : t === ek.Mf.ApplicationStoreHome
              ? (0, l.jsx)(tL, {})
              : null;
    };
var sC = s(972119);
let sE = function (e) {
    let { entrypoint: t = ek.Mf.UserSettings } = e;
    (0, C.P)(_.b);
    let s = (0, f.Hp)(),
        { sourceAnalyticsLocations: i, analyticsLocations: a } = (0, g.Ay)(h.A.PREMIUM_MARKETING),
        L = (0, o.bG)([b.A], () => b.A.hasFetchedSubscriptions()),
        w = (0, o.bG)([T.A], () => T.A.hasFetchedPaymentSources),
        k = (0, o.bG)([R.default], () => R.default.getCurrentUser()),
        U = k?.id,
        B = (0, G.V)(),
        F = (0, O.O)(),
        H = (0, N.Y)(ek.T7),
        [z, V] = n.useState(!0),
        W = n.useRef(0),
        K = (0, y.YE)(k, ek.PremiumTypes.TIER_2);
    (0, D.b)(),
        n.useEffect(() => {
            u.h.wait(async () => {
                let e = Date.now();
                await Promise.all([j.hP(), j.$o(), (0, m.zS)(null, null, ea.tF5.DISCOVERY)]),
                    (W.current = Date.now() - e),
                    V(!1);
            });
        }, []),
        n.useEffect(() => {
            z ||
                M.default.track(ea.HAw.PREMIUM_MARKETING_PAGE_VIEWED, {
                    location_stack: i,
                    load_duration_ms: W.current,
                });
        }, [i, z]),
        n.useEffect(() => {
            s && (null != B || null != F) && (0, S.u1)(B, F);
        }, [s, B, F]);
    let Y = (0, c.zy)(),
        Z = n.useRef(!1),
        Q = L && w && H,
        [X, J] = n.useState(Q);
    Q && !X && J(!0),
        n.useEffect(() => {
            if (Z.current || !Q) return;
            let e = new URLSearchParams(Y.search).get("checkout");
            if (null == e) return;
            let t = { nitro_basic: ek.pe.TIER_0, nitro: ek.pe.TIER_2 }[e];
            null != t &&
                ((Z.current = !0),
                (0, v.bG)(ea.BVt.APPLICATION_STORE),
                (0, E.A)({ subscriptionTier: t, analyticsLocations: a }));
        }, [Q, Y.search, a]);
    let q = (0, o.bG)([I.A], () => I.A.enabled),
        $ = t === ek.Mf.ApplicationStoreHome,
        ee = q
            ? (0, l.jsx)(x.A, {})
            : s
              ? (0, l.jsx)(A.uK, {})
              : $ && K
                ? (0, l.jsx)(g.f5, { value: a, children: (0, l.jsx)(P.Ay, { userId: U }) })
                : X
                  ? null
                  : (0, l.jsx)("div", { className: r()(sC.kL, sC.Lq), children: (0, l.jsx)(d.y, {}) });
    return null != ee
        ? (0, l.jsxs)(l.Fragment, { children: [$ && (0, l.jsx)(p.A, {}), ee] })
        : (0, l.jsx)(g.f5, { value: a, children: (0, l.jsx)(s_, { entrypoint: t }) });
};
