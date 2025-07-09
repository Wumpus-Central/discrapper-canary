(n.d(t, {
    PK: () => N,
    ZP: () => A,
    _O: () => y
}),
    n(953529));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(755721),
    c = n(481060),
    d = n(100527),
    u = n(906732),
    m = n(535322),
    p = n(357355),
    g = n(367074),
    h = n(140465),
    f = n(775412),
    b = n(51574),
    x = n(104494),
    _ = n(639119),
    j = n(736519),
    E = n(784238),
    O = n(422034),
    C = n(206127),
    v = n(474936),
    S = n(388032),
    T = n(909176);
let N = (e) => {
        let { inOfferExperience: t, subscriptionTier: n, containerClassName: r, buttonClassName: s, isApplicationHome: l, isDarkMode: c, isEligibleForBogoPromotion: d } = e,
            u = d
                ? (0, i.jsx)(E.Z, {
                      color: c ? o.Tt.BRAND_INVERTED : void 0,
                      className: a()(T.button, T.subButton, s, {
                          [T.extendedButton]: t && l,
                          [T.whiteSubButton]: l && !c
                      }),
                      shinyButtonClassName: c ? void 0 : T.tier2Gradient,
                      subscriptionTier: n,
                      hasActivePromotion: !0
                  })
                : (0, i.jsx)(E.Z, {
                      color: c || !l ? o.Tt.BRAND_INVERTED : void 0,
                      className: a()(T.button, T.subButton, s, {
                          [T.extendedButton]: t && l,
                          [T.whiteSubButton]: l && !c
                      }),
                      subscriptionTier: n
                  }),
            m =
                t && l
                    ? null
                    : (0, i.jsx)(j.Z, {
                          className: a()(T.button, s),
                          color: l ? void 0 : o.Tt.WHITE
                      });
        return (0, i.jsxs)('div', {
            className: a()(T.buttonContainer, r),
            children: [u, ' ', m]
        });
    },
    I = () =>
        (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(m.A, { className: T.settingsSparkleStar1 }), (0, i.jsx)(m.A, { className: T.settingsSparkleStar2 }), (0, i.jsx)(m.A, { className: T.settingsSparkleStar3 }), (0, i.jsx)(m.A, { className: T.settingsSparkleStar4 })]
        });
function y(e) {
    let { variant: t = 'text-lg/normal', withBottomMargin: n = !0, isApplicationHome: r } = e,
        s = (0, C.$)();
    return (0, i.jsx)(c.Text, {
        variant: t,
        color: r ? 'text-secondary' : 'always-white',
        className: a()(T.description, {
            [T.descriptionBottomMargin]: n,
            [T.descriptionV2]: r
        }),
        children: S.intl.format(S.t.kt9wxs, { cheapestMonthlyPrice: s })
    });
}
let A = r.forwardRef((e, t) => {
    var n, r;
    let { className: s, buttonClassName: m, subscriptionTier: E, isDarkMode: C } = e,
        { analyticsLocations: S } = (0, u.ZP)(d.Z.PREMIUM_MARKETING_HERO_CTA),
        A = (0, f._O)(),
        P = (0, x.Ng)(),
        R = (0, x.Wp)(P, v.Si.TIER_2) ? v.Si.TIER_2 : void 0,
        D = (0, _.N)(),
        Z = (0, h.Nx)(),
        w = (0, g.Vi)(),
        k = (0, l.e7)([p.Z], () => p.Z.affinities).length > 0,
        L = (0, b.ZP)({ location: 'HeroHeading' }),
        B = (0, b.J1)(L);
    return (0, i.jsx)(u.Gt, {
        value: S,
        children: (0, i.jsxs)('div', {
            ref: t,
            className: a()(T.container, s, {
                [T.settingsContainer]: !Z,
                [T.affinityHeight]: !Z && k
            }),
            'data-testid': 'v2-marketing-page-hero-header',
            children: [
                (0, i.jsxs)('div', {
                    className: Z ? T.fullscreenTextContainer : T.settingsTextContainer,
                    children: [
                        (0, i.jsx)(c.X6q, {
                            variant: Z ? 'display-lg' : 'display-md',
                            color: 'always-white',
                            children: B
                        }),
                        k
                            ? (0, i.jsx)('div', {
                                  className: T.affinityDescription,
                                  children: (0, i.jsx)(O.Z, {
                                      textColor: 'always-white',
                                      smallerText: !Z
                                  })
                              })
                            : (0, i.jsx)(y, {}),
                        w || A
                            ? (0, i.jsx)('div', {
                                  className: T.buttonContainer,
                                  children: (0, i.jsx)(j.Z, {
                                      className: a()(T.button, m),
                                      color: o.Tt.WHITE
                                  })
                              })
                            : (0, i.jsx)(N, {
                                  subscriptionTier: null != (r = null != E ? E : null == D || null == (n = D.subscription_trial) ? void 0 : n.sku_id) ? r : R,
                                  inOfferExperience: Z,
                                  buttonClassName: m,
                                  isDarkMode: C
                              }),
                        k &&
                            (0, i.jsx)(y, {
                                variant: 'text-md/normal',
                                withBottomMargin: !1
                            })
                    ]
                }),
                !Z && (0, i.jsx)(I, {})
            ]
        })
    });
});
