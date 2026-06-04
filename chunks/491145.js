e.d(i, { A: () => A });
var a = e(64700),
    n = e(17928),
    r = e(793574),
    l = e(532794),
    s = e(976860),
    u = e(287809),
    f = e(975571),
    c = e(474090),
    d = e(507107),
    o = e(561844),
    T = e(590202),
    m = e(190107),
    _ = e(652215),
    R = e(788868),
    g = e(375708),
    p = e(237146);
function A(t, i, e) {
    let A = t.config.features.some((t) => m.Tz.has(t)),
        C = (0, n.bG)([u.default], () => u.default.getCurrentUser()),
        I = C?.hasPaidTier2Subscription(),
        O = (0, c.ki)(C) && !C?.isPremiumWithFractionalPremiumOnly(),
        V = a.useCallback(async () => {
            A &&
                (I
                    ? ((0, o.Y5)({
                          questId: t.id,
                          questContent: d.uF.REWARD_MODAL,
                          questContentCTA: T.Cy.OPEN_NITRO_HOME,
                          impressionId: i.impressionId,
                          sourceQuestContent: i.sourceQuestContent,
                      }),
                      await e?.(),
                      (0, s.pX)(_.BVt.NITRO_HOME))
                    : ((0, o.Y5)({
                          questId: t.id,
                          questContent: d.uF.REWARD_MODAL,
                          questContentCTA: T.Cy.OPEN_NITRO_CHECKOUT,
                          impressionId: i.impressionId,
                          sourceQuestContent: i.sourceQuestContent,
                      }),
                      await e?.(),
                      await (0, l.A)({ subscriptionTier: R.pe.TIER_2, analyticsLocations: [r.A.QUEST_REWARD_MODAL] })));
        }, [A, I, t.id, i.impressionId, i.sourceQuestContent, e]);
    if (!A) return null;
    if (t.config.features.includes(m.Li.NITRO_2_POINT_0_CTA)) {
        let t = f.A.getArticleURL(_.MVz.NITRO_2_POINT_0);
        return I
            ? {
                  title: g.intl.string(p.default.LIc2xy),
                  subtitle: g.intl.format(p.default.gzazAe, { helpCenterLink: t }),
                  ctaText: g.intl.string(p.default.HlVJm0),
                  ctaVariant: "primary",
                  onClickCta: V,
              }
            : O
              ? {
                    title: g.intl.string(p.default.HTsycG),
                    subtitle: g.intl.format(p.default["3JKWU6"], { helpCenterLink: t }),
                    ctaText: g.intl.string(p.default["2iX+XV"]),
                    ctaVariant: "primary",
                    onClickCta: V,
                }
              : {
                    title: g.intl.string(p.default.bOf5IH),
                    subtitle: g.intl.format(p.default.SzOYGc, { helpCenterLink: t }),
                    ctaText: g.intl.string(p.default["620Iwi"]),
                    ctaVariant: "primary",
                    onClickCta: V,
                };
    }
    if (t.config.features.includes(m.Li.ORBS_MULTIPLIER_QUEST)) {
        let t = f.A.getArticleURL(_.MVz.VIRTUAL_CURRENCY_LEARN_MORE);
        return I
            ? {
                  title: g.intl.string(p.default["QP/6xR"]),
                  subtitle: g.intl.format(p.default.zPnFYf, { helpCenterLink: t }),
                  ctaText: g.intl.string(p.default.TNS24d),
                  ctaVariant: "primary",
                  onClickCta: V,
              }
            : O
              ? {
                    title: g.intl.string(p.default.CFfUkp),
                    subtitle: g.intl.format(p.default["02smVH"], { helpCenterLink: t }),
                    ctaText: g.intl.string(p.default["2iX+XV"]),
                    ctaVariant: "primary",
                    onClickCta: V,
                }
              : {
                    title: g.intl.string(p.default.CFfUkp),
                    subtitle: g.intl.format(p.default["02smVH"], { helpCenterLink: t }),
                    ctaText: g.intl.string(p.default["620Iwi"]),
                    ctaVariant: "primary",
                    onClickCta: V,
                };
    }
    if (t.config.features.includes(m.Li.XBOX_GAME_PASS_QUEST)) {
        let t = f.A.getArticleURL(_.MVz.NITRO_2_POINT_0);
        return I
            ? {
                  title: g.intl.string(p.default["4zROKG"]),
                  subtitle: g.intl.format(p.default.v9AaV4, { helpCenterLink: t }),
                  ctaText: g.intl.string(p.default["/AUOfc"]),
                  ctaVariant: "primary",
                  onClickCta: V,
              }
            : O
              ? {
                    title: g.intl.string(p.default.Q15RXC),
                    subtitle: g.intl.format(p.default["zUjL+R"], { helpCenterLink: t }),
                    ctaText: g.intl.string(p.default["+ADjaQ"]),
                    ctaVariant: "primary",
                    onClickCta: V,
                }
              : {
                    title: g.intl.string(p.default.Q15RXC),
                    subtitle: g.intl.format(p.default.dHQQvk, { helpCenterLink: t }),
                    ctaText: g.intl.string(p.default.qI5XnY),
                    ctaVariant: "primary",
                    onClickCta: V,
                };
    }
    return null;
}
