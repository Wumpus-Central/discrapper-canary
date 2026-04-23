s.d(t, { A: () => sC }), s(323874), s(14289), s(35956);
var a,
    r = s(627968),
    i = s(64700),
    n = s(503698),
    l = s.n(n),
    o = s(873263),
    c = s(17928),
    d = s(289873),
    m = s(228366),
    u = s(73825),
    _ = s(974544),
    x = s(107834),
    p = s(793574),
    g = s(688810),
    h = s(323082),
    f = s(86379),
    C = s(160946),
    b = s(545075),
    j = s(726649),
    A = s(611924),
    N = s(532794),
    I = s(976860),
    T = s(351906),
    E = s(287809),
    v = s(295405),
    R = s(166403),
    M = s(954571),
    S = s(474090),
    y = s(694080),
    P = s(553081),
    k = s(286320),
    w = s(422936),
    B = s(234419),
    G = s(851746),
    O = s(230109),
    D = s(43990),
    L = s(689175),
    H = s(775602),
    U = s(245853),
    F = s(636592),
    W = s(26508),
    z = s(927578),
    V = s(40185),
    K = s(994763),
    Q = s(949964),
    Z = s(77964),
    Y = s(366010),
    J = s(736653),
    q = s(303136),
    X = s(676279);
let $ = (e) => {
    let t,
        { className: s } = e,
        a = (0, X.TM)(),
        i = (0, Y.q)((0, J.Ay)());
    return (
        (t = a
            ? i
                ? "https://cdn.discordapp.com/assets/content/06ad5b3e9274c7e75f135129da3141ef42681698d3c0cf79b8c83e8526c2064f.mov"
                : "https://cdn.discordapp.com/assets/content/e306e75bdcd95e261e8d501c2cc6674bf183ff83e53b8dcae4e7bfa98d15c273.mov"
            : i
              ? "https://cdn.discordapp.com/assets/content/2b403885861e2c1a8268fbdb8ba90a93b72fab9937dd1cdad47e68f814969dac.webm"
              : "https://cdn.discordapp.com/assets/content/5412744d944cb3bf22279ee7741dbdca87bd644fa128adcfd2d50ae56543d7c9.webm"),
        (0, r.jsx)("div", {
            className: s,
            children: (0, r.jsx)(
                q.A,
                {
                    fallbackImage: i
                        ? "https://cdn.discordapp.com/assets/content/6ddb7f92b6f26f24c70cc7bf84e11bb423378d47cd111866af3980b332bad336.png"
                        : "https://cdn.discordapp.com/assets/content/acbc696c59f02098ff0014edaf0ded799884a3fefed7f20bcdb6cf038bba0542.png",
                    children: (0, r.jsx)("source", { src: t }),
                },
                t,
            ),
        })
    );
};
var ee =
        (((a = {}).HOME = "home"),
        (a.WHATS_NEW = "whatsNew"),
        (a.BEST_OF_NITRO = "bestOfNitro"),
        (a.PLANS = "plans"),
        (a.COMPARE = "compare"),
        a),
    et = s(419354),
    es = s(717421),
    ea = s(65470),
    er = s(792656),
    ei = s(652215),
    en = s(870408);
