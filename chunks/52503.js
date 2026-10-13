(n.r(t), n.d(t, { useMacaronPerkCard: () => A, useMacaronBentoBox: () => E }));
var i = n(477900),
    a = n(582128),
    r = n(793574),
    l = n(688810),
    s = n(975571),
    o = n(713271),
    d = n(555393),
    c = n(852218),
    u = n(164832),
    m = n(722793),
    f = n(275357),
    g = n(652215),
    b = n(685477),
    p = n(116314),
    P = n(429605),
    _ = n(660183),
    T = n(505051);
let C = new Date(2026, 10, 18);
function A(e) {
    let { location: t } = e,
        { enabled: n, phase: o } = m.A.useConfig({ location: t }),
        { analyticsLocations: T } = (0, l.Ay)(r.A.PREMIUM_MARKETING_PERK_CARD),
        A = null === (0, d.N)(),
        E = null;
    return (
        o === m.H.PHASE_ONE
            ? (E = _.intl.formatToPlainString(p.default.XuYNQR, { date: C, rewardPercentage: 10 }))
            : o === m.H.PHASE_TWO &&
              (E = _.intl.formatToPlainString(P.default["H6cz/6"], { date: C, rewardPercentage: 10 })),
        (0, a.useMemo)(
            () =>
                n
                    ? {
                          id: f.AQ,
                          title: _.intl.string(P.default["NzvIo/"]),
                          description: E,
                          subscriptionRequired: !0,
                          isThirdPartyPerk: !0,
                          backgroundAssetUrl:
                              o === m.H.PHASE_ONE
                                  ? "https://cdn.discordapp.com/assets/content/0554c6feeb235cbea5142d41756c5d612802f6effb87d3dc7bad5b67f5a403b3.png"
                                  : "https://cdn.discordapp.com/assets/content/c7ddb9ec959be5a1d1f4ed600cdaae2e0bdddebd93724483bbbe4584b2e75583.png",
                          blurTint: "#001E73",
                          caption: (0, i.jsx)("img", {
                              src: "https://cdn.discordapp.com/assets/content/32de478fcda44ae57324cd94a2f1b07b7cc942143c31d240bd1f1558d515df27.svg",
                              alt: "My Best Buy Plus",
                          }),
                          ctaText: _.intl.string(b.default.vlafDc),
                          onCtaClick: () =>
                              (0, u.P)({
                                  partnerIds: [c.P_],
                                  title: _.intl.string(P.default["0RERAa"]),
                                  subtitle: _.intl.format(b.default.uytDvV, {
                                      expirationDate: C,
                                      termsUrl: s.A.getArticleURL(g.MVz.BEST_BUY_PROMOTION),
                                  }),
                                  analyticsLocations: T,
                              }),
                          ctaDisabled: A,
                          ctaLoading: A,
                          pillText: _.intl.string(_.t.y2b7CA),
                      }
                    : null,
            [T, n, A, E, o],
        )
    );
}
function E(e) {
    let { location: t } = e,
        { enabled: n, phase: d } = m.A.useConfig({ location: t }),
        { analyticsLocations: f } = (0, l.Ay)(r.A.PREMIUM_MARKETING_BENTO_BOX),
        A = null;
    return (
        d === m.H.PHASE_ONE
            ? (A = _.intl.format(p.default.MJep2r, {
                  date: C,
                  rewardPercentage: 10,
                  termsUrl: s.A.getArticleURL(g.MVz.BEST_BUY_PROMOTION),
              }))
            : d === m.H.PHASE_TWO &&
              (A = _.intl.format(P.default["K/UZHJ"], {
                  date: C,
                  rewardPercentage: 10,
                  termsUrl: s.A.getArticleURL(g.MVz.BEST_BUY_PROMOTION),
              })),
        (0, a.useMemo)(
            () =>
                n && null != A
                    ? {
                          name: o.N.MACARON,
                          caption: (0, i.jsx)("img", {
                              src: "https://cdn.discordapp.com/assets/content/1f431ddb5bf6a9d72a9b80820551561bfce12d601c7fe17275ec2c0cc1ecd048.svg",
                              alt: "My Best Buy Plus",
                          }),
                          title: _.intl.string(P.default["NzvIo/"]),
                          previewImage:
                              d === m.H.PHASE_ONE
                                  ? "https://cdn.discordapp.com/assets/content/7db5e6857b36d6ea33af3c6a57f9701f26539c29fdb613ff81ec5a51d544f23f.png"
                                  : "https://cdn.discordapp.com/assets/content/d2b00ed1d159f58e3b59d64ffb8386063ec48b58789f366785e534a1b74aea0f.png",
                          containerClassName: T.macaronGradient,
                          description: A,
                          descriptionCta: _.intl.string(b.default.WMK6Pg),
                          onClick: () =>
                              (0, u.P)({
                                  partnerIds: [c.P_],
                                  title: _.intl.string(P.default["0RERAa"]),
                                  subtitle: _.intl.format(b.default.uytDvV, {
                                      expirationDate: C,
                                      termsUrl: s.A.getArticleURL(g.MVz.BEST_BUY_PROMOTION),
                                  }),
                                  analyticsLocations: f,
                                  isLocked: !0,
                              }),
                      }
                    : null,
            [f, n, A, d],
        )
    );
}
