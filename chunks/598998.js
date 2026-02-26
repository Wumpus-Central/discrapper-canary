n.d(t, { A: () => w });
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(367622),
    o = n(397927),
    c = n(793574),
    d = n(688810),
    u = n(954921),
    _ = n(531260),
    m = n(793943),
    A = n(259065),
    g = n(780964),
    h = n(358776),
    x = n(840065),
    p = n(398523),
    E = n(612669),
    C = n(161319),
    T = n(849528),
    S = n(764231),
    I = n(112848),
    f = n(149757),
    N = n(30084),
    b = n(920050),
    j = n(788868),
    v = n(88001),
    O = n(652215),
    R = n(355097),
    y = n(518582),
    P = n(985018),
    L = n(15830),
    D = n(998663),
    M = n(817577),
    G = n(714206),
    U = n(641836),
    k = n(288604),
    V = n(893160),
    H = n(509442);
function w() {
    let { analyticsLocations: e } = (0, d.Ay)(c.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, E.O9)(),
        a = p.A.useExperiment({ location: "PremiumWhatsNewSection" }).enabled,
        w = (0, s.useCallback)(() => {
            (0, x.openUserSettings)(
                g.X.PROFILE_PANEL,
                { section: O.nc_.PROFILE_CUSTOMIZATION, analyticsLocations: e },
                () => (0, A.L)({ analyticsLocations: e }),
            );
        }, [e]),
        B = (0, s.useCallback)(() => {
            (0, x.openUserSettings)(
                g.X.PROFILE_PANEL,
                { section: O.nc_.PROFILE_CUSTOMIZATION, analyticsLocations: e },
                () => (0, u.L)({ analyticsLocations: e }),
            );
        }, [e]),
        Y = (0, s.useCallback)(() => {
            let e = (0, h.Ci)("openCustomAppSettings"),
                t = (0, h.WJ)("openCustomAppSettings"),
                n = g.X.APPEARANCE_PANEL,
                i = R.kq.CUSTOM_APP_ICONS;
            e
                ? ((n = g.X.DISPLAY_IN_APP_ICON_CATEGORY), (i = void 0))
                : t && ((n = g.X.APPEARANCE_IN_APP_ICON), (i = void 0)),
                (0, x.openUserSettings)(n, { section: O.nc_.APPEARANCE, scrollPosition: i });
        }, []),
        { fractionalState: F } = (0, _.A)(),
        z = F === j.xc.FP_ONLY,
        W = (0, I.$F)(),
        K = (0, I.Xb)(),
        Z = W?.status === I.Wo.UPCOMING || z,
        q = (0, f.N)(W?.id),
        X = (0, T.z)(),
        { currentDate: Q, nDaysInMonth: J } = (0, s.useMemo)(() => {
            let e = new Date();
            return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
        }, []);
    return (0, s.useMemo)(() => {
        let s = {
                id: b.TENURE_BADGE_CARD_ID,
                title: null != W ? P.intl.string(W.nameUnformattedNitro) : z ? P.intl.string(P.t.tx9Fvw) : "",
                pillText: P.intl.string(P.t["jyYgZ+"]),
                primaryAsset: null != q ? (Z ? q.standard : q.ambientLarge) : z ? G : null,
                primaryAssetClassName: l()(L.pq, { [L.n6]: Z }),
                caption: null != K ? P.intl.formatToPlainString(P.t.Hu4jfi, { date: new Date(K) }) : void 0,
                description:
                    null != W
                        ? W.status === I.Wo.UPCOMING
                            ? P.intl.formatToPlainString(P.t.a1eKDi, { days: W.daysLeft })
                            : (0, S.T)(W.id, W.tenureReqNumMonths)
                        : z
                          ? (0, S.T)(j.Ac.PREMIUM_TENURE_1_MONTH, 1)
                          : void 0,
                subscriptionRequired: !0,
                progress: X ?? void 0,
                ctaText: P.intl.string(P.t.jVcuVY),
                onCtaClick: () => (0, N.D)({ analyticsLocations: e }),
            },
            c = [
                t
                    ? {
                          id: b.PREMIUM_GROUP_CARD_ID,
                          title: P.intl.string(y.default.YkvksF),
                          description: P.intl.formatToPlainString(y.default.JlyGQj, {
                              totalSeats: v.aw,
                              premiumGroupProductName: (0, v.DP)(),
                          }),
                          pillText: P.intl.string(P.t.oW0eUd),
                          primaryAsset: M,
                          ctaText: P.intl.string(P.t.jVcuVY),
                          onCtaClick: () => {
                              (0, o.mMO)(async () => {
                                  let { default: e } = await n.e("69595").then(n.bind(n, 526710));
                                  return (t) => (0, i.jsx)(e, { ...t });
                              });
                          },
                      }
                    : null,
                a
                    ? {
                          id: b.RECURRING_3P_PROMOTIONS_CARD_ID,
                          title: P.intl.string(P.t.m7PucM),
                          description: P.intl.format(P.t.zh1X7u, {}),
                          subscriptionRequired: !0,
                          pillText: P.intl.string(P.t.oW0eUd),
                          caption: (0, i.jsx)("img", { src: D, alt: "SteelSeries" }),
                          backgroundAssetUrl: V.A,
                          progress: Q.getDate() / J,
                          ctaText: P.intl.string(P.t.w7s5Qr),
                          onCtaClick: () => (0, C.uE)({ analyticsLocations: e }),
                          blurTint: "#2E213D",
                      }
                    : null,
                {
                    id: b.DISPLAY_NAME_STYLES_CARD_ID,
                    title: P.intl.string(P.t.OLtTrt),
                    description: P.intl.string(P.t["di/pXR"]),
                    onCtaClick: w,
                    primaryAsset: U.A,
                    ctaText: P.intl.string(P.t.jVcuVY),
                    pillText: P.intl.string(P.t.y2b7CA),
                },
                {
                    id: b.CLIENT_THEMES_CARD_ID,
                    title: P.intl.string(P.t.acc6h6),
                    description: P.intl.formatToPlainString(P.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: H.A,
                    ctaText: P.intl.string(P.t.jVcuVY),
                    onCtaClick: () => {
                        (0, m.nf)(m.HP.CUSTOM_THEME);
                    },
                },
                {
                    id: b.PERMADECOS_CARD_ID,
                    title: P.intl.string(P.t.L14NZN),
                    description: P.intl.string(P.t.eCZkAI),
                    primaryAsset: (0, i.jsx)(r.u7P, { alt: "", ariaHidden: !0 }),
                    ctaText: P.intl.string(P.t.jVcuVY),
                    onCtaClick: B,
                },
                {
                    id: b.CUSTOM_APP_ICONS_CARD_ID,
                    title: P.intl.string(P.t.rkb1vA),
                    description: P.intl.string(P.t["1uPk1Z"]),
                    primaryAsset: k.A,
                    ctaText: P.intl.string(P.t.y9TxXV),
                    onCtaClick: Y,
                },
            ],
            d = (c = c.filter((e) => null != e))[0].featured,
            u = d ? 5 : 6;
        return c.splice(+!!d, 0, s), c.length > u && c.splice(u, c.length - u), c;
    }, [W, q, Z, K, t, a, J, Q, e, w, Y, B, X, z]);
}
