n.d(t, { A: () => es });
var i = n(627968),
    r = n(64700),
    a = n(367622),
    s = n(311907),
    l = n(582754),
    o = n(397927),
    c = n(157559),
    d = n(736653),
    u = n(975807),
    _ = n(793574),
    m = n(688810),
    p = n(562819),
    A = n(793943),
    g = n(259065),
    f = n(95035),
    h = n(532794),
    b = n(829219),
    x = n(859703),
    R = n(341915),
    C = n(245853),
    N = n(890687),
    E = n(590202),
    v = n(976860),
    T = n(591179),
    j = n(462463),
    I = n(780964),
    S = n(858897),
    y = n(166403),
    M = n(975571),
    O = n(398523),
    P = n(881373),
    D = n(152815),
    L = n(612669),
    U = n(852218),
    k = n(161319),
    B = n(920050),
    w = n(9458),
    G = n(788868),
    V = n(88001),
    H = n(652215),
    z = n(654487),
    F = n(962995),
    W = n(466919),
    Y = n(365720),
    K = n(985018),
    X = n(555599),
    Z = n(998663),
    q = n(817577),
    $ = n(419455),
    Q = n(716925),
    J = n(288604),
    ee = n(223157),
    et = n(863882),
    en = n(893160),
    ei = n(384565),
    er = n(365580),
    ea = n(509442);
