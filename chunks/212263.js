var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(442837),
    c = r(481060),
    d = r(355467),
    f = r(100527),
    _ = r(906732),
    h = r(28546),
    p = r(357355),
    m = r(98278),
    g = r(104494),
    E = r(639119),
    v = r(165583),
    I = r(197115),
    T = r(631771),
    b = r(609218),
    y = r(210887),
    S = r(626135),
    A = r(176354),
    N = r(74538),
    C = r(543241),
    R = r(149203),
    O = r(981631),
    D = r(185923),
    L = r(474936),
    x = r(388032),
    w = r(940675);
let P = (e) => {
    let n,
        { onLearnMore: i, onClose: o, channel: P, emojiDescriptor: M, pickerIntention: k, analyticsLocation: U, containerContext: B } = e,
        G = (0, u.e7)([y.Z], () => y.Z.theme) === O.BRd.LIGHT ? 'light' : 'dark',
        [Z, F] = s.useState(!1),
        V = () => {
            (0, C.A3)(P), (0, m.z)(), i();
        },
        j = r(577391)('./img_premium_emoji_'.concat(G, '.svg')),
        H = 'https://cdn.discordapp.com/assets/premium/roadblocks/emoji_'.concat(G, '.png'),
        Y = (0, E.N)(),
        W = (0, g.Ng)(),
        K = null != Y || null != W,
        z = (0, h.Iu)((e) => e.searchQuery),
        { analyticsLocations: q } = (0, _.ZP)(f.Z.EMOJI_PICKER),
        Q = T.Gi.useExperiment(
            { location: 'Premium Emoji Roadblock' },
            {
                autoTrackExposure: !K,
                disable: K
            }
        ),
        X = Q.enabled || null != Y,
        J = Q.addSocialProof;
    n = k === D.Hz.REACTION ? L.cd.EMOJI_PICKER_REACTION_EMOJI_CLICKED : null == M ? L.cd.EMOJI_PICKER_FLOATING_UPSELL : M.subCategory === R.t0.TOP_GUILD_EMOJI ? L.cd.EMOJI_PICKER_TOP_SERVER_EMOJI_CLICKED : M.subCategory === R.t0.NEWLY_ADDED_EMOJI ? L.cd.EMOJI_PICKER_NEWLY_ADDED_EMOJI_CLICKED : L.cd.EMOJI_PICKER_EMOJI_CLICKED;
    let $ = null != M ? M.emoji : void 0,
        ee = null != $ && $.animated,
        et = null != $ && !A.ZP.isInternalEmojiForGuildId($, null == P ? void 0 : P.getGuildId()),
        en = null != $ ? O.qAy.EMOJI : O.qAy.EMOJI_PICKER_FLOATING_UPSELL;
    s.useEffect(() => {
        !X &&
            S.default.track(O.rMx.PREMIUM_UPSELL_VIEWED, {
                type: n,
                is_animated: ee,
                is_external: et,
                has_search_query: null != z && '' !== z,
                location: {
                    ...U,
                    object: en
                },
                location_stack: q,
                sku_id: (0, N.Wz)(N.ZP.getSkuIdForPremiumType(L.p9.TIER_2))
            });
    }, [U, q, z, ee, et, n, en, X]);
    let er = () => (K ? x.intl.string(x.t['Gd/XHB']) : x.intl.string(x.t.P3etAg)),
        ei = (0, u.e7)([p.Z], () => p.Z.affinities),
        ea = (0, u.e7)([p.Z], () => p.Z.hasFetched);
    s.useEffect(() => {
        !ea && d.MH();
    }, [ea]);
    let es = ei.length > 1 && J,
        eo = () =>
            (0, a.jsx)(b.Z, {
                containerContext: B,
                image: {
                    url: H,
                    width: 220,
                    height: 132
                },
                title: x.intl.string(x.t['0+11FB']),
                description: x.intl.string(x.t.dURIzc),
                enableSocialProof: es,
                analyticsLocationSection: O.jXE.EMOJI_UPSELL_POPOUT,
                onClose: o,
                upsellViewedTrackingData: {
                    type: n,
                    is_external: et,
                    location: {
                        ...U,
                        object: en
                    },
                    location_stack: q,
                    sku_id: (0, N.Wz)(N.ZP.getSkuIdForPremiumType(L.p9.TIER_2)),
                    has_search_query: null != z && '' !== z,
                    is_animated: ee
                }
            });
    return X
        ? eo()
        : (0, a.jsxs)('div', {
              className: l()(w.premiumPromo, { [w.unifyTrialUpsell]: K }),
              children: [
                  (0, a.jsx)(c.Clickable, {
                      className: w.premiumPromoClose,
                      onClick: o,
                      children: x.intl.string(x.t.cpT0Cg)
                  }),
                  (0, a.jsxs)(a.Fragment, {
                      children: [
                          K
                              ? (0, a.jsx)(v.ZP, {
                                    type: L.cd.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI,
                                    subscriptionTier: L.Si.TIER_2,
                                    onClose: o,
                                    trialOffer: Y,
                                    discountOffer: W,
                                    children: x.intl.format(x.t.se13Fh, { onClick: V })
                                })
                              : (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)('img', {
                                            alt: '',
                                            className: w.premiumPromoImage,
                                            src: j
                                        }),
                                        (0, a.jsx)('div', {
                                            className: w.premiumPromoTitle,
                                            children: x.intl.string(x.t['1SsvhY'])
                                        }),
                                        (0, a.jsx)('div', {
                                            className: w.premiumPromoDescription,
                                            children: x.intl.format(x.t.se13Fh, { onClick: V })
                                        })
                                    ]
                                }),
                          !K &&
                              (0, a.jsx)(I.Z, {
                                  subscriptionTier: L.Si.TIER_2,
                                  submitting: Z,
                                  premiumModalAnalyticsLocation: {
                                      section: O.jXE.EMOJI_PICKER_POPOUT,
                                      object: O.qAy.BUTTON_CTA
                                  },
                                  size: c.Button.Sizes.SMALL,
                                  color: c.Button.Colors.GREEN,
                                  onClick: () => {
                                      F(!0);
                                  },
                                  onSubscribeModalClose: (e) => {
                                      F(!1), e && o();
                                  },
                                  buttonText: er()
                              })
                      ]
                  })
              ]
          });
};
n.Z = P;
