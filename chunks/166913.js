n.d(t, { A: () => H });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(877624),
    o = n(311907),
    d = n(230109),
    c = n(582754),
    u = n(421380),
    m = n(736653),
    g = n(793574),
    _ = n(688810),
    x = n(726649),
    A = n(611924),
    h = n(909536),
    p = n(166403),
    T = n(954571),
    f = n(927578),
    S = n(40185),
    b = n(526292),
    E = n(234419),
    C = n(690737),
    N = n(320908),
    v = n(412260),
    I = n(396375),
    j = n(559606),
    y = n(106922),
    O = n(400669),
    R = n(901125),
    P = n(729230),
    L = n(447675),
    D = n(227273),
    G = n(244778),
    M = n(788868),
    U = n(652215),
    k = n(985018),
    w = n(348486),
    V = n(385631),
    B = n(288894);
let F = (e) => {
        let { inOfferExperience: t } = e;
        return t ? (0, i.jsx)(P.A, { lifted: t }) : null;
    },
    H = () => {
        (0, A.P)(x.b);
        let e = s.useRef(null),
            t = s.useRef(null),
            n = s.useRef(null),
            l = (0, m.Ay)(),
            P = (0, c.Mw)(l),
            [H, z] = s.useState(!1),
            [Y, X] = s.useState(!1),
            [K, W] = s.useState(!1),
            [Z, q] = s.useState(!1),
            Q = (0, o.bG)([p.A], () => p.A.getPremiumTypeSubscription()),
            J = null != Q ? (0, f.EL)(Q) : null,
            $ = null != J ? f.Ay.getSkuIdForPlan(J.planId) : null,
            ee = null !== $ && $ !== M.pe.TIER_2 ? M.pe.TIER_2 : null,
            et = (0, E.V)(),
            en = et?.subscription_trial?.sku_id,
            ei = (0, b.ar)(),
            es = (0, S.cg)(),
            el = (0, h.Gh)("premium-marketing-settings-page"),
            ea = es ?? !1,
            er = (0, o.bG)([v.A], () => {
                let e = v.A.getMarketingComponentByType(r.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.billingSettingsNitroGiftBanner;
            }),
            { analyticsLocations: eo } = (0, _.Ay)(g.A.PREMIUM_MARKETING);
        s.useEffect(() => {
            q(!0);
        }, []);
        let ed = (0, i.jsx)("div", {
            className: V.dY,
            children: (0, i.jsx)(d.L, {
                innerRef: e,
                onChange: (e) => X(e),
                threshold: 0.1,
                active: !0,
                children: (0, i.jsx)(j.qu, {
                    innerRef: e,
                    tier0CTAButton: (0, i.jsx)(I.A, {
                        showIcon: !1,
                        subscriptionTier: M.pe.TIER_0,
                        className: w.Ph,
                        look: u.pR.OUTLINED,
                        color: u.XD.WHITE,
                        buttonShineClassName: w.Qr,
                    }),
                    tier2CTAButton:
                        en === M.pe.TIER_0
                            ? (0, i.jsx)(I.A, {
                                  showIcon: !1,
                                  subscriptionTier: M.pe.TIER_2,
                                  className: w.Ph,
                                  look: u.pR.OUTLINED,
                                  color: u.XD.WHITE,
                                  buttonShineClassName: w.Qr,
                              })
                            : (0, i.jsx)(I.A, {
                                  color: u.XD.BRAND_INVERTED,
                                  showIcon: !1,
                                  subscriptionTier: M.pe.TIER_2,
                                  className: w.Ph,
                                  hasActivePromotion: ea,
                                  textOptions: { textClassName: w.Ac },
                                  buttonShineClassName: w.Qr,
                              }),
                }),
            }),
        });
        return (0, i.jsxs)("div", {
            className: V.kL,
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, i.jsx)(R.A, { premiumSubscription: Q, className: a()(V.R3, { [V.aZ]: ei }) }),
                (0, i.jsxs)("div", {
                    className: a()({ [V.n1]: ei }),
                    children: [
                        (0, i.jsx)(F, { inOfferExperience: ei }),
                        el &&
                            (0, i.jsx)(O.l, {
                                className: V.ij,
                                size: "md",
                                location: g.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                forceDarkTheme: !0,
                            }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: a()({ [V.V1]: !ei }),
                    children: [
                        null != er && (0, i.jsx)(y.c, { className: V.w$, config: er }),
                        (0, i.jsx)(d.L, {
                            innerRef: t,
                            onChange: (e) => z(e),
                            threshold: 0,
                            active: !0,
                            children: (0, i.jsx)(N.Ay, {
                                ref: t,
                                subscriptionTier: ee,
                                className: a()({ [V.p7]: ei, [V.Pw]: ei, [V.AG]: es, [V.Cv]: null != Q }),
                                isDarkMode: P,
                            }),
                        }),
                    ],
                }),
                (0, i.jsx)(L.A, {}),
                ed,
                (0, i.jsx)(D.A, { className: V.B_ }),
                (0, i.jsx)("div", { className: V.aC, children: (0, i.jsx)(G.A, { className: V.JQ, hideCTAs: !0 }) }),
                (0, i.jsx)("div", { className: V.hz }),
                (0, i.jsx)(C.A, {
                    isVisible: !H && !Y && Z,
                    subscriptionTier: ee,
                    isApplicationHome: !1,
                    isEligibleForBogoPromotion: es,
                }),
                (0, i.jsx)(d.L, {
                    innerRef: n,
                    onChange: (e) => {
                        e &&
                            !K &&
                            (T.default.track(U.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: eo }),
                            W(!0));
                    },
                    children: (0, i.jsx)("div", { ref: n, className: V._Z }),
                }),
                (0, i.jsx)("img", { src: B, className: V.Kw, width: 112, height: 85, alt: k.intl.string(k.t.X4IxWL) }),
            ],
        });
    };
