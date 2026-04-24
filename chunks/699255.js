n.d(t, { A: () => ec });
var a = n(627968),
    i = n(64700),
    r = n(771521),
    s = n(17928),
    l = n(192308),
    c = n(403581),
    o = n(975807),
    d = n(793574),
    u = n(688810),
    _ = n(562819),
    m = n(793943),
    p = n(31502),
    f = n(259065),
    A = n(95035),
    g = n(532794),
    h = n(245853),
    x = n(320118),
    b = n(976860),
    C = n(591179),
    N = n(462463),
    E = n(780964),
    R = n(858897),
    I = n(166403),
    v = n(612669),
    T = n(920050),
    S = n(892227),
    j = n(81466),
    y = n(661531),
    O = n(834730),
    P = n(318254),
    M = n(490285),
    L = n(985018),
    D = n(875679);
let k = () => {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, x.F)({ location: "NitroOrbsWhatsNewCardFooter" });
    if (!e || null == t) return null;
    let n =
        null != t.next_reward_date && "" !== t.next_reward_date
            ? Math.max(1, (0, S.default)(new Date(t.next_reward_date), new Date()))
            : null;
    return (0, a.jsxs)("div", {
        className: D.kL,
        children: [
            null != n &&
                (0, a.jsxs)("div", {
                    className: D.nM,
                    children: [
                        (0, a.jsxs)("div", {
                            className: D.Pf,
                            children: [
                                (0, a.jsx)(j.C, { size: "sm", color: y.A.colors.TEXT_DEFAULT }),
                                (0, a.jsx)(O.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: L.intl.string(M.default.H2M13c),
                                }),
                            ],
                        }),
                        (0, a.jsx)(O.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: L.intl.format(M.default.xedPIb, { days: n }),
                        }),
                    ],
                }),
            null != n && (0, a.jsx)("div", { className: D.yF }),
            (0, a.jsxs)("div", {
                className: D.nM,
                children: [
                    (0, a.jsxs)("div", {
                        className: D.Pf,
                        children: [
                            (0, a.jsx)(P.C, { size: "sm", color: y.A.colors.TEXT_DEFAULT }),
                            (0, a.jsx)(O.E, {
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: L.intl.string(M.default.F7Bhsg),
                            }),
                        ],
                    }),
                    (0, a.jsx)(O.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: L.intl.format(M.default.UDwsvL, { orbsCount: t.total_rewarded_from_program }),
                    }),
                ],
            }),
        ],
    });
};
var U = n(256358),
    w = n(503698),
    G = n.n(w),
    B = n(531260),
    F = n(655752),
    V = n(989349),
    H = n.n(V),
    z = n(112848),
    W = n(764231),
    X = n(627380),
    K = n(425713),
    Y = n(30084),
    $ = n(788868),
    q = n(792641),
    Z = n(714206),
    Q = n(88001),
    J = n(652215),
    ee = n(758836),
    et = n(654487),
    en = n(466919),
    ea = n(555599),
    ei = n(817577),
    er = n(419455),
    es = n(288604),
    el = n(509442);
