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
    g = n(793943),
    A = n(259065),
    f = n(95035),
    h = n(532794),
    b = n(829219),
    x = n(859703),
    C = n(341915),
    N = n(245853),
    R = n(890687),
    v = n(590202),
    E = n(976860),
    I = n(591179),
    T = n(462463),
    j = n(780964),
    S = n(858897),
    M = n(166403),
    y = n(975571),
    P = n(398523),
    O = n(881373),
    D = n(152815),
    L = n(612669),
    U = n(852218),
    k = n(161319),
    B = n(920050),
    G = n(9458),
    w = n(788868),
    V = n(88001),
    H = n(652215),
    W = n(654487),
    F = n(962995),
    Y = n(466919),
    z = n(365720),
    X = n(985018),
    K = n(555599),
    q = n(998663),
    Z = n(817577),
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
        t = (0, I.X)("useWhatsNewPerkCards"),
        es = (0, d.Ay)(),
        el = (0, L.O9)(),
        eo = (0, O.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
        ec = P.A.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
        ed = (0, s.bG)([M.A], () => M.A.getPremiumTypeSubscription()),
        eu = ed?.hasActiveTrial ?? !1,
        e_ = (0, s.bG)(
            [x.A],
            () => [...x.A.quests.values()].find((e) => e.config.features.includes(W.Li.NITRO_CONTROL_CTA)) ?? null,
        ),
        em = (0, T.A)({ analyticsLocations: e }),
        { launchInGameActivity: ep } = (0, R.zW)(e_),
        eg = (0, r.useCallback)(() => {
            (0, S.openUserSettings)(j.X.PROFILE_PANEL, { analyticsLocations: e }, () =>
                (0, A.L)({ analyticsLocations: e }),
            );
        }, [e]),
        eA = (0, r.useCallback)(() => {
            (0, S.openUserSettings)(j.X.PROFILE_PANEL, { analyticsLocations: e }, () =>
                (0, p.L)({ analyticsLocations: e }),
            );
        }, [e]),
        ef = (0, r.useCallback)(() => {
            (0, S.openUserSettings)(j.X.DISPLAY_IN_APP_ICON_CATEGORY);
        }, []),
        eh = (0, r.useCallback)(() => {
            null != e_ &&
                (e_.userStatus?.enrolledAt == null
                    ? (0, b.Oy)(e_.id, {
                          questContent: C.uF.NITRO_HOME_PERK_CARD,
                          questContentCTA: v.Cy.START_QUEST,
                          sourceQuestContent: C.uF.NITRO_HOME_PERK_CARD,
                      }).then((e) => {
                          switch (e.type) {
                              case b.WM.SUCCESS:
                                  ep();
                                  break;
                              case b.WM.CAPTCHA_FAILED:
                                  c.A.show({ title: X.intl.string(X.t["/CidxO"]), body: X.intl.string(X.t.HQdHg6) });
                                  break;
                              case b.WM.UNKNOWN_ERROR:
                                  c.A.show({ title: X.intl.string(X.t.R0RpRX), body: X.intl.string(X.t.OXD41D) });
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
                      subscriptionTier: w.pe.TIER_2,
                      initialPlanId: w.gD.PREMIUM_GROUP_MONTH,
                      analyticsLocations: e,
                  });
        }, [e, eu]),
        eC = (0, G.A)(e),
        { shouldShowBonusOrbsUX: eN, multiplier: eR } = (0, N.Dl)(W.rE.NITRO_HOME_MARKETING),
        { currentDate: ev, nDaysInMonth: eE } = (0, r.useMemo)(() => {
            let e = new Date();
            return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
        }, []);
    return (0, r.useMemo)(() => {
        let n = null;
        if (null != e_) {
            let e = e_.userStatus?.completedAt != null;
            n = {
                id: B.NITRO_CONTROL_QUEST_CARD_ID,
                title: X.intl.string(e ? z.default.S4okiP : z.default.lvidGa),
                description: X.intl.string(e ? z.default.JXidUB : z.default["VghrI/"]),
                pillText: X.intl.string(z.default["3rpSiP"]),
                primaryAsset: (0, l.Mw)(es) ? er.A : ei.A,
                ctaText: X.intl.string(e ? z.default.QBfwzW : z.default["1Ng1ci"]),
                onCtaClick: eh,
            };
        }
        let r = [
                n,
                eo
                    ? {
                          id: B.LOGITECH_3PP_CARD_ID,
                          title: X.intl.string(F.default.OlObRa),
                          description: X.intl.format(F.default["/UNTlE"], {
                              discountPercent: O.aW,
                              termsUrl: y.A.getArticleURL(H.MVz.LOGITECH_PROMOTION),
                          }),
                          subscriptionRequired: !0,
                          progress: ev.getDate() / eE,
                          ctaText: X.intl.string(X.t.w7s5Qr),
                          onCtaClick: () => (0, D.P)({ partnerId: U.XY }),
                          blurTint: "#2E213D",
                          backgroundAssetUrl: et.A,
                          pillText: X.intl.string(X.t.y2b7CA),
                          caption: (0, i.jsx)("img", { src: ee.A, alt: "Logitech" }),
                      }
                    : null,
                el
                    ? {
                          id: B.PREMIUM_GROUP_CARD_ID,
                          title: X.intl.string(Y.default.YkvksF),
                          description: (0, i.jsxs)(i.Fragment, {
                              children: [
                                  X.intl.formatToPlainString(Y.default.JlyGQj, {
                                      totalSeats: V.aw,
                                      premiumGroupProductName: (0, V.DP)(),
                                  }),
                                  (0, i.jsx)("div", {
                                      className: K.LF,
                                      children: (0, i.jsx)(f.A, {
                                          onClick: eb,
                                          children: X.intl.string(Y.default.yYyGJH),
                                      }),
                                  }),
                              ],
                          }),
                          pillText: X.intl.string(X.t.oW0eUd),
                          primaryAsset: Z,
                          ctaIcon: o.tvc,
                          ctaIconPosition: "start",
                          ctaText: X.intl.string(X.t.IJI7yk),
                          onCtaClick: ex,
                      }
                    : null,
                ec
                    ? {
                          id: B.RECURRING_3P_PROMOTIONS_CARD_ID,
                          title: X.intl.string(X.t.m7PucM),
                          description: X.intl.format(X.t.zh1X7u, {}),
                          subscriptionRequired: !0,
                          pillText: X.intl.string(X.t.oW0eUd),
                          caption: (0, i.jsx)("img", { src: q, alt: "SteelSeries" }),
                          backgroundAssetUrl: en.A,
                          progress: ev.getDate() / eE,
                          ctaText: X.intl.string(X.t.w7s5Qr),
                          onCtaClick: () => (0, k.u)({ analyticsLocations: e, partnerIds: [U.KS, U.Cs] }),
                          blurTint: "#2E213D",
                      }
                    : null,
                eN
                    ? {
                          id: B.QUEST_ORB_MULTIPLIER_CARD_ID,
                          title: X.intl.string(X.t.F2MShO),
                          description: X.intl.format(X.t.NpUfej, { bonusOrbMultiplier: eR }),
                          pillText: X.intl.string(X.t.oW0eUd),
                          primaryAsset: Q.A,
                          ctaText: X.intl.string(X.t.jVcuVY),
                          onCtaClick: () => (0, E.pX)(H.BVt.QUEST_HOME),
                          primaryAssetClassName: K.Nf,
                      }
                    : null,
                {
                    id: B.DISPLAY_NAME_STYLES_CARD_ID,
                    title: X.intl.string(X.t.OLtTrt),
                    description: X.intl.string(X.t["di/pXR"]),
                    onCtaClick: t ? em : eg,
                    ctaText: X.intl.string(X.t.jVcuVY),
                    primaryAsset: $.A,
                    pillText: X.intl.string(X.t.y2b7CA),
                },
                {
                    id: B.CLIENT_THEMES_CARD_ID,
                    title: X.intl.string(X.t.acc6h6),
                    description: X.intl.formatToPlainString(X.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: ea.A,
                    ctaText: X.intl.string(X.t.jVcuVY),
                    onCtaClick: () => {
                        (0, g.nf)(g.HP.CUSTOM_THEME);
                    },
                },
                {
                    id: B.PERMADECOS_CARD_ID,
                    title: X.intl.string(X.t.L14NZN),
                    description: X.intl.string(X.t.eCZkAI),
                    primaryAsset: (0, i.jsx)(a.u7P, { alt: "", ariaHidden: !0 }),
                    ctaText: X.intl.string(X.t.jVcuVY),
                    onCtaClick: t ? em : eA,
                },
                {
                    id: B.CUSTOM_APP_ICONS_CARD_ID,
                    title: X.intl.string(X.t["GU+wqh"]),
                    description: X.intl.string(X.t["1uPk1Z"]),
                    primaryAsset: J.A,
                    ctaText: X.intl.string(X.t.y9TxXV),
                    onCtaClick: ef,
                },
            ],
            s = (r = r.filter((e) => null != e))[0].featured,
            c = s ? 5 : 6;
        return r.splice(+!!s, 0, eC), r.length > c && r.splice(c, r.length - c), r;
    }, [eC, e_, es, eh, el, ec, eN, eR, eE, ev, e, eg, ef, eA, ex, em, t, eo]);
}
