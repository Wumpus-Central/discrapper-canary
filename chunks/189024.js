n.d(t, { A: () => B });
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
    v = n(612669),
    N = n(161319),
    I = n(920050),
    j = n(9458),
    y = n(788868),
    O = n(88001),
    R = n(653624),
    L = n(519412),
    P = n(985018),
    D = n(130474),
    G = n(998663),
    M = n(817577),
    k = n(419455),
    U = n(288604),
    w = n(893160),
    V = n(509442);
function B() {
    let { analyticsLocations: e } = (0, c.Ay)(d.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, A.X)("useWhatsNewPerkCards"),
        B = (0, v.O9)(),
        F = (0, C.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
        H = (0, E.R)({ location: "PremiumWhatsNewSection" }),
        z = b.A.useExperiment({ location: "PremiumWhatsNewSection" }).enabled,
        Y = (0, a.bG)([S.A], () => S.A.getPremiumTypeSubscription()),
        X = Y?.hasActiveTrial ?? !1,
        K = (0, h.A)(),
        W = (0, s.useCallback)(() => {
            (0, f.openUserSettings)(p.X.PROFILE_PANEL, { analyticsLocations: e }, () =>
                (0, _.L)({ analyticsLocations: e }),
            );
        }, [e]),
        Z = (0, s.useCallback)(() => {
            (0, f.openUserSettings)(p.X.PROFILE_PANEL, { analyticsLocations: e }, () =>
                (0, u.L)({ analyticsLocations: e }),
            );
        }, [e]),
        q = (0, s.useCallback)(() => {
            let e = (0, T.Ci)("openCustomAppSettings") ? p.X.DISPLAY_IN_APP_ICON_CATEGORY : p.X.APPEARANCE_IN_APP_ICON;
            (0, f.openUserSettings)(e);
        }, []),
        Q = () => {
            (0, o.A)(O.TE);
        },
        J = (0, s.useCallback)(() => {
            if (H) {
                if (X)
                    return void (0, r.mMO)(async () => {
                        let { default: e } = await n.e("99709").then(n.bind(n, 516044));
                        return (t) => (0, i.jsx)(e, { ...t });
                    });
                (0, x.A)({
                    subscriptionTier: y.pe.TIER_2,
                    initialPlanId: y.gD.PREMIUM_GROUP_MONTH,
                    analyticsLocations: e,
                });
            } else
                (0, r.mMO)(async () => {
                    let { default: e } = await n.e("69595").then(n.bind(n, 526710));
                    return (t) => (0, i.jsx)(e, { ...t });
                });
        }, [H, e, X]),
        $ = (0, j.A)(e),
        { currentDate: ee, nDaysInMonth: et } = (0, s.useMemo)(() => {
            let e = new Date();
            return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
        }, []);
    return (0, s.useMemo)(() => {
        let n = [
                F
                    ? {
                          id: I.LOGITECH_3PP_CARD_ID,
                          title: P.intl.string(R.default.OlObRa),
                          description: P.intl.string(R.default["8Gl8gP"]),
                          subscriptionRequired: !0,
                          progress: ee.getDate() / et,
                          ctaText: P.intl.string(P.t.w7s5Qr),
                          onCtaClick: () => (0, N.uE)({ analyticsLocations: e }),
                          blurTint: "#2E213D",
                      }
                    : null,
                B
                    ? {
                          id: I.PREMIUM_GROUP_CARD_ID,
                          title: P.intl.string(L.default.YkvksF),
                          description: (0, i.jsxs)(i.Fragment, {
                              children: [
                                  P.intl.formatToPlainString(L.default.JlyGQj, {
                                      totalSeats: O.aw,
                                      premiumGroupProductName: (0, O.DP)(),
                                  }),
                                  (0, i.jsx)("div", {
                                      className: D.LF,
                                      children: (0, i.jsx)(g.A, {
                                          onClick: Q,
                                          children: P.intl.string(L.default.yYyGJH),
                                      }),
                                  }),
                              ],
                          }),
                          pillText: P.intl.string(P.t.oW0eUd),
                          primaryAsset: M,
                          ...(H ? { ctaIcon: r.tvc, ctaIconPosition: "start" } : {}),
                          ctaText: P.intl.string(H ? P.t.IJI7yk : P.t.jVcuVY),
                          onCtaClick: J,
                      }
                    : null,
                z
                    ? {
                          id: I.RECURRING_3P_PROMOTIONS_CARD_ID,
                          title: P.intl.string(P.t.m7PucM),
                          description: P.intl.format(P.t.zh1X7u, {}),
                          subscriptionRequired: !0,
                          pillText: P.intl.string(P.t.oW0eUd),
                          caption: (0, i.jsx)("img", { src: G, alt: "SteelSeries" }),
                          backgroundAssetUrl: w.A,
                          progress: ee.getDate() / et,
                          ctaText: P.intl.string(P.t.w7s5Qr),
                          onCtaClick: () => (0, N.uE)({ analyticsLocations: e }),
                          blurTint: "#2E213D",
                      }
                    : null,
                {
                    id: I.DISPLAY_NAME_STYLES_CARD_ID,
                    title: P.intl.string(P.t.OLtTrt),
                    description: P.intl.string(P.t["di/pXR"]),
                    onCtaClick: t ? K : W,
                    ctaText: P.intl.string(P.t.jVcuVY),
                    primaryAsset: k.A,
                    pillText: P.intl.string(P.t.y2b7CA),
                },
                {
                    id: I.CLIENT_THEMES_CARD_ID,
                    title: P.intl.string(P.t.acc6h6),
                    description: P.intl.formatToPlainString(P.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: V.A,
                    ctaText: P.intl.string(P.t.jVcuVY),
                    onCtaClick: () => {
                        (0, m.nf)(m.HP.CUSTOM_THEME);
                    },
                },
                {
                    id: I.PERMADECOS_CARD_ID,
                    title: P.intl.string(P.t.L14NZN),
                    description: P.intl.string(P.t.eCZkAI),
                    primaryAsset: (0, i.jsx)(l.u7P, { alt: "", ariaHidden: !0 }),
                    ctaText: P.intl.string(P.t.jVcuVY),
                    onCtaClick: t ? K : Z,
                },
                {
                    id: I.CUSTOM_APP_ICONS_CARD_ID,
                    title: P.intl.string(P.t["GU+wqh"]),
                    description: P.intl.string(P.t["1uPk1Z"]),
                    primaryAsset: U.A,
                    ctaText: P.intl.string(P.t.y9TxXV),
                    onCtaClick: q,
                },
            ],
            s = (n = n.filter((e) => null != e))[0].featured,
            a = s ? 5 : 6;
        return n.splice(+!!s, 0, $), n.length > a && n.splice(a, n.length - a), n;
    }, [$, B, H, z, et, ee, e, W, q, Z, J, K, t, F]);
}
