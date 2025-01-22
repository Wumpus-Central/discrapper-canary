var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    a = n(442837),
    l = n(481060),
    o = n(100527),
    c = n(906732),
    d = n(357355),
    u = n(140465),
    m = n(775412),
    g = n(650032),
    h = n(104494),
    p = n(639119),
    x = n(105759),
    f = n(346497),
    _ = n(422034),
    E = n(710220),
    C = n(318747),
    T = n(635921),
    S = n(474936),
    b = n(388032),
    I = n(337307);
let N = (e) => {
    let t,
        { trialOffer: n, discountOffer: r } = e;
    if ((null != n ? (t = b.intl.string(b.t.IBYG5e)) : null != r && (t = b.intl.formatToPlainString(b.t.iiLbvr, { percent: r.discount.amount })), null != t))
        return (0, i.jsx)('div', {
            className: I.premiumOfferPill,
            children: (0, i.jsx)(l.Text, {
                variant: 'redesign/heading-18/bold',
                color: 'always-white',
                children: t
            })
        });
};
t.Z = (e) => {
    var t, n;
    let { isFullscreen: r, className: v, buttonClassName: A, subscriptionTier: j, entrypoint: O, isDarkMode: R } = e,
        { analyticsLocations: P } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_HERO_CTA),
        D = (0, m._O)(),
        y = (0, h.Ng)(),
        B = (0, h.Wp)(y, S.Si.TIER_2) ? S.Si.TIER_2 : void 0,
        Z = (0, p.N)(),
        L = (0, u.Nx)(),
        M = (0, f.Vi)(),
        k = (0, a.e7)([d.Z], () => d.Z.affinities),
        w = (0, x.Z)(),
        { enabled: F } = g._.useExperiment({ location: 'HeroHeading' }, { autoTrackExposure: !1 }),
        U = O === S.EZ.ApplicationStoreHome && null != w && F,
        V = k.length > 0;
    return (0, i.jsx)(c.Gt, {
        value: P,
        children: (0, i.jsx)('div', {
            className: s()(I.container, I.marketingPageV2Container, v),
            'data-testid': 'v2-marketing-page-hero-header',
            children: (0, i.jsxs)('div', {
                className: I.marketingPageV2TextContainer,
                children: [
                    L &&
                        (0, i.jsx)(N, {
                            trialOffer: Z,
                            discountOffer: y
                        }),
                    (0, i.jsx)(l.Heading, {
                        className: I.marketingPageV2Heading,
                        variant: 'display-sm',
                        color: 'header-primary',
                        children: b.intl.string(b.t.YCZldH)
                    }),
                    U
                        ? (0, i.jsx)(E.Z, {
                              referrer: w,
                              isMarketingPageV2Enabled: !0
                          })
                        : V &&
                          (0, i.jsx)('div', {
                              className: s()(I.affinityDescriptionV2),
                              children: (0, i.jsx)(_.Z, {
                                  textColor: 'text-normal',
                                  smallerText: !r,
                                  isMarketingPageV2Enabled: !0
                              })
                          }),
                    M || D
                        ? (0, i.jsx)('div', {
                              className: s()(I.buttonContainer, I.marketingPageV2CTAContainer, { [I.marketingPageV2CTAMargin]: !(V || U) }),
                              children: (0, i.jsx)(C.Z, {
                                  className: s()(I.button, A),
                                  forceWhite: !0
                              })
                          })
                        : (0, i.jsx)(T.PK, {
                              subscriptionTier: null !== (n = null != j ? j : null == Z ? void 0 : null === (t = Z.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== n ? n : B,
                              inOfferExperience: L,
                              containerClassName: s()(I.marketingPageV2CTAContainer, { [I.marketingPageV2CTAMargin]: !(V || U) }),
                              buttonClassName: A,
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
