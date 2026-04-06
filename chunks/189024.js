n.d(t, { A: () => er });
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
    b = n(245853),
    E = n(890687),
    C = n(590202),
    N = n(976860),
    v = n(591179),
    I = n(462463),
    j = n(780964),
    y = n(358776),
    O = n(858897),
    R = n(166403),
    P = n(730784),
    L = n(398523),
    D = n(881373),
    G = n(152815),
    M = n(612669),
    U = n(852218),
    k = n(161319),
    w = n(920050),
    V = n(9458),
    B = n(788868),
    F = n(88001),
    H = n(652215),
    z = n(654487),
    Y = n(653624),
    X = n(519412),
    K = n(755157),
    W = n(985018),
    Z = n(547807),
    q = n(998663),
    Q = n(817577),
    J = n(419455),
    $ = n(716925),
    ee = n(288604),
    et = n(223157),
    en = n(863882),
    ei = n(893160),
    es = n(384565),
    el = n(365580),
    ea = n(509442);
function er() {
    let { analyticsLocations: e } = (0, g.Ay)(m.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, v.X)("useWhatsNewPerkCards"),
        er = (0, c.Ay)(),
        eo = (0, M.O9)(),
        ed = (0, D.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
        ec = (0, P.R)({ location: "PremiumWhatsNewSection" }),
        eu = L.A.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
        em = (0, a.bG)([R.A], () => R.A.getPremiumTypeSubscription()),
        eg = em?.hasActiveTrial ?? !1,
        e_ = (0, a.bG)(
            [f.A],
            () => [...f.A.quests.values()].find((e) => e.config.features.includes(z.Li.NITRO_CONTROL_CTA)) ?? null,
        ),
        ex = (0, I.A)({ analyticsLocations: e }),
        { launchInGameActivity: eA } = (0, E.zW)(e_),
        eh = (0, s.useCallback)(() => {
            (0, O.openUserSettings)(j.X.PROFILE_PANEL, { analyticsLocations: e }, () =>
                (0, A.L)({ analyticsLocations: e }),
            );
        }, [e]),
        ep = (0, s.useCallback)(() => {
            (0, O.openUserSettings)(j.X.PROFILE_PANEL, { analyticsLocations: e }, () =>
                (0, _.L)({ analyticsLocations: e }),
            );
        }, [e]),
        eT = (0, s.useCallback)(() => {
            let e = (0, y.Ci)("openCustomAppSettings") ? j.X.DISPLAY_IN_APP_ICON_CATEGORY : j.X.APPEARANCE_IN_APP_ICON;
            (0, O.openUserSettings)(e);
        }, []),
        ef = (0, s.useCallback)(() => {
            null != e_ &&
                (e_.userStatus?.enrolledAt == null
                    ? (0, T.Oy)(e_.id, {
                          questContent: S.uF.NITRO_HOME_PERK_CARD,
                          questContentCTA: C.Cy.START_QUEST,
                          sourceQuestContent: S.uF.NITRO_HOME_PERK_CARD,
                      }).then((e) => {
                          switch (e.type) {
                              case T.WM.SUCCESS:
                                  eA();
                                  break;
                              case T.WM.CAPTCHA_FAILED:
                                  d.A.show({ title: W.intl.string(W.t["/CidxO"]), body: W.intl.string(W.t.HQdHg6) });
                                  break;
                              case T.WM.UNKNOWN_ERROR:
                                  d.A.show({ title: W.intl.string(W.t.R0RpRX), body: W.intl.string(W.t.OXD41D) });
                          }
                      })
                    : eA());
        }, [e_, eA]),
        eS = () => {
            (0, u.A)(F.TE);
        },
        eb = (0, s.useCallback)(() => {
            if (ec) {
                if (eg)
                    return void (0, o.mMO)(async () => {
                        let { default: e } = await n.e("99709").then(n.bind(n, 516044));
                        return (t) => (0, i.jsx)(e, { ...t });
                    });
                (0, p.A)({
                    subscriptionTier: B.pe.TIER_2,
                    initialPlanId: B.gD.PREMIUM_GROUP_MONTH,
                    analyticsLocations: e,
                });
            } else
                (0, o.mMO)(async () => {
                    let { default: e } = await n.e("69595").then(n.bind(n, 526710));
                    return (t) => (0, i.jsx)(e, { ...t });
                });
        }, [ec, e, eg]),
        eE = (0, V.A)(e),
        { shouldShowBonusOrbsUX: eC, multiplier: eN } = (0, b.Dl)(z.rE.NITRO_HOME_MARKETING),
        { currentDate: ev, nDaysInMonth: eI } = (0, s.useMemo)(() => {
            let e = new Date();
            return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
        }, []);
    return (0, s.useMemo)(() => {
        let n = null;
        if (null != e_) {
            let e = e_.userStatus?.completedAt != null;
            n = {
                id: w.NITRO_CONTROL_QUEST_CARD_ID,
                title: W.intl.string(e ? K.default.S4okiP : K.default.lvidGa),
                description: W.intl.string(e ? K.default.JXidUB : K.default["VghrI/"]),
                pillText: W.intl.string(K.default["3rpSiP"]),
                primaryAsset: (0, r.Mw)(er) ? el.A : es.A,
                ctaText: W.intl.string(e ? K.default.QBfwzW : K.default["1Ng1ci"]),
                onCtaClick: ef,
            };
        }
        let s = [
                n,
                ed
                    ? {
                          id: w.LOGITECH_3PP_CARD_ID,
                          title: W.intl.string(Y.default.OlObRa),
                          description: W.intl.format(Y.default["/UNTlE"], {
                              discountPercent: D.aW,
                              termsUrl: "https://www.logitech.com/terms",
                          }),
                          subscriptionRequired: !0,
                          progress: ev.getDate() / eI,
                          ctaText: W.intl.string(Y.default["bZLaD+"]),
                          onCtaClick: () => (0, G.P)({ partnerId: U.XY }),
                          blurTint: "#2E213D",
                          backgroundAssetUrl: en.A,
                          pillText: W.intl.string(W.t.y2b7CA),
                          caption: (0, i.jsx)("img", { src: et.A, alt: "Logitech" }),
                      }
                    : null,
                eo
                    ? {
                          id: w.PREMIUM_GROUP_CARD_ID,
                          title: W.intl.string(X.default.YkvksF),
                          description: (0, i.jsxs)(i.Fragment, {
                              children: [
                                  W.intl.formatToPlainString(X.default.JlyGQj, {
                                      totalSeats: F.aw,
                                      premiumGroupProductName: (0, F.DP)(),
                                  }),
                                  (0, i.jsx)("div", {
                                      className: Z.LF,
                                      children: (0, i.jsx)(h.A, {
                                          onClick: eS,
                                          children: W.intl.string(X.default.yYyGJH),
                                      }),
                                  }),
                              ],
                          }),
                          pillText: W.intl.string(W.t.oW0eUd),
                          primaryAsset: Q,
                          ...(ec ? { ctaIcon: o.tvc, ctaIconPosition: "start" } : {}),
                          ctaText: W.intl.string(ec ? W.t.IJI7yk : W.t.jVcuVY),
                          onCtaClick: eb,
                      }
                    : null,
                eu
                    ? {
                          id: w.RECURRING_3P_PROMOTIONS_CARD_ID,
                          title: W.intl.string(W.t.m7PucM),
                          description: W.intl.format(W.t.zh1X7u, {}),
                          subscriptionRequired: !0,
                          pillText: W.intl.string(W.t.oW0eUd),
                          caption: (0, i.jsx)("img", { src: q, alt: "SteelSeries" }),
                          backgroundAssetUrl: ei.A,
                          progress: ev.getDate() / eI,
                          ctaText: W.intl.string(W.t.w7s5Qr),
                          onCtaClick: () => (0, k.u)({ analyticsLocations: e, partnerIds: [U.KS, U.Cs] }),
                          blurTint: "#2E213D",
                      }
                    : null,
                eC
                    ? {
                          id: w.QUEST_ORB_MULTIPLIER_CARD_ID,
                          title: W.intl.string(W.t.F2MShO),
                          description: W.intl.format(W.t.NpUfej, { bonusOrbMultiplier: eN }),
                          pillText: W.intl.string(W.t.oW0eUd),
                          primaryAsset: $.A,
                          ctaText: W.intl.string(W.t.jVcuVY),
                          onCtaClick: () => (0, N.pX)(H.BVt.QUEST_HOME),
                      }
                    : null,
                {
                    id: w.DISPLAY_NAME_STYLES_CARD_ID,
                    title: W.intl.string(W.t.OLtTrt),
                    description: W.intl.string(W.t["di/pXR"]),
                    onCtaClick: t ? ex : eh,
                    ctaText: W.intl.string(W.t.jVcuVY),
                    primaryAsset: J.A,
                    pillText: W.intl.string(W.t.y2b7CA),
                },
                {
                    id: w.CLIENT_THEMES_CARD_ID,
                    title: W.intl.string(W.t.acc6h6),
                    description: W.intl.formatToPlainString(W.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: ea.A,
                    ctaText: W.intl.string(W.t.jVcuVY),
                    onCtaClick: () => {
                        (0, x.nf)(x.HP.CUSTOM_THEME);
                    },
                },
                {
                    id: w.PERMADECOS_CARD_ID,
                    title: W.intl.string(W.t.L14NZN),
                    description: W.intl.string(W.t.eCZkAI),
                    primaryAsset: (0, i.jsx)(l.u7P, { alt: "", ariaHidden: !0 }),
                    ctaText: W.intl.string(W.t.jVcuVY),
                    onCtaClick: t ? ex : ep,
                },
                {
                    id: w.CUSTOM_APP_ICONS_CARD_ID,
                    title: W.intl.string(W.t["GU+wqh"]),
                    description: W.intl.string(W.t["1uPk1Z"]),
                    primaryAsset: ee.A,
                    ctaText: W.intl.string(W.t.y9TxXV),
                    onCtaClick: eT,
                },
            ],
            a = (s = s.filter((e) => null != e))[0].featured,
            d = a ? 5 : 6;
        return s.splice(+!!a, 0, eE), s.length > d && s.splice(d, s.length - d), s;
    }, [eE, e_, er, ef, eo, ec, eu, eC, eN, eI, ev, e, eh, eT, ep, eb, ex, t, ed]);
}
