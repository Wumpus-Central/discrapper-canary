n.d(t, { Z: () => v });
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(100527),
    d = n(906732),
    u = n(357355),
    m = n(140465),
    g = n(775412),
    p = n(104494),
    h = n(639119),
    f = n(105759),
    b = n(346497),
    _ = n(422034),
    N = n(710220),
    x = n(318747),
    E = n(635921),
    j = n(474936),
    C = n(388032),
    O = n(898118);
let S = (e) => {
        let t,
            { trialOffer: n, discountOffer: i } = e;
        if ((null != n ? (t = C.NW.string(C.t.IBYG5e)) : null != i && (t = C.NW.formatToPlainString(C.t.iiLbvr, { percent: i.discount.amount })), null != t))
            return (0, r.jsx)('div', {
                className: O.premiumOfferPill,
                children: (0, r.jsx)(o.Text, {
                    variant: 'redesign/heading-18/bold',
                    color: 'always-white',
                    children: t
                })
            });
    },
    v = i.forwardRef((e, t) => {
        var n, i;
        let { isFullscreen: s, className: v, buttonClassName: T, subscriptionTier: I, entrypoint: y, isDarkMode: A } = e,
            { analyticsLocations: P } = (0, d.ZP)(c.Z.PREMIUM_MARKETING_HERO_CTA),
            R = (0, g._O)(),
            D = (0, p.Ng)(),
            Z = (0, p.Wp)(D, j.Si.TIER_2) ? j.Si.TIER_2 : void 0,
            w = (0, h.N)(),
            k = (0, m.Nx)(),
            W = (0, b.Vi)(),
            L = (0, l.e7)([u.Z], () => u.Z.affinities),
            B = (0, f.Z)(),
            M = y === j.EZ.ApplicationStoreHome && null != B,
            U = L.length > 0;
        return (0, r.jsx)(d.Gt, {
            value: P,
            children: (0, r.jsx)('div', {
                ref: t,
                className: a()(O.container, O.marketingPageV2Container, v),
                'data-testid': 'v2-marketing-page-hero-header',
                children: (0, r.jsxs)('div', {
                    className: O.marketingPageV2TextContainer,
                    children: [
                        k &&
                            (0, r.jsx)(S, {
                                trialOffer: w,
                                discountOffer: D
                            }),
                        (0, r.jsx)(o.X6q, {
                            className: O.marketingPageV2Heading,
                            variant: 'display-sm',
                            color: 'header-primary',
                            children: C.NW.string(C.t.YCZldH)
                        }),
                        M
                            ? (0, r.jsx)(N.Z, {
                                  referrer: B,
                                  isMarketingPageV2Enabled: !0
                              })
                            : U &&
                              (0, r.jsx)('div', {
                                  className: O.affinityDescriptionV2,
                                  children: (0, r.jsx)(_.Z, {
                                      textColor: 'text-normal',
                                      smallerText: !s,
                                      isMarketingPageV2Enabled: !0
                                  })
                              }),
                        W || R
                            ? (0, r.jsx)('div', {
                                  className: a()(O.buttonContainer, O.marketingPageV2CTAContainer, { [O.marketingPageV2CTAMargin]: !(U || M) }),
                                  children: (0, r.jsx)(x.Z, {
                                      className: a()(O.button, T),
                                      forceWhite: !0
                                  })
                              })
                            : (0, r.jsx)(E.PK, {
                                  subscriptionTier: null != (i = null != I ? I : null == w || null == (n = w.subscription_trial) ? void 0 : n.sku_id) ? i : Z,
                                  inOfferExperience: k,
                                  containerClassName: a()(O.marketingPageV2CTAContainer, { [O.marketingPageV2CTAMargin]: !(U || M) }),
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
    });
