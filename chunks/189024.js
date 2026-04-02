n.d(t, { A: () => ei });
var i = n(627968),
    s = n(64700),
    l = n(367622),
    a = n(311907),
    r = n(582754),
    o = n(397927),
    d = n(157559),
    c = n(736653),
    u = n(975807),
    m = n(793574),
    g = n(688810),
    _ = n(562819),
    x = n(793943),
    A = n(259065),
    h = n(95035),
    p = n(532794),
    T = n(829219),
    f = n(859703),
    S = n(341915),
    E = n(890687),
    b = n(590202),
    C = n(591179),
    N = n(462463),
    v = n(780964),
    I = n(358776),
    j = n(840065),
    y = n(166403),
    O = n(730784),
    R = n(398523),
    P = n(881373),
    L = n(152815),
    D = n(612669),
    G = n(852218),
    M = n(161319),
    k = n(920050),
    U = n(9458),
    w = n(788868),
    V = n(88001),
    B = n(654487),
    F = n(653624),
    H = n(519412),
    z = n(755157),
    Y = n(985018),
    X = n(547807),
    K = n(998663),
    W = n(817577),
    Z = n(419455),
    q = n(288604),
    Q = n(223157),
    J = n(863882),
    $ = n(893160),
    ee = n(384565),
    et = n(365580),
    en = n(509442);
