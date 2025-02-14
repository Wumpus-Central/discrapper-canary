n.d(t, { Z: () => v });
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(442837),
    a = n(481060),
    o = n(100527),
    c = n(906732),
    d = n(357355),
    u = n(140465),
    m = n(775412),
    g = n(650032),
    h = n(104494),
    x = n(639119),
    _ = n(105759),
    p = n(346497),
    E = n(422034),
    C = n(710220),
    f = n(318747),
    T = n(635921),
    N = n(474936),
    S = n(388032),
    I = n(458166);
let b = (e) => {
        let t,
            { trialOffer: n, discountOffer: s } = e;
        if ((null != n ? (t = S.intl.string(S.t.IBYG5e)) : null != s && (t = S.intl.formatToPlainString(S.t.iiLbvr, { percent: s.discount.amount })), null != t))
            return (0, i.jsx)('div', {
                className: I.premiumOfferPill,
                children: (0, i.jsx)(a.Text, {
                    variant: 'redesign/heading-18/bold',
                    color: 'always-white',
                    children: t
                })
            });
    },
    v = (e) => {
        var t, n;
        let { isFullscreen: s, className: v, buttonClassName: j, subscriptionTier: A, entrypoint: O, isDarkMode: R } = e,
            { analyticsLocations: P } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_HERO_CTA),
            D = (0, m._O)(),
            y = (0, h.Ng)(),
            Z = (0, h.Wp)(y, N.Si.TIER_2) ? N.Si.TIER_2 : void 0,
            k = (0, x.N)(),
            L = (0, u.Nx)(),
            B = (0, p.Vi)(),
            M = (0, l.e7)([d.Z], () => d.Z.affinities),
            w = (0, _.Z)(),
            { enabled: V } = g._.useExperiment({ location: 'HeroHeading' }, { autoTrackExposure: !1 }),
            U = O === N.EZ.ApplicationStoreHome && null != w && V,
            G = M.length > 0;
        return (0, i.jsx)(c.Gt, {
            value: P,
            children: (0, i.jsx)('div', {
                className: r()(I.container, I.marketingPageV2Container, v),
                'data-testid': 'v2-marketing-page-hero-header',
                children: (0, i.jsxs)('div', {
                    className: I.marketingPageV2TextContainer,
                    children: [
                        L &&
                            (0, i.jsx)(b, {
                                trialOffer: k,
                                discountOffer: y
                            }),
                        (0, i.jsx)(a.X6q, {
                            className: I.marketingPageV2Heading,
                            variant: 'display-sm',
                            color: 'header-primary',
                            children: S.intl.string(S.t.YCZldH)
                        }),
                        U
                            ? (0, i.jsx)(C.Z, {
                                  referrer: w,
                                  isMarketingPageV2Enabled: !0
                              })
                            : G &&
                              (0, i.jsx)('div', {
                                  className: r()(I.affinityDescriptionV2),
                                  children: (0, i.jsx)(E.Z, {
                                      textColor: 'text-normal',
                                      smallerText: !s,
                                      isMarketingPageV2Enabled: !0
                                  })
                              }),
                        B || D
                            ? (0, i.jsx)('div', {
                                  className: r()(I.buttonContainer, I.marketingPageV2CTAContainer, { [I.marketingPageV2CTAMargin]: !(G || U) }),
                                  children: (0, i.jsx)(f.Z, {
                                      className: r()(I.button, j),
                                      forceWhite: !0
                                  })
                              })
                            : (0, i.jsx)(T.PK, {
                                  subscriptionTier: null !== (n = null != A ? A : null == k ? void 0 : null === (t = k.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== n ? n : Z,
                                  inOfferExperience: L,
                                  containerClassName: r()(I.marketingPageV2CTAContainer, { [I.marketingPageV2CTAMargin]: !(G || U) }),
                                  buttonClassName: j,
                                  isMarketingPageV2Enabled: !0,
                                  isDarkMode: R
                              }),
                        (0, i.jsx)(T._O, {
                            variant: 'text-md/normal',
                            withBottomMargin: !1,
                            isMarketingPageV2Enabled: !0
                        })
                    ]
                })
            })
        });
    };
