var i = n(477900),
    a = n(582128),
    r = n(517352),
    l = n(793574),
    s = n(688810),
    o = n(975571),
    d = n(920050),
    c = n(721157),
    u = n(807098),
    f = n(852218),
    m = n(670328),
    g = n(323390),
    b = n(60163),
    p = n(652215),
    A = n(749962),
    P = n(116716),
    E = n(770300),
    _ = n(792996),
    O = n(635088);
n.d(
    t,
    {},
    {
        A: function () {
            let { enabled: e } = g.A.useConfig({ location: "useThirdPartyPartnerPerkCards" }),
                { component: t } = (0, b.A)(r.oW.PREMIUM_HOME_REWARDS_PERK_CARD),
                { analyticsLocations: n } = (0, s.Ay)(l.A.PREMIUM_MARKETING_PERK_CARD),
                T = (0, u.T)(null != t ? (0, c.Co)(t) : null);
            return (0, a.useMemo)(
                () =>
                    e && null != T
                        ? {
                              id: d.CODE_BLURPLE_CARD_ID,
                              title: _.intl.string(E.default.E1sPHw),
                              description: _.intl.string(E.default["6AbN1y"]),
                              caption: (0, i.jsx)("img", { src: O.A, alt: "Call of Duty: MW4" }),
                              backgroundAssetUrl: T,
                              subscriptionRequired: !0,
                              isThirdPartyPerk: !0,
                              ctaText: _.intl.string(P.default.vlafDc),
                              onCtaClick: () =>
                                  (0, m.P)({
                                      partnerIds: [f.Bt],
                                      title: _.intl.string(E.default.PFtZV6),
                                      subtitle: _.intl.format(A.default.ieA3V0, {
                                          termsUrl: o.A.getArticleURL(p.MVz.CODE_BLURPLE_PROMOTION),
                                      }),
                                      analyticsLocations: n,
                                  }),
                              analyticsOptions: { thirdPartyPartner: f.Bt },
                          }
                        : null,
                [T, n, e],
            );
        },
    },
);
