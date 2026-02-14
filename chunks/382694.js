n.d(t, { A: () => V });
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
    R = n(520650),
    y = n(927961),
    P = n(950268),
    L = n(817577),
    D = n(804368),
    M = n(419455),
    G = n(174872),
    U = n(509442),
    k = n(864579);
function V(e) {
    let { glowingPerkId: t = null } = e,
        { analyticsLocations: a } = (0, c.Ay)(o.A.PREMIUM_MARKETING_PERK_CARD),
        V = (0, p.O9)(),
        H = h.A.useExperiment({ location: "PremiumWhatsNewSection" }).enabled,
        w = (0, _.A)({ scrollPosition: j._F.TRY_IT_OUT, analyticsLocations: a }),
        B = (0, s.useCallback)(() => {
            (0, g.openUserSettings)(
                m.X.PROFILE_PANEL,
                { section: b.nc_.PROFILE_CUSTOMIZATION, analyticsLocations: a },
                () => (0, u.L)({ analyticsLocations: a }),
            );
        }, [a]),
        Y = (0, s.useCallback)(() => {
            let e = (0, A.WJ)("openCustomAppSettings");
            (0, g.openUserSettings)(e ? m.X.APPEARANCE_IN_APP_ICON : m.X.APPEARANCE_PANEL, {
                section: b.nc_.APPEARANCE,
                scrollPosition: e ? void 0 : j.kq.CUSTOM_APP_ICONS,
            });
        }, []),
        F = (0, S.$F)(),
        z = (0, S.Xb)(),
        W = F?.status === S.Wo.UPCOMING,
        K = (0, I.N)(F?.id, { ambient: !W }),
        Z = (0, C.z)(),
        { currentDate: q, nDaysInMonth: X } = (0, s.useMemo)(() => {
            let e = new Date();
            return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
        }, []),
        J = (0, s.useMemo)(() => {
            let e = {
                    id: "tenureBadge",
                    title: null != F ? O.intl.string(F.nameUnformattedNitro) : "",
                    pillText: O.intl.string(O.t["jyYgZ+"]),
                    primaryAsset: K ?? void 0,
                    primaryAssetClassName: W ? P.DC : void 0,
                    caption: null != z ? O.intl.formatToPlainString(O.t.Hu4jfi, { date: new Date(z) }) : void 0,
                    description:
                        null != F
                            ? F.status === S.Wo.UPCOMING
                                ? O.intl.formatToPlainString(O.t.a1eKDi, { days: F.daysLeft })
                                : (0, T.T)(F.id, F.tenureReqNumMonths)
                            : void 0,
                    progress: Z ?? void 0,
                    ctaText: O.intl.string(O.t.jVcuVY),
                    onCtaClick: () => (0, f.D)({ analyticsLocations: a }),
                },
                t = [
                    V
                        ? {
                              id: "premiumGroup",
                              title: O.intl.string(v.default.YkvksF),
                              description: O.intl.formatToPlainString(v.default.JlyGQj, {
                                  totalSeats: N.aw,
                                  premiumGroupProductName: (0, N.DP)(),
                              }),
                              pillText: O.intl.string(O.t.oW0eUd),
                              primaryAsset: L,
                              ctaText: O.intl.string(O.t.jVcuVY),
                              onCtaClick: () => {
                                  (0, r.mMO)(async () => {
                                      let { default: e } = await n.e("69595").then(n.bind(n, 526710));
                                      return (t) => (0, i.jsx)(e, { ...t });
                                  });
                              },
                          }
                        : null,
                    H
                        ? {
                              id: "recurring3PPromotions",
                              title: O.intl.string(O.t.m7PucM),
                              description: O.intl.format(O.t.zh1X7u, {}),
                              pillText: O.intl.string(O.t.oW0eUd),
                              backgroundAssetUrl: G.A,
                              progress: q.getDate() / X,
                              ctaText: O.intl.string(O.t.w7s5Qr),
                              onCtaClick: () => (0, E.uE)({ analyticsLocations: a }),
                          }
                        : null,
                    {
                        id: "displayNameStyles",
                        title: O.intl.string(y.default.ABtBDQ),
                        description: O.intl.string(y.default.jhmU5E),
                        onCtaClick: B,
                        primaryAsset: M.A,
                        ctaText: O.intl.string(O.t.jVcuVY),
                        pillText: O.intl.string(O.t.y2b7CA),
                    },
                    {
                        id: "customThemes",
                        title: O.intl.string(R.default["76L4b7"]),
                        description: O.intl.string(R.default.i3n50h),
                        primaryAsset: U.A,
                        ctaText: O.intl.string(O.t.jVcuVY),
                        onCtaClick: () => {
                            (0, d.nf)(d.HP.CUSTOM_THEME);
                        },
                    },
                    {
                        id: "permadecos",
                        title: O.intl.string(O.t["57ngoo"]),
                        description: O.intl.string(O.t.piFFjd),
                        primaryAsset: k.A,
                        ctaText: O.intl.string(O.t.jVcuVY),
                        onCtaClick: w,
                    },
                    {
                        id: "newAppStylesUpdateJune2024",
                        title: O.intl.string(O.t.XQCSri),
                        description: O.intl.string(O.t.HC5wVV),
                        primaryAsset: D,
                        ctaText: O.intl.string(O.t.y9TxXV),
                        onCtaClick: Y,
                    },
                ],
                s = (t = t.filter((e) => null != e))[0].featured,
                l = s ? 5 : 6;
            return t.splice(+!!s, 0, e), t.length > l && t.splice(l, t.length - l), t;
        }, [F, K, W, z, V, H, X, q, a, B, Y, w, Z]);
    return (0, i.jsxs)("div", {
        className: P.uW,
        children: [
            (0, i.jsx)(r.Heading, { variant: "display-sm", className: P.R_, children: O.intl.string(O.t.Aw5DRm) }),
            (0, i.jsx)("div", {
                className: P.Ui,
                children: J.map((e, n) => {
                    if (null == e) return;
                    let s = 0 === n && !0 === e.featured;
                    return (0, i.jsx)(
                        "div",
                        {
                            id: e.id,
                            className: l()({ [P.Nq]: s }),
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