function ei() {
    let { analyticsLocations: e } = (0, g.Ay)(m.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, C.X)("useWhatsNewPerkCards"),
        ei = (0, c.Ay)(),
        es = (0, D.O9)(),
        el = (0, P.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
        ea = (0, O.R)({ location: "PremiumWhatsNewSection" }),
        er = R.A.useExperiment({ location: "PremiumWhatsNewSection" }).enabled,
        eo = (0, a.bG)([y.A], () => y.A.getPremiumTypeSubscription()),
        ed = eo?.hasActiveTrial ?? !1,
        ec = (0, a.bG)(
            [f.A],
            () => [...f.A.quests.values()].find((e) => e.config.features.includes(B.Li.NITRO_CONTROL_CTA)) ?? null,
        ),
        eu = (0, N.A)({ analyticsLocations: e }),
        { launchInGameActivity: em } = (0, E.zW)(ec),
        eg = (0, s.useCallback)(() => {
            (0, j.openUserSettings)(v.X.PROFILE_PANEL, { analyticsLocations: e }, () =>
                (0, A.L)({ analyticsLocations: e }),
            );
        }, [e]),
        e_ = (0, s.useCallback)(() => {
            (0, j.openUserSettings)(v.X.PROFILE_PANEL, { analyticsLocations: e }, () =>
                (0, _.L)({ analyticsLocations: e }),
            );
        }, [e]),
        ex = (0, s.useCallback)(() => {
            let e = (0, I.Ci)("openCustomAppSettings") ? v.X.DISPLAY_IN_APP_ICON_CATEGORY : v.X.APPEARANCE_IN_APP_ICON;
            (0, j.openUserSettings)(e);
        }, []),
        eA = (0, s.useCallback)(() => {
            null != ec &&
                (ec.userStatus?.enrolledAt == null
                    ? (0, T.Oy)(ec.id, {
                          questContent: S.uF.NITRO_HOME_PERK_CARD,
                          questContentCTA: b.Cy.START_QUEST,
                          sourceQuestContent: S.uF.NITRO_HOME_PERK_CARD,
                      }).then((e) => {
                          switch (e.type) {
                              case T.WM.SUCCESS:
                                  em();
                                  break;
                              case T.WM.CAPTCHA_FAILED:
                                  d.A.show({ title: Y.intl.string(Y.t["/CidxO"]), body: Y.intl.string(Y.t.HQdHg6) });
                                  break;
                              case T.WM.UNKNOWN_ERROR:
                                  d.A.show({ title: Y.intl.string(Y.t.R0RpRX), body: Y.intl.string(Y.t.OXD41D) });
                          }
                      })
                    : em());
        }, [ec, em]),
        eh = () => {
            (0, u.A)(V.TE);
        },
        ep = (0, s.useCallback)(() => {
            if (ea) {
                if (ed)
                    return void (0, o.mMO)(async () => {
                        let { default: e } = await n.e("99709").then(n.bind(n, 516044));
                        return (t) => (0, i.jsx)(e, { ...t });
                    });
                (0, p.A)({
                    subscriptionTier: w.pe.TIER_2,
                    initialPlanId: w.gD.PREMIUM_GROUP_MONTH,
                    analyticsLocations: e,
                });
            } else
                (0, o.mMO)(async () => {
                    let { default: e } = await n.e("69595").then(n.bind(n, 526710));
                    return (t) => (0, i.jsx)(e, { ...t });
                });
        }, [ea, e, ed]),
        eT = (0, U.A)(e),
        { currentDate: ef, nDaysInMonth: eS } = (0, s.useMemo)(() => {
            let e = new Date();
            return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
        }, []);
    return (0, s.useMemo)(() => {
        let n = null;
        if (null != ec) {
            let e = ec.userStatus?.completedAt != null;
            n = {
                id: k.NITRO_CONTROL_QUEST_CARD_ID,
                title: Y.intl.string(e ? z.default.S4okiP : z.default.lvidGa),
                description: Y.intl.string(e ? z.default.JXidUB : z.default["VghrI/"]),
                pillText: Y.intl.string(z.default["3rpSiP"]),
                primaryAsset: (0, r.Mw)(ei) ? et.A : ee.A,
                ctaText: Y.intl.string(e ? z.default.QBfwzW : z.default["1Ng1ci"]),
                onCtaClick: eA,
            };
        }
        let s = [
                n,
                el
                    ? {
                          id: k.LOGITECH_3PP_CARD_ID,
                          title: Y.intl.string(F.default.OlObRa),
                          description: Y.intl.format(F.default["/UNTlE"], {
                              discountPercent: P.aW,
                              termsUrl: "https://logitech.com",
                          }),
                          subscriptionRequired: !0,
                          progress: ef.getDate() / eS,
                          ctaText: Y.intl.string(F.default["bZLaD+"]),
                          onCtaClick: () => (0, L.P)({ partnerId: G.XY }),
                          blurTint: "#2E213D",
                          backgroundAssetUrl: J.A,
                          pillText: Y.intl.string(Y.t.y2b7CA),
                          caption: (0, i.jsx)("img", { src: Q.A, alt: "Logitech" }),
                      }
                    : null,
                es
                    ? {
                          id: k.PREMIUM_GROUP_CARD_ID,
                          title: Y.intl.string(H.default.YkvksF),
                          description: (0, i.jsxs)(i.Fragment, {
                              children: [
                                  Y.intl.formatToPlainString(H.default.JlyGQj, {
                                      totalSeats: V.aw,
                                      premiumGroupProductName: (0, V.DP)(),
                                  }),
                                  (0, i.jsx)("div", {
                                      className: X.LF,
                                      children: (0, i.jsx)(h.A, {
                                          onClick: eh,
                                          children: Y.intl.string(H.default.yYyGJH),
                                      }),
                                  }),
                              ],
                          }),
                          pillText: Y.intl.string(Y.t.oW0eUd),
                          primaryAsset: W,
                          ...(ea ? { ctaIcon: o.tvc, ctaIconPosition: "start" } : {}),
                          ctaText: Y.intl.string(ea ? Y.t.IJI7yk : Y.t.jVcuVY),
                          onCtaClick: ep,
                      }
                    : null,
                er
                    ? {
                          id: k.RECURRING_3P_PROMOTIONS_CARD_ID,
                          title: Y.intl.string(Y.t.m7PucM),
                          description: Y.intl.format(Y.t.zh1X7u, {}),
                          subscriptionRequired: !0,
                          pillText: Y.intl.string(Y.t.oW0eUd),
                          caption: (0, i.jsx)("img", { src: K, alt: "SteelSeries" }),
                          backgroundAssetUrl: $.A,
                          progress: ef.getDate() / eS,
                          ctaText: Y.intl.string(Y.t.w7s5Qr),
                          onCtaClick: () => (0, M.u)({ analyticsLocations: e, partnerIds: [G.KS, G.Cs] }),
                          blurTint: "#2E213D",
                      }
                    : null,
                {
                    id: k.DISPLAY_NAME_STYLES_CARD_ID,
                    title: Y.intl.string(Y.t.OLtTrt),
                    description: Y.intl.string(Y.t["di/pXR"]),
                    onCtaClick: t ? eu : eg,
                    ctaText: Y.intl.string(Y.t.jVcuVY),
                    primaryAsset: Z.A,
                    pillText: Y.intl.string(Y.t.y2b7CA),
                },
                {
                    id: k.CLIENT_THEMES_CARD_ID,
                    title: Y.intl.string(Y.t.acc6h6),
                    description: Y.intl.formatToPlainString(Y.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: en.A,
                    ctaText: Y.intl.string(Y.t.jVcuVY),
                    onCtaClick: () => {
                        (0, x.nf)(x.HP.CUSTOM_THEME);
                    },
                },
                {
                    id: k.PERMADECOS_CARD_ID,
                    title: Y.intl.string(Y.t.L14NZN),
                    description: Y.intl.string(Y.t.eCZkAI),
                    primaryAsset: (0, i.jsx)(l.u7P, { alt: "", ariaHidden: !0 }),
                    ctaText: Y.intl.string(Y.t.jVcuVY),
                    onCtaClick: t ? eu : e_,
                },
                {
                    id: k.CUSTOM_APP_ICONS_CARD_ID,
                    title: Y.intl.string(Y.t["GU+wqh"]),
                    description: Y.intl.string(Y.t["1uPk1Z"]),
                    primaryAsset: q.A,
                    ctaText: Y.intl.string(Y.t.y9TxXV),
                    onCtaClick: ex,
                },
            ],
            a = (s = s.filter((e) => null != e))[0].featured,
            d = a ? 5 : 6;
        return s.splice(+!!a, 0, eT), s.length > d && s.splice(d, s.length - d), s;
    }, [eT, ec, ei, eA, es, ea, er, eS, ef, e, eg, ex, e_, ep, eu, t, el]);
}
