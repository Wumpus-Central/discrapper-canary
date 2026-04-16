n.d(t, { A: () => H });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(877624),
    o = n(311907),
    d = n(230109),
    c = n(582754),
    u = n(421380),
    m = n(736653),
    g = n(793574),
    _ = n(688810),
    x = n(726649),
    h = n(611924),
    A = n(909536),
    p = n(166403),
    T = n(954571),
    f = n(927578),
    S = n(40185),
    E = n(526292),
    b = n(234419),
    C = n(690737),
    v = n(320908),
    N = n(412260),
    I = n(396375),
    j = n(559606),
    y = n(106922),
    O = n(400669),
    R = n(901125),
    L = n(729230),
    P = n(447675),
    D = n(227273),
    G = n(244778),
    M = n(788868),
    U = n(652215),
    k = n(985018),
    w = n(923883),
    V = n(88822),
    B = n(288894);
let F = (e) => {
        let { inOfferExperience: t } = e;
        return t ? (0, i.jsx)(L.A, { lifted: t }) : null;
    },
    H = () => {
        (0, h.P)(x.b);
        let e = s.useRef(null),
            t = s.useRef(null),
            n = s.useRef(null),
            l = (0, m.Ay)(),
            L = (0, c.Mw)(l),
            [H, z] = s.useState(!1),
            [Y, X] = s.useState(!1),
            [K, W] = s.useState(!1),
            [Z, q] = s.useState(!1),
            Q = (0, o.bG)([p.A], () => p.A.getPremiumTypeSubscription()),
            J = null != Q ? (0, f.EL)(Q) : null,
            $ = null != J ? f.Ay.getSkuIdForPlan(J.planId) : null,
            ee = null !== $ && $ !== M.pe.TIER_2 ? M.pe.TIER_2 : null,
            et = (0, b.V)(),
            en = et?.subscription_trial?.sku_id,
            ei = (0, E.ar)(),
            es = (0, S.cg)(),
            el = (0, A.Gh)("premium-marketing-settings-page"),
            er = es ?? !1,
            ea = (0, o.bG)([N.A], () => {
                let e = N.A.getMarketingComponentByType(a.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
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
                                  hasActivePromotion: er,
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
                (0, i.jsx)(R.A, { premiumSubscription: Q, className: r()(V.R3, { [V.aZ]: ei }) }),
                ei &&
                    (0, i.jsxs)("div", {
                        className: V.n1,
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
                    className: r()({ [V.V1]: !ei }),
                    children: [
                        null != ea && (0, i.jsx)(y.c, { className: V.w$, config: ea }),
                        (0, i.jsxs)("div", {
                            className: V.iS,
                            children: [
                                el &&
                                    !ei &&
                                    (0, i.jsx)(O.l, {
                                        className: V.ij,
                                        size: "md",
                                        location: g.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                        forceDarkTheme: !0,
                                    }),
                                (0, i.jsx)(d.L, {
                                    innerRef: t,
                                    onChange: (e) => z(e),
                                    threshold: 0,
                                    active: !0,
                                    children: (0, i.jsx)(v.Ay, {
                                        ref: t,
                                        subscriptionTier: ee,
                                        className: r()({ [V.p7]: ei, [V.Pw]: ei, [V.AG]: es, [V.Cv]: null != Q }),
                                        isDarkMode: L,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)(P.A, {}),
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
