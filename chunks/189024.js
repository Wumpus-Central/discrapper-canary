n.d(t, { A: () => eA });
var i = n(627968),
    r = n(64700),
    a = n(362599),
    s = n(367622),
    l = n(311907),
    o = n(582754),
    c = n(397927),
    d = n(157559),
    u = n(736653),
    _ = n(975807),
    m = n(793574),
    p = n(688810),
    A = n(562819),
    g = n(793943),
    f = n(303136),
    x = n(31502),
    h = n(259065),
    b = n(95035),
    R = n(532794),
    C = n(829219),
    N = n(859703),
    v = n(341915),
    E = n(245853),
    T = n(890687),
    j = n(590202),
    I = n(320118),
    S = n(976860),
    y = n(591179),
    M = n(462463),
    O = n(780964),
    P = n(858897),
    D = n(166403),
    L = n(975571),
    U = n(398523),
    k = n(881373),
    w = n(152815),
    B = n(612669),
    G = n(852218),
    V = n(161319),
    H = n(920050),
    F = n(388060),
    z = n(9458),
    W = n(788868),
    Y = n(88001),
    K = n(652215),
    X = n(758836),
    Z = n(654487),
    q = n(962995),
    $ = n(466919),
    Q = n(365720),
    J = n(490285),
    ee = n(985018),
    et = n(555599),
    en = n(459391),
    ei = n(998663),
    er = n(817577),
    ea = n(419455),
    es = n(716925),
    el = n(288604),
    eo = n(223157),
    ec = n(863882),
    ed = n(893160),
    eu = n(384565),
    e_ = n(365580),
    em = n(909340),
    ep = n(509442);
