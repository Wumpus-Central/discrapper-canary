n.d(t, {
    A: () => V,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(877624),
    l = n(311907),
    c = n(230109),
    u = n(582754),
    d = n(421380),
    f = n(736653),
    p = n(793574),
    _ = n(688810),
    h = n(726649),
    m = n(611924),
    g = n(166403),
    E = n(954571),
    y = n(927578),
    b = n(40185),
    O = n(526292),
    v = n(234419),
    A = n(412260),
    I = n(396375),
    S = n(106922),
    T = n(501007),
    C = n(901125),
    N = n(729230),
    w = n(753894),
    R = n(227273),
    P = n(252711),
    D = n(244778),
    x = n(788868),
    L = n(652215),
    j = n(985018),
    M = n(639179),
    k = n(432221),
    U = n(288894);
let G = (e) => {
        let { inOfferExperience: t } = e;
        return t
            ? (0, r.jsx)(N.A, {
                  lifted: t,
              })
            : null;
    },
    V = () => {
        var e;
        (0, m.P)(h.b);
        let t = i.useRef(null),
            n = i.useRef(null),
            a = i.useRef(null),
            N = (0, f.Ay)(),
            V = (0, u.Mw)(N),
            [F, B] = i.useState(!1),
            [H, Y] = i.useState(!1),
            [W, K] = i.useState(!1),
            z = !F && !H,
            [q, Z] = i.useState(!1),
            X = (0, l.bG)([g.A], () => g.A.getPremiumTypeSubscription()),
            Q = null != X ? (0, y.EL)(X) : null,
            J = null != Q ? y.Ay.getSkuIdForPlan(Q.planId) : null,
            $ = null !== J && J !== x.pe.TIER_2 ? x.pe.TIER_2 : null,
            ee = (0, v.V)(),
            et = null == ee || null == (e = ee.subscription_trial) ? void 0 : e.sku_id,
            en = (0, O.ar)(),
            er = (0, b.cg)(),
            ei = null != er && er,
            ea = (0, l.bG)([A.A], () => {
                let e = A.A.getMarketingComponentByType(o.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.billingSettingsNitroGiftBanner;
            }),
            { analyticsLocations: es } = (0, _.Ay)(p.A.PREMIUM_MARKETING);
        i.useEffect(() => {
            Z(!0);
        }, []);
        let eo = (0, r.jsx)("div", {
            className: k.dY,
            children: (0, r.jsx)(c.L, {
                innerRef: t,
                onChange: (e) => Y(e),
                threshold: 0.1,
                active: !0,
                children: (0, r.jsx)(T.NB, {
                    innerRef: t,
                    tier0CTAButton: (0, r.jsx)(I.A, {
                        showIcon: !1,
                        subscriptionTier: x.pe.TIER_0,
                        className: M.Ph,
                        look: d.pR.OUTLINED,
                        color: d.XD.WHITE,
                        buttonShineClassName: M.Qr,
                    }),
                    tier2CTAButton:
                        et === x.pe.TIER_0
                            ? (0, r.jsx)(I.A, {
                                  showIcon: !1,
                                  subscriptionTier: x.pe.TIER_2,
                                  className: M.Ph,
                                  look: d.pR.OUTLINED,
                                  color: d.XD.WHITE,
                                  buttonShineClassName: M.Qr,
                              })
                            : (0, r.jsx)(I.A, {
                                  color: d.XD.BRAND_INVERTED,
                                  showIcon: !1,
                                  subscriptionTier: x.pe.TIER_2,
                                  className: M.Ph,
                                  hasActivePromotion: ei,
                                  textOptions: {
                                      textClassName: M.Ac,
                                  },
                                  buttonShineClassName: M.Qr,
                              }),
                }),
            }),
        });
        return (0, r.jsxs)("div", {
            className: k.kL,
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, r.jsx)(C.A, {
                    premiumSubscription: X,
                    className: s()(k.R3, {
                        [k.aZ]: en,
                    }),
                }),
                (0, r.jsx)(G, {
                    inOfferExperience: en,
                }),
                (0, r.jsxs)("div", {
                    className: s()({
                        [k.V1]: !en,
                    }),
                    children: [
                        null != ea &&
                            (0, r.jsx)(S.c, {
                                className: k.w$,
                                config: ea,
                            }),
                        (0, r.jsx)(c.L, {
                            innerRef: n,
                            onChange: (e) => B(e),
                            threshold: 0,
                            active: !0,
                            children: (0, r.jsx)(w.Ay, {
                                ref: n,
                                subscriptionTier: $,
                                className: s()({
                                    [k.p7]: en,
                                    [k.Pw]: en,
                                    [k.AG]: er,
                                    [k.Cv]: null != X,
                                }),
                                isDarkMode: V,
                            }),
                        }),
                    ],
                }),
                eo,
                (0, r.jsx)(R.A, {
                    className: k.B_,
                }),
                (0, r.jsx)("div", {
                    className: k.aC,
                    children: (0, r.jsx)(D.A, {
                        className: k.JQ,
                        hideCTAs: !0,
                    }),
                }),
                (0, r.jsx)("div", {
                    className: k.hz,
                }),
                (0, r.jsx)(P.A, {
                    isVisible: z && q,
                    subscriptionTier: $,
                    isApplicationHome: !1,
                    isEligibleForBogoPromotion: er,
                }),
                (0, r.jsx)(c.L, {
                    innerRef: a,
                    onChange: (e) => {
                        e &&
                            !W &&
                            (E.default.track(L.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                location_stack: es,
                            }),
                            K(!0));
                    },
                    children: (0, r.jsx)("div", {
                        ref: a,
                        className: k._Z,
                    }),
                }),
                (0, r.jsx)("img", {
                    src: U,
                    className: k.Kw,
                    width: 112,
                    height: 85,
                    alt: j.intl.string(j.t.X4IxWL),
                }),
            ],
        });
    };
