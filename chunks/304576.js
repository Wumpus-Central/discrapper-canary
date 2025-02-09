n.d(t, { Z: () => R });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(442837),
    l = n(481060),
    o = n(100527),
    c = n(906732),
    d = n(357355),
    u = n(140465),
    m = n(775412),
    g = n(650032),
    _ = n(104494),
    p = n(639119),
    f = n(105759),
    h = n(346497),
    x = n(422034),
    E = n(710220),
    C = n(318747),
    b = n(635921),
    v = n(474936),
    T = n(388032),
    N = n(378497);
let I = (e) => {
        let t,
            { trialOffer: n, discountOffer: r } = e;
        if ((null != n ? (t = T.intl.string(T.t.IBYG5e)) : null != r && (t = T.intl.formatToPlainString(T.t.iiLbvr, { percent: r.discount.amount })), null != t))
            return (0, i.jsx)('div', {
                className: N.premiumOfferPill,
                children: (0, i.jsx)(l.Text, {
                    variant: 'redesign/heading-18/bold',
                    color: 'always-white',
                    children: t
                })
            });
    },
    R = (e) => {
        var t, n;
        let { isFullscreen: r, className: R, buttonClassName: j, subscriptionTier: S, entrypoint: A, isDarkMode: P } = e,
            { analyticsLocations: Z } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_HERO_CTA),
            w = (0, m._O)(),
            M = (0, _.Ng)(),
            B = (0, _.Wp)(M, v.Si.TIER_2) ? v.Si.TIER_2 : void 0,
            y = (0, p.N)(),
            k = (0, u.Nx)(),
            O = (0, h.Vi)(),
            L = (0, s.e7)([d.Z], () => d.Z.affinities),
            D = (0, f.Z)(),
            { enabled: U } = g._.useExperiment({ location: 'HeroHeading' }, { autoTrackExposure: !1 }),
            G = A === v.EZ.ApplicationStoreHome && null != D && U,
            V = L.length > 0;
        return (0, i.jsx)(c.Gt, {
            value: Z,
            children: (0, i.jsx)('div', {
                className: a()(N.container, N.marketingPageV2Container, R),
                'data-testid': 'v2-marketing-page-hero-header',
                children: (0, i.jsxs)('div', {
                    className: N.marketingPageV2TextContainer,
                    children: [
                        k &&
                            (0, i.jsx)(I, {
                                trialOffer: y,
                                discountOffer: M
                            }),
                        (0, i.jsx)(l.X6q, {
                            className: N.marketingPageV2Heading,
                            variant: 'display-sm',
                            color: 'header-primary',
                            children: T.intl.string(T.t.YCZldH)
                        }),
                        G
                            ? (0, i.jsx)(E.Z, {
                                  referrer: D,
                                  isMarketingPageV2Enabled: !0
                              })
                            : V &&
                              (0, i.jsx)('div', {
                                  className: a()(N.affinityDescriptionV2),
                                  children: (0, i.jsx)(x.Z, {
                                      textColor: 'text-normal',
                                      smallerText: !r,
                                      isMarketingPageV2Enabled: !0
                                  })
                              }),
                        O || w
                            ? (0, i.jsx)('div', {
                                  className: a()(N.buttonContainer, N.marketingPageV2CTAContainer, { [N.marketingPageV2CTAMargin]: !(V || G) }),
                                  children: (0, i.jsx)(C.Z, {
                                      className: a()(N.button, j),
                                      forceWhite: !0
                                  })
                              })
                            : (0, i.jsx)(b.PK, {
                                  subscriptionTier: null !== (n = null != S ? S : null == y ? void 0 : null === (t = y.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== n ? n : B,
                                  inOfferExperience: k,
                                  containerClassName: a()(N.marketingPageV2CTAContainer, { [N.marketingPageV2CTAMargin]: !(V || G) }),
                                  buttonClassName: j,
                                  isMarketingPageV2Enabled: !0,
                                  isDarkMode: P
                              }),
                        (0, i.jsx)(b._O, {
                            variant: 'text-md/normal',
                            withBottomMargin: !1,
                            isMarketingPageV2Enabled: !0
                        })
                    ]
                })
            })
        });
    };
