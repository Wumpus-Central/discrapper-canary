n.d(e, { A: () => j });
var i = n(64700),
    s = n(902173),
    a = n(311907),
    r = n(403581),
    l = n(793574),
    d = n(532794),
    o = n(412260),
    c = n(852218),
    u = n(976860),
    h = n(287809),
    m = n(975571),
    b = n(474090),
    f = n(341915),
    g = n(561844),
    x = n(590202),
    C = n(654487),
    I = n(652215),
    N = n(788868),
    A = n(985018),
    p = n(237146),
    v = n(365720);
let E = { rewardSkuIds: [], promotionEndDate: null };
function j(t, e, n) {
    let j = t.config.features.some((t) => C.Tz.has(t)),
        T = (0, a.bG)([h.default], () => h.default.getCurrentUser()),
        _ = (0, b.YE)(T, N.PremiumTypes.TIER_2),
        y = (0, b.ki)(T),
        { rewardSkuIds: R, promotionEndDate: O } = (0, a.cf)([o.A], () => {
            if (!j) return E;
            let t = o.A.getMarketingMomentRewardSkuIds(),
                e = o.A.promotionsByType[c.pt.MARKETING_MOMENT],
                n = Object.keys(e);
            return { rewardSkuIds: t, promotionEndDate: n.length > 0 ? e[n[0]].endDate : null };
        }),
        L = R.length > 0,
        k = i.useCallback(async () => {
            j &&
                (_
                    ? ((0, g.Y5)({
                          questId: t.id,
                          questContent: f.uF.REWARD_MODAL,
                          questContentCTA: x.Cy.OPEN_NITRO_HOME,
                          impressionId: e.impressionId,
                          sourceQuestContent: e.sourceQuestContent,
                      }),
                      await n?.(),
                      (0, u.pX)(I.BVt.NITRO_HOME))
                    : ((0, g.Y5)({
                          questId: t.id,
                          questContent: f.uF.REWARD_MODAL,
                          questContentCTA: x.Cy.OPEN_NITRO_CHECKOUT,
                          impressionId: e.impressionId,
                          sourceQuestContent: e.sourceQuestContent,
                      }),
                      await n?.(),
                      await (0, d.A)({ subscriptionTier: N.pe.TIER_2, analyticsLocations: [l.A.QUEST_REWARD_MODAL] })));
        }, [j, _, t.id, e.impressionId, e.sourceQuestContent, n]);
    if (!j) return null;
    if (t.config.features.includes(s.L.NITRO_2_POINT_0_CTA)) {
        let t = m.A.getArticleURL(I.MVz.NITRO_2_POINT_0);
        return _
            ? {
                  title: A.intl.string(p.default.LIc2xy),
                  subtitle: A.intl.format(p.default.gzazAe, { helpCenterLink: t }),
                  ctaText: A.intl.string(p.default.HlVJm0),
                  ctaIcon: void 0,
                  ctaVariant: "primary",
                  onClickCta: k,
              }
            : y
              ? {
                    title: A.intl.string(p.default.HTsycG),
                    subtitle: A.intl.format(p.default["3JKWU6"], { helpCenterLink: t }),
                    ctaText: A.intl.string(p.default["2iX+XV"]),
                    ctaIcon: void 0,
                    ctaVariant: "primary",
                    onClickCta: k,
                }
              : {
                    title: A.intl.string(p.default.bOf5IH),
                    subtitle: A.intl.format(p.default.SzOYGc, { helpCenterLink: t }),
                    ctaText: A.intl.string(p.default["620Iwi"]),
                    ctaIcon: void 0,
                    ctaVariant: "primary",
                    onClickCta: k,
                };
    }
    return _
        ? {
              title: A.intl.string(v.default.I8cv0h),
              subtitle: A.intl.string(v.default.wC4J6d),
              ctaText: A.intl.string(v.default.u29fVK),
              ctaIcon: void 0,
              ctaVariant: "primary",
              onClickCta: k,
          }
        : L && null != O && O > new Date()
          ? {
                title: A.intl.string(v.default.E0XZQW),
                subtitle: A.intl.format(y ? v.default["PyQY5+"] : v.default["Ri/ZGz"], {
                    date: O,
                    helpCenterLink: m.A.getArticleURL(I.MVz.NITRO_CONTROL_CAMPAIGN),
                }),
                ctaText: A.intl.string(y ? A.t.IJI7yk : A.t.pj0XBN),
                ctaIcon: r.t,
                ctaIconPosition: "start",
                ctaVariant: "expressive",
                onClickCta: k,
            }
          : {
                title: A.intl.string(v.default.pVkPgD),
                subtitle: A.intl.string(v.default.vxubVL),
                ctaText: A.intl.string(y ? A.t.IJI7yk : A.t.pj0XBN),
                ctaIcon: r.t,
                ctaIconPosition: "start",
                ctaVariant: "expressive",
                onClickCta: k,
            };
}
