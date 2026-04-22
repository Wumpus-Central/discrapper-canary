n.d(t, { A: () => es });
var r = n(627968),
    a = n(64700),
    i = n(362599),
    s = n(771521),
    l = n(311907),
    c = n(462887),
    o = n(192308),
    d = n(403581),
    u = n(157559),
    _ = n(736653),
    m = n(975807),
    p = n(793574),
    f = n(688810),
    A = n(562819),
    g = n(793943),
    h = n(303136),
    b = n(31502),
    x = n(259065),
    C = n(95035),
    v = n(532794),
    R = n(829219),
    N = n(859703),
    E = n(341915),
    j = n(245853),
    T = n(890687),
    y = n(590202),
    I = n(320118),
    S = n(976860),
    M = n(591179),
    O = n(462463),
    P = n(780964),
    D = n(858897),
    L = n(166403),
    k = n(612669),
    U = n(920050),
    w = n(388060),
    B = n(609059),
    G = n(9458),
    V = n(788868),
    z = n(88001),
    F = n(652215),
    H = n(758836),
    W = n(654487),
    K = n(963458),
    X = n(509287),
    Y = n(587416),
    Z = n(985018),
    $ = n(853903),
    q = n(580799),
    Q = n(817577),
    J = n(419455),
    ee = n(716925),
    et = n(288604),
    en = n(384565),
    er = n(365580),
    ea = n(909340),
    ei = n(509442);
