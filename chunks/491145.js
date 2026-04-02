n.d(e, { A: () => j });
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
    N = n(652215),
    b = n(788868),
    A = n(985018),
    p = n(103659);
let I = { rewardSkuIds: [], promotionEndDate: null };
function j(t, e, n) {
    let j = t.config.features.includes(C.Li.NITRO_CONTROL_CTA),
        v = (0, s.bG)([u.default], () => u.default.getCurrentUser()),
        T = (0, h.YE)(v, b.PremiumTypes.TIER_2),
        E = (0, h.ki)(v),
        { rewardSkuIds: _, promotionEndDate: R } = (0, s.cf)([d.A], () => {
            if (!j) return I;
            let t = d.A.getMarketingMomentRewardSkuIds(),
                e = d.A.promotionsByType[o.pt.MARKETING_MOMENT],
                n = Object.keys(e);
            return { rewardSkuIds: t, promotionEndDate: n.length > 0 ? e[n[0]].endDate : null };
        }),
        O = _.length > 0,
        y = i.useCallback(async () => {
            j &&
                (T
                    ? ((0, f.Y5)({
                          questId: t.id,
                          questContent: x.uF.REWARD_MODAL,
                          questContentCTA: g.Cy.OPEN_NITRO_HOME,
                          impressionId: e.impressionId,
                          sourceQuestContent: e.sourceQuestContent,
                      }),
                      await n?.(),
                      (0, c.pX)(N.BVt.NITRO_HOME))
                    : ((0, f.Y5)({
                          questId: t.id,
                          questContent: x.uF.REWARD_MODAL,
                          questContentCTA: g.Cy.OPEN_NITRO_CHECKOUT,
                          impressionId: e.impressionId,
                          sourceQuestContent: e.sourceQuestContent,
                      }),
                      await n?.(),
                      await (0, l.A)({ subscriptionTier: b.pe.TIER_2, analyticsLocations: [r.A.QUEST_REWARD_MODAL] })));
        }, [j, T, t.id, e.impressionId, e.sourceQuestContent, n]);
    return j
        ? T
            ? {
                  title: A.intl.string(p.default.I8cv0h),
                  subtitle: A.intl.string(p.default.wC4J6d),
                  ctaText: A.intl.string(p.default.u29fVK),
                  ctaIcon: void 0,
                  ctaVariant: "primary",
                  onClickCta: y,
              }
            : O && null != R && R > new Date()
              ? {
                    title: A.intl.string(p.default.E0XZQW),
                    subtitle: A.intl.format(E ? p.default["PyQY5+"] : p.default["Ri/ZGz"], {
                        date: R,
                        helpCenterLink: m.A.getArticleURL(N.MVz.NITRO_CONTROL_CAMPAIGN),
                    }),
                    ctaText: A.intl.string(E ? A.t.IJI7yk : A.t.pj0XBN),
                    ctaIcon: a.tvc,
                    ctaIconPosition: "start",
                    ctaVariant: "expressive",
                    onClickCta: y,
                }
              : {
                    title: A.intl.string(p.default.pVkPgD),
                    subtitle: A.intl.string(p.default.vxubVL),
                    ctaText: A.intl.string(E ? A.t.IJI7yk : A.t.pj0XBN),
                    ctaIcon: a.tvc,
                    ctaIconPosition: "start",
                    ctaVariant: "expressive",
                    onClickCta: y,
                }
        : null;
}
