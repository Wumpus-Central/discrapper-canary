n.d(t, { A: () => F });
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
    f = n(954571),
    T = n(927578),
    E = n(40185),
    S = n(526292),
    b = n(234419),
    C = n(690737),
    N = n(320908),
    v = n(412260),
    I = n(396375),
    j = n(106922),
    y = n(501007),
    O = n(400669),
    R = n(901125),
    L = n(729230),
    P = n(227273),
    D = n(244778),
    G = n(788868),
    M = n(652215),
    U = n(985018),
    k = n(639179),
    w = n(432221),
    V = n(288894);
let B = (e) => {
        let { inOfferExperience: t } = e;
        return t ? (0, i.jsx)(L.A, { lifted: t }) : null;
    },
    F = () => {
        (0, A.P)(x.b);
        let e = s.useRef(null),
            t = s.useRef(null),
            n = s.useRef(null),
            l = (0, m.Ay)(),
            L = (0, c.Mw)(l),
            [F, H] = s.useState(!1),
            [z, Y] = s.useState(!1),
            [X, K] = s.useState(!1),
            [W, Z] = s.useState(!1),
            q = (0, o.bG)([p.A], () => p.A.getPremiumTypeSubscription()),
            Q = null != q ? (0, T.EL)(q) : null,
            J = null != Q ? T.Ay.getSkuIdForPlan(Q.planId) : null,
            $ = null !== J && J !== G.pe.TIER_2 ? G.pe.TIER_2 : null,
            ee = (0, b.V)(),
            et = ee?.subscription_trial?.sku_id,
            en = (0, S.ar)(),
            ei = (0, E.cg)(),
            es = (0, h.Gh)("premium-marketing-settings-page"),
            el = ei ?? !1,
            ea = (0, o.bG)([v.A], () => {
                let e = v.A.getMarketingComponentByType(r.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.billingSettingsNitroGiftBanner;
            }),
            { analyticsLocations: er } = (0, _.Ay)(g.A.PREMIUM_MARKETING);
        s.useEffect(() => {
            Z(!0);
        }, []);
        let eo = (0, i.jsx)("div", {
            className: w.dY,
            children: (0, i.jsx)(d.L, {
                innerRef: e,
                onChange: (e) => Y(e),
                threshold: 0.1,
                active: !0,
                children: (0, i.jsx)(y.NB, {
                    innerRef: e,
                    tier0CTAButton: (0, i.jsx)(I.A, {
                        showIcon: !1,
                        subscriptionTier: G.pe.TIER_0,
                        className: k.Ph,
                        look: u.pR.OUTLINED,
                        color: u.XD.WHITE,
                        buttonShineClassName: k.Qr,
                    }),
                    tier2CTAButton:
                        et === G.pe.TIER_0
                            ? (0, i.jsx)(I.A, {
                                  showIcon: !1,
                                  subscriptionTier: G.pe.TIER_2,
                                  className: k.Ph,
                                  look: u.pR.OUTLINED,
                                  color: u.XD.WHITE,
                                  buttonShineClassName: k.Qr,
                              })
                            : (0, i.jsx)(I.A, {
                                  color: u.XD.BRAND_INVERTED,
                                  showIcon: !1,
                                  subscriptionTier: G.pe.TIER_2,
                                  className: k.Ph,
                                  hasActivePromotion: el,
                                  textOptions: { textClassName: k.Ac },
                                  buttonShineClassName: k.Qr,
                              }),
                }),
            }),
        });
        return (0, i.jsxs)("div", {
            className: w.kL,
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, i.jsx)(R.A, { premiumSubscription: q, className: a()(w.R3, { [w.aZ]: en }) }),
                (0, i.jsxs)("div", {
                    className: a()({ [w.n1]: en }),
                    children: [
                        (0, i.jsx)(B, { inOfferExperience: en }),
                        es && (0, i.jsx)(O.l, { className: w.ij, size: "md" }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: a()({ [w.V1]: !en }),
                    children: [
                        null != ea && (0, i.jsx)(j.c, { className: w.w$, config: ea }),
                        (0, i.jsx)(d.L, {
                            innerRef: t,
                            onChange: (e) => H(e),
                            threshold: 0,
                            active: !0,
                            children: (0, i.jsx)(N.Ay, {
                                ref: t,
                                subscriptionTier: $,
                                className: a()({ [w.p7]: en, [w.Pw]: en, [w.AG]: ei, [w.Cv]: null != q }),
                                isDarkMode: L,
                            }),
                        }),
                    ],
                }),
                eo,
                (0, i.jsx)(P.A, { className: w.B_ }),
                (0, i.jsx)("div", { className: w.aC, children: (0, i.jsx)(D.A, { className: w.JQ, hideCTAs: !0 }) }),
                (0, i.jsx)("div", { className: w.hz }),
                (0, i.jsx)(C.A, {
                    isVisible: !F && !z && W,
                    subscriptionTier: $,
                    isApplicationHome: !1,
                    isEligibleForBogoPromotion: ei,
                }),
                (0, i.jsx)(d.L, {
                    innerRef: n,
                    onChange: (e) => {
                        e &&
                            !X &&
                            (f.default.track(M.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: er }),
                            K(!0));
                    },
                    children: (0, i.jsx)("div", { ref: n, className: w._Z }),
                }),
                (0, i.jsx)("img", { src: V, className: w.Kw, width: 112, height: 85, alt: U.intl.string(U.t.X4IxWL) }),
            ],
        });
    };
