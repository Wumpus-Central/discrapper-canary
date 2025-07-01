(n.d(t, {
    PK: () => T,
    ZP: () => y,
    _O: () => N
}),
    n(953529));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(442837),
    o = n(481060),
    c = n(100527),
    d = n(906732),
    u = n(535322),
    m = n(357355),
    g = n(367074),
    p = n(140465),
    h = n(775412),
    f = n(51574),
    b = n(104494),
    _ = n(639119),
    x = n(736519),
    E = n(784238),
    j = n(422034),
    C = n(206127),
    O = n(474936),
    S = n(388032),
    v = n(909176);
let T = (e) => {
        let { inOfferExperience: t, subscriptionTier: n, containerClassName: r, buttonClassName: s, isApplicationHome: a, isDarkMode: c, isEligibleForBogoPromotion: d } = e,
            u = d
                ? (0, i.jsx)(E.Z, {
                      color: c ? o.Ttl.BRAND_INVERTED : void 0,
                      className: l()(v.button, v.subButton, s, {
                          [v.extendedButton]: t && a,
                          [v.whiteSubButton]: a && !c
                      }),
                      shinyButtonClassName: c ? void 0 : v.tier2Gradient,
                      subscriptionTier: n,
                      hasActivePromotion: !0
                  })
                : (0, i.jsx)(E.Z, {
                      color: c || !a ? o.Ttl.BRAND_INVERTED : void 0,
                      className: l()(v.button, v.subButton, s, {
                          [v.extendedButton]: t && a,
                          [v.whiteSubButton]: a && !c
                      }),
                      subscriptionTier: n
                  }),
            m =
                t && a
                    ? null
                    : (0, i.jsx)(x.Z, {
                          className: l()(v.button, s),
                          color: a ? void 0 : o.Ttl.WHITE
                      });
        return (0, i.jsxs)('div', {
            className: l()(v.buttonContainer, r),
            children: [u, ' ', m]
        });
    },
    I = () =>
        (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(u.A, { className: v.settingsSparkleStar1 }), (0, i.jsx)(u.A, { className: v.settingsSparkleStar2 }), (0, i.jsx)(u.A, { className: v.settingsSparkleStar3 }), (0, i.jsx)(u.A, { className: v.settingsSparkleStar4 })]
        });
function N(e) {
    let { variant: t = 'text-lg/normal', withBottomMargin: n = !0, isApplicationHome: r } = e,
        s = (0, C.$)();
    return (0, i.jsx)(o.Text, {
        variant: t,
        color: r ? 'header-secondary' : 'always-white',
        className: l()(v.description, {
            [v.descriptionBottomMargin]: n,
            [v.descriptionV2]: r
        }),
        children: S.intl.format(S.t.kt9wxs, { cheapestMonthlyPrice: s })
    });
}
let y = r.forwardRef((e, t) => {
    var n, r;
    let { className: s, buttonClassName: u, subscriptionTier: E, isDarkMode: C } = e,
        { analyticsLocations: S } = (0, d.ZP)(c.Z.PREMIUM_MARKETING_HERO_CTA),
        y = (0, h._O)(),
        A = (0, b.Ng)(),
        P = (0, b.Wp)(A, O.Si.TIER_2) ? O.Si.TIER_2 : void 0,
        R = (0, _.N)(),
        D = (0, p.Nx)(),
        Z = (0, g.Vi)(),
        w = (0, a.e7)([m.Z], () => m.Z.affinities).length > 0,
        k = (0, f.ZP)({ location: 'HeroHeading' }),
        L = (0, f.J1)(k);
    return (0, i.jsx)(d.Gt, {
        value: S,
        children: (0, i.jsxs)('div', {
            ref: t,
            className: l()(v.container, s, {
                [v.settingsContainer]: !D,
                [v.affinityHeight]: !D && w
            }),
            'data-testid': 'v2-marketing-page-hero-header',
            children: [
                (0, i.jsxs)('div', {
                    className: D ? v.fullscreenTextContainer : v.settingsTextContainer,
                    children: [
                        (0, i.jsx)(o.X6q, {
                            variant: D ? 'display-lg' : 'display-md',
                            color: 'always-white',
                            children: L
                        }),
                        w
                            ? (0, i.jsx)('div', {
                                  className: v.affinityDescription,
                                  children: (0, i.jsx)(j.Z, {
                                      textColor: 'always-white',
                                      smallerText: !D
                                  })
                              })
                            : (0, i.jsx)(N, {}),
                        Z || y
                            ? (0, i.jsx)('div', {
                                  className: v.buttonContainer,
                                  children: (0, i.jsx)(x.Z, {
                                      className: l()(v.button, u),
                                      color: o.Ttl.WHITE
                                  })
                              })
                            : (0, i.jsx)(T, {
                                  subscriptionTier: null != (r = null != E ? E : null == R || null == (n = R.subscription_trial) ? void 0 : n.sku_id) ? r : P,
                                  inOfferExperience: D,
                                  buttonClassName: u,
                                  isDarkMode: C
                              }),
                        w &&
                            (0, i.jsx)(N, {
                                variant: 'text-md/normal',
                                withBottomMargin: !1
                            })
                    ]
                }),
                !D && (0, i.jsx)(I, {})
            ]
        })
    });
});
