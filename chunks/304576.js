n.d(t, { Z: () => v });
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
    g = n(104494),
    p = n(639119),
    h = n(105759),
    f = n(346497),
    b = n(422034),
    N = n(710220),
    x = n(318747),
    _ = n(635921),
    E = n(474936),
    j = n(388032),
    C = n(370623);
let O = (e) => {
        let t,
            { trialOffer: n, discountOffer: i } = e;
        if ((null != n ? (t = j.NW.string(j.t.IBYG5e)) : null != i && (t = j.NW.formatToPlainString(j.t.iiLbvr, { percent: i.discount.amount })), null != t))
            return (0, r.jsx)('div', {
                className: C.premiumOfferPill,
                children: (0, r.jsx)(l.Text, {
                    variant: 'redesign/heading-18/bold',
                    color: 'always-white',
                    children: t
                })
            });
    },
    v = (e) => {
        var t, n;
        let { isFullscreen: i, className: v, buttonClassName: S, subscriptionTier: T, entrypoint: I, isDarkMode: y } = e,
            { analyticsLocations: A } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_HERO_CTA),
            P = (0, m._O)(),
            R = (0, g.Ng)(),
            D = (0, g.Wp)(R, E.Si.TIER_2) ? E.Si.TIER_2 : void 0,
            Z = (0, p.N)(),
            w = (0, u.Nx)(),
            k = (0, f.Vi)(),
            W = (0, a.e7)([d.Z], () => d.Z.affinities),
            L = (0, h.Z)(),
            B = I === E.EZ.ApplicationStoreHome && null != L,
            M = W.length > 0;
        return (0, r.jsx)(c.Gt, {
            value: A,
            children: (0, r.jsx)('div', {
                className: s()(C.container, C.marketingPageV2Container, v),
                'data-testid': 'v2-marketing-page-hero-header',
                children: (0, r.jsxs)('div', {
                    className: C.marketingPageV2TextContainer,
                    children: [
                        w &&
                            (0, r.jsx)(O, {
                                trialOffer: Z,
                                discountOffer: R
                            }),
                        (0, r.jsx)(l.X6q, {
                            className: C.marketingPageV2Heading,
                            variant: 'display-sm',
                            color: 'header-primary',
                            children: j.NW.string(j.t.YCZldH)
                        }),
                        B
                            ? (0, r.jsx)(N.Z, {
                                  referrer: L,
                                  isMarketingPageV2Enabled: !0
                              })
                            : M &&
                              (0, r.jsx)('div', {
                                  className: C.affinityDescriptionV2,
                                  children: (0, r.jsx)(b.Z, {
                                      textColor: 'text-normal',
                                      smallerText: !i,
                                      isMarketingPageV2Enabled: !0
                                  })
                              }),
                        k || P
                            ? (0, r.jsx)('div', {
                                  className: s()(C.buttonContainer, C.marketingPageV2CTAContainer, { [C.marketingPageV2CTAMargin]: !(M || B) }),
                                  children: (0, r.jsx)(x.Z, {
                                      className: s()(C.button, S),
                                      forceWhite: !0
                                  })
                              })
                            : (0, r.jsx)(_.PK, {
                                  subscriptionTier: null !== (n = null != T ? T : null == Z ? void 0 : null === (t = Z.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== n ? n : D,
                                  inOfferExperience: w,
                                  containerClassName: s()(C.marketingPageV2CTAContainer, { [C.marketingPageV2CTAMargin]: !(M || B) }),
                                  buttonClassName: S,
                                  isMarketingPageV2Enabled: !0,
                                  isDarkMode: y
                              }),
                        (0, r.jsx)(_._O, {
                            variant: 'text-md/normal',
                            withBottomMargin: !1,
                            isMarketingPageV2Enabled: !0
                        })
                    ]
                })
            })
        });
    };
