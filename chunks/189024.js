n.d(t, { A: () => U });
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
    j = n(519412),
    y = n(985018),
    R = n(340091),
    O = n(998663),
    P = n(817577),
    D = n(419455),
    L = n(288604),
    G = n(893160),
    M = n(509442);
function U() {
    let { analyticsLocations: e } = (0, c.Ay)(d.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, C.O9)(),
        U = (0, E.R)({ location: "PremiumWhatsNewSection" }),
        k = S.A.useExperiment({ location: "PremiumWhatsNewSection" }).enabled,
        V = (0, a.bG)([T.A], () => T.A.getPremiumTypeSubscription()),
        w = V?.hasActiveTrial ?? !1,
        B = (0, s.useCallback)(() => {
            (0, p.openUserSettings)(h.X.PROFILE_PANEL, { analyticsLocations: e }, () =>
                (0, m.L)({ analyticsLocations: e }),
            );
        }, [e]),
        H = (0, s.useCallback)(() => {
            (0, p.openUserSettings)(h.X.PROFILE_PANEL, { analyticsLocations: e }, () =>
                (0, u.L)({ analyticsLocations: e }),
            );
        }, [e]),
        F = (0, s.useCallback)(() => {
            let e = (0, x.Ci)("openCustomAppSettings") ? h.X.DISPLAY_IN_APP_ICON_CATEGORY : h.X.APPEARANCE_IN_APP_ICON;
            (0, p.openUserSettings)(e);
        }, []),
        Y = () => {
            (0, o.A)(v.TE);
        },
        z = (0, s.useCallback)(() => {
            if (U) {
                if (w)
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
        }, [U, e, w]),
        X = (0, N.A)(e),
        { currentDate: W, nDaysInMonth: K } = (0, s.useMemo)(() => {
            let e = new Date();
            return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
        }, []);
    return (0, s.useMemo)(() => {
        let n = [
                t
                    ? {
                          id: b.PREMIUM_GROUP_CARD_ID,
                          title: y.intl.string(j.default.YkvksF),
                          description: (0, i.jsxs)(i.Fragment, {
                              children: [
                                  y.intl.formatToPlainString(j.default.JlyGQj, {
                                      totalSeats: v.aw,
                                      premiumGroupProductName: (0, v.DP)(),
                                  }),
                                  (0, i.jsx)("div", {
                                      className: R.LF,
                                      children: (0, i.jsx)(g.A, {
                                          onClick: Y,
                                          children: y.intl.string(j.default.yYyGJH),
                                      }),
                                  }),
                              ],
                          }),
                          pillText: y.intl.string(y.t.oW0eUd),
                          primaryAsset: P,
                          ...(U ? { ctaIcon: r.tvc, ctaIconPosition: "start" } : {}),
                          ctaText: y.intl.string(U ? y.t.IJI7yk : y.t.jVcuVY),
                          onCtaClick: z,
                      }
                    : null,
                k
                    ? {
                          id: b.RECURRING_3P_PROMOTIONS_CARD_ID,
                          title: y.intl.string(y.t.m7PucM),
                          description: y.intl.format(y.t.zh1X7u, {}),
                          subscriptionRequired: !0,
                          pillText: y.intl.string(y.t.oW0eUd),
                          caption: (0, i.jsx)("img", { src: O, alt: "SteelSeries" }),
                          backgroundAssetUrl: G.A,
                          progress: W.getDate() / K,
                          ctaText: y.intl.string(y.t.w7s5Qr),
                          onCtaClick: () => (0, f.uE)({ analyticsLocations: e }),
                          blurTint: "#2E213D",
                      }
                    : null,
                {
                    id: b.DISPLAY_NAME_STYLES_CARD_ID,
                    title: y.intl.string(y.t.OLtTrt),
                    description: y.intl.string(y.t["di/pXR"]),
                    onCtaClick: B,
                    primaryAsset: D.A,
                    ctaText: y.intl.string(y.t.jVcuVY),
                    pillText: y.intl.string(y.t.y2b7CA),
                },
                {
                    id: b.CLIENT_THEMES_CARD_ID,
                    title: y.intl.string(y.t.acc6h6),
                    description: y.intl.formatToPlainString(y.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: M.A,
                    ctaText: y.intl.string(y.t.jVcuVY),
                    onCtaClick: () => {
                        (0, _.nf)(_.HP.CUSTOM_THEME);
                    },
                },
                {
                    id: b.PERMADECOS_CARD_ID,
                    title: y.intl.string(y.t.L14NZN),
                    description: y.intl.string(y.t.eCZkAI),
                    primaryAsset: (0, i.jsx)(l.u7P, { alt: "", ariaHidden: !0 }),
                    ctaText: y.intl.string(y.t.jVcuVY),
                    onCtaClick: H,
                },
                {
                    id: b.CUSTOM_APP_ICONS_CARD_ID,
                    title: y.intl.string(y.t["GU+wqh"]),
                    description: y.intl.string(y.t["1uPk1Z"]),
                    primaryAsset: L.A,
                    ctaText: y.intl.string(y.t.y9TxXV),
                    onCtaClick: F,
                },
            ],
            s = (n = n.filter((e) => null != e))[0].featured,
            a = s ? 5 : 6;
        return n.splice(+!!s, 0, X), n.length > a && n.splice(a, n.length - a), n;
    }, [X, t, U, k, K, W, e, B, F, H, z]);
}
