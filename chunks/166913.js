s.d(t, { A: () => W });
var r = s(627968),
    a = s(64700),
    i = s(503698),
    n = s.n(i),
    l = s(877624),
    o = s(311907),
    c = s(230109),
    d = s(462887),
    m = s(862482),
    u = s(736653),
    _ = s(793574),
    x = s(688810),
    p = s(726649),
    g = s(611924),
    h = s(909536),
    f = s(166403),
    C = s(954571),
    b = s(927578),
    j = s(40185),
    A = s(526292),
    N = s(234419),
    I = s(690737),
    T = s(320908),
    v = s(412260),
    E = s(396375),
    R = s(559606),
    M = s(106922),
    S = s(400669),
    y = s(901125),
    P = s(729230),
    k = s(447675),
    B = s(227273),
    w = s(244778),
    G = s(788868),
    O = s(652215),
    D = s(985018),
    L = s(923883),
    H = s(88822),
    U = s(288894);
let F = (e) => {
        let { inOfferExperience: t } = e;
        return t ? (0, r.jsx)(P.A, { lifted: t }) : null;
    },
    W = () => {
        (0, g.P)(p.b);
        let e = a.useRef(null),
            t = a.useRef(null),
            s = a.useRef(null),
            i = (0, u.Ay)(),
            P = (0, d.M)(i),
            [W, z] = a.useState(!1),
            [V, K] = a.useState(!1),
            [Q, Z] = a.useState(!1),
            [Y, J] = a.useState(!1),
            X = (0, o.bG)([f.A], () => f.A.getPremiumTypeSubscription()),
            q = null != X ? (0, b.EL)(X) : null,
            $ = null != q ? b.Ay.getSkuIdForPlan(q.planId) : null,
            ee = null !== $ && $ !== G.pe.TIER_2 ? G.pe.TIER_2 : null,
            et = (0, N.V)(),
            es = et?.subscription_trial?.sku_id,
            er = (0, A.ar)(),
            ea = (0, j.cg)(),
            ei = (0, h.Gh)("premium-marketing-settings-page"),
            en = ea ?? !1,
            el = (0, o.bG)([v.A], () => {
                let e = v.A.getMarketingComponentByType(l.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.billingSettingsNitroGiftBanner;
            }),
            { analyticsLocations: eo } = (0, x.Ay)(_.A.PREMIUM_MARKETING);
        a.useEffect(() => {
            J(!0);
        }, []);
        let ec = (0, r.jsx)("div", {
            className: H.dY,
            children: (0, r.jsx)(c.L, {
                innerRef: e,
                onChange: (e) => K(e),
                threshold: 0.1,
                active: !0,
                children: (0, r.jsx)(R.qu, {
                    innerRef: e,
                    tier0CTAButton: (0, r.jsx)(E.A, {
                        showIcon: !1,
                        subscriptionTier: G.pe.TIER_0,
                        className: L.Ph,
                        look: m.pR.OUTLINED,
                        color: m.XD.WHITE,
                        buttonShineClassName: L.Qr,
                    }),
                    tier2CTAButton:
                        es === G.pe.TIER_0
                            ? (0, r.jsx)(E.A, {
                                  showIcon: !1,
                                  subscriptionTier: G.pe.TIER_2,
                                  className: L.Ph,
                                  look: m.pR.OUTLINED,
                                  color: m.XD.WHITE,
                                  buttonShineClassName: L.Qr,
                              })
                            : (0, r.jsx)(E.A, {
                                  color: m.XD.BRAND_INVERTED,
                                  showIcon: !1,
                                  subscriptionTier: G.pe.TIER_2,
                                  className: L.Ph,
                                  hasActivePromotion: en,
                                  textOptions: { textClassName: L.Ac },
                                  buttonShineClassName: L.Qr,
                              }),
                }),
            }),
        });
        return (0, r.jsxs)("div", {
            className: H.kL,
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, r.jsx)(y.A, { premiumSubscription: X, className: n()(H.R3, { [H.aZ]: er }) }),
                er &&
                    (0, r.jsxs)("div", {
                        className: H.n1,
                        children: [
                            (0, r.jsx)(F, { inOfferExperience: er }),
                            ei &&
                                (0, r.jsx)(S.l, {
                                    className: H.ij,
                                    size: "md",
                                    location: _.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                    forceDarkTheme: !0,
                                }),
                        ],
                    }),
                (0, r.jsxs)("div", {
                    className: n()({ [H.V1]: !er }),
                    children: [
                        null != el && (0, r.jsx)(M.c, { className: H.w$, config: el }),
                        (0, r.jsxs)("div", {
                            className: H.iS,
                            children: [
                                ei &&
                                    !er &&
                                    (0, r.jsx)(S.l, {
                                        className: H.ij,
                                        size: "md",
                                        location: _.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                        forceDarkTheme: !0,
                                    }),
                                (0, r.jsx)(c.L, {
                                    innerRef: t,
                                    onChange: (e) => z(e),
                                    threshold: 0,
                                    active: !0,
                                    children: (0, r.jsx)(T.Ay, {
                                        ref: t,
                                        subscriptionTier: ee,
                                        className: n()({ [H.p7]: er, [H.Pw]: er, [H.AG]: ea, [H.Cv]: null != X }),
                                        isDarkMode: P,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(k.A, {}),
                ec,
                (0, r.jsx)(B.A, { className: H.B_ }),
                (0, r.jsx)("div", { className: H.aC, children: (0, r.jsx)(w.A, { className: H.JQ, hideCTAs: !0 }) }),
                (0, r.jsx)("div", { className: H.hz }),
                (0, r.jsx)(I.A, {
                    isVisible: !W && !V && Y,
                    subscriptionTier: ee,
                    isApplicationHome: !1,
                    isEligibleForBogoPromotion: ea,
                }),
                (0, r.jsx)(c.L, {
                    innerRef: s,
                    onChange: (e) => {
                        e &&
                            !Q &&
                            (C.default.track(O.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: eo }),
                            Z(!0));
                    },
                    children: (0, r.jsx)("div", { ref: s, className: H._Z }),
                }),
                (0, r.jsx)("img", { src: U, className: H.Kw, width: 112, height: 85, alt: D.intl.string(D.t.X4IxWL) }),
            ],
        });
    };
