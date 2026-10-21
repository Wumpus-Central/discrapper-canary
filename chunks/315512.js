n.d(t, { A: () => _ });
var i = n(477900),
    a = n(582128),
    r = n(877624),
    l = n(793574),
    s = n(688810),
    o = n(975571),
    d = n(920050),
    c = n(721157),
    u = n(807098),
    m = n(852218),
    f = n(164832),
    g = n(323390),
    b = n(60163),
    p = n(652215),
    A = n(310235),
    P = n(685477),
    E = n(973507),
    C = n(105292),
    T = n(635088);
function _() {
    let { enabled: e } = g.A.useConfig({ location: "useThirdPartyPartnerPerkCards" }),
        { component: t } = (0, b.A)(r.C.PREMIUM_HOME_REWARDS_PERK_CARD),
        { analyticsLocations: n } = (0, s.Ay)(l.A.PREMIUM_MARKETING_PERK_CARD),
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
                                  termsUrl: o.A.getArticleURL(p.MVz.CODE_BLURPLE_PROMOTION),
                              }),
                              analyticsLocations: n,
                          }),
                      analyticsOptions: { thirdPartyPartner: m.Bt },
                  }
                : null,
        [_, n, e],
    );
}
