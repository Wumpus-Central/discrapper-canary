n.d(t, { Z: () => S });
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(442837),
    l = n(481060),
    o = n(100527),
    c = n(906732),
    d = n(357355),
    u = n(140465),
    m = n(775412),
    g = n(650032),
    p = n(104494),
    h = n(639119),
    f = n(105759),
    b = n(346497),
    N = n(422034),
    x = n(710220),
    _ = n(318747),
    E = n(635921),
    j = n(474936),
    C = n(388032),
    O = n(968813);
let v = (e) => {
        let t,
            { trialOffer: n, discountOffer: i } = e;
        if ((null != n ? (t = C.NW.string(C.t.IBYG5e)) : null != i && (t = C.NW.formatToPlainString(C.t.iiLbvr, { percent: i.discount.amount })), null != t))
            return (0, r.jsx)('div', {
                className: O.premiumOfferPill,
                children: (0, r.jsx)(l.Text, {
                    variant: 'redesign/heading-18/bold',
                    color: 'always-white',
                    children: t
                })
            });
    },
    S = (e) => {
        var t, n;
        let { isFullscreen: i, className: S, buttonClassName: T, subscriptionTier: I, entrypoint: y, isDarkMode: A } = e,
            { analyticsLocations: P } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_HERO_CTA),
            R = (0, m._O)(),
            D = (0, p.Ng)(),
            Z = (0, p.Wp)(D, j.Si.TIER_2) ? j.Si.TIER_2 : void 0,
            w = (0, h.N)(),
            k = (0, u.Nx)(),
            W = (0, b.Vi)(),
            L = (0, a.e7)([d.Z], () => d.Z.affinities),
            B = (0, f.Z)(),
            { enabled: M } = g._.useExperiment({ location: 'HeroHeading' }, { autoTrackExposure: !1 }),
            U = y === j.EZ.ApplicationStoreHome && null != B && M,
            V = L.length > 0;
        return (0, r.jsx)(c.Gt, {
            value: P,
            children: (0, r.jsx)('div', {
                className: s()(O.container, O.marketingPageV2Container, S),
                'data-testid': 'v2-marketing-page-hero-header',
                children: (0, r.jsxs)('div', {
                    className: O.marketingPageV2TextContainer,
                    children: [
                        k &&
                            (0, r.jsx)(v, {
                                trialOffer: w,
                                discountOffer: D
                            }),
                        (0, r.jsx)(l.X6q, {
                            className: O.marketingPageV2Heading,
                            variant: 'display-sm',
                            color: 'header-primary',
                            children: C.NW.string(C.t.YCZldH)
                        }),
                        U
                            ? (0, r.jsx)(x.Z, {
                                  referrer: B,
                                  isMarketingPageV2Enabled: !0
                              })
                            : V &&
                              (0, r.jsx)('div', {
                                  className: s()(O.affinityDescriptionV2),
                                  children: (0, r.jsx)(N.Z, {
                                      textColor: 'text-normal',
                                      smallerText: !i,
                                      isMarketingPageV2Enabled: !0
                                  })
                              }),
                        W || R
                            ? (0, r.jsx)('div', {
                                  className: s()(O.buttonContainer, O.marketingPageV2CTAContainer, { [O.marketingPageV2CTAMargin]: !(V || U) }),
                                  children: (0, r.jsx)(_.Z, {
                                      className: s()(O.button, T),
                                      forceWhite: !0
                                  })
                              })
                            : (0, r.jsx)(E.PK, {
                                  subscriptionTier: null !== (n = null != I ? I : null == w ? void 0 : null === (t = w.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== n ? n : Z,
                                  inOfferExperience: k,
                                  containerClassName: s()(O.marketingPageV2CTAContainer, { [O.marketingPageV2CTAMargin]: !(V || U) }),
                                  buttonClassName: T,
                                  isMarketingPageV2Enabled: !0,
                                  isDarkMode: A
                              }),
                        (0, r.jsx)(E._O, {
                            variant: 'text-md/normal',
                            withBottomMargin: !1,
                            isMarketingPageV2Enabled: !0
                        })
                    ]
                })
            })
        });
    };