function es() {
    let { analyticsLocations: e } = (0, m.Ay)(_.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, T.X)("useWhatsNewPerkCards"),
        es = (0, d.Ay)(),
        el = (0, L.O9)(),
        eo = (0, P.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
        ec = O.A.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
        ed = (0, s.bG)([y.A], () => y.A.getPremiumTypeSubscription()),
        eu = ed?.hasActiveTrial ?? !1,
        e_ = (0, s.bG)(
            [x.A],
            () => [...x.A.quests.values()].find((e) => e.config.features.includes(z.Li.NITRO_CONTROL_CTA)) ?? null,
        ),
        em = (0, j.A)({ analyticsLocations: e }),
        { launchInGameActivity: ep } = (0, N.zW)(e_),
        eA = (0, r.useCallback)(() => {
            (0, S.openUserSettings)(I.X.PROFILE_PANEL, { analyticsLocations: e }, () =>
                (0, g.L)({ analyticsLocations: e }),
            );
        }, [e]),
        eg = (0, r.useCallback)(() => {
            (0, S.openUserSettings)(I.X.PROFILE_PANEL, { analyticsLocations: e }, () =>
                (0, p.L)({ analyticsLocations: e }),
            );
        }, [e]),
        ef = (0, r.useCallback)(() => {
            (0, S.openUserSettings)(I.X.APPEARANCE_IN_APP_ICON_CATEGORY);
        }, []),
        eh = (0, r.useCallback)(() => {
            null != e_ &&
                (e_.userStatus?.enrolledAt == null
                    ? (0, b.Oy)(e_.id, {
                          questContent: R.uF.NITRO_HOME_PERK_CARD,
                          questContentCTA: E.Cy.START_QUEST,
                          sourceQuestContent: R.uF.NITRO_HOME_PERK_CARD,
                      }).then((e) => {
                          switch (e.type) {
                              case b.WM.SUCCESS:
                                  ep();
                                  break;
                              case b.WM.CAPTCHA_FAILED:
                                  c.A.show({ title: K.intl.string(K.t["/CidxO"]), body: K.intl.string(K.t.HQdHg6) });
                                  break;
                              case b.WM.UNKNOWN_ERROR:
                                  c.A.show({ title: K.intl.string(K.t.R0RpRX), body: K.intl.string(K.t.OXD41D) });
                          }
                      })
                    : ep());
        }, [e_, ep]),
        eb = () => {
            (0, u.A)(V.TE);
        },
        ex = (0, r.useCallback)(() => {
            eu
                ? (0, o.mMO)(async () => {
                      let { default: e } = await n.e("99709").then(n.bind(n, 516044));
                      return (t) => (0, i.jsx)(e, { ...t });
                  })
                : (0, h.A)({
                      subscriptionTier: G.pe.TIER_2,
                      initialPlanId: G.gD.PREMIUM_GROUP_MONTH,
                      analyticsLocations: e,
                  });
        }, [e, eu]),
        eR = (0, w.A)(e),
        { shouldShowBonusOrbsUX: eC, multiplier: eN } = (0, C.Dl)(z.rE.NITRO_HOME_MARKETING),
        { currentDate: eE, nDaysInMonth: ev } = (0, r.useMemo)(() => {
            let e = new Date();
            return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
        }, []);
    return (0, r.useMemo)(() => {
        let n = null;
        if (null != e_) {
            let e = e_.userStatus?.completedAt != null;
            n = {
                id: B.NITRO_CONTROL_QUEST_CARD_ID,
                title: K.intl.string(e ? Y.default.S4okiP : Y.default.lvidGa),
                description: K.intl.string(e ? Y.default.JXidUB : Y.default["VghrI/"]),
                pillText: K.intl.string(Y.default["3rpSiP"]),
                primaryAsset: (0, l.Mw)(es) ? er.A : ei.A,
                ctaText: K.intl.string(e ? Y.default.QBfwzW : Y.default["1Ng1ci"]),
                onCtaClick: eh,
            };
        }
        let r = [
                n,
                eo
                    ? {
                          id: B.LOGITECH_3PP_CARD_ID,
                          title: K.intl.string(F.default.OlObRa),
                          description: K.intl.format(F.default["/UNTlE"], {
                              discountPercent: P.aW,
                              termsUrl: M.A.getArticleURL(H.MVz.LOGITECH_PROMOTION),
                          }),
                          subscriptionRequired: !0,
                          progress: eE.getDate() / ev,
                          ctaText: K.intl.string(K.t.w7s5Qr),
                          onCtaClick: () => (0, D.P)({ partnerId: U.XY }),
                          blurTint: "#2E213D",
                          backgroundAssetUrl: et.A,
                          pillText: K.intl.string(K.t.y2b7CA),
                          caption: (0, i.jsx)("img", { src: ee.A, alt: "Logitech" }),
                      }
                    : null,
                el
                    ? {
                          id: B.PREMIUM_GROUP_CARD_ID,
                          title: K.intl.string(W.default.YkvksF),
                          description: (0, i.jsxs)(i.Fragment, {
                              children: [
                                  K.intl.formatToPlainString(W.default.JlyGQj, {
                                      totalSeats: V.aw,
                                      premiumGroupProductName: (0, V.DP)(),
                                  }),
                                  (0, i.jsx)("div", {
                                      className: X.LF,
                                      children: (0, i.jsx)(f.A, {
                                          onClick: eb,
                                          children: K.intl.string(W.default.yYyGJH),
                                      }),
                                  }),
                              ],
                          }),
                          pillText: K.intl.string(K.t.oW0eUd),
                          primaryAsset: q,
                          ctaIcon: o.tvc,
                          ctaIconPosition: "start",
                          ctaText: K.intl.string(K.t.IJI7yk),
                          onCtaClick: ex,
                      }
                    : null,
                ec
                    ? {
                          id: B.RECURRING_3P_PROMOTIONS_CARD_ID,
                          title: K.intl.string(K.t.m7PucM),
                          description: K.intl.format(K.t.zh1X7u, {}),
                          subscriptionRequired: !0,
                          pillText: K.intl.string(K.t.oW0eUd),
                          caption: (0, i.jsx)("img", { src: Z, alt: "SteelSeries" }),
                          backgroundAssetUrl: en.A,
                          progress: eE.getDate() / ev,
                          ctaText: K.intl.string(K.t.w7s5Qr),
                          onCtaClick: () => (0, k.u)({ analyticsLocations: e, partnerIds: [U.KS, U.Cs] }),
                          blurTint: "#2E213D",
                      }
                    : null,
                eC
                    ? {
                          id: B.QUEST_ORB_MULTIPLIER_CARD_ID,
                          title: K.intl.string(K.t.F2MShO),
                          description: K.intl.format(K.t.NpUfej, { bonusOrbMultiplier: eN }),
                          pillText: K.intl.string(K.t.oW0eUd),
                          primaryAsset: Q.A,
                          ctaText: K.intl.string(K.t.jVcuVY),
                          onCtaClick: () => (0, v.pX)(H.BVt.QUEST_HOME),
                          primaryAssetClassName: X.Nf,
                      }
                    : null,
                {
                    id: B.DISPLAY_NAME_STYLES_CARD_ID,
                    title: K.intl.string(K.t.OLtTrt),
                    description: K.intl.string(K.t["di/pXR"]),
                    onCtaClick: t ? em : eA,
                    ctaText: K.intl.string(K.t.jVcuVY),
                    primaryAsset: $.A,
                    pillText: K.intl.string(K.t.y2b7CA),
                },
                {
                    id: B.CLIENT_THEMES_CARD_ID,
                    title: K.intl.string(K.t.acc6h6),
                    description: K.intl.formatToPlainString(K.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: ea.A,
                    ctaText: K.intl.string(K.t.jVcuVY),
                    onCtaClick: () => {
                        (0, A.nf)(A.HP.CUSTOM_THEME);
                    },
                },
                {
                    id: B.PERMADECOS_CARD_ID,
                    title: K.intl.string(K.t.L14NZN),
                    description: K.intl.string(K.t.eCZkAI),
                    primaryAsset: (0, i.jsx)(a.u7P, { alt: "", ariaHidden: !0 }),
                    ctaText: K.intl.string(K.t.jVcuVY),
                    onCtaClick: t ? em : eg,
                },
                {
                    id: B.CUSTOM_APP_ICONS_CARD_ID,
                    title: K.intl.string(K.t["GU+wqh"]),
                    description: K.intl.string(K.t["1uPk1Z"]),
                    primaryAsset: J.A,
                    ctaText: K.intl.string(K.t.y9TxXV),
                    onCtaClick: ef,
                },
            ],
            s = (r = r.filter((e) => null != e))[0].featured,
            c = s ? 5 : 6;
        return r.splice(+!!s, 0, eR), r.length > c && r.splice(c, r.length - c), r;
    }, [eR, e_, es, eh, el, ec, eC, eN, ev, eE, e, eA, ef, eg, ex, em, t, eo]);
}
