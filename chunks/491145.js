n.d(e, { A: () => j });
var i = n(64700),
    s = n(902173),
    a = n(311907),
    r = n(397927),
    l = n(793574),
    d = n(532794),
    c = n(412260),
    o = n(852218),
    u = n(976860),
    m = n(287809),
    h = n(975571),
    f = n(474090),
    g = n(341915),
    x = n(561844),
    C = n(590202),
    I = n(654487),
    b = n(652215),
    N = n(788868),
    A = n(985018),
    p = n(237146),
    v = n(365720);
let T = { rewardSkuIds: [], promotionEndDate: null };
function j(t, e, n) {
    let j = t.config.features.some((t) => I.Tz.has(t)),
        E = (0, a.bG)([m.default], () => m.default.getCurrentUser()),
        _ = (0, f.YE)(E, N.PremiumTypes.TIER_2),
        y = (0, f.ki)(E),
        { rewardSkuIds: O, promotionEndDate: R } = (0, a.cf)([c.A], () => {
            if (!j) return T;
            let t = c.A.getMarketingMomentRewardSkuIds(),
                e = c.A.promotionsByType[o.pt.MARKETING_MOMENT],
                n = Object.keys(e);
            return { rewardSkuIds: t, promotionEndDate: n.length > 0 ? e[n[0]].endDate : null };
        }),
        L = O.length > 0,
        k = i.useCallback(async () => {
            j &&
                (_
                    ? ((0, x.Y5)({
                          questId: t.id,
                          questContent: g.uF.REWARD_MODAL,
                          questContentCTA: C.Cy.OPEN_NITRO_HOME,
                          impressionId: e.impressionId,
                          sourceQuestContent: e.sourceQuestContent,
                      }),
                      await n?.(),
                      (0, u.pX)(b.BVt.NITRO_HOME))
                    : ((0, x.Y5)({
                          questId: t.id,
                          questContent: g.uF.REWARD_MODAL,
                          questContentCTA: C.Cy.OPEN_NITRO_CHECKOUT,
                          impressionId: e.impressionId,
                          sourceQuestContent: e.sourceQuestContent,
                      }),
                      await n?.(),
                      await (0, d.A)({ subscriptionTier: N.pe.TIER_2, analyticsLocations: [l.A.QUEST_REWARD_MODAL] })));
        }, [j, _, t.id, e.impressionId, e.sourceQuestContent, n]);
    if (!j) return null;
    if (t.config.features.includes(s.L.NITRO_2_POINT_0_CTA)) {
        let t = h.A.getArticleURL(b.MVz.NITRO_2_POINT_0);
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
        : L && null != R && R > new Date()
          ? {
                title: A.intl.string(v.default.E0XZQW),
                subtitle: A.intl.format(y ? v.default["PyQY5+"] : v.default["Ri/ZGz"], {
                    date: R,
                    helpCenterLink: h.A.getArticleURL(b.MVz.NITRO_CONTROL_CAMPAIGN),
                }),
                ctaText: A.intl.string(y ? A.t.IJI7yk : A.t.pj0XBN),
                ctaIcon: r.tvc,
                ctaIconPosition: "start",
                ctaVariant: "expressive",
                onClickCta: k,
            }
          : {
                title: A.intl.string(v.default.pVkPgD),
                subtitle: A.intl.string(v.default.vxubVL),
                ctaText: A.intl.string(y ? A.t.IJI7yk : A.t.pj0XBN),
                ctaIcon: r.tvc,
                ctaIconPosition: "start",
                ctaVariant: "expressive",
                onClickCta: k,
            };
}
