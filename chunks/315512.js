var i = n(477900),
    a = n(582128),
    r = n(877624),
    l = n(793574),
    o = n(688810),
    s = n(975571),
    d = n(920050),
    c = n(721157),
    u = n(807098),
    m = n(852218),
    f = n(452417),
    g = n(323390),
    b = n(60163),
    p = n(652215),
    A = n(749962),
    P = n(116716),
    E = n(770300),
    C = n(792996),
    T = n(635088);
n.d(
    t,
    {},
    {
        A: function () {
            let { enabled: e } = g.A.useConfig({ location: "useThirdPartyPartnerPerkCards" }),
                { component: t } = (0, b.A)(r.C.PREMIUM_HOME_REWARDS_PERK_CARD),
                { analyticsLocations: n } = (0, o.Ay)(l.A.PREMIUM_MARKETING_PERK_CARD),
                _ = (0, u.T)(null != t ? (0, c.Co)(t) : null);
            return (0, a.useMemo)(
                () =>
                    e && null != _
                        ? {
                              id: d.CODE_BLURPLE_CARD_ID,
                              title: C.intl.string(E.default.E1sPHw),
                              description: C.intl.string(E.default["6AbN1y"]),
                              caption: (0, i.jsx)("img", { src: T.A, alt: "Call of Duty: MW4" }),
                              backgroundAssetUrl: _,
                              subscriptionRequired: !0,
                              isThirdPartyPerk: !0,
                              ctaText: C.intl.string(P.default.vlafDc),
                              onCtaClick: () =>
                                  (0, f.P)({
                                      partnerIds: [m.Bt],
                                      title: C.intl.string(E.default.PFtZV6),
                                      subtitle: C.intl.format(A.default.ieA3V0, {
                                          termsUrl: s.A.getArticleURL(p.MVz.CODE_BLURPLE_PROMOTION),
                                      }),
                                      analyticsLocations: n,
                                  }),
                              analyticsOptions: { thirdPartyPartner: m.Bt },
                          }
                        : null,
                [_, n, e],
            );
        },
    },
);
