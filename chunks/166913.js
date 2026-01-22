n.d(t, { A: () => G }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(230109),
    c = n(582754),
    u = n(421380),
    d = n(736653),
    f = n(793574),
    p = n(688810),
    _ = n(726649),
    h = n(611924),
    m = n(166403),
    g = n(954571),
    E = n(927578),
    b = n(40185),
    y = n(526292),
    O = n(552736),
    A = n(234419),
    v = n(396375),
    S = n(106922),
    I = n(501007),
    T = n(901125),
    C = n(729230),
    N = n(753894),
    R = n(227273),
    w = n(252711),
    P = n(244778),
    D = n(788868),
    x = n(652215),
    L = n(985018),
    j = n(639179),
    M = n(432221),
    k = n(288894);
let U = (e) => {
        let { inOfferExperience: t } = e;
        return t ? (0, r.jsx)(C.A, { lifted: t }) : null;
    },
    G = () => {
        var e, t;
        (0, h.P)(_.b);
        let n = i.useRef(null),
            a = i.useRef(null),
            C = i.useRef(null),
            G = (0, d.Ay)(),
            V = (0, c.Mw)(G),
            [F, B] = i.useState(!1),
            [H, Y] = i.useState(!1),
            [W, K] = i.useState(!1),
            z = !F && !H,
            [q, X] = i.useState(!1),
            Z = (0, o.bG)([m.A], () => m.A.getPremiumTypeSubscription()),
            Q = null != Z ? (0, E.EL)(Z) : null,
            $ = null != Q ? E.Ay.getSkuIdForPlan(Q.planId) : null,
            J = null !== $ && $ !== D.pe.TIER_2 ? D.pe.TIER_2 : null,
            ee = (0, A.V)(),
            et = null == ee || null == (e = ee.subscription_trial) ? void 0 : e.sku_id,
            en = (0, y.ar)(),
            er = (0, b.cg)(),
            ei = null != er && er,
            ea = null == (t = (0, O.A)()) ? void 0 : t.billingSettingsMarketingBanner,
            { analyticsLocations: es } = (0, p.Ay)(f.A.PREMIUM_MARKETING);
        i.useEffect(() => {
            X(!0);
        }, []);
        let eo = (0, r.jsx)("div", {
            className: M.dY,
            children: (0, r.jsx)(l.L, {
                innerRef: n,
                onChange: (e) => Y(e),
                threshold: 0.1,
                active: !0,
                children: (0, r.jsx)(I.NB, {
                    innerRef: n,
                    tier0CTAButton: (0, r.jsx)(v.A, {
                        showIcon: !1,
                        subscriptionTier: D.pe.TIER_0,
                        className: j.Ph,
                        look: u.pR.OUTLINED,
                        color: u.XD.WHITE,
                        buttonShineClassName: j.Qr,
                    }),
                    tier2CTAButton:
                        et === D.pe.TIER_0
                            ? (0, r.jsx)(v.A, {
                                  showIcon: !1,
                                  subscriptionTier: D.pe.TIER_2,
                                  className: j.Ph,
                                  look: u.pR.OUTLINED,
                                  color: u.XD.WHITE,
                                  buttonShineClassName: j.Qr,
                              })
                            : (0, r.jsx)(v.A, {
                                  color: u.XD.BRAND_INVERTED,
                                  showIcon: !1,
                                  subscriptionTier: D.pe.TIER_2,
                                  className: j.Ph,
                                  hasActivePromotion: ei,
                                  textOptions: { textClassName: j.Ac },
                                  buttonShineClassName: j.Qr,
                              }),
                }),
            }),
        });
        return (0, r.jsxs)("div", {
            className: M.kL,
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, r.jsx)(T.A, {
                    premiumSubscription: Z,
                    className: s()(M.R3, { [M.aZ]: en }),
                }),
                (0, r.jsx)(U, { inOfferExperience: en }),
                (0, r.jsxs)("div", {
                    className: s()({ [M.V1]: !en }),
                    children: [
                        null != ea &&
                            (0, r.jsx)(S.c, {
                                className: M.w$,
                                config: ea,
                            }),
                        (0, r.jsx)(l.L, {
                            innerRef: a,
                            onChange: (e) => B(e),
                            threshold: 0,
                            active: !0,
                            children: (0, r.jsx)(N.Ay, {
                                ref: a,
                                subscriptionTier: J,
                                className: s()({
                                    [M.p7]: en,
                                    [M.Pw]: en,
                                    [M.AG]: er,
                                    [M.Cv]: null != Z,
                                }),
                                isDarkMode: V,
                            }),
                        }),
                    ],
                }),
                eo,
                (0, r.jsx)(R.A, { className: M.B_ }),
                (0, r.jsx)("div", {
                    className: M.aC,
                    children: (0, r.jsx)(P.A, {
                        className: M.JQ,
                        hideCTAs: !0,
                    }),
                }),
                (0, r.jsx)("div", { className: M.hz }),
                (0, r.jsx)(w.A, {
                    isVisible: z && q,
                    subscriptionTier: J,
                    isApplicationHome: !1,
                    isEligibleForBogoPromotion: er,
                }),
                (0, r.jsx)(l.L, {
                    innerRef: C,
                    onChange: (e) => {
                        e &&
                            !W &&
                            (g.default.track(x.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: es }),
                            K(!0));
                    },
                    children: (0, r.jsx)("div", {
                        ref: C,
                        className: M._Z,
                    }),
                }),
                (0, r.jsx)("img", {
                    src: k,
                    className: M.Kw,
                    width: 112,
                    height: 85,
                    alt: L.intl.string(L.t.X4IxWL),
                }),
            ],
        });
    };
