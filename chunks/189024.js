n.d(t, { A: () => Y });
var i = n(627968),
    s = n(64700),
    l = n(367622),
    a = n(311907),
    r = n(397927),
    o = n(975807),
    d = n(793574),
    c = n(688810),
    u = n(562819),
    m = n(793943),
    _ = n(259065),
    g = n(95035),
    x = n(532794),
    A = n(591179),
    h = n(576060),
    p = n(780964),
    T = n(358776),
    f = n(840065),
    S = n(166403),
    E = n(730784),
    b = n(398523),
    C = n(881373),
    v = n(491032),
    N = n(612669),
    I = n(852218),
    j = n(161319),
    y = n(920050),
    O = n(9458),
    R = n(788868),
    P = n(88001),
    L = n(653624),
    D = n(519412),
    G = n(985018),
    M = n(130474),
    k = n(998663),
    U = n(817577),
    w = n(419455),
    V = n(288604),
    B = n(223157),
    F = n(863882),
    H = n(893160),
    z = n(509442);
function Y() {
    let { analyticsLocations: e } = (0, c.Ay)(d.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, A.X)("useWhatsNewPerkCards"),
        Y = (0, N.O9)(),
        X = (0, C.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
        K = (0, E.R)({ location: "PremiumWhatsNewSection" }),
        W = b.A.useExperiment({ location: "PremiumWhatsNewSection" }).enabled,
        Z = (0, a.bG)([S.A], () => S.A.getPremiumTypeSubscription()),
        q = Z?.hasActiveTrial ?? !1,
        Q = (0, h.A)(),
        J = (0, s.useCallback)(() => {
            (0, f.openUserSettings)(p.X.PROFILE_PANEL, { analyticsLocations: e }, () =>
                (0, _.L)({ analyticsLocations: e }),
            );
        }, [e]),
        $ = (0, s.useCallback)(() => {
            (0, f.openUserSettings)(p.X.PROFILE_PANEL, { analyticsLocations: e }, () =>
                (0, u.L)({ analyticsLocations: e }),
            );
        }, [e]),
        ee = (0, s.useCallback)(() => {
            let e = (0, T.Ci)("openCustomAppSettings") ? p.X.DISPLAY_IN_APP_ICON_CATEGORY : p.X.APPEARANCE_IN_APP_ICON;
            (0, f.openUserSettings)(e);
        }, []),
        et = () => {
            (0, o.A)(P.TE);
        },
        en = (0, s.useCallback)(() => {
            if (K) {
                if (q)
                    return void (0, r.mMO)(async () => {
                        let { default: e } = await n.e("99709").then(n.bind(n, 516044));
                        return (t) => (0, i.jsx)(e, { ...t });
                    });
                (0, x.A)({
                    subscriptionTier: R.pe.TIER_2,
                    initialPlanId: R.gD.PREMIUM_GROUP_MONTH,
                    analyticsLocations: e,
                });
            } else
                (0, r.mMO)(async () => {
                    let { default: e } = await n.e("69595").then(n.bind(n, 526710));
                    return (t) => (0, i.jsx)(e, { ...t });
                });
        }, [K, e, q]),
        ei = (0, O.A)(e),
        { currentDate: es, nDaysInMonth: el } = (0, s.useMemo)(() => {
            let e = new Date();
            return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
        }, []);
    return (0, s.useMemo)(() => {
        let n = [
                X
                    ? {
                          id: y.LOGITECH_3PP_CARD_ID,
                          title: G.intl.string(L.default.OlObRa),
                          description: G.intl.format(L.default["/UNTlE"], {
                              discountPercent: C.aW,
                              termsUrl: "https://logitech.com",
                          }),
                          subscriptionRequired: !0,
                          progress: es.getDate() / el,
                          ctaText: G.intl.string(L.default["bZLaD+"]),
                          onCtaClick: () => (0, v.P)({ partnerId: I.XY }),
                          blurTint: "#2E213D",
                          backgroundAssetUrl: F.A,
                          pillText: G.intl.string(G.t.y2b7CA),
                          caption: (0, i.jsx)("img", { src: B.A, alt: "Logitech" }),
                      }
                    : null,
                Y
                    ? {
                          id: y.PREMIUM_GROUP_CARD_ID,
                          title: G.intl.string(D.default.YkvksF),
                          description: (0, i.jsxs)(i.Fragment, {
                              children: [
                                  G.intl.formatToPlainString(D.default.JlyGQj, {
                                      totalSeats: P.aw,
                                      premiumGroupProductName: (0, P.DP)(),
                                  }),
                                  (0, i.jsx)("div", {
                                      className: M.LF,
                                      children: (0, i.jsx)(g.A, {
                                          onClick: et,
                                          children: G.intl.string(D.default.yYyGJH),
                                      }),
                                  }),
                              ],
                          }),
                          pillText: G.intl.string(G.t.oW0eUd),
                          primaryAsset: U,
                          ...(K ? { ctaIcon: r.tvc, ctaIconPosition: "start" } : {}),
                          ctaText: G.intl.string(K ? G.t.IJI7yk : G.t.jVcuVY),
                          onCtaClick: en,
                      }
                    : null,
                W
                    ? {
                          id: y.RECURRING_3P_PROMOTIONS_CARD_ID,
                          title: G.intl.string(G.t.m7PucM),
                          description: G.intl.format(G.t.zh1X7u, {}),
                          subscriptionRequired: !0,
                          pillText: G.intl.string(G.t.oW0eUd),
                          caption: (0, i.jsx)("img", { src: k, alt: "SteelSeries" }),
                          backgroundAssetUrl: H.A,
                          progress: es.getDate() / el,
                          ctaText: G.intl.string(G.t.w7s5Qr),
                          onCtaClick: () => (0, j.u)({ analyticsLocations: e, partnerIds: [I.KS, I.Cs] }),
                          blurTint: "#2E213D",
                      }
                    : null,
                {
                    id: y.DISPLAY_NAME_STYLES_CARD_ID,
                    title: G.intl.string(G.t.OLtTrt),
                    description: G.intl.string(G.t["di/pXR"]),
                    onCtaClick: t ? Q : J,
                    ctaText: G.intl.string(G.t.jVcuVY),
                    primaryAsset: w.A,
                    pillText: G.intl.string(G.t.y2b7CA),
                },
                {
                    id: y.CLIENT_THEMES_CARD_ID,
                    title: G.intl.string(G.t.acc6h6),
                    description: G.intl.formatToPlainString(G.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: z.A,
                    ctaText: G.intl.string(G.t.jVcuVY),
                    onCtaClick: () => {
                        (0, m.nf)(m.HP.CUSTOM_THEME);
                    },
                },
                {
                    id: y.PERMADECOS_CARD_ID,
                    title: G.intl.string(G.t.L14NZN),
                    description: G.intl.string(G.t.eCZkAI),
                    primaryAsset: (0, i.jsx)(l.u7P, { alt: "", ariaHidden: !0 }),
                    ctaText: G.intl.string(G.t.jVcuVY),
                    onCtaClick: t ? Q : $,
                },
                {
                    id: y.CUSTOM_APP_ICONS_CARD_ID,
                    title: G.intl.string(G.t["GU+wqh"]),
                    description: G.intl.string(G.t["1uPk1Z"]),
                    primaryAsset: V.A,
                    ctaText: G.intl.string(G.t.y9TxXV),
                    onCtaClick: ee,
                },
            ],
            s = (n = n.filter((e) => null != e))[0].featured,
            a = s ? 5 : 6;
        return n.splice(+!!s, 0, ei), n.length > a && n.splice(a, n.length - a), n;
    }, [ei, Y, K, W, el, es, e, J, ee, $, en, Q, t, X]);
}