function es() {
    let { analyticsLocations: e } = (0, f.Ay)(p.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, M.X)("useWhatsNewPerkCards"),
        es = (0, _.Ay)(),
        el = (0, k.O9)(),
        { logitechCard: ec, steelseriesCard: eo } = (0, B.A)(),
        ed = (0, B.S)(),
        eu = (0, l.bG)([L.A], () => L.A.getPremiumTypeSubscription()),
        e_ = eu?.hasActiveTrial ?? !1,
        em = (0, l.bG)(
            [N.A],
            () => [...N.A.quests.values()].find((e) => e.config.features.includes(W.Li.NITRO_CONTROL_CTA)) ?? null,
        ),
        ep = (0, O.A)({ analyticsLocations: e }),
        { launchInGameActivity: ef } = (0, T.zW)(em),
        eA = (0, a.useCallback)(() => {
            (0, D.openUserSettings)(P.X.PROFILE_PANEL, { analyticsLocations: e }, () =>
                (0, x.L)({ analyticsLocations: e }),
            );
        }, [e]),
        eg = (0, a.useCallback)(() => {
            (0, D.openUserSettings)(P.X.PROFILE_PANEL, { analyticsLocations: e }, () =>
                (0, A.L)({ analyticsLocations: e }),
            );
        }, [e]),
        eh = (0, a.useCallback)(() => {
            (0, D.openUserSettings)(P.X.APPEARANCE_IN_APP_ICON_CATEGORY);
        }, []),
        eb = (0, a.useCallback)(() => {
            null != em &&
                (em.userStatus?.enrolledAt == null
                    ? (0, R.Oy)(em.id, {
                          questContent: E.uF.NITRO_HOME_PERK_CARD,
                          questContentCTA: y.Cy.START_QUEST,
                          sourceQuestContent: E.uF.NITRO_HOME_PERK_CARD,
                      }).then((e) => {
                          switch (e.type) {
                              case R.WM.SUCCESS:
                                  ef();
                                  break;
                              case R.WM.CAPTCHA_FAILED:
                                  u.A.show({ title: Z.intl.string(Z.t["/CidxO"]), body: Z.intl.string(Z.t.HQdHg6) });
                                  break;
                              case R.WM.UNKNOWN_ERROR:
                                  u.A.show({ title: Z.intl.string(Z.t.R0RpRX), body: Z.intl.string(Z.t.OXD41D) });
                          }
                      })
                    : ef());
        }, [em, ef]),
        ex = () => {
            (0, m.A)(z.TE);
        },
        eC = (0, a.useCallback)(() => {
            e_
                ? (0, o.openModalLazy)(async () => {
                      let { default: e } = await n.e("99709").then(n.bind(n, 516044));
                      return (t) => (0, r.jsx)(e, { ...t });
                  })
                : (0, v.A)({
                      subscriptionTier: V.pe.TIER_2,
                      initialPlanId: V.gD.PREMIUM_GROUP_MONTH,
                      analyticsLocations: e,
                  });
        }, [e, e_]),
        ev = (0, G.A)(e),
        { shouldShowBonusOrbsUX: eR, multiplier: eN } = (0, j.Dl)(W.rE.NITRO_HOME_MARKETING),
        eE = (0, b.l)("useWhatsNewPerkCards"),
        { isEligible: ej, programReward: eT } = (0, I.F)({ location: "useWhatsNewPerkCards" }),
        ey = eE && ej && null != eT;
    return (0, a.useMemo)(() => {
        let e = null;
        if (null != em) {
            let t = em.userStatus?.completedAt != null;
            e = {
                id: U.NITRO_CONTROL_QUEST_CARD_ID,
                title: Z.intl.string(t ? X.default.S4okiP : X.default.lvidGa),
                description: Z.intl.string(t ? X.default.JXidUB : X.default["VghrI/"]),
                pillText: Z.intl.string(X.default["3rpSiP"]),
                primaryAsset: (0, c.M)(es) ? er.A : en.A,
                ctaText: Z.intl.string(t ? X.default.QBfwzW : X.default["1Ng1ci"]),
                onCtaClick: eb,
            };
        }
        let n = [
                e,
                ed ? null : ec,
                ed ? null : eo,
                ey
                    ? {
                          id: U.NITRO_ORBS_REWARDS_CARD_ID,
                          title: Z.intl.string(Y.default.hx5AFp),
                          description: Z.intl.format(Y.default["Pz+6Ix"], { orbsCount: eT?.reward_amount ?? 0 }),
                          backgroundElement: (0, r.jsx)(h.A, { src: ea.A, className: q.T }),
                          primaryAsset: (0, r.jsx)("div", {
                              className: q.a,
                              children: (0, r.jsx)(i.Z, { fit: "contain" }),
                          }),
                          footerContent: (0, r.jsx)(w.A, {}),
                          ctaText: Z.intl.string(Y.default.BxjHiu),
                          onCtaClick: () => (0, S.pX)(F.BVt.COLLECTIBLES_SHOP_WITH_TAB(H.G2.ORBS)),
                      }
                    : null,
                eR
                    ? {
                          id: U.QUEST_ORB_MULTIPLIER_CARD_ID,
                          title: Z.intl.string(Z.t.F2MShO),
                          description: Z.intl.format(Z.t.NpUfej, { bonusOrbMultiplier: eN }),
                          pillText: Z.intl.string(Z.t.oW0eUd),
                          primaryAsset: ee.A,
                          ctaText: Z.intl.string(Z.t.jVcuVY),
                          onCtaClick: () => (0, S.pX)(F.BVt.QUEST_HOME),
                          primaryAssetClassName: $.Nf,
                      }
                    : null,
                el
                    ? {
                          id: U.PREMIUM_GROUP_CARD_ID,
                          title: Z.intl.string(K.default.YkvksF),
                          description: (0, r.jsxs)(r.Fragment, {
                              children: [
                                  Z.intl.formatToPlainString(K.default.JlyGQj, {
                                      totalSeats: z.aw,
                                      premiumGroupProductName: (0, z.DP)(),
                                  }),
                                  (0, r.jsx)("div", {
                                      className: $.LF,
                                      children: (0, r.jsx)(C.A, {
                                          onClick: ex,
                                          children: Z.intl.string(K.default.yYyGJH),
                                      }),
                                  }),
                              ],
                          }),
                          pillText: Z.intl.string(Z.t.oW0eUd),
                          primaryAsset: Q,
                          ctaIcon: d.t,
                          ctaIconPosition: "start",
                          ctaText: Z.intl.string(Z.t.IJI7yk),
                          onCtaClick: eC,
                      }
                    : null,
                {
                    id: U.DISPLAY_NAME_STYLES_CARD_ID,
                    title: Z.intl.string(Z.t.OLtTrt),
                    description: Z.intl.string(Z.t["di/pXR"]),
                    onCtaClick: t ? ep : eA,
                    ctaText: Z.intl.string(Z.t.jVcuVY),
                    primaryAsset: J.A,
                    pillText: Z.intl.string(Z.t.y2b7CA),
                },
                {
                    id: U.CLIENT_THEMES_CARD_ID,
                    title: Z.intl.string(Z.t.acc6h6),
                    description: Z.intl.formatToPlainString(Z.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: ei.A,
                    ctaText: Z.intl.string(Z.t.jVcuVY),
                    onCtaClick: () => {
                        (0, g.nf)(g.HP.CUSTOM_THEME);
                    },
                },
                {
                    id: U.PERMADECOS_CARD_ID,
                    title: Z.intl.string(Z.t.L14NZN),
                    description: Z.intl.string(Z.t.eCZkAI),
                    primaryAsset: (0, r.jsx)(s.u, { alt: "", ariaHidden: !0 }),
                    ctaText: Z.intl.string(Z.t.jVcuVY),
                    onCtaClick: t ? ep : eg,
                },
                {
                    id: U.CUSTOM_APP_ICONS_CARD_ID,
                    title: Z.intl.string(Z.t["GU+wqh"]),
                    description: Z.intl.string(Z.t["1uPk1Z"]),
                    primaryAsset: et.A,
                    ctaText: Z.intl.string(Z.t.y9TxXV),
                    onCtaClick: eh,
                },
            ],
            a = (n = n.filter((e) => null != e))[0].featured,
            l = a ? 5 : 6;
        return n.splice(+!!a, 0, ev), n.length > l && n.splice(l, n.length - l), n;
    }, [ev, ey, eT, em, es, eb, el, eR, eN, eA, eh, eg, eC, ep, t, ec, eo, ed]);
}
