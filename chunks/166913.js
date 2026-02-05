n.d(t, { A: () => w });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(877624),
    o = n(311907),
    c = n(230109),
    d = n(582754),
    u = n(421380),
    _ = n(736653),
    m = n(793574),
    A = n(688810),
    g = n(726649),
    E = n(611924),
    h = n(166403),
    p = n(954571),
    C = n(927578),
    x = n(40185),
    T = n(526292),
    I = n(234419),
    S = n(412260),
    f = n(396375),
    N = n(106922),
    b = n(501007),
    R = n(901125),
    v = n(729230),
    O = n(753894),
    j = n(227273),
    P = n(252711),
    y = n(244778),
    L = n(788868),
    D = n(652215),
    M = n(985018),
    G = n(639179),
    U = n(432221),
    k = n(288894);
let B = (e) => {
        let { inOfferExperience: t } = e;
        return t ? (0, i.jsx)(v.A, { lifted: t }) : null;
    },
    w = () => {
        (0, E.P)(g.b);
        let e = s.useRef(null),
            t = s.useRef(null),
            n = s.useRef(null),
            r = (0, _.Ay)(),
            v = (0, d.Mw)(r),
            [w, H] = s.useState(!1),
            [V, F] = s.useState(!1),
            [Y, W] = s.useState(!1),
            [z, K] = s.useState(!1),
            Z = (0, o.bG)([h.A], () => h.A.getPremiumTypeSubscription()),
            X = null != Z ? (0, C.EL)(Z) : null,
            q = null != X ? C.Ay.getSkuIdForPlan(X.planId) : null,
            J = null !== q && q !== L.pe.TIER_2 ? L.pe.TIER_2 : null,
            Q = (0, I.V)(),
            $ = Q?.subscription_trial?.sku_id,
            ee = (0, T.ar)(),
            et = (0, x.cg)(),
            en = et ?? !1,
            ei = (0, o.bG)([S.A], () => {
                let e = S.A.getMarketingComponentByType(l.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.billingSettingsNitroGiftBanner;
            }),
            { analyticsLocations: es } = (0, A.Ay)(m.A.PREMIUM_MARKETING);
        s.useEffect(() => {
            K(!0);
        }, []);
        let er = (0, i.jsx)("div", {
            className: U.dY,
            children: (0, i.jsx)(c.L, {
                innerRef: e,
                onChange: (e) => F(e),
                threshold: 0.1,
                active: !0,
                children: (0, i.jsx)(b.NB, {
                    innerRef: e,
                    tier0CTAButton: (0, i.jsx)(f.A, {
                        showIcon: !1,
                        subscriptionTier: L.pe.TIER_0,
                        className: G.Ph,
                        look: u.pR.OUTLINED,
                        color: u.XD.WHITE,
                        buttonShineClassName: G.Qr,
                    }),
                    tier2CTAButton:
                        $ === L.pe.TIER_0
                            ? (0, i.jsx)(f.A, {
                                  showIcon: !1,
                                  subscriptionTier: L.pe.TIER_2,
                                  className: G.Ph,
                                  look: u.pR.OUTLINED,
                                  color: u.XD.WHITE,
                                  buttonShineClassName: G.Qr,
                              })
                            : (0, i.jsx)(f.A, {
                                  color: u.XD.BRAND_INVERTED,
                                  showIcon: !1,
                                  subscriptionTier: L.pe.TIER_2,
                                  className: G.Ph,
                                  hasActivePromotion: en,
                                  textOptions: { textClassName: G.Ac },
                                  buttonShineClassName: G.Qr,
                              }),
                }),
            }),
        });
        return (0, i.jsxs)("div", {
            className: U.kL,
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, i.jsx)(R.A, { premiumSubscription: Z, className: a()(U.R3, { [U.aZ]: ee }) }),
                (0, i.jsx)(B, { inOfferExperience: ee }),
                (0, i.jsxs)("div", {
                    className: a()({ [U.V1]: !ee }),
                    children: [
                        null != ei && (0, i.jsx)(N.c, { className: U.w$, config: ei }),
                        (0, i.jsx)(c.L, {
                            innerRef: t,
                            onChange: (e) => H(e),
                            threshold: 0,
                            active: !0,
                            children: (0, i.jsx)(O.Ay, {
                                ref: t,
                                subscriptionTier: J,
                                className: a()({ [U.p7]: ee, [U.Pw]: ee, [U.AG]: et, [U.Cv]: null != Z }),
                                isDarkMode: v,
                            }),
                        }),
                    ],
                }),
                er,
                (0, i.jsx)(j.A, { className: U.B_ }),
                (0, i.jsx)("div", { className: U.aC, children: (0, i.jsx)(y.A, { className: U.JQ, hideCTAs: !0 }) }),
                (0, i.jsx)("div", { className: U.hz }),
                (0, i.jsx)(P.A, {
                    isVisible: !w && !V && z,
                    subscriptionTier: J,
                    isApplicationHome: !1,
                    isEligibleForBogoPromotion: et,
                }),
                (0, i.jsx)(c.L, {
                    innerRef: n,
                    onChange: (e) => {
                        e &&
                            !Y &&
                            (p.default.track(D.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: es }),
                            W(!0));
                    },
                    children: (0, i.jsx)("div", { ref: n, className: U._Z }),
                }),
                (0, i.jsx)("img", { src: k, className: U.Kw, width: 112, height: 85, alt: M.intl.string(M.t.X4IxWL) }),
            ],
        });
    };
