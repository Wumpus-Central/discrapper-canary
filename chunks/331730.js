(n.r(t), n.d(t, { useMacaronPerkCard: () => h, useMacaronBentoBox: () => A }));
var i = n(477900),
    a = n(582128),
    r = n(793574),
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
    T = n(429605),
    C = n(660183),
    P = n(505051);
let _ = new Date(2026, 10, 18);
function h(e) {
    let { location: t } = e,
        { enabled: n, phase: s } = m.A.useConfig({ location: t }),
        { analyticsLocations: P } = (0, l.Ay)(r.A.PREMIUM_MARKETING_PERK_CARD),
        h = null === (0, d.N)(),
        A = null;
    return (
        s === m.H.PHASE_ONE
            ? (A = C.intl.formatToPlainString(p.default.XuYNQR, { date: _, rewardPercentage: 10 }))
            : s === m.H.PHASE_TWO &&
              (A = C.intl.formatToPlainString(T.default["H6cz/6"], { date: _, rewardPercentage: 10 })),
        (0, a.useMemo)(
            () =>
                n
                    ? {
                          id: f.AQ,
                          title: C.intl.string(T.default["NzvIo/"]),
                          description: A,
                          subscriptionRequired: !0,
                          isThirdPartyPerk: !0,
                          backgroundAssetUrl:
                              "https://cdn.discordapp.com/assets/content/c7ddb9ec959be5a1d1f4ed600cdaae2e0bdddebd93724483bbbe4584b2e75583.png",
                          blurTint: "#001E73",
                          caption: (0, i.jsx)("img", {
                              src: "https://cdn.discordapp.com/assets/content/32de478fcda44ae57324cd94a2f1b07b7cc942143c31d240bd1f1558d515df27.svg",
                              alt: "My Best Buy Plus",
                          }),
                          ctaText: C.intl.string(b.default.vlafDc),
                          onCtaClick: () =>
                              (0, u.P)({
                                  partnerIds: [c.P_],
                                  title: C.intl.string(T.default["0RERAa"]),
                                  subtitle: C.intl.format(b.default.uytDvV, {
                                      expirationDate: _,
                                      termsUrl: o.A.getArticleURL(g.MVz.BEST_BUY_PROMOTION),
                                  }),
                                  analyticsLocations: P,
                              }),
                          ctaDisabled: h,
                          ctaLoading: h,
                          pillText: C.intl.string(C.t.y2b7CA),
                      }
                    : null,
            [P, n, h, A],
        )
    );
}
function A(e) {
    let { location: t } = e,
        { enabled: n, phase: d } = m.A.useConfig({ location: t }),
        { analyticsLocations: f } = (0, l.Ay)(r.A.PREMIUM_MARKETING_BENTO_BOX),
        h = null;
    return (
        d === m.H.PHASE_ONE
            ? (h = C.intl.format(p.default.MJep2r, {
                  date: _,
                  rewardPercentage: 10,
                  termsUrl: o.A.getArticleURL(g.MVz.BEST_BUY_PROMOTION),
              }))
            : d === m.H.PHASE_TWO &&
              (h = C.intl.format(T.default["K/UZHJ"], {
                  date: _,
                  rewardPercentage: 10,
                  termsUrl: o.A.getArticleURL(g.MVz.BEST_BUY_PROMOTION),
              })),
        (0, a.useMemo)(
            () =>
                n && null != h
                    ? {
                          name: s.N.MACARON,
                          caption: (0, i.jsx)("img", {
                              src: "https://cdn.discordapp.com/assets/content/1f431ddb5bf6a9d72a9b80820551561bfce12d601c7fe17275ec2c0cc1ecd048.svg",
                              alt: "My Best Buy Plus",
                          }),
                          title: C.intl.string(T.default["NzvIo/"]),
                          previewImage:
                              "https://cdn.discordapp.com/assets/content/d2b00ed1d159f58e3b59d64ffb8386063ec48b58789f366785e534a1b74aea0f.png",
                          containerClassName: P.macaronGradient,
                          description: h,
                          descriptionCta: C.intl.string(b.default.WMK6Pg),
                          onClick: () =>
                              (0, u.P)({
                                  partnerIds: [c.P_],
                                  title: C.intl.string(T.default["0RERAa"]),
                                  subtitle: C.intl.format(b.default.uytDvV, {
                                      expirationDate: _,
                                      termsUrl: o.A.getArticleURL(g.MVz.BEST_BUY_PROMOTION),
                                  }),
                                  analyticsLocations: f,
                                  isLocked: !0,
                              }),
                      }
                    : null,
            [f, n, h],
        )
    );
}
