n.d(t, { A: () => k });
var i = n(627968),
    s = n(64700),
    l = n(367622),
    a = n(311907),
    r = n(397927),
    o = n(975807),
    d = n(793574),
    c = n(688810),
    u = n(954921),
    _ = n(793943),
    m = n(259065),
    g = n(95035),
    A = n(532794),
    h = n(780964),
    x = n(358776),
    p = n(840065),
    T = n(166403),
    E = n(730784),
    S = n(398523),
    C = n(612669),
    f = n(161319),
    b = n(920050),
    N = n(9458),
    I = n(788868),
    v = n(88001),
    j = n(652215),
    y = n(519412),
    R = n(985018),
    O = n(340091),
    P = n(998663),
    D = n(817577),
    L = n(419455),
    G = n(288604),
    M = n(893160),
    U = n(509442);
function k() {
    let { analyticsLocations: e } = (0, c.Ay)(d.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, C.O9)(),
        k = (0, E.R)({ location: "PremiumWhatsNewSection" }),
        V = S.A.useExperiment({ location: "PremiumWhatsNewSection" }).enabled,
        w = (0, a.bG)([T.A], () => T.A.getPremiumTypeSubscription()),
        B = w?.hasActiveTrial ?? !1,
        H = (0, s.useCallback)(() => {
            (0, p.openUserSettings)(
                h.X.PROFILE_PANEL,
                { section: j.nc_.PROFILE_CUSTOMIZATION, analyticsLocations: e },
                () => (0, m.L)({ analyticsLocations: e }),
            );
        }, [e]),
        F = (0, s.useCallback)(() => {
            (0, p.openUserSettings)(
                h.X.PROFILE_PANEL,
                { section: j.nc_.PROFILE_CUSTOMIZATION, analyticsLocations: e },
                () => (0, u.L)({ analyticsLocations: e }),
            );
        }, [e]),
        Y = (0, s.useCallback)(() => {
            let e = (0, x.Ci)("openCustomAppSettings") ? h.X.DISPLAY_IN_APP_ICON_CATEGORY : h.X.APPEARANCE_IN_APP_ICON;
            (0, p.openUserSettings)(e, { section: j.nc_.APPEARANCE });
        }, []),
        z = () => {
            (0, o.A)(v.TE);
        },
        X = (0, s.useCallback)(() => {
            if (k) {
                if (B)
                    return void (0, r.mMO)(async () => {
                        let { default: e } = await n.e("99709").then(n.bind(n, 516044));
                        return (t) => (0, i.jsx)(e, { ...t });
                    });
                (0, A.A)({
                    subscriptionTier: I.pe.TIER_2,
                    initialPlanId: I.gD.PREMIUM_GROUP_MONTH,
                    analyticsLocations: e,
                });
            } else
                (0, r.mMO)(async () => {
                    let { default: e } = await n.e("69595").then(n.bind(n, 526710));
                    return (t) => (0, i.jsx)(e, { ...t });
                });
        }, [k, e, B]),
        W = (0, N.A)(e),
        { currentDate: K, nDaysInMonth: Z } = (0, s.useMemo)(() => {
            let e = new Date();
            return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
        }, []);
    return (0, s.useMemo)(() => {
        let n = [
                t
                    ? {
                          id: b.PREMIUM_GROUP_CARD_ID,
                          title: R.intl.string(y.default.YkvksF),
                          description: (0, i.jsxs)(i.Fragment, {
                              children: [
                                  R.intl.formatToPlainString(y.default.JlyGQj, {
                                      totalSeats: v.aw,
                                      premiumGroupProductName: (0, v.DP)(),
                                  }),
                                  (0, i.jsx)("div", {
                                      className: O.LF,
                                      children: (0, i.jsx)(g.A, {
                                          onClick: z,
                                          children: R.intl.string(y.default.yYyGJH),
                                      }),
                                  }),
                              ],
                          }),
                          pillText: R.intl.string(R.t.oW0eUd),
                          primaryAsset: D,
                          ...(k ? { ctaIcon: r.tvc, ctaIconPosition: "start" } : {}),
                          ctaText: R.intl.string(k ? R.t.IJI7yk : R.t.jVcuVY),
                          onCtaClick: X,
                      }
                    : null,
                V
                    ? {
                          id: b.RECURRING_3P_PROMOTIONS_CARD_ID,
                          title: R.intl.string(R.t.m7PucM),
                          description: R.intl.format(R.t.zh1X7u, {}),
                          subscriptionRequired: !0,
                          pillText: R.intl.string(R.t.oW0eUd),
                          caption: (0, i.jsx)("img", { src: P, alt: "SteelSeries" }),
                          backgroundAssetUrl: M.A,
                          progress: K.getDate() / Z,
                          ctaText: R.intl.string(R.t.w7s5Qr),
                          onCtaClick: () => (0, f.uE)({ analyticsLocations: e }),
                          blurTint: "#2E213D",
                      }
                    : null,
                {
                    id: b.DISPLAY_NAME_STYLES_CARD_ID,
                    title: R.intl.string(R.t.OLtTrt),
                    description: R.intl.string(R.t["di/pXR"]),
                    onCtaClick: H,
                    primaryAsset: L.A,
                    ctaText: R.intl.string(R.t.jVcuVY),
                    pillText: R.intl.string(R.t.y2b7CA),
                },
                {
                    id: b.CLIENT_THEMES_CARD_ID,
                    title: R.intl.string(R.t.acc6h6),
                    description: R.intl.formatToPlainString(R.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: U.A,
                    ctaText: R.intl.string(R.t.jVcuVY),
                    onCtaClick: () => {
                        (0, _.nf)(_.HP.CUSTOM_THEME);
                    },
                },
                {
                    id: b.PERMADECOS_CARD_ID,
                    title: R.intl.string(R.t.L14NZN),
                    description: R.intl.string(R.t.eCZkAI),
                    primaryAsset: (0, i.jsx)(l.u7P, { alt: "", ariaHidden: !0 }),
                    ctaText: R.intl.string(R.t.jVcuVY),
                    onCtaClick: F,
                },
                {
                    id: b.CUSTOM_APP_ICONS_CARD_ID,
                    title: R.intl.string(R.t["GU+wqh"]),
                    description: R.intl.string(R.t["1uPk1Z"]),
                    primaryAsset: G.A,
                    ctaText: R.intl.string(R.t.y9TxXV),
                    onCtaClick: Y,
                },
            ],
            s = (n = n.filter((e) => null != e))[0].featured,
            a = s ? 5 : 6;
        return n.splice(+!!s, 0, W), n.length > a && n.splice(a, n.length - a), n;
    }, [W, t, k, V, Z, K, e, H, Y, F, X]);
}
