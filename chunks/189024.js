n.d(t, { A: () => eo });
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
    P = n(975571),
    L = n(730784),
    D = n(398523),
    G = n(881373),
    M = n(152815),
    U = n(612669),
    k = n(852218),
    w = n(161319),
    V = n(920050),
    B = n(9458),
    F = n(788868),
    H = n(88001),
    z = n(652215),
    Y = n(654487),
    X = n(653624),
    K = n(519412),
    W = n(755157),
    Z = n(985018),
    q = n(547807),
    Q = n(998663),
    J = n(817577),
    $ = n(419455),
    ee = n(716925),
    et = n(288604),
    en = n(223157),
    ei = n(863882),
    es = n(893160),
    el = n(384565),
    ea = n(365580),
    er = n(509442);
function eo() {
    let { analyticsLocations: e } = (0, g.Ay)(m.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, v.X)("useWhatsNewPerkCards"),
        eo = (0, c.Ay)(),
        ed = (0, U.O9)(),
        ec = (0, G.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
        eu = (0, L.R)({ location: "PremiumWhatsNewSection" }),
        em = D.A.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
        eg = (0, a.bG)([R.A], () => R.A.getPremiumTypeSubscription()),
        e_ = eg?.hasActiveTrial ?? !1,
        ex = (0, a.bG)(
            [f.A],
            () => [...f.A.quests.values()].find((e) => e.config.features.includes(Y.Li.NITRO_CONTROL_CTA)) ?? null,
        ),
        eA = (0, I.A)({ analyticsLocations: e }),
        { launchInGameActivity: eh } = (0, E.zW)(ex),
        ep = (0, s.useCallback)(() => {
            (0, O.openUserSettings)(j.X.PROFILE_PANEL, { analyticsLocations: e }, () =>
                (0, A.L)({ analyticsLocations: e }),
            );
        }, [e]),
        eT = (0, s.useCallback)(() => {
            (0, O.openUserSettings)(j.X.PROFILE_PANEL, { analyticsLocations: e }, () =>
                (0, _.L)({ analyticsLocations: e }),
            );
        }, [e]),
        ef = (0, s.useCallback)(() => {
            let e = (0, y.Ci)("openCustomAppSettings") ? j.X.DISPLAY_IN_APP_ICON_CATEGORY : j.X.APPEARANCE_IN_APP_ICON;
            (0, O.openUserSettings)(e);
        }, []),
        eS = (0, s.useCallback)(() => {
            null != ex &&
                (ex.userStatus?.enrolledAt == null
                    ? (0, T.Oy)(ex.id, {
                          questContent: S.uF.NITRO_HOME_PERK_CARD,
                          questContentCTA: C.Cy.START_QUEST,
                          sourceQuestContent: S.uF.NITRO_HOME_PERK_CARD,
                      }).then((e) => {
                          switch (e.type) {
                              case T.WM.SUCCESS:
                                  eh();
                                  break;
                              case T.WM.CAPTCHA_FAILED:
                                  d.A.show({ title: Z.intl.string(Z.t["/CidxO"]), body: Z.intl.string(Z.t.HQdHg6) });
                                  break;
                              case T.WM.UNKNOWN_ERROR:
                                  d.A.show({ title: Z.intl.string(Z.t.R0RpRX), body: Z.intl.string(Z.t.OXD41D) });
                          }
                      })
                    : eh());
        }, [ex, eh]),
        eb = () => {
            (0, u.A)(H.TE);
        },
        eE = (0, s.useCallback)(() => {
            if (eu) {
                if (e_)
                    return void (0, o.mMO)(async () => {
                        let { default: e } = await n.e("99709").then(n.bind(n, 516044));
                        return (t) => (0, i.jsx)(e, { ...t });
                    });
                (0, p.A)({
                    subscriptionTier: F.pe.TIER_2,
                    initialPlanId: F.gD.PREMIUM_GROUP_MONTH,
                    analyticsLocations: e,
                });
            } else
                (0, o.mMO)(async () => {
                    let { default: e } = await n.e("69595").then(n.bind(n, 526710));
                    return (t) => (0, i.jsx)(e, { ...t });
                });
        }, [eu, e, e_]),
        eC = (0, B.A)(e),
        { shouldShowBonusOrbsUX: eN, multiplier: ev } = (0, b.Dl)(Y.rE.NITRO_HOME_MARKETING),
        { currentDate: eI, nDaysInMonth: ej } = (0, s.useMemo)(() => {
            let e = new Date();
            return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
        }, []);
    return (0, s.useMemo)(() => {
        let n = null;
        if (null != ex) {
            let e = ex.userStatus?.completedAt != null;
            n = {
                id: V.NITRO_CONTROL_QUEST_CARD_ID,
                title: Z.intl.string(e ? W.default.S4okiP : W.default.lvidGa),
                description: Z.intl.string(e ? W.default.JXidUB : W.default["VghrI/"]),
                pillText: Z.intl.string(W.default["3rpSiP"]),
                primaryAsset: (0, r.Mw)(eo) ? ea.A : el.A,
                ctaText: Z.intl.string(e ? W.default.QBfwzW : W.default["1Ng1ci"]),
                onCtaClick: eS,
            };
        }
        let s = [
                n,
                ec
                    ? {
                          id: V.LOGITECH_3PP_CARD_ID,
                          title: Z.intl.string(X.default.OlObRa),
                          description: Z.intl.format(X.default["/UNTlE"], {
                              discountPercent: G.aW,
                              termsUrl: P.A.getArticleURL(z.MVz.LOGITECH_PROMOTION),
                          }),
                          subscriptionRequired: !0,
                          progress: eI.getDate() / ej,
                          ctaText: Z.intl.string(X.default["bZLaD+"]),
                          onCtaClick: () => (0, M.P)({ partnerId: k.XY }),
                          blurTint: "#2E213D",
                          backgroundAssetUrl: ei.A,
                          pillText: Z.intl.string(Z.t.y2b7CA),
                          caption: (0, i.jsx)("img", { src: en.A, alt: "Logitech" }),
                      }
                    : null,
                ed
                    ? {
                          id: V.PREMIUM_GROUP_CARD_ID,
                          title: Z.intl.string(K.default.YkvksF),
                          description: (0, i.jsxs)(i.Fragment, {
                              children: [
                                  Z.intl.formatToPlainString(K.default.JlyGQj, {
                                      totalSeats: H.aw,
                                      premiumGroupProductName: (0, H.DP)(),
                                  }),
                                  (0, i.jsx)("div", {
                                      className: q.LF,
                                      children: (0, i.jsx)(h.A, {
                                          onClick: eb,
                                          children: Z.intl.string(K.default.yYyGJH),
                                      }),
                                  }),
                              ],
                          }),
                          pillText: Z.intl.string(Z.t.oW0eUd),
                          primaryAsset: J,
                          ...(eu ? { ctaIcon: o.tvc, ctaIconPosition: "start" } : {}),
                          ctaText: Z.intl.string(eu ? Z.t.IJI7yk : Z.t.jVcuVY),
                          onCtaClick: eE,
                      }
                    : null,
                em
                    ? {
                          id: V.RECURRING_3P_PROMOTIONS_CARD_ID,
                          title: Z.intl.string(Z.t.m7PucM),
                          description: Z.intl.format(Z.t.zh1X7u, {}),
                          subscriptionRequired: !0,
                          pillText: Z.intl.string(Z.t.oW0eUd),
                          caption: (0, i.jsx)("img", { src: Q, alt: "SteelSeries" }),
                          backgroundAssetUrl: es.A,
                          progress: eI.getDate() / ej,
                          ctaText: Z.intl.string(Z.t.w7s5Qr),
                          onCtaClick: () => (0, w.u)({ analyticsLocations: e, partnerIds: [k.KS, k.Cs] }),
                          blurTint: "#2E213D",
                      }
                    : null,
                eN
                    ? {
                          id: V.QUEST_ORB_MULTIPLIER_CARD_ID,
                          title: Z.intl.string(Z.t.F2MShO),
                          description: Z.intl.format(Z.t.NpUfej, { bonusOrbMultiplier: ev }),
                          pillText: Z.intl.string(Z.t.oW0eUd),
                          primaryAsset: ee.A,
                          ctaText: Z.intl.string(Z.t.jVcuVY),
                          onCtaClick: () => (0, N.pX)(z.BVt.QUEST_HOME),
                      }
                    : null,
                {
                    id: V.DISPLAY_NAME_STYLES_CARD_ID,
                    title: Z.intl.string(Z.t.OLtTrt),
                    description: Z.intl.string(Z.t["di/pXR"]),
                    onCtaClick: t ? eA : ep,
                    ctaText: Z.intl.string(Z.t.jVcuVY),
                    primaryAsset: $.A,
                    pillText: Z.intl.string(Z.t.y2b7CA),
                },
                {
                    id: V.CLIENT_THEMES_CARD_ID,
                    title: Z.intl.string(Z.t.acc6h6),
                    description: Z.intl.formatToPlainString(Z.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: er.A,
                    ctaText: Z.intl.string(Z.t.jVcuVY),
                    onCtaClick: () => {
                        (0, x.nf)(x.HP.CUSTOM_THEME);
                    },
                },
                {
                    id: V.PERMADECOS_CARD_ID,
                    title: Z.intl.string(Z.t.L14NZN),
                    description: Z.intl.string(Z.t.eCZkAI),
                    primaryAsset: (0, i.jsx)(l.u7P, { alt: "", ariaHidden: !0 }),
                    ctaText: Z.intl.string(Z.t.jVcuVY),
                    onCtaClick: t ? eA : eT,
                },
                {
                    id: V.CUSTOM_APP_ICONS_CARD_ID,
                    title: Z.intl.string(Z.t["GU+wqh"]),
                    description: Z.intl.string(Z.t["1uPk1Z"]),
                    primaryAsset: et.A,
                    ctaText: Z.intl.string(Z.t.y9TxXV),
                    onCtaClick: ef,
                },
            ],
            a = (s = s.filter((e) => null != e))[0].featured,
            d = a ? 5 : 6;
        return s.splice(+!!a, 0, eC), s.length > d && s.splice(d, s.length - d), s;
    }, [eC, ex, eo, eS, ed, eu, em, eN, ev, ej, eI, e, ep, ef, eT, eE, eA, t, ec]);
}