function ec() {
    let { analyticsLocations: e } = (0, u.Ay)(d.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, C.X)("useWhatsNewPerkCards"),
        S = (0, v.O9)(),
        { logitechCard: j, steelseriesCard: y } = (0, U.A)(),
        O = (0, U.S)(),
        P = (0, s.bG)([I.A], () => I.A.getPremiumTypeSubscription()),
        D = P?.hasActiveTrial ?? !1,
        w = (0, N.A)({ analyticsLocations: e }),
        V = (0, i.useCallback)(() => {
            (0, R.openUserSettings)(E.X.PROFILE_PANEL, { analyticsLocations: e }, () =>
                (0, f.L)({ analyticsLocations: e }),
            );
        }, [e]),
        ec = (0, i.useCallback)(() => {
            (0, R.openUserSettings)(E.X.PROFILE_PANEL, { analyticsLocations: e }, () =>
                (0, _.L)({ analyticsLocations: e }),
            );
        }, [e]),
        eo = (0, i.useCallback)(() => {
            (0, R.openUserSettings)(E.X.APPEARANCE_IN_APP_ICON_CATEGORY);
        }, []),
        ed = () => {
            (0, o.A)(Q.TE);
        },
        eu = (0, i.useCallback)(() => {
            D
                ? (0, l.openModalLazy)(async () => {
                      let { default: e } = await n.e("99709").then(n.bind(n, 516044));
                      return (t) => (0, a.jsx)(e, { ...t });
                  })
                : (0, g.A)({
                      subscriptionTier: $.pe.TIER_2,
                      initialPlanId: $.gD.PREMIUM_GROUP_MONTH,
                      analyticsLocations: e,
                  });
        }, [e, D]),
        e_ = (function (e) {
            let { fractionalState: t } = (0, B.A)(),
                n = t === $.xc.FP_ONLY,
                a = (0, z.$F)(),
                r = (0, z.Xb)(),
                s = a?.status === z.Wo.UPCOMING || n,
                l = (0, K.N)(a?.id),
                c = (function () {
                    let e = (0, z.$F)(),
                        t = (0, F.P)(),
                        n = (0, z.Xb)();
                    if (null == e || null == t || null == n) return null;
                    let a = H()(),
                        i = H()(n),
                        r = e.status === z.Wo.UPCOMING ? 0 : e.tenureReqNumMonths,
                        s = t.tenureReqNumMonths,
                        l = i.clone().add(r, "months"),
                        c = i.clone().add(s, "months").diff(l);
                    return Math.max(0, Math.min(1, (a.diff(l) - 864e5) / c));
                })(),
                o = (0, X.t)(),
                d = (0, F.P)();
            return (0, i.useMemo)(() => {
                let t,
                    i = null != d ? L.intl.string(d.nameUnformattedNitro) : void 0;
                return (
                    null == a
                        ? n && (t = (0, W.T)($.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0)
                        : (t =
                              a.status === z.Wo.UPCOMING
                                  ? L.intl.formatToPlainString(L.t.a1eKDi, { days: o?.days ?? 0 })
                                  : ((function (e, t) {
                                        if (null != e && null != t) {
                                            if (e.days <= 30)
                                                return L.intl.formatToPlainString(L.t.NEXoaI, {
                                                    days: e.days,
                                                    nextBadgeName: t,
                                                });
                                            if (e.months <= 3)
                                                return L.intl.formatToPlainString(L.t.KDV8oD, {
                                                    months: e.months,
                                                    nextBadgeName: t,
                                                });
                                        }
                                    })(o, i) ??
                                    (0, W.T)(a.id, a.tenureReqNumMonths) ??
                                    void 0)),
                    {
                        id: T.TENURE_BADGE_CARD_ID,
                        title: null != a ? L.intl.string(a.nameUnformattedNitro) : n ? L.intl.string(L.t.tx9Fvw) : "",
                        pillText: L.intl.string(L.t["jyYgZ+"]),
                        primaryAsset: null != l ? (s ? l.standard : l.ambientLarge) : n ? Z : null,
                        primaryAssetClassName: G()(q.p, { [q.n]: s }),
                        caption: null != r ? L.intl.formatToPlainString(L.t.Hu4jfi, { date: new Date(r) }) : void 0,
                        description: t,
                        subscriptionRequired: !0,
                        progress: c ?? void 0,
                        ctaText: L.intl.string(L.t.jVcuVY),
                        onCtaClick: () => (0, Y.D)({ analyticsLocations: e }),
                    }
                );
            }, [a, l, s, r, c, n, o, d, e]);
        })(e),
        { shouldShowBonusOrbsUX: em, multiplier: ep } = (0, h.Dl)(et.rE.NITRO_HOME_MARKETING),
        ef = (0, p.l)("useWhatsNewPerkCards"),
        { isEligible: eA, programReward: eg } = (0, x.F)({ location: "useWhatsNewPerkCards" }),
        eh = ef && eA && null != eg;
    return (0, i.useMemo)(() => {
        let e = [
                O ? null : j,
                O ? null : y,
                eh
                    ? {
                          id: T.NITRO_ORBS_REWARDS_CARD_ID,
                          title: L.intl.string(M.default.hx5AFp),
                          description: L.intl.format(M.default["Pz+6Ix"], { orbsCount: eg?.reward_amount ?? 0 }),
                          primaryAsset: "/assets/0e1f72ee8aba3549.svg",
                          footerContent: (0, a.jsx)(k, {}),
                          ctaText: L.intl.string(M.default.BxjHiu),
                          onCtaClick: () => (0, b.pX)(J.BVt.COLLECTIBLES_SHOP_WITH_TAB(ee.G2.ORBS)),
                      }
                    : null,
                em
                    ? {
                          id: T.QUEST_ORB_MULTIPLIER_CARD_ID,
                          title: L.intl.string(L.t.F2MShO),
                          description: L.intl.format(L.t.NpUfej, { bonusOrbMultiplier: ep }),
                          pillText: ef ? void 0 : L.intl.string(L.t.oW0eUd),
                          primaryAsset:
                              "https://cdn.discordapp.com/assets/content/6a45cf480a4894d29a155fbc23df4dca701a69e7f09227ef964a61bdb6e5833a.png",
                          ctaText: L.intl.string(L.t.jVcuVY),
                          onCtaClick: () => (0, b.pX)(J.BVt.QUEST_HOME),
                          primaryAssetClassName: ea.Nf,
                      }
                    : null,
                S
                    ? {
                          id: T.PREMIUM_GROUP_CARD_ID,
                          title: L.intl.string(en.default.YkvksF),
                          description: (0, a.jsxs)(a.Fragment, {
                              children: [
                                  L.intl.formatToPlainString(en.default.JlyGQj, {
                                      totalSeats: Q.aw,
                                      premiumGroupProductName: (0, Q.DP)(),
                                  }),
                                  (0, a.jsx)("div", {
                                      className: ea.LF,
                                      children: (0, a.jsx)(A.A, {
                                          onClick: ed,
                                          children: L.intl.string(en.default.yYyGJH),
                                      }),
                                  }),
                              ],
                          }),
                          pillText: L.intl.string(L.t.oW0eUd),
                          primaryAsset: ei,
                          ctaIcon: c.t,
                          ctaIconPosition: "start",
                          ctaText: L.intl.string(L.t.IJI7yk),
                          onCtaClick: eu,
                      }
                    : null,
                {
                    id: T.DISPLAY_NAME_STYLES_CARD_ID,
                    title: L.intl.string(L.t.OLtTrt),
                    description: L.intl.string(L.t["di/pXR"]),
                    onCtaClick: t ? w : V,
                    ctaText: L.intl.string(L.t.jVcuVY),
                    primaryAsset: er.A,
                },
                {
                    id: T.CLIENT_THEMES_CARD_ID,
                    title: L.intl.string(L.t.acc6h6),
                    description: L.intl.formatToPlainString(L.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: el.A,
                    ctaText: L.intl.string(L.t.jVcuVY),
                    onCtaClick: () => {
                        (0, m.nf)(m.HP.CUSTOM_THEME);
                    },
                },
                {
                    id: T.PERMADECOS_CARD_ID,
                    title: L.intl.string(L.t.L14NZN),
                    description: L.intl.string(L.t.eCZkAI),
                    primaryAsset: (0, a.jsx)(r.u, { alt: "", ariaHidden: !0 }),
                    ctaText: L.intl.string(L.t.jVcuVY),
                    onCtaClick: t ? w : ec,
                },
                {
                    id: T.CUSTOM_APP_ICONS_CARD_ID,
                    title: L.intl.string(L.t["GU+wqh"]),
                    description: L.intl.string(L.t["1uPk1Z"]),
                    primaryAsset: es.A,
                    ctaText: L.intl.string(L.t.y9TxXV),
                    onCtaClick: eo,
                },
            ],
            n = (e = e.filter((e) => null != e))[0].featured,
            i = n ? 5 : 6;
        return e.splice(+!!n, 0, e_), e.length > i && e.splice(i, e.length - i), e;
    }, [ef, e_, eh, eg, S, em, ep, V, eo, ec, eu, w, t, j, y, O]);
}
