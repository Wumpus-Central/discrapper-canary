n.d(t, {
    A: () => J,
}),
    n(896048),
    n(680155),
    n(323874),
    n(14289),
    n(35956),
    n(747238);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(960488),
    l = n(311907),
    c = n(230109),
    u = n(582754),
    d = n(397927),
    f = n(736653),
    p = n(775602),
    _ = n(793574),
    h = n(688810),
    m = n(726649),
    g = n(611924),
    E = n(166403),
    y = n(816733),
    b = n(954571),
    O = n(927578),
    v = n(40185),
    A = n(804412),
    I = n(170887),
    S = n(422936),
    T = n(234419),
    C = n(130946),
    N = n(407775),
    w = n(501007),
    R = n(26010),
    P = n(54009),
    D = n(252711),
    x = n(584767),
    L = n(191430),
    j = n(475805),
    M = n(564230),
    k = n(974005),
    U = n(305714),
    G = n(658137),
    V = n(57978),
    F = n(694195),
    B = n(716442),
    H = n(704877),
    Y = n(788868),
    W = n(652215),
    K = n(818348),
    z = n(549447),
    q = n(66283),
    Z = n(122402);
let X = "section",
    Q = "orbs",
    J = () => {
        let e = (0, o.zy)();
        (0, g.P)(m.b);
        let t = i.useRef(null),
            n = i.useRef(null),
            a = i.useRef(null),
            J = i.useRef(null),
            $ = i.useRef(null),
            ee = i.useRef(null),
            et = (0, l.bG)([p.A], () => p.A.useReducedMotion),
            en = (0, f.Ay)(),
            er = (0, u.Mw)(en),
            [ei, ea] = i.useState(!1),
            [es, eo] = i.useState(!1),
            [el, ec] = i.useState(!1),
            [eu, ed] = i.useState(!1),
            [ef, ep] = i.useState(!1),
            e_ = (0, l.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
            eh = null != e_ ? (0, O.EL)(e_) : null,
            em = null != eh ? O.Ay.getSkuIdForPlan(eh.planId) : null,
            eg = null !== em && em !== Y.pe.TIER_2 ? Y.pe.TIER_2 : null,
            eE = (0, v.cg)(),
            ey = null != eE && eE,
            { analyticsLocations: eb } = (0, h.Ay)(_.A.PREMIUM_MARKETING),
            eO = (0, I.A)({
                location: "PremiumMarketing",
            }),
            ev = !ei && !el && (eO || !es);
        i.useEffect(() => {
            ep(!0);
        }, []),
            i.useEffect(() => {
                if (!ef || new URLSearchParams(e.search).get(X) !== Q) return;
                let t = requestAnimationFrame(() => {
                    let e = document.getElementById(V.NI.ORB_REWARDS);
                    null != e &&
                        e.scrollIntoView({
                            behavior: et ? "auto" : "smooth",
                            block: "start",
                        });
                });
                return () => cancelAnimationFrame(t);
            }, [e.search, ef, et]);
        let eA = [B.k.HOME, B.k.WHATS_NEW, B.k.BEST_OF_NITRO, B.k.PLANS, B.k.COMPARE],
            { navBarSections: eI, activeSectionId: eS } = (0, F.o)(eA),
            { home: eT, whatsNew: eC, bestOfNitro: eN, plans: ew, compare: eR } = eI,
            eP = eO ? z : q,
            { variant: eD } = (0, A.Ay)("PremiumBrandRefreshMarketingHeroHeading"),
            ex = (0, T.V)(),
            eL = (0, S.O)(),
            ej =
                y.A.getAlmostExpiringTrialOffers([Y.pe.TIER_2]).length > 0 &&
                null != ex &&
                null != ex.expires_at &&
                ex.trial_id !== Y.Dw,
            eM = y.A.getAlmostExpiringDiscountOffers([Y.pe.TIER_2]).length > 0 && null != eL && null != eL.expires_at,
            ek = ej ? ex.expires_at : eM ? eL.expires_at : null,
            eU = eD === A.CJ.HERO_COUNTDOWN && (ej || eM) && null != ek,
            eG = (0, r.jsxs)("div", {
                className: s()(eP.container, eP.responsiveContainer, {
                    [eP.containerBackground]: eO || er,
                    [z.fadeInFromTop]: !et && eO,
                }),
                "data-cy": "tier-0-marketing-page",
                children: [
                    eO &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(P.A, {
                                    className: s()(z.topOfPageGradient, {
                                        [z.topOfPageGradientWithCountdown]: eU,
                                    }),
                                }),
                                (0, r.jsx)(H.A, {
                                    navBarSections: eI,
                                    activeSectionId: eS,
                                }),
                            ],
                        }),
                    !eO &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)("div", {
                                    className: q.heroHeaderSideGradient,
                                }),
                                (0, r.jsx)("img", {
                                    src: Z,
                                    className: q.heroHeaderBackgroundStars,
                                    alt: "",
                                }),
                            ],
                        }),
                    (0, r.jsxs)("div", {
                        className: eP.sectionsContainer,
                        children: [
                            (0, r.jsx)("div", {
                                className: eP.heroHeadingContainer,
                                ref: eT.ref,
                                children: (0, r.jsx)(c.L, {
                                    innerRef: J,
                                    onChange: (e) => ea(e),
                                    threshold: 0,
                                    active: !0,
                                    children: eO
                                        ? (0, r.jsx)(j.A, {
                                              ref: J,
                                              subscriptionTier: eg,
                                              isEligibleForBogoPromotion: eE,
                                              offerExpiresAt: eU ? ek : null,
                                          })
                                        : (0, r.jsx)(G.A, {
                                              ref: J,
                                              subscriptionTier: eg,
                                              isDarkMode: er,
                                              isEligibleForBogoPromotion: eE,
                                              videoRef: n,
                                          }),
                                }),
                            }),
                            eE &&
                                (0, r.jsx)("div", {
                                    className: eP.promoBannerContainer,
                                    children: (0, r.jsx)(C.A, {
                                        variant: C.c.APPLICATION_NITRO_HOME,
                                    }),
                                }),
                            (0, r.jsx)("div", {
                                className: eP.whatsNewSectionContainer,
                                ref: eC.ref,
                                children: (0, r.jsx)(R.Ct, {
                                    shouldLoadVideo: ef,
                                    isReducedMotion: et,
                                    enablePremiumBrandRefreshDesign: eO,
                                }),
                            }),
                            (0, r.jsx)("div", {
                                className: eP.bestOfNitroSectionContainer,
                                ref: eN.ref,
                                children: (0, r.jsx)(R.oO, {
                                    shouldLoadVideo: ef,
                                    isReducedMotion: et,
                                    enablePremiumBrandRefreshDesign: eO,
                                }),
                            }),
                            (0, r.jsx)("div", {
                                className: eP.premiumTierCardsContainer,
                                ref: ew.ref,
                                children: (0, r.jsx)(c.L, {
                                    innerRef: a,
                                    onChange: (e) => ec(e),
                                    threshold: 0.1,
                                    active: !0,
                                    children: eO
                                        ? (0, r.jsx)(N.hy, {
                                              innerRef: a,
                                          })
                                        : (0, r.jsx)(w.jP, {
                                              innerRef: a,
                                              hasActiveTier2PremiumPromotion: ey,
                                          }),
                                }),
                            }),
                            (0, r.jsx)("div", {
                                className: eP.planComparisonTableContainer,
                                ref: eR.ref,
                                children: eO ? (0, r.jsx)(k.A, {}) : (0, r.jsx)(x.A, {}),
                            }),
                        ],
                    }),
                    !eO &&
                        (0, r.jsx)(D.A, {
                            isVisible: ev && ef,
                            subscriptionTier: eg,
                            isApplicationHome: !0,
                            isEligibleForBogoPromotion: eE,
                        }),
                    (0, r.jsx)(c.L, {
                        innerRef: $,
                        onChange: (e) => {
                            e &&
                                !eu &&
                                (b.default.track(W.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                    location_stack: eb,
                                }),
                                ed(!0));
                        },
                        children: (0, r.jsx)("div", {
                            ref: $,
                            className: eP.bottomOfPageVisibilitySensor,
                        }),
                    }),
                    (0, r.jsx)(c.L, {
                        innerRef: ee,
                        onChange: (e) => {
                            eo(e);
                        },
                        children: eO
                            ? (0, r.jsx)(L.A, {
                                  ref: ee,
                              })
                            : (0, r.jsx)(U.A, {
                                  ref: ee,
                                  isFooterVisible: es,
                                  isDarkMode: er,
                                  isReducedMotion: et,
                                  subscriptionTier: eg,
                              }),
                    }),
                    eO &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(M.A, {
                                    isVisible: ev && ef,
                                    subscriptionTier: eg,
                                    isEligibleForBogoPromotion: eE,
                                }),
                                (0, r.jsx)(P.A, {
                                    className: z.bottomOfPageGradient,
                                }),
                            ],
                        }),
                ],
            });
        return (0, r.jsx)(d.NPJ, {
            theme: eO ? K.NJ.DARKER : en,
            children: (e) =>
                (0, r.jsx)(d.GtU, {
                    className: s()(eP.scroller, e),
                    ref: t,
                    children: eG,
                }),
        });
    };
