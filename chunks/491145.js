e.d(i, { A: () => g });
var a = e(582128),
    r = e(323889),
    n = e(17928),
    l = e(507395),
    s = e(144779),
    u = e(793574),
    f = e(75678),
    d = e(976860),
    c = e(287809),
    o = e(975571),
    T = e(474090),
    p = e(738822),
    C = e(590202),
    _ = e(190107),
    m = e(652215),
    I = e(202541),
    R = e(105292),
    A = e(385740);
function g(t, i, e) {
    let g = t.config.features.some((t) => _.Tz.has(t)),
        O = (0, n.bG)([c.default], () => c.default.getCurrentUser()),
        E = O?.hasPaidTier2Subscription(),
        y = (0, T.ki)(O) && !O?.isPremiumWithFractionalPremiumOnly(),
        L = a.useCallback(async () => {
            g &&
                (E
                    ? ((0, l.r)({
                          type: s.F.CLICK_INTERNAL,
                          adCreativeType: r.p.QUEST,
                          adCreativeId: t.id,
                          questContentCTA: C.Cy.OPEN_NITRO_HOME,
                          surfaceId: p.uF.REWARD_MODAL,
                          sourceQuestContent: i.sourceQuestContent,
                          impressionId: i.impressionId,
                      }),
                      await e?.(),
                      (0, d.pX)(m.BVt.NITRO_HOME))
                    : ((0, l.r)({
                          type: s.F.CLICK_INTERNAL,
                          adCreativeType: r.p.QUEST,
                          adCreativeId: t.id,
                          questContentCTA: C.Cy.OPEN_NITRO_CHECKOUT,
                          surfaceId: p.uF.REWARD_MODAL,
                          sourceQuestContent: i.sourceQuestContent,
                          impressionId: i.impressionId,
                      }),
                      await e?.(),
                      await (0, f.A)({ subscriptionTier: I.pe.TIER_2, analyticsLocations: [u.A.QUEST_REWARD_MODAL] })));
        }, [g, E, t.id, i.impressionId, i.sourceQuestContent, e]);
    if (!g) return null;
    if (t.config.features.includes(_.Li.NITRO_2_POINT_0_CTA)) {
        let t = o.A.getArticleURL(m.MVz.NITRO_2_POINT_0);
        return E
            ? {
                  title: R.intl.string(A.default.LIc2xy),
                  subtitle: R.intl.format(A.default.gzazAe, { helpCenterLink: t }),
                  ctaText: R.intl.string(A.default.HlVJm0),
                  ctaVariant: "primary",
                  onClickCta: L,
              }
            : y
              ? {
                    title: R.intl.string(A.default.HTsycG),
                    subtitle: R.intl.format(A.default["3JKWU6"], { helpCenterLink: t }),
                    ctaText: R.intl.string(A.default["2iX+XV"]),
                    ctaVariant: "primary",
                    onClickCta: L,
                }
              : {
                    title: R.intl.string(A.default.bOf5IH),
                    subtitle: R.intl.format(A.default.SzOYGc, { helpCenterLink: t }),
                    ctaText: R.intl.string(A.default["620Iwi"]),
                    ctaVariant: "primary",
                    onClickCta: L,
                };
    }
    if (t.config.features.includes(_.Li.ORBS_MULTIPLIER_QUEST)) {
        let t = o.A.getArticleURL(m.MVz.VIRTUAL_CURRENCY_LEARN_MORE);
        return E
            ? {
                  title: R.intl.string(A.default["QP/6xR"]),
                  subtitle: R.intl.format(A.default.zPnFYf, { helpCenterLink: t }),
                  ctaText: R.intl.string(A.default.TNS24d),
                  ctaVariant: "primary",
                  onClickCta: L,
              }
            : y
              ? {
                    title: R.intl.string(A.default.CFfUkp),
                    subtitle: R.intl.format(A.default["02smVH"], { helpCenterLink: t }),
                    ctaText: R.intl.string(A.default["2iX+XV"]),
                    ctaVariant: "primary",
                    onClickCta: L,
                }
              : {
                    title: R.intl.string(A.default.CFfUkp),
                    subtitle: R.intl.format(A.default["02smVH"], { helpCenterLink: t }),
                    ctaText: R.intl.string(A.default["620Iwi"]),
                    ctaVariant: "primary",
                    onClickCta: L,
                };
    }
    if (t.config.features.includes(_.Li.XBOX_GAME_PASS_QUEST)) {
        let t = o.A.getArticleURL(m.MVz.NITRO_2_POINT_0);
        return E
            ? {
                  title: R.intl.string(A.default["4zROKG"]),
                  subtitle: R.intl.format(A.default.v9AaV4, { helpCenterLink: t }),
                  ctaText: R.intl.string(A.default["/AUOfc"]),
                  ctaVariant: "primary",
                  onClickCta: L,
              }
            : y
              ? {
                    title: R.intl.string(A.default.Q15RXC),
                    subtitle: R.intl.format(A.default["zUjL+R"], { helpCenterLink: t }),
                    ctaText: R.intl.string(A.default["+ADjaQ"]),
                    ctaVariant: "primary",
                    onClickCta: L,
                }
              : {
                    title: R.intl.string(A.default.Q15RXC),
                    subtitle: R.intl.format(A.default.dHQQvk, { helpCenterLink: t }),
                    ctaText: R.intl.string(A.default.qI5XnY),
                    ctaVariant: "primary",
                    onClickCta: L,
                };
    }
    return null;
}
