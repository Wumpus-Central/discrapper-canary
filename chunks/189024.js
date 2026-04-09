n.d(t, { A: () => el });
var i = n(627968),
    r = n(64700),
    a = n(367622),
    s = n(311907),
    l = n(582754),
    c = n(397927),
    o = n(157559),
    d = n(736653),
    u = n(975807),
    _ = n(793574),
    m = n(688810),
    p = n(562819),
    A = n(793943),
    g = n(259065),
    x = n(95035),
    h = n(532794),
    f = n(829219),
    b = n(859703),
    N = n(341915),
    R = n(245853),
    C = n(890687),
    v = n(590202),
    I = n(976860),
    E = n(591179),
    j = n(462463),
    T = n(780964),
    y = n(358776),
    O = n(858897),
    P = n(166403),
    S = n(975571),
    M = n(398523),
    D = n(881373),
    L = n(152815),
    U = n(612669),
    k = n(852218),
    B = n(161319),
    w = n(920050),
    V = n(9458),
    G = n(788868),
    H = n(88001),
    F = n(652215),
    W = n(654487),
    z = n(653624),
    Y = n(519412),
    X = n(755157),
    K = n(985018),
    q = n(547807),
    $ = n(998663),
    Q = n(817577),
    Z = n(419455),
    J = n(716925),
    ee = n(288604),
    et = n(223157),
    en = n(863882),
    ei = n(893160),
    er = n(384565),
    ea = n(365580),
    es = n(509442);
