n.d(t, { A: () => w });
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
    f = n(358776),
    T = n(840065),
    S = n(166403),
    E = n(730784),
    b = n(398523),
    C = n(612669),
    v = n(161319),
    N = n(920050),
    I = n(9458),
    j = n(788868),
    y = n(88001),
    O = n(519412),
    R = n(985018),
    L = n(130474),
    P = n(998663),
    D = n(817577),
    G = n(419455),
    M = n(288604),
    U = n(893160),
    k = n(509442);
function w() {
    let { analyticsLocations: e } = (0, c.Ay)(d.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, A.X)("useWhatsNewPerkCards"),
        w = (0, C.O9)(),
        V = (0, E.R)({ location: "PremiumWhatsNewSection" }),
        B = b.A.useExperiment({ location: "PremiumWhatsNewSection" }).enabled,
        F = (0, a.bG)([S.A], () => S.A.getPremiumTypeSubscription()),
        H = F?.hasActiveTrial ?? !1,
        z = (0, h.A)(),
        Y = (0, s.useCallback)(() => {
            (0, T.openUserSettings)(p.X.PROFILE_PANEL, { analyticsLocations: e }, () =>
                (0, _.L)({ analyticsLocations: e }),
            );
        }, [e]),
        X = (0, s.useCallback)(() => {
            (0, T.openUserSettings)(p.X.PROFILE_PANEL, { analyticsLocations: e }, () =>
                (0, u.L)({ analyticsLocations: e }),
            );
        }, [e]),
        K = (0, s.useCallback)(() => {
            let e = (0, f.Ci)("openCustomAppSettings") ? p.X.DISPLAY_IN_APP_ICON_CATEGORY : p.X.APPEARANCE_IN_APP_ICON;
            (0, T.openUserSettings)(e);
        }, []),
        W = () => {
            (0, o.A)(y.TE);
        },
        Z = (0, s.useCallback)(() => {
            if (V) {
                if (H)
                    return void (0, r.mMO)(async () => {
                        let { default: e } = await n.e("99709").then(n.bind(n, 516044));
                        return (t) => (0, i.jsx)(e, { ...t });
                    });
                (0, x.A)({
                    subscriptionTier: j.pe.TIER_2,
                    initialPlanId: j.gD.PREMIUM_GROUP_MONTH,
                    analyticsLocations: e,
                });
            } else
                (0, r.mMO)(async () => {
                    let { default: e } = await n.e("69595").then(n.bind(n, 526710));
                    return (t) => (0, i.jsx)(e, { ...t });
                });
        }, [V, e, H]),
        q = (0, I.A)(e),
        { currentDate: Q, nDaysInMonth: J } = (0, s.useMemo)(() => {
            let e = new Date();
            return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
        }, []);
    return (0, s.useMemo)(() => {
        let n = [
                w
                    ? {
                          id: N.PREMIUM_GROUP_CARD_ID,
                          title: R.intl.string(O.default.YkvksF),
                          description: (0, i.jsxs)(i.Fragment, {
                              children: [
                                  R.intl.formatToPlainString(O.default.JlyGQj, {
                                      totalSeats: y.aw,
                                      premiumGroupProductName: (0, y.DP)(),
                                  }),
                                  (0, i.jsx)("div", {
                                      className: L.LF,
                                      children: (0, i.jsx)(g.A, {
                                          onClick: W,
                                          children: R.intl.string(O.default.yYyGJH),
                                      }),
                                  }),
                              ],
                          }),
                          pillText: R.intl.string(R.t.oW0eUd),
                          primaryAsset: D,
                          ...(V ? { ctaIcon: r.tvc, ctaIconPosition: "start" } : {}),
                          ctaText: R.intl.string(V ? R.t.IJI7yk : R.t.jVcuVY),
                          onCtaClick: Z,
                      }
                    : null,
                B
                    ? {
                          id: N.RECURRING_3P_PROMOTIONS_CARD_ID,
                          title: R.intl.string(R.t.m7PucM),
                          description: R.intl.format(R.t.zh1X7u, {}),
                          subscriptionRequired: !0,
                          pillText: R.intl.string(R.t.oW0eUd),
                          caption: (0, i.jsx)("img", { src: P, alt: "SteelSeries" }),
                          backgroundAssetUrl: U.A,
                          progress: Q.getDate() / J,
                          ctaText: R.intl.string(R.t.w7s5Qr),
                          onCtaClick: () => (0, v.uE)({ analyticsLocations: e }),
                          blurTint: "#2E213D",
                      }
                    : null,
                {
                    id: N.DISPLAY_NAME_STYLES_CARD_ID,
                    title: R.intl.string(R.t.OLtTrt),
                    description: R.intl.string(R.t["di/pXR"]),
                    onCtaClick: t ? z : Y,
                    ctaText: R.intl.string(R.t.jVcuVY),
                    primaryAsset: G.A,
                    pillText: R.intl.string(R.t.y2b7CA),
                },
                {
                    id: N.CLIENT_THEMES_CARD_ID,
                    title: R.intl.string(R.t.acc6h6),
                    description: R.intl.formatToPlainString(R.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: k.A,
                    ctaText: R.intl.string(R.t.jVcuVY),
                    onCtaClick: () => {
                        (0, m.nf)(m.HP.CUSTOM_THEME);
                    },
                },
                {
                    id: N.PERMADECOS_CARD_ID,
                    title: R.intl.string(R.t.L14NZN),
                    description: R.intl.string(R.t.eCZkAI),
                    primaryAsset: (0, i.jsx)(l.u7P, { alt: "", ariaHidden: !0 }),
                    ctaText: R.intl.string(R.t.jVcuVY),
                    onCtaClick: t ? z : X,
                },
                {
                    id: N.CUSTOM_APP_ICONS_CARD_ID,
                    title: R.intl.string(R.t["GU+wqh"]),
                    description: R.intl.string(R.t["1uPk1Z"]),
                    primaryAsset: M.A,
                    ctaText: R.intl.string(R.t.y9TxXV),
                    onCtaClick: K,
                },
            ],
            s = (n = n.filter((e) => null != e))[0].featured,
            a = s ? 5 : 6;
        return n.splice(+!!s, 0, q), n.length > a && n.splice(a, n.length - a), n;
    }, [q, w, V, B, J, Q, e, Y, K, X, Z, z, t]);
}
