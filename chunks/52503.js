(n.r(t), n.d(t, { useMacaronPerkCard: () => C, useMacaronBentoBox: () => A }));
var i = n(477900),
    r = n(582128),
    a = n(793574),
    l = n(688810),
    o = n(975571),
    s = n(713271),
    d = n(555393),
    c = n(852218),
    u = n(164832),
    m = n(722793),
    f = n(275357),
    g = n(652215),
    b = n(685477),
    p = n(116314),
    P = n(429605),
    T = n(105292),
    _ = n(505051);
let E = new Date(2026, 10, 18);
function C(e) {
    let { location: t } = e,
        { enabled: n, phase: s } = m.A.useConfig({ location: t }),
        { analyticsLocations: _ } = (0, l.Ay)(a.A.PREMIUM_MARKETING_PERK_CARD),
        C = null === (0, d.N)(),
        A = null;
    return (
        s === m.H.PHASE_ONE
            ? (A = T.intl.formatToPlainString(p.default.XuYNQR, { date: E, rewardPercentage: 10 }))
            : s === m.H.PHASE_TWO &&
              (A = T.intl.formatToPlainString(P.default["H6cz/6"], { date: E, rewardPercentage: 10 })),
        (0, r.useMemo)(
            () =>
                n
                    ? {
                          id: f.AQ,
                          title: T.intl.string(P.default["NzvIo/"]),
                          description: A,
                          subscriptionRequired: !0,
                          isThirdPartyPerk: !0,
                          backgroundAssetUrl:
                              s === m.H.PHASE_ONE
                                  ? "https://cdn.discordapp.com/assets/content/0554c6feeb235cbea5142d41756c5d612802f6effb87d3dc7bad5b67f5a403b3.png"
                                  : "https://cdn.discordapp.com/assets/content/c7ddb9ec959be5a1d1f4ed600cdaae2e0bdddebd93724483bbbe4584b2e75583.png",
                          blurTint: "#001E73",
                          caption: (0, i.jsx)("img", {
                              src: "https://cdn.discordapp.com/assets/content/32de478fcda44ae57324cd94a2f1b07b7cc942143c31d240bd1f1558d515df27.svg",
                              alt: "My Best Buy Plus",
                          }),
                          ctaText: T.intl.string(b.default.vlafDc),
                          onCtaClick: () =>
                              (0, u.P)({
                                  partnerIds: [c.P_],
                                  title: T.intl.string(P.default["0RERAa"]),
                                  subtitle: T.intl.format(b.default.uytDvV, {
                                      expirationDate: E,
                                      termsUrl: o.A.getArticleURL(g.MVz.BEST_BUY_PROMOTION),
                                  }),
                                  analyticsLocations: _,
                              }),
                          ctaDisabled: C,
                          ctaLoading: C,
                          pillText: T.intl.string(T.t.y2b7CA),
                      }
                    : null,
            [_, n, C, A, s],
        )
    );
}
function A(e) {
    let { location: t } = e,
        { enabled: n, phase: d } = m.A.useConfig({ location: t }),
        { analyticsLocations: f } = (0, l.Ay)(a.A.PREMIUM_MARKETING_BENTO_BOX),
        C = null;
    return (
        d === m.H.PHASE_ONE
            ? (C = T.intl.format(p.default.MJep2r, {
                  date: E,
                  rewardPercentage: 10,
                  termsUrl: o.A.getArticleURL(g.MVz.BEST_BUY_PROMOTION),
              }))
            : d === m.H.PHASE_TWO &&
              (C = T.intl.format(P.default["K/UZHJ"], {
                  date: E,
                  rewardPercentage: 10,
                  termsUrl: o.A.getArticleURL(g.MVz.BEST_BUY_PROMOTION),
              })),
        (0, r.useMemo)(
            () =>
                n && null != C
                    ? {
                          name: s.N.MACARON,
                          caption: (0, i.jsx)("img", {
                              src: "https://cdn.discordapp.com/assets/content/1f431ddb5bf6a9d72a9b80820551561bfce12d601c7fe17275ec2c0cc1ecd048.svg",
                              alt: "My Best Buy Plus",
                          }),
                          title: T.intl.string(P.default["NzvIo/"]),
                          previewImage:
                              d === m.H.PHASE_ONE
                                  ? "https://cdn.discordapp.com/assets/content/7db5e6857b36d6ea33af3c6a57f9701f26539c29fdb613ff81ec5a51d544f23f.png"
                                  : "https://cdn.discordapp.com/assets/content/d2b00ed1d159f58e3b59d64ffb8386063ec48b58789f366785e534a1b74aea0f.png",
                          containerClassName: _.macaronGradient,
                          description: C,
                          descriptionCta: T.intl.string(b.default.WMK6Pg),
                          onClick: () =>
                              (0, u.P)({
                                  partnerIds: [c.P_],
                                  title: T.intl.string(P.default["0RERAa"]),
                                  subtitle: T.intl.format(b.default.uytDvV, {
                                      expirationDate: E,
                                      termsUrl: o.A.getArticleURL(g.MVz.BEST_BUY_PROMOTION),
                                  }),
                                  analyticsLocations: f,
                                  isLocked: !0,
                              }),
                      }
                    : null,
            [f, n, C, d],
        )
    );
}