function el() {
    let { analyticsLocations: e } = (0, m.Ay)(_.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, E.X)("useWhatsNewPerkCards"),
        el = (0, d.Ay)(),
        ec = (0, U.O9)(),
        eo = (0, D.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
        ed = M.A.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
        eu = (0, s.bG)([P.A], () => P.A.getPremiumTypeSubscription()),
        e_ = eu?.hasActiveTrial ?? !1,
        em = (0, s.bG)(
            [b.A],
            () => [...b.A.quests.values()].find((e) => e.config.features.includes(W.Li.NITRO_CONTROL_CTA)) ?? null,
        ),
        ep = (0, j.A)({ analyticsLocations: e }),
        { launchInGameActivity: eA } = (0, C.zW)(em),
        eg = (0, r.useCallback)(() => {
            (0, O.openUserSettings)(T.X.PROFILE_PANEL, { analyticsLocations: e }, () =>
                (0, g.L)({ analyticsLocations: e }),
            );
        }, [e]),
        ex = (0, r.useCallback)(() => {
            (0, O.openUserSettings)(T.X.PROFILE_PANEL, { analyticsLocations: e }, () =>
                (0, p.L)({ analyticsLocations: e }),
            );
        }, [e]),
        eh = (0, r.useCallback)(() => {
            let e = (0, y.Ci)("openCustomAppSettings") ? T.X.DISPLAY_IN_APP_ICON_CATEGORY : T.X.APPEARANCE_IN_APP_ICON;
            (0, O.openUserSettings)(e);
        }, []),
        ef = (0, r.useCallback)(() => {
            null != em &&
                (em.userStatus?.enrolledAt == null
                    ? (0, f.Oy)(em.id, {
                          questContent: N.uF.NITRO_HOME_PERK_CARD,
                          questContentCTA: v.Cy.START_QUEST,
                          sourceQuestContent: N.uF.NITRO_HOME_PERK_CARD,
                      }).then((e) => {
                          switch (e.type) {
                              case f.WM.SUCCESS:
                                  eA();
                                  break;
                              case f.WM.CAPTCHA_FAILED:
                                  o.A.show({ title: K.intl.string(K.t["/CidxO"]), body: K.intl.string(K.t.HQdHg6) });
                                  break;
                              case f.WM.UNKNOWN_ERROR:
                                  o.A.show({ title: K.intl.string(K.t.R0RpRX), body: K.intl.string(K.t.OXD41D) });
                          }
                      })
                    : eA());
        }, [em, eA]),
        eb = () => {
            (0, u.A)(H.TE);
        },
        eN = (0, r.useCallback)(() => {
            e_
                ? (0, c.mMO)(async () => {
                      let { default: e } = await n.e("99709").then(n.bind(n, 516044));
                      return (t) => (0, i.jsx)(e, { ...t });
                  })
                : (0, h.A)({
                      subscriptionTier: G.pe.TIER_2,
                      initialPlanId: G.gD.PREMIUM_GROUP_MONTH,
                      analyticsLocations: e,
                  });
        }, [e, e_]),
        eR = (0, V.A)(e),
        { shouldShowBonusOrbsUX: eC, multiplier: ev } = (0, R.Dl)(W.rE.NITRO_HOME_MARKETING),
        { currentDate: eI, nDaysInMonth: eE } = (0, r.useMemo)(() => {
            let e = new Date();
            return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
        }, []);
    return (0, r.useMemo)(() => {
        let n = null;
        if (null != em) {
            let e = em.userStatus?.completedAt != null;
            n = {
                id: w.NITRO_CONTROL_QUEST_CARD_ID,
                title: K.intl.string(e ? X.default.S4okiP : X.default.lvidGa),
                description: K.intl.string(e ? X.default.JXidUB : X.default["VghrI/"]),
                pillText: K.intl.string(X.default["3rpSiP"]),
                primaryAsset: (0, l.Mw)(el) ? ea.A : er.A,
                ctaText: K.intl.string(e ? X.default.QBfwzW : X.default["1Ng1ci"]),
                onCtaClick: ef,
            };
        }
        let r = [
                n,
                eo
                    ? {
                          id: w.LOGITECH_3PP_CARD_ID,
                          title: K.intl.string(z.default.OlObRa),
                          description: K.intl.format(z.default["/UNTlE"], {
                              discountPercent: D.aW,
                              termsUrl: S.A.getArticleURL(F.MVz.LOGITECH_PROMOTION),
                          }),
                          subscriptionRequired: !0,
                          progress: eI.getDate() / eE,
                          ctaText: K.intl.string(K.t.w7s5Qr),
                          onCtaClick: () => (0, L.P)({ partnerId: k.XY }),
                          blurTint: "#2E213D",
                          backgroundAssetUrl: en.A,
                          pillText: K.intl.string(K.t.y2b7CA),
                          caption: (0, i.jsx)("img", { src: et.A, alt: "Logitech" }),
                      }
                    : null,
                ec
                    ? {
                          id: w.PREMIUM_GROUP_CARD_ID,
                          title: K.intl.string(Y.default.YkvksF),
                          description: (0, i.jsxs)(i.Fragment, {
                              children: [
                                  K.intl.formatToPlainString(Y.default.JlyGQj, {
                                      totalSeats: H.aw,
                                      premiumGroupProductName: (0, H.DP)(),
                                  }),
                                  (0, i.jsx)("div", {
                                      className: q.LF,
                                      children: (0, i.jsx)(x.A, {
                                          onClick: eb,
                                          children: K.intl.string(Y.default.yYyGJH),
                                      }),
                                  }),
                              ],
                          }),
                          pillText: K.intl.string(K.t.oW0eUd),
                          primaryAsset: Q,
                          ctaIcon: c.tvc,
                          ctaIconPosition: "start",
                          ctaText: K.intl.string(K.t.IJI7yk),
                          onCtaClick: eN,
                      }
                    : null,
                ed
                    ? {
                          id: w.RECURRING_3P_PROMOTIONS_CARD_ID,
                          title: K.intl.string(K.t.m7PucM),
                          description: K.intl.format(K.t.zh1X7u, {}),
                          subscriptionRequired: !0,
                          pillText: K.intl.string(K.t.oW0eUd),
                          caption: (0, i.jsx)("img", { src: $, alt: "SteelSeries" }),
                          backgroundAssetUrl: ei.A,
                          progress: eI.getDate() / eE,
                          ctaText: K.intl.string(K.t.w7s5Qr),
                          onCtaClick: () => (0, B.u)({ analyticsLocations: e, partnerIds: [k.KS, k.Cs] }),
                          blurTint: "#2E213D",
                      }
                    : null,
                eC
                    ? {
                          id: w.QUEST_ORB_MULTIPLIER_CARD_ID,
                          title: K.intl.string(K.t.F2MShO),
                          description: K.intl.format(K.t.NpUfej, { bonusOrbMultiplier: ev }),
                          pillText: K.intl.string(K.t.oW0eUd),
                          primaryAsset: J.A,
                          ctaText: K.intl.string(K.t.jVcuVY),
                          onCtaClick: () => (0, I.pX)(F.BVt.QUEST_HOME),
                          primaryAssetClassName: q.Nf,
                      }
                    : null,
                {
                    id: w.DISPLAY_NAME_STYLES_CARD_ID,
                    title: K.intl.string(K.t.OLtTrt),
                    description: K.intl.string(K.t["di/pXR"]),
                    onCtaClick: t ? ep : eg,
                    ctaText: K.intl.string(K.t.jVcuVY),
                    primaryAsset: Z.A,
                    pillText: K.intl.string(K.t.y2b7CA),
                },
                {
                    id: w.CLIENT_THEMES_CARD_ID,
                    title: K.intl.string(K.t.acc6h6),
                    description: K.intl.formatToPlainString(K.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: es.A,
                    ctaText: K.intl.string(K.t.jVcuVY),
                    onCtaClick: () => {
                        (0, A.nf)(A.HP.CUSTOM_THEME);
                    },
                },
                {
                    id: w.PERMADECOS_CARD_ID,
                    title: K.intl.string(K.t.L14NZN),
                    description: K.intl.string(K.t.eCZkAI),
                    primaryAsset: (0, i.jsx)(a.u7P, { alt: "", ariaHidden: !0 }),
                    ctaText: K.intl.string(K.t.jVcuVY),
                    onCtaClick: t ? ep : ex,
                },
                {
                    id: w.CUSTOM_APP_ICONS_CARD_ID,
                    title: K.intl.string(K.t["GU+wqh"]),
                    description: K.intl.string(K.t["1uPk1Z"]),
                    primaryAsset: ee.A,
                    ctaText: K.intl.string(K.t.y9TxXV),
                    onCtaClick: eh,
                },
            ],
            s = (r = r.filter((e) => null != e))[0].featured,
            o = s ? 5 : 6;
        return r.splice(+!!s, 0, eR), r.length > o && r.splice(o, r.length - o), r;
    }, [eR, em, el, ef, ec, ed, eC, ev, eE, eI, e, eg, eh, ex, eN, ep, t, eo]);
}
