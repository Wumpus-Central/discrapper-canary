(n.r(t), n.d(t, { useMacaronBentoBox: () => T, useMacaronPerkCard: () => O }));
var i = n(477900),
    a = n(582128),
    r = n(793574),
    l = n(688810),
    s = n(975571),
    o = n(713271),
    d = n(555393),
    c = n(852218),
    u = n(670328),
    f = n(722793),
    m = n(275357),
    g = n(652215),
    b = n(116716),
    p = n(160071),
    A = n(855e3),
    P = n(792996),
    E = n(505051);
let _ = new Date(2026, 10, 18);
function O(e) {
    let { location: t } = e,
        { enabled: n, phase: o } = f.A.useConfig({ location: t }),
        { analyticsLocations: E } = (0, l.Ay)(r.A.PREMIUM_MARKETING_PERK_CARD),
        O = null === (0, d.N)(),
        T = null;
    return (
        o === f.H.PHASE_ONE
            ? (T = P.intl.formatToPlainString(p.default.XuYNQR, { date: _, rewardPercentage: 10 }))
            : o === f.H.PHASE_TWO &&
              (T = P.intl.formatToPlainString(A.default["H6cz/6"], { date: _, rewardPercentage: 10 })),
        (0, a.useMemo)(
            () =>
                n
                    ? {
                          id: m.A,
                          title: P.intl.string(A.default["NzvIo/"]),
                          description: T,
                          subscriptionRequired: !0,
                          isThirdPartyPerk: !0,
                          backgroundAssetUrl:
                              o === f.H.PHASE_ONE
                                  ? "https://cdn.discordapp.com/assets/content/0554c6feeb235cbea5142d41756c5d612802f6effb87d3dc7bad5b67f5a403b3.png"
                                  : "https://cdn.discordapp.com/assets/content/c7ddb9ec959be5a1d1f4ed600cdaae2e0bdddebd93724483bbbe4584b2e75583.png",
                          blurTint: "#001E73",
                          caption: (0, i.jsx)("img", {
                              src: "https://cdn.discordapp.com/assets/content/32de478fcda44ae57324cd94a2f1b07b7cc942143c31d240bd1f1558d515df27.svg",
                              alt: "My Best Buy Plus",
                          }),
                          ctaText: P.intl.string(b.default.vlafDc),
                          onCtaClick: () =>
                              (0, u.P)({
                                  partnerIds: [c.P_],
                                  title: P.intl.string(A.default["0RERAa"]),
                                  subtitle: P.intl.format(b.default.uytDvV, {
                                      expirationDate: _,
                                      termsUrl: s.A.getArticleURL(g.MVz.BEST_BUY_PROMOTION),
                                  }),
                                  analyticsLocations: E,
                              }),
                          ctaDisabled: O,
                          ctaLoading: O,
                          pillText: P.intl.string(P.t.y2b7CA),
                      }
                    : null,
            [E, n, O, T, o],
        )
    );
}
function T(e) {
    let { location: t } = e,
        { enabled: n, phase: d } = f.A.useConfig({ location: t }),
        { analyticsLocations: m } = (0, l.Ay)(r.A.PREMIUM_MARKETING_BENTO_BOX),
        O = null;
    return (
        d === f.H.PHASE_ONE
            ? (O = P.intl.format(p.default.MJep2r, {
                  date: _,
                  rewardPercentage: 10,
                  termsUrl: s.A.getArticleURL(g.MVz.BEST_BUY_PROMOTION),
              }))
            : d === f.H.PHASE_TWO &&
              (O = P.intl.format(A.default["K/UZHJ"], {
                  date: _,
                  rewardPercentage: 10,
                  termsUrl: s.A.getArticleURL(g.MVz.BEST_BUY_PROMOTION),
              })),
        (0, a.useMemo)(
            () =>
                n && null != O
                    ? {
                          name: o.N.MACARON,
                          caption: (0, i.jsx)("img", {
                              src: "https://cdn.discordapp.com/assets/content/1f431ddb5bf6a9d72a9b80820551561bfce12d601c7fe17275ec2c0cc1ecd048.svg",
                              alt: "My Best Buy Plus",
                          }),
                          title: P.intl.string(A.default["NzvIo/"]),
                          previewImage:
                              d === f.H.PHASE_ONE
                                  ? "https://cdn.discordapp.com/assets/content/7db5e6857b36d6ea33af3c6a57f9701f26539c29fdb613ff81ec5a51d544f23f.png"
                                  : "https://cdn.discordapp.com/assets/content/d2b00ed1d159f58e3b59d64ffb8386063ec48b58789f366785e534a1b74aea0f.png",
                          containerClassName: E.macaronGradient,
                          description: O,
                          descriptionCta: P.intl.string(b.default.WMK6Pg),
                          onClick: () =>
                              (0, u.P)({
                                  partnerIds: [c.P_],
                                  title: P.intl.string(A.default["0RERAa"]),
                                  subtitle: P.intl.format(b.default.uytDvV, {
                                      expirationDate: _,
                                      termsUrl: s.A.getArticleURL(g.MVz.BEST_BUY_PROMOTION),
                                  }),
                                  analyticsLocations: m,
                                  isLocked: !0,
                              }),
                      }
                    : null,
            [m, n, O, d],
        )
    );
}
