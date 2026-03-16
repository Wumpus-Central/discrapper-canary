n.d(t, { A: () => k });
var i = n(627968),
    s = n(64700),
    l = n(367622),
    r = n(311907),
    a = n(397927),
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
    C = n(398523),
    S = n(612669),
    f = n(161319),
    N = n(920050),
    b = n(9458),
    I = n(788868),
    v = n(88001),
    j = n(652215),
    O = n(519412),
    y = n(985018),
    R = n(340091),
    P = n(998663),
    D = n(817577),
    L = n(419455),
    M = n(288604),
    G = n(893160),
    U = n(509442);
function k() {
    let { analyticsLocations: e } = (0, c.Ay)(d.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, S.O9)(),
        k = (0, E.R)({ location: "PremiumWhatsNewSection" }),
        V = C.A.useExperiment({ location: "PremiumWhatsNewSection" }).enabled,
        w = (0, r.bG)([T.A], () => T.A.getPremiumTypeSubscription()),
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
                    return void (0, a.mMO)(async () => {
                        let { default: e } = await n.e("99709").then(n.bind(n, 516044));
                        return (t) => (0, i.jsx)(e, { ...t });
                    });
                (0, A.A)({
                    subscriptionTier: I.pe.TIER_2,
                    initialPlanId: I.gD.PREMIUM_GROUP_MONTH,
                    analyticsLocations: e,
                });
            } else
                (0, a.mMO)(async () => {
                    let { default: e } = await n.e("69595").then(n.bind(n, 526710));
                    return (t) => (0, i.jsx)(e, { ...t });
                });
        }, [k, e, B]),
        W = (0, b.A)(e),
        { currentDate: K, nDaysInMonth: Z } = (0, s.useMemo)(() => {
            let e = new Date();
            return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
        }, []);
    return (0, s.useMemo)(() => {
        let n = [
                t
                    ? {
                          id: N.PREMIUM_GROUP_CARD_ID,
                          title: y.intl.string(O.default.YkvksF),
                          description: (0, i.jsxs)(i.Fragment, {
                              children: [
                                  y.intl.formatToPlainString(O.default.JlyGQj, {
                                      totalSeats: v.aw,
                                      premiumGroupProductName: (0, v.DP)(),
                                  }),
                                  (0, i.jsx)("div", {
                                      className: R.LF,
                                      children: (0, i.jsx)(g.A, {
                                          onClick: z,
                                          children: y.intl.string(O.default.yYyGJH),
                                      }),
                                  }),
                              ],
                          }),
                          pillText: y.intl.string(y.t.oW0eUd),
                          primaryAsset: D,
                          ...(k ? { ctaIcon: a.tvc, ctaIconPosition: "start" } : {}),
                          ctaText: y.intl.string(k ? y.t.IJI7yk : y.t.jVcuVY),
                          onCtaClick: X,
                      }
                    : null,
                V
                    ? {
                          id: N.RECURRING_3P_PROMOTIONS_CARD_ID,
                          title: y.intl.string(y.t.m7PucM),
                          description: y.intl.format(y.t.zh1X7u, {}),
                          subscriptionRequired: !0,
                          pillText: y.intl.string(y.t.oW0eUd),
                          caption: (0, i.jsx)("img", { src: P, alt: "SteelSeries" }),
                          backgroundAssetUrl: G.A,
                          progress: K.getDate() / Z,
                          ctaText: y.intl.string(y.t.w7s5Qr),
                          onCtaClick: () => (0, f.uE)({ analyticsLocations: e }),
                          blurTint: "#2E213D",
                      }
                    : null,
                {
                    id: N.DISPLAY_NAME_STYLES_CARD_ID,
                    title: y.intl.string(y.t.OLtTrt),
                    description: y.intl.string(y.t["di/pXR"]),
                    onCtaClick: H,
                    primaryAsset: L.A,
                    ctaText: y.intl.string(y.t.jVcuVY),
                    pillText: y.intl.string(y.t.y2b7CA),
                },
                {
                    id: N.CLIENT_THEMES_CARD_ID,
                    title: y.intl.string(y.t.acc6h6),
                    description: y.intl.formatToPlainString(y.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: U.A,
                    ctaText: y.intl.string(y.t.jVcuVY),
                    onCtaClick: () => {
                        (0, _.nf)(_.HP.CUSTOM_THEME);
                    },
                },
                {
                    id: N.PERMADECOS_CARD_ID,
                    title: y.intl.string(y.t.L14NZN),
                    description: y.intl.string(y.t.eCZkAI),
                    primaryAsset: (0, i.jsx)(l.u7P, { alt: "", ariaHidden: !0 }),
                    ctaText: y.intl.string(y.t.jVcuVY),
                    onCtaClick: F,
                },
                {
                    id: N.CUSTOM_APP_ICONS_CARD_ID,
                    title: y.intl.string(y.t.rkb1vA),
                    description: y.intl.string(y.t["1uPk1Z"]),
                    primaryAsset: M.A,
                    ctaText: y.intl.string(y.t.y9TxXV),
                    onCtaClick: Y,
                },
            ],
            s = (n = n.filter((e) => null != e))[0].featured,
            r = s ? 5 : 6;
        return n.splice(+!!s, 0, W), n.length > r && n.splice(r, n.length - r), n;
    }, [W, t, k, V, Z, K, e, H, Y, F, X]);
}
