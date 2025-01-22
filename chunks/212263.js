var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(442837),
    c = r(481060),
    d = r(355467),
    f = r(100527),
    p = r(906732),
    h = r(28546),
    _ = r(357355),
    m = r(98278),
    g = r(104494),
    E = r(639119),
    v = r(165583),
    y = r(197115),
    b = r(631771),
    I = r(609218),
    T = r(210887),
    S = r(626135),
    A = r(176354),
    C = r(74538),
    N = r(543241),
    R = r(149203),
    O = r(981631),
    D = r(185923),
    x = r(474936),
    L = r(388032),
    w = r(940675);
let P = (e) => {
    let n,
        { onLearnMore: i, onClose: s, channel: P, emojiDescriptor: M, pickerIntention: k, analyticsLocation: U, containerContext: B } = e,
        G = (0, u.e7)([T.Z], () => T.Z.theme) === O.BRd.LIGHT ? 'light' : 'dark',
        [Z, F] = o.useState(!1),
        V = () => {
            (0, N.A3)(P), (0, m.z)(), i();
        },
        j = r(577391)('./img_premium_emoji_'.concat(G, '.svg')),
        H = 'https://cdn.discordapp.com/assets/premium/roadblocks/emoji_'.concat(G, '.png'),
        Y = (0, E.N)(),
        W = (0, g.Ng)(),
        K = null != Y || null != W,
        z = (0, h.Iu)((e) => e.searchQuery),
        { analyticsLocations: q } = (0, p.ZP)(f.Z.EMOJI_PICKER),
        Q = b.Gi.useExperiment(
            { location: 'Premium Emoji Roadblock' },
            {
                autoTrackExposure: !K,
                disable: K
            }
        ),
        X = Q.enabled || null != Y,
        J = Q.addSocialProof;
    n = k === D.Hz.REACTION ? x.cd.EMOJI_PICKER_REACTION_EMOJI_CLICKED : null == M ? x.cd.EMOJI_PICKER_FLOATING_UPSELL : M.subCategory === R.t0.TOP_GUILD_EMOJI ? x.cd.EMOJI_PICKER_TOP_SERVER_EMOJI_CLICKED : M.subCategory === R.t0.NEWLY_ADDED_EMOJI ? x.cd.EMOJI_PICKER_NEWLY_ADDED_EMOJI_CLICKED : x.cd.EMOJI_PICKER_EMOJI_CLICKED;
    let $ = null != M ? M.emoji : void 0,
        ee = null != $ && $.animated,
        et = null != $ && !A.ZP.isInternalEmojiForGuildId($, null == P ? void 0 : P.getGuildId()),
        en = null != $ ? O.qAy.EMOJI : O.qAy.EMOJI_PICKER_FLOATING_UPSELL;
    o.useEffect(() => {
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
                sku_id: (0, C.Wz)(C.ZP.getSkuIdForPremiumType(x.p9.TIER_2))
            });
    }, [U, q, z, ee, et, n, en, X]);
    let er = () => (K ? L.intl.string(L.t['Gd/XHB']) : L.intl.string(L.t.P3etAg)),
        ei = (0, u.e7)([_.Z], () => _.Z.affinities),
        ea = (0, u.e7)([_.Z], () => _.Z.hasFetched);
    o.useEffect(() => {
        !ea && d.MH();
    }, [ea]);
    let eo = ei.length > 1 && J,
        es = () =>
            (0, a.jsx)(I.Z, {
                containerContext: B,
                image: {
                    url: H,
                    width: 220,
                    height: 132
                },
                title: L.intl.string(L.t['0+11FB']),
                description: L.intl.string(L.t.dURIzc),
                enableSocialProof: eo,
                analyticsLocationSection: O.jXE.EMOJI_UPSELL_POPOUT,
                onClose: s,
                upsellViewedTrackingData: {
                    type: n,
                    is_external: et,
                    location: {
                        ...U,
                        object: en
                    },
                    location_stack: q,
                    sku_id: (0, C.Wz)(C.ZP.getSkuIdForPremiumType(x.p9.TIER_2)),
                    has_search_query: null != z && '' !== z,
                    is_animated: ee
                }
            });
    return X
        ? es()
        : (0, a.jsxs)('div', {
              className: l()(w.premiumPromo, { [w.unifyTrialUpsell]: K }),
              children: [
                  (0, a.jsx)(c.Clickable, {
                      className: w.premiumPromoClose,
                      onClick: s,
                      children: L.intl.string(L.t.cpT0Cg)
                  }),
                  (0, a.jsxs)(a.Fragment, {
                      children: [
                          K
                              ? (0, a.jsx)(v.ZP, {
                                    type: x.cd.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI,
                                    subscriptionTier: x.Si.TIER_2,
                                    onClose: s,
                                    trialOffer: Y,
                                    discountOffer: W,
                                    children: L.intl.format(L.t.se13Fh, { onClick: V })
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
                                            children: L.intl.string(L.t['1SsvhY'])
                                        }),
                                        (0, a.jsx)('div', {
                                            className: w.premiumPromoDescription,
                                            children: L.intl.format(L.t.se13Fh, { onClick: V })
                                        })
                                    ]
                                }),
                          !K &&
                              (0, a.jsx)(y.Z, {
                                  subscriptionTier: x.Si.TIER_2,
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
                                      F(!1), e && s();
                                  },
                                  buttonText: er()
                              })
                      ]
                  })
              ]
          });
};
n.Z = P;
