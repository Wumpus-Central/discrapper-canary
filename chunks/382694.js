n.d(t, { A: () => k });
var i = n(627968),
    s = n(64700),
    a = n(503698),
    r = n.n(a),
    l = n(397927),
    o = n(793574),
    c = n(688810),
    d = n(793943),
    u = n(259065),
    _ = n(206835),
    m = n(780964),
    A = n(358776),
    g = n(840065),
    h = n(398523),
    x = n(102815),
    p = n(612669),
    E = n(161319),
    C = n(849528),
    T = n(764231),
    S = n(112848),
    I = n(149757),
    f = n(30084),
    N = n(88001),
    b = n(652215),
    j = n(355097),
    v = n(519412),
    O = n(985018),
    R = n(950268),
    y = n(998663),
    P = n(817577),
    L = n(804368),
    D = n(419455),
    G = n(174872),
    M = n(509442),
    U = n(864579);
function k(e) {
    let { glowingPerkId: t = null } = e,
        { analyticsLocations: a } = (0, c.Ay)(o.A.PREMIUM_MARKETING_PERK_CARD),
        k = (0, p.O9)(),
        V = h.A.useExperiment({ location: "PremiumWhatsNewSection" }).enabled,
        w = (0, _.A)({ scrollPosition: j._F.TRY_IT_OUT, analyticsLocations: a }),
        H = (0, s.useCallback)(() => {
            (0, g.openUserSettings)(
                m.X.PROFILE_PANEL,
                { section: b.nc_.PROFILE_CUSTOMIZATION, analyticsLocations: a },
                () => (0, u.L)({ analyticsLocations: a }),
            );
        }, [a]),
        B = (0, s.useCallback)(() => {
            let e = (0, A.WJ)("openCustomAppSettings");
            (0, g.openUserSettings)(e ? m.X.APPEARANCE_IN_APP_ICON : m.X.APPEARANCE_PANEL, {
                section: b.nc_.APPEARANCE,
                scrollPosition: e ? void 0 : j.kq.CUSTOM_APP_ICONS,
            });
        }, []),
        Y = (0, S.$F)(),
        F = (0, S.Xb)(),
        z = Y?.status === S.Wo.UPCOMING,
        W = (0, I.N)(Y?.id),
        K = (0, C.z)(),
        { currentDate: Z, nDaysInMonth: q } = (0, s.useMemo)(() => {
            let e = new Date();
            return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
        }, []),
        X = (0, s.useMemo)(() => {
            let e = {
                    id: "tenureBadge",
                    title: null != Y ? O.intl.string(Y.nameUnformattedNitro) : "",
                    pillText: O.intl.string(O.t["jyYgZ+"]),
                    primaryAsset: null != W ? (z ? W.standard : W.ambientLarge) : null,
                    primaryAssetClassName: r()(R.pq, { [R.n6]: z }),
                    caption: null != F ? O.intl.formatToPlainString(O.t.Hu4jfi, { date: new Date(F) }) : void 0,
                    description:
                        null != Y
                            ? Y.status === S.Wo.UPCOMING
                                ? O.intl.formatToPlainString(O.t.a1eKDi, { days: Y.daysLeft })
                                : (0, T.T)(Y.id, Y.tenureReqNumMonths)
                            : void 0,
                    progress: K ?? void 0,
                    ctaText: O.intl.string(O.t.jVcuVY),
                    onCtaClick: () => (0, f.D)({ analyticsLocations: a }),
                },
                t = [
                    k
                        ? {
                              id: "premiumGroup",
                              title: O.intl.string(v.default.YkvksF),
                              description: O.intl.formatToPlainString(v.default.JlyGQj, {
                                  totalSeats: N.aw,
                                  premiumGroupProductName: (0, N.DP)(),
                              }),
                              pillText: O.intl.string(O.t.oW0eUd),
                              primaryAsset: P,
                              ctaText: O.intl.string(O.t.jVcuVY),
                              onCtaClick: () => {
                                  (0, l.mMO)(async () => {
                                      let { default: e } = await n.e("69595").then(n.bind(n, 526710));
                                      return (t) => (0, i.jsx)(e, { ...t });
                                  });
                              },
                          }
                        : null,
                    V
                        ? {
                              id: "recurring3PPromotions",
                              title: O.intl.string(O.t.m7PucM),
                              description: O.intl.format(O.t.zh1X7u, {}),
                              pillText: O.intl.string(O.t.oW0eUd),
                              caption: (0, i.jsx)("img", { src: y, alt: "SteelSeries" }),
                              backgroundAssetUrl: G.A,
                              progress: Z.getDate() / q,
                              ctaText: O.intl.string(O.t.w7s5Qr),
                              onCtaClick: () => (0, E.uE)({ analyticsLocations: a }),
                              blurTint: "#0c1b55",
                          }
                        : null,
                    {
                        id: "displayNameStyles",
                        title: O.intl.string(O.t.OLtTrt),
                        description: O.intl.string(O.t["di/pXR"]),
                        onCtaClick: H,
                        primaryAsset: D.A,
                        ctaText: O.intl.string(O.t.jVcuVY),
                        pillText: O.intl.string(O.t.y2b7CA),
                    },
                    {
                        id: "customThemes",
                        title: O.intl.string(O.t.acc6h6),
                        description: O.intl.formatToPlainString(O.t.WQazjs, { themeCount: 20 }),
                        primaryAsset: M.A,
                        ctaText: O.intl.string(O.t.jVcuVY),
                        onCtaClick: () => {
                            (0, d.nf)(d.HP.CUSTOM_THEME);
                        },
                    },
                    {
                        id: "permadecos",
                        title: O.intl.string(O.t.L14NZN),
                        description: O.intl.string(O.t.eCZkAI),
                        primaryAsset: U.A,
                        ctaText: O.intl.string(O.t.jVcuVY),
                        onCtaClick: w,
                    },
                    {
                        id: "newAppStylesUpdateJune2024",
                        title: O.intl.string(O.t.rkb1vA),
                        description: O.intl.string(O.t["1uPk1Z"]),
                        primaryAsset: L,
                        ctaText: O.intl.string(O.t.y9TxXV),
                        onCtaClick: B,
                    },
                ],
                s = (t = t.filter((e) => null != e))[0].featured,
                o = s ? 5 : 6;
            return t.splice(+!!s, 0, e), t.length > o && t.splice(o, t.length - o), t;
        }, [Y, W, z, F, k, V, q, Z, a, H, B, w, K]);
    return (0, i.jsxs)("div", {
        className: R.uW,
        children: [
            (0, i.jsx)(l.Heading, { variant: "display-sm", className: R.R_, children: O.intl.string(O.t.Aw5DRm) }),
            (0, i.jsx)("div", {
                className: R.Ui,
                children: X.map((e, n) => {
                    if (null == e) return;
                    let s = 0 === n && !0 === e.featured;
                    return (0, i.jsx)(
                        "div",
                        {
                            id: e.id,
                            className: r()({ [R.Nq]: s }),
                            style: { scrollMarginTop: 30 },
                            children: (0, i.jsx)(x.S, { ...e, glowing: t === e.id, featured: s }),
                        },
                        e.id,
                    );
                }),
            }),
        ],
    });
}
