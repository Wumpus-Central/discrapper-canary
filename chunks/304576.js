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
    h = n(650032),
    g = n(104494),
    _ = n(639119),
    x = n(105759),
    p = n(346497),
    E = n(422034),
    C = n(710220),
    f = n(318747),
    T = n(635921),
    N = n(474936),
    I = n(388032),
    S = n(337307);
let b = (e) => {
        let t,
            { trialOffer: n, discountOffer: s } = e;
        if ((null != n ? (t = I.intl.string(I.t.IBYG5e)) : null != s && (t = I.intl.formatToPlainString(I.t.iiLbvr, { percent: s.discount.amount })), null != t))
            return (0, i.jsx)('div', {
                className: S.premiumOfferPill,
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
            y = (0, g.Ng)(),
            Z = (0, g.Wp)(y, N.Si.TIER_2) ? N.Si.TIER_2 : void 0,
            k = (0, _.N)(),
            L = (0, u.Nx)(),
            B = (0, p.Vi)(),
            M = (0, l.e7)([d.Z], () => d.Z.affinities),
            w = (0, x.Z)(),
            { enabled: V } = h._.useExperiment({ location: 'HeroHeading' }, { autoTrackExposure: !1 }),
            U = O === N.EZ.ApplicationStoreHome && null != w && V,
            G = M.length > 0;
        return (0, i.jsx)(c.Gt, {
            value: P,
            children: (0, i.jsx)('div', {
                className: r()(S.container, S.marketingPageV2Container, v),
                'data-testid': 'v2-marketing-page-hero-header',
                children: (0, i.jsxs)('div', {
                    className: S.marketingPageV2TextContainer,
                    children: [
                        L &&
                            (0, i.jsx)(b, {
                                trialOffer: k,
                                discountOffer: y
                            }),
                        (0, i.jsx)(a.X6q, {
                            className: S.marketingPageV2Heading,
                            variant: 'display-sm',
                            color: 'header-primary',
                            children: I.intl.string(I.t.YCZldH)
                        }),
                        U
                            ? (0, i.jsx)(C.Z, {
                                  referrer: w,
                                  isMarketingPageV2Enabled: !0
                              })
                            : G &&
                              (0, i.jsx)('div', {
                                  className: r()(S.affinityDescriptionV2),
                                  children: (0, i.jsx)(E.Z, {
                                      textColor: 'text-normal',
                                      smallerText: !s,
                                      isMarketingPageV2Enabled: !0
                                  })
                              }),
                        B || D
                            ? (0, i.jsx)('div', {
                                  className: r()(S.buttonContainer, S.marketingPageV2CTAContainer, { [S.marketingPageV2CTAMargin]: !(G || U) }),
                                  children: (0, i.jsx)(f.Z, {
                                      className: r()(S.button, j),
                                      forceWhite: !0
                                  })
                              })
                            : (0, i.jsx)(T.PK, {
                                  subscriptionTier: null !== (n = null != A ? A : null == k ? void 0 : null === (t = k.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== n ? n : Z,
                                  inOfferExperience: L,
                                  containerClassName: r()(S.marketingPageV2CTAContainer, { [S.marketingPageV2CTAMargin]: !(G || U) }),
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
