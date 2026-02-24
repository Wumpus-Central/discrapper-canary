n.d(t, { A: () => H });
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(367622),
    o = n(397927),
    c = n(793574),
    d = n(688810),
    u = n(531260),
    _ = n(793943),
    m = n(259065),
    A = n(206835),
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
    y = n(519412),
    P = n(985018),
    L = n(950268),
    D = n(998663),
    G = n(817577),
    M = n(714206),
    U = n(419455),
    k = n(288604),
    V = n(174872),
    w = n(509442);
function H() {
    let { analyticsLocations: e } = (0, d.Ay)(c.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, E.O9)(),
        a = p.A.useExperiment({ location: "PremiumWhatsNewSection" }).enabled,
        H = (0, A.A)({ scrollPosition: R._F.TRY_IT_OUT, analyticsLocations: e }),
        B = (0, s.useCallback)(() => {
            (0, x.openUserSettings)(
                g.X.PROFILE_PANEL,
                { section: O.nc_.PROFILE_CUSTOMIZATION, analyticsLocations: e },
                () => (0, m.L)({ analyticsLocations: e }),
            );
        }, [e]),
        Y = (0, s.useCallback)(() => {
            let e = (0, h.WJ)("openCustomAppSettings");
            (0, x.openUserSettings)(e ? g.X.APPEARANCE_IN_APP_ICON : g.X.APPEARANCE_PANEL, {
                section: O.nc_.APPEARANCE,
                scrollPosition: e ? void 0 : R.kq.CUSTOM_APP_ICONS,
            });
        }, []),
        { fractionalState: F } = (0, u.A)(),
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
                id: b.vc,
                title: null != W ? P.intl.string(W.nameUnformattedNitro) : z ? P.intl.string(P.t.tx9Fvw) : "",
                pillText: P.intl.string(P.t["jyYgZ+"]),
                primaryAsset: null != q ? (Z ? q.standard : q.ambientLarge) : z ? M : null,
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
                          id: b.Rt,
                          title: P.intl.string(y.default.YkvksF),
                          description: P.intl.formatToPlainString(y.default.JlyGQj, {
                              totalSeats: v.aw,
                              premiumGroupProductName: (0, v.DP)(),
                          }),
                          pillText: P.intl.string(P.t.oW0eUd),
                          primaryAsset: G,
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
                          id: "3p",
                          title: P.intl.string(P.t.m7PucM),
                          description: P.intl.format(P.t.zh1X7u, {}),
                          pillText: P.intl.string(P.t.oW0eUd),
                          caption: (0, i.jsx)("img", { src: D, alt: "SteelSeries" }),
                          backgroundAssetUrl: V.A,
                          progress: Q.getDate() / J,
                          ctaText: P.intl.string(P.t.w7s5Qr),
                          onCtaClick: () => (0, C.uE)({ analyticsLocations: e }),
                          blurTint: "#0c1b55",
                      }
                    : null,
                {
                    id: b.vl,
                    title: P.intl.string(P.t.OLtTrt),
                    description: P.intl.string(P.t["di/pXR"]),
                    onCtaClick: B,
                    primaryAsset: U.A,
                    ctaText: P.intl.string(P.t.jVcuVY),
                    pillText: P.intl.string(P.t.y2b7CA),
                },
                {
                    id: b.kd,
                    title: P.intl.string(P.t.acc6h6),
                    description: P.intl.formatToPlainString(P.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: w.A,
                    ctaText: P.intl.string(P.t.jVcuVY),
                    onCtaClick: () => {
                        (0, _.nf)(_.HP.CUSTOM_THEME);
                    },
                },
                {
                    id: b.BA,
                    title: P.intl.string(P.t.L14NZN),
                    description: P.intl.string(P.t.eCZkAI),
                    primaryAsset: (0, i.jsx)(r.u7P, { alt: "", ariaHidden: !0 }),
                    ctaText: P.intl.string(P.t.jVcuVY),
                    onCtaClick: H,
                },
                {
                    id: b.WL,
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
    }, [W, q, Z, K, t, a, J, Q, e, B, Y, H, X, z]);
}
