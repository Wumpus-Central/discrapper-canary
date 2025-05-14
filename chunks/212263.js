n.d(t, { Z: () => M }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(481060),
    c = n(355467),
    u = n(100527),
    d = n(906732),
    f = n(28546),
    _ = n(357355),
    p = n(98278),
    h = n(104494),
    m = n(639119),
    g = n(767714),
    E = n(165583),
    b = n(631771),
    y = n(609218),
    O = n(210887),
    v = n(626135),
    I = n(176354),
    S = n(74538),
    T = n(543241),
    A = n(149203),
    N = n(981631),
    C = n(185923),
    P = n(474936),
    R = n(388032),
    w = n(938585);
function D(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                D(e, t, n[t]);
            });
    }
    return e;
}
function x(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function k(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : x(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let M = (e) => {
    let t,
        { onLearnMore: o, onClose: D, channel: x, emojiDescriptor: M, pickerIntention: j, analyticsLocation: U, containerContext: G } = e,
        B = (0, s.e7)([O.Z], () => O.Z.theme) === N.BRd.LIGHT ? 'light' : 'dark',
        [F, V] = i.useState(!1),
        Z = () => {
            (0, T.A3)(x), (0, p.z)(), o();
        },
        H = n(577391)('./img_premium_emoji_'.concat(B, '.svg')),
        Y = 'https://cdn.discordapp.com/assets/premium/roadblocks/emoji_'.concat(B, '.png'),
        W = (0, m.N)(),
        K = (0, h.Ng)(),
        z = null != W || null != K,
        q = (0, f.Iu)((e) => e.searchQuery),
        { analyticsLocations: Q } = (0, d.ZP)(u.Z.EMOJI_PICKER),
        X = b.G.useExperiment(
            { location: 'Premium Emoji Roadblock' },
            {
                autoTrackExposure: !z,
                disable: z
            }
        ),
        J = X.enabled || null != W,
        $ = X.addSocialProof;
    t = j === C.Hz.REACTION ? P.cd.EMOJI_PICKER_REACTION_EMOJI_CLICKED : null == M ? P.cd.EMOJI_PICKER_FLOATING_UPSELL : M.subCategory === A.t0.TOP_GUILD_EMOJI ? P.cd.EMOJI_PICKER_TOP_SERVER_EMOJI_CLICKED : M.subCategory === A.t0.NEWLY_ADDED_EMOJI ? P.cd.EMOJI_PICKER_NEWLY_ADDED_EMOJI_CLICKED : P.cd.EMOJI_PICKER_EMOJI_CLICKED;
    let ee = null != M ? M.emoji : void 0,
        et = null != ee && ee.animated,
        en = null != ee && !I.ZP.isInternalEmojiForGuildId(ee, null == x ? void 0 : x.getGuildId()),
        er = null != ee ? N.qAy.EMOJI : N.qAy.EMOJI_PICKER_FLOATING_UPSELL;
    i.useEffect(() => {
        J ||
            v.default.track(N.rMx.PREMIUM_UPSELL_VIEWED, {
                type: t,
                is_animated: et,
                is_external: en,
                has_search_query: null != q && '' !== q,
                location: k(L({}, U), { object: er }),
                location_stack: Q,
                sku_id: (0, S.Wz)(S.ZP.getSkuIdForPremiumType(P.p9.TIER_2))
            });
    }, [U, Q, q, et, en, t, er, J]);
    let ei = () => (z ? R.intl.string(R.t['Gd/XHB']) : R.intl.string(R.t.P3etAg)),
        eo = (0, s.e7)([_.Z], () => _.Z.affinities),
        ea = (0, s.e7)([_.Z], () => _.Z.hasFetched);
    i.useEffect(() => {
        ea || c.MH();
    }, [ea]);
    let es = eo.length > 1 && $,
        el = () =>
            (0, r.jsx)(y.Z, {
                containerContext: G,
                image: {
                    url: Y,
                    width: 220,
                    height: 132
                },
                title: R.intl.string(R.t['0+11FB']),
                description: R.intl.string(R.t.dURIzc),
                enableSocialProof: es,
                analyticsLocationSection: N.jXE.EMOJI_UPSELL_POPOUT,
                onClose: D,
                upsellViewedTrackingData: {
                    type: t,
                    is_external: en,
                    location: k(L({}, U), { object: er }),
                    location_stack: Q,
                    sku_id: (0, S.Wz)(S.ZP.getSkuIdForPremiumType(P.p9.TIER_2)),
                    has_search_query: null != q && '' !== q,
                    is_animated: et
                }
            });
    return J
        ? el()
        : (0, r.jsxs)('div', {
              className: a()(w.premiumPromo, { [w.unifyTrialUpsell]: z }),
              children: [
                  (0, r.jsx)(l.P3F, {
                      className: w.premiumPromoClose,
                      onClick: D,
                      children: R.intl.string(R.t.cpT0Cg)
                  }),
                  z
                      ? (0, r.jsx)(E.ZP, {
                            type: P.cd.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI,
                            subscriptionTier: P.Si.TIER_2,
                            onClose: D,
                            trialOffer: W,
                            discountOffer: K,
                            children: R.intl.format(R.t.se13Fh, { onClick: Z })
                        })
                      : (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)('img', {
                                    alt: '',
                                    className: w.premiumPromoImage,
                                    src: H
                                }),
                                (0, r.jsx)('div', {
                                    className: w.premiumPromoTitle,
                                    children: R.intl.string(R.t['1SsvhY'])
                                }),
                                (0, r.jsx)('div', {
                                    className: w.premiumPromoDescription,
                                    children: R.intl.format(R.t.se13Fh, { onClick: Z })
                                })
                            ]
                        }),
                  !z &&
                      (0, r.jsx)(g.Z, {
                          subscriptionTier: P.Si.TIER_2,
                          submitting: F,
                          premiumModalAnalyticsLocation: {
                              section: N.jXE.EMOJI_PICKER_POPOUT,
                              object: N.qAy.BUTTON_CTA
                          },
                          size: l.zxk.Sizes.SMALL,
                          color: l.zxk.Colors.GREEN,
                          onClick: () => {
                              V(!0);
                          },
                          onSubscribeModalClose: (e) => {
                              V(!1), e && D();
                          },
                          textOptions: { textOverride: ei() }
                      })
              ]
          });
};
