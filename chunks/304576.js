n.d(t, { Z: () => T });
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(442837),
    o = n(481060),
    c = n(100527),
    d = n(906732),
    u = n(357355),
    m = n(140465),
    p = n(775412),
    g = n(104494),
    h = n(639119),
    f = n(105759),
    b = n(346497),
    _ = n(422034),
    x = n(710220),
    E = n(318747),
    j = n(635921),
    C = n(474936),
    O = n(388032),
    S = n(909176);
let v = (e) => {
        let t,
            { trialOffer: n, discountOffer: r } = e;
        if ((null != n ? (t = O.intl.string(O.t.IBYG5e)) : null != r && (t = O.intl.formatToPlainString(O.t.iiLbvr, { percent: r.discount.amount })), null != t))
            return (0, i.jsx)('div', {
                className: S.premiumOfferPill,
                children: (0, i.jsx)(o.Text, {
                    variant: 'redesign/heading-18/bold',
                    color: 'always-white',
                    children: t
                })
            });
    },
    T = r.forwardRef((e, t) => {
        var n, r;
        let { isFullscreen: s, className: T, buttonClassName: I, subscriptionTier: N, entrypoint: y, isDarkMode: A } = e,
            { analyticsLocations: P } = (0, d.ZP)(c.Z.PREMIUM_MARKETING_HERO_CTA),
            R = (0, p._O)(),
            D = (0, g.Ng)(),
            Z = (0, g.Wp)(D, C.Si.TIER_2) ? C.Si.TIER_2 : void 0,
            w = (0, h.N)(),
            k = (0, m.Nx)(),
            L = (0, b.Vi)(),
            B = (0, a.e7)([u.Z], () => u.Z.affinities),
            M = (0, f.Z)(),
            U = y === C.EZ.ApplicationStoreHome && null != M,
            V = B.length > 0;
        return (0, i.jsx)(d.Gt, {
            value: P,
            children: (0, i.jsx)('div', {
                ref: t,
                className: l()(S.container, S.marketingPageV2Container, T),
                'data-testid': 'v2-marketing-page-hero-header',
                children: (0, i.jsxs)('div', {
                    className: S.marketingPageV2TextContainer,
                    children: [
                        k &&
                            (0, i.jsx)(v, {
                                trialOffer: w,
                                discountOffer: D
                            }),
                        (0, i.jsx)(o.X6q, {
                            className: S.marketingPageV2Heading,
                            variant: 'display-sm',
                            color: 'header-primary',
                            children: O.intl.string(O.t.YCZldH)
                        }),
                        U
                            ? (0, i.jsx)(x.Z, {
                                  referrer: M,
                                  isMarketingPageV2Enabled: !0
                              })
                            : V &&
                              (0, i.jsx)('div', {
                                  className: S.affinityDescriptionV2,
                                  children: (0, i.jsx)(_.Z, {
                                      textColor: 'text-normal',
                                      smallerText: !s,
                                      isMarketingPageV2Enabled: !0
                                  })
                              }),
                        L || R
                            ? (0, i.jsx)('div', {
                                  className: l()(S.buttonContainer, S.marketingPageV2CTAContainer, { [S.marketingPageV2CTAMargin]: !(V || U) }),
                                  children: (0, i.jsx)(E.Z, {
                                      className: l()(S.button, I),
                                      forceWhite: !0
                                  })
                              })
                            : (0, i.jsx)(j.PK, {
                                  subscriptionTier: null != (r = null != N ? N : null == w || null == (n = w.subscription_trial) ? void 0 : n.sku_id) ? r : Z,
                                  inOfferExperience: k,
                                  containerClassName: l()(S.marketingPageV2CTAContainer, { [S.marketingPageV2CTAMargin]: !(V || U) }),
                                  buttonClassName: I,
                                  isMarketingPageV2Enabled: !0,
                                  isDarkMode: A
                              }),
                        (0, i.jsx)(j._O, {
                            variant: 'text-md/normal',
                            withBottomMargin: !1,
                            isMarketingPageV2Enabled: !0
                        })
                    ]
                })
            })
        });
    });
