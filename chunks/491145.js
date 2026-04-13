n.d(e, { A: () => I });
var i = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(793574),
    l = n(532794),
    d = n(412260),
    o = n(852218),
    c = n(976860),
    u = n(287809),
    m = n(975571),
    h = n(474090),
    x = n(341915),
    f = n(561844),
    g = n(590202),
    C = n(654487),
    b = n(652215),
    N = n(788868),
    p = n(985018),
    A = n(471074);
let j = { rewardSkuIds: [], promotionEndDate: null };
function I(t, e, n) {
    let I = t.config.features.some((t) => C.Tz.has(t)),
        v = (0, s.bG)([u.default], () => u.default.getCurrentUser()),
        E = (0, h.YE)(v, N.PremiumTypes.TIER_2),
        T = (0, h.ki)(v),
        { rewardSkuIds: y, promotionEndDate: _ } = (0, s.cf)([d.A], () => {
            if (!I) return j;
            let t = d.A.getMarketingMomentRewardSkuIds(),
                e = d.A.promotionsByType[o.pt.MARKETING_MOMENT],
                n = Object.keys(e);
            return { rewardSkuIds: t, promotionEndDate: n.length > 0 ? e[n[0]].endDate : null };
        }),
        R = y.length > 0,
        k = i.useCallback(async () => {
            I &&
                (E
                    ? ((0, f.Y5)({
                          questId: t.id,
                          questContent: x.uF.REWARD_MODAL,
                          questContentCTA: g.Cy.OPEN_NITRO_HOME,
                          impressionId: e.impressionId,
                          sourceQuestContent: e.sourceQuestContent,
                      }),
                      await n?.(),
                      (0, c.pX)(b.BVt.NITRO_HOME))
                    : ((0, f.Y5)({
                          questId: t.id,
                          questContent: x.uF.REWARD_MODAL,
                          questContentCTA: g.Cy.OPEN_NITRO_CHECKOUT,
                          impressionId: e.impressionId,
                          sourceQuestContent: e.sourceQuestContent,
                      }),
                      await n?.(),
                      await (0, l.A)({ subscriptionTier: N.pe.TIER_2, analyticsLocations: [r.A.QUEST_REWARD_MODAL] })));
        }, [I, E, t.id, e.impressionId, e.sourceQuestContent, n]);
    return I
        ? E
            ? {
                  title: p.intl.string(A.default.I8cv0h),
                  subtitle: p.intl.string(A.default.wC4J6d),
                  ctaText: p.intl.string(A.default.u29fVK),
                  ctaIcon: void 0,
                  ctaVariant: "primary",
                  onClickCta: k,
              }
            : R && null != _ && _ > new Date()
              ? {
                    title: p.intl.string(A.default.E0XZQW),
                    subtitle: p.intl.format(T ? A.default["PyQY5+"] : A.default["Ri/ZGz"], {
                        date: _,
                        helpCenterLink: m.A.getArticleURL(b.MVz.NITRO_CONTROL_CAMPAIGN),
                    }),
                    ctaText: p.intl.string(T ? p.t.IJI7yk : p.t.pj0XBN),
                    ctaIcon: a.tvc,
                    ctaIconPosition: "start",
                    ctaVariant: "expressive",
                    onClickCta: k,
                }
              : {
                    title: p.intl.string(A.default.pVkPgD),
                    subtitle: p.intl.string(A.default.vxubVL),
                    ctaText: p.intl.string(T ? p.t.IJI7yk : p.t.pj0XBN),
                    ctaIcon: a.tvc,
                    ctaIconPosition: "start",
                    ctaVariant: "expressive",
                    onClickCta: k,
                }
        : null;
}
