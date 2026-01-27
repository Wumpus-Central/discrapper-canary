n.d(t, {
    A: () => V,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(877624),
    o = n(311907),
    c = n(230109),
    d = n(582754),
    u = n(421380),
    _ = n(736653),
    p = n(793574),
    m = n(688810),
    g = n(726649),
    A = n(611924),
    f = n(166403),
    h = n(954571),
    b = n(927578),
    E = n(40185),
    x = n(526292),
    O = n(234419),
    C = n(412260),
    I = n(396375),
    T = n(106922),
    S = n(501007),
    j = n(901125),
    v = n(729230),
    N = n(753894),
    y = n(227273),
    P = n(252711),
    R = n(244778),
    D = n(788868),
    w = n(652215),
    L = n(985018),
    M = n(639179),
    U = n(432221),
    G = n(288894);
let k = (e) => {
        let { inOfferExperience: t } = e;
        return t
            ? (0, r.jsx)(v.A, {
                  lifted: t,
              })
            : null;
    },
    V = () => {
        var e;
        (0, A.P)(g.b);
        let t = i.useRef(null),
            n = i.useRef(null),
            l = i.useRef(null),
            v = (0, _.Ay)(),
            V = (0, d.Mw)(v),
            [H, B] = i.useState(!1),
            [F, Y] = i.useState(!1),
            [W, z] = i.useState(!1),
            [K, Z] = i.useState(!1),
            X = (0, o.bG)([f.A], () => f.A.getPremiumTypeSubscription()),
            q = null != X ? (0, b.EL)(X) : null,
            J = null != q ? b.Ay.getSkuIdForPlan(q.planId) : null,
            Q = null !== J && J !== D.pe.TIER_2 ? D.pe.TIER_2 : null,
            $ = (0, O.V)(),
            ee = null == $ || null == (e = $.subscription_trial) ? void 0 : e.sku_id,
            et = (0, x.ar)(),
            en = (0, E.cg)(),
            er = null != en && en,
            ei = (0, o.bG)([C.A], () => {
                let e = C.A.getMarketingComponentByType(a.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.billingSettingsNitroGiftBanner;
            }),
            { analyticsLocations: el } = (0, m.Ay)(p.A.PREMIUM_MARKETING);
        i.useEffect(() => {
            Z(!0);
        }, []);
        let es = (0, r.jsx)("div", {
            className: U.dY,
            children: (0, r.jsx)(c.L, {
                innerRef: t,
                onChange: (e) => Y(e),
                threshold: 0.1,
                active: !0,
                children: (0, r.jsx)(S.NB, {
                    innerRef: t,
                    tier0CTAButton: (0, r.jsx)(I.A, {
                        showIcon: !1,
                        subscriptionTier: D.pe.TIER_0,
                        className: M.Ph,
                        look: u.pR.OUTLINED,
                        color: u.XD.WHITE,
                        buttonShineClassName: M.Qr,
                    }),
                    tier2CTAButton:
                        ee === D.pe.TIER_0
                            ? (0, r.jsx)(I.A, {
                                  showIcon: !1,
                                  subscriptionTier: D.pe.TIER_2,
                                  className: M.Ph,
                                  look: u.pR.OUTLINED,
                                  color: u.XD.WHITE,
                                  buttonShineClassName: M.Qr,
                              })
                            : (0, r.jsx)(I.A, {
                                  color: u.XD.BRAND_INVERTED,
                                  showIcon: !1,
                                  subscriptionTier: D.pe.TIER_2,
                                  className: M.Ph,
                                  hasActivePromotion: er,
                                  textOptions: {
                                      textClassName: M.Ac,
                                  },
                                  buttonShineClassName: M.Qr,
                              }),
                }),
            }),
        });
        return (0, r.jsxs)("div", {
            className: U.kL,
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, r.jsx)(j.A, {
                    premiumSubscription: X,
                    className: s()(U.R3, {
                        [U.aZ]: et,
                    }),
                }),
                (0, r.jsx)(k, {
                    inOfferExperience: et,
                }),
                (0, r.jsxs)("div", {
                    className: s()({
                        [U.V1]: !et,
                    }),
                    children: [
                        null != ei &&
                            (0, r.jsx)(T.c, {
                                className: U.w$,
                                config: ei,
                            }),
                        (0, r.jsx)(c.L, {
                            innerRef: n,
                            onChange: (e) => B(e),
                            threshold: 0,
                            active: !0,
                            children: (0, r.jsx)(N.Ay, {
                                ref: n,
                                subscriptionTier: Q,
                                className: s()({
                                    [U.p7]: et,
                                    [U.Pw]: et,
                                    [U.AG]: en,
                                    [U.Cv]: null != X,
                                }),
                                isDarkMode: V,
                            }),
                        }),
                    ],
                }),
                es,
                (0, r.jsx)(y.A, {
                    className: U.B_,
                }),
                (0, r.jsx)("div", {
                    className: U.aC,
                    children: (0, r.jsx)(R.A, {
                        className: U.JQ,
                        hideCTAs: !0,
                    }),
                }),
                (0, r.jsx)("div", {
                    className: U.hz,
                }),
                (0, r.jsx)(P.A, {
                    isVisible: !H && !F && K,
                    subscriptionTier: Q,
                    isApplicationHome: !1,
                    isEligibleForBogoPromotion: en,
                }),
                (0, r.jsx)(c.L, {
                    innerRef: l,
                    onChange: (e) => {
                        e &&
                            !W &&
                            (h.default.track(w.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                location_stack: el,
                            }),
                            z(!0));
                    },
                    children: (0, r.jsx)("div", {
                        ref: l,
                        className: U._Z,
                    }),
                }),
                (0, r.jsx)("img", {
                    src: G,
                    className: U.Kw,
                    width: 112,
                    height: 85,
                    alt: L.intl.string(L.t.X4IxWL),
                }),
            ],
        });
    };