function eA() {
    let { analyticsLocations: e } = (0, p.Ay)(m.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, y.X)("useWhatsNewPerkCards"),
        eA = (0, u.Ay)(),
        eg = (0, B.O9)(),
        ef = (0, k.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
        ex = U.A.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
        eh = (0, l.bG)([D.A], () => D.A.getPremiumTypeSubscription()),
        eb = eh?.hasActiveTrial ?? !1,
        eR = (0, l.bG)(
            [N.A],
            () => [...N.A.quests.values()].find((e) => e.config.features.includes(Z.Li.NITRO_CONTROL_CTA)) ?? null,
        ),
        eC = (0, M.A)({ analyticsLocations: e }),
        { launchInGameActivity: eN } = (0, T.zW)(eR),
        ev = (0, r.useCallback)(() => {
            (0, P.openUserSettings)(O.X.PROFILE_PANEL, { analyticsLocations: e }, () =>
                (0, h.L)({ analyticsLocations: e }),
            );
        }, [e]),
        eE = (0, r.useCallback)(() => {
            (0, P.openUserSettings)(O.X.PROFILE_PANEL, { analyticsLocations: e }, () =>
                (0, A.L)({ analyticsLocations: e }),
            );
        }, [e]),
        eT = (0, r.useCallback)(() => {
            (0, P.openUserSettings)(O.X.APPEARANCE_IN_APP_ICON_CATEGORY);
        }, []),
        ej = (0, r.useCallback)(() => {
            null != eR &&
                (eR.userStatus?.enrolledAt == null
                    ? (0, C.Oy)(eR.id, {
                          questContent: v.uF.NITRO_HOME_PERK_CARD,
                          questContentCTA: j.Cy.START_QUEST,
                          sourceQuestContent: v.uF.NITRO_HOME_PERK_CARD,
                      }).then((e) => {
                          switch (e.type) {
                              case C.WM.SUCCESS:
                                  eN();
                                  break;
                              case C.WM.CAPTCHA_FAILED:
                                  d.A.show({
                                      title: ee.intl.string(ee.t["/CidxO"]),
                                      body: ee.intl.string(ee.t.HQdHg6),
                                  });
                                  break;
                              case C.WM.UNKNOWN_ERROR:
                                  d.A.show({ title: ee.intl.string(ee.t.R0RpRX), body: ee.intl.string(ee.t.OXD41D) });
                          }
                      })
                    : eN());
        }, [eR, eN]),
        eI = () => {
            (0, _.A)(Y.TE);
        },
        eS = (0, r.useCallback)(() => {
            eb
                ? (0, c.mMO)(async () => {
                      let { default: e } = await n.e("99709").then(n.bind(n, 516044));
                      return (t) => (0, i.jsx)(e, { ...t });
                  })
                : (0, R.A)({
                      subscriptionTier: W.pe.TIER_2,
                      initialPlanId: W.gD.PREMIUM_GROUP_MONTH,
                      analyticsLocations: e,
                  });
        }, [e, eb]),
        ey = (0, z.A)(e),
        { shouldShowBonusOrbsUX: eM, multiplier: eO } = (0, E.Dl)(Z.rE.NITRO_HOME_MARKETING),
        eP = (0, x.l)("useWhatsNewPerkCards"),
        { isEligible: eD, programReward: eL } = (0, I.F)({ location: "useWhatsNewPerkCards" }),
        eU = eP && eD,
        { currentDate: ek, nDaysInMonth: ew } = (0, r.useMemo)(() => {
            let e = new Date();
            return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
        }, []);
    return (0, r.useMemo)(() => {
        let n = null;
        if (null != eR) {
            let e = eR.userStatus?.completedAt != null;
            n = {
                id: H.NITRO_CONTROL_QUEST_CARD_ID,
                title: ee.intl.string(e ? Q.default.S4okiP : Q.default.lvidGa),
                description: ee.intl.string(e ? Q.default.JXidUB : Q.default["VghrI/"]),
                pillText: ee.intl.string(Q.default["3rpSiP"]),
                primaryAsset: (0, o.Mw)(eA) ? e_.A : eu.A,
                ctaText: ee.intl.string(e ? Q.default.QBfwzW : Q.default["1Ng1ci"]),
                onCtaClick: ej,
            };
        }
        let r = [
                n,
                eU
                    ? {
                          id: H.NITRO_ORBS_REWARDS_CARD_ID,
                          title: ee.intl.string(J.default.hx5AFp),
                          description: ee.intl.format(J.default["Pz+6Ix"], { orbsCount: eL?.reward_amount ?? 0 }),
                          backgroundElement: (0, i.jsx)(f.A, { src: em.A, className: en.T }),
                          primaryAsset: (0, i.jsx)("div", {
                              className: en.a,
                              children: (0, i.jsx)(a.Z, { fit: "contain" }),
                          }),
                          footerContent: (0, i.jsx)(F.A, {}),
                          ctaText: ee.intl.string(J.default.BxjHiu),
                          onCtaClick: () => (0, S.pX)(K.BVt.COLLECTIBLES_SHOP_WITH_TAB(X.G2.ORBS)),
                      }
                    : null,
                ef
                    ? {
                          id: H.LOGITECH_3PP_CARD_ID,
                          title: ee.intl.string(q.default.OlObRa),
                          description: ee.intl.format(q.default["/UNTlE"], {
                              discountPercent: k.aW,
                              termsUrl: L.A.getArticleURL(K.MVz.LOGITECH_PROMOTION),
                          }),
                          subscriptionRequired: !0,
                          progress: ek.getDate() / ew,
                          ctaText: ee.intl.string(ee.t.w7s5Qr),
                          onCtaClick: () => (0, w.P)({ partnerId: G.XY }),
                          blurTint: "#2E213D",
                          backgroundAssetUrl: ec.A,
                          pillText: ee.intl.string(ee.t.y2b7CA),
                          caption: (0, i.jsx)("img", { src: eo.A, alt: "Logitech" }),
                      }
                    : null,
                eg
                    ? {
                          id: H.PREMIUM_GROUP_CARD_ID,
                          title: ee.intl.string($.default.YkvksF),
                          description: (0, i.jsxs)(i.Fragment, {
                              children: [
                                  ee.intl.formatToPlainString($.default.JlyGQj, {
                                      totalSeats: Y.aw,
                                      premiumGroupProductName: (0, Y.DP)(),
                                  }),
                                  (0, i.jsx)("div", {
                                      className: et.LF,
                                      children: (0, i.jsx)(b.A, {
                                          onClick: eI,
                                          children: ee.intl.string($.default.yYyGJH),
                                      }),
                                  }),
                              ],
                          }),
                          pillText: ee.intl.string(ee.t.oW0eUd),
                          primaryAsset: er,
                          ctaIcon: c.tvc,
                          ctaIconPosition: "start",
                          ctaText: ee.intl.string(ee.t.IJI7yk),
                          onCtaClick: eS,
                      }
                    : null,
                ex
                    ? {
                          id: H.RECURRING_3P_PROMOTIONS_CARD_ID,
                          title: ee.intl.string(ee.t.m7PucM),
                          description: ee.intl.format(ee.t.zh1X7u, {}),
                          subscriptionRequired: !0,
                          pillText: ee.intl.string(ee.t.oW0eUd),
                          caption: (0, i.jsx)("img", { src: ei, alt: "SteelSeries" }),
                          backgroundAssetUrl: ed.A,
                          progress: ek.getDate() / ew,
                          ctaText: ee.intl.string(ee.t.w7s5Qr),
                          onCtaClick: () => (0, V.u)({ analyticsLocations: e, partnerIds: [G.KS, G.Cs] }),
                          blurTint: "#2E213D",
                      }
                    : null,
                eM
                    ? {
                          id: H.QUEST_ORB_MULTIPLIER_CARD_ID,
                          title: ee.intl.string(ee.t.F2MShO),
                          description: ee.intl.format(ee.t.NpUfej, { bonusOrbMultiplier: eO }),
                          pillText: ee.intl.string(ee.t.oW0eUd),
                          primaryAsset: es.A,
                          ctaText: ee.intl.string(ee.t.jVcuVY),
                          onCtaClick: () => (0, S.pX)(K.BVt.QUEST_HOME),
                          primaryAssetClassName: et.Nf,
                      }
                    : null,
                {
                    id: H.DISPLAY_NAME_STYLES_CARD_ID,
                    title: ee.intl.string(ee.t.OLtTrt),
                    description: ee.intl.string(ee.t["di/pXR"]),
                    onCtaClick: t ? eC : ev,
                    ctaText: ee.intl.string(ee.t.jVcuVY),
                    primaryAsset: ea.A,
                    pillText: ee.intl.string(ee.t.y2b7CA),
                },
                {
                    id: H.CLIENT_THEMES_CARD_ID,
                    title: ee.intl.string(ee.t.acc6h6),
                    description: ee.intl.formatToPlainString(ee.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: ep.A,
                    ctaText: ee.intl.string(ee.t.jVcuVY),
                    onCtaClick: () => {
                        (0, g.nf)(g.HP.CUSTOM_THEME);
                    },
                },
                {
                    id: H.PERMADECOS_CARD_ID,
                    title: ee.intl.string(ee.t.L14NZN),
                    description: ee.intl.string(ee.t.eCZkAI),
                    primaryAsset: (0, i.jsx)(s.u7P, { alt: "", ariaHidden: !0 }),
                    ctaText: ee.intl.string(ee.t.jVcuVY),
                    onCtaClick: t ? eC : eE,
                },
                {
                    id: H.CUSTOM_APP_ICONS_CARD_ID,
                    title: ee.intl.string(ee.t["GU+wqh"]),
                    description: ee.intl.string(ee.t["1uPk1Z"]),
                    primaryAsset: el.A,
                    ctaText: ee.intl.string(ee.t.y9TxXV),
                    onCtaClick: eT,
                },
            ],
            l = (r = r.filter((e) => null != e))[0].featured,
            d = l ? 5 : 6;
        return r.splice(+!!l, 0, ey), r.length > d && r.splice(d, r.length - d), r;
    }, [ey, eU, eL, eR, eA, ej, eg, ex, eM, eO, ew, ek, e, ev, eT, eE, eS, eC, t, ef]);
}