let el = function (e) {
    let { isVisible: t, subscriptionTier: s, isEligibleForBogoPromotion: a } = e,
        i = (0, es.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        n = { section: ei.JJy.MARKETING_FLOATING_CTA };
    return (0, r.jsx)(et.animated.div, {
        className: en.i,
        style: i,
        "data-mtctest-ignore": "true",
        children: (0, r.jsxs)("div", {
            className: en.U,
            children: [
                (0, r.jsx)(er.A, {
                    size: "md",
                    subscriptionTier: s,
                    hasActivePromotion: !!a,
                    isPersistentCTA: !0,
                    premiumModalAnalyticsLocation: n,
                }),
                (0, r.jsx)(ea.A, { variant: "secondary", size: "md" }),
            ],
        }),
    });
};
var eo = s(661531),
    ec = s(820081),
    ed = s(140735),
    em = s(401432),
    eu = s(834730),
    e_ = s(534514),
    ex = s(403581),
    ep = s(580630),
    eg = s(511484),
    eh = s(795269);
s(321073);
var ef = s(715547),
    eC = s(773669),
    eb = s(975571),
    ej = s(398523),
    eA = s(881373),
    eN = s(84483),
    eI = s(788868),
    eT = s(654487);
s(962995), s(490285);
var eE = s(985018);
s(237146);
var ev = s(864386),
    eR = s(944436),
    eM = s(799919);
let eS = (e) => {
        let { includes: t } = e;
        return t
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(ec.B, { size: "sm", color: eo.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                      (0, r.jsx)(ed.A, { children: eE.intl.string(eE.t["tq+6t/"]) }),
                  ],
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(em.a, { size: "xs", color: eo.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                      (0, r.jsx)(ed.A, { children: eE.intl.string(eE.t.l4qZrp) }),
                  ],
              });
    },
    ey = (e) => {
        let { label: t, tier0ColumnData: s, tier2ColumnData: a } = e;
        return (0, r.jsxs)("tr", {
            className: l()(eR.nM, eR.WQ),
            children: [
                (0, r.jsx)("th", {
                    scope: "row",
                    className: eR.nx,
                    children: (0, r.jsx)(eu.E, { variant: "text-md/medium", children: t }),
                }),
                (0, r.jsx)("td", {
                    className: eR.Hn,
                    children:
                        null != s.text
                            ? (0, r.jsx)(eu.E, { variant: "text-md/medium", children: s.text })
                            : (0, r.jsx)(eS, { includes: !!s.includes }),
                }),
                (0, r.jsx)("td", {
                    className: eR.Hn,
                    children:
                        null != a.text
                            ? (0, r.jsx)(eu.E, { variant: "text-md/medium", children: a.text })
                            : (0, r.jsx)(eS, { includes: !!a.includes }),
                }),
            ],
        });
    },
    eP = (e) => {
        let { title: t, subtitle: s, rows: a } = e;
        return (0, r.jsxs)("tbody", {
            children: [
                (0, r.jsx)("tr", {
                    className: l()(eR.nM, eR.Gf),
                    children: (0, r.jsxs)("td", {
                        className: eR.nx,
                        colSpan: 3,
                        children: [
                            (0, r.jsx)(e_.D, { variant: "heading-lg/bold", children: t }),
                            null != s && (0, r.jsx)(eu.E, { variant: "text-xs/medium", children: s }),
                        ],
                    }),
                }),
                a.map((e) => (0, r.jsx)(ey, { ...e }, e.id)),
            ],
        });
    },
    ek = (e) => {
        let { premiumType: t, priceString: s } = e,
            a = t === eI.PremiumTypes.TIER_0 ? eE.intl.string(eE.t.tUbSDK) : eE.intl.string(eE.t.Ipxkog);
        return (0, r.jsxs)("div", {
            className: eR.nn,
            children: [
                (0, r.jsxs)("div", {
                    className: eR.KS,
                    children: [
                        (0, r.jsx)(ex.t, { colorClass: eR.oG }),
                        (0, r.jsx)(e_.D, { variant: "heading-sm/semibold", children: a }),
                    ],
                }),
                (0, r.jsx)(e_.D, { variant: "heading-sm/semibold", children: s }),
            ],
        });
    },
    ew = (e) => {
        let { tier0Price: t, tier2Price: s, shouldUseDiscountPrice: a, tier2DiscountedPriceString: i } = e,
            n = a ? i : (0, ep.$g)(s.amount, s.currency);
        return (0, r.jsx)("thead", {
            children: (0, r.jsxs)("tr", {
                className: eR.U1,
                children: [
                    (0, r.jsx)("th", {
                        scope: "col",
                        className: eR.Cr,
                        children: (0, r.jsx)(e_.D, {
                            variant: "heading-xl/bold",
                            children: eE.intl.string(eE.t.ED4UVD),
                        }),
                    }),
                    (0, r.jsx)("th", {
                        scope: "col",
                        className: eR.Hn,
                        children: (0, r.jsx)(ek, {
                            premiumType: eI.PremiumTypes.TIER_0,
                            priceString: (0, ep.$g)(t.amount, t.currency),
                        }),
                    }),
                    (0, r.jsx)("th", {
                        scope: "col",
                        className: eR.Hn,
                        children: (0, r.jsx)(ek, { premiumType: eI.PremiumTypes.TIER_2, priceString: n }),
                    }),
                ],
            }),
        });
    },
    eB = (e) => {
        let t,
            { className: s, hidePill: a = !1, selectedPlanTier: n = eI.PremiumTypes.TIER_2 } = e,
            { analyticsLocations: o } = (0, g.Ay)(p.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            c = (0, B.V)(),
            d = c?.subscription_trial?.sku_id,
            m = (0, w.O)(),
            u = null != m && (0, eg.U9)(m, eI.pe.TIER_2),
            _ = (0, eg.N1)(eI.gD.PREMIUM_MONTH_TIER_2),
            x = `${_}/${(0, z.FJ)(eI.WT.MONTH)}`,
            h = (0, z.JM)(eI.gD.PREMIUM_MONTH_TIER_0),
            f = (0, z.JM)(eI.gD.PREMIUM_MONTH_TIER_2),
            C = (() => {
                (0, ef.l)("premium_marketing_comparison");
                let e = [
                        {
                            id: 10,
                            label: eE.intl.string(eE.t["svn/YX"]),
                            tier0ColumnData: { includes: !0 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 7,
                            label: eE.intl.string(eE.t.ID5B6Z),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 13,
                            label: eE.intl.string(eE.t["PBUrx/"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 22,
                            label: eE.intl.string(ev.default["86GtGH"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                    ],
                    { shouldShowBonusOrbsUX: t, multiplier: s } = (0, U.Dl)(eT.rE.NITRO_HOME_MARKETING),
                    { enabled: a } = ej.Ay.useConfig({ location: "useGetV2PlanComparisonTableRowsApplicationHome" }),
                    { functionalityEnabled: r } = (0, eA.YS)({
                        location: "useGetV2PlanComparisonTableRowsApplicationHome",
                    }),
                    { isInTreatment: i } = (0, eN.uX)("premium_marketing_comparison");
                return [
                    { id: 17, title: eE.intl.string(eE.t.Ij3Zmv), rows: e },
                    {
                        id: 18,
                        title: eE.intl.string(eE.t.Wme3nX),
                        rows: [
                            {
                                id: 0,
                                label: eE.intl.string(eE.t.LrUABv),
                                tier0ColumnData: { includes: !0 },
                                tier2ColumnData: { includes: !0 },
                            },
                            {
                                id: 1,
                                label: eE.intl.string(eE.t.DmfiwT),
                                tier0ColumnData: { includes: !0 },
                                tier2ColumnData: { includes: !0 },
                            },
                            {
                                id: 2,
                                label: eE.intl.string(eE.t.Uukj4o),
                                tier0ColumnData: { includes: !0 },
                                tier2ColumnData: { includes: !0 },
                            },
                            {
                                id: 12,
                                label: eE.intl.string(eE.t.NIKDqG),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            },
                            {
                                id: 9,
                                label: eE.intl.string(eE.t["5OAKhw"]),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            },
                        ],
                    },
                    {
                        id: 19,
                        title: eE.intl.string(eE.t["6b3ydG"]),
                        rows: [
                            {
                                id: 4,
                                label: eE.intl.string(eE.t["ufhQC+"]),
                                tier0ColumnData: { text: (0, z.EJ)(eI.PremiumTypes.TIER_0) },
                                tier2ColumnData: { text: (0, z.EJ)(eI.PremiumTypes.TIER_2) },
                            },
                            {
                                id: 11,
                                label: eE.intl.string(eE.t.qQxxVc),
                                tier0ColumnData: { includes: !0 },
                                tier2ColumnData: { includes: !0 },
                            },
                            {
                                id: 3,
                                label: eE.intl.string(eE.t["9kRJS8"]),
                                tier0ColumnData: { includes: !0 },
                                tier2ColumnData: { includes: !0 },
                            },
                            {
                                id: 21,
                                label: eE.intl.string(eE.t["5BJqNF"]),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            },
                            {
                                id: 5,
                                label: eE.intl.string(eE.t.VwxlMw),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            },
                            {
                                id: 6,
                                label: eE.intl.formatToPlainString(eE.t.nyhDpw, {
                                    numBoosts: eI.M4,
                                    percentageOff: (0, ep.l9)(eC.default.locale, eI.oX / 100),
                                }),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            },
                            {
                                id: 16,
                                label: eE.intl.string(eE.t["93xPy3"]),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            },
                            {
                                id: 8,
                                label: eE.intl.string(eE.t.IzrZHz),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            },
                            {
                                id: 20,
                                label: eE.intl.string(eE.t.Rj1Qys),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            },
                            {
                                id: 15,
                                label: eE.intl.formatToPlainString(eE.t["8crdzJ"], { maxChars: ei.CS1 }),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            },
                            {
                                id: 14,
                                label: eE.intl.string(eE.t["il8+nC"]),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            },
                        ],
                    },
                ];
            })();
        if (a) t = null;
        else {
            let e = null != c ? eE.intl.string(eE.t.IBYG5U) : eE.intl.string(eE.t.TR2B4T);
            t = (0, r.jsx)(eh.R, { className: l()(eR.Io, eR.SP), text: e });
        }
        let b = d === eI.pe.TIER_0 || n === eI.PremiumTypes.TIER_0;
        return (0, r.jsx)(g.f5, {
            value: o,
            children: (0, r.jsxs)("div", {
                className: l()(eR.zr, s),
                children: [
                    (0, r.jsx)(e_.D, {
                        className: eR.Qw,
                        variant: "display-md",
                        color: "text-strong",
                        children: eE.intl.string(eE.t.DbPgAd),
                    }),
                    (0, r.jsxs)("div", {
                        className: eR.wY,
                        children: [
                            (0, r.jsxs)("div", {
                                className: l()(eR.fO, { [eR.Vd]: b, [eR.hA]: !b }),
                                children: [
                                    !b && t,
                                    (0, r.jsx)("div", { className: eR.xQ }),
                                    (0, r.jsxs)("div", {
                                        className: eR.wN,
                                        children: [
                                            (0, r.jsx)("img", { src: eM, alt: "", className: eR.kQ }),
                                            (0, r.jsx)("img", {
                                                src: "/assets/6162a665edda48d4.svg",
                                                alt: "",
                                                className: eR.kQ,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("table", {
                                className: eR.tp,
                                children: [
                                    (0, r.jsx)(ew, {
                                        tier0Price: h,
                                        tier2Price: f,
                                        shouldUseDiscountPrice: u,
                                        tier2DiscountedPriceString: x,
                                    }),
                                    C.map((e) => (0, i.createElement)(eP, { ...e, key: e.id })),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    };
var eG = s(702841),
    eO = s(608416),
    eD = s(384601),
    eL = s(80933),
    eH = s(180894);
let eU = () => {
    let e = (0, eG.bG)([H.A], () => H.A.useReducedMotion);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: eL.BI,
                children: (0, r.jsx)(eO.Ay, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: eO.$G },
                    yAxisAnimationData: { range: 20, duration: eO.Mp, path: eO.aV.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: e,
                    children: (0, r.jsx)("img", { src: eH.A, alt: "", className: eL.Q }),
                }),
            }),
            (0, r.jsx)(eD.A, {
                isMotionReduced: e,
                boltContainerClassName: eL.nJ,
                carContainerClassName: eL.IN,
                hammerContainerClassName: eL.Gj,
                keyContainerClassName: eL.FV,
                starContainerClassName: eL.E1,
                boltAssetClassName: eL.j7,
                carAssetClassName: eL.or,
                hammerAssetClassName: eL.Wv,
                keyAssetClassName: eL.rs,
                starAssetClassName: eL.OY,
            }),
        ],
    });
};
var eF = s(296725);
let eW = i.forwardRef((e, t) => {
    let { analyticsLocations: s } = (0, g.Ay)(p.A.PREMIUM_MARKETING_FOOTER_CTA);
    return (0, r.jsx)(g.f5, {
        value: s,
        children: (0, r.jsx)("div", {
            ref: t,
            className: eF.kL,
            children: (0, r.jsxs)("div", {
                className: eF.hQ,
                children: [
                    (0, r.jsx)(eU, {}),
                    (0, r.jsx)(e_.D, {
                        variant: "display-md",
                        color: "text-strong",
                        className: eF.RH,
                        children: eE.intl.string(eE.t.lEw32m),
                    }),
                ],
            }),
        }),
    });
});
eW.displayName = "PremiumMarketingFooter";
var ez = s(939249),
    eV = s(742589),
    eK = s(909536),
    eQ = s(400669),
    eZ = s(876587),
    eY = s(503255);
let eJ = (e) => {
    let { navBarSections: t, activeSectionId: s, isAnimationComplete: a } = e,
        n = {
            [ee.HOME]: eE.intl.string(eE.t.uGRXjS),
            [ee.WHATS_NEW]: eE.intl.string(eE.t["mfcR/v"]),
            [ee.BEST_OF_NITRO]: eE.intl.string(eE.t.xQKkE8),
            [ee.PLANS]: eE.intl.string(eE.t.wyNMnm),
            [ee.COMPARE]: eE.intl.string(eE.t.pwD7If),
        },
        l = (0, c.bG)([E.default], () => E.default.getCurrentUser()),
        o = (0, eK.Gh)("premium_marketing_nav_bar") && null != l,
        d = i.useRef(null),
        m = Object.values(t).sort((e, t) => e.order - t.order);
    return (0, r.jsxs)(eV.A, {
        className: eY.TQ,
        transparent: !0,
        children: [
            (0, r.jsxs)("div", {
                className: eY.Wc,
                children: [
                    (0, r.jsxs)("div", {
                        className: eY.wG,
                        children: [
                            (0, r.jsx)(ex.t, { className: eY.nE, colorClass: eY.oG }),
                            (0, r.jsx)("div", {
                                className: eY.zc,
                                children: m.map((e) => {
                                    let t = s === e.id,
                                        a = n[e.id];
                                    return (0, r.jsxs)(
                                        ez.D,
                                        {
                                            className: eY.S0,
                                            onClick: e.scrollToSection,
                                            children: [
                                                (0, r.jsx)(eu.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-strong",
                                                    children: a,
                                                }),
                                                t && (0, r.jsx)("div", { className: eY.W0 }),
                                            ],
                                        },
                                        a,
                                    );
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: eY.MQ,
                        children: [
                            o &&
                                (0, r.jsx)(eQ.l, { ref: d, size: "sm", location: p.A.PREMIUM_WISHLIST_MARKETING_PAGE }),
                            (0, r.jsx)(ea.A, { size: "sm", variant: "overlay-secondary" }),
                        ],
                    }),
                ],
            }),
            o && a && (0, r.jsx)(eZ.O, { targetElementRef: d }),
        ],
    });
};
var eq = s(750338),
    eX = s(260632),
    e$ = s(856556);
function e0(e) {
    let {
        className: t,
        boxLayout: s,
        title: a,
        shouldLoadVideo: i,
        isReducedMotion: n,
        startLeftAligned: o = !1,
        highlightBento: c,
    } = e;
    return (0, r.jsxs)("div", {
        className: l()(e$.boxBackdrop, t),
        children: [
            (0, r.jsx)(e_.D, {
                className: e$.bentoSectionHeader,
                variant: "display-md",
                color: "text-strong",
                children: a,
            }),
            null != c && (0, r.jsx)("div", { className: e$.highlightBento, children: c }),
            (0, r.jsx)("div", {
                className: e$.bentoBoxesGrid,
                children: s.map((e, t) => {
                    let s;
                    switch (e.length) {
                        case 3:
                            s = eX.A0.SMALL;
                            break;
                        case 2:
                            s = eX.A0.MEDIUM;
                            break;
                        default:
                            s = eX.A0.LARGE;
                    }
                    return (0, r.jsx)(r.Fragment, {
                        children: e.map((e) =>
                            (0, r.jsx)(
                                eq.A,
                                { index: t + +!!o, ...e, size: s, shouldLoadVideo: i, isReducedMotion: n },
                                e.name,
                            ),
                        ),
                    });
                }),
            }),
        ],
    });
}
let e1 = i.memo(function (e) {
        let t = (0, ef.l)("premium_marketing_bento"),
            { whatsNewBoxes: s } = (0, eX.Ay)(t);
        return (0, r.jsx)(e0, {
            boxLayout: s,
            title: eE.intl.string(eE.t.LRmNAl),
            startLeftAligned: !0,
            highlightBento: null,
            ...e,
        });
    }),
    e2 = i.memo(function (e) {
        let { bestOfBoxes: t } = (0, eX.Ay)();
        return (0, r.jsx)(e0, { boxLayout: t, title: eE.intl.string(eE.t.EnzW2H), startLeftAligned: !0, ...e });
    });
var e3 = s(877624),
    e4 = s(526292),
    e5 = s(236834),
    e6 = s(549996),
    e8 = s(371764),
    e7 = s(97808),
    e9 = s(854627),
    te = s(778712),
    tt = s(45861);
function ts(e) {
    let { referrer: t } = e,
        { avatarSrc: s, eventHandlers: a } = (0, e9.A)({ userId: t?.id, size: te._3.SIZE_24, animateOnHover: !0 });
    return (0, r.jsx)("div", {
        className: tt.$6,
        children: (0, r.jsxs)("div", {
            className: tt.sc,
            children: [
                (0, r.jsx)("div", {
                    className: tt.kR,
                    children: (0, r.jsx)(e7.eu, { src: s, "aria-label": t.username, size: te._3.SIZE_32, ...a }),
                }),
                (0, r.jsx)(e_.D, {
                    variant: "heading-sm/normal",
                    className: tt.FS,
                    color: "text-strong",
                    children: eE.intl.format(eE.t.IqxblS, {
                        username: null != t.globalName ? t.globalName : t.username,
                    }),
                }),
            ],
        }),
    });
}
var ta = s(224850),
    tr = s(97352);
function ti() {
    let e = (0, c.bG)([tr.A], () => tr.A.getForSkuAndInterval((0, z.mH)(eI.pe.TIER_0), eI.WT.MONTH));
    return null != e ? (0, z.sS)(e) : "…";
}
var tn = s(818415),
    tl = s(505559);
let to = () => {
    let e = (0, tn.A)();
    return null == e ? null : (0, r.jsx)(tl.A, { text: e });
};
var tc = s(103733),
    td = s(607470);
let tm =
        "https://cdn.discordapp.com/assets/content/a3e8e17987398023e2afd61ec5078a9bce18b2832f2f1775a1ba3c033ce13270.webm",
    tu = (e) => {
        let {
            supportHEVCAlpha: t,
            isMotionReduced: s,
            containerVisibilityPercentage: a,
            containerClassName: i,
            assetClassName: n,
        } = e;
        return s
            ? (0, r.jsx)("div", {
                  className: i,
                  children: (0, r.jsx)("img", {
                      src: "https://cdn.discordapp.com/assets/content/46e72137fc3631c8024b00c33dbab5cf45740d4ab35f77bd96517830e727d0c5.png",
                      alt: "",
                      className: n,
                  }),
              })
            : (0, r.jsx)("div", {
                  className: i,
                  children: (0, r.jsx)(eO.Ay, {
                      scaleAnimationData: { startScale: 0.9, endScale: 1, duration: eO.$G },
                      yAxisAnimationData: { range: 20, duration: eO.Mp, path: eO.aV.SINE },
                      parallaxAnimationData: {
                          pathDirection: eO.MN.UP,
                          range: 200,
                          containerVisibilityPercentage: a,
                          changeOpacity: !1,
                      },
                      animateXAxisWiggle: !0,
                      children: t
                          ? (0, r.jsx)("img", {
                                src: "https://cdn.discordapp.com/assets/content/082012af2fe8bfa66ce6630e1549a146738936af43a8e60c780f9976fa333d93.png",
                                alt: "",
                                className: n,
                            })
                          : (0, r.jsx)(
                                td.A,
                                {
                                    muted: !0,
                                    autoPlay: !0,
                                    playsInline: !0,
                                    loop: !0,
                                    className: n,
                                    children: (0, r.jsx)("source", { src: tm }),
                                },
                                tm,
                            ),
                  }),
              });
    };
var t_ = s(188393);
let tx = (e) => {
    let { containerVisibilityPercentage: t } = e,
        s = (0, eG.bG)([H.A], () => H.A.useReducedMotion),
        a = (0, X.TM)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(tu, {
                supportHEVCAlpha: a,
                isMotionReduced: s,
                containerVisibilityPercentage: t,
                containerClassName: t_.wG,
                assetClassName: t_.lu,
            }),
            (0, r.jsx)(eD.A, {
                isMotionReduced: s,
                containerVisibilityPercentage: t,
                boltContainerClassName: t_.nJ,
                carContainerClassName: t_.IN,
                hammerContainerClassName: t_.Gj,
                keyContainerClassName: t_.FV,
                starContainerClassName: t_.E1,
                boltAssetClassName: t_.j7,
                carAssetClassName: t_.or,
                hammerAssetClassName: t_.Wv,
                keyAssetClassName: t_.rs,
                starAssetClassName: t_.OY,
            }),
        ],
    });
};
var tp = s(469408);
let tg = i.memo(
        i.forwardRef((e, t) => {
            let { className: s, subscriptionTier: a, isEligibleForBogoPromotion: i } = e,
                { analyticsLocations: n } = (0, g.Ay)(p.A.PREMIUM_MARKETING_HERO_CTA),
                o = ti(),
                d = (0, e5.A)(),
                m = null != d,
                u = (0, c.bG)([H.A], () => H.A.useReducedMotion),
                { visibilityPercentageRef: _, visibilityPercentage: x } = (0, tc.U)(!u),
                h = (0, k.b)(),
                f = !m && h.length > 0,
                C = (0, e6.c)(e3.C.MARKETING_PAGE_BANNER),
                b = null != C && "marketingPageBanner" === C.properties.properties.oneofKind,
                j = (0, e4.ar)() && !b;
            return (0, r.jsx)(g.f5, {
                value: n,
                children: (0, r.jsx)("div", {
                    ref: t,
                    className: l()(tp.kL, s),
                    "data-testid": "marketing-page-hero-header",
                    children: (0, r.jsx)("div", {
                        ref: _,
                        children: (0, r.jsxs)("div", {
                            className: tp.hQ,
                            children: [
                                (0, r.jsx)(tx, { containerVisibilityPercentage: x }),
                                j && (0, r.jsx)("div", { className: tp.XN, children: (0, r.jsx)(to, {}) }),
                                (0, r.jsx)("div", {
                                    className: tp.s8,
                                    children: (0, r.jsx)(e_.D, {
                                        variant: "display-md",
                                        color: "text-strong",
                                        className: tp.wx,
                                        children: eE.intl.string(eE.t.YCZldK),
                                    }),
                                }),
                                (0, r.jsxs)("div", {
                                    className: tp.rf,
                                    children: [
                                        m &&
                                            (0, r.jsx)("div", {
                                                className: tp.eZ,
                                                children: (0, r.jsx)(ts, { referrer: d }),
                                            }),
                                        f &&
                                            (0, r.jsx)("div", {
                                                className: tp.Qn,
                                                children: (0, r.jsx)(ta.A, {
                                                    textColor: "text-strong",
                                                    smallerText: !1,
                                                    isApplicationHome: !0,
                                                    enablePremiumBrandRefresh: !0,
                                                }),
                                            }),
                                        (0, r.jsxs)("div", {
                                            className: j ? tp.es : tp.UJ,
                                            children: [
                                                (0, r.jsx)(er.A, {
                                                    size: "md",
                                                    fullWidth: j,
                                                    hasActivePromotion: !!i,
                                                    subscriptionTier: b && null == a ? eI.pe.NONE : a,
                                                    buttonTextOverride: b ? eE.intl.string(eE.t["2pG5Ga"]) : void 0,
                                                }),
                                                !j && (0, r.jsx)(ea.A, { variant: "secondary", size: "md" }),
                                            ],
                                        }),
                                        (0, r.jsx)("div", {
                                            className: tp.iQ,
                                            children: (0, r.jsx)(eu.E, {
                                                color: "text-muted",
                                                variant: "text-xs/medium",
                                                children: eE.intl.format(eE.t.kt9wxs, { cheapestMonthlyPrice: o }),
                                            }),
                                        }),
                                        null != C &&
                                            "marketingPageBanner" === C.properties.properties.oneofKind &&
                                            (0, r.jsx)(e8.x, {
                                                componentId: C.id,
                                                promotionBannerMarketingComponentFields:
                                                    C.properties.properties.marketingPageBanner,
                                            }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
            });
        }),
    ),
    th = function (e) {
        let { scrollOffset: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { scrollOffset: 60 },
            s = (0, i.useCallback)(
                (e) => {
                    let s = o.current[e];
                    null != s &&
                        ((s.style.scrollMarginTop = `${t}px`),
                        s.scrollIntoView({ behavior: "smooth", block: "start" }));
                },
                [t],
            ),
            [a, r] = (0, i.useState)(Object.fromEntries(e.map((e) => [e, !1]))),
            [n, l] = (0, i.useState)(e[0]);
        (0, i.useEffect)(() => {
            let e = Object.keys(a).filter((e) => a[e]);
            e.length > 0 && l(e[0]);
        }, [a]);
        let o = (0, i.useRef)({});
        return (
            (0, i.useEffect)(() => {
                let e = new IntersectionObserver((e) => {
                    e.forEach((e) => {
                        r((t) => ({ ...t, [e.target.id]: e.isIntersecting }));
                    });
                });
                return (
                    Object.values(o.current).forEach((t) => {
                        null != t && e.observe(t);
                    }),
                    () => e.disconnect()
                );
            }, []),
            {
                navBarSections: (0, i.useMemo)(
                    () =>
                        e.reduce(
                            (e, t, a) => (
                                (e[t] = {
                                    id: t,
                                    ref: (e) => {
                                        (o.current[t] = e), null != e && (e.id = t);
                                    },
                                    scrollToSection: () => s(t),
                                    order: a,
                                }),
                                e
                            ),
                            {},
                        ),
                    [e, s],
                ),
                activeSectionId: n,
                setActiveSectionId: l,
            }
        );
    };
var tf = s(818348),
    tC = s(808557);
let tb = () => {
    let e = (0, o.zy)();
    (0, A.P)(j.b);
    let t = i.useRef(null),
        s = i.useRef(null),
        a = i.useRef(null),
        n = i.useRef(null),
        d = i.useRef(null),
        m = i.useRef(null),
        u = (0, c.bG)([H.A], () => H.A.useReducedMotion),
        [_, x] = i.useState(u);
    i.useEffect(() => {
        if (u) return void x(!0);
        let e = s.current;
        if (null == e) return;
        let t = (t) => {
            t.target === e && x(!0);
        };
        return e.addEventListener("animationend", t), () => e.removeEventListener("animationend", t);
    }, [u]);
    let [h, f] = i.useState(!1),
        [C, b] = i.useState(!1),
        [N, I] = i.useState(!1),
        [T, E] = i.useState(!1),
        v = (0, c.bG)([R.A], () => R.A.getPremiumTypeSubscription()),
        S = null != v ? (0, z.EL)(v) : null,
        y = null != S ? z.Ay.getSkuIdForPlan(S.planId) : null,
        P = null !== y && y !== eI.pe.TIER_2 ? eI.pe.TIER_2 : null,
        k = (0, V.cg)(),
        { analyticsLocations: w } = (0, g.Ay)(p.A.PREMIUM_MARKETING);
    i.useEffect(() => {
        E(!0);
    }, []);
    let B = (0, W.DK)(F.W.NITRO, "PremiumMarketingHome"),
        { shouldShowBonusOrbsUX: G } = (0, U.Dl)(eT.rE.NITRO_HOME_MARKETING),
        Y = B && G ? eX.NI.COMBINED_ORBS : G ? eX.NI.ORB_MULTIPLIER : B ? eX.NI.ORB_REWARDS : null,
        J = i.useMemo(() => null != Y && "orbs" === new URLSearchParams(e.search).get("section"), [e.search, Y]);
    (0, K.z)(Y ?? eX.NI.COMBINED_ORBS, J);
    let { navBarSections: q, activeSectionId: X } = th([ee.HOME, ee.WHATS_NEW, ee.BEST_OF_NITRO, ee.PLANS, ee.COMPARE]),
        { home: et, whatsNew: es, bestOfNitro: ea, plans: er, compare: en } = q,
        eo = (0, r.jsxs)("div", {
            ref: s,
            className: l()(tC.kL, tC.Gd, tC.iI, { [tC.Hq]: !u }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, r.jsx)($, { className: tC.yH }),
                (0, r.jsx)(eJ, { navBarSections: q, activeSectionId: X, isAnimationComplete: _ }),
                (0, r.jsxs)("div", {
                    className: tC.Qr,
                    children: [
                        (0, r.jsx)("div", {
                            className: tC.qY,
                            ref: et.ref,
                            children: (0, r.jsx)(O.L, {
                                innerRef: n,
                                onChange: (e) => f(e),
                                threshold: 0,
                                active: !0,
                                children: (0, r.jsx)(tg, {
                                    ref: n,
                                    subscriptionTier: P,
                                    isEligibleForBogoPromotion: k,
                                }),
                            }),
                        }),
                        k &&
                            (0, r.jsx)("div", {
                                className: tC.Hz,
                                children: (0, r.jsx)(Q.A, { variant: Q.c.APPLICATION_NITRO_HOME }),
                            }),
                        (0, r.jsx)("div", {
                            className: tC.So,
                            ref: es.ref,
                            children: (0, r.jsx)(e1, { shouldLoadVideo: T, isReducedMotion: u }),
                        }),
                        (0, r.jsx)("div", {
                            className: tC.KQ,
                            ref: ea.ref,
                            children: (0, r.jsx)(e2, { shouldLoadVideo: T, isReducedMotion: u }),
                        }),
                        (0, r.jsx)("div", {
                            className: tC.s5,
                            ref: er.ref,
                            children: (0, r.jsx)(O.L, {
                                innerRef: a,
                                onChange: (e) => b(e),
                                threshold: 0.1,
                                active: !0,
                                children: (0, r.jsx)(Z.jP, { innerRef: a }),
                            }),
                        }),
                        (0, r.jsx)("div", { className: tC.aC, ref: en.ref, children: (0, r.jsx)(eB, {}) }),
                    ],
                }),
                (0, r.jsx)(O.L, {
                    innerRef: d,
                    onChange: (e) => {
                        e &&
                            !N &&
                            (M.default.track(ei.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: w }),
                            I(!0));
                    },
                    children: (0, r.jsx)("div", { ref: d, className: tC._Z }),
                }),
                (0, r.jsx)(eW, { ref: m }),
                (0, r.jsx)(el, { isVisible: !h && !C && T, subscriptionTier: P, isEligibleForBogoPromotion: k }),
                (0, r.jsx)($, { className: tC.MF }),
            ],
        });
    return (0, r.jsx)(D.N, {
        theme: tf.NJ.DARKER,
        children: (e) => (0, r.jsx)(L.Gt, { className: l()(tC.XG, e), ref: t, children: eo }),
    });
};
var tj = s(727949),
    tA = s(462887),
    tN = s(862482),
    tI = s(194509),
    tT = s(396375),
    tE = s(14238);
let tv = function (e) {
    let { isVisible: t, subscriptionTier: s, isApplicationHome: a, isEligibleForBogoPromotion: i } = e,
        n = (0, es.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        o = { section: ei.JJy.MARKETING_FLOATING_CTA },
        c = (0, J.Ay)(),
        d = (0, Y.M)(c);
    return (0, r.jsx)(et.animated.div, {
        className: l()(tE.iE, { [tE.H8]: a, [tE.q4]: !t }),
        style: n,
        children: (0, r.jsxs)("div", {
            className: a ? tE.zW : tE.iJ,
            children: [
                (0, r.jsx)(tT.A, {
                    color: d ? tN.XD.BRAND_INVERTED : void 0,
                    className: l()(tE.x6, { [tE.Ph]: d }),
                    subscriptionTier: s,
                    premiumModalAnalyticsLocation: o,
                    isPersistentCTA: !0,
                    hasActivePromotion: i,
                    shinyButtonClassName: d ? void 0 : tE.PJ,
                }),
                (0, r.jsx)(tI.A, { className: tE.x6, premiumModalAnalyticsLocation: o }),
            ],
        }),
    });
};
var tR = s(904788),
    tM = s(89366),
    tS = s(360101);
let ty = (e) => {
        let {
                inOfferExperience: t,
                subscriptionTier: s,
                containerClassName: a,
                buttonClassName: i,
                isApplicationHome: n,
                isDarkMode: o,
                isEligibleForBogoPromotion: c,
            } = e,
            d = c
                ? (0, r.jsx)(tT.A, {
                      color: o ? tN.XD.BRAND_INVERTED : void 0,
                      className: l()(tS.x6, tS.Ph, i, { [tS.Sq]: t && n, [tS.MF]: n && !o }),
                      shinyButtonClassName: o ? void 0 : tS.PJ,
                      subscriptionTier: s,
                      hasActivePromotion: !0,
                  })
                : (0, r.jsx)(tT.A, {
                      color: o || !n ? tN.XD.BRAND_INVERTED : void 0,
                      className: l()(tS.x6, tS.Ph, i, { [tS.Sq]: t && n, [tS.MF]: n && !o }),
                      subscriptionTier: s,
                  }),
            m = t && n ? null : (0, r.jsx)(tI.A, { className: l()(tS.x6, i), color: n ? void 0 : tN.XD.WHITE });
        return (0, r.jsxs)("div", { className: l()(tS.UD, a), children: [d, " ", m] });
    },
    tP = () =>
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(tR.p, { className: tS.zd }),
                (0, r.jsx)(tR.p, { className: tS.G }),
                (0, r.jsx)(tR.p, { className: tS.zy }),
                (0, r.jsx)(tR.p, { className: tS.GX }),
            ],
        });
function tk(e) {
    let { variant: t = "text-lg/normal", withBottomMargin: s = !0, isApplicationHome: a } = e,
        i = ti();
    return (0, r.jsx)(eu.E, {
        variant: t,
        color: a ? "text-subtle" : "always-white",
        className: l()(tS.h_, { [tS.If]: s, [tS.jn]: a }),
        children: eE.intl.format(eE.t.kt9wxs, { cheapestMonthlyPrice: i }),
    });
}
let tw = i.forwardRef((e, t) => {
    let { className: s, buttonClassName: a, subscriptionTier: i, isDarkMode: n } = e,
        { analyticsLocations: o } = (0, g.Ay)(p.A.PREMIUM_MARKETING_HERO_CTA),
        c = (0, tM.QQ)(),
        d = (0, e4.ar)(),
        m = (0, V.cg)(),
        u = (0, k.b)().length > 0,
        _ = eE.intl.string(eE.t.YCZldK);
    return (0, r.jsx)(g.f5, {
        value: o,
        children: (0, r.jsxs)("div", {
            ref: t,
            className: l()(tS.kL, s, { [tS.V1]: !d, [tS.Q4]: !d && u }),
            "data-testid": "v2-marketing-page-hero-header",
            children: [
                (0, r.jsxs)("div", {
                    className: d ? tS.I6 : tS.G1,
                    children: [
                        (0, r.jsx)(e_.D, {
                            variant: d ? "display-lg" : "display-md",
                            color: "always-white",
                            children: _,
                        }),
                        u
                            ? (0, r.jsx)("div", {
                                  className: tS.DF,
                                  children: (0, r.jsx)(ta.A, { textColor: "always-white", smallerText: !d }),
                              })
                            : (0, r.jsx)(tk, {}),
                        m || c
                            ? (0, r.jsx)("div", {
                                  className: tS.UD,
                                  children: (0, r.jsx)(tI.A, { className: l()(tS.x6, a), color: tN.XD.WHITE }),
                              })
                            : (0, r.jsx)(ty, {
                                  subscriptionTier: i,
                                  inOfferExperience: d,
                                  buttonClassName: a,
                                  isDarkMode: n,
                              }),
                        u && (0, r.jsx)(tk, { variant: "text-md/normal", withBottomMargin: !1 }),
                    ],
                }),
                !d && (0, r.jsx)(tP, {}),
            ],
        }),
    });
});
var tB = s(374200),
    tG = s(988399),
    tO = s(422253),
    tD = s(359778),
    tL = s(695366),
    tH = s(780964),
    tU = s(858897),
    tF = s(824888);
let tW = (e) => {
    let t,
        s,
        { premiumSubscription: a, className: i, textColor: n } = e,
        o = (0, e4.ar)();
    if (null == a) return null;
    let c = null != a ? z.Ay.getPremiumPlanItem(a) : null;
    if (
        (z.Ay.isBoostOnlySubscription(a)
            ? (t = eE.intl.string(eE.t.Uj0md3))
            : null != c && (t = z.Ay.getTierDisplayNameByPlanId(c.planId)),
        null == t)
    )
        return null;
    let d = () => (0, tU.openUserSettings)(tH.X.SUBSCRIPTIONS_PANEL),
        m = (null != c ? z.Ay.getSkuIdForPlan(c.planId) : null) === eI.pe.TIER_1;
    return (
        (s = null != n ? n : o ? "always-white" : "text-default"),
        (0, r.jsxs)(tD.Z, {
            className: l()(tF.kL, i, { [tF.He]: o }),
            type: tD.Z.Types.CUSTOM,
            children: [
                (0, r.jsx)(tL.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: l()(tF.Kk, { [tF.Pt]: o }),
                }),
                (0, r.jsx)(eu.E, {
                    variant: "text-sm/medium",
                    color: s,
                    children: m
                        ? eE.intl.format(eE.t["tYuv+T"], {
                              helpdeskArticle: eb.A.getArticleURL(ei.MVz.PREMIUM_DETAILS),
                              onSubscriptionsClick: d,
                          })
                        : eE.intl.format(eE.t.xHRgU2, { subscriptionName: t, onSubscriptionsClick: d }),
                }),
            ],
        })
    );
};
var tz = s(404631);
let tV = (e) => {
    let { lifted: t = !1 } = e;
    return (0, r.jsxs)("svg", {
        width: "100%",
        height: "793px",
        viewBox: "0 0 2338 793",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "none",
        className: l()(tz.zr, { [tz.N]: t }),
        children: [
            (0, r.jsx)("path", {
                d: "M1175.02 650.847C567.943 650.847 449.538 793 0 793V0H2338V529.841C1912.54 529.841 1705.84 650.847 1175.02 650.847Z",
                fill: "url(#paint0_linear_2548_770)",
            }),
            (0, r.jsx)("defs", {
                children: (0, r.jsxs)("linearGradient", {
                    id: "paint0_linear_2548_770",
                    x1: "2338",
                    y1: "-1.20115e-05",
                    x2: "2262.17",
                    y2: "975.136",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        (0, r.jsx)("stop", { className: tz.eq }),
                        (0, r.jsx)("stop", { offset: "0.339235", className: tz.l_ }),
                        (0, r.jsx)("stop", { offset: "0.492065", className: tz.sM }),
                        (0, r.jsx)("stop", { offset: "0.823236", className: tz.zi }),
                        (0, r.jsx)("stop", { offset: "0.899558", className: tz.s1 }),
                    ],
                }),
            }),
        ],
    });
};
var tK = s(315629),
    tQ = s(331322),
    tZ = s(404778),
    tY = s(821609),
    tJ = s(392943),
    tq = s(852218),
    tX = s(783420),
    t$ = s(811611),
    t0 = s(365720),
    t1 = s(796956);
function t2() {
    let e = (0, J.Ay)(),
        t = (0, tA.M)(e),
        s = (0, c.bG)([tB.A], () => {
            let e = tB.A.getPromotionByTypeAndKey(tq.pt.MARKETING_MOMENT, tq.zw);
            return null == e || e.endDate < new Date() ? null : e;
        }),
        a = (0, c.bG)([R.A], () => R.A.getPremiumTypeSubscription());
    return null == s
        ? null
        : (0, r.jsxs)(tK.h, {
              color: "nitro-pink",
              className: t1.kL,
              children: [
                  (0, r.jsxs)(tQ.B, {
                      direction: "horizontal",
                      justify: "space-between",
                      align: "center",
                      className: t1.wx,
                      children: [
                          (0, r.jsx)(tJ.A, { className: t1.Ss, color: t ? "white" : "black" }),
                          (0, r.jsx)(eu.E, {
                              variant: "text-sm/medium",
                              color: t ? "text-subtle" : "text-default",
                              children: (0, t$.ux)(s.endDate.toISOString()),
                          }),
                      ],
                  }),
                  (0, r.jsx)(tZ.c, { className: t1.yF }),
                  (0, r.jsxs)(tQ.B, {
                      direction: "horizontal",
                      align: "center",
                      gap: 24,
                      children: [
                          (0, r.jsxs)(tQ.B, {
                              gap: 12,
                              className: t1.rf,
                              children: [
                                  (0, r.jsx)(e_.D, {
                                      variant: "heading-xl/semibold",
                                      children: eE.intl.string(t0.default["7OPz+z"]),
                                  }),
                                  (0, r.jsx)(eu.E, {
                                      variant: "text-sm/medium",
                                      children: eE.intl.format(null != a ? t0.default["PyQY5+"] : t0.default.SvqMnV, {
                                          date: s.endDate,
                                          helpCenterLink: eb.A.getArticleURL(ei.MVz.NITRO_CONTROL_CAMPAIGN),
                                      }),
                                  }),
                                  (0, r.jsx)("div", {
                                      className: t1.lO,
                                      children: (0, r.jsx)(tX.A, {
                                          subscriptionTier: eI.pe.TIER_2,
                                          children: (e) => {
                                              let { onClick: t } = e;
                                              return (0, r.jsx)(tY.$, {
                                                  variant: "expressive",
                                                  size: "md",
                                                  icon: ex.t,
                                                  text: eE.intl.string(eE.t.J61px0),
                                                  onClick: t,
                                              });
                                          },
                                      }),
                                  }),
                              ],
                          }),
                          (0, r.jsx)("img", {
                              src: "https://cdn.discordapp.com/assets/content/ede1376e3abf981b734bc51a4cb73cd54db3cecb4a6d22439a3e8ad87f2f9f78.png",
                              alt: "",
                              "aria-hidden": "true",
                              className: t1.oz,
                          }),
                      ],
                  }),
              ],
          });
}
var t3 = s(900797),
    t4 = s(847374),
    t5 = s(777666),
    t6 = s(464769);
function t8(e) {
    let { className: t } = e;
    return (0, r.jsx)(t5.Lp, { className: l()(t6.T, t), text: eE.intl.string(eE.t.EYxi0o) });
}
var t7 = s(507553),
    t9 = s(591179),
    se = s(255438),
    st = s(355097);
let ss = "/assets/0838bda6ecd20d91.svg";
var sa = s(64514),
    sr = s(121818);
let si = "/assets/5b4fec8511c3676a.svg",
    sn = (e, t, s) => ((0, tA.M)(e) ? t : s);
var sl = s(732302);
let so = (e) => {
        let { isShowingAll: t, onClick: s } = e;
        return (0, r.jsxs)(ez.D, {
            onClick: s,
            className: sl.customButton,
            children: [
                t ? eE.intl.string(eE.t.maZaN3) : eE.intl.string(eE.t["37C26f"]),
                t
                    ? (0, r.jsx)(t3.t, { size: "md", color: "currentColor", className: sl.arrow })
                    : (0, r.jsx)(t4.a, { size: "md", color: "currentColor", className: sl.arrow }),
            ],
        });
    },
    sc = (e) => {
        let {
                title: t,
                description: s,
                className: a,
                imageSource: i,
                imageClassName: n,
                titleBadge: o,
                isNew: c = !1,
                isEarlyAccess: d = !1,
            } = e,
            { analyticsLocations: m } = (0, g.Ay)(p.A.PREMIUM_MARKETING_PERK_CARD);
        return (0, r.jsx)(g.f5, {
            value: m,
            children: (0, r.jsxs)("div", {
                className: l()(sl.perkCard, a),
                children: [
                    c
                        ? (0, r.jsx)(tR.A, {
                              className: sl.perkCardNewBadge,
                              shouldInheritBackgroundColor: !0,
                              shouldInheritTextColor: !0,
                          })
                        : null,
                    d ? (0, r.jsx)(t8, { className: sl.perkCardEarlyAccessBadge }) : null,
                    (0, r.jsx)("img", { src: i, alt: "", className: l()(n, sl.perksCardArt) }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsxs)(e_.D, {
                                variant: "heading-lg/extrabold",
                                className: sl.perkCardHeading,
                                children: [t, " ", o],
                            }),
                            (0, r.jsx)(eu.E, {
                                variant: "text-sm/normal",
                                className: sl.perkCardDescription,
                                children: "function" == typeof s ? s(m) : s,
                            }),
                        ],
                    }),
                ],
            }),
        });
    },
    sd = (e) => {
        let { className: t, isSubscriberNitroHome: a = !1 } = e,
            [n, o] = i.useState(!1),
            c = ((e) => {
                let { styles: t } = e,
                    a = (0, J.Ay)(),
                    r = (0, t9.X)("usePerkCards"),
                    i = (0, eG.bG)([E.default], () => {
                        let e = E.default.getCurrentUser();
                        return z.Ay.canUsePremiumProfileCustomization(e);
                    }),
                    n = (0, se.Xq)(eI.f3 / 1024, { useKibibytes: !0 });
                return {
                    badge: {
                        title: eE.intl.string(eE.t.SS87rQ),
                        description: eE.intl.string(eE.t.oD6CRr),
                        imageSource: "/assets/70e295f6158d848f.png",
                        imageClassName: t.badgeImage,
                    },
                    badgeAlt: {
                        title: eE.intl.string(eE.t["5cYMu0"]),
                        description: eE.intl.string(eE.t.vxk9va),
                        imageSource: sn(a, "/assets/42e77ef3b6c4c1bb.svg", "/assets/ab48ff2bd2dce6a1.svg"),
                        imageClassName: t.badgeNewImage,
                    },
                    clientThemes: {
                        title: eE.intl.string(eE.t["/xvEMy"]),
                        description: eE.intl.string(eE.t.HKWdjj),
                        className: t.clientThemesCard,
                        imageSource: "/assets/37e0853800afb796.svg",
                        imageClassName: t.clientThemesImage,
                    },
                    customAppIcons: {
                        title: eE.intl.string(eE.t.OuItFi),
                        description: eE.intl.string(eE.t.mPyrE6),
                        imageSource: "/assets/7992de8b563ad80a.png",
                        imageClassName: t.customAppIconImage,
                    },
                    emoji: {
                        title: eE.intl.string(eE.t["R2IV/Q"]),
                        description: eE.intl.string(eE.t.R5Xag2),
                        imageSource: "/assets/d8edaaf5cb32248f.svg",
                        imageClassName: t.emojiImage,
                    },
                    guildProfile: {
                        title: eE.intl.string(eE.t.lKDhhJ),
                        description: (e) => {
                            if (r)
                                return i
                                    ? eE.intl.formatToPlainString(eE.t.aj1pfZ, { onCheckItOutClick: () => {} })
                                    : eE.intl.formatToPlainString(eE.t.d2oYS8, { onTryItOutClick: () => {} });
                            let t = () => {
                                {
                                    let { openUserSettings: t } = s(858897);
                                    t7.A.setState({ scrollPosition: st._F.TRY_IT_OUT }),
                                        t(tH.X.PROFILE_PANEL, { analyticsLocations: e });
                                }
                            };
                            return i
                                ? eE.intl.format(eE.t.aj1pfZ, { onCheckItOutClick: t })
                                : eE.intl.format(eE.t.d2oYS8, { onTryItOutClick: t });
                        },
                        imageSource: "/assets/e1b6b45be1ce4b03.png",
                        imageClassName: t.perGuildProfilesImage,
                    },
                    longerMessages: {
                        title: eE.intl.string(eE.t.BUScid),
                        description: eE.intl.string(eE.t.vN6XpQ),
                        imageSource: sn(a, "/assets/dd2088e61de76ba7.svg", "/assets/62b63638a6645137.svg"),
                        imageClassName: t.longerMessagesImage,
                    },
                    moreGuilds: {
                        title: eE.intl.string(eE.t.Bv8Pfk),
                        description: eE.intl.string(eE.t.JMfaTU),
                        imageSource: sn(a, "/assets/587c08f512a71514.png", "/assets/3308a5a697922299.svg"),
                        imageClassName: t.moreGuildsImage,
                    },
                    moreGuildsAlt: {
                        title: eE.intl.string(eE.t.Bv8Pfk),
                        description: eE.intl.string(eE.t.JMfaTU),
                        imageSource: sn(a, "/assets/f1d357c6741d62c3.svg", "/assets/8568e72f2b535d2f.svg"),
                        imageClassName: t.moreGuildsAltImage,
                    },
                    soundboard: {
                        title: eE.intl.string(eE.t["lGcW+c"]),
                        description: eE.intl.string(eE.t["/fDyO+"]),
                        imageSource: sn(a, "/assets/bd6751720573fb38.svg", "/assets/c292e42489e70696.svg"),
                        imageClassName: t.soundboardImage,
                    },
                    stickers: {
                        title: eE.intl.string(eE.t["1c+xwT"]),
                        description: eE.intl.string(eE.t.hJG8ZN),
                        imageSource: sn(a, ss, si),
                        imageClassName: t.stickersImage,
                    },
                    stickersBurst: {
                        title: eE.intl.string(eE.t.tzdIwI),
                        description: eE.intl.string(eE.t.hJG8ZN),
                        imageSource: sn(a, ss, si),
                        imageClassName: t.stickersImage,
                    },
                    stickersPremiumPerk: {
                        title: eE.intl.string(eE.t.tzdIwI),
                        description: eE.intl.string(eE.t.hJG8ZN),
                        imageSource: sn(a, ss, si),
                        imageClassName: t.stickersImage,
                    },
                    streaming: {
                        title: eE.intl.string(eE.t.RSXQYO),
                        description: eE.intl.string(eE.t.ymCPxp),
                        imageSource: "/assets/3bcdc01b26c7f691.svg",
                        imageClassName: t.streamingImage,
                    },
                    superReactions: {
                        title: eE.intl.string(eE.t["uZt5q/"]),
                        description: eE.intl.string(eE.t.ZK3ZoX),
                        imageSource: sn(a, "/assets/99b308eabe7fcfd2.svg", "/assets/fa48f6b36050a179.svg"),
                        imageClassName: t.superReactionsImage,
                    },
                    upload: {
                        title: eE.intl.formatToPlainString(eE.t.jqhAdL, { premiumMaxSize: n }),
                        description: eE.intl.formatToPlainString(eE.t["HI+cfm"], { premiumMaxSize: n }),
                        imageSource: "/assets/010eae6a6dbacc63.svg",
                        imageClassName: t.uploadImage,
                    },
                    videoBackground: {
                        title: eE.intl.string(eE.t.NaGpTf),
                        description: eE.intl.string(eE.t["A8O/Qw"]),
                        imageSource: sn(a, sa, sr),
                        imageClassName: t.videoBackgroundImage,
                    },
                };
            })({ styles: sl }),
            d = (0, eG.bG)([H.A], () => H.A.useReducedMotion),
            { analyticsLocations: m } = (0, g.Ay)(),
            u = [
                c.emoji,
                c.streaming,
                c.upload,
                c.customAppIcons,
                c.soundboard,
                c.videoBackground,
                c.superReactions,
                c.stickersPremiumPerk,
                c.badgeAlt,
            ];
        return (0, r.jsxs)("div", {
            className: l()(sl.perksContainer, t, {
                [sl.partiallyHidden]: a && !n,
                [sl.subscriberNitroHome]: a,
                [sl.reducedMotion]: d,
            }),
            children: [
                (0, r.jsx)(e_.D, {
                    variant: "heading-xxl/extrabold",
                    className: sl.perksTitle,
                    children: a ? eE.intl.string(eE.t.QX14gI) : eE.intl.string(eE.t.RGadQR),
                }),
                (0, r.jsx)("div", {
                    className: l()(sl.perkCardContainer, { [sl.perkCardContainerExpanded]: n }),
                    children: u.map((e) => null != e && (0, r.jsx)(sc, { ...e }, e.title)),
                }),
                a &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)("div", {
                                className: l()({ [sl.sizeGizmo]: !n, [sl.sizeGizmoExpanded]: n }),
                                children: (0, r.jsx)(so, {
                                    onClick: () => {
                                        M.default.track(ei.HAw.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
                                            location_stack: m,
                                            was_expanded: n,
                                        }),
                                            o(!n);
                                    },
                                    isShowingAll: n,
                                }),
                            }),
                            (0, r.jsx)("div", { className: l()(sl.cover, { [sl.hidden]: n }) }),
                        ],
                    }),
            ],
        });
    };
var sm = s(179468),
    su = s(923883),
    s_ = s(88822),
    sx = s(288894);
let sp = (e) => {
        let { inOfferExperience: t } = e;
        return t ? (0, r.jsx)(tV, { lifted: t }) : null;
    },
    sg = () => {
        (0, A.P)(j.b);
        let e = i.useRef(null),
            t = i.useRef(null),
            s = i.useRef(null),
            a = (0, J.Ay)(),
            n = (0, tA.M)(a),
            [o, d] = i.useState(!1),
            [m, u] = i.useState(!1),
            [_, x] = i.useState(!1),
            [h, f] = i.useState(!1),
            C = (0, c.bG)([R.A], () => R.A.getPremiumTypeSubscription()),
            b = null != C ? (0, z.EL)(C) : null,
            N = null != b ? z.Ay.getSkuIdForPlan(b.planId) : null,
            I = null !== N && N !== eI.pe.TIER_2 ? eI.pe.TIER_2 : null,
            T = (0, B.V)(),
            E = T?.subscription_trial?.sku_id,
            v = (0, e4.ar)(),
            S = (0, V.cg)(),
            y = (0, eK.Gh)("premium-marketing-settings-page"),
            P = S ?? !1,
            k = (0, c.bG)([tB.A], () => {
                let e = tB.A.getMarketingComponentByType(e3.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.billingSettingsNitroGiftBanner;
            }),
            { analyticsLocations: w } = (0, g.Ay)(p.A.PREMIUM_MARKETING);
        i.useEffect(() => {
            f(!0);
        }, []);
        let G = (0, r.jsx)("div", {
            className: s_.dY,
            children: (0, r.jsx)(O.L, {
                innerRef: e,
                onChange: (e) => u(e),
                threshold: 0.1,
                active: !0,
                children: (0, r.jsx)(tG.qu, {
                    innerRef: e,
                    tier0CTAButton: (0, r.jsx)(tT.A, {
                        showIcon: !1,
                        subscriptionTier: eI.pe.TIER_0,
                        className: su.Ph,
                        look: tN.pR.OUTLINED,
                        color: tN.XD.WHITE,
                        buttonShineClassName: su.Qr,
                    }),
                    tier2CTAButton:
                        E === eI.pe.TIER_0
                            ? (0, r.jsx)(tT.A, {
                                  showIcon: !1,
                                  subscriptionTier: eI.pe.TIER_2,
                                  className: su.Ph,
                                  look: tN.pR.OUTLINED,
                                  color: tN.XD.WHITE,
                                  buttonShineClassName: su.Qr,
                              })
                            : (0, r.jsx)(tT.A, {
                                  color: tN.XD.BRAND_INVERTED,
                                  showIcon: !1,
                                  subscriptionTier: eI.pe.TIER_2,
                                  className: su.Ph,
                                  hasActivePromotion: P,
                                  textOptions: { textClassName: su.Ac },
                                  buttonShineClassName: su.Qr,
                              }),
                }),
            }),
        });
        return (0, r.jsxs)("div", {
            className: s_.kL,
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, r.jsx)(tW, { premiumSubscription: C, className: l()(s_.R3, { [s_.aZ]: v }) }),
                v &&
                    (0, r.jsxs)("div", {
                        className: s_.n1,
                        children: [
                            (0, r.jsx)(sp, { inOfferExperience: v }),
                            y &&
                                (0, r.jsx)(eQ.l, {
                                    className: s_.ij,
                                    size: "md",
                                    location: p.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                    forceDarkTheme: !0,
                                }),
                        ],
                    }),
                (0, r.jsxs)("div", {
                    className: l()({ [s_.V1]: !v }),
                    children: [
                        null != k && (0, r.jsx)(tO.c, { className: s_.w$, config: k }),
                        (0, r.jsxs)("div", {
                            className: s_.iS,
                            children: [
                                y &&
                                    !v &&
                                    (0, r.jsx)(eQ.l, {
                                        className: s_.ij,
                                        size: "md",
                                        location: p.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                        forceDarkTheme: !0,
                                    }),
                                (0, r.jsx)(O.L, {
                                    innerRef: t,
                                    onChange: (e) => d(e),
                                    threshold: 0,
                                    active: !0,
                                    children: (0, r.jsx)(tw, {
                                        ref: t,
                                        subscriptionTier: I,
                                        className: l()({ [s_.p7]: v, [s_.Pw]: v, [s_.AG]: S, [s_.Cv]: null != C }),
                                        isDarkMode: n,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(t2, {}),
                G,
                (0, r.jsx)(sd, { className: s_.B_ }),
                (0, r.jsx)("div", { className: s_.aC, children: (0, r.jsx)(sm.A, { className: s_.JQ, hideCTAs: !0 }) }),
                (0, r.jsx)("div", { className: s_.hz }),
                (0, r.jsx)(tv, {
                    isVisible: !o && !m && h,
                    subscriptionTier: I,
                    isApplicationHome: !1,
                    isEligibleForBogoPromotion: S,
                }),
                (0, r.jsx)(O.L, {
                    innerRef: s,
                    onChange: (e) => {
                        e &&
                            !_ &&
                            (M.default.track(ei.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: w }),
                            x(!0));
                    },
                    children: (0, r.jsx)("div", { ref: s, className: s_._Z }),
                }),
                (0, r.jsx)("img", {
                    src: sx,
                    className: s_.Kw,
                    width: 112,
                    height: 85,
                    alt: eE.intl.string(eE.t.X4IxWL),
                }),
            ],
        });
    },
    sh = (e) => {
        let { entrypoint: t } = e,
            s = (0, B.V)(),
            a = (0, w.O)(),
            n = (0, tj.NF)({ trialOffer: s }),
            l = (0, tj.Tp)(),
            o = (0, c.bG)([G.A], () => G.A.getReminderStateId());
        return (i.useEffect(() => {
            !0 === n && (0, tj.QG)(), !0 === l && (0, tj.ne)(o), (null != s || null != a) && (0, y.u1)(s, a);
        }, [s, a, n, l, o]),
        t === eI.Mf.UserSettings)
            ? (0, r.jsx)(sg, {})
            : t === eI.Mf.ApplicationStoreHome
              ? (0, r.jsx)(tb, {})
              : null;
    };
var sf = s(972119);
let sC = function (e) {
    let { entrypoint: t = eI.Mf.UserSettings } = e;
    (0, A.P)(j.b);
    let s = (0, f.Hp)(),
        { sourceAnalyticsLocations: a, analyticsLocations: n } = (0, g.Ay)(p.A.PREMIUM_MARKETING),
        G = (0, c.bG)([R.A], () => R.A.hasFetchedSubscriptions()),
        O = (0, c.bG)([v.A], () => v.A.hasFetchedPaymentSources),
        D = (0, c.bG)([E.default], () => E.default.getCurrentUser()),
        L = D?.id,
        H = (0, B.V)(),
        U = (0, w.O)(),
        F = (0, C.Y)(eI.T7),
        [W, z] = i.useState(!0),
        V = i.useRef(0),
        K = (0, S.YE)(D, eI.PremiumTypes.TIER_2);
    (0, k.b)(),
        i.useEffect(() => {
            m.h.wait(async () => {
                let e = Date.now();
                await Promise.all([h.hP(), h.$o(), (0, u.zS)(null, null, ei.tF5.DISCOVERY)]),
                    (V.current = Date.now() - e),
                    z(!1);
            });
        }, []),
        i.useEffect(() => {
            W ||
                M.default.track(ei.HAw.PREMIUM_MARKETING_PAGE_VIEWED, {
                    location_stack: a,
                    load_duration_ms: V.current,
                });
        }, [a, W]),
        i.useEffect(() => {
            s && (null != H || null != U) && (0, y.u1)(H, U);
        }, [s, H, U]);
    let Q = (0, o.zy)(),
        Z = i.useRef(!1),
        Y = G && O && F,
        [J, q] = i.useState(Y);
    Y && !J && q(!0),
        i.useEffect(() => {
            if (Z.current || !Y) return;
            let e = new URLSearchParams(Q.search).get("checkout");
            if (null == e) return;
            let t = { nitro_basic: eI.pe.TIER_0, nitro: eI.pe.TIER_2 }[e];
            null != t &&
                ((Z.current = !0),
                (0, I.bG)(ei.BVt.APPLICATION_STORE),
                (0, N.A)({ subscriptionTier: t, analyticsLocations: n }));
        }, [Y, Q.search, n]);
    let X = (0, c.bG)([T.A], () => T.A.enabled),
        $ = t === eI.Mf.ApplicationStoreHome,
        ee = X
            ? (0, r.jsx)(_.A, {})
            : s
              ? (0, r.jsx)(b.uK, {})
              : $ && K
                ? (0, r.jsx)(g.f5, { value: n, children: (0, r.jsx)(P.Ay, { userId: L }) })
                : J
                  ? null
                  : (0, r.jsx)("div", { className: l()(sf.kL, sf.Lq), children: (0, r.jsx)(d.y, {}) });
    return null != ee
        ? (0, r.jsxs)(r.Fragment, { children: [$ && (0, r.jsx)(x.A, {}), ee] })
        : (0, r.jsx)(g.f5, { value: n, children: (0, r.jsx)(sh, { entrypoint: t }) });
};
