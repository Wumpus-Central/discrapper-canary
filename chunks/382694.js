n.d(t, { A: () => U });
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(397927),
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
    y = n(817577),
    P = n(804368),
    L = n(419455),
    D = n(174872),
    M = n(509442),
    G = n(864579);
function U(e) {
    let { glowingPerkId: t = null } = e,
        { analyticsLocations: a } = (0, c.Ay)(o.A.PREMIUM_MARKETING_PERK_CARD),
        U = (0, p.O9)(),
        k = h.A.useExperiment({ location: "PremiumWhatsNewSection" }).enabled,
        V = (0, _.A)({ scrollPosition: j._F.TRY_IT_OUT, analyticsLocations: a }),
        H = (0, s.useCallback)(() => {
            (0, g.openUserSettings)(
                m.X.PROFILE_PANEL,
                { section: b.nc_.PROFILE_CUSTOMIZATION, analyticsLocations: a },
                () => (0, u.L)({ analyticsLocations: a }),
            );
        }, [a]),
        w = (0, s.useCallback)(() => {
            let e = (0, A.WJ)("openCustomAppSettings");
            (0, g.openUserSettings)(e ? m.X.APPEARANCE_IN_APP_ICON : m.X.APPEARANCE_PANEL, {
                section: b.nc_.APPEARANCE,
                scrollPosition: e ? void 0 : j.kq.CUSTOM_APP_ICONS,
            });
        }, []),
        B = (0, S.$F)(),
        Y = (0, S.Xb)(),
        F = B?.status === S.Wo.UPCOMING,
        z = (0, I.N)(B?.id, { ambient: !F }),
        W = (0, C.z)(),
        { currentDate: K, nDaysInMonth: Z } = (0, s.useMemo)(() => {
            let e = new Date();
            return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
        }, []),
        q = (0, s.useMemo)(() => {
            let e = {
                    id: "tenureBadge",
                    title: null != B ? O.intl.string(B.nameUnformattedNitro) : "",
                    pillText: O.intl.string(O.t["jyYgZ+"]),
                    primaryAsset: z ?? void 0,
                    primaryAssetClassName: F ? R.DC : void 0,
                    caption: null != Y ? O.intl.formatToPlainString(O.t.Hu4jfi, { date: new Date(Y) }) : void 0,
                    description:
                        null != B
                            ? B.status === S.Wo.UPCOMING
                                ? O.intl.formatToPlainString(O.t.a1eKDi, { days: B.daysLeft })
                                : (0, T.T)(B.id, B.tenureReqNumMonths)
                            : void 0,
                    progress: W ?? void 0,
                    ctaText: O.intl.string(O.t.jVcuVY),
                    onCtaClick: () => (0, f.D)({ analyticsLocations: a }),
                },
                t = [
                    U
                        ? {
                              id: "premiumGroup",
                              title: O.intl.string(v.default.YkvksF),
                              description: O.intl.formatToPlainString(v.default.JlyGQj, {
                                  totalSeats: N.aw,
                                  premiumGroupProductName: (0, N.DP)(),
                              }),
                              pillText: O.intl.string(O.t.oW0eUd),
                              primaryAsset: y,
                              ctaText: O.intl.string(O.t.jVcuVY),
                              onCtaClick: () => {
                                  (0, r.mMO)(async () => {
                                      let { default: e } = await n.e("69595").then(n.bind(n, 526710));
                                      return (t) => (0, i.jsx)(e, { ...t });
                                  });
                              },
                          }
                        : null,
                    k
                        ? {
                              id: "recurring3PPromotions",
                              title: O.intl.string(O.t.m7PucM),
                              description: O.intl.format(O.t.zh1X7u, {}),
                              pillText: O.intl.string(O.t.oW0eUd),
                              backgroundAssetUrl: D.A,
                              progress: K.getDate() / Z,
                              ctaText: O.intl.string(O.t.w7s5Qr),
                              onCtaClick: () => (0, E.uE)({ analyticsLocations: a }),
                          }
                        : null,
                    {
                        id: "displayNameStyles",
                        title: O.intl.string(O.t.OLtTrt),
                        description: O.intl.string(O.t["di/pXR"]),
                        onCtaClick: H,
                        primaryAsset: L.A,
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
                        primaryAsset: G.A,
                        ctaText: O.intl.string(O.t.jVcuVY),
                        onCtaClick: V,
                    },
                    {
                        id: "newAppStylesUpdateJune2024",
                        title: O.intl.string(O.t.rkb1vA),
                        description: O.intl.string(O.t["1uPk1Z"]),
                        primaryAsset: P,
                        ctaText: O.intl.string(O.t.y9TxXV),
                        onCtaClick: w,
                    },
                ],
                s = (t = t.filter((e) => null != e))[0].featured,
                l = s ? 5 : 6;
            return t.splice(+!!s, 0, e), t.length > l && t.splice(l, t.length - l), t;
        }, [B, z, F, Y, U, k, Z, K, a, H, w, V, W]);
    return (0, i.jsxs)("div", {
        className: R.uW,
        children: [
            (0, i.jsx)(r.Heading, { variant: "display-sm", className: R.R_, children: O.intl.string(O.t.Aw5DRm) }),
            (0, i.jsx)("div", {
                className: R.Ui,
                children: q.map((e, n) => {
                    if (null == e) return;
                    let s = 0 === n && !0 === e.featured;
                    return (0, i.jsx)(
                        "div",
                        {
                            id: e.id,
                            className: l()({ [R.Nq]: s }),
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
