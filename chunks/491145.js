n.d(e, { A: () => E });
var i = n(64700),
    s = n(902173),
    a = n(311907),
    l = n(403581),
    r = n(793574),
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
    p = n(652215),
    I = n(788868),
    N = n(985018),
    A = n(237146),
    v = n(365720);
let j = { rewardSkuIds: [], promotionEndDate: null };
function E(t, e, n) {
    let E = t.config.features.some((t) => C.Tz.has(t)),
        T = (0, a.bG)([h.default], () => h.default.getCurrentUser()),
        _ = (0, b.YE)(T, I.PremiumTypes.TIER_2),
        y = (0, b.ki)(T),
        { rewardSkuIds: R, promotionEndDate: O } = (0, a.cf)([o.A], () => {
            if (!E) return j;
            let t = o.A.getMarketingMomentRewardSkuIds(),
                e = o.A.promotionsByType[c.pt.MARKETING_MOMENT],
                n = Object.keys(e);
            return { rewardSkuIds: t, promotionEndDate: n.length > 0 ? e[n[0]].endDate : null };
        }),
        L = R.length > 0,
        k = i.useCallback(async () => {
            E &&
                (_
                    ? ((0, g.Y5)({
                          questId: t.id,
                          questContent: f.uF.REWARD_MODAL,
                          questContentCTA: x.Cy.OPEN_NITRO_HOME,
                          impressionId: e.impressionId,
                          sourceQuestContent: e.sourceQuestContent,
                      }),
                      await n?.(),
                      (0, u.pX)(p.BVt.NITRO_HOME))
                    : ((0, g.Y5)({
                          questId: t.id,
                          questContent: f.uF.REWARD_MODAL,
                          questContentCTA: x.Cy.OPEN_NITRO_CHECKOUT,
                          impressionId: e.impressionId,
                          sourceQuestContent: e.sourceQuestContent,
                      }),
                      await n?.(),
                      await (0, d.A)({ subscriptionTier: I.pe.TIER_2, analyticsLocations: [r.A.QUEST_REWARD_MODAL] })));
        }, [E, _, t.id, e.impressionId, e.sourceQuestContent, n]);
    if (!E) return null;
    if (t.config.features.includes(s.L.NITRO_2_POINT_0_CTA)) {
        let t = m.A.getArticleURL(p.MVz.NITRO_2_POINT_0);
        return _
            ? {
                  title: N.intl.string(A.default.LIc2xy),
                  subtitle: N.intl.format(A.default.gzazAe, { helpCenterLink: t }),
                  ctaText: N.intl.string(A.default.HlVJm0),
                  ctaIcon: void 0,
                  ctaVariant: "primary",
                  onClickCta: k,
              }
            : y
              ? {
                    title: N.intl.string(A.default.HTsycG),
                    subtitle: N.intl.format(A.default["3JKWU6"], { helpCenterLink: t }),
                    ctaText: N.intl.string(A.default["2iX+XV"]),
                    ctaIcon: void 0,
                    ctaVariant: "primary",
                    onClickCta: k,
                }
              : {
                    title: N.intl.string(A.default.bOf5IH),
                    subtitle: N.intl.format(A.default.SzOYGc, { helpCenterLink: t }),
                    ctaText: N.intl.string(A.default["620Iwi"]),
                    ctaIcon: void 0,
                    ctaVariant: "primary",
                    onClickCta: k,
                };
    }
    return _
        ? {
              title: N.intl.string(v.default.I8cv0h),
              subtitle: N.intl.string(v.default.wC4J6d),
              ctaText: N.intl.string(v.default.u29fVK),
              ctaIcon: void 0,
              ctaVariant: "primary",
              onClickCta: k,
          }
        : L && null != O && O > new Date()
          ? {
                title: N.intl.string(v.default.E0XZQW),
                subtitle: N.intl.format(y ? v.default["PyQY5+"] : v.default["Ri/ZGz"], {
                    date: O,
                    helpCenterLink: m.A.getArticleURL(p.MVz.NITRO_CONTROL_CAMPAIGN),
                }),
                ctaText: N.intl.string(y ? N.t.IJI7yk : N.t.pj0XBN),
                ctaIcon: l.t,
                ctaIconPosition: "start",
                ctaVariant: "expressive",
                onClickCta: k,
            }
          : {
                title: N.intl.string(v.default.pVkPgD),
                subtitle: N.intl.string(v.default.vxubVL),
                ctaText: N.intl.string(y ? N.t.IJI7yk : N.t.pj0XBN),
                ctaIcon: l.t,
                ctaIconPosition: "start",
                ctaVariant: "expressive",
                onClickCta: k,
            };
}
