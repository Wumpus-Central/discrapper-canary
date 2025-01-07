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
    g = n(775412),
    m = n(650032),
    f = n(104494),
    p = n(639119),
    _ = n(105759),
    h = n(346497),
    x = n(422034),
    E = n(710220),
    b = n(318747),
    C = n(635921),
    v = n(474936),
    T = n(388032),
    N = n(337307);
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
};
t.Z = (e) => {
    var t, n;
    let { isFullscreen: r, className: S, buttonClassName: R, subscriptionTier: j, entrypoint: A, isDarkMode: P } = e,
        { analyticsLocations: O } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_HERO_CTA),
        Z = (0, g._O)(),
        M = (0, f.Ng)(),
        B = (0, f.Wp)(M, v.Si.TIER_2) ? v.Si.TIER_2 : void 0,
        y = (0, p.N)(),
        w = (0, u.Nx)(),
        k = (0, h.Vi)(),
        L = (0, s.e7)([d.Z], () => d.Z.affinities),
        U = (0, _.Z)(),
        { enabled: D } = m._.useExperiment({ location: 'HeroHeading' }, { autoTrackExposure: !1 }),
        G = A === v.EZ.ApplicationStoreHome && null != U && D,
        H = L.length > 0;
    return (0, i.jsx)(c.Gt, {
        value: O,
        children: (0, i.jsx)('div', {
            className: a()(N.container, N.marketingPageV2Container, S),
            'data-testid': 'v2-marketing-page-hero-header',
            children: (0, i.jsxs)('div', {
                className: N.marketingPageV2TextContainer,
                children: [
                    w &&
                        (0, i.jsx)(I, {
                            trialOffer: y,
                            discountOffer: M
                        }),
                    (0, i.jsx)(l.Heading, {
                        className: N.marketingPageV2Heading,
                        variant: 'display-sm',
                        color: 'header-primary',
                        children: T.intl.string(T.t.YCZldH)
                    }),
                    G
                        ? (0, i.jsx)(E.Z, {
                              referrer: U,
                              isMarketingPageV2Enabled: !0
                          })
                        : H &&
                          (0, i.jsx)('div', {
                              className: a()(N.affinityDescriptionV2),
                              children: (0, i.jsx)(x.Z, {
                                  textColor: 'text-normal',
                                  smallerText: !r,
                                  isMarketingPageV2Enabled: !0
                              })
                          }),
                    k || Z
                        ? (0, i.jsx)('div', {
                              className: a()(N.buttonContainer, N.marketingPageV2CTAContainer, { [N.marketingPageV2CTAMargin]: !(H || G) }),
                              children: (0, i.jsx)(b.Z, {
                                  className: a()(N.button, R),
                                  forceWhite: !0
                              })
                          })
                        : (0, i.jsx)(C.PK, {
                              subscriptionTier: null !== (n = null != j ? j : null == y ? void 0 : null === (t = y.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== n ? n : B,
                              inOfferExperience: w,
                              containerClassName: a()(N.marketingPageV2CTAContainer, { [N.marketingPageV2CTAMargin]: !(H || G) }),
                              buttonClassName: R,
                              isMarketingPageV2Enabled: !0,
                              isDarkMode: P
                          }),
                    (0, i.jsx)(C._O, {
                        variant: 'text-md/normal',
                        withBottomMargin: !1,
                        isMarketingPageV2Enabled: !0
                    })
                ]
            })
        })
    });
};
