n.d(t, { Z: () => L }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(355467),
    c = n(100527),
    d = n(906732),
    f = n(28546),
    _ = n(357355),
    p = n(98278),
    h = n(104494),
    m = n(639119),
    g = n(165583),
    E = n(197115),
    v = n(631771),
    y = n(609218),
    I = n(210887),
    T = n(626135),
    b = n(176354),
    S = n(74538),
    A = n(543241),
    N = n(149203),
    C = n(981631),
    R = n(185923),
    O = n(474936),
    D = n(388032),
    x = n(940675);
let L = (e) => {
    let t,
        { onLearnMore: a, onClose: L, channel: P, emojiDescriptor: w, pickerIntention: M, analyticsLocation: k, containerContext: U } = e,
        G = (0, o.e7)([I.Z], () => I.Z.theme) === C.BRd.LIGHT ? 'light' : 'dark',
        [B, Z] = r.useState(!1),
        F = () => {
            (0, A.A3)(P), (0, p.z)(), a();
        },
        V = n(577391)('./img_premium_emoji_'.concat(G, '.svg')),
        j = 'https://cdn.discordapp.com/assets/premium/roadblocks/emoji_'.concat(G, '.png'),
        H = (0, m.N)(),
        Y = (0, h.Ng)(),
        W = null != H || null != Y,
        K = (0, f.Iu)((e) => e.searchQuery),
        { analyticsLocations: z } = (0, d.ZP)(c.Z.EMOJI_PICKER),
        q = v.Gi.useExperiment(
            { location: 'Premium Emoji Roadblock' },
            {
                autoTrackExposure: !W,
                disable: W
            }
        ),
        Q = q.enabled || null != H,
        X = q.addSocialProof;
    t = M === R.Hz.REACTION ? O.cd.EMOJI_PICKER_REACTION_EMOJI_CLICKED : null == w ? O.cd.EMOJI_PICKER_FLOATING_UPSELL : w.subCategory === N.t0.TOP_GUILD_EMOJI ? O.cd.EMOJI_PICKER_TOP_SERVER_EMOJI_CLICKED : w.subCategory === N.t0.NEWLY_ADDED_EMOJI ? O.cd.EMOJI_PICKER_NEWLY_ADDED_EMOJI_CLICKED : O.cd.EMOJI_PICKER_EMOJI_CLICKED;
    let J = null != w ? w.emoji : void 0,
        $ = null != J && J.animated,
        ee = null != J && !b.ZP.isInternalEmojiForGuildId(J, null == P ? void 0 : P.getGuildId()),
        et = null != J ? C.qAy.EMOJI : C.qAy.EMOJI_PICKER_FLOATING_UPSELL;
    r.useEffect(() => {
        Q ||
            T.default.track(C.rMx.PREMIUM_UPSELL_VIEWED, {
                type: t,
                is_animated: $,
                is_external: ee,
                has_search_query: null != K && '' !== K,
                location: {
                    ...k,
                    object: et
                },
                location_stack: z,
                sku_id: (0, S.Wz)(S.ZP.getSkuIdForPremiumType(O.p9.TIER_2))
            });
    }, [k, z, K, $, ee, t, et, Q]);
    let en = () => (W ? D.intl.string(D.t['Gd/XHB']) : D.intl.string(D.t.P3etAg)),
        ei = (0, o.e7)([_.Z], () => _.Z.affinities),
        er = (0, o.e7)([_.Z], () => _.Z.hasFetched);
    r.useEffect(() => {
        er || u.MH();
    }, [er]);
    let ea = ei.length > 1 && X,
        es = () =>
            (0, i.jsx)(y.Z, {
                containerContext: U,
                image: {
                    url: j,
                    width: 220,
                    height: 132
                },
                title: D.intl.string(D.t['0+11FB']),
                description: D.intl.string(D.t.dURIzc),
                enableSocialProof: ea,
                analyticsLocationSection: C.jXE.EMOJI_UPSELL_POPOUT,
                onClose: L,
                upsellViewedTrackingData: {
                    type: t,
                    is_external: ee,
                    location: {
                        ...k,
                        object: et
                    },
                    location_stack: z,
                    sku_id: (0, S.Wz)(S.ZP.getSkuIdForPremiumType(O.p9.TIER_2)),
                    has_search_query: null != K && '' !== K,
                    is_animated: $
                }
            });
    return Q
        ? es()
        : (0, i.jsxs)('div', {
              className: s()(x.premiumPromo, { [x.unifyTrialUpsell]: W }),
              children: [
                  (0, i.jsx)(l.P3F, {
                      className: x.premiumPromoClose,
                      onClick: L,
                      children: D.intl.string(D.t.cpT0Cg)
                  }),
                  (0, i.jsxs)(i.Fragment, {
                      children: [
                          W
                              ? (0, i.jsx)(g.ZP, {
                                    type: O.cd.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI,
                                    subscriptionTier: O.Si.TIER_2,
                                    onClose: L,
                                    trialOffer: H,
                                    discountOffer: Y,
                                    children: D.intl.format(D.t.se13Fh, { onClick: F })
                                })
                              : (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)('img', {
                                            alt: '',
                                            className: x.premiumPromoImage,
                                            src: V
                                        }),
                                        (0, i.jsx)('div', {
                                            className: x.premiumPromoTitle,
                                            children: D.intl.string(D.t['1SsvhY'])
                                        }),
                                        (0, i.jsx)('div', {
                                            className: x.premiumPromoDescription,
                                            children: D.intl.format(D.t.se13Fh, { onClick: F })
                                        })
                                    ]
                                }),
                          !W &&
                              (0, i.jsx)(E.Z, {
                                  subscriptionTier: O.Si.TIER_2,
                                  submitting: B,
                                  premiumModalAnalyticsLocation: {
                                      section: C.jXE.EMOJI_PICKER_POPOUT,
                                      object: C.qAy.BUTTON_CTA
                                  },
                                  size: l.zxk.Sizes.SMALL,
                                  color: l.zxk.Colors.GREEN,
                                  onClick: () => {
                                      Z(!0);
                                  },
                                  onSubscribeModalClose: (e) => {
                                      Z(!1), e && L();
                                  },
                                  buttonText: en()
                              })
                      ]
                  })
              ]
          });
};
