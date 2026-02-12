n.d(t, { A: () => G });
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
    C = n(95859),
    T = n(30084),
    S = n(88001),
    I = n(652215),
    f = n(355097),
    N = n(518582),
    b = n(985018),
    j = n(674547),
    v = n(241015),
    O = n(15830),
    R = n(817577),
    y = n(804368),
    P = n(641836),
    L = n(174872),
    D = n(509442),
    M = n(864579);
function G() {
    let { analyticsLocations: e } = (0, c.Ay)(o.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, p.O9)(),
        a = h.A.useExperiment({ location: "PremiumWhatsNewSection" }).enabled,
        G = (0, _.A)({ scrollPosition: f._F.TRY_IT_OUT, analyticsLocations: e }),
        U = (0, s.useCallback)(() => {
            (0, g.openUserSettings)(
                m.X.PROFILE_PANEL,
                { section: I.nc_.PROFILE_CUSTOMIZATION, analyticsLocations: e },
                () => (0, u.L)({ analyticsLocations: e }),
            );
        }, [e]),
        k = (0, s.useCallback)(() => {
            let e = (0, A.WJ)("openCustomAppSettings");
            (0, g.openUserSettings)(e ? m.X.APPEARANCE_IN_APP_ICON : m.X.APPEARANCE_PANEL, {
                section: I.nc_.APPEARANCE,
                scrollPosition: e ? void 0 : f.kq.CUSTOM_APP_ICONS,
            });
        }, []),
        { currentDate: V, nDaysInMonth: H } = (0, s.useMemo)(() => {
            let e = new Date();
            return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
        }, []),
        w = (0, s.useMemo)(() => {
            let s = {
                    id: "tenureBadge",
                    title: b.intl.string(b.t.rnsqpa),
                    pillText: b.intl.string(b.t["jyYgZ+"]),
                    primaryAsset: (0, i.jsx)(C.A, {}),
                    ctaText: b.intl.string(b.t.jVcuVY),
                    onCtaClick: () => (0, T.D)({ analyticsLocations: e }),
                },
                l = [
                    t
                        ? {
                              id: "premiumGroup",
                              title: b.intl.string(N.default.YkvksF),
                              description: b.intl.formatToPlainString(N.default.JlyGQj, {
                                  totalSeats: S.aw,
                                  premiumGroupProductName: (0, S.DP)(),
                              }),
                              pillText: b.intl.string(b.t.oW0eUd),
                              primaryAsset: R,
                              ctaText: b.intl.string(b.t.jVcuVY),
                              onCtaClick: () => {
                                  (0, r.mMO)(async () => {
                                      let { default: e } = await n.e("69595").then(n.bind(n, 526710));
                                      return (t) => (0, i.jsx)(e, { ...t });
                                  });
                              },
                          }
                        : null,
                    a
                        ? {
                              id: "recurring3PPromotions",
                              title: b.intl.string(b.t.m7PucM),
                              description: b.intl.format(b.t.zh1X7u, {}),
                              pillText: b.intl.string(b.t.oW0eUd),
                              primaryAsset: L.A,
                              progress: V.getDate() / H,
                              ctaText: b.intl.string(b.t.w7s5Qr),
                              onCtaClick: () => (0, E.uE)({ analyticsLocations: e }),
                          }
                        : null,
                    {
                        id: "displayNameStyles",
                        title: b.intl.string(v.default.ABtBDQ),
                        description: b.intl.string(v.default.jhmU5E),
                        onCtaClick: U,
                        primaryAsset: P.A,
                        ctaText: b.intl.string(b.t.jVcuVY),
                        pillText: b.intl.string(b.t.y2b7CA),
                    },
                    {
                        id: "customThemes",
                        title: b.intl.string(j.default["76L4b7"]),
                        description: b.intl.string(j.default.i3n50h),
                        primaryAsset: D.A,
                        ctaText: b.intl.string(b.t.jVcuVY),
                        onCtaClick: () => {
                            (0, d.nf)(d.HP.CUSTOM_THEME);
                        },
                    },
                    {
                        id: "permadecos",
                        title: b.intl.string(b.t["57ngoo"]),
                        description: b.intl.string(b.t.piFFjd),
                        primaryAsset: M.A,
                        ctaText: b.intl.string(b.t.jVcuVY),
                        onCtaClick: G,
                    },
                    {
                        id: "newAppStylesUpdateJune2024",
                        title: b.intl.string(b.t.XQCSri),
                        description: b.intl.string(b.t.HC5wVV),
                        primaryAsset: y,
                        ctaText: b.intl.string(b.t.y9TxXV),
                        onCtaClick: k,
                    },
                ],
                o = (l = l.filter((e) => null != e))[0].featured,
                c = o ? 5 : 6;
            return l.splice(+!!o, 0, s), l.length > c && l.splice(c, l.length - c), l;
        }, [t, a, H, V, e, U, k, G]);
    return (0, i.jsxs)("div", {
        className: O.uW,
        children: [
            (0, i.jsx)(r.Heading, { variant: "display-sm", className: O.R_, children: b.intl.string(b.t.Aw5DRm) }),
            (0, i.jsx)("div", {
                className: O.Ui,
                children: w.map((e, t) => {
                    if (null == e) return;
                    let n = 0 === t && !0 === e.featured;
                    return (0, i.jsx)(
                        "div",
                        {
                            className: l()({ [O.Nq]: n }),
                            children: (0, i.jsx)(x.S, { ...e, glowing: null === e.id, featured: n }),
                        },
                        e.id,
                    );
                }),
            }),
        ],
    });
}
